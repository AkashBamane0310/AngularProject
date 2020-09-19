import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from "./products/products.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from "./admin/admin.component";
import { CheckResponseComponent } from "./check-response/check-response.component";
import { AdminDashComponent } from './admin-dash/admin-dash.component';

const routes: Routes = [
  {path:'', redirectTo: 'products',pathMatch:'full'},

  {path:'products',component:ProductsComponent},

  {path:'login', 
  children:[
        {path:'',component:LoginComponent},
        {path:'register',component:RegisterComponent}
           ],
       
  },
  {path:'cart',
  children:[
     {path:'',component:CartComponent},
     {path:'checkout',
    children:[
      {path:'',component:CheckoutComponent},
      {path:'cheres',component:CheckResponseComponent}

      ],
    },   
  ],
},

  {path:'admin',
  children:[
    {path:'',component:AdminComponent},
    {path:'admin-dash',component:AdminDashComponent},
],
},



  {path:'products',component:ProductsComponent},
  {path:'checkres',component:CheckResponseComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
