import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './feature.component';

const featureRoutes: Routes = [
  { path: '', component: FeatureComponent }
];

@NgModule({
    imports: [RouterModule.forChild(featureRoutes)],
    exports: [RouterModule]
})

export class FeatureRoutingModule {}

