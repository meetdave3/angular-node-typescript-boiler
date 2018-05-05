import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-feature',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

    showLoder: Boolean = false;
    constructor(private router: Router) {

         this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.showLoder = true;
                console.log('event started');
            } else if (event instanceof NavigationEnd) {
                this.showLoder = false;
                console.log('event end');
            }
        });
      }


    ngOnInit() {
    }

}
