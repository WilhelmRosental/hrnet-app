/**
 * Employee Interface
 * 
 * Defines the data structure for employee records in the application.
 * All properties are optional to accommodate partial form submissions.
 * This interface is used throughout the application for type safety and consistency.
 */
export interface IEmployee {
    /** Employee's first/given name */
    firstName?: string;

    /** Employee's last/family name */
    lastName?: string;

    /** Employee's date of birth in string format (stored as ISO string in localStorage) */
    dateOfBirth?: string;

    /** Street address including house/apartment number */
    street?: string;

    /** City of residence */
    city?: string;

    /** State of residence (US states only) */
    state?: string;

    /** 5-digit US ZIP code */
    zipCode?: string;

    /** Employment start date in string format (stored as ISO string in localStorage) */
    startDate?: string;

    /** Department where the employee works */
    department?: string;
}
