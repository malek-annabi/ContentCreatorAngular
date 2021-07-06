import { SearchService } from './../services/search.service';
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})

export class HeadComponent implements OnInit {
  term=''
  constructor(public router:Router,public modalService:NgbModal,private searchService:SearchService) { }

  ngOnInit(): void {
    this.loadScript()
    this.searchService.currentTerm.subscribe(term=>this.term=term)
  }
  newTerm(){
    this.searchService.changeTerm(this.term)
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
  loadScript(){
    const dynamicScript=[
      '/assets/js/search.js'
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
