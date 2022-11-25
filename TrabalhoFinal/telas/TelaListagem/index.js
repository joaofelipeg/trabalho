import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, 
    FlatList, StatusBar, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ExcluirContato from '../../componentes/ExcluirContato';
import { listarContatos, selecionarContato } from '../../services/ContatoService';


function Contato({ contato }) {
    const navigation = useNavigation();

    return (
        <View style={estilos.itemContainer}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Visualizacao', { ...contato });
                selecionarContato({ id: contato.id });
            }} style={[estilos.item]}>
                <Text style={estilos.titulo}>{ contato?.nome }</Text>
            </TouchableOpacity>
            <ExcluirContato contato={contato} />
        </View>
    );
}

function Cabecalho() {
    return (
        <View style={estilos.painel}>
            <Text style={estilos.titulo}>Meus contatos</Text>
        </View>
    );
}

function Rodape() {
    const navigation = useNavigation();
    return (
        <View style={estilos.painel}>
            <Button
                onPress={() => {
                    navigation.navigate('Cadastro', { contato: null });
                }}
                title="Cadastrar"
                color="#00CED1"
                accessibilityLabel="Cadastrar um novo contato"
            />
        </View>
);
}

function ListaVazia() {
    return (
        <View style={estilos.painel}>
            <Text>Não tem nenhum contato cadastrado.</Text>
            <Text>Faça o cadastro utilizando o botão "Cadastrar"</Text>
        </View>
    );
}

export default function TelaListagem() {
    const [selectedId, setSelectedId] = useState(null);

    const renderContato = ({ item: contato }) => {
        const backgroundColor = contato?.id === selectedId ? "#00CED1" : "#00CED1";
        const color = contato?.id === selectedId ? 'white' : 'black';
        return (
            <Contato
                contato={contato}
                onPress={() => setSelectedId(contato.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };
    var meusContatos = listarContatos();

    return (
        <SafeAreaView style={estilos.container}>
            <FlatList
                data={meusContatos}
                renderItem={renderContato}
                keyExtractor={contato => contato.id}
                ListHeaderComponent={Cabecalho}
                ListFooterComponent={Rodape}
                ListEmptyComponent={ListaVazia}
            />
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#00CED1',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: '80%',
    },
    titulo: {
        fontSize: 20,
    },
    itemContainer: {
        flexDirection: 'row',
    },
    painel: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
});
