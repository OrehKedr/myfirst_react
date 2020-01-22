import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Profile from './profile';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

export class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        chats: PropTypes.object.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        if (this.props.isLoading) {
            return <div>Чат, загрузка...</div>
        };

        const { chats, chatId } = this.props;

        return (
            <div className='header'>
                <span style={ { fontSize: '20px' } }>{ chats[chatId].title }</span>
                <Link to='/profile/'>
                    <span style={ { display: 'inlineBlock', width: '50px', height: '20px', float: 'right', marginRight: '40px'} }>Профиль</span>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    isLoading: chatReducer.isLoading,
 });
 
 const mapDispatchToProps  = dispatch => bindActionCreators({}, dispatch);
 
 export default connect(mapStateToProps , mapDispatchToProps)(Header);
