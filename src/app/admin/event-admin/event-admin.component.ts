import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
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


  isSubmitted = false
  addEvent: FormGroup;
  event: Event = new Event();
  constructor(private eventService:EventService,
    public fb: FormBuilder,
    private router:Router,
    public activeModal:NgbActiveModal) {

      this.addEvent = this.fb.group({
      name: ['', {validators: [ Validators.required,Validators.minLength(4)],updateOn:"blur" }],
      description:  ['', {validators: [ Validators.required,Validators.minLength(4)],updateOn:"blur" }],
      rules:  ['', {validators: [ Validators.required,Validators.minLength(4)],updateOn:"blur" }],
      link:  [''],
      photo: ['', {validators: [ Validators.required,Validators.minLength(4)],updateOn:"blur" }],
      time:  ['', {validators: [ Validators.required],updateOn:"change" }]
    })

  }


  ngOnInit(): void {


  }


  onAddSubmit(){


    this.isSubmitted = true


    if(this.addEvent.invalid)
       return;

      this.eventService.createEvent(this.addEvent.value).subscribe((data:any) => {
      this.event = data;

        window.location.reload();

      }, error => console.log(error));

    }

    get getControl(){
    return this.addEvent.controls;
  }
}
