import { createStackNavigator } from "@react-navigation/stack";
import CadastroForm from "../src/pages/CadastroForm";
import Buttons from "../src/components/Buttons";
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
        </Stack.Navigator>
    )
}