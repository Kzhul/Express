using System;
using System.ComponentModel.DataAnnotations;

namespace Express.DomainModel.Models
{
    public abstract class AuditModel : BaseModel
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        [Required]
        public DateTime CreatedOn { get; set; }
        [Required]
        public Guid CreatedBy { get; set; }
        [Required]
        public DateTime UpdatedOn { get; set; }
        [Required]
        public Guid UpdatedBy { get; set; }
        [Required]
        public bool Deleted { get; set; }
    }
}
