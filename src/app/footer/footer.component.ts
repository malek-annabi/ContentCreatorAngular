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
    this.buttonName = "Hide";
    this.show = !this.show;
  }
}
