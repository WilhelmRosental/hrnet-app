import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEmployee } from '../../models/employee.interface';
import { EmployeeService } from '../../services/employee.service';
import { MaterialModule } from '../../shared/material.module';

/**
 * Employee Form Component
 * 
 * Provides a form interface for creating new employee records.
 * Implements reactive forms for robust validation and form control.
 * Uses Angular Material components for UI.
 * 
 * This component is responsible for:
 * 1. Form creation and validation
 * 2. User interaction handling
 * 3. Submitting valid data to the EmployeeService
 * 4. Providing feedback to users
 */
@Component({
    selector: 'app-employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.css'],
    standalone: true, // Uses Angular's standalone component pattern
    imports: [ReactiveFormsModule, CommonModule, MaterialModule] // Directly imports dependencies
})
export class EmployeeFormComponent implements OnInit {
    /** The reactive form group for the employee form */
    employeeForm!: FormGroup;

    /** Tracks whether the form has been submitted for validation purposes */
    formSubmitted = false;

    // Reference data arrays
    /** List of available departments for the select dropdown */
    departments = [
        'Sales',
        'Marketing',
        'Engineering',
        'Human Resources',
        'Legal'
    ];

    /** List of US states for the select dropdown */
    states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
        'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
        'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
        'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
        'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
        'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
        'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    /**
     * Constructor injects dependencies following dependency injection pattern
     * 
     * @param fb - FormBuilder service for creating reactive forms
     * @param employeeService - Service for persisting employee data
     * @param snackBar - Material's snackbar service for notifications
     */
    constructor(
        private fb: FormBuilder,
        private employeeService: EmployeeService,
        private snackBar: MatSnackBar
    ) { }

    /**
     * Lifecycle hook that initializes the component
     * Called once after Angular initializes the component's properties
     */
    ngOnInit(): void {
        this.initForm();
    }

    /**
     * Initializes the reactive form with validation rules
     */
    initForm(): void {
        this.employeeForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(2)]],
            lastName: ['', [Validators.required, Validators.minLength(2)]],
            dateOfBirth: ['', Validators.required],
            street: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
            startDate: ['', Validators.required],
            department: ['', Validators.required]
        });
    }

    /**
     * Handles form submission
     * Validates the form and saves data if valid
     */
    onSubmit(): void {
        this.formSubmitted = true;

        if (this.employeeForm.valid) {
            const employee: IEmployee = this.employeeForm.value;
            console.log('Employee data:', employee);

            // Save employee to localStorage using the service
            this.employeeService.addEmployee(employee);

            // Reset the form
            this.employeeForm.reset();
            this.formSubmitted = false;

            // Show a success message using Material Snackbar
            this.snackBar.open('Employee created and saved successfully!', 'Close', {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
                panelClass: ['success-snackbar']
            });
        } else {
            // Mark all fields as touched to trigger validation messages
            Object.keys(this.employeeForm.controls).forEach(key => {
                this.employeeForm.get(key)?.markAsTouched();
            });

            // Show an error message
            this.snackBar.open('Please fix the validation errors', 'Close', {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
                panelClass: ['error-snackbar']
            });
        }
    }
}
