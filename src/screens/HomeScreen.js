import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native';

// import React from 'react'

function HomeScreen(props) {
    const { navigation } = props;
    console.log(props)

    const goToSettings = () => {
        navigation.navigate("Settings")
       }
  return (
    <SafeAreaView>
        <Text>Estamos en HomeScreen</Text>
        <Text>Estamos en HomeScreen</Text>
        <Text>Estamos en HomeScreen</Text>
        <Text>Estamos en HomeScreen</Text>
        <Text>Estamos en HomeScreen</Text>
        <Text>Estamos en HomeScreen</Text>
        <Text>Estamos en HomeScreen</Text>
        <Text>Estamos en HomeScreen</Text>
        <Button onPress={goToSettings} title='Ir a a justes' />
    </SafeAreaView>
  )
}

export default HomeScreen
