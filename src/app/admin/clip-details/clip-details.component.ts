import { AuthService } from './../../services/auth.service';
import { ClipService } from './../../services/clip.service';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-clip-details',
  templateUrl: './clip-details.component.html',
  styleUrls: ['./clip-details.component.css']
})
export class ClipDetailsComponent implements OnInit {
  _id:any;
  clip:any;
  link:any;
    constructor(public router:Router,
    private route: ActivatedRoute,
    private clipService:ClipService,
    private sanitizer: DomSanitizer,
    public authService:AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._id = params['_id'];
    });
    this.clipService.getClip(this._id).subscribe((result:any)=>{
      this.clip=result
      this.clip=this.clip.clip;
    })
    }
    logout() {
      this.authService.doLogout()
    }
    back(){
      this.router.navigate(['admin/clips'])
    }

}
