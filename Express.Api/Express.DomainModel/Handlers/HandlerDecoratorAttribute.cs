using System;

namespace Express.DomainModel.Handlers
{
    [AttributeUsage(AttributeTargets.Class, Inherited = true, AllowMultiple = false)]
    public abstract class HandlerDecoratorAttribute : Attribute
    {
        public abstract Type DecoratorType { get; }

        public static Type ToDecorator(object attribute)
        {
            var type = attribute.GetType();
            var decoratorAttribute = Activator.CreateInstance(type) as HandlerDecoratorAttribute;
            return decoratorAttribute.DecoratorType;
        }
    }
}
