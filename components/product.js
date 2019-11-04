import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'

const ProductCard = props => {
  return (
    <View style = {styles.product_card}>
      <Text>{props.product_name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  product_card: {
    borderColor: '#aaa',
    borderWidth: 1,
    margin: 4,
    padding: 8
  }
})

export default ProductCard;
