import { AuthentificationService } from './services/authentification.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthentificationService, private router : Router) {}

  canActivate() {

    if (this.auth.isLoggedIn() == true) {
      return true;

    } else {
      this.router.navigate(['/login']);

      return false;

    }

  }


}
