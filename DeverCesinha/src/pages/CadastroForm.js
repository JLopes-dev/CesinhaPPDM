import React, { useState } from 'react';
import { View, TextInput, TouchableHighlight, StyleSheet, Text } from 'react-native';
import axios from 'axios'
export default props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setReponse] = useState(null)
  const data = {
    name,
    email,
    password
  }

  function handleCadastro() {
    axios.post('http://10.73.111.137:3000/dados', data)
    .then(data => setReponse(data.data.message)) 
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor='white'
        value={name}
        onChangeText={(e) => setName(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor='white'
        value={email}
        onChangeText={(e) => setEmail(e)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor='white'
        value={password}
        onChangeText={(e) => setPassword(e)}
        secureTextEntry
      />
      <TouchableHighlight onPress={() => handleCadastro()} style={styles.button}>
        <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableHighlight> 
      <Text style={{fontSize: 20, color: 'white'}}>{response}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16292E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 30,
    paddingBottom: 40,
    color: '#dddd62'
  },
  input: {
    height: 40,
    width: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    color: 'white'
  },
  button: {
    marginTop: '5%',
    width: 150,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#dddd62',
  },
  textButton: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20
  }
});
