using System.Collections.Generic;

namespace Express.DomainModel.Commands.Securities
{
    public class CreateRoleCommand : Command
    {
        public string Name { get; }
        public string Description { get; }
        public IList<int> PermissionIds { get; }

        public CreateRoleCommand(string name, string description, IList<int> permissionIds)
        {
            Name = name;
            Description = description;
            PermissionIds = permissionIds;
        }
    }
}
