import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#963527' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'Third', title: 'Third' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    Third: ThirdRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      tabBarPosition='bottom'
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

// import React, { Component } from 'react';
// import { FlatList, ActivityIndicator, Text, View } from 'react-native';

// import Nav from './components/nav';
// import ProductCard from './components/product';

// export default class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { isLoading: true }
//   }

//   componentDidMount() {
//     // Need to -b  for rails server
//     return fetch('http://localhost:3000/api/v2/storefront/products')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.data,
//         }, function () {

//         });

//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }



//   render() {


//     if (this.state.isLoading) {
//       return (
//         <View style={{ flex: 1, padding: 20 }}>
//           <Nav />
//           <ActivityIndicator />
//         </View>
//       )
//     }

//     return (
//       <View style={{ flex: 1, paddingTop: 50, backgroundColor: '#eee' }}>
//         <Nav />
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({ item }) => < ProductCard product_name={item.attributes.name} />}
//           keyExtractor={({ id }, index) => id}
//         />
//       </View>
//     );
//   }
// }
