import {  Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  term='';
  constructor(){}
  ngOnInit():void{
    this.loadScript();
  }
  loadScript(){
    const dynamicScript=[
      'https://platform.twitter.com/widgets.js'
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
