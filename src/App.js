import React from 'react';
import Header from './components/Header';
import ContactCard from './components/ContactCard';
import data from './data/employee.json';


import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />

      <header className="App-header">


      <div className="cardBox">
      {data.Employees.map(i => <ContactCard userImg={i.userImg} firstName={i.firstName} lastName={i.lastName} jobTitle={i.jobTitle} region={i.region} phoneNumber={i.phoneNumber} />)}
      </div>


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload a good time.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
