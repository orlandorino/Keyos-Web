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
    MatDialogModule, 
    MatInputModule, 
    MatPaginatorModule,
    MatMenuModule, 
    MatProgressSpinnerModule
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
        MatDialogModule, 
        MatInputModule, 
        MatMenuModule, 
        MatPaginatorModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule, 
        MatInputModule, 
        MatMenuModule, 
        MatProgressSpinnerModule
    ]
})
export class MaterialModule { }