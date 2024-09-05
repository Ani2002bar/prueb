import React, { useState } from 'react';
import { ScrollView, TextInput, Text, View } from 'react-native';
import { ListItem } from '@rneui/base';

const Componente01 = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <ScrollView>
      <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 20 }}>
        Pantalla Principal
      </Text>

      {/* Campo de entrada para texto */}
      <View style={{ paddingHorizontal: 20 }}>
        <TextInput
          placeholder="Ingresa un texto"
          value={inputValue}
          onChangeText={setInputValue}
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginBottom: 20,
            borderRadius: 5,
          }}
        />
      </View>

      {/* Navegación a Props02 */}
      <ListItem 
        bottomDivider 
        onPress={() => navigation.navigate('Props02', { nombre: 'Texto', estado: false })}
      >
        <ListItem.Content>
          <ListItem.Title>Props02</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      {/* Navegación a Axios03 */}
      <ListItem bottomDivider onPress={() => navigation.navigate('Axios03')}>
        <ListItem.Content>
          <ListItem.Title>Axios03</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      {/* Navegación a AsyncStorage04 */}
      <ListItem bottomDivider onPress={() => navigation.navigate('AsyncStorage04')}>
        <ListItem.Content>
          <ListItem.Title>AsyncStorage04</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  );
};

export default Componente01;