import React from 'react';
import PropTypes from "prop-types";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './message';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { sendMessage } from "../actions/messageActions";

class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    };

    // Создадим ref в поле `textInput` для хранения DOM-элемента
    textInput = React.createRef();

    sendMessage = (message, sender) => {
        if (this.state.input.length > 0 || sender === 'bot') {
            const { chatId, messages } = this.props;
            const messageId = Object.keys(messages).length + 1;

            // Вызываем Action-метод Redux
            this.props.sendMessage(messageId, message, sender, chatId);
        }

        if (sender === 'me') {
            this.setState({ input: '' });
        }
    };

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
        const { messages } = this.props;

        if (Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
            setTimeout( 
                () => this.sendMessage('Не приставай ко мне, я робот!', 'bot'),
                1000 
            );
        }
    };

    render() {
        const { chatId, messages, chats } = this.props;

        const messageElements = chats[chatId].messageList.map(messageId => (
            <Message
                key={ messageId }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />));
 
        return (
            <div className = "message-field-layout">
                <div key='messageElements' className = 'message-field'>
                    { messageElements }
                </div>
                <div key='textInput' style={ { width: '100%', display: 'flex', padding: '10px 20px' } }>
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
}

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
 });
 
 const mapDispatchToProps  = dispatch => bindActionCreators({ sendMessage }, dispatch);
 
 export default connect(mapStateToProps , mapDispatchToProps)(MessageField);
 