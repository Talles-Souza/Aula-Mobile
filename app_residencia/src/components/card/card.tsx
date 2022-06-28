import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Axios from "../../api/axios";
import { useEffect, useState } from "react";


type CategoriaType = {
    idCategoria: number;
    nomeCategoria: string;
    nomeImagem: string;
}


const MyCard = (route, navigation) => {


    const { token } = route.params;
    const [categoria, setCategoria] = useState<CategoriaType[]>([]);

    useEffect(() => {
        getDadosCategoria();
    }, []);

    const getDadosCategoria = async () => {
        Axios.get(
            '/categoria',
            { headers: { "Authorization": `Bearer ${token}` } }

        ).then(result => {
            console.log("dados das categorias" + JSON.stringify(result.data));
            setCategoria(result.data)
        }).catch((error) => {
            console.log("Erro ao carregar " + JSON.stringify(error));

        });
    }

    console.log('Token' + token);



    return (
        <ScrollView style={styles.scroll_categorias} horizontal={true}>

            {

                categoria.map((k, i) => (

                    <TouchableOpacity onPress={() => console.log('categotia 1')} key={i}
                        style={styles.botao_categoria}
                    >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 25 }}>
                            <Card style={{ display: 'flex', width: 99, height: 90, justifyContent: 'center', backgroundColor: '#00ff00' }}>
                                <Card.Content style={{ justifyContent: 'center', marginTop: 18, display: 'flex' }}>
                                    <Text style={styles.categoria_nome}>Categoria</Text>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                ))}

            {/* <TouchableOpacity onPress={() => console.log('categotia 2')}
                style={styles.botao_categoria}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 25 }}>
                    <Card style={{ display: 'flex', width: 99, height: 90, justifyContent: 'center', backgroundColor: '#00ff00' }}>
                        <Card.Content style={{ justifyContent: 'center', marginTop: 18, display: 'flex' }}>
                            <Text style={styles.categoria_nome}>Categoria</Text>
                        </Card.Content>
                    </Card>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('categotia 3')}
                style={styles.botao_categoria}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 25 }}>
                    <Card style={{ display: 'flex', width: 99, height: 90, justifyContent: 'center', backgroundColor: '#00ff00' }}>
                        <Card.Content style={{ justifyContent: 'center', marginTop: 18, display: 'flex' }}>
                            <Text style={styles.categoria_nome}>Categoria</Text>
                        </Card.Content>
                    </Card>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('categotia 4')}
                style={styles.botao_categoria}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 25 }}>
                    <Card style={{ display: 'flex', width: 99, height: 90, justifyContent: 'center', backgroundColor: '#00ff00' }}>
                        <Card.Content style={{ justifyContent: 'center', marginTop: 18, display: 'flex' }}>
                            <Text style={styles.categoria_nome}>Categoria</Text>
                        </Card.Content>
                    </Card>
                </View>
            </TouchableOpacity> */}
        </ScrollView >

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