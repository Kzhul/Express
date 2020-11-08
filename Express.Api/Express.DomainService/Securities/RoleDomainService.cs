using Express.DomainModel.DomainServices.Securities;
using Express.DomainModel.Models.AggregateModels;
using Express.DomainModel.Repositories.Securities;

namespace Express.DomainService.Securities
{
    public class RoleDomainService : DomainService, IRoleDomainService
    {
        private readonly IRoleRepository _roleRepository;
        private readonly IRolePermissionRepository _rolePermissionRepository;

        public RoleDomainService(DomainServiceAggregateArgument aggregateArgument,
            IRoleRepository roleRepository,
            IRolePermissionRepository rolePermissionRepository)
            : base(aggregateArgument)
        {
            _roleRepository = roleRepository;
            _rolePermissionRepository = rolePermissionRepository;
        }

        public void CreateRole(AggregateRole aggregateRole)
        {
            var role = aggregateRole.Role;
            role.RolePermissions = aggregateRole.Permissions;
            _roleRepository.Insert(role);
        }

        public void UpdateRole(AggregateRole aggregateRole)
        {
            _roleRepository.Update(aggregateRole.Role);
            _rolePermissionRepository.Delete(x => x.RoleId == aggregateRole.Role.Id);
            _rolePermissionRepository.InsertRange(aggregateRole.Permissions);
        }
    }
}
