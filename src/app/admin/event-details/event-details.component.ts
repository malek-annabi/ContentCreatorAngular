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
  //oused variables
  _id:any;
  event:any;
  link:any;
    constructor(public router:Router,
    private route: ActivatedRoute,
    private eventService:EventService,
    private sanitizer: DomSanitizer,
    public authService:AuthService) { }

  ngOnInit(): void {
    this.loadScript();
    //getting route parameters
    this.route.params.subscribe(params => {
      this._id = params['_id'];
    });
    //getting events
    this.eventService.getEvent(this._id).subscribe((result:any)=>{
      this.event=result
      this.event=this.event.event;
    })
    }
    //logout method
    logout() {
      this.authService.doLogout()
    }


    //back to admin pannel
    back(){
      this.router.navigate(['admin/events'])
    }
    loadScript(){
      const dynamicScript=[
        './assets/js/admin.js'
      ];
      for(let i =0;i<dynamicScript.length;i++){
        const node = document.createElement('script');
        node.src=dynamicScript[i];
        node.type='text/javascript';
        node.async=false;
        node.charset='utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    }
}
