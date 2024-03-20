using Issue_Tracker.Models;

namespace Issue_Tracker.Repositories
{
    public interface IIssuesRepository
    {
        Task<IEnumerable<Issue>> GetAllIssues();
        Task<Issue> GetSingleIssue (int id);
        Task CreateIssue(Issue issue);
        Task UpdateIssue(Issue issue);
        Task DeleteIssue(int id);

    }
}
