import { Clip } from './../models/clip';
import { ClipService } from './../services/clip.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  clips: SafeResourceUrl[] = Array();

  display = false;
  constructor(private clip: ClipService, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.clip.getClips().subscribe((result: any) => {
      var tab: SafeResourceUrl[] = Array();
      result.clips.forEach((element: string) => {
        // console.log(this.sanitizer.bypassSecurityTrustResourceUrl(element.link.toString()));
        tab.push(
          this.sanitizer.bypassSecurityTrustResourceUrl(element.link.toString())
        );
      });

      //console.table(tab)
      this.clips = tab;
    });
  }
}
