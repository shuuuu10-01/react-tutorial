import　* as React from "react";

type Props = {
  title: string;
}

const title: React.CSSProperties = {
  color: '#707070',
  padding: '15px',
  fontWeight: 'bolder',
  fontSize: '5vw',
  textDecoration: 'underline',
  margin: '0',
  textAlign: 'left'
};

class Title extends React.Component<Props,{}> {
  render() {
    console.log(this.props);
    // const title = this.props;
    return (
      <div>
        <h2 style={title}>{this.props.title}</h2>
      </div>
    );
  }
}

export default Title;
