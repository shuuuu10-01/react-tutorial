import * as React from "react";
import "../App.css";
import Title from "./Title";

const skill: React.CSSProperties = {
  position: "relative",
  margin: "0",
  backgroundColor: "white",
  alignItems: "center",
  justifyContent: "center",
};

class Life extends React.Component {
  render() {
    const title = "Life&Education";
    return (
      <section style={skill} className="home-child">
        <Title title={title} />
        {/* <br/>
        <img src='/img/shuuuu.png' alt="logo" style={logo}/> */}
      </section>
    );
  }
}
export default Life