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
  id: any;
  clip: Clip = new Clip();
  constructor(private clipService: ClipService,
    private route: ActivatedRoute,
    private router: Router,
    public activeModal: NgbActiveModal) { }


  ngOnInit(): void {
    console.log("hello")
  }
  onUpdateSubmit(_id:any){
    this.clipService.updateClip(_id,this.clip).subscribe( data =>{
      this.clip = data;
    }
    , error => console.log(error));
  }
}
