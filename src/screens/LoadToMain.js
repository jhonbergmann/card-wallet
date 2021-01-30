import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import Lottie from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

import LottieLoadToMain from '../../lottie/LottieLoadToMain.json'

export default function LoadToMain() {

  const navigation = useNavigation()

  function handleNavigationToMain() {
    navigation.navigate('Main')
  }

  setTimeout(
    () => { handleNavigationToMain() },
    2000
  )

  return (
    <View style={styles.container} >
      <Lottie
        style={{ height: 300 }}
        resizeMode='contain'
        source={LottieLoadToMain}
        autoPlay
        loop
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00008B'
  }
})