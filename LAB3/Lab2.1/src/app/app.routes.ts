import { Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './card/card.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path:"",
        component: ListProductComponent,
        title:"listOfProducts"
    },
    {
        path:"login",
        component:LoginComponent,
        title:"login"
    },
    {
        path:"register",
        component:RegisterComponent,
        title:"register"
    },
    {
        path:"card",
        component:CardComponent,
        title:"card"
    },
    {
        path:"card_details/:id",
        component:CardDetailsComponent,
        title:"cardDetails"
    },
    {
        path:"**",
        component: NotFoundComponent,
        title:"notFound"
    },
];
