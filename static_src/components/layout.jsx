import React from 'react';
import MessageField from './messageField';
import Header from './header';
import Chatlist from './chatList';
import '../styles/styles.css';

export default class Layout extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Chatlist />
                <MessageField />
            </>
        );
    }
}