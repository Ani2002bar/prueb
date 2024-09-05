import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Props02 = ({ route }) => {
  const { nombre, estado } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.infoCard}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{nombre}</Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.label}>Estado:</Text>
        <Text style={[styles.value, estado ? styles.active : styles.inactive]}>
          {estado ? 'Activo' : 'Inactivo'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f7f0e6', // Fondo marrón claro pastel
    flex: 1,
    justifyContent: 'center',
  },
  infoCard: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d3c1b4', // Bordes suaves en tono marrón claro
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#5e4b44', // Marrón oscuro para las etiquetas
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#7a5c52', // Marrón intermedio para los valores
  },
  active: {
    color: '#4CAF50', // Verde para "Activo"
    fontWeight: 'bold',
  },
  inactive: {
    color: '#F44336', // Rojo para "Inactivo"
    fontWeight: 'bold',
  },
});

export default Props02;