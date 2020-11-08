using Express.DomainModel.Models;
using Express.DomainModel.Models.Securities;
using Express.Infrastructure.ModelBuilders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Express.Infrastructure
{
    public class DataContext : DbContext
    {
        public DbSet<Role> Roles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> UsersRoles { get; set; }

        private void UpdateAuditInformation()
        {
            var entries = ChangeTracker.Entries().Where(e => e.Entity is AuditModel && (e.State == EntityState.Added || e.State == EntityState.Modified));
            foreach (var entityEntry in entries)
            {
                var auditModel = (AuditModel)entityEntry.Entity;
                auditModel.CreatedOn = DateTime.UtcNow;
                auditModel.UpdatedOn = DateTime.UtcNow;

                if (entityEntry.State == EntityState.Modified)
                {
                    entityEntry.Property(nameof(auditModel.CreatedBy)).IsModified = false;
                    entityEntry.Property(nameof(auditModel.CreatedOn)).IsModified = false;
                }
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.BuildPermissionModel();
            modelBuilder.BuildRoleModel();
            modelBuilder.BuildRolePermissionModel();
            modelBuilder.BuildUserModel();
            modelBuilder.BuildUserRoleModel();
        }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            ChangeTracker.AutoDetectChangesEnabled = false;
        }

        public override int SaveChanges()
        {
            UpdateAuditInformation();
            return base.SaveChanges();
        }

        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            UpdateAuditInformation();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            UpdateAuditInformation();
            return base.SaveChangesAsync(cancellationToken);
        }

        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default)
        {
            UpdateAuditInformation();
            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }
    }
}
