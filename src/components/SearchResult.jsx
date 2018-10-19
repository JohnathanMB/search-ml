import React, { Component } from "react";
import SearchItem from "./SearchItem";

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      products: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        let items = data.results.map(it => {
          return (
            <SearchItem
              id="el id"
              title={it.title}
              price={it.price}
              thumbnail={it.thumbnail}
            />
          );
        });
        this.setState({ products: items });
        console.log("state", this.state.products);
        console.log(this.props.query);
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
        <div>{this.state.products}</div>
      </React.Fragment>
    );
  }
}
