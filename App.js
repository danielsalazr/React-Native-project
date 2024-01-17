// import React from 'react'
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginForm from './src/components/LoginForm';
import Saludar from './src/components/Saludar';

import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';





export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text>This is the start of great new things</Text>
        <Text>we will going to do our best application</Text>
        <Text>React native is the best things</Text>
        <LoginForm />
        <Saludar firstname="Daniel" lastname="Figueroa" />
        <Saludar firstname='Lucas' lastname={7}/> 
        <StatusBar style="auto" />
      </View> */}
      {/* <NavigationStack /> */}
      <NavigationTab />
    </NavigationContainer>
    
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
