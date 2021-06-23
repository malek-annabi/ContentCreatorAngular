import { Observable } from 'rxjs';
import { ActivationEnd, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ClipService } from './../services/clip.service';
import { EventService } from './../services/event.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private event:EventService,
    private clip:ClipService,
    public authService:AuthService,
    public router:Router,
    private activatedRoute: ActivatedRoute,
    private clipService: ClipService,
    private eventService: EventService,
    ) { }
  Retour(){
    this.router.navigate(['admin']);
  }
  logout() {
    this.authService.doLogout()
  }
  ngOnInit():void{
    this.event.getEvents().subscribe((result)=>{
      this.events=result
      this.events=this.events.events;
    })
    this.clip.getClips().subscribe((result)=>{
      this.clips=result
      this.clips=this.clips.clips;
    })
  }
  removeClip(id:any): void {
    if(confirm("Are you sure to delete this")) {
    console.log(id)
    this.clipService.deleteClip(id)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
        this.router.navigate(['admin']);
        window.location.reload();
      }
  }
  removeEvent(id:any): void {
    if(confirm("Are you sure to delete this")) {
    this.eventService.deleteEvent(id)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
        this.router.navigate(['admin']);
        window.location.reload();
      }
  }
  updateClip(id: string){
    this.router.navigate(['admin/clips/update', id]);
  }
}
