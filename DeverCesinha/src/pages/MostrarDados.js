import { View, Button, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import axios from "axios";

export default props => {
    const [userName, setUserName] = useState('')
    const [data, setData] = useState(null)
    const [password, setPassWord] = useState('')
    async function showUser() {
       await axios.get(`http://192.168.0.102:3000/dados/${userName}/${password}`)
            .then(data => setData((data.data.message)))
            .catch(err => console.log(' Error ' + err))
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>Login</Text>
            <TextInput
                style={{ fontSize: 25, padding: 20 }}
                textAlign="center"
                value={userName}
                onChangeText={(e) => setUserName(e)}
                placeholder="Digite seu userName:" />

            <TextInput
                style={{ fontSize: 25, padding: 20 }}
                textAlign="center"
                value={password}
                onChangeText={(e) => setPassWord(e)}
                placeholder="Digite seu userName:" />
            <Button onPress={() => showUser()} title="Mostrar dados" />
            <Text style={{ fontSize: 20 }}>{data}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})