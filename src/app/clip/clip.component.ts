import { ClipService } from './../services/clip.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css']
})
export class ClipComponent implements OnInit {
  clips:any;
  constructor(private clip: ClipService, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.clip.getClips().subscribe((result)=>{
      this.clips=result
      this.clips=this.clips.clips;
    })
}
}
