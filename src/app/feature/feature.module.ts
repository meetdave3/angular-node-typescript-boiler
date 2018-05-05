import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeatureComponent} from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatCardModule
  ],
  declarations: [
    FeatureComponent,
  ]
})
export class FeatureModule { }
