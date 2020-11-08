using Express.DomainModel.Models.Securities;
using Microsoft.EntityFrameworkCore;

namespace Express.Infrastructure.ModelBuilders
{
    public static class RolePermissionModelBuilder
    {
        public static void BuildRolePermissionModel(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RolePermission>().HasKey(x => new { x.RoleId, x.PermissionId });
            modelBuilder.Entity<RolePermission>().HasIndex(x => x.RoleId);
            modelBuilder.Entity<RolePermission>().HasIndex(x => x.PermissionId);
            modelBuilder.Entity<RolePermission>().ToTable("RolePermissions");

            modelBuilder.Entity<RolePermission>().HasOne(x => x.Role).WithMany(x => x.RolePermissions).HasForeignKey(x => x.RoleId);
            modelBuilder.Entity<RolePermission>().HasOne(x => x.Permission).WithMany(x => x.RolePermissions).HasForeignKey(x => x.PermissionId);
        }
    }
}
