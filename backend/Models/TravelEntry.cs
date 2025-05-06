// backend/Models/TravelEntry.cs
namespace backend.Models
{
    public class TravelEntry
    {
        public int Id { get; set; }
        public string Location { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Photos { get; set; }
    }
}
