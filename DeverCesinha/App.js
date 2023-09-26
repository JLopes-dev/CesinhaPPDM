import { View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './routes/Nav';

export default function App() {
  return (
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
  )
}