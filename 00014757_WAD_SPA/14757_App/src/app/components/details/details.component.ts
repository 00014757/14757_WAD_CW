import { Component, inject } from '@angular/core';
import { IssueTracker } from '../../IssueTracker';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueAppService } from '../../issue-app.service';
import { MatChipsModule } from '@angular/material/chips'
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  serviceIssue= inject(IssueAppService)
  activatedRoute = inject(ActivatedRoute)

item:IssueTracker = {
  id: 1,
  title: "string",
  rank: 0,
  categoryId: 0,
  category: {
    id: 0,
    name: "string"
    }
  }
    ngOnInit(){
      this.serviceIssue.getByID(this.activatedRoute.snapshot.params["id"]).subscribe(r=>{
        this.item = r
      })
    } 
}
