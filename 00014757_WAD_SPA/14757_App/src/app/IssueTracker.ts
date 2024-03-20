export interface IssueTracker{
    id: number,
    title: string,
    rank: number,
    categoryId: number,
    category: {
      id: number,
      name: string
    }
}