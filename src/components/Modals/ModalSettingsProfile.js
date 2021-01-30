import React from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
  Modal,
  StyleSheet
} from 'react-native'

import IconCloseModal from 'react-native-vector-icons/AntDesign'

export default function ModalSettingsProfile(props) {
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
            <View style={styles.inclusionOfDataContainer}>
              <Text style={[styles.text, { fontSize: 15, bottom: 5 }]}>
                Incluir dados
              </Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                  placeholder='ex: João Pedro'
                  textAlign='center'
                  keyboardType='default'
                  onChangeText={text => props.setName(text)} />
              </View>
              <Text style={[styles.text, { fontSize: 15, top: 5 }]}>
                Para você ter uma melhor experiência,
                basta você preencher com seu nome completo aqui no campo acima!
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
                color='#00008B' />
              <Text style={[styles.text, { fontSize: 12 }]}>Fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton}
              onPress={props.onClickSave}>
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
  input: {
    width: 200,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#F2F3F5',
    borderWidth: 2,
    borderColor: '#00008B',
    margin: 5
  },
  inputContainer: {
    flexDirection: 'row'
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
    backgroundColor: '#00008B',
    alignItems: 'center',
    justifyContent: 'center'
  }
})