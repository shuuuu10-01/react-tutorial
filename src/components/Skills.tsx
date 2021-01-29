import * as React from 'react';
import "../App.css";
import Title from './Title';

const skill: React.CSSProperties = {
  position: "relative",
  margin: "0",
  marginTop: "100vh",
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
};


class Skills extends React.Component {
  render () {
    const title = "Skills"
    return (
      <div style={skill} className="home-child">
        <Title title={title} />
      </div>
    );
  }
}
export default Skills;
