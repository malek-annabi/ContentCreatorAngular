import { SearchService } from './../services/search.service';
import { EventService } from './../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  term='';
  events:any;
  activeEvents=Array();
  constructor(private event: EventService,private searchService:SearchService) {}
  ngOnInit(): void {
    this.searchService.currentTerm.subscribe(term=>this.term=term)
      this.event.getEvents().subscribe((result) => {
        this.events=result;
        this.events.forEach((element: any) => {
          if (element.status=='active')
          this.activeEvents.push(element);
        });
       } );
  }
}

