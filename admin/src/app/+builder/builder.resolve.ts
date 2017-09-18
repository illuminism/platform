import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class BuilderResolve implements Resolve<Observable<Store<any>| boolean>> {

  constructor(private store: Store<any>) {
  }

  resolve() {

    return this.store.select('builder')
      .map(x => x.builder)
      .switchMap(() => {
        return Observable.of(true);
    });
  }

}
