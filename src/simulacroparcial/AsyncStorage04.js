import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input, Button, ListItem, Text } from '@rneui/themed';

const AsyncStorageEjemplo = () => {
  const [name, setName] = useState('');
  const [cedula, setCedula] = useState('');  // Agregado para manejar la cédula de identidad
  const [key, setKey] = useState('');
  const [dataList, setDataList] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    listar();
  }, []);

  const listar = async () => {
    try {
      setIsDisabled(false);
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
      setDataList(items.map(([id, value]) => ({ id, value: JSON.parse(value) })));  // Parsear para leer tanto nombre como cédula
    } catch (error) {
      console.error('Error loading lista', error);
    }
  };

  const editar = (id, value) => {
    setKey(id);
    setName(value.name);
    setCedula(value.cedula);  // Cargar la cédula
    setIsDisabled(true);
  };

  const guardar = async () => {
    try {
      if (name.trim() === '' || cedula.trim() === '') {
        Alert.alert('Error', 'Los campos no pueden estar vacíos');
        return;
      }

      if (key.trim() === '') { // Guardar nuevo
        const key = `item_${Date.now()}`;
        const newItem = { name, cedula };
        await AsyncStorage.setItem(key, JSON.stringify(newItem));
        setName('');
        setCedula('');  // Limpiar el campo de cédula
        setKey('');
        listar();
        Alert.alert('Éxito', 'Datos guardados');
      } else { // Actualizar
        actualizar();
      }
    } catch (error) {
      Alert.alert('Error', 'Error al guardar los datos');
      console.error(error);
    }
  };

  const actualizar = async () => {
    try {
      const updatedItem = { name, cedula };
      await AsyncStorage.setItem(key, JSON.stringify(updatedItem));
      setName('');
      setCedula('');  // Limpiar el campo de cédula
      setKey('');
      listar();
      Alert.alert('Éxito', 'Datos actualizados');
    } catch (error) {
      Alert.alert('Error', 'Error al actualizar los datos');
      console.error(error);
    }
  };

  const eliminar = async (id) => {
    try {
      await AsyncStorage.removeItem(id);
      listar();
      Alert.alert('Éxito', 'Datos eliminados');
    } catch (error) {
      Alert.alert('Error', 'Error al eliminar los datos');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Input
          placeholder="Código"
          disabled={isDisabled}
          value={key}
          style={styles.input}
        />
      </View>
      <View>
        <Input
          placeholder="Ingrese un nombre"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>
      <View>
        <Input
          placeholder="Ingrese la cédula"
          value={cedula}  // Input para la cédula
          onChangeText={setCedula}
          style={styles.input}
        />
      </View>
      <Button title={isDisabled ? "Actualizar" : "Guardar"} onPress={guardar} />
      <Text h4 style={styles.title}>Lista de Datos:</Text>
      {dataList.map(({ id, value }) => (
        <ListItem key={id} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{value.name}</ListItem.Title>
            <ListItem.Subtitle>{value.cedula}</ListItem.Subtitle>  {/* Mostrar la cédula */}
          </ListItem.Content>
          <Button icon={{ name: 'edit', type: 'font-awesome', size: 15, color: 'white' }} onPress={() => editar(id, value)} />
          <Button icon={{ name: 'trash', type: 'font-awesome', size: 15, color: 'white' }} onPress={() => eliminar(id)} />
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 15,
  },
  title: {
    marginVertical: 10,
  },
});

export default AsyncStorageEjemplo;
