import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'builder',
  templateUrl: 'builder.component.html',
  styleUrls:['builder.component.css']
})

export class BuilderComponent implements OnInit {
  public builder: any;
  public currentRoute: UrlSegment[];
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.builder = this.route.snapshot.data['builderState'];
    console.log(this.builder)
    this.currentRoute = this.route.snapshot.data['routeState'];
  }
}
