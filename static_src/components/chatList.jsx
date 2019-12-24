import React from 'react';
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import ContentSend from 'material-ui/svg-icons/content/send';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { addChat } from '../actions/chatActions';

class ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { //Enter
            this.handleAddChat();
        }
    };

    handleAddChat = () => {
        if (this.state.input.length > 0) {
            // Вызываем Action-метод Redux
            this.props.addChat(this.state.input);
            this.setState({ input: ''});
        }
    };

    render() {
        const { chats } = this.props;
        const chatElements = Object.keys(chats).map( chatId => (
            <Link key={ chatId } to={ `/chat/${chatId}` }>
                <ListItem
                    primaryText={ chats[chatId].title }
                    leftIcon={ <ContentSend /> }
                />
            </Link>
        ));

        return (
            <List>
                { chatElements }
                <ListItem 
                    key="Add new chat"
                    leftIcon={ <AddIcon />}
                    onClick={ this.handleAddChat }
                    style={ { height: '60px' } }
                    children= {<TextField
                        key="textField"
                        fullWidth
                        name="input"
                        hintText="Добавить новый чат"
                        onChange={ this.handleChange }
                        value={ this.state.input }
                        onKeyUp={ this.handleKeyUp }
                    />} 
                />
            </List>
        );
    }
}

// Направление движения данных: из Redux =>>> React
// Отображаем Redux Store в props класса-компонента React.
// Reducer-ы разбивают Redux Store на логические части: чаты, чат-листы, профиль. 
// По сути задаём правило: чем заполнять props react-компонента.
// Вынимаем данные из определённого Reducer-а, и кладём в соответствующий prop класса-компонента React.
// Переменная chats из chatReducer попадают в props компонента.
// Я бы дал название mapStoreToProps
const mapStateToProps  = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

// Направление движения данных: из React =>>> Redux
// Если нужно изменить данные, вызываем Action. 
// Это структуры, которые передают данные из приложения в 
// хранилище через специальный API Redux’а — dispatch().
// функция addChat, импортированная из chatActions, попадают в props компонента.
// Я бы дал название passActionThroughDispatch
const mapDispatchToProps  = dispatch => bindActionCreators({ addChat }, dispatch);

// Декоратор - обёртка на класс ChatList, для подключения к API Redux.
// Собираем вместе подготовленные раннее части инфрастуктуры Redux и React в единый механизм, готовый для запуска.
export default connect(mapStateToProps , mapDispatchToProps)(ChatList);