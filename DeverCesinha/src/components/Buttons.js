import { TouchableHighlight, Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default props => {
    const navigation = useNavigation();
    return (
        <View style={styles.buttonContainer}>
            <TouchableHighlight onPress={() => navigation.navigate('Cadastro')} style={styles.Btn}>
                <Text>Cadastrar</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('MostrarDados')} style={styles.Btn}>
                <Text>Login</Text>
            </TouchableHighlight>
        </View>

    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        backgroundColor: '#16292E',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    Btn: {
        backgroundColor: '#dddd62',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '10%',
        borderWidth: 2,
    }
    
})
