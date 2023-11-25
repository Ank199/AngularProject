import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './Book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import {HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { BuyComponent } from './buy/buy.component';

const routes: Routes = [
  {
    path: 'Update/:id',
    component: UpdateBookComponent
  },
  {
    path: 'Add',
    component: AddBookComponent
  },
  {
    path: 'List',
    component: BookComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Cart',
    component: CartComponent
  },
  {
    path: 'Buy',
    component: BuyComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
