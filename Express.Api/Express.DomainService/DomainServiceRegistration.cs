using Express.DomainModel.DomainServices;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace Express.DomainService
{
    public static class DomainServiceRegistration
    {
        private static bool IsDomainServiceInterface(Type type)
        {
            var listParentInterfaceTypes = type.GetInterfaces();
            return listParentInterfaceTypes.Any(x => x == typeof(IDomainService) || (x.IsGenericType && x.GetGenericTypeDefinition() == typeof(IDomainService)));
        }

        private static void AddDomainService(IServiceCollection services, Type type)
        {
            var interfaceType = type.GetInterfaces().Single(x => IsDomainServiceInterface(x));
            services.AddTransient(interfaceType, type);
        }

        public static IServiceCollection AddDomainServices(this IServiceCollection services)
        {
            services.AddTransient<DomainServiceAggregateArgument>();

            var listDomainServiceTypes = typeof(DomainService).Assembly.GetTypes()
                .Where(x => !x.IsAbstract && x.GetInterfaces().Any(y => IsDomainServiceInterface(y)))
                .ToList();
            listDomainServiceTypes.ForEach(x => AddDomainService(services, x));
            return services;
        }
    }
}
