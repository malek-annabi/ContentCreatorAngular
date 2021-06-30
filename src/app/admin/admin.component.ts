import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Clip } from './../models/clip';
import {NgxPaginationModule} from 'ngx-pagination';
import { DeleteEventComponent } from './../admin/delete-event/delete-event.component';
import { DeleteClipComponent } from './../admin/delete-clip/delete-clip.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventAdminComponent } from './event-admin/event-admin.component';
import { ClipAdminComponent } from './clip-admin/clip-admin.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClipService } from './../services/clip.service';
import { EventService } from './../services/event.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UpdateClipComponent } from './update-clip/update-clip.component';
import { Title } from '@angular/platform-browser';
import { from } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  term='';
  p=0;
  id:any;
  events:any;
  clips:any;
  activeClips=Array();
  activeEvents=Array();
  key: string = 'name'; //set default
  reverse: boolean = false;
  public auth:any;
  constructor(
    private clip:ClipService,
    public authService:AuthService,
    public router:Router,
    private eventService: EventService,
    private modalService: NgbModal,
    private titleService: Title
    ) {}
  logout() {
    this.authService.doLogout()
  }
  ngOnInit():void{
    this.titleService.setTitle('DOPE_USEC ADMIN');
    this.eventService.getEvents().subscribe((result)=>{
      console.log(result)
      this.events=result
      this.events.forEach((element: any) => {
        if (element.status=='active')
        this.activeEvents.push(element);
      });
    })
    this.clip.getClips().subscribe((result)=>{
      console.log(result)
      this.clips=result
      this.clips.forEach((element: any) => {
        if (element.status=='active')
        this.activeClips.push(element);
      });
    })

  }
  openRemoveClip(clip:any): void {
    const modalRef = this.modalService.open(DeleteClipComponent);
    modalRef.componentInstance.name = 'RemoveClip';
    modalRef.componentInstance.clip=clip;
    modalRef.componentInstance.id=clip._id;
  }

  openRemoveEvent(event:any): void {
    const modalRef = this.modalService.open(DeleteEventComponent);
    modalRef.componentInstance.name = 'RemoveEvent';
    modalRef.componentInstance.event=event;
    modalRef.componentInstance.id=event._id;
  }



  openAddClip() {
    const modalRef = this.modalService.open(ClipAdminComponent);
    modalRef.componentInstance.name = 'AddClip';
  }
  openUpdateClip(clip:any) {
    const modalRef = this.modalService.open(UpdateClipComponent);
    modalRef.componentInstance.name = 'UpdateClip';
    modalRef.componentInstance.clip=clip;
    modalRef.componentInstance.id=clip._id;
  }
  openAddEvent() {
    const modalRef = this.modalService.open(EventAdminComponent);
    modalRef.componentInstance.name = 'AddEvent';
  }
  openUpdateEvent(event:any) {
    const modalRef = this.modalService.open(UpdateEventComponent);
    modalRef.componentInstance.name = 'UpdateEvent';
    modalRef.componentInstance.event=event;
    modalRef.componentInstance.id=event._id;
  }

  sort(key:any){
    this.key = key;
    this.reverse = !this.reverse;
  }
}
