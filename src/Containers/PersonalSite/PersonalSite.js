import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Home from '../../Components/Home/Home';
import About from '../../Components/About/About';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Contact from '../../Components/Contact/Contact';
import NotFound from '../../Components/NotFound/NotFound';
import Weights from '../../Components/Portfolio/Weights/Weights';
import IndecisionApp from '../../Containers/ToDo/IndecisionApp';
import Footer from '../../Components/Footer/Footer';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import 'normalize.css';

class PersonalSite extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route path="/portfolio/weights" component={Weights} />
              <Route path="/portfolio/indecision" component={IndecisionApp} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
};

export default PersonalSite;