import React, { useState, useEffect } from 'react'
import {
  View,
  Alert,
  StyleSheet
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Card from '../Card'
import ScrollSettingsCard from '../ScrollComponents/ScrollSettingsCard'
import ImgFlagVisa from '../../../assets/imgs/Flag/visaLogo.png'
import ImgFlagMaster from '../../../assets/imgs/Flag/masterLogo.png'

import ModalSettingsPayDayAndBestDay from '../Modals/ModalsToScrollSettingsCardMenu/ModalSettingsPayDayAndBestDay'
import ModalSettingsFlag from '../Modals/ModalsToScrollSettingsCardMenu/ModalSettingsFlag'
import ModalSettingsFinalCardNumber from '../Modals/ModalsToScrollSettingsCardMenu/ModalSettingsFinalCardNumber'
import ModalSettingsBankName from '../Modals/ModalsToScrollSettingsCardMenu/ModalSettingsBankName'
import ModalSettingsKeyCard from '../Modals/ModalsToScrollSettingsCardMenu/ModalSettingsKeyCard'
import ModalSettingsBackgroundColor from '../Modals/ModalsToScrollSettingsCardMenu/ModalSettingsBackgroundColor'

export default function Card01() {

  /*useState*/

  const [payDay, setPayDay] = useState()
  const [bestDay, setBestDay] = useState()
  const [flag, setFlag] = useState()
  const [finalCardNumber, setFinalCardNumber] = useState('****')
  const [bankName, setBankName] = useState()
  const [key, setKey] = useState()
  const [changeBackgroundColor, setchangeBackgroundColor] = useState({ backgroundColor: '' })

  const [modalSettingsDayVisible, setModalSettingsDayVisible] = useState(false)
  const [modalSettingsFlagVisible, setModalSettingsFlagVisible] = useState(false)
  const [modalSettingsFinalCardNumberVisible, setModalSettingsFinalCardNumberVisible] = useState(false)
  const [modalSettingsBankNameVisible, setModalSettingsBankNameVisible] = useState(false)
  const [modalSettingsKeyVisible, setModalSettingsKeyVisible] = useState(false)
  const [modalSettingsBackgroundColorVisible, setModalSettingsBackgroundColorVisible] = useState(false)

  /*AsyncStorage*/

  const savePayDayData = async () => {
    try {
      await AsyncStorage.setItem("@keyPayDay-x001", payDay)
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Você esqueceu de preencher algum dado!'
      )
    }
  }

  const loadPayDayData = async () => {
    try {
      let payDay = await AsyncStorage.getItem("@keyPayDay-x001")

      if (payDay !== null) {
        setPayDay(payDay)
      }
    } catch (err) {
      alert(err)
    }
  }

  const saveFlagData = async () => {
    try {
      await AsyncStorage.setItem("@keyFlag-x001", JSON.stringify(flag))
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Erro ao definir a bandeira.'
      )
    }
  }

  const loadFlagData = async () => {
    try {
      let flag = await AsyncStorage.getItem("@keyFlag-x001")

      if (flag !== null) {
        setFlag(JSON.parse(flag))
      }
    } catch (err) {
      alert(err)
    }
  }

  const saveBestDayData = async () => {
    try {
      await AsyncStorage.setItem("@keyBestDay-x001", bestDay)
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Você esqueceu de preencher algum dado!'
      )
    }
  }

  const loadBestDayData = async () => {
    try {
      let bestDay = await AsyncStorage.getItem("@keyBestDay-x001")

      if (bestDay !== null) {
        setBestDay(bestDay)
      }
    } catch (err) {
      alert(err)
    }
  }

  const saveFinalCardNumberData = async () => {
    try {
      await AsyncStorage.setItem("@keyFinalCardNumber-x001", finalCardNumber)
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Erro ao salvar o número final do seu card.'
      )
    }
  }

  const loadFinalCardNumberData = async () => {
    try {
      let finalCardNumber = await AsyncStorage.getItem("@keyFinalCardNumber-x001")

      if (finalCardNumber !== null) {
        setFinalCardNumber(finalCardNumber)
      }
    } catch (err) {
      alert(err)
    }
  }

  const saveBankNameData = async () => {
    try {
      await AsyncStorage.setItem("@keybankName-x001", bankName)
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Erro ao salvar o nome do banco.'
      )
    }
  }

  const loadBankNameData = async () => {
    try {
      let bankName = await AsyncStorage.getItem("@keybankName-x001")

      if (bankName !== null) {
        setBankName(bankName)
      }
    } catch (err) {
      alert(err)
    }
  }

  const saveKeyData = async () => {
    try {
      await AsyncStorage.setItem("@keyKeyCard-x001", key)
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Erro ao salvar a senha do seu card.'
      )
    }
  }

  const loadKeyData = async () => {
    try {
      let key = await AsyncStorage.getItem("@keyKeyCard-x001")

      if (key !== null) {
        setKey(key)
      }
    } catch (err) {
      alert(err)
    }
  }

  const saveBackgroundColor = async () => {
    try {
      await AsyncStorage.setItem("@keyBackgroundColor-x001", changeBackgroundColor)
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Erro ao definir a cor do seu card.'
      )
    }
  }

  const loadBackgroundColor = async () => {
    try {
      let changeBackgroundColor = await AsyncStorage.getItem("@keyBackgroundColor-x001")

      if (changeBackgroundColor !== null) {
        setchangeBackgroundColor(changeBackgroundColor)
      }
    } catch (err) {
      alert(err)
    }
  }

  /*useEffect*/

  useEffect(() => {
    loadPayDayData(), loadBestDayData(), loadFlagData(), loadFinalCardNumberData(), loadBankNameData(), loadKeyData(), loadBackgroundColor()
  }, [])

  /*saved data warning functions*/

  function clickSaveEveryDayData() {
    Alert.alert(
      'Dia(s) salvo(s) com sucesso!',
      `Seu dia de vencimento da fatura foi alterado para todo o dia ${payDay} e seu melhor dia de compra é todo dia ${bestDay}.`
    )
    saveBestDayData(), savePayDayData()
    console.log(payDay, bestDay)
  }

  function clickSaveFlag() {
    Alert.alert(
      'Dado salvo com sucesso!',
      'A bandeira do seu card já foi registrada.'
    )
    saveFlagData()
  }

  function clickSaveFinalNumberData() {
    Alert.alert(
      'Dado salvo com sucesso!',
      `Seu card foi salvo com o número final ${finalCardNumber}.`
    )
    saveFinalCardNumberData()
  }

  function clickSaveBankNameData() {
    Alert.alert(
      'Dado salvo com sucesso!',
      `Seu card é o(a) ${bankName}.`
    )
    saveBankNameData()
  }

  function clickSaveDataKey() {
    Alert.alert(
      'Dado salvo com sucesso!',
      `A senha deste card agora é ${key}.`
    )
    saveKeyData()
  }

  function clickSaveDataBackgroundColor() {
    Alert.alert(
      'Dado salvo com sucesso!',
      `A sua cor favorita de fundo foi gerada e salva com sucesso, o código é ${changeBackgroundColor}.`
    )
    saveBackgroundColor()
  }

  /*selected data warning functions*/

  function onClickChangeVisaFlag() {
    Alert.alert(
      'Tudo certo!',
      'Bandeira selecionada com sucesso, agora basta clicar em (Salvar).'
    )
    setFlag(ImgFlagVisa)
  }

  function onClickChangeMasterFlag() {
    Alert.alert(
      'Tudo certo!',
      'Bandeira selecionada com sucesso, agora basta clicar em (Salvar).'
    )
    setFlag(ImgFlagMaster)
  }

  /*function to generate random background colors*/

  function randomHex() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  /*action click functions to generate background colors*/

  function onClickChangeBackgroundColor() {
    console.log('Gerando cor aleátoria :)')
    console.log(changeBackgroundColor)
    setchangeBackgroundColor(randomHex())
  }

  return (
    <View style={styles.container}>
      <Card
        bankName={bankName}
        cardNumber={finalCardNumber}
        payDay={payDay}
        bestDay={bestDay}
        imgFlag={flag}
        backgroundColor={changeBackgroundColor}
      />
      <ScrollSettingsCard
        onClickDaysOpenModal={() => { setModalSettingsDayVisible(true) }}
        onClickFlagOpenModal={() => { setModalSettingsFlagVisible(true) }}
        onClickCardFinalNumberOpenModal={() => { setModalSettingsFinalCardNumberVisible(true) }}
        onClickBankNameOpenModal={() => { setModalSettingsBankNameVisible(true) }}
        onClickCKeyOpenModal={() => { setModalSettingsKeyVisible(true) }}
        onClickChangeBackgroundColorOpenModal={() => { setModalSettingsBackgroundColorVisible(true) }}
      />
      <ModalSettingsPayDayAndBestDay
        payDay={payDay}
        bestDay={bestDay}
        setPayDay={setPayDay}
        setBestDay={setBestDay}
        modalVisible={modalSettingsDayVisible}
        onClickCloseModal={() => setModalSettingsDayVisible(!modalSettingsDayVisible)}
        onClickSaveData={() => clickSaveEveryDayData()}
      />
      <ModalSettingsFlag
        onClickChangeVisaFlag={onClickChangeVisaFlag}
        onClickChangeMasterFlag={onClickChangeMasterFlag}
        modalVisible={modalSettingsFlagVisible}
        onClickCloseModal={() => setModalSettingsFlagVisible(!modalSettingsFlagVisible)}
        onClickSaveData={() => clickSaveFlag()}
      />
      <ModalSettingsFinalCardNumber
        setFinalNumber={setFinalCardNumber}
        modalVisible={modalSettingsFinalCardNumberVisible}
        onClickCloseModal={() => setModalSettingsFinalCardNumberVisible(!modalSettingsFinalCardNumberVisible)}
        onClickSaveData={() => clickSaveFinalNumberData()}
      />
      <ModalSettingsBankName
        setBankName={setBankName}
        modalVisible={modalSettingsBankNameVisible}
        onClickCloseModal={() => setModalSettingsBankNameVisible(!modalSettingsBankNameVisible)}
        onClickSaveData={() => clickSaveBankNameData()}
      />
      <ModalSettingsKeyCard
        keyCard={key}
        setKey={setKey}
        modalVisible={modalSettingsKeyVisible}
        onClickCloseModal={() => setModalSettingsKeyVisible(!modalSettingsKeyVisible)}
        onClickSaveData={() => clickSaveDataKey()}
      />
      <ModalSettingsBackgroundColor
        onClickChangeBackgroundColor={onClickChangeBackgroundColor}
        modalVisible={modalSettingsBackgroundColorVisible}
        onClickCloseModal={() => setModalSettingsBackgroundColorVisible(!modalSettingsBackgroundColorVisible)}
        onClickSaveData={() => clickSaveDataBackgroundColor()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})