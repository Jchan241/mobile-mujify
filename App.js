import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

import Nav from './components/nav';
import ProductCard from './components/product';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('http://localhost:3000/api/v2/storefront/products')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {


    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <Nav />
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 50, backgroundColor: '#eee' }}>
        <Nav />
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => < ProductCard product_name={item.attributes.name} />}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
