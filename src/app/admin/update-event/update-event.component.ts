import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from './../../services/event.service';
import { Event } from './../../models/event';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  id: any;
  event: Event = new Event();
  constructor(private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    public activeModal:NgbActiveModal) { }


  ngOnInit(): void {
  }
  onUpdateSubmit(_id:any){
    this.id = _id
    this.eventService.getEvent(this.id).subscribe((data:any) => {
      console.log(data)
      this.event = data;
      }, error => console.log(error));
    this.eventService.updateEvent(this.id,this.event).subscribe( data =>{
      console.log(data)
    }
    , error => console.log(error));
  }
}
