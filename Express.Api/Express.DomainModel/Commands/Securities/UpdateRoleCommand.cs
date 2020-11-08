using System;
using System.Collections.Generic;

namespace Express.DomainModel.Commands.Securities
{
    public class UpdateRoleCommand : Command
    {
        public Guid Id { get; }
        public string Name { get; }
        public string Description { get; }
        public IList<int> PermissionIds { get; }

        public UpdateRoleCommand(Guid id, string name, string description, IList<int> permissionIds)
        {
            Id = id;
            Name = name;
            Description = description;
            PermissionIds = permissionIds;
        }
    }
}
