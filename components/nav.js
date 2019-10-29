import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'

const Nav = props => {
  return (
    <View style = {styles.nav}>
      <Text> hello</Text>
      <TextInput />
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    padding: 10
  }
})

export default Nav;
