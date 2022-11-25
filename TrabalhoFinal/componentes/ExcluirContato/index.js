import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { excluirContato } from '../../services/ContatoService';
import lixeira from '../../assets/lixeira.png';


export default function ExcluirContato({ contato }) {
  const navigation = useNavigation();
  return (
        <TouchableOpacity onPress={() => {
            excluirContato({ id: contato.id });
            navigation.navigate('Agenda');
        } }>
          <Image source={ lixeira } style={estilos.lixeira} />
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
  lixeira: {
    margin: 6,
    width: 20,
    height: 20,
  },
});
