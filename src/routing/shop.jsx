import React, { Component } from "react";
import { Link } from "react-router-dom";
class Shop extends Component {
  state = {
    items: {},
    data: [],
  };
  fetchItems = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/store/get`
    );
    const items = await data.json();
    console.log(items.data);
    this.setState({ items: items, data: items.data });
  };
  componentDidMount() {
    this.fetchItems();
  }

  render() {
    return this.state.data.map((item) => (
      <h1 key={item.itemId}>
        <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
      </h1>
    ));
  }
}

export default Shop;
