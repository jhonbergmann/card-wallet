import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import Header from '../components/Header'
import ScrollCards from '../components/ScrollComponents/ScrollCards'

export default function Main() {
  return (
    <View style={styles.container}>
      <ScrollCards />
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})