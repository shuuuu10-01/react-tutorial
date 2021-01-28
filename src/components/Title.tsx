import　* as React from "react";
import "../App.css";

type Props = {
  title: string;
}

const title: React.CSSProperties = {
  fontWeight: "bolder",
  fontSize: "min(53.76px, 7vw)",
  textDecoration: "underline",
  margin: "0",
  padding: "30px",
  paddingLeft: "7vw",
  textAlign: "left",
};

class Title extends React.Component<Props,{}> {
  render() {
    console.log(this.props);
    // const title = this.props;
    return (
      <div className="Text-color">
        <h2 style={title}>{this.props.title}</h2>
      </div>
    );
  }
}

export default Title;
