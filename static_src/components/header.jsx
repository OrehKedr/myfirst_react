import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div id='header'
                style = { { width: '100%', color: 'lightblue', fontSize: '20px' } }>
                Заголовок
            </div>
        );
    }
}