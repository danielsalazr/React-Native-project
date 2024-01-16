// import React from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';

import React from 'react'

export default  function LoginForm() {
  return (
    <View >
        <TextInput placeholder='Email' style={styles.inputs}/>
        <TextInput placeholder='Password' style={styles.inputs}/>
        <Button  title="Enviar" onPress={() => console.log("Enviado")}/>
        <Text>Componente LoginForm pero melo melo caramelo</Text>
    </View>
         
    
  )
}


const styles = StyleSheet.create({
    inputs: {
        borderWidth: 1, // Espesor del borde
        borderColor: '#000000', // Color del borde
        padding: 2,
        marginBottom:16,
    },
  });
//LoginForm

