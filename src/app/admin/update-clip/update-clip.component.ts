import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { ClipService } from './../../services/clip.service';
import { Clip } from './../../models/clip';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-clip',
  templateUrl: './update-clip.component.html',
  styleUrls: ['./update-clip.component.css']
})
export class UpdateClipComponent implements OnInit {
  isSubmitted = false
  updateClip: FormGroup;
  clip: Clip = new Clip();
  constructor(private clipService:ClipService,
    public fb: FormBuilder,
    private router:Router,
    public activeModal:NgbActiveModal) {

      this.updateClip = this.fb.group({
      name: ['', {validators: [ Validators.required,Validators.minLength(4)],updateOn:"blur" }],
      description:  ['', {validators: [ Validators.required,Validators.minLength(4)],updateOn:"blur" }],
      link:  ['', {validators: [ Validators.required,Validators.minLength(4)],updateOn:"blur" }],
    })

  }

  ngOnInit(): void {
  }


  onUpdateSubmit(_id:any):void{
    this.isSubmitted = true
    if(this.updateClip.invalid){
      window.location.reload();
       return;
    }
      this.clipService.updateClip(_id,this.updateClip.value).subscribe((data:any) => {
      this.clip = data;
      window.location.reload();
      }, error => console.log(error));
    }
    get getControl(){
    return this.updateClip.controls;
  }
}
