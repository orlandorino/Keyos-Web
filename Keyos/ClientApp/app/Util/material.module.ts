﻿import { NgModule } from '@angular/core';

//All Material Components will be defined here, so there is no need to import them for each component created.

import {
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule, 
    MatInputModule, 
    MatPaginatorModule,
    MatMenuModule, 
    MatTabsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatExpansionModule,
        MatProgressBarModule,
        MatButtonModule,
        MatTableModule,
        MatDialogModule, 
        MatInputModule, 
        MatMenuModule, 
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatTabsModule
    ],
    exports: [
        MatProgressBarModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatExpansionModule,
        MatButtonModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule, 
        MatInputModule, 
        MatMenuModule, 
        MatTabsModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule { }