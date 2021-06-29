import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Event } from './../../models/event';
import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {
  event: Event = new Event();
  constructor(private eventService:EventService,
    private router:Router,
    public activeModal:NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  //delete method
  onDelete(_id:any){
      this.eventService.deleteEvent(_id).subscribe((res:any) => {
      window.location.reload();
      }, error => console.log(error));
    }
}
