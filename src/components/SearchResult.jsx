import React, { Component } from "react";
import SearchItem from "./SearchItem";
import "../stylesheets/SearchResult.css";

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(itemID) {
    this.setState({ selectedItem: itemID });
    alert("{itemID}");
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit(event) {
    var keywords = this.state.search;
    // alert('Ha buscado el siguiente producto: ' + keywords)
    fetch(
      `https://api.mercadolibre.com/sites/MCO/search?q=${keywords}&limit=20`
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        let items = data.results.map(({ id, title, price, thumbnail } = it) => {
          return (
            <li key={id}>
              <SearchItem
                title={title}
                price={price}
                thumbnail={thumbnail}
                onClick={this.handleClick}
              />
            </li>
          );
        });
        this.setState({ products: items });
        console.log("state", this.state.products);
      });
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="mic32BoldRegularsearch"
            value={this.state.search}
            onChange={this.handleChange.bind(this)}
          />
          <input type="submit" value="Buscar !" />
        </form>
        <ul>{this.state.products}</ul>
      </React.Fragment>
    );
  }
}
