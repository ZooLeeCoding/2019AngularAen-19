import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class MyAuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private router: Router) {}

  canActivate(): boolean {
    let user = localStorage.getItem("user");
    if(user) {
      return true;
    }
    this.router.navigate(["login", {msg: "Forbidden"}]);
    return false;
  }
  
}
