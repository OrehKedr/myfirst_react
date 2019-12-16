import React from 'react';
import PropTypes from "prop-types";
import MessageField from './messageField';
import Header from './header';
import Chatlist from './chatList';
import '../styles/styles.css';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <>
                <Header chatId={ this.props.chatId }/>
                <Chatlist />
                <MessageField />
            </>
        );
    }
}