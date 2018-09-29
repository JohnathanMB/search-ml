import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchItem from './components/SearchItem'
import SearchResult from './components/SearchResult';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      products: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({search: event.target.value})
  }

  handleSubmit(event){
    var keywords = this.state.search
    // alert('Ha buscado el siguiente producto: ' + keywords)
    fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${this.state.search}&limit=20`)
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
    event.preventDefault()
  }

  render() {
    const tsUrl = "https://images.reverb.com/image/upload/s--TYm3-glE--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1504988871/judmx1iczrxolaudhf9g.png";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">mercado react</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="mic32BoldRegularsearch" value={this.state.search} 
            onChange={this.handleChange.bind(this)} />
          <input type="submit" value="Buscar !" />
        </form>
        <div>
          {this.state.products}
        </div>
        <SearchResult  />
      </div>
    );
  }
}

export default App;