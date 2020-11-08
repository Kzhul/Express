using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Express.DomainModel.Handlers
{
    public static class HandlerRegistration
    {
        private static object[] GetParameters(List<ParameterInfo> parameterInfos, object current, IServiceProvider provider, Type genericHandlerInterfaceType)
        {
            var result = new object[parameterInfos.Count];

            for (int i = 0; i < parameterInfos.Count; i++)
            {
                result[i] = GetParameter(parameterInfos[i], current, provider, genericHandlerInterfaceType);
            }

            return result;
        }

        private static object GetParameter(ParameterInfo parameterInfo, object current, IServiceProvider provider, Type genericHandlerInterfaceType)
        {
            var parameterType = parameterInfo.ParameterType;

            if (IsHandlerInterface(parameterType, genericHandlerInterfaceType))
                return current;

            var service = provider.GetService(parameterType);
            if (service != null)
                return service;

            throw new ArgumentException($"Type {parameterType} not found");
        }

        private static Func<IServiceProvider, object> BuildPipeline(List<Type> pipeline, Type interfaceType, Type genericHandlerInterfaceType)
        {
            var ctors = pipeline
                .Select(x =>
                {
                    var type = x.IsGenericType ? x.MakeGenericType(interfaceType.GenericTypeArguments) : x;
                    return type.GetConstructors().Single();
                })
                .ToList();

            Func<IServiceProvider, object> func = provider =>
            {
                object current = null;

                foreach (ConstructorInfo ctor in ctors)
                {
                    var parameterInfos = ctor.GetParameters().ToList();
                    var parameters = GetParameters(parameterInfos, current, provider, genericHandlerInterfaceType);
                    current = ctor.Invoke(parameters);
                }

                return current;
            };

            return func;
        }

        public static bool IsHandlerInterface(Type type, Type genericHandlerInterfaceType)
        {
            if (!type.IsGenericType) return false;
            var typeDefinition = type.GetGenericTypeDefinition();
            return typeDefinition == genericHandlerInterfaceType;
        }

        public static void AddHandler(IServiceCollection services, Type type, Type genericHandlerInterfaceType)
        {
            var attributes = type.BaseType.GetCustomAttributes(false).ToList();
            attributes.AddRange(type.GetCustomAttributes(false));

            var pipeline = attributes
                .Where(x => x.GetType().BaseType == typeof(HandlerDecoratorAttribute))
                .Select(x => HandlerDecoratorAttribute.ToDecorator(x))
                .Concat(new[] { type })
                .Reverse()
                .ToList();

            var interfaceType = type.GetInterfaces().Single(y => IsHandlerInterface(y, genericHandlerInterfaceType));
            var factory = BuildPipeline(pipeline, interfaceType, genericHandlerInterfaceType);

            services.AddTransient(interfaceType, factory);
        }
    }
}
