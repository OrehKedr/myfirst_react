import React from 'react';
import PropTypes from "prop-types";
import MessageField from './messageField';
import Header from './header';
import Chatlist from './chatList';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import '../styles/layout.css';

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
            <div key='layout' className='layout'>
                <Header chatId={ this.props.chatId }/>
                <div className="layout-canvas">
                    <div className="layout-left-side">
                        <Chatlist />
                    </div>
                    <div className="layout-right-side">
                        <MessageField chatId={ this.props.chatId } />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps  = ({}) => ({});

const mapDispatchToProps  = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps , mapDispatchToProps)(Layout);
