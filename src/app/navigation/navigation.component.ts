import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnChanges {
  @Output() navigationChange = new EventEmitter();
  @Input() activeUrl: string;

  constructor(public router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const currentURL = event.url.split('/');
      this.activeUrl = currentURL[currentURL.length - 1];
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.activeUrl) {
      this.activeUrl = changes.activeUrl.currentValue;
      this.router.navigate([this.activeUrl]);
    }
  }

  navigation(route) {
    this.navigationChange.emit(route);
    this.router.navigate([route]);
  }

}
