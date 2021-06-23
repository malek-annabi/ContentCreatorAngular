import { ClipService } from './../../services/clip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clip-admin',
  templateUrl: './clip-admin.component.html',
  styleUrls: ['./clip-admin.component.css']
})
export class ClipAdminComponent implements OnInit {
  clip = {
    name:'',
    link: '',
    description: '',
   postedBy: '',

  };
  submitted = false;
  constructor(private clipService:ClipService) { }

  ngOnInit(): void {

  }
  createClip(): void {
    const data = {
      name: this.clip.name,
      link: this.clip.link,
      description: this.clip.description,
      postedBy: this.clip.postedBy,
    };

    this.clipService.createClip(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newClip(): void {
    this.submitted = false;
    this.clip = {
    name:'',
    link: '',
    description: '',
   postedBy: '',
    };
  }
}
