import React from 'react'
import { View, Text, Button } from 'react-native';

// import React from 'react'

function HomeScreen(props) {
    const { navigation } = props;
    console.log(props)

    const goToSettings = () => {
        navigation.navigate("Settings")
       }
  return (
    <View>
        <Text>Estamos en HomeScreen</Text>
        <Text>Estamos en HomeScreen</Text>
        <Text>Estamos en HomeScreen</Text>
        <Text>Estamos en HomeScreen</Text>
        <Text>Estamos en HomeScreen</Text>
        <Text>Estamos en HomeScreen</Text>
        <Text>Estamos en HomeScreen</Text>
        <Text>Estamos en HomeScreen</Text>
        <Button onPress={goToSettings} title='Ir a a justes' />
    </View>
  )
}

export default HomeScreen
