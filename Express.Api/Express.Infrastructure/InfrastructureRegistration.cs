using Express.DomainModel.Repositories;
using Express.Infrastructure.Repositories;
using Express.Shared;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Data;
using System.Linq;
using T2P.CON.MasterDataService.Infrastructures.Repositories;

namespace Express.Infrastructure
{
    public static class InfrastructureRegistration
    {
        private static bool IsRepositoryInterface(Type type)
        {
            var listParentInterfaceTypes = type.GetInterfaces();
            return listParentInterfaceTypes.Any(x => x == typeof(IRepository) || (x.IsGenericType && x.GetGenericTypeDefinition() == typeof(IRepository<>)));
        }

        private static void AddRepository(IServiceCollection services, Type type)
        {
            var interfaceType = type.GetInterfaces().Single(x => IsRepositoryInterface(x));
            services.AddTransient(interfaceType, type);
        }

        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            services.AddDbContext<DataContext>((provider, option) =>
            {
                var appSettings = provider.GetService<IOptions<AppSettings>>().Value;
                option.UseSqlServer(appSettings.ConnectionString);
            });
            services.AddTransient<IDbConnection>(provider =>
            {
                var appSettings = provider.GetService<IOptions<AppSettings>>().Value;
                return new SqlConnection(appSettings.ConnectionString);
            });
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddTransient<RepositoryAggregateArgument>();
            services.AddTransient(typeof(IRepository<>), typeof(Repository<>));

            var listRepositoryTypes = typeof(Repository<>).Assembly.GetTypes()
                .Where(x => !x.IsAbstract && x.GetInterfaces().Any(y => IsRepositoryInterface(y)))
                .ToList();
            listRepositoryTypes.ForEach(x => AddRepository(services, x));
            return services;
        }
    }
}
