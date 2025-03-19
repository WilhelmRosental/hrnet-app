import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IEmployee } from '../../models/employee.interface';
import { EmployeeService } from '../../services/employee.service';
import { MaterialModule } from '../../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Employee List Component
 * 
 * Displays employee records in a data table with sorting, filtering, and pagination.
 * Uses Angular Material's data table components for rich UI functionality.
 * Retrieves data from the EmployeeService.
 * 
 * This component:
 * 1. Subscribes to employee data and updates when changes occur
 * 2. Provides a searchable, sortable table interface
 * 3. Handles formatting of date fields for display
 * 4. Implements pagination for better UX with large datasets
 */
@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css'],
    standalone: true,
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule]
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
    /** Defines columns to display in the table */
    displayedColumns: string[] = [
        'firstName',
        'lastName',
        'dateOfBirth',
        'startDate',
        'department',
        'street',
        'city',
        'state',
        'zipCode'
    ];

    /** Data source for the Material table with built-in filtering, sorting, and pagination */
    dataSource = new MatTableDataSource<IEmployee>([]);

    /** Reference to the Material paginator component */
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    /** Reference to the Material sort component */
    @ViewChild(MatSort) sort!: MatSort;

    /**
     * Constructor injects the employee service for retrieving data
     */
    constructor(private employeeService: EmployeeService) { }

    /**
     * Initializes the component by loading employee data
     */
    ngOnInit(): void {
        this.loadEmployees();
    }

    /**
     * Lifecycle hook called after view initialization
     * Sets up paginator and sorting for the data table
     */
    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    /**
     * Loads employee data from the service
     * Uses RxJS subscription to update data reactively
     */
    loadEmployees(): void {
        this.employeeService.getEmployees().subscribe(employees => {
            this.dataSource.data = employees;
        });
    }

    /**
     * Filters table data based on user input
     * 
     * @param event - Input event containing the filter text
     */
    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    /**
     * Helper method to format dates for display
     * Converts ISO strings to localized date format
     * 
     * @param dateString - ISO date string to format
     * @returns Formatted date string or placeholder if invalid
     */
    formatDate(dateString: string | undefined): string {
        if (!dateString) return 'N/A';

        try {
            const date = new Date(dateString);
            return date.toLocaleDateString();
        } catch (e) {
            return dateString;
        }
    }
}
