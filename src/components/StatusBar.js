import React from 'react'
import {
  StatusBar,
  View
} from 'react-native'

export default function StatusBarComponent() {
  return (
    <View>
      <StatusBar
        barStyle='light-content'
        hidden={true}
        backgroundColor='#000' />
    </View>
  )
}