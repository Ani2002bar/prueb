import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Componente01 = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  const items = [
    { id: '1', title: 'Props02', screen: 'Props02' },
    { id: '2', title: 'Axios03', screen: 'Axios03' },
    { id: '3', title: 'AsyncStorage04', screen: 'AsyncStorage04' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Principal</Text>
      <TextInput
        placeholder="Ingresa un texto"
        value={inputText}
        onChangeText={setInputText}
        style={styles.input}
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemButton}
            onPress={() => navigation.navigate(item.screen, { nombre: inputText, estado: false })}
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
    color: '#5e4b44', // Marrón oscuro
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
    backgroundColor: '#b29e95', // Marrón oscuro pastel para un estilo minimalista
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemText: {
    color: '#fff', // Texto blanco para contraste
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Componente01;
