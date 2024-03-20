using Issue_Tracker.Models;
using Issue_Tracker.Data;
using Microsoft.EntityFrameworkCore;

namespace Issue_Tracker.Repositories
{
    public class CategoriesRepository : ICategoriesRepository
    {
        private readonly IssueTrackerDbContext _dbContext;

        public CategoriesRepository(IssueTrackerDbContext dbContext)
        {   
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Category>> GetAllCategories()
        {
            var categories = await _dbContext.Categories.ToListAsync();
            return categories;
        }

        public async Task<Category> GetSingleCategory(int id)
        {
            return await _dbContext.Categories.FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task CreateCategory(Category category)
        {
            await _dbContext.Categories.AddAsync(category);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteCategory(int id)
        {
            var category = await _dbContext.Categories.FindAsync(id);
            if (category != null)
            {
                _dbContext.Categories.Remove(category);
                await _dbContext.SaveChangesAsync();
            }
        }

        public async Task UpdateCategory(Category category)
        {
            _dbContext.Entry(category).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }
    }
}
