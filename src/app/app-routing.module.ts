import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path: "produkty", component: ProductsComponent},
  {path: "przepisy", component: RecipesComponent},
  {path: "logowanie", component: LoginComponent},
  {path: "rejestracja", component: SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
