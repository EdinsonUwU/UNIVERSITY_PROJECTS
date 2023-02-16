import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Register } from "./Register";
import {SimpleReflexAgent} from "./SimpleReflexAgent"

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        //UNCOMENT TO SEE LOGIN AND REGISTER FEATURE
        //currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
      <SimpleReflexAgent />

    </div>
  );
}

export default App;
