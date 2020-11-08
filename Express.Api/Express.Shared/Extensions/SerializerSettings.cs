using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Express.Shared.Extensions
{
    public static class SerializerSettings
    {
        public static readonly JsonSerializerSettings JsonSettings = new JsonSerializerSettings
        {
            NullValueHandling = NullValueHandling.Ignore,
            ContractResolver = new CamelCasePropertyNamesContractResolver()
        };
    }
}
