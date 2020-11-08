using Express.DomainModel.Models.Securities;
using Express.DomainModel.Repositories.Securities;

namespace Express.Infrastructure.Repositories.Securities
{
    public class RoleRepository : Repository<Role>, IRoleRepository
    {
        public RoleRepository(RepositoryAggregateArgument aggregateArgument) : base(aggregateArgument)
        {
        }
    }
}
