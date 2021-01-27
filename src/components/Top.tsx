import * as React from 'react';
import "../App.css";
import Title from './Title';

const top: React.CSSProperties = {
  position: 'relative',
  margin: '0',
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
    const title = "Portfolio"
    return (
      <section style={top} className="home-child">
        <Title title={title} />
        <br />
        <img src="/img/shuuuu.png" alt="logo" style={logo} />
      </section>
    );
  }
}
export default Top;
