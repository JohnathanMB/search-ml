import React, { Component } from "react";
import PropTypes from "prop-types";
import "../stylesheets/CategoryMenu.css";

const searchByCategory = "category";

class CategoryMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedItem: null
    };
  }

  componentDidMount() {
    const proxyUrl = "https://floating-shelf-98655.herokuapp.com/",
      targetUrl = "https://api.mercadolibre.com/sites/MCO/categories";
    fetch(proxyUrl + targetUrl)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let items = data.map(({ id, name } = it) => {
          return (
            <li
              key={id}
              onClick={() => this.props.submit(searchByCategory)(id)}
            >
              <p>{name}</p>
            </li>
          );
        }, this);
        this.setState({ categories: items });
        console.log("Categories: ", this.state.categories);
      });
  }

  render() {
    return <ul>{this.state.categories}</ul>;
  }
}

CategoryMenu.propTypes = {
  submit: PropTypes.func
};

export default CategoryMenu;
