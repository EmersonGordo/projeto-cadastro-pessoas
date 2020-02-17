
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;


namespace PessoasApi.Models
{
    public class mPessoa
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Nome")]
        [JsonProperty("Nome")]
        public string PessoaNome { get; set; }
        
        public string Sexo { get; set; }
        public string Email { get; set; }
        public string DtNascimento { get; set; }
        public string Naturalidade { get; set; }
        public string Nacionalidade { get; set; }
        public string CPF { get; set; }
        public string dtCadastro { get; set; }
        public string dtAtualizacao { get; set; }
    }
}