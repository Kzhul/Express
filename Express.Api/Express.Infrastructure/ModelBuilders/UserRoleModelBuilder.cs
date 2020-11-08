using Express.DomainModel.Models.Securities;
using Microsoft.EntityFrameworkCore;

namespace Express.Infrastructure.ModelBuilders
{
    public static class UserRoleModelBuilder
    {
        public static void BuildUserRoleModel(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserRole>().HasKey(x => new { x.UserId, x.RoleId });
            modelBuilder.Entity<UserRole>().HasIndex(x => x.UserId);
            modelBuilder.Entity<UserRole>().HasIndex(x => x.RoleId);
            modelBuilder.Entity<UserRole>().ToTable("UsersRoles");

            modelBuilder.Entity<UserRole>().HasOne(x => x.User).WithMany(x => x.UsersRoles).HasForeignKey(x => x.UserId);
            modelBuilder.Entity<UserRole>().HasOne(x => x.Role).WithMany(x => x.UsersRoles).HasForeignKey(x => x.RoleId);
        }
    }
}
