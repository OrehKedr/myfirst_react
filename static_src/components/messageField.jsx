import React from 'react';
import Message from './message';
import '../styles/styles.css';

export default class MessageField extends React.Component {
    state = {
        messages: [
            { sender: 'bot', text: 'Привет!'}, 
            { sender: 'bot', text: 'Как дела?'},
        ],
        input: '',
    };

    render() {
        const messageElements = this.state.messages.map( (msg, index) => (
            <Message key = { index } sender = { msg.sender } text = { msg.text } />
        ) );

        return (
            <div className = "layout">
                <div id = 'main' className = 'message-field'>
                    { messageElements }
                    <input 
                        name = 'input' 
                        value = { this.state.input } 
                        onChange = { this.handleChange } 
                        onKeyUp = { (event) => this.handleKeyUp(event, this.state.input) } 
                    />
                    <button onClick = { () => this.handleClick(this.state.input) }>Отправить сообщение</button>
                </div>
            </div>
        );
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClick = (message) => {
        this.sendMessage(message);
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { //Enter
            this.sendMessage(message);
        }
    };

    sendMessage = (message) => {
        this.setState({ messages: [...this.state.messages, { sender: 'me', text: message }],
                        input: ''});
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout( 
                () => this.setState({ messages: [...this.state.messages, { sender: 'bot', text: 'Не приставай ко мне, я робот!' }] }),
                1000 
            );
        }
    }
}