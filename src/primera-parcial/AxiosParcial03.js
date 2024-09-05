import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const AxiosParcial03 = () => {
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        setAlbums(response.data);
        setFilteredAlbums(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  // Filtrar álbumes basados en la búsqueda
  const handleSearch = (text) => {
    setSearch(text);
    const filtered = albums.filter(album =>
      album.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredAlbums(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar álbumes por título"
        value={search}
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredAlbums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
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
  searchInput: {
    borderWidth: 1,
    borderColor: '#d3c1b4',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    color: '#333',
  },
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#b29e95', // Marrón oscuro pastel
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    color: '#fff', // Texto blanco para contraste
  },
});

export default AxiosParcial03;
