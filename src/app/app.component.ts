import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag;
/**
 * main app component
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * expot app angular
 */
export class AppComponent {
  /**
   * title
   */
  title = 'app';
  constructor(router: Router){
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-143782781-1', {
        'page_path': event.urlAfterRedirects
      });
    });
  }
}
