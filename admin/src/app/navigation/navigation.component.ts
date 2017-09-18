import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: [ './navigation.component.scss' ],
})

export class NavigationComponent {
  @Input() routeState: UrlSegment[];
}
