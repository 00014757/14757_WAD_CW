import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule } from '@angular/material/button';
import {IssueTracker} from './IssueTracker';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, HomeComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '14757_App';
  itemsList: IssueTracker[]=
  [
    {
      "id": 1,
      "title": "Widefire",
      "rank": 5,
      "categoryId": 1,
      "category": {
        "id": 1,
        "name": "Fire"
      }
    },
    {
      "id": 2,
      "title": "Dangerous Earthquake",
      "rank": 4,
      "categoryId": 2,
      "category": {
        "id": 2,
        "name": "Earthquake"
      }
    },
    {
      "id": 3,
      "title": "Global Warming",
      "rank": 3,
      "categoryId": 3,
      "category": {
        "id": 3,
        "name": "Warming"
      }
    },
    {
      "id": 4,
      "title": "Lockdown",
      "rank": 2,
      "categoryId": 4,
      "category": {
        "id": 4,
        "name": "Virus"
      }
    },
    {
      "id": 5,
      "title": "Violation if the low",
      "rank": 1,
      "categoryId": 5,
      "category": {
        "id": 5,
        "name": "Fight"
      }
    }
  ]
}
