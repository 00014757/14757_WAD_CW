using System.ComponentModel.DataAnnotations;

namespace Issue_Tracker.Models
{
    public class Category
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name of the category is required!")]
        public string Name { get; set; }

    }
}
