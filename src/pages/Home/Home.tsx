import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../../store/formSlice';
import { IEmployee } from '../../types';

const formStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px'
};

const inputGroupStyle = {
  marginBottom: '15px'
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
  color: '#333'
};

const inputStyle = {
  width: '100%',
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '14px'
};

const buttonStyle = {
  backgroundColor: '#28a745',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold'
};

const Home: React.FC = () => {
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    startDate: '',
    department: '',
    dateOfBirth: '',
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newEmployee: IEmployee = {
      id: Date.now().toString(),
      ...formData
    };
    
    dispatch(addData(newEmployee));
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      startDate: '',
      department: '',
      dateOfBirth: '',
      street: '',
      city: '',
      state: '',
      zipCode: ''
    });
    
    alert('Employee created successfully!');
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Create Employee</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </div>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </div>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </div>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </div>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Street</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </div>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </div>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </div>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </div>
        
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            style={inputStyle}
            required
          >
            <option value="">Select Department</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
        </div>
        
        <button type="submit" style={buttonStyle}>
          Save Employee
        </button>
      </form>
    </div>
  );
};

export default Home;