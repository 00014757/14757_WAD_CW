import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IssueTracker } from './IssueTracker';

@Injectable({
  providedIn: 'root'
})
export class IssueAppService {
  httpClient = inject(HttpClient)
  constructor() { }
  getAll(){return this.httpClient.get<IssueTracker[]>("https://localhost:7253/api/Issues/GetIssues")}

  getAllCategories(){
    return this.httpClient.get("https://localhost:7253/api/Categories/GetCategories");
  }

  createItem(item:any){
    return this.httpClient.post("https://localhost:7253/api/Issues/PostIssue", item); 
  }

  getByID(id:number){
    return this.httpClient.get<IssueTracker>("https://localhost:7253/api/Issues/GetIssue/1"+id)
  }

  delete(id:number){
    return this.httpClient.delete("https://localhost:7253/api/Issues/DeleteIssue"+id)
  }
}
