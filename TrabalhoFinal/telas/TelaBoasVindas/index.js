import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';


export default function TelaBoasVindas({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.mensagem}>Seja bem-vindo Prof Lucas!</Text>
      <Button
        onPress={() => {
            navigation.navigate('Agenda');
        }}
        title="Ver lista de contatos"
        color="#00008B"
        accessibilityLabel="Entrar para valer na aplicação"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mensagem: {
    fontSize: 40,
  },
});
