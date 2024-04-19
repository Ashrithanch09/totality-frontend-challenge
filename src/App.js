import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PropertyListings from './pages/PropertyListings';
import BookingManagement from './pages/BookingManagement';
import './styles/index.css'; // Import CSS file

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/property-listings" component={PropertyListings} />
          <Route path="/booking-management" component={BookingManagement} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;