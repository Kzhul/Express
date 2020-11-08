//using Express.DomainModel.Commands;
//using Express.Shared.Results;
//using Microsoft.Extensions.DependencyInjection;
//using System;
//using System.Threading.Tasks;

//namespace Express.DomainModel.Handlers
//{
//    public class QueryBus
//    {
//        private readonly IServiceProvider _serviceProvider;

//        public QueryBus(IServiceProvider serviceProvider)
//        {
//            _serviceProvider = serviceProvider;
//        }

//        public async Task<IResult> PublishAsync<TCommand>(TCommand command) where TCommand : ICommand
//        {
//            var type = typeof(ICommandHandler<>);
//            var typeArgs = new Type[] { command.GetType() };
//            var handlerType = type.MakeGenericType(typeArgs);

//            using (var scope = _serviceProvider.CreateScope())
//            {
//                var handler = scope.ServiceProvider.GetService(handlerType) as ICommandHandler<TCommand>;
//                var result = await handler.HandleAsync(command).ConfigureAwait(false);
//                return result;
//            }
//        }
//    }
//}
