import React, { useContext, useEffect, useState } from "react";
import MyCard from "../../components/card/card";
import MyCardImg from "../../components/card/cardImg";
import { MyCardImg2 } from "../../components/card/cardimg2";
import { View, FlatList, ScrollView } from "react-native";
import { Title } from "react-native-paper";
import Axios from "../../api/axios";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import MySearch from '../../components/search';
import { Item } from "react-native-paper/lib/typescript/components/List/List";

type CategoriaType = {
    idCategoria: number;
    nomeCategoria: string;
    nomeImagem: string;
}


const Home = ({ route, navigation }) => {




    //get categoria
    const { usuario } = useContext(AutenticacaoContext);
    // const { token } = route.params;
    const [categorias, setCategoria] = useState<any[]>([]);

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

            <FlatList
                horizontal={true}
                data={categorias}
                keyExtractor={item => item.idCategoria}
                renderItem={({ item }) =>
                    <MyCard
                        dados={item}
                    />
                }
            />
            {/* <ScrollView horizontal={true}>
                {categorias.map((categoria, indice) => (
                    <MyCard
                        key={indice}
                        dados={categoria}
                    />))}
            </ScrollView> */}


            <View style={{ display: 'flex', marginTop: 15, marginLeft: 15 }}>
                <Title>Recente</Title>
            </View>


            <FlatList
                horizontal={true}
                data={produtos}
                keyExtractor={item => item.idProduto}
                renderItem={({ item }) =>
                    <MyCardImg
                        dados={item}
                    />
                }
            />

            {/* <ScrollView horizontal={true}>
                {produtos.map((produto, indice) => (
                    <MyCardImg
                        key={indice}
                        dados={produto}
                    />))}
            </ScrollView> */}


            <MyCardImg2 />
        </ScrollView>
    );
}
export default Home;