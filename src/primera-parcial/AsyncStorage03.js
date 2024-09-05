import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [materia, setMateria] = useState('');
  const [calificaciones, setCalificaciones] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('data');
      if (storedData) {
        setData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addData = async () => {
    if (!codigo || !materia || !calificaciones) {
      Alert.alert('Error', 'Por favor ingresa todos los campos');
      return;
    }

    const newData = { codigo, materia, calificaciones };

    try {
      const storedData = await AsyncStorage.getItem('data');
      const currentData = storedData ? JSON.parse(storedData) : [];
      currentData.push(newData);
      await AsyncStorage.setItem('data', JSON.stringify(currentData));
      setData(currentData);
      setCodigo('');
      setMateria('');
      setCalificaciones('');
    } catch (error) {
      console.error(error);
    }
  };

  const deleteData = async (index) => {
    try {
      const storedData = await AsyncStorage.getItem('data');
      const currentData = storedData ? JSON.parse(storedData) : [];
      currentData.splice(index, 1);
      await AsyncStorage.setItem('data', JSON.stringify(currentData));
      setData(currentData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRUD con AsyncStorage</Text>
      <TextInput
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
        style={styles.input}
      />
      <TextInput
        placeholder="Materia"
        value={materia}
        onChangeText={setMateria}
        style={styles.input}
      />
      <TextInput
        placeholder="Calificaciones"
        value={calificaciones}
        onChangeText={setCalificaciones}
        style={styles.input}
      />
      <Button title="Agregar" onPress={addData} />

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text>Código: {item.codigo}</Text>
            <Text>Materia: {item.materia}</Text>
            <Text>Calificaciones: {item.calificaciones}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteData(index)}
            >
              <Text style={styles.deleteButtonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f7f0e6',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#5e4b44',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d3c1b4',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#b29e95',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#d9534f', // Rojo para eliminar
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AsyncStorageParcial04;
