using Newtonsoft.Json;

namespace Keyos.Models
{
    public class Payment
    {
        public partial class Token
        {
            [JsonProperty("id")]
            public string Id { get; set; }

            [JsonProperty("object")]
            public string Object { get; set; }

            [JsonProperty("card")]
            public Card Card { get; set; }

            [JsonProperty("client_ip")]
            public object ClientIp { get; set; }

            [JsonProperty("created")]
            public long Created { get; set; }

            [JsonProperty("livemode")]
            public bool Livemode { get; set; }

            [JsonProperty("type")]
            public string Type { get; set; }

            [JsonProperty("used")]
            public bool Used { get; set; }

            [JsonProperty("email")]
            public string Email { get; set; }
        }

        public partial class Card
        {
            [JsonProperty("id")]
            public string Id { get; set; }

            [JsonProperty("object")]
            public string Object { get; set; }

            [JsonProperty("address_city")]
            public object AddressCity { get; set; }

            [JsonProperty("address_country")]
            public object AddressCountry { get; set; }

            [JsonProperty("address_line1")]
            public object AddressLine1 { get; set; }

            [JsonProperty("address_line1_check")]
            public object AddressLine1Check { get; set; }

            [JsonProperty("address_line2")]
            public object AddressLine2 { get; set; }

            [JsonProperty("address_state")]
            public object AddressState { get; set; }

            [JsonProperty("address_zip")]
            public object AddressZip { get; set; }

            [JsonProperty("address_zip_check")]
            public object AddressZipCheck { get; set; }

            [JsonProperty("brand")]
            public string Brand { get; set; }

            [JsonProperty("country")]
            public string Country { get; set; }

            [JsonProperty("cvc_check")]
            public object CvcCheck { get; set; }

            [JsonProperty("dynamic_last4")]
            public object DynamicLast4 { get; set; }

            [JsonProperty("exp_month")]
            public long ExpMonth { get; set; }

            [JsonProperty("exp_year")]
            public long ExpYear { get; set; }

            [JsonProperty("fingerprint")]
            public string Fingerprint { get; set; }

            [JsonProperty("funding")]
            public string Funding { get; set; }

            [JsonProperty("name")]
            public string Name { get; set; }

            [JsonProperty("tokenization_method")]
            public object TokenizationMethod { get; set; }
        }
    }
}
