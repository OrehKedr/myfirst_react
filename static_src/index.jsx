import React from 'react';
import ReactDOM from 'react-dom';

let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{ props.text }</div>;

const MessageField = (props) => {
    return props.messages.map(message => <MessageComponent text = { message } />);
}
const Element = (props) => {
    return <h1 className="element">{ props.content }</h1>;
}

ReactDOM.render(
    <MessageField messages = { messages }/>,
    document.getElementById('root'),
);