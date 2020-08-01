import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BasketComponent } from './basket/basket.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AccountComponent } from './account/account.component';
import { VerifyComponent } from './verify/verify.component';
import { PaysuccessComponent } from './paysuccess/paysuccess.component';
import { PaycancelComponent } from './paycancel/paycancel.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { ViewqueriesComponent } from './viewqueries/viewqueries.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { QuerymenuComponent } from './querymenu/querymenu.component';
import { ClientqueryComponent } from './clientquery/clientquery.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { EditaccountdetailsComponent } from './editaccountdetails/editaccountdetails.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'basket', component: BasketComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'login', component: LoginComponent },
   { path: 'checkout', component: CheckoutComponent },
   { path: 'account', component: AccountComponent },
   { path: 'verify', component: VerifyComponent },
   { path: 'paycancel', component: PaycancelComponent },
   { path: 'paysuccess', component: PaysuccessComponent },
  { path: 'vieworders', component: ViewordersComponent },
   { path: 'editaccountdetails', component: EditaccountdetailsComponent },
   { path: 'resetpassword', component: ResetpasswordComponent },
 { path: 'querymenu', component: QuerymenuComponent },
  { path: 'viewqueries', component: ViewqueriesComponent},
  { path: 'clientquery', component: ClientqueryComponent},
  { path: 'product', component: ProductComponent},
  { path: 'productdetail', component: ProductdetailComponent},

  

  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
