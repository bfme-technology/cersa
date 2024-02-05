
using CERSA.Core.Entity;
using Microsoft.EntityFrameworkCore;

namespace CERSA.Core.Database.Mocks{
    public static class SampleMock{
        public static void FeedData(ModelBuilder modelBuilder){
            modelBuilder.Entity<SampleEntity>()
            .HasData(
                new SampleEntity("John Doe") {SampleID=1,Date=DateTime.Today},
                new SampleEntity("John Smith") {SampleID=2,Date=DateTime.Today},
                new SampleEntity("Jesmine Smith") {SampleID=3,Date=DateTime.Today},
                new SampleEntity("Om Prakash") {SampleID=4,Date=DateTime.Today}
            );
        }
    }
}