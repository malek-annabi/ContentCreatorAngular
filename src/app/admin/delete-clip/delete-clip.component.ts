import { Clip } from 'src/app/models/clip';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClipService } from './../../services/clip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-clip',
  templateUrl: './delete-clip.component.html',
  styleUrls: ['./delete-clip.component.css']
})
export class DeleteClipComponent implements OnInit {
  clip: Clip = new Clip();
  constructor(private clipService:ClipService,
    private router:Router,
    public activeModal:NgbActiveModal) {
  }

  ngOnInit(): void {
  }


  onDelete(_id:any){
      this.clipService.deleteClip(_id).subscribe((res:any) => {
      window.location.reload();
      }, error => console.log(error));
    }
}
