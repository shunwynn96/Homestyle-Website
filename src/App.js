import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from './component/Menu';
import Home from './component/Home';
import About from './component/About'
import ContactUs from './component/ContactUs'

function App() {
  
  return ( 
    <div>
      <Router>
        <Switch>
          <Route exact path="/"><Home/></Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/menu">
            <Menu />
          </Route>

          <Route path="/contact-us">
            <ContactUs />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
