using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Express.DomainModel.Models.Securities
{
    public class Permission: BaseModel
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Group { get; set; }
        public int Order { get; set; }

        public ICollection<RolePermission> RolePermissions { get; set; }
    }
}
