import React from 'react';
import PropTypes from "prop-types";
import MessageField from './messageField';
import Header from './header';
import Chatlist from './chatList';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { sendMessage } from "../actions/messageActions";
import '../styles/styles.css';

class Layout extends React.Component {
    static propTypes = {
        // chatId пробрасывается из Router
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
                <MessageField 
                    chatId={ this.props.chatId }
                />
            </>
        );
    }
}

const mapStateToProps  = ({}) => ({});

const mapDispatchToProps  = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps , mapDispatchToProps)(Layout);
