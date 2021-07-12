import { SearchService } from './../services/search.service';
import { ClipService } from './../services/clip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css']
})
export class ClipComponent implements OnInit {
  term='';
  clips:any;
  activeClips=Array();
  constructor(private clip: ClipService,private searchService:SearchService) {}
  ngOnInit(): void {
    this.loadScript();
    this.searchService.currentTerm.subscribe(term=>this.term=term)
    console.log(this.term)
    // getting all vlips
    this.clip.getClips().subscribe((result)=>{
      this.clips=result
      // selecting only the active status clips
      this.clips.forEach((element: any) => {
        if (element.status=='active')
        this.activeClips.push(element);
      });
    })
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
