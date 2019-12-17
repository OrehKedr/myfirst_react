import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Profile from './profile';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <div className='header'>
                <span style={ { fontSize: '20px' } }>Chat { this.props.chatId }</span>
                <Link to='/profile/'>
                    <span style={ { display: 'inlineBlock', width: '50px', height: '20px', float: 'right', marginRight: '40px'} }>Профиль</span>
                </Link>
            </div>
        );
    }
}
