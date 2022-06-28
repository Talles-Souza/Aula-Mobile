import React from "react";
import MyHeader from "../../components/header/header";
import MyCard from "../../components/card/card";
import MyCardImg from "../../components/card/cardImg";
import { MyCardImg2 } from "../../components/card/cardimg2";
import { View } from "react-native";
import { Title } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Axios from "../../api/axios";
import { useEffect, useState } from "react";

type CategoriaType = {
    idCategoria: number;
    nomeCategoria: string;
    nomeImagem: string;
}


const Home = ({ route, navigation }) => {

    const { token } = route.params;
    const [categoria, setCategoria] = useState<CategoriaType[]>([]);

useEffect(() =>{

}, []);

    const getDadosCategoria = async () => {
        Axios.get(
            '/categoria',
            { headers: { "Authorization": `Bearer ${token}` } }

        ).then(result => {
            console.log("dados das categorias" + JSON.stringify(result.data));
            setCategoria(result.data)
        });
    }

    console.log('Token' + token);

    return (
        <ScrollView >
            <MyHeader />
            <MyCard />
            <View style={{ display: 'flex', marginTop: 15, marginLeft: 15 }}>
                <Title>Recente</Title>
            </View>
            <MyCardImg />
            <MyCardImg2 />
        </ScrollView>
    );
}
export default Home;