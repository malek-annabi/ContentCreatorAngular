import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ClipService } from './../../services/clip.service';
import { Clip } from './../../models/clip';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-clip',
  templateUrl: './update-clip.component.html',
  styleUrls: ['./update-clip.component.css']
})
export class UpdateClipComponent implements OnInit {
  //vars
  isSubmitted = false
  updateClip: FormGroup;
  clip: Clip = new Clip();
  constructor(private clipService:ClipService,
    public fb: FormBuilder,
    private router:Router,
    public activeModal:NgbActiveModal) {
      //form and validartors
      this.updateClip = this.fb.group({
      name: ['', {validators: [ Validators.required,Validators.minLength(4)],updateOn:"blur" }],
      description:  ['', {validators: [ Validators.required,Validators.minLength(4)],updateOn:"blur" }],
      link:  ['', {validators: [ Validators.required,Validators.minLength(4),Validators.pattern('^https:\/\/clips.twitch.tv\/[\s\S]+')],updateOn:"blur" }],
    })

  }

  ngOnInit(): void {
  }

  //update clip

  onUpdateSubmit(_id:any):void{
    //if invailid reload to show the clip infos agian so the user don't have to write them himself again
    this.isSubmitted = true
    if(this.updateClip.invalid){
      window.location.reload();
       return;
    }
    // sending new clip infos
    this.clipService.updateClip(_id,this.updateClip.value).subscribe((data:any) => {
      this.clip = data;
      window.location.reload();
      //server errors
      }, error => console.log(error));
    }
    //getting controls
    get getControl(){
    return this.updateClip.controls;
  }
}
