using System.Collections.Generic;

namespace Express.DomainModel.Models.Securities
{
    public class Role : AuditModel
    {
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<RolePermission> RolePermissions { get; set; }
        public ICollection<UserRole> UsersRoles { get; set; }
    }
}
