import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatCardModule,
    SharedModule
  ],
  declarations: [
    FeatureComponent,
  ]
})
export class FeatureModule { }
