import React from "react";
import MyHeader from "../../components/header/header";
import MyCard from "../../components/card/card";
import MyCardImg from "../../components/card/cardImg";
import { MyCardImg2 } from "../../components/card/cardimg2";
import { View } from "react-native";
import { Title } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";


const Home = ({ route, navigation }) => {

    const { token } = route.params;
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