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

import IconCloseModal from 'react-native-vector-icons/AntDesign'
import IconCalendar from 'react-native-vector-icons/Octicons'
import IconFlag from 'react-native-vector-icons/Entypo'
import IconBank from 'react-native-vector-icons/FontAwesome'
import IconCardNumber from 'react-native-vector-icons/MaterialCommunityIcons'
import IconKeyCard from 'react-native-vector-icons/Ionicons'
import IconChangeColor from 'react-native-vector-icons/MaterialIcons'
import Lottie from 'lottie-react-native'

import LottieModalSettingsInstructionCardMenu from '../../../lottie/LottieModalSettingsInstructionCardMenu.json'

export default function ModalSettingsInstructionCardMenu(props) {
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
            <View style={styles.textContainer}>
              <Text style={styles.text}>Para você adicinar ou alterar algo em seu card,
              basta você deslizar com o toque no menu de opções abaixo do seu card.</Text>
            </View>
            <View style={styles.settingsContainer}>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <IconCalendar
                    name='calendar'
                    size={30}
                    color='#ADD8E6' />
                </View>
                <Text style={styles.title}>Vencimentos</Text>
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <IconFlag
                    name='flag'
                    size={30}
                    color='#ADD8E6' />
                </View>
                <Text style={styles.title}>Bandeira</Text>
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <IconCardNumber
                    name='form-textbox-password'
                    size={30}
                    color='#ADD8E6' />
                </View>
                <Text style={styles.title}>Número</Text>
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <IconBank
                    name='credit-card-alt'
                    size={20}
                    color='#ADD8E6' />
                </View>
                <Text style={styles.title}>Banco</Text>
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <IconKeyCard
                    name='key'
                    size={30}
                    color='#ADD8E6' />
                </View>
                <Text style={styles.title}>Senha</Text>
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <IconChangeColor
                    name='color-lens'
                    size={30}
                    color='#ADD8E6' />
                </View>
                <Text style={styles.title}>Cor</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.closeButton}
              onPress={props.onClickCloseModal}>
              <IconCloseModal
                name='closecircle'
                size={30}
                color='#00008B' />
              <Text style={[styles.text, { fontSize: 12 }]}>Fechar</Text>
            </TouchableOpacity>
            <Lottie
              style={{ height: 100 }}
              resizeMode='contain'
              source={LottieModalSettingsInstructionCardMenu}
              autoPlay
              loop
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Você tem as opções de
              Vencimentos, Bandeira, Número, Banco, Senha e Cor do seu card para adicionar e/ou alterar :)</Text>
            </View>
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
  settingsContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#00008B',
    borderRadius: 10,
    padding: 15
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    borderRadius: 20,
    padding: 15
  },
  logoImg: {
    bottom: 15,
    height: 100,
    resizeMode: 'contain'
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00008B',
    width: 45,
    height: 45,
    borderRadius: 22.5
  },
  title: {
    color: '#ADD8E6',
    fontSize: 10,
    textAlign: 'center'
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