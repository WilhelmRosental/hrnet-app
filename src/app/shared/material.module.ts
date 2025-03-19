import { NgModule } from '@angular/core';
// Import Material Design components
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const materialModules = [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
];

/**
 * Material Design Module
 * 
 * This module centralizes all Angular Material imports in one place.
 * It follows the Angular best practice of creating specialized modules
 * for third-party libraries to keep the app modular and maintainable.
 * 
 * Benefits:
 * - Prevents duplication of imports across multiple components
 * - Makes it easy to add/remove Material components in one place
 * - Reduces the size of component files by moving imports here
 */
@NgModule({
    imports: materialModules,
    exports: materialModules,
})
export class MaterialModule { }
