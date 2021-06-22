import { ActivationEnd, Router, ActivatedRoute } from '@angular/router';
import { ClipService } from './../services/clip.service';
import { EventService } from './../services/event.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  events:any;
  clips:any;
  id:any;
  public auth:any;
  role="adminachat";

  constructor(private event:EventService,
    private clip:ClipService,
    public authService:AuthService,
    public router:Router,
    private activatedRoute: ActivatedRoute,
    ) { }
  Retour(){
    this.router.navigate(['admin']);
  }
  logout() {
    this.authService.doLogout()
  }
  ngOnInit():void{
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params.id;
      });
    this.event.getEvents().subscribe((result)=>{
      this.events=result
      this.events=this.events.events;
    })
    this.clip.getClips().subscribe((result)=>{
      this.clips=result
      this.clips=this.clips.clips;
    })
  }
}
