/**
 * @file Example for Component ActivityIndicator
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import React from 'react'
import { ActivityIndicator, Button, View } from 'react-native'
import { Section, H1 } from 'k-react-native-layout'

export default class ActivityIndicatorScreen extends React.Component {
  static navigationOptions = {
    title: 'Component ActivityIndicator'
  }

  state = {
    animating: true
  }

  render () {
    return (
      <View>
        <Section>
          <H1>default</H1>
          <ActivityIndicator />
        </Section>
        <Section>
          <H1>color = #ff0000 </H1>
          <ActivityIndicator color='#ff0000' />
        </Section>
        <Section>
          <H1>size = large</H1>
          <ActivityIndicator size='large' />
        </Section>
        <Section>
          <H1>toggle animating = true or false</H1>
          <Button onPress={() => { this.setState({animating: !this.state.animating}) }} title='Press Me to Toggle' />
          <ActivityIndicator animating={this.state.animating} />
        </Section>
      </View>
    )
  }
}
