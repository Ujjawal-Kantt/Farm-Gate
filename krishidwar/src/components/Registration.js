import React, { useState } from 'react';
import axios from 'axios';


function Registration() {
  const [userType, setUserType] = useState('farmer');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', { ...formData, role: userType });
      // Redirect to login or dashboard after registration
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="registration">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setUserType(e.target.value)}>
          <option value="farmer">Farmer</option>
          <option value="buyer">Buyer</option>
        </select>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
