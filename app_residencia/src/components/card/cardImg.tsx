import * as React from 'react';
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import { StyleSheet, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



//const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyCardImg = (props: any, navigation) => {

    const dadosProduto = props.dados;
    console.log(dadosProduto);

    return (


        <TouchableOpacity style={styles.card} onPress={() => { navigation.navigate({ name: 'ProdutoScreen'}) }}>
            <Card >
                <Card.Image source={require('../../assets/fundo.png')} />
                <Card.Divider />
                <Card.Title>
                    {dadosProduto.nomeProduto}
                </Card.Title>
                <Text>Descrição</Text>
            </Card>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: 200,
        justifyContent: 'center',
        padding: 0,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: -12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 20,
    }

});

export default MyCardImg;