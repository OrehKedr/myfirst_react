import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        sender: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div className = 'message'
                style = { { alignSelf: this.props.sender === 'bot' ? 'flex-start' : 'flex-end'} }
            >
                <span><b>{ this.props.sender } написал(a):</b></span>
                <div>{ this.props.text }</div>
            </div>            
        );
    }
}