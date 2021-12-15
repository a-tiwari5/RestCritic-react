import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Restaurants from "./Restaurants"
import Contact from "./Contact"
import About from "./About"
import Navbar from "./Navbar";
import Footer from "./footer";


const App = () => {
    return (<>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/restaurants" component={Restaurants} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/"/>
        </Switch>
        <Footer/>
    </>
    )
}

export default App