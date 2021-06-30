import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  term='';

  constructor(public router:Router) { }

  ngOnInit(): void {
  }



  moveToWelcome()
  {

    location.href = "#clips"
    this.router.navigate([''])

  }
}