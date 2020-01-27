import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    exports: [
        CommonModule,
        MatCardModule,
        MatButtonModule
    ]
})

export class SharedModule {}
