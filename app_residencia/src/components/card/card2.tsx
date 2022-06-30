import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { Card, Text } from 'react-native-elements';
import { TouchableOpacity } from "react-native";



const Card2 = () => {
    return (



        <View style={styles.container}>
            <View style={styles.fileira}>
                <TouchableOpacity style={styles.card1}>
                    <View style={styles.card}><Card.Image source={require('../../assets/fundo.png')} style={styles.estilo_imagem}><View style={styles.viewText}><Text style={styles.fontcard}>Terror</Text></View></Card.Image></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card1}>
                    <View style={styles.card}><Card.Image source={require('../../assets/fundo.png')} style={styles.estilo_imagem}><View style={styles.viewText}><Text style={styles.fontcard}>Terror</Text></View></Card.Image></View>
                </TouchableOpacity>
            </View>
            <View style={styles.fileira}>
                <TouchableOpacity style={styles.card1}>
                    <View style={styles.card}><Card.Image source={require('../../assets/fundo.png')} style={styles.estilo_imagem}><View style={styles.viewText}><Text style={styles.fontcard}>Terror</Text></View></Card.Image></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card1}>
                    <View style={styles.card}><Card.Image source={require('../../assets/fundo.png')} style={styles.estilo_imagem}><View style={styles.viewText}><Text style={styles.fontcard}>Terror</Text></View></Card.Image></View>
                </TouchableOpacity>
            </View>
            <View style={styles.fileira}>
                <TouchableOpacity style={styles.card1}>
                    <View style={styles.card}><Card.Image source={require('../../assets/fundo.png')} style={styles.estilo_imagem}><View style={styles.viewText}><Text style={styles.fontcard}>Terror</Text></View></Card.Image></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card1}>
                    <View style={styles.card}><Card.Image source={require('../../assets/fundo.png')} style={styles.estilo_imagem}><View style={styles.viewText}><Text style={styles.fontcard}>Terror</Text></View></Card.Image></View>
                </TouchableOpacity>
            </View>
            <View style={styles.fileira}>
                <TouchableOpacity style={styles.card1}>
                    <View style={styles.card}><Card.Image source={require('../../assets/fundo.png')} style={styles.estilo_imagem}><View style={styles.viewText}><Text style={styles.fontcard}>Terror</Text></View></Card.Image></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card1}>
                    <View style={styles.card}><Card.Image source={require('../../assets/fundo.png')} style={styles.estilo_imagem}><View style={styles.viewText}><Text style={styles.fontcard}>Terror</Text></View></Card.Image></View>
                </TouchableOpacity>
            </View>
            <View style={styles.fileira}>
                <TouchableOpacity style={styles.card1}>
                    <View style={styles.card}><Card.Image source={require('../../assets/fundo.png')} style={styles.estilo_imagem}><View style={styles.viewText}><Text style={styles.fontcard}>Terror</Text></View></Card.Image></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card1}>
                    <View style={styles.card}><Card.Image source={require('../../assets/fundo.png')} style={styles.estilo_imagem}><View style={styles.viewText}><Text style={styles.fontcard}>Terror</Text></View></Card.Image></View>
                </TouchableOpacity>
            </View>

        </View>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faf6f6',
        padding: 10,
    },
    fileira: {
        height: 170,
        width: '100%',
        display: "flex",
        flexDirection: "row",
        padding: 10,
        justifyContent: 'space-around',
        backgroundColor: '#f7f1f1',
    },
    card: {
        width: '100%',
        height: 120,
        display: "flex",
        justifyContent: 'space-around',
    },
    card1: {
        width: '40%',
        height: 120,
    },
    viewText: {
        flex: 1,
        position: "absolute",
    },
    fontcard: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    estilo_imagem: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

    }
})

export default Card2;