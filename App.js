// import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';
import Saludar from './src/components/Saludar';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is the start of great new things</Text>
      <Text>we will going to do our best application</Text>
      <Text>React native is the best things</Text>
      {/* <Text>Lol</Text> */}
      <LoginForm />
      <Saludar firstname="Daniel" lastname="Figueroa" />
      {/* <Saludar firstname="Estebana" lastname="Banda" /> */}
      <Saludar firstname='Lucas' lastname={7}/> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
