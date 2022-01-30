import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Courses from "./components/Courses";
import Register from "./components/Register";
import Login from "./components/Login";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Courses} />
        <Route path="/signup" component={Register} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default Routing;
