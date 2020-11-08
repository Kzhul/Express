using Express.DomainModel.Models.Securities;
using Microsoft.EntityFrameworkCore;

namespace Express.Infrastructure.ModelBuilders
{
    public static class RoleModelBuilder
    {
        public static void BuildRoleModel(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Role>().Property(x => x.Name).IsRequired().HasMaxLength(100);
            modelBuilder.Entity<Role>().Property(x => x.Description).HasMaxLength(4000);

            modelBuilder.Entity<Role>().ToTable("Roles");
        }
    }
}
