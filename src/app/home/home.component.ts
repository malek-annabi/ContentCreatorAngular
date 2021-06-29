import { Clip } from './../models/clip';
import { ClipService } from './../services/clip.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  usecmicrowave = "https://player.twitch.tv/?channel=dope_usec&parent=localhost";
  constructor(){}
  ngOnInit():void{

  }
}
