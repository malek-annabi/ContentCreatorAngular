import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styleUrls: ['./event-admin.component.css']
})
export class EventAdminComponent implements OnInit {

  // event = {
  //   name:'',
  //   link: '',
  //   description: '',
  //  postedBy: '',
  //  rules:'',
  //  photo:''

  // };
  // submitted = false;
  // constructor(private eventService:EventService) { }

  ngOnInit(): void {
  }
  // createClip(): void {
  //   const data = {
  //     nom: this.event.name,
  //     link: this.event.link,
  //     description: this.event.description,
  //     postedBy: this.event.postedBy,
  //   };

  //   this.eventService.createEvent(data)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.submitted = true;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // newEvent(): void {
  //   this.submitted = false;
  //   this.event = {
  //   name:'',
  //   link: '',
  //   description: '',
  //  postedBy: '',
  //  rules:'',
  //  photo:''
  //   };
  // }
}
