import { Component, inject } from '@angular/core'; 
import { MatChipsModule } from '@angular/material/chips'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button'; 
import { ActivatedRoute, Router } from '@angular/router'; 
import { IssueTracker } from '../../IssueTracker';
import { IssueAppService } from '../../issue-app.service';
 
@Component({ 
  selector: 'app-delete', 
  standalone: true, 
  imports: [MatChipsModule, MatCardModule, MatButtonModule], 
  templateUrl: './delete.component.html', 
  styleUrl: './delete.component.css'
}) 
export class DeleteComponent { 
  deleteIssue:IssueTracker={ 
    id:0, 
    title:"", 
    rank:1, 
    categoryId:0, 
    category:{ 
      id:0, 
      name:""     
    } 
  } 
  service = inject(IssueAppService) 
  activateRote= inject(ActivatedRoute) 

  router = inject(Router) 
  ngOnInit(){ 
    this.service.getByID(this.activateRote.snapshot.params["id"]).subscribe((result)=>{ 
      this.deleteIssue = result 
    }); 
  } 
  onHomeButtonClick(){ 
    this.router.navigateByUrl("home") 
  } 
  onDeleteButtonClick(id:number){ 
    this.service.delete(id).subscribe(r=>{ 
      this.router.navigateByUrl("home") 
    }); 
  } 
}