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
}
