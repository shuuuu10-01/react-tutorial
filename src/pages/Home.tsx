import * as React from "react";
import "../App.css";
import Top from '../components/Top'
import Skills from '../components/Skills'
import Life from '../components/Life'

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Top />
        <Skills />
        <Life />
      </div>
    );
  }
}

export default Home;
