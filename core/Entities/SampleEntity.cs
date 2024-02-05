using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace CERSA.CORE.Entity{
    public class SampleEntity :Models.SkeletonModel
    {
        public SampleEntity(){

        }
        [SetsRequiredMembers]
        public SampleEntity(string name){
            this.Name = name;
            this.CreatedAt = DateTime.Now;
            this.UpdatedAt = DateTime.Now;
        }
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SampleID { set; get; }
        public DateTime Date { get; set; }
        public required string? Name { get; set; }
    }
}