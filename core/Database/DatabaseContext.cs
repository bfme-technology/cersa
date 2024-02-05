using CERSA.Core.Entity;
using Microsoft.EntityFrameworkCore;

namespace CERSA.Core.Database{
    public class DatabaseContext : DbContext{
        public DbSet<SampleEntity> tbl_sample { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite($"Data Source={Bootstrap.Config.Database.DBPath}");
         
        protected override void OnModelCreating(ModelBuilder modelBuilder){
            Mocks.SampleMock.FeedData(modelBuilder);
        }
    }
}
