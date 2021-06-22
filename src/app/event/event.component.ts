import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EventService } from './../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  links: SafeResourceUrl[] = Array();
  events:any;
  constructor(private event: EventService, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.event.getEvents().subscribe((result: any) => {
      var tab: SafeResourceUrl[] = Array();
      result.events.forEach((element: string) => {
        console.log(element);
        tab.push(
          this.sanitizer.bypassSecurityTrustResourceUrl(element.link.toString())

        );
      });
      this.links = tab;
    });
    this.event.getEvents().subscribe((result) => {this.events=result;
      this.events=this.events.events;
    })
}
}
