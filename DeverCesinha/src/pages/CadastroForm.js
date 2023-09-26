import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
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
    axios.post('http://192.168.0.104:3000/dados', data)
    .then(data => setReponse(data.data)) 
  }
  const messageForUser = JSON.stringify(response)
  .slice(12)
  .replace(':', ' ')
  .replace('{', ' ')
  .replace('}', ' ')
  .replace('"', ' ')
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={(e) => setName(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(e) => setEmail(e)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={(e) => setPassword(e)}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
      <Text>{messageForUser}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});
