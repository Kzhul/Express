using Express.DomainModel.Models.Securities;
using Microsoft.EntityFrameworkCore;

namespace Express.Infrastructure.ModelBuilders
{
    public static class PermissionModelBuilder
    {
        public static void BuildPermissionModel(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Permission>().Property(x => x.Name).IsRequired().HasMaxLength(100);
            modelBuilder.Entity<Permission>().Property(x => x.Group).IsRequired().HasMaxLength(100);

            modelBuilder.Entity<Permission>().ToTable("Permissions");
        }
    }
}
