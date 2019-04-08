import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthenticationService } from '../services';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private storageService: StorageService
  ) { }

  private verificarAcesso() {
    // if (this.authenticationService) {
    //   return true;
    // }
    // this.router.navigate(['/login']);
    // return false;
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.storageService.getLocalUser() !== null) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['login']);
    return false;
  }


  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canLoad: verificando se usuário pode carregar o cod módulo');

    return true;
  }


}