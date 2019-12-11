import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MessageField from './components/messageField';

ReactDOM.render(
    <MuiThemeProvider>
        <MessageField />
    </MuiThemeProvider>,    
    document.getElementById('root'),
);