import React from 'react';

export default class Child extends React.Component {
    render() {
        console.log('Child render');

        return (
            <h1>Это компонент Child, counter: {this.props.counter}</h1>
        );
    }

    UNSAVE_componentWillMount() {
        console.log('Child componentWillMount');
    }

    componentDidMount() {
        console.log('Child componentDidMount');
    }

    componentDidUpdate() {
        console.log('Child componentDidUpdate');
    }
}