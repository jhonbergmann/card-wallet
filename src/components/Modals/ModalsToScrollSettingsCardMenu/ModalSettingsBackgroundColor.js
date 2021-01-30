import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Alert,
  Modal,
  StyleSheet
} from 'react-native'

import IconCloseModal from 'react-native-vector-icons/AntDesign'
import IconChangeColor from 'react-native-vector-icons/MaterialIcons'

export default function ModalSettingsBackgroundColor(props) {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Aviso!', 'Para voltar, primeiro clique em fechar.')
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.logoImg}
              source={require('../../../../assets/imgs/logoHome/logo.png')} />
            <View style={styles.inclusionOfDataContainer}>
              <Text style={[styles.text, { fontSize: 15, bottom: 5 }]}>
                Gerarar cores
              </Text>
              <TouchableOpacity onPress={props.onClickChangeBackgroundColor}>
                <View style={styles.changeColorButton}>
                  <IconChangeColor
                    name='color-lens'
                    size={30}
                    color='#ADD8E6' />
                </View>
              </TouchableOpacity>
              <Text style={[styles.text, { fontSize: 15, top: 5 }]}>
                Para adicionar ou alterar uma cor favorita no seu card,
                basta você gerar cores clicando no botão acima!
              </Text>
              <Text style={[styles.text, { fontSize: 15, top: 10, }]}>
                Não esqueça, para que os dados sejam salvos
                você precisa clicar em (Salvar).
              </Text>
            </View>
            <TouchableOpacity style={styles.closeButton}
              onPress={props.onClickCloseModal}>
              <IconCloseModal
                name='closecircle'
                size={30}
                color='#FF8C00' />
              <Text style={[styles.text, { fontSize: 12 }]}>Fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton}
              onPress={props.onClickSaveData}>
              <Text style={[styles.text, { fontSize: 18 }]}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    width: 350,
    height: 380,
    justifyContent: 'space-around',
    backgroundColor: "rgba(52, 52, 52, 0.6)",
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
    height: 50,
    resizeMode: 'contain'
  },
  text: {
    textAlign: 'center',
    color: "#F2F3F5",
    fontSize: 15
  },
  inclusionOfDataContainer: {
    top: 5,
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    borderRadius: 20,
    padding: 20
  },
  changeColorButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF8C00',
    width: 45,
    height: 45,
    borderRadius: 22.5
  },
  closeButton: {
    alignItems: 'center',
    position: 'absolute',
    left: 20,
    top: 20
  },
  saveButton: {
    top: 15,
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FF8C00',
    alignItems: 'center',
    justifyContent: 'center'
  }
})