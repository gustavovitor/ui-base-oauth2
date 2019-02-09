import { Component } from '@angular/core';
import { LogoutService } from './services/security/logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private logoutService: LogoutService) { }

  logout() {
    this.logoutService.logout();
  }
}
