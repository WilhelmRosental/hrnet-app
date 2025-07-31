import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getData } from "../../store/selector";

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse" as const,
  marginTop: "20px",
};

const thStyle = {
  backgroundColor: "#f8f9fa",
  padding: "12px",
  textAlign: "left" as const,
  borderBottom: "2px solid #dee2e6",
  fontWeight: "bold",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #dee2e6",
};

const noDataStyle = {
  textAlign: "center" as const,
  padding: "40px",
  color: "#6c757d",
  fontSize: "18px",
};

const Employees: React.FC = () => {
  const employees = useSelector(getData);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (!employees || employees.length === 0) {
    return (
      <div>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Current Employees
        </h2>
        <div style={noDataStyle}>
          No employees found. Please add some employees first.
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Current Employees
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>First Name</th>
            <th style={thStyle}>Last Name</th>
            <th style={thStyle}>Start Date</th>
            <th style={thStyle}>Department</th>
            <th style={thStyle}>Date of Birth</th>
            <th style={thStyle}>Street</th>
            <th style={thStyle}>City</th>
            <th style={thStyle}>State</th>
            <th style={thStyle}>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td style={tdStyle}>{employee.firstName}</td>
              <td style={tdStyle}>{employee.lastName}</td>
              <td style={tdStyle}>{employee.startDate}</td>
              <td style={tdStyle}>{employee.department}</td>
              <td style={tdStyle}>{employee.dateOfBirth}</td>
              <td style={tdStyle}>{employee.street}</td>
              <td style={tdStyle}>{employee.city}</td>
              <td style={tdStyle}>{employee.state}</td>
              <td style={tdStyle}>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;