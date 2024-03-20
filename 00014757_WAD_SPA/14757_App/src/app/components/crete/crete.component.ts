import { Component, inject } from '@angular/core';
import { IssueAppService } from '../../issue-app.service';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-crete',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, MatButtonModule],
  templateUrl: './crete.component.html',
  styleUrl: './crete.component.css'
})
export class CreateComponent {
  serviceIssue = inject(IssueAppService)
  router = inject(Router)

  categories:any

  itemIssue: any ={
    title:"",
    rank: 0,
    categoryID: 0
  }

  selectedCategoryID: number=0

  ngOnInit(){
    this.serviceIssue.getAllCategories().subscribe(result=>{
      this.categories = result
    });
  }

  onCreateBtn(){
    this.itemIssue.categoryID = this.selectedCategoryID
    this.serviceIssue.createItem(this.itemIssue).subscribe(result => {
      console.log(result)
      alert("Created")
      this.router.navigateByUrl("home")
    })
  }
}
