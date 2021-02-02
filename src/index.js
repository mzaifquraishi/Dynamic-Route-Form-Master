import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
);

const HomePage = () => <h1>Home Page</h1>;
const AboutPage = () => <h1>About Page</h1>;

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Router>
        {/* Router component can have only 1 child. We'll use a simple
          div element for this example. */}
        <div>
          <Nav />
          <Route exact path="/add/:model" component={HomePage} />
          <Route path="/show/:model" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
