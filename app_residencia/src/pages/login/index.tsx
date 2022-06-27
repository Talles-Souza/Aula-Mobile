import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button, Icon, Input, Text } from "react-native-elements";
import { LoginService } from "../../services/loginService";


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async (email: string, senha: string) => {
        console.log("Email : ", email, "Senha :", senha);

        const RespostaLogin = await LoginService(email, senha)
        if (!RespostaLogin) {
            Alert.alert(
                "Erro",
                "",
                [
                    { text: "Ok" },
                    { text: "Não foi possivel fazer o login" }
                ]

            );
        } else {
            navigation.navigate('Home', {
                screen: 'TabNavigationScreen',
                params: {
                    screen: 'Home',

                    params: {
                        token: RespostaLogin.token,
                    }
                }
            });
        }



    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto_entrada}>{'Bem-vindo'}</Text>
            <Input
                placeholder='E-mail'
                onChangeText={setEmail}
                value={email}
                leftIcon={<Icon name='user' color='#000' type='font-awesome' size={24} />}
            />
            <Input
                placeholder='E-mail'
                onChangeText={setSenha}
                value={senha}
                leftIcon={<Icon name='key' color='#000' type='font-awesome' size={24} />}
            />

            <Button
                title='Entrar'
                onPress={() => handleLogin(email, senha)}
                titleStyle={styles.title_Button}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7054B6',
        padding: 16,
        alignItems: 'stretch',
        justifyContent: 'center'

    },
    texto_entrada: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        color: '#ffffff',

    },
    title_Button: {
        fontSize: 30,
    }
})

export default Login;