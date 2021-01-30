import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import IconCalendar from 'react-native-vector-icons/Octicons'
import IconFlag from 'react-native-vector-icons/Entypo'
import IconBank from 'react-native-vector-icons/FontAwesome'
import IconCardNumber from 'react-native-vector-icons/MaterialCommunityIcons'
import IconKeyCard from 'react-native-vector-icons/Ionicons'
import IconChangeColor from 'react-native-vector-icons/MaterialIcons'

export default function ScrollSettingsCard(props) {
  return (
    <ScrollView style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
      <TouchableOpacity style={styles.containerButton}
        onPress={props.onClickDaysOpenModal}>
        <View style={styles.button}>
          <IconCalendar
            name='calendar'
            size={30}
            color='#ADD8E6' />
        </View>
        <Text style={styles.title}>Vencimentos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerButton}
        onPress={props.onClickFlagOpenModal}>
        <View style={styles.button}>
          <IconFlag
            name='flag'
            size={30}
            color='#ADD8E6' />
        </View>
        <Text style={styles.title}>Bandeira</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerButton}
        onPress={props.onClickCardFinalNumberOpenModal}>
        <View style={styles.button}>
          <IconCardNumber
            name='form-textbox-password'
            size={30}
            color='#ADD8E6' />
        </View>
        <Text style={styles.title}>Número</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerButton}
        onPress={props.onClickBankNameOpenModal}>
        <View style={styles.button}>
          <IconBank
            name='credit-card-alt'
            size={20}
            color='#ADD8E6' />
        </View>
        <Text style={styles.title}>Banco</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerButton}
        onPress={props.onClickCKeyOpenModal}>
        <View style={styles.button}>
          <IconKeyCard
            name='key'
            size={30}
            color='#ADD8E6' />
        </View>
        <Text style={styles.title}>Senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerButton}
        onPress={props.onClickChangeBackgroundColorOpenModal}>
        <View style={styles.button}>
          <IconChangeColor
            name='color-lens'
            size={30}
            color='#ADD8E6' />
        </View>
        <Text style={styles.title}>Cor</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF8C00',
    width: 350,
    left: '6.5%',
    bottom: 15,
    height: 80,
    borderRadius: 20
  },
  containerButton: {
    alignItems: 'center',
    margin: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00008B',
    width: 45,
    height: 45,
    borderRadius: 22.5
  },
  title: {
    color: '#ADD8E6',
    fontSize: 10
  }
})