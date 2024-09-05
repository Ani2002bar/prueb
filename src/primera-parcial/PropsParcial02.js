import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropsParcial02 = ({ route }) => {
  // Desestructurar los parámetros recibidos desde la pantalla anterior
  const { nombre, semestre } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Mi nombre es: {nombre}, actualmente estoy en el semestre {semestre}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f0e6', // Fondo pastel suave
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: '#5e4b44', // Marrón oscuro pastel
    textAlign: 'center',
  },
});

export default PropsParcial02;
