import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

import ModaMonkeyWarningButton from './Modals/ModalMonkeyWarningButton.js'
import ModalSettingsProfile from '../components/Modals/ModalSettingsProfile'

export default function Header() {

  const [ModalMonkeyWarningButtonVisible, seModalMonkeyWarningButtonVisible] = useState(false)
  const [ModalSettingsProfileVisible, setModalSettingsProfileVisible] = useState(false)
  const [name, setName] = useState('Eu')

  const saveNameData = async () => {
    try {
      await AsyncStorage.setItem("@keyName", name)
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Você esqueceu de preencher algum dado!'
      )
    }
  }

  const loadNameData = async () => {
    try {
      let name = await AsyncStorage.getItem("@keyName")

      if (name !== null) {
        setName(name)
      }
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    loadNameData()
  }, [])

  function saveData() {
    Alert.alert(
      'Salvo com sucesso!',
      `Seu nome é ${name}, caso tenha errado ao incluir os dados, você pode alterar novamente.`
    )
    saveNameData()
  }

  return (
    <LinearGradient style={styles.container}
      colors={['#DAB26C', '#FF8C00']} >
      <View style={styles.profileContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <TouchableOpacity onPress={() => { seModalMonkeyWarningButtonVisible(true) }}>
        <View style={styles.imgContainer}>
          <Image style={styles.logoImg}
            source={require('../../assets/imgs/logoHome/logo.png')} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setModalSettingsProfileVisible(true) }}>
        <View style={styles.buttonSettingsContainer}>
          <Icon
            name='user-cog'
            size={20}
            color='#F2F3F5' />
        </View>
        <ModaMonkeyWarningButton
          modalVisible={ModalMonkeyWarningButtonVisible}
          onClickCloseModal={() => seModalMonkeyWarningButtonVisible(!ModalMonkeyWarningButtonVisible)}
        />
        <ModalSettingsProfile
          setName={setName}
          modalVisible={ModalSettingsProfileVisible}
          onClickSave={() => saveData()}
          onClickCloseModal={() => setModalSettingsProfileVisible(!ModalSettingsProfileVisible)}
        />
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 65
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    maxWidth: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00008B'
  },
  name: {
    color: '#F2F3F5',
    fontSize: 10,
    textAlign: 'center'
  },
  imgContainer: {
    alignItems: 'center',
    bottom: 15,
    height: 60,
    width: 60,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#FF8C00',
    backgroundColor: '#00008B'
  },
  logoImg: {
    height: 40,
    width: 55,
    top: 10
  },
  buttonSettingsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    top: '10%',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00008B'
  }
})