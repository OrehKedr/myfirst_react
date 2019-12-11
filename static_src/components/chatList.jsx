import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class ChatList extends React.Component {
    avatarImg = '../static_src/images/kerem-128.jpg';

    render() {
        return (
            <List>
                <Subheader>Recent chats</Subheader>
                <ListItem
                    primaryText="Brendan Lim"
                    leftAvatar={<Avatar src={this.avatarImg} />}
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    primaryText="Eric Hoffman"
                    leftAvatar={<Avatar src={this.avatarImg} />}
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    primaryText="Grace Ng"
                    leftAvatar={<Avatar src={this.avatarImg} />}
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    primaryText="Kerem Suer"
                    leftAvatar={<Avatar src={this.avatarImg} />}
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    primaryText="Raquel Parrado"
                    leftAvatar={<Avatar src={this.avatarImg} />}
                    rightIcon={<CommunicationChatBubble />}
                />
            </List>
        );
    }
}