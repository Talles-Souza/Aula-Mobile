import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Axios from "../../api/axios";
import MySearch from '../../components/search';
import { StyleSheet } from "react-native";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import MyCard from "../../components/card/card";
import { View } from "react-native-ui-lib";
import { FlatList } from "react-native";
import Card2 from "../../components/card/card2";



const Categorias = () => {

    //get categoria ainda nao está pronto

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



    return (
        <ScrollView style={styles.container}>
            <MySearch />
            <Card2 />



            {/* 
            <View style={styles.view}
            
            >
                {categorias.map((categoria, indice) => (
                    <MyCard
                        key={indice}
                        dados={categoria}
                    />))}
            </View> */}


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    view: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',



    }
})

export default Categorias;