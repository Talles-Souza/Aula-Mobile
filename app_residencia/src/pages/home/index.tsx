import React from "react";
import MyHeader from "../../components/header/header";
import MyCard from "../../components/card/card";
import MyCardImg from "../../components/card/cardImg";
import { View } from "react-native";
import { Title } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";


const Home = () => {


    return (
        <ScrollView>
            <MyHeader />
            <MyCard />
            <View style={{ display: 'flex', marginTop: 15, marginLeft: 15 }}>
                <Title>Recente</Title>
            </View>
            <MyCardImg />
        </ScrollView>
    );
}
export default Home;