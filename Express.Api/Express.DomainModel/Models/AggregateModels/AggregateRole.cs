using Express.DomainModel.Models.Securities;
using System.Collections.Generic;

namespace Express.DomainModel.Models.AggregateModels
{
    public class AggregateRole : AggregateRoot
    {
        public Role Role { get; set; }
        public IList<RolePermission> Permissions { get; set; }
    }
}
