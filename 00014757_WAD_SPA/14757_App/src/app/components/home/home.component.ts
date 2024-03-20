import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {IssueTracker} from '../../IssueTracker';
import { MatButtonModule } from '@angular/material/button';
import { IssueAppService } from '../../issue-app.service';
import { Router } from '@angular/router';

// export interface IssueTracker {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: IssueTracker[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  router = inject(Router)
  issueService=inject(IssueAppService)
    itemsList: IssueTracker[]=[];
    ngOnInit(){
      this.issueService.getAll().subscribe((result)=>{
        this.itemsList=result
      })
    }
      // {
      //   "id": 1,
      //   "title": "Widefire",
      //   "rank": 5,
      //   "categoryId": 1,
      //   "category": {
      //     "id": 1,
      //     "name": "Fire"
      //   }
      // },
      // {
      //   "id": 2,
      //   "title": "Dangerous Earthquake",
      //   "rank": 4,
      //   "categoryId": 2,
      //   "category": {
      //     "id": 2,
      //     "name": "Earthquake"
      //   }
      // },
      // {
      //   "id": 3,
      //   "title": "Global Warming",
      //   "rank": 3,
      //   "categoryId": 3,
      //   "category": {
      //     "id": 3,
      //     "name": "Warming"
      //   }
      // },
      // {
      //   "id": 4,
      //   "title": "Lockdown",
      //   "rank": 2,
      //   "categoryId": 4,
      //   "category": {
      //     "id": 4,
      //     "name": "Virus"
      //   }
      // },
      // {
      //   "id": 5,
      //   "title": "Violation if the low",
      //   "rank": 1,
      //   "categoryId": 5,
      //   "category": {
      //     "id": 5,
      //     "name": "Fight"
      //   }
      // }

  displayedColumns: string[] = ['ID', 'Title', 'Rank', 'Category Name', 'Actions'];

  // c(){
  //   console.log("Create")
  //   this.router.navigateByUrl("create")
  // };
  e(id:number){
    console.log("Edit", id)
    this.router.navigateByUrl("edit/"+id)
  };
  dt(id:number){
    this.router.navigateByUrl("details/"+id)
  };
  dl(id:number){
    console.log("Delete", id)
    this.router.navigateByUrl("delete/"+id)
  };
}