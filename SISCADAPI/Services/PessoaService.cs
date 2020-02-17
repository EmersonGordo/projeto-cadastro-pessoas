
using PessoasApi.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;


namespace PessoasApi.Services
{
    public class PessoaService
    {
        
        private readonly IMongoCollection<mPessoa> _pessoas;

        public  PessoaService(ISISCAPEdbSettings settings)
        {
            
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _pessoas = database.GetCollection<mPessoa>(settings.SISCAPECollectionName);
        }


        public List<mPessoa> Get() =>
            _pessoas.Find(pessoa => true).ToList();

        public mPessoa Get(string id) =>
            _pessoas.Find<mPessoa>(pessoa => pessoa.Id == id).FirstOrDefault();

        public mPessoa Create(mPessoa pessoa)
        {
            _pessoas.InsertOne(pessoa);
            return pessoa;
        }

        public void Update(string id, mPessoa pessoaIn) =>
            _pessoas.ReplaceOne(pessoa => pessoa.Id == id, pessoaIn);

        public void Remove(mPessoa pessoaIn) =>
            _pessoas.DeleteOne(pessoa => pessoa.Id == pessoaIn.Id);

        public void Remove(string id) => 
            _pessoas.DeleteOne(pessoa => pessoa.Id == id);


    }
}