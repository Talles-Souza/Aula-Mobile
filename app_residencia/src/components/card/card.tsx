import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';







const MyCard = (props: any) => {
    const dadosCategoria = props.dados;
    console.log(dadosCategoria);



    return (

        <TouchableOpacity onPress={() => console.log('categotia 1')}
            style={styles.botao_categoria}
        >
            <Card style={{ display: 'flex', width: 99, height: 90, backgroundColor: '#1cd1f1' }}>
                <Card.Content style={{ justifyContent: 'center', marginTop: 18, display: 'flex' }}>
                    <Text style={styles.categoria_nome}>{dadosCategoria.nomeCategoria}</Text>
                </Card.Content>
            </Card>
        </TouchableOpacity>


    );

}; const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555',
        padding: 16,
    },
    scroll_categorias: {
        flexGrow: 0,
    },
    botao_categoria: {
        alignItems: 'center',
        padding: 10,

    },
    categoria_nome: {
        color: '#fff',
        textAlign: 'center'
    }
})

export default MyCard;