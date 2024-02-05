using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace CERSA.CORE.Models{
    public abstract class SkeletonModel{
        
        [JsonProperty(PropertyName = "created_at")]
        [JsonPropertyName("created_at")]
        public DateTime CreatedAt { set; get; }

        [JsonProperty(PropertyName = "updated_at")]
        [JsonPropertyName("updated_at")]
        public DateTime UpdatedAt { get; set; }
        
    }
}