import React from 'react';
import ReactDOM from 'react-dom';


//Example 1

const render = () => {
  document.getElementById('mountNode').innerHTML = `
    <div>
      Hello HTML
      <input />
      <pre>${new Date().toLocaleTimeString()}</pre>
    </div>
  `;
  ReactDOM.render(
    React.createElement(
      'div',
      null,
      'Hello React',
      React.createElement('input', null),
      React.createElement('pre', null, new Date().toLocaleTimeString())
    ),
    document.getElementById('mountNode2')
  );
};
setInterval(render, 1000);


//Example 2

function Button (props) {
  return React.createElement(
    "button",
    { type: "submit" },
    props.label
  );
}
ReactDOM.render(
  React.createElement(Button, { label: "Save"}),
  mountNode
);


//Example 3

function button () {
  return <div>My Fancy Button</div>;
};
// The following will render an HTML button
// (and ignore the fancy button function)
ReactDOM.render(<button />, mountNode);


//Example 4

const RandomValue = () => (
  <div>
    { Math.floor(Math.random() * 100) }
  </div>
);
ReactDOM.render(<RandomValue />, mountNode);


//Example 5

const ErrorDisplay = ({ message }) => (
  <div style={ { color:'red', backgroundColor:'yellow' } }>
    {message}
  </div>
);
ReactDOM.render(
  <ErrorDisplay
    message="These aren't the droids you're looking for"
  />,
  mountNode
);


//Example 6

class ConditionalStyle extends React.Component {
  render() {
    return (
      <div style={{ color: Math.random() < 0.5 ? 'green': 'red' }}>
        How do you like this?
      </div>
    );
  }
}
ReactDOM.render(
  <ConditionalStyle />,
  mountNode,
);


//Example 7

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.label}</button>
    );
  }
}

ReactDOM.render(<Button label="Save" />, mountNode);


//Example 8

const Button = ({ clickAction }) => {
  return (
    <button onClick={clickAction}>
      +1
    </button>
  );
};
const Display = ({ content }) => (
  <pre>{content}</pre>
);
const CountManager = () => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <Button clickAction={incrementCounter} />
      <Display content={count} />
    </div>
  );
};


//Example 9

const CharacterCounter = () => {
  return (
    <div>
      <textarea cols={80} rows={10} />
      <div>Count: X</div>
    </div>
  );
};
ReactDOM.render(<CharacterCounter />, mountNode);
