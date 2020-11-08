using Express.DomainModel.Models.Securities;
using Microsoft.EntityFrameworkCore;
using System;

namespace Express.Infrastructure.ModelBuilders
{
    public static class UserModelBuilder
    {
        public static void BuildUserModel(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().Property(x => x.Username).IsRequired().HasMaxLength(50);
            modelBuilder.Entity<User>().Property(x => x.Password).IsRequired().HasMaxLength(50);
            modelBuilder.Entity<User>().Property(x => x.FirstName).IsRequired().HasMaxLength(50);
            modelBuilder.Entity<User>().Property(x => x.LastName).IsRequired().HasMaxLength(50);
            modelBuilder.Entity<User>().Property(x => x.DisplayName).IsRequired().HasMaxLength(100);
            modelBuilder.Entity<User>().Property(x => x.EmailAddress).IsRequired().HasMaxLength(50);
            modelBuilder.Entity<User>().Property(x => x.Status).IsRequired().HasMaxLength(20).HasConversion(x => x.ToString(), x => (UserStatus)Enum.Parse(typeof(UserStatus), x));
            modelBuilder.Entity<User>().Property(x => x.Permission).HasMaxLength(4000);

            modelBuilder.Entity<User>().HasIndex(x => x.Username).IsUnique();
            modelBuilder.Entity<User>().HasIndex(x => x.EmailAddress).IsUnique();
            modelBuilder.Entity<User>().ToTable("Users");
        }
    }
}
