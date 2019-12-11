import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MessageField from './messageField';
import Header from './header';
import Chatlist from './chatList';

export default class Layout extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <Header />
                <Chatlist />
                <MessageField />
            </MuiThemeProvider>
        );
    }
}