import * as React from 'react';
import "../App.css";
import Title from './Title';

const top: React.CSSProperties = {
  position: 'fixed',
  width: "100%",
  // zIndex: 1,
  top: 0,
  margin: '0',
  minHeight: '100vh',
  backgroundColor: '#FFFFE4',
  alignItems: 'center',
  justifyContent: 'center',
};

const logo: React.CSSProperties = {
  width: "80%",
  maxWidth: "768px",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto",
  position: "absolute",
};

class Top extends React.Component {
  render () {
    const title = "Introduction"
    return (
      <div style={top} className="home-child">
        <Title title={title} />
        <br />
        <img src="/img/shuuuu.png" alt="logo" style={logo} />
      </div>
    );
  }
}
export default Top;
