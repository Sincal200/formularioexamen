
import './App.css';
import React, { useState } from 'react';

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <br />
          <input type="text" className='entrada'/>
        </label>
        <br />
        <label>
          Email:
          <br />
          <input type="email"className='entrada'/>
        </label>
        <br />
        <label>
          Password:
          <br />
          <input type="password" className='entrada'/>
        </label>
        <br />
        <label>
          Confirm Password:
          <br />
          <input type="password" className='entrada'/>
        </label>
        <br />
        <label>
          Birthdate:
          <br />
          <input type="date" className='entrada' />
        </label>
        <br />
        <label>
          Gender:
          <br />
          <select>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <label>
          <input type="checkbox" />
          Accept Terms and Conditions
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}


export default App;
