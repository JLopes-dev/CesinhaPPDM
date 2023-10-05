import { View, TouchableHighlight, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import axios from "axios";

export default props => {
    const [userName, setUserName] = useState('')
    const [data, setData] = useState(null)
    const [password, setPassWord] = useState('')
    async function showUser() {
       await axios.get(`http://10.73.111.137:3000/dados/${userName}/${password}`)
            .then(data => setData((data.data.message)))
            .catch(err => console.log(' Error ' + err))
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, color: '#dddd62' }}>Login</Text>
            <TextInput
                style={{ fontSize: 25, padding: 20, color: 'white' }}
                textAlign="center"
                placeholderTextColor='white'
                value={userName}
                onChangeText={(e) => setUserName(e)}
                placeholder="userName" />

            <TextInput
                style={{ fontSize: 25, padding: 20, color: 'white'}}
                textAlign="center"
                value={password}
                placeholderTextColor='white'
                onChangeText={(e) => setPassWord(e)}
                placeholder="senha" />
                <TouchableHighlight onPress={() => showUser()} style={styles.button}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableHighlight> 
            <Text style={{ fontSize: 20, color: 'white' }}>{data}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#16292E'
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
})