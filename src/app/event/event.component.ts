import { EventService } from './../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events:any;
  activeEvents=Array();
  constructor(private event: EventService) {}
  ngOnInit(): void {
      this.event.getEvents().subscribe((result) => {
        this.events=result;
        this.events.forEach((element: any) => {
          if (element.status=='active')
          this.activeEvents.push(element);
        });
       } );
  }
}

