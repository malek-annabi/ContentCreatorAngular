import { EventDetailsComponent } from './admin/event-details/event-details.component';
import { ClipDetailsComponent } from './admin/clip-details/clip-details.component';
import { UpdateClipComponent } from './admin/update-clip/update-clip.component';
import { EventAdminComponent } from './admin/event-admin/event-admin.component';
import { ClipAdminComponent } from './admin/clip-admin/clip-admin.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'events',component:EventComponent},
  {path:'admin/login',component:LoginComponent},
  {path:'admin',component:AdminComponent ,canActivate: [AuthGuard],children :[
    { path: 'clips', component:AdminComponent},
    { path: 'events', component:AdminComponent,}]
  },
  {path:'admin/clips/details/:_id',component:ClipDetailsComponent},
  {path:'admin/events/details/:_id',component:EventDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule],

})
export class AppRoutingModule { }
