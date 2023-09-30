import { createStackNavigator } from "@react-navigation/stack";
import CadastroForm from "../src/pages/CadastroForm";
import Buttons from "../src/components/Buttons";
import MostrarDados from "../src/pages/MostrarDados";
export default props => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Buttons">
            <Stack.Screen
                name="Buttons"
                component={Buttons}
                options={
                    {
                        title: '',
                        headerShown: false,
                        headerTransparent: true
                    }
                } />
            <Stack.Screen
                name="Cadastro"
                component={CadastroForm}
                options={
                    {
                        title: '',
                        headerShown: false,
                        headerTransparent: true
                    }
                } />
                <Stack.Screen
                name="MostrarDados"
                component={MostrarDados}
                options={
                    {
                        title: '',
                        headerShown: false,
                        headerTransparent: true
                    }
                } />
        </Stack.Navigator>
    )
}