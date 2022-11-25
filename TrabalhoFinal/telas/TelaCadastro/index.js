import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput,
    Button, View, Alert } from 'react-native';
import { inserirContato } from '../../services/ContatoService';


export default function TelaCadastro({ navigation }) {
    const [nome, onChangeNome] = useState("");
    const [nomeCompleto, onChangeNomeCompleto] = useState(null);
    const [telefone, onChangeTelefone] = useState(null);
    const [email, onChangeEmail] = useState(null);
    const [end, onChangeEnd] = useState(null);

    return (
        <SafeAreaView style={estilos.painel}>
            <Text style={estilos.titulo}>Novo contato</Text>

            <Text>Nome</Text>
            <TextInput
                style={estilos.input}
                onChangeText={onChangeNome}
                placeholder="Informe o nome"
                value={nome}
            />

            <Text>Nome completo</Text>
            <TextInput
                style={estilos.input}
                onChangeText={onChangeNomeCompleto}
                placeholder="Informe o nome completo"
                value={nomeCompleto}
            />

            <Text>Telefone</Text>
            <TextInput
                style={estilos.input}
                onChangeText={onChangeTelefone}
                value={telefone}
                placeholder="Informe o telefone"
                keyboardType="tel"
            />

            <Text>e-mail</Text>
            <TextInput
                style={estilos.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Informe o e-mail"
                keyboardType="email"
            />

             <Text>end</Text>
            <TextInput
                style={estilos.input}
                onChangeText={onChangeEnd}
                value={end}
                placeholder="Informe o endereco"
                keyboardType="end"
            />    

            <View style={estilos.painelBotoes}>
                <Button
                    onPress={() => {
                        const novoContato = {
                            nome: nome,
                            nomeCompleto: nomeCompleto,
                            telefone: telefone,
                            email: email,
                            end: end,
                        };
                        if (nome.length === 0) {
                            Alert.alert("Erro", "O nome do contato é uma informação obrigatória!");
                            return;
                        }
                        inserirContato({ novoContato });
                        navigation.navigate('Listagem');
                    }}
                    title="Adicionar"
                    color="#00FFFF"
                />

                <Button
                    onPress={() => {
                        navigation.goBack();
                    }}
                    title="Cancelar"
                />
            </View>

        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    painel: {
        paddingHorizontal: 8,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    titulo: {
        fontSize: 22,
        marginTop: 6,
        marginBottom: 10,
    },
    painelBotoes: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 12,
        justifyContent: 'space-between',
    },
});
