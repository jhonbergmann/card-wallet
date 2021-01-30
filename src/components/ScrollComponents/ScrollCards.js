import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native'

import Cardx001 from '../Cards/Card-x001'
import Cardx002 from '../Cards/Card-x002'
import Cardx003 from '../Cards/Card-x003'

export default function ShowScrollCards() {

  return (
    <ScrollView style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
      <View style={styles.containerCards}>
        <Cardx001 />
        <Cardx002 />
        <Cardx003 />
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008B'
  },
  containerCards: {
    justifyContent: 'space-around'
  }
})