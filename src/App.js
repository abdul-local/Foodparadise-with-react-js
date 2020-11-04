import React, { Component, Fragment } from 'react'
import Navbar from'../src/pages/Navbar';
import Home from'../src/pages/Home'
import Footer from'../src/pages/footer/Footer'
import {BrowserRouter as Router,Route} from'react-router-dom'
import City from'../src/pages/City'
import RestauransDetails from'../src/pages/RestaurantsDetails';

class App extends Component {

 
 render(){
 
  return (
    <Router >
     <Fragment>
      <Navbar   />
      <Route path="/" exact component={Home} />
      <Route path="/city/:id_city" exact component={City} />
      <Route path="/restaurant/:restaurant_id" exact component={RestauransDetails} />
      <Footer />
      </Fragment>
    </Router>
    
  );
 }
}

export default App;
