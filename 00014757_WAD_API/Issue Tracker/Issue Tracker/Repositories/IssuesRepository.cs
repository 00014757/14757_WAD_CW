using Issue_Tracker.Models;
using Issue_Tracker.Data;
using Microsoft.EntityFrameworkCore;

namespace Issue_Tracker.Repositories
{
    public class IssuesRepository : IIssuesRepository
    {
        private readonly IssueTrackerDbContext _dbContext;

        public IssuesRepository(IssueTrackerDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Issue>> GetAllIssues()
        {
            var issues = await _dbContext.Issues.Include(b => b.Category).ToListAsync();
            return issues;
        }

        public async Task<Issue> GetSingleIssue(int id)
        {
            return await _dbContext.Issues.Include(b => b.Category).FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task CreateIssue(Issue issue)
        {
            await _dbContext.Issues.AddAsync(issue);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteIssue(int id)
        {
            var issue = await _dbContext.Issues.FindAsync(id);
            if (issue != null)
            {
                _dbContext.Issues.Remove(issue);
                await _dbContext.SaveChangesAsync();
            }
        }

        public async Task UpdateIssue(Issue issue)
        {
            _dbContext.Entry(issue).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }
    }
}
