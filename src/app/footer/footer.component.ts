import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public show=false;
  public buttonName = 'Show';

  constructor() { }
  ngOnInit(){
    this.loadScript()
    setTimeout(() =>
    {
        this.show=true;
    },
    3000);
    }



  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  close(){
    if(!this.show){
    this.buttonName = "Hide";
    this.show = !this.show;
  }
  }
  loadScript(){
    const dynamicScript=[
      './assets/js/footer.js'
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
