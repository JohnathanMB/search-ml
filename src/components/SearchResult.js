import React, { Component } from 'react';
import SearchItem from './SearchItem';

export default class SearchResult extends Component {
    constructor(){
        super();
        this.state = {
            products: [],
            search: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        var keywords = this.state.search
        // alert('Ha buscado el siguiente producto: ' + keywords)
        event.preventDefault()
    }

    componentDidMount() {
        const ts = "tube screamer";
        fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${this.props.query}&limit=20`)
        .then(results => {
            return results.json();
        })
        .then(data => {
            let items = data.results.map(it => {
                return <SearchItem id="el id" title={it.title} price={it.price} thumbnail={it.thumbnail}/>
            });
            this.setState({products: items});
            console.log("state", this.state.products);
            console.log(this.props.query)
        });
    }
    
    render(){
        return (
            <div name="Product list">
                {this.state.products}
            </div>
        );
    }
}