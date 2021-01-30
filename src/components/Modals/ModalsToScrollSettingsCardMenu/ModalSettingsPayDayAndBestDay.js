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

export default function ModalSettingsDay(props) {

  function warningDay() {
    Alert.alert(
      'Aviso!',
      'Para você adicionar ou alterar os dados, preencher nos campos de incluir dados.'
    )
  }

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
              source={require('../../../../assets/imgs/logoHome/logo.png')} />
            <View style={styles.loadDataContainer}>
              <Text style={styles.text}>O dia de vencimento é</Text>
              <TouchableOpacity onPress={() => warningDay()}>
                <View style={styles.dayTextContainer}>
                  <Text style={[styles.text, { fontSize: 18 }]}>{props.payDay}</Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.text}>Melhor dia de compra é</Text>
              <TouchableOpacity onPress={() => warningDay()}>
                <View style={styles.dayTextContainer}>
                  <Text style={[styles.text, { fontSize: 18 }]}>{props.bestDay}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.inclusionOfDataContainer}>
              <Text style={[styles.text, { fontSize: 15, bottom: 5 }]}>
                Incluir dados
              </Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                  placeholder='ex: 01'
                  textAlign='center'
                  keyboardType='numeric'
                  onChangeText={text => props.setPayDay(text)} />
                <TextInput style={styles.input}
                  placeholder='ex: 31'
                  textAlign='center'
                  keyboardType='numeric'
                  onChangeText={text => props.setBestDay(text)} />
              </View>
              <Text style={[styles.text, { fontSize: 15, top: 5 }]}>
                Para adicionar ou alterar os dados de vencimento e/ou o melhor dia de compra,
                basta preencher os dados nos campos acima!
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
    height: 50,
    resizeMode: 'contain'
  },
  input: {
    width: 50,
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
  loadDataContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    borderRadius: 20,
    padding: 15
  },
  dayTextContainer: {
    width: 50,
    maxWidth: 50,
    height: 50,
    maxHeight: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00008B",
    borderWidth: 2,
    borderColor: '#FF8C00'
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