using Issue_Tracker.Data;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Issue_Tracker.Models
{
    public class Issue
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Title of the issue is required")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Rank of the issue is required")]
        [Range(1, Double.MaxValue, ErrorMessage = "Min rank value is 0.1!")]
        public int Rank { get; set; }

        [Required(ErrorMessage = "Category of the issue is required")]
        public int? CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public Category? Category { get; set; }


    }
}
