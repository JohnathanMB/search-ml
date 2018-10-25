import React, { Component } from "react";
import SearchItem from "./SearchItem";
import "../stylesheets/SearchResult.css";
import CategoryMenu from "./CategoryMenu";

const searchByProduct = "q";

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      selectedItem: null,
      products: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick = itemID => {
    this.setState({ selectedItem: itemID });
    alert(itemID);
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = searchBy => keywords => event => {
    this.search(searchBy)(keywords);
    event.preventDefault();
  };

  search = searchBy => keywords => {
    fetch(
      `https://api.mercadolibre.com/sites/MCO/search?${searchBy}=${keywords}&limit=20`
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        let items = data.results.map(({ id, title, price, thumbnail } = it) => {
          return (
            <li
              className="card card-4"
              key={id}
              onClick={() => this.handleClick(id)}
            >
              <SearchItem title={title} price={price} thumbnail={thumbnail} />
            </li>
          );
        }, this);
        this.setState({ products: items });
        console.log("state", this.state.products);
      });
    //event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit(searchByProduct)(this.state.search)}>
          <input
            type="text"
            name="mic32BoldRegularsearch"
            value={this.state.search}
            onChange={this.handleChange.bind(this)}
          />
          <input type="submit" value="Buscar !" />
        </form>
        <div className="float quarter menu card-4">
          <CategoryMenu submit={this.search} />
        </div>
        <div className="float three-quarter">
          <ul>{this.state.products}</ul>
        </div>
      </React.Fragment>
    );
  }
}
