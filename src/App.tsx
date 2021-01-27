import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Header</p>
      </header>
      <main className="App-main">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
          </Switch>
        </Router>
      </main>
      {/* <footer className="App-footer">
        <p>2021©shuuuu</p>
      </footer> */}
    </div>
  );
}

export default App;
