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
  event:Event=new Event();
  constructor(private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    public activeModal:NgbActiveModal) { }


  ngOnInit(): void {
  }
  onUpdateSubmit(_id:any){
    this.eventService.updateEvent(_id,this.event).subscribe( data =>{
      this.event=data;
    }
    , error => console.log(error));
  }
}
