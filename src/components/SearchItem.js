import React from 'react';

export default function SearchItem({id, title, price, thumbnail}){
    return (
        <div class="item">
            <p>{id}</p>
            <p>{title}</p>
            <p>{price}</p>
            <img src={thumbnail} alt="Item thumbnail"/>
        </div>
    );
}
