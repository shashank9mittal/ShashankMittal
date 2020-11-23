import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  currentSection = 'intro';
  currentUrl: string;

  constructor(public router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const currentURL = event.url.split('/');
      this.currentUrl = currentURL[currentURL.length - 1];
    });
  }

  ngOnInit() {
  }

  onSectionChange(sectionId: string) {
    console.log(sectionId);
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }
}
