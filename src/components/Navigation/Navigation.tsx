import React from "react";

interface NavigationProps {
  currentPage: "home" | "employees";
  onPageChange: (page: "home" | "employees") => void;
}

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  padding: "20px 0",
  borderBottom: "1px solid #ddd",
  marginBottom: "20px",
};

const buttonStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  transition: "background-color 0.3s",
};

const activeButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#007bff",
  color: "white",
};

const inactiveButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#f8f9fa",
  color: "#333",
};

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  onPageChange,
}) => {
  return (
    <nav style={navStyle}>
      <button
        style={
          currentPage === "home" ? activeButtonStyle : inactiveButtonStyle
        }
        onClick={() => onPageChange("home")}
      >
        Create Employee
      </button>
      <button
        style={
          currentPage === "employees"
            ? activeButtonStyle
            : inactiveButtonStyle
        }
        onClick={() => onPageChange("employees")}
      >
        View Employees
      </button>
    </nav>
  );
};

export default Navigation;
