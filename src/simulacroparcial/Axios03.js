import { Card, Button, SearchBar, Text } from '@rneui/themed';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

const Axios03 = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [visible, setVisible] = useState(false);

  // Realizar la petición GET para obtener la lista de usuarios
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  // Función para actualizar la búsqueda
  const updateSearch = (search) => {
    setSearch(search);
    setFilteredData(
      data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    );
  };

  // Función para manejar la visibilidad del overlay
  const toggleOverlay = (item) => {
    setSelectedItem(item);
    setVisible(!visible);
  };

  return (
    <View>
      {/* Barra de búsqueda */}
      <SearchBar
        round
        placeholder="Buscar..."
        onChangeText={updateSearch}
        value={search}
      />

      {/* Lista de usuarios con Cards */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card containerStyle={{ marginBottom: 10 }}>
            <Card.Title>{item.name}</Card.Title>
            <Card.Divider />
            <Text>Email: {item.email}</Text>
            <Text>Teléfono: {item.phone}</Text>
            <Button
              title="Ver más"
              onPress={() => toggleOverlay(item)}
              buttonStyle={{ marginTop: 10 }}
            />
          </Card>
        )}
      />

      {/* Overlay para mostrar información adicional */}
      {selectedItem && (
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{selectedItem.name}</Text>
            <Text>Email: {selectedItem.email}</Text>
            <Text>Teléfono: {selectedItem.phone}</Text>
            <Button title="Cerrar" onPress={toggleOverlay} />
          </View>
        </Overlay>
      )}
    </View>
  );
};

export default Axios03;
