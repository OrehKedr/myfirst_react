import React from 'react';
import PropTypes from 'prop-types';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './message';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import CircularProgress from 'material-ui/CircularProgress';
import { sendMessage } from '../actions/messageActions';
import { loadChats } from '../actions/chatActions';
import '../styles/styles.css';

class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        loadChats: PropTypes.func.isRequired,
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
            this.props.sendMessage(messageId, message, sender, chatId, '');
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

    componentDidMount() {
        this.props.loadChats();
    };

    render() {
        if (this.props.isLoading) {
            return <CircularProgress />
        };

        const { chatId, messages, chats } = this.props;

        const messageElements = chats[chatId].messageList.map(messageId => (
            <Message
                key={ messageId }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />));
 
        return (
            <>
                <div key='messageElements' className = 'message-field'>
                    { messageElements }
                </div>
                <div key='textInput' style={ { width: '100%', display: 'flex' } }>
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
            </>
        );
    }
}

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
    isLoading: chatReducer.isLoading,
 });
 
 const mapDispatchToProps  = dispatch => bindActionCreators({ sendMessage, loadChats }, dispatch);
 
 export default connect(mapStateToProps , mapDispatchToProps)(MessageField);
 