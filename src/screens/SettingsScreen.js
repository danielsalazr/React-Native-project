import { View, Text, Button } from 'react-native'
// import React from 'react'

export default function SettingsScreen(props) {
    const { navigation }  = props;

    const goToHome = (pageName) => {
        navigation.navigate(pageName)
    }
  return (
    <View>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Button onPress={() => goToHome("Home")} title="ir a home"/>

    </View>
  )
}