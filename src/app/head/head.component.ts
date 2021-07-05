import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChatbotComponent } from '../chatbot/chatbot.component';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  term='';

  constructor(public router:Router,public modalService:NgbModal) { }

  ngOnInit(): void {
  }

  moveToTop()
  {
    location.href = "#top-page"
    this.router.navigate([''])
  }

  moveToClips()
  {

    location.href = "#clips"
    this.router.navigate([''])

  }
  moveToEvents()
  {

    location.href = "events/#events"
    this.router.navigate(['events'])

  }

  moveToAbout()
  {

    location.href = "#about"
    this.router.navigate([''])

  }
  clickEvent(event:any) {
    // Haven't really got far
    var targetEle = event.srcElement.attributes.class;
  }
  openChatbot() {
    const modalRef = this.modalService.open(ChatbotComponent);
    modalRef.componentInstance.name = 'chatbot';
  }


}
