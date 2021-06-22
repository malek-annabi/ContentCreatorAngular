import { AuthService } from './services/auth.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ContentCreatorAngular';
  constructor(public authService: AuthService) { }

  logout() {
    this.authService.doLogout()
  }
}
