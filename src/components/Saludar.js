import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from "prop-types";

// import React from 'react'

function Saludar(props) {

    const {firstname, lastname} = props;
  
    return (
        <View>
            <Text> Hola {firstname} {lastname} como estas</Text>
        </View>
  )
}


export default Saludar

// Propiedades default para los props para los casos que tengamos que tener un valor predefinido
// siempre que no asignemos nada a los props del compoente

// Saludar.defaultProps = {
//     firstname: "David",
//     lastname: "Toro"
// }


// Definir los tipos para los props 
Saludar.propTypes = {
    firstname : PropTypes.string.isRequired, // hace el prop string como oblgatorio
    lastname: PropTypes.string,  // Asi que sea string es opcional
}