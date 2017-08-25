/**
 * @file Example for Component Button
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import { Section, H1 } from 'k-react-native-layout'

export default class ButtonScreen extends React.Component {
  static navigationOptions = {
    title: 'Component Button'
  }

  onPressLearnMore () {
    Alert.alert('Learn more about this purple button')
  }

  render () {
    return (
      <Section>
        <H1>Component Button</H1>
        <Button onPress={this.onPressLearnMore} title='Simple Button' accessibilityLabel='Learn more about this simple button' />
      </Section>
    )
  }
}
