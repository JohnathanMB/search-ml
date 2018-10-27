import React, { Component } from "react";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      currency: "",
      quantity: "",
      sold_quantity: "",
      condition: "",
      state: "",
      city: "",
      pictures: []
    };
  }
  componentDidMount() {
    fetch(`https://api.mercadolibre.com/items/${this.props.itemID}`)
      .then(result => {
        return result.json();
      })
      .then(data => {
        const {
          title,
          price,
          currency_id,
          available_quantity,
          sold_quantity,
          condition,
          pictures,
          seller_address
        } = data;
        this.setState({
          name: title,
          price: price,
          currency: currency_id,
          quantity: available_quantity,
          sold_quantity: sold_quantity,
          condition: condition,
          state: seller_address.state.name,
          city: seller_address.city.name
        });
        let pics = pictures.map(pic => {
          return (
            <li>
              <img src={pic.url} alt=":(" />
            </li>
          );
        });
        this.setState({ pictures: pics });
      });
  }
  render() {
    return (
      <React.Fragment>
        <h3>{this.state.name}</h3>
        <p>
          Precio: $ {this.state.price.toLocaleString("de-DE")}
          {/* {this.state.currency} */}
        </p>
        <p>Cantidad: {this.state.quantity}</p>
        <p>Vendidos: {this.state.sold_quantity}</p>
        <p>Condición: {this.state.condition}</p>
        <p>Departamento: {this.state.state} </p>
        <p>Ciudad: {this.state.city}</p>
        <ul>{this.state.pictures}</ul>
      </React.Fragment>
    );
  }
}

export default Detail;
