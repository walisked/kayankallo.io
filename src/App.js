
import React from "react";
// import { BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";

import { Navbar } from "./Component/Navbar";
import { Hero } from "./Component/Hero";
import { Package } from "./Component/Package";
import { NewsLetter } from "./Component/NewsLetter";
import { Card } from "./Component/Card";
import { Video } from "./Component/Movie";
// import { SignUp } from "./Component/SignUp";
import { Footer } from "./Component/Footer";
// import { Login } from "./Component/Login";

function App() {
  // const [loggedIn, setLoggedIn] =useState(false)
  return (
    <>
 
    <Navbar/>
    <Hero/>
    <Package/>
    <NewsLetter/>
    <Card/>
    <Video/>
    <Footer/>
    {/* <Router>
      <Navbar/>
        <Switch>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
    </Router> */}
    </>
  );
}

export default App;
