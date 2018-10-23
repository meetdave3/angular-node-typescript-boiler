import { Component, OnInit } from '@angular/core';
import { FeatureService } from './feature.service';

@Component({
    selector: 'app-feature',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.scss'],
    providers: [FeatureService]
})
export class FeatureComponent implements OnInit {

    message: string;

    constructor(private featureService: FeatureService) { }

    ngOnInit() {
        this.featureService.getMessage().subscribe(
            (message: string) => { this.message = message; console.log(this.message); },
            error => { console.error(error); }
        );
    }

}
