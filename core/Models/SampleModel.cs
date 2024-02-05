using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace CERSA.Core.Models{
    public class SampleModel: SkeletonModel{
        public SampleModel(){

        }
        [SetsRequiredMembers]
        public SampleModel(string name){
            this.Name = name;
        }
        
        [JsonProperty(PropertyName = "sample_id")]
        [JsonPropertyName("sample_id")]
        public int SampleID { set; get; }
        public DateTime Date { get; set; }
        public required string? Name { get; set; }
    }
}