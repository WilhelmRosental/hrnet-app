import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Form.module.css";
import { formSlice } from "../../store/formSlice";
import { IEmployee } from "../../types";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const departments = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human Resources",
  "Legal",
];

function Form() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<IEmployee>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: states[0],
    zipCode: "",
    department: departments[0],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(formSlice.actions.addData(formData));
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: states[0],
      zipCode: "",
      department: departments[0],
    });
    alert("Employee created successfully!");
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="firstName">First Name</label>
          <input
            className={styles.input}
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="lastName">Last Name</label>
          <input
            className={styles.input}
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="dateOfBirth">Date of Birth</label>
          <input
            className={styles.input}
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="startDate">Start Date</label>
          <input
            className={styles.input}
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="street">Street</label>
        <input
          className={styles.input}
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="city">City</label>
          <input
            className={styles.input}
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="state">State</label>
          <select
            className={styles.select}
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          >
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="zipCode">Zip Code</label>
          <input
            className={styles.input}
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="department">Department</label>
        <select
          className={styles.select}
          id="department"
          name="department"
          value={formData.department}
          onChange={handleInputChange}
          required
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <button className={styles.submitButton} type="submit">Save</button>
    </form>
  );
}

export default Form;
