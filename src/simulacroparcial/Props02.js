import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Props02 = ({ route }) => {
  const { nombre, estado } = route.params;

  return (
    <View style={styles.container}>
      {/* Visualizar los datos dentro de un componente Text */}
      <Text style={styles.text}>
        Nombre: {nombre} - Estado: {estado ? 'Vigente' : 'Caducado'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Props02;