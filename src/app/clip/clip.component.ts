import { ClipService } from './../services/clip.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css']
})
export class ClipComponent implements OnInit {
  term='';
  clips:any;
  activeClips=Array();
  constructor(private clip: ClipService, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    // getting all vlips
    this.clip.getClips().subscribe((result)=>{
      this.clips=result
      this.clips=this.clips.clips;
      // selecting only the active status clips
      this.clips.forEach((element: any) => {
        if (element.status=='active')
        this.activeClips.push(element);
      });
    })
}
}
