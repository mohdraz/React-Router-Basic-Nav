import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";


import {Route} from "react-router-dom";


const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
);

export default App;
