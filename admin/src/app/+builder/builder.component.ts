import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { BuildClient } from './actions/builder';

@Component({
  moduleId: module.id,
  selector: 'builder',
  templateUrl: 'builder.component.html',
  styleUrls:['builder.component.css']
})

export class BuilderComponent implements OnInit {
  public builder: any;
  public currentRoute: UrlSegment[];
  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.store.select('builder').subscribe(console.log);
  }

  public hitBuilder(): void {
    this.store.dispatch(new BuildClient())
  }
}
