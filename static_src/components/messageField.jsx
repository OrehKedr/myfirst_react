import React from 'react';
import Message from './message';

export default class MessageField extends React.Component {
    state = {
        messages: [
            { author: 'Алиса', text: 'Привет!'}, 
            { author: 'Алиса', text: 'Как дела?'},
        ],
    };

    render() {
        const messageElements = this.state.messages.map( (msg, index) => (
            <Message key = { index } author = { msg.author } text = { msg.text } />
        ) );

        return (
            <React.Fragment>
                { messageElements }
                <button onClick = { this.handleClick }>Отправить сообщение</button>
            </React.Fragment>
        );
    }

    handleClick = () => {
        this.setState({ messages: [...this.state.messages, { author: 'Siri', text: 'Нормально' }] });
    };

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout( 
                () => this.setState({ messages: [...this.state.messages, { author: 'bot', text: 'Не приставай ко мне, я робот!' }] }),
                1000 
            );
        }
    }
}