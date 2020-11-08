using System;

namespace Express.DomainModel.Models.Securities
{
    public class RolePermission : BaseModel
    {
        public Guid RoleId { get; set; }
        public int PermissionId { get; set; }

        public Role Role { get; set; }
        public Permission Permission { get; set; }
    }
}
