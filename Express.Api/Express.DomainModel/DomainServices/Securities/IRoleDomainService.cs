using Express.DomainModel.Models.AggregateModels;

namespace Express.DomainModel.DomainServices.Securities
{
    public interface IRoleDomainService : IDomainService
    {
        void CreateRole(AggregateRole aggregateRole);
        void UpdateRole(AggregateRole aggregateRole);
    }
}
