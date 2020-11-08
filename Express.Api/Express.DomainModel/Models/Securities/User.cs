using System.Collections.Generic;

namespace Express.DomainModel.Models.Securities
{
    public class User : AuditModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DisplayName { get; set; }
        public string EmailAddress { get; set; }
        public UserStatus Status { get; set; }
        public string Permission { get; set; }

        public ICollection<UserRole> UsersRoles { get; set; }
    }

    public enum UserStatus
    {
        ACTIVED,
        INACTIVED,
        BLOCKED
    }
}
