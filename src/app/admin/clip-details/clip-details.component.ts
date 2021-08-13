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
  //used vars
  _id:any;
  clip:any;
  link:any;
    constructor(public router:Router,
    private route: ActivatedRoute,
    private clipService:ClipService,
    private sanitizer: DomSanitizer,
    public authService:AuthService) { }

  ngOnInit(): void {
    this.loadScript();
    // route params
    this.route.params.subscribe(params => {
      this._id = params['_id'];
    });
    // getting clips
    this.clipService.getClip(this._id).subscribe((result:any)=>{
      this.clip=result
      this.clip=this.clip.clip;
    })
    }
    //logout
    logout() {
      this.authService.doLogout()
    }
    //back to pannel
    back(){
      this.router.navigate(['admin/clips'])
    }
    loadScript(){
      const dynamicScript=[
        './assets/js/admin.js'
      ];
      for(let i =0;i<dynamicScript.length;i++){
        const node = document.createElement('script');
        node.src=dynamicScript[i];
        node.type='text/javascript';
        node.async=false;
        node.charset='utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    }
}
