import React from "react";
import { withRouter } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Destination from "./Destination";
import DisplayCity from "./DisplayCity";

class MainPage extends React.Component {

  render() {
    var RoutedNavigation = withRouter(Home);
    return (
      <>
     <Router>
        <RoutedNavigation exact />      
        <Route path="/" exact component={DisplayCity} />
        <Route path="/Destination/:name" exact component={Destination} />
      </Router>
      </>
    );
  }
}

export default MainPage;
