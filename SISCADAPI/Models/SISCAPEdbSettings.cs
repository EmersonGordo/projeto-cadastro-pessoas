namespace PessoasApi.Models
{
    public class SISCAPEdbSettings: ISISCAPEdbSettings
    {
        public string SISCAPECollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface ISISCAPEdbSettings
    {
        string SISCAPECollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}