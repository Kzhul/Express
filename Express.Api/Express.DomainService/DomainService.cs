using Express.DomainModel.DomainServices;

namespace Express.DomainService
{
    public abstract class DomainService : IDomainService
    {
        protected DomainServiceAggregateArgument AggregateArgument { get; }

        protected DomainService(DomainServiceAggregateArgument aggregateArgument)
        {
            AggregateArgument = aggregateArgument;
        }
    }
}
