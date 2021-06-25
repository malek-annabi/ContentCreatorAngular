import { Router } from '@angular/router';
import { ClipService } from './../../services/clip.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Clip } from 'src/app/models/clip';
@Component({
  selector: 'app-clip-admin',
  templateUrl: './clip-admin.component.html',
  styleUrls: ['./clip-admin.component.css']
})
export class ClipAdminComponent implements OnInit {
  clip: Clip = new Clip();
  constructor(private clipService:ClipService,
    private router:Router,
    public activeModal:NgbActiveModal,) { }

  ngOnInit(): void {
  }
  onAddSubmit(){
    this.clipService.createClip(this.clip).subscribe((data:any) => {
      this.clip = data;
      }, error => console.log(error));
  }
}
