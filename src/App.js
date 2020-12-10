import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn, SignUp, ForgotPassword, ChangePassword, Home, Setting, NotFound } from "./Containers";

const App = () => {
  return (
    <section className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgotpass" component={ForgotPassword} />
          <Route path="/changepass" component={ChangePassword} />
          <Route path="/home" component={Home} />
          <Route path="/setting" component={Setting} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </section>
  );
};

export default App;
