import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";
@Injectable()
export class NavigationResolve implements Resolve<Observable<UrlSegment[]>> {

  constructor() {
  }

  public resolve(route: ActivatedRouteSnapshot) {
    return Observable.of(route.url);
  }
}
