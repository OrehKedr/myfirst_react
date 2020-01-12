import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import { ConnectedRouter } from 'connected-react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import initStore, { history } from './utils/store';

ReactDOM.render(
    <Provider store={ initStore() }>
        <ConnectedRouter history={ history }>
            <MuiThemeProvider>
                <Router />
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);