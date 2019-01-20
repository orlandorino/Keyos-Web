import { NgModule } from '@angular/core';

//All Material Components will be defined here, so there is no need to import them for each component created.

import {
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
    ]
})
export class MaterialModule { }