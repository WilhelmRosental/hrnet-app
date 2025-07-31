export interface IStateEmployeeData {
    employeeData: IEmployeeData
}

export interface IEmployeeData {
    data: IEmployee[]
}

export interface IEmployee {
    firstName?: string
    lastName?: string
    dateOfBirth?: string
    street?: string
    city?: string
    state?: string
    zipCode?: string
    startDate?: string
    department?: string
}
