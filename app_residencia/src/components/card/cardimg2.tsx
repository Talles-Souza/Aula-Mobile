import * as React from 'react';
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import { StyleSheet, Animated } from 'react-native';
import { JumpingTransition } from 'react-native-reanimated';

export const MyCardImg2 = () => {
    return (
        <View>
            <TouchableOpacity style={styles.card}>
                <Card >
                    <Card.Image style={styles.imagem} source={require('../../assets/fundo.png')} />
                    <Card.Divider />
                    <Card.Title>
                        Título
                    </Card.Title>
                    <Text>Descrição</Text>
                </Card>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: 400,
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
    },
    imagem: {
        height: 200
    }

});