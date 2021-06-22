import { ClipService } from './../services/clip.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css']
})
export class ClipComponent implements OnInit {
  links: SafeResourceUrl[] = Array();
  clips:any;
  constructor(private clip: ClipService, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {

    this.clip.getClips().subscribe((result: any) => {
      var tab: SafeResourceUrl[] = Array();
      result.clips.forEach((element: string) => {
        tab.push(
          this.sanitizer.bypassSecurityTrustResourceUrl(element.link.toString())
        );
      });
      this.links = tab;
    });
    this.clip.getClips().subscribe((result) => {this.clips=result;
    this.clips=this.clips.clips;
  })
}

}
