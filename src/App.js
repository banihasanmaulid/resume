import React from 'react';
// import './App.css';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1>Welcome to My Home Page</h1>
    //     <p>This is a simple homepage created with React.js.</p>
    //     <button onClick={() => alert('Welcome!')}>Click Me</button>
    //   </header>
    // </div>
    <div>
      <BrowserRouter basename="/resume">
        <BaseLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;