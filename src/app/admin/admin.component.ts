import { DeleteEventComponent } from './../admin/delete-event/delete-event.component';
import { DeleteClipComponent } from './../admin/delete-clip/delete-clip.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventAdminComponent } from './event-admin/event-admin.component';
import { ClipAdminComponent } from './clip-admin/clip-admin.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClipService } from './../services/clip.service';
import { EventService } from './../services/event.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UpdateClipComponent } from './update-clip/update-clip.component';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  id:any;
  events:any;
  clips:any;
  public auth:any;
  constructor(
    private clip:ClipService,
    public authService:AuthService,
    public router:Router,
    private activatedRoute: ActivatedRoute,
    private clipService: ClipService,
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
      this.events=result
      this.events=this.events.events;
    })
    this.clip.getClips().subscribe((result)=>{
      this.clips=result
      this.clips=this.clips.clips;
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
}
