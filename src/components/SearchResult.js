import React, { Component } from 'react';

export default class SearchResult extends Component {
    constructor(id, title, price, thumbnail){
        super(props);
        this.id = id;
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
    }
    
    render(){
        return (
            <div class="item">
                <p>{this.state.id}</p>
                <p>{this.state.title}</p>
                <p>{this.state.price}</p>
                <Image src={this.thumbnail}/>
            </div>
        );
    }
}