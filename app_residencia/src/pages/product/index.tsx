import React, { useContext, } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { CarrinhoContext } from "../../context/carrinhoContext";


export const Produto = ({ route, navigation }) => {

    const { adicionarProduto } = useContext(CarrinhoContext);

    const handleAddProduto = () => {
        adicionarProduto();
    }

    return (
        <View style={styles.container}>
            <View style={styles.container_imagem}>
                <Text>Imagem</Text>
            </View>
            <View style={styles.container_produto}>
                <Text>{ }</Text>
                <Text>{ }</Text>
                <TouchableOpacity onPress={() => handleAddProduto()}>
                    <Text>Comprar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Comprar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        padding: 16,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    container_imagem: {
        width: '50%'
    },
    container_produto: {
        width: '50%'
    }
});