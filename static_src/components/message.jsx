import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    render() {
        return (
            <React.Fragment>
                <span><b>{ this.props.author } написал(a):</b></span>
                <div>{ this.props.text }</div>
            </React.Fragment>            
        );
    }
}