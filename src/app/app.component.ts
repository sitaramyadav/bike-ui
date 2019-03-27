import { Component } from '@angular/core';
import { AuthService } from './services/auth0.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bike-ui';

  constructor(private authService: AuthService) {
    authService.handleAuthentication();
  }
}
