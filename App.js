/**
 * @file Main Entrance
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './lib/HomeScreen'
import ActivityIndicator from './lib/component/ActivityIndicator'
import Button from './lib/component/Button'

const Navigator = StackNavigator({
  HomeScreen: {screen: HomeScreen},
  ActivityIndicator: {screen: ActivityIndicator},
  Button: {screen: Button}
})

export default class App extends React.Component {
  render () {
    return (
      <Navigator />
    )
  }
}
