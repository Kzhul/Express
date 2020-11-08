using System.Collections.Generic;

namespace Express.Api.Requests.Securities
{
    public class RoleUpdatingRequest
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public IList<int> PermissionIds { get; set; }
    }
}
