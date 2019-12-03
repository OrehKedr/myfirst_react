import React from 'react';
import Child from './child';

export default class App extends React.Component {
    state = {
        text: 'Наш первый React-компонент',
        counter: 0,
    };

    handleClick = () => {
        this.setState({ 'counter': this.state.counter + 1 });
    }

    render() {
        console.log('render');

        return (
            <div>
                <h1>{this.state.text}</h1>
                <Child counter = {this.state.counter} />
                <button onClick = {this.handleClick}>+1</button>
            </div>
        );
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
        setTimeout( () => this.setState({'text': 'Обновлённый React-компонент'}), 1000);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
}