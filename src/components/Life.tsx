import * as React from "react";
import "../App.css";
import Title from "./Title";

const skill: React.CSSProperties = {
  position: "relative",
  margin: "0",
  minHeight: "100vh",
  backgroundColor: "white",
  alignItems: "center",
  justifyContent: "center",
};

class Life extends React.Component {
  render() {
    const title = "Life&Education";
    return (
      <div style={skill} className="home-child">
        <Title title={title} />
      </div>
    );
  }
}
export default Life
