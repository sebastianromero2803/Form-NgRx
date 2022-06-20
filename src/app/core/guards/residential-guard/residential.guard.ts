import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { IDeactivateComponent } from '@app-models/deactivateComponent.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidentialGuard implements CanDeactivate<unknown> {
  canDeactivate(component: IDeactivateComponent): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return component.canExit ? component.canExit() : true;

  }
  
}
