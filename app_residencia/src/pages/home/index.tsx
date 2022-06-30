import React, { useContext } from "react";
import MyCard from "../../components/card/card";
import MyCardImg from "../../components/card/cardImg";
import { MyCardImg2 } from "../../components/card/cardimg2";
import { View } from "react-native";
import { Title } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Axios from "../../api/axios";
import { useEffect, useState } from "react";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import MySearch from '../../components/search';



type CategoriaType = {
    idCategoria: number;
    nomeCategoria: string;
    nomeImagem: string;
}


const Home = ({ route, navigation }) => {
    const { usuario } = useContext(AutenticacaoContext);
    // const { token } = route.params;
    const [categorias, setCategoria] = useState<CategoriaType[]>([]);

    useEffect(() => {
        getDadosCategoria();
    }, []);

    const getDadosCategoria = async () => {
        Axios.get(
            '/categoria',
            { headers: { "Authorization": `Bearer ${usuario.token}` } }

        ).then(result => {
            console.log("dados das categorias" + JSON.stringify(result.data));
            setCategoria(result.data)
        }).catch((error) => {
            console.log("Erro ao carregar " + JSON.stringify(error));

        });
    }


    //Get Produto

    const [produtos, setProduto] = useState<any[]>([]);

    useEffect(() => {
        getDadosProduto();
    }, []);

    const getDadosProduto = async () => {
        Axios.get(
            '/produto',
            { headers: { "Authorization": `Bearer ${usuario.token}` } }

        ).then(result => {
            console.log("dados das categorias" + JSON.stringify(result.data));
            setProduto(result.data)
        }).catch((error) => {
            console.log("Erro ao carregar " + JSON.stringify(error));

        });
    }


    console.log('Token' + usuario.token);

    return (
        <ScrollView >
            {/* <MyHeader /> */}

            <MySearch />
            <ScrollView horizontal={true}>
                {categorias.map((categoria, indice) => (
                    <MyCard
                        key={indice}
                        dados={categoria}
                    />))}
            </ScrollView>


            <View style={{ display: 'flex', marginTop: 15, marginLeft: 15 }}>
                <Title>Recente</Title>
            </View>
            <ScrollView horizontal={true}>
                {produtos.map((produto, indice) => (
                    <MyCardImg
                        key={indice}
                        dados={produto}
                    />))}
            </ScrollView>


            <MyCardImg2 />
        </ScrollView>
    );
}
export default Home;