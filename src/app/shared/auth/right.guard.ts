import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root',
})
export class RightGuard implements CanActivate {
  constructor(private currentUser: CurrentUserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.currentUser.hasRight(route.data['right']);
  }
}
