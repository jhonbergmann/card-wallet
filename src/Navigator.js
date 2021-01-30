import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const { Navigator, Screen } = createStackNavigator()

import StatusBarComponent from './components/StatusBar'
import Home from './screens/Home'
import LoadToMain from './screens/LoadToMain'
import Main from './screens/Main'

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBarComponent />
      <Navigator screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#F2F3F5' }
      }}>
        <Screen
          name='Home'
          component={Home}
        />
        <Screen
          name='LoadToMain'
          component={LoadToMain}
        />
        <Screen
          name='Main'
          component={Main}
        />
      </Navigator>
    </NavigationContainer>
  )
}