using Issue_Tracker.Models;

namespace Issue_Tracker.Repositories
{
    public interface ICategoriesRepository
    {
        Task<IEnumerable<Category>> GetAllCategories();
        Task<Category> GetSingleCategory(int id);
        Task CreateCategory(Category category);
        Task UpdateCategory(Category category);
        Task DeleteCategory(int id);

    }
}

