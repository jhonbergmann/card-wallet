import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Feather'

import ModalSettingsInstructionCardMenu from '../components/Modals/ModalSettingsInstructionCardMenu'

export default function Card(props) {

  const [ModalSettingsInstructionCardMenuVisible, setModalSettingsInstructionCardMenu] = useState(false)

  return (
    <TouchableOpacity onPress={() => {setModalSettingsInstructionCardMenu(true)}}>
      <View style={[styles.container, { backgroundColor: props.backgroundColor }]} >
        <View style={styles.bankNameContainer}>
          <ModalSettingsInstructionCardMenu
            modalVisible={ModalSettingsInstructionCardMenuVisible}
            onClickCloseModal={() => setModalSettingsInstructionCardMenu(!ModalSettingsInstructionCardMenuVisible)}
          />
          <Text style={styles.bankNameText}>{props.bankName}</Text>
        </View>
        <View style={styles.rowContainerChips}>
          <Image style={styles.imgChip}
            source={require('../../assets/imgs/Card/chip.png')} />
          <Icon style={{ right: 30 }}
            name='rss' size={30} color='#ADD8E6' />
        </View>
        <Text style={styles.cardNumber}>
          **** - **** - **** - {props.cardNumber}
        </Text>
        <View style={styles.rowContainerDays}>
          <View>
            <Text style={styles.textData}>Vencimento</Text>
            <Text style={styles.payDay}>
              {props.payDay}
            </Text>
          </View>
          <View>
            <Text style={styles.textData}>Dia de Compra</Text>
            <Text style={styles.bestDay}>
              {props.bestDay}
            </Text>
          </View>
          <Image style={styles.imgFlag}
            source={props.imgFlag} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: 350,
    height: 200,
    margin: 20,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6
  },
  bankNameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
    width: 150,
    maxWidth: 150,
    height: 60,
    maxHeight: 60,
    borderRadius: 5,
    borderTopStartRadius: 30,
    borderBottomEndRadius: 30,
    backgroundColor: '#rgba(52, 52, 52, 0.3)'
  },
  bankNameText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#ADD8E6',
    bottom: '20%'
  },
  rowContainerChips: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  imgChip: {
    left: 30,
    alignSelf: 'flex-start',
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  cardNumber: {
    fontSize: 20,
    color: '#ADD8E6'
  },
  rowContainerDays: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-around'
  },
  textData: {
    fontSize: 10,
    color: '#ADD8E6'
  },
  payDay: {
    fontSize: 20,
    color: '#ADD8E6'
  },
  bestDay: {
    fontSize: 20,
    color: '#ADD8E6'
  },
  imgFlag: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  }
})