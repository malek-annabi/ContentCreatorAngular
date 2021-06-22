import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'events',component:EventComponent},
  {path:'admin/login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule],

})
export class AppRoutingModule { }
