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
    private router: Router) { }


  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.clipService.getClip(this.id).subscribe((data:any) => {
      this.clip = data;
    }, error => console.log(error));

  }

  onSubmit(){
    this.clipService.updateClip(this.id, this.clip).subscribe( data =>{
      this.router.navigate(['admin']);
    }
    , error => console.log(error));
  }
}
