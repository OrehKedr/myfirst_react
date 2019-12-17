import React from 'react';

export default function Profile() {
    return (
        <div>
            <h2>Сергей Иванов</h2>
            <p><strong>Обо мне: </strong> Веб-дизайнер. </p>
            <p><strong>Хобби: </strong> Книги, природа, активный отдых, сайтостроение, дизайн, верстка </p>
            <p><strong>Знания: </strong>
            <span class="tags">HTML5, </span>
            <span class="tags">CSS3, </span>
            <span class="tags">jQuery, </span>
            <span class="tags">React + Redux</span>
            </p>
        </div>
    );
}