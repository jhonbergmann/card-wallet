import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
  Modal,
  StyleSheet,
  Image
} from 'react-native'

import Lottie from 'lottie-react-native'
import IconCloseModal from 'react-native-vector-icons/AntDesign'

import LottieModalMonkeyWarningButton from '../../../lottie/LottieModalMonkeyWarningButton.json'

export default function ModalMonkeyWarningButton(props) {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Aviso!', 'Para voltar, primeiro clique em fechar.')
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.logoImg}
              source={require('../../../assets/imgs/logoHome/logo.png')} />
            <TouchableOpacity style={styles.closeButton}
              onPress={props.onClickCloseModal}>
              <IconCloseModal
                name='closecircle'
                size={30}
                color='#00008B' />
              <Text style={[styles.text, { fontSize: 12 }]}>Fechar</Text>
            </TouchableOpacity>
            <Lottie
              style={{ height: 300 }}
              resizeMode='contain'
              source={LottieModalMonkeyWarningButton}
              autoPlay
              loop
            />
            <Text style={[styles.text, { fontSize: 15 }]}>SUAS FATURAS ESTÃO EM DIA?</Text>
            <Text style={[styles.text, { fontSize: 20 }]}>"ESTOU DE OLHO!"</Text>
          </View>
        </View>
      </Modal>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00008B'
  },
  modalView: {
    width: 350,
    height: 600,
    justifyContent: 'space-around',
    backgroundColor: "#FF8C00",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  logoImg: {
    bottom: 15,
    height: 100,
    resizeMode: 'contain'
  },
  text: {
    textAlign: 'center',
    color: "#F2F3F5",
    fontSize: 15
  },
  closeButton: {
    alignItems: 'center',
    position: 'absolute',
    left: 20,
    top: 20
  }
})