import React from 'react';
import './App.css';
import Navbar from './Components/Header/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Ssgagent from './Components/Pages/SSGAgentForm/Ssgagent'
import Scholarship from './Components/Pages/ApplyScholarship/ApplyScholarship'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path= '/Agent' component={Ssgagent}/>
          <Route path="/Scholarship" component={Scholarship}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
