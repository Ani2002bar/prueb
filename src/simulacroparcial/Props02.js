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
        <Text style={styles.value}>{estado ? 'Activo' : 'Inactivo'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  infoCard: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'linear-gradient(45deg, #ffecd2, #fcb69f)', // Degradado pastel suave
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a4a4a',
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
});

export default Props02;