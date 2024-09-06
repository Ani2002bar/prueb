import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ComponenteParcial01 = () => {
  const [nombre, setNombre] = useState('');
  const [semestre, setSemestre] = useState('');
  const navigation = useNavigation();

  const items = [
    { id: '1', title: 'PropsParcial02', screen: 'PropsParcial02' },
    { id: '2', title: 'AxiosParcial03', screen: 'AxiosParcial03' },
    { id: '3', title: 'AsyncStorageParcial04', screen: 'AsyncStorageParcial04' },
  ];

  // Solo permite números en el campo de texto//l
  const handleSemestreInput = (text) => {
    const numericText = text.replace(/[^0-9]/g, ''); // Remueve todo excepto números
    setSemestre(numericText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen Primera Parcial</Text>
      <TextInput
        placeholder="Ingresar nombre completo"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />
      <TextInput
        placeholder="Ingresar semestre"
        value={semestre}
        onChangeText={handleSemestreInput}
        style={styles.input}
        keyboardType="numeric"
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemButton}
            onPress={() => navigation.navigate(item.screen, { nombre: nombre, semestre: semestre })}
          >
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f7f0e6', // Fondo pastel suave
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#5e4b44', // Marrón oscuro pastel
  },
  input: {
    borderWidth: 1,
    borderColor: '#d3c1b4',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    color: '#333',
  },
  itemButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: '#b29e95', // Marrón oscuro pastel
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ComponenteParcial01;