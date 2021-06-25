import { Event } from './../../models/event';
import { Router } from '@angular/router';
import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styleUrls: ['./event-admin.component.css']
})
export class EventAdminComponent implements OnInit {
  event: Event = new Event();
  constructor(private eventService:EventService,
    private router:Router,
    public activeModal:NgbActiveModal,) { }

  ngOnInit(): void {
  }
  onAddSubmit(){
    this.eventService.createEvent(this.event).subscribe((data:any) => {
      this.event = data;
      window.location.reload();
      }, error => console.log(error));
  }
}
