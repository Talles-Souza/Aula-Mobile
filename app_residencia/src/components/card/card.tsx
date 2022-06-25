import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
const MyCard = () => {
    return (
        <ScrollView style={styles.scroll_categorias} horizontal={true}>
            <TouchableOpacity onPress={() => console.log('categotia 1')}
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
            <TouchableOpacity onPress={() => console.log('categotia 2')}
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
            </TouchableOpacity>
        </ScrollView>

    );

}; const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555',
        padding: 16,
    },
    scroll_categorias: {
        flexGrow:0,
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