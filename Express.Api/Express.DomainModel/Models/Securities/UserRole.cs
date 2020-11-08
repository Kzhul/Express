﻿using System;

namespace Express.DomainModel.Models.Securities
{
    public class UserRole : BaseModel
    {
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }

        public User User { get; set; }
        public Role Role { get; set; }
    }
}
