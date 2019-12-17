import React from 'react';
import PropTypes from "prop-types";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './message';

export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
    };

    state = {
        chats: {
            1: { title: 'Чат 1', messageList: [1] },
            2: { title: 'Чат 2', messageList: [2, 3] },
            3: { title: 'Чат 3', messageList: [] },
        },
        messages: {
            1: { text: 'Привет!', sender: 'bot' },
            2: { text: 'Здравствуйте! ', sender: 'bot' },
            3: { text: 'Меня зовут Siri', sender: 'bot' },
        },
        input: '',
    };

    // Создадим ref в поле `textInput` для хранения DOM-элемента
    textInput = React.createRef();

    sendMessage = (message, sender) => {
        const { messages, chats, input } = this.state;
        const { chatId } = this.props;

        if (input.length > 0 || sender === 'bot') {
            const messageId = Object.keys(messages).length + 1;

            this.setState({
                messages: { ...messages, 
                            [messageId]: { text: message, sender: sender } 
                },
                chats: { ...chats, 
                        [chatId]: { ...chats[chatId],
                                    messageList: [...chats[chatId]['messageList'], messageId] 
                        }
                }
            });
        }

        if (sender === 'me') {
            this.setState({ input: '' });
        }
    };

    render() {
        const { messages, chats } = this.state;
        const { chatId } = this.props;


        const messageElements = chats[chatId].messageList.map((messageId, index) => (
            <Message
                key={ index }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />));
 
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
                        onKeyUp={ this.handleKeyUp }
                    />
                    <FloatingActionButton onClick={ () => this.sendMessage(this.state.input, 'me') }>
                        <SendIcon />
                    </FloatingActionButton>
                </div>

            </div>
        );
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            this.sendMessage(this.state.input, 'me');
        }
    };

    // Ставим фокус на <input> при монтировании компонента
    componentDidMount() {
        this.textInput.current.focus();
    };

    componentDidUpdate(prevProps, prevState) {
        // Параметр prevProps не используется, но 
        // его указание на первой позиции в списке параметров необходимо
        // для правильной инициализации параметра prevState
        const { messages } = this.state;

        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
            setTimeout( 
                () => this.sendMessage('Не приставай ко мне, я робот!', 'bot'),
                1000 
            );
        }
    }
}