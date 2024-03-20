import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { DeleteComponent } from './components/delete/delete.component';
import { CreateComponent } from './components/crete/crete.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "create",
        component: CreateComponent
    },
    {
        path: "details/:id",
        component: DetailsComponent
    },
    {
        path: "edit/:id",
        component: HomeComponent
    },
    {
        path: "delete/:id",
        component: DeleteComponent
    }
];
