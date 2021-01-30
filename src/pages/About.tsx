import React from "react";

interface inputState {
  text: string;
}

class Home extends React.Component {
  state: inputState = {
    text: "",
  };
  private changeText(e: any): void {
    this.setState({text:e.target.value})
  }
  render() {
    return (
      <div>
        <p>
          ここに記入してください
          <input
            type="text"
            value={this.state.text}
            onChange={(e) => this.changeText(e)}
          ></input>
        </p>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Home;
