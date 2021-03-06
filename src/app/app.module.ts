import { AsyncpipePipe } from './asyncpipe.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { EventComponent } from './event/event.component';
import { ClipComponent } from './clip/clip.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';
import { AdminComponent } from './admin/admin.component';
import { ClipAdminComponent } from './admin/clip-admin/clip-admin.component';
import { EventAdminComponent } from './admin/event-admin/event-admin.component';
import { UpdateClipComponent } from './admin/update-clip/update-clip.component';
import { UpdateEventComponent } from './admin/update-event/update-event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotifierModule } from 'angular-notifier';
import { DeleteClipComponent } from './admin/delete-clip/delete-clip.component';
import { DeleteEventComponent } from './admin/delete-event/delete-event.component';
import { ClipDetailsComponent } from './admin/clip-details/clip-details.component';
import { EventDetailsComponent } from './admin/event-details/event-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ReversePipe } from './reverse.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    HomeComponent,
    EventComponent,
    ClipComponent,
    LoginComponent,
    AdminComponent,
    ClipAdminComponent,
    EventAdminComponent,
    UpdateClipComponent,
    UpdateEventComponent,
    DeleteClipComponent,
    DeleteEventComponent,
    ClipDetailsComponent,
    EventDetailsComponent,
    AsyncpipePipe,
    ReversePipe,
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NotifierModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
