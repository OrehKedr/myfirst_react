import React from 'react';
import Avatar from 'material-ui/Avatar';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
const avatarImg = '../images/kerem-128.jpg';

export default class ChatList extends React.Component {
    render() {
        return (
            <List className='chatlist'>
                <Subheader>Выберите канал: </Subheader>
                <Link to="/chat/1/">
                    <ListItem
                        primaryText="Brendan Lim"
                        leftAvatar={<Avatar src={avatarImg} />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                </Link>
                <Link to="/chat/2/">
                    <ListItem
                        primaryText="Brendan Lim"
                        leftAvatar={<Avatar src={avatarImg} />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                </Link>
                <Link to="/chat/3/">
                    <ListItem
                        primaryText="Brendan Lim"
                        leftAvatar={<Avatar src={avatarImg} />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                </Link>
            </List>
        );
    }
}