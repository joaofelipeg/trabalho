import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaBoasVindas from './telas/TelaBoasVindas';
import TelaListagem from './telas/TelaListagem';
import TelaCadastro from './telas/TelaCadastro';
import TelaVisualizacao from './telas/TelaVisualizacao';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Bemvindos'
      >
        <Stack.Screen
          name="Bemvindos"
          component={TelaBoasVindas}
          options={{ title: 'Bem-vindos!' }}
        />
        <Stack.Screen name="Agenda" component={TelaListagem} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Visualizacao" component={TelaVisualizacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
