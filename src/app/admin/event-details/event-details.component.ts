import { AuthService } from './../../services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { EventService } from './../../services/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  _id:any;
  event:any;
  link:any;
    constructor(public router:Router,
    private route: ActivatedRoute,
    private eventService:EventService,
    private sanitizer: DomSanitizer,
    public authService:AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._id = params['_id'];
    });
    this.eventService.getEvent(this._id).subscribe((result:any)=>{
      this.event=result
      this.event=this.event.event;
      this.link=this.event.link
      this.link=this.sanitizer.bypassSecurityTrustResourceUrl(this.link)
    })
    }
    logout() {
      this.authService.doLogout()
    }
    back(){
      this.router.navigate(['admin/events'])
    }
}
