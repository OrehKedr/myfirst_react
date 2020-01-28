import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/svg-icons/action/account-circle';
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
                <Link to='/profile/' style={ {
                    marginRight: '10px',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                } }>
                    <Avatar color='white' style={ { marginRight: '10px' } } />
                    <span>Профиль</span>
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
