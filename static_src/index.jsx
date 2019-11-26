import React from 'react';
import ReactDOM from 'react-dom';

const text = 'It seems we connected React';

const Element = (props) => {
    return <h1 className="element">{ props.content }</h1>;
}

ReactDOM.render(
    <Element content = { text }/>,
    document.getElementById('root'),
);