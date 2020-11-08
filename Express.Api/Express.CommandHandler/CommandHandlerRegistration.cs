using Express.DomainModel.Commands;
using Express.DomainModel.Handlers;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace Express.CommandHandler
{
    public static class CommandHandlerRegistration
    {
        public static IServiceCollection AddCommandHandlers(this IServiceCollection services)
        {
            services.AddSingleton<CommandBus>();
            services.AddTransient<CommandHandlerAggregateArgument>();

            var listHandlerTypes = typeof(CommandHandlerRegistration).Assembly.GetTypes()
                .Where(x => !x.IsAbstract && x.Name.EndsWith("Handler", StringComparison.InvariantCulture) && x.GetInterfaces().Any(y => HandlerRegistration.IsHandlerInterface(y, typeof(ICommandHandler<>))))
                .ToList();
            listHandlerTypes.ForEach(x => HandlerRegistration.AddHandler(services, x, typeof(ICommandHandler<>)));
            return services;
        }
    }
}
