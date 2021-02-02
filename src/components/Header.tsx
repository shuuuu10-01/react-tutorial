import React from 'react'
import './Header.css'

interface State {
  isOpen: boolean;
}

class Header extends React.Component<{}, State> {
  state: State = {
    isOpen: false
  };
  render() {
    const onClick = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
      console.log(this.state.isOpen);
    };
    return (
      <div className="menu">
        <img
          src="/img/menu.png"
          alt="menu"
          className={"menu-img " + (this.state.isOpen ? "rotate" : "")}
          onClick={onClick}
        />
        <div className={"right-menu " + (this.state.isOpen ? "open-menu" : "")}>
          <i className="fas fa-arrow-right menu-icon" onClick={onClick}></i>
          <nav className="contents">
            <ul>
              <li>
                <a href="/">Introduction</a>
              </li>
              <li>
                <a href="/">Skills</a>
              </li>
              <li>
                <a href="/">Life&Education</a>
              </li>
              <li>
                <a href="/">Works</a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={"close " + (this.state.isOpen ? "close-menu" : "")}
          onClick={onClick}
        ></div>
      </div>
    );
  }
}

export default Header;
