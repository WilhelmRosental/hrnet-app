import { Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

/**
 * Application Routes Configuration
 * 
 * Defines the routing structure for the application.
 * Uses Angular's route configuration to map URLs to components.
 * 
 * Routing Strategy:
 * - Default route redirects to employee creation form
 * - Separate routes for creating and viewing employees
 * - Single-page application approach with client-side routing
 */
export const routes: Routes = [
    /** Redirect root path to employee creation form */
    { path: '', redirectTo: 'create-employee', pathMatch: 'full' },

    /** Route for creating new employees */
    { path: 'create-employee', component: EmployeeFormComponent },

    /** Route for viewing employee list */
    { path: 'employee-list', component: EmployeeListComponent },

    // Add more routes as needed
];
