import React from 'react';
import MovieTable from "./components/table";
import Navbar from "./components/navbar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Login from "./components/login";
import MovieForm from "./components/movieform";
import NotFound from "./components/notfound"
import { Route,Switch,Redirect } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
    <Navbar></Navbar>
    <Switch>
    <Route path="/movies" exact component={MovieTable}></Route>
    <Redirect from="/" exact to="/movies"></Redirect>
    <Route path="/customers" component={Customers}></Route>
    <Route path="/rentals" component={Rentals}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/movies/new" exact component={MovieForm}></Route>
    <Route component={NotFound}></Route>
    </Switch>
    </React.Fragment>
  );
}
export default App;
