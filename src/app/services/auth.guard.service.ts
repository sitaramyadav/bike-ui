import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth0.service';
import { CanActivate } from '@angular/router';

@Injectable
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) {
  }

  CanActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.authService.login();
    }
  }
}
