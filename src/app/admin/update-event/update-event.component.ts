import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from './../../services/event.service';
import { Event } from './../../models/event';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  isSubmitted = false
  updateEvent: FormGroup;
  event: Event = new Event();
  constructor(private eventService:EventService,
    public fb: FormBuilder,
    private router:Router,
    public activeModal:NgbActiveModal) {

      this.updateEvent = this.fb.group({
      name: ['', {validators: [ Validators.required,Validators.minLength(4)],updateOn:"blur" }],
      description:  ['', {validators: [ Validators.required,Validators.minLength(4)],updateOn:"blur" }],
      rules:  ['', {validators: [ Validators.required,Validators.minLength(4)],updateOn:"blur" }],
      link:  ['', {validators: [ Validators.required,Validators.minLength(4)],updateOn:"blur" }],
      photo: ['', {validators: [ Validators.required,Validators.minLength(4)],updateOn:"blur" }],
      time:  ['', {validators: [ Validators.required],updateOn:"change" }]
    })

  }


  ngOnInit(): void {
  }


  onUpdateSubmit(_id:any){
    this.isSubmitted = true
    if(this.updateEvent.invalid){
        window.location.reload();
       return;
    }

       this.eventService.updateEvent(_id,this.event).subscribe( data =>{
        this.event=data;
        window.location.reload();

      }, error => console.log(error));

    }

    get getControl(){
    return this.updateEvent.controls;
  }
}
