using Issue_Tracker.Models;
using Microsoft.EntityFrameworkCore;

namespace Issue_Tracker.Data
{
    public class IssueTrackerDbContext: DbContext
    {
        public IssueTrackerDbContext(DbContextOptions<IssueTrackerDbContext> options) : base(options) { }

        public DbSet<Issue> Issues { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
