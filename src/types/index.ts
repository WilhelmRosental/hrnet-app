export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  startDate: string;
  department: string;
  dateOfBirth: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface IEmployeeData {
  data: IEmployee[];
}

export interface IStateEmployeeData {
  employeeData: IEmployeeData;
}