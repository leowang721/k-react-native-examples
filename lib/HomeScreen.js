/**
 * @file Home Screen to navigate
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import { StyleSheet, ScrollView, FlatList, Text, TouchableHighlight } from 'react-native'

const list = [
  'ActivityIndicator', 'Button'
]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  getItemView = ({item}) => {
    return <TouchableHighlight onPress={() => this.props.navigation.navigate(item.key)} style={styles.item}>
      <Text>{item.key}</Text>
    </TouchableHighlight>
  }

  render () {
    return (
      <FlatList data={list.map(name => ({key: name}))} renderItem={this.getItemView} />
    )
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#cdcdcd',
    borderStyle: 'solid'
  }
})
