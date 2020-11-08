using Express.DomainModel.Models.Securities;
using Express.DomainModel.Repositories.Securities;

namespace Express.Infrastructure.Repositories.Securities
{
    public class RolePermissionRepository : Repository<RolePermission>, IRolePermissionRepository
    {
        public RolePermissionRepository(RepositoryAggregateArgument aggregateArgument) : base(aggregateArgument)
        {
        }
    }
}
