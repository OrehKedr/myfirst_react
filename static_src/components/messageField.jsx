import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './message';

export default class MessageField extends React.Component {
    state = {
        messages: [
            { sender: 'bot', text: 'Привет!'}, 
            { sender: 'bot', text: 'Как дела?'},
        ],
        input: '',
    };

    // Создадим ref в поле `textInput` для хранения DOM-элемента
    textInput = React.createRef();

    render() {
        const messageElements = this.state.messages.map( (msg, index) => (
            <Message key = { index } sender = { msg.sender } text = { msg.text } />
        ) );

        return (
            <div className = "message-field-layout">
                <div id = 'main' className = 'message-field'>
                    { messageElements }
                </div>
                <div style={ { width: '100%', display: 'flex', padding: '10px 20px' } }>
                    <TextField
                        ref={ this.textInput }
                        name="input"
                        fullWidth={ true }
                        hintText="Введите сообщение"
                        style={ { fontSize: '22px' } }
                        onChange={ this.handleChange }
                        value={ this.state.input }
                        onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                    />
                    <FloatingActionButton onClick={ () => this.sendMessage(this.state.input) }>
                        <SendIcon />
                    </FloatingActionButton>
                </div>

            </div>
        );
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.sendMessage(message);
        }
    };

    sendMessage = (message) => {
        this.setState({ messages: [...this.state.messages, { sender: 'me', text: message }],
                        input: ''});
    }

    // Ставим фокус на <input> при монтировании компонента
    componentDidMount() {
        this.textInput.current.focus();
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;

        if (prevState.messages.length < messages.length &&
            messages[messages.length - 1].sender === 'me') {
            setTimeout( 
                () => this.setState({ messages: [...messages, { sender: 'bot', text: 'Не приставай ко мне, я робот!' }] }),
                1000 
            );
        }
    }
}