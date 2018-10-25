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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = cID => {
    this.setState({ selectedItem: cID });
    alert(cID);
  };

  componentDidMount() {
    fetch(`https://api.mercadolibre.com/sites/MCO/categories`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let items = data.map(({ id, name } = it) => {
          return (
            <li key={id} onClick={() => this.props.submit(id)}>
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
