import { Injectable } from '@angular/core';
import { IEmployee } from '../models/employee.interface';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Employee Service
 * 
 * Responsible for managing employee data throughout the application.
 * Implements a reactive pattern using RxJS BehaviorSubject to maintain state.
 * Provides persistence by storing data in the browser's localStorage.
 * 
 * This service follows the Repository pattern, abstracting data storage operations
 * from the rest of the application.
 */
@Injectable({
    providedIn: 'root' // Service is provided at the root level, making it a singleton
})
export class EmployeeService {
    /** Key used for localStorage persistence */
    private readonly STORAGE_KEY = 'employees';

    /** BehaviorSubject that maintains and emits the current state of employee data */
    private employeesSubject = new BehaviorSubject<IEmployee[]>(this.getEmployeesFromStorage());

    constructor() { }

    /**
     * Retrieves employee data from localStorage
     * 
     * @returns Array of employee objects, or empty array if none found
     */
    private getEmployeesFromStorage(): IEmployee[] {
        const employeesJson = localStorage.getItem(this.STORAGE_KEY);
        return employeesJson ? JSON.parse(employeesJson) : [];
    }

    /**
     * Persists employee data to localStorage
     * 
     * @param employees - Array of employee objects to be stored
     */
    private saveEmployeesToStorage(employees: IEmployee[]): void {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(employees));
    }

    /**
     * Provides an observable of the employee data
     * Components can subscribe to this to reactively update when data changes
     * 
     * @returns Observable of employee array
     */
    getEmployees(): Observable<IEmployee[]> {
        return this.employeesSubject.asObservable();
    }

    /**
     * Adds a new employee to the storage
     * 
     * @param employee - Employee data to be added
     */
    addEmployee(employee: IEmployee): void {
        // Format dates properly before saving
        const formattedEmployee = {
            ...employee,
            // Ensure dates are in ISO format for consistent storage and retrieval
            dateOfBirth: employee.dateOfBirth ? new Date(employee.dateOfBirth).toISOString() : undefined,
            startDate: employee.startDate ? new Date(employee.startDate).toISOString() : undefined
        };

        // Use immutable pattern to update the data
        const currentEmployees = this.getEmployeesFromStorage();
        const updatedEmployees = [...currentEmployees, formattedEmployee];

        // Persist and update the reactive stream
        this.saveEmployeesToStorage(updatedEmployees);
        this.employeesSubject.next(updatedEmployees);
    }
}
