import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BasketComponent } from './basket/basket.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { AccountComponent } from './account/account.component';
import { VerifyComponent } from './verify/verify.component';
import { PaycancelComponent } from './paycancel/paycancel.component';
import { PaysuccessComponent } from './paysuccess/paysuccess.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { QuerymenuComponent } from './querymenu/querymenu.component';
import { ViewqueriesComponent } from './viewqueries/viewqueries.component';
import { ClientqueryComponent } from './clientquery/clientquery.component';
import { EditaccountdetailsComponent } from './editaccountdetails/editaccountdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProductComponent,
    ProductdetailComponent,
    LoginComponent,
    RegisterComponent,
    BasketComponent,
    CheckoutComponent,
    AccountComponent,
    VerifyComponent,
    PaycancelComponent,
    PaysuccessComponent,
    ViewordersComponent,
    ResetpasswordComponent,
    QuerymenuComponent,
    ViewqueriesComponent,
    ClientqueryComponent,
    EditaccountdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent, 
 
  
  ]
})
export class AppModule { }
