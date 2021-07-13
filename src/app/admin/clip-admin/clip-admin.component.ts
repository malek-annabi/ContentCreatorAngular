import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClipService } from './../../services/clip.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Clip } from 'src/app/models/clip';
@Component({
  selector: 'app-clip-admin',
  templateUrl: './clip-admin.component.html',
  styleUrls: ['./clip-admin.component.css'],
})
export class ClipAdminComponent implements OnInit {
  isSubmitted = false;
  addClip: FormGroup;
  clip: Clip = new Clip();
  constructor(
    private clipService: ClipService,
    public fb: FormBuilder,
    private router: Router,
    public activeModal: NgbActiveModal
  ) {
    this.addClip = this.fb.group({
      name: ['',{validators: [Validators.required, Validators.minLength(4)],updateOn: 'blur',},],
      description: ['',{validators: [Validators.required, Validators.minLength(4)],updateOn: 'blur',},],
      link: ['',{validators: [Validators.required,Validators.minLength(4),Validators.pattern('^https:\/\/clips.twitch.tv\/.+')],updateOn: 'submit',},],
    });
  }

  ngOnInit(): void {}
  //submit add clip
  onAddSubmit(){
    this.isSubmitted = true
    if(this.addClip.invalid){
       return;
    }

      this.clipService.createClip(this.addClip.value).subscribe((data:any) => {
      this.clip = data;

        window.location.reload();

      }, error => console.log(error));

    }
    get getControl(){
      return this.addClip.controls;
    }
  // onAddSubmit() {
  //if not valid
  //   this.isSubmitted = true;
  //   if (this.addClip.invalid)
  //   return;
  //sending clip
  //   this.clipService.createClip(this.addClip.value).subscribe(
  //     (data: any) => {
  //       this.clip = data;
  //       window.location.reload();
  //server error
  //     },
  //     (error) => console.log(error)
  //   );
  // }
  //gettting controls
  // get getControl() {
  //   return this.addClip.controls;
  // }
}
