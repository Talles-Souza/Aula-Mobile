import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-elements";
import MySearch from '../../components/search';
import { StyleSheet } from "react-native";



const Categorias = () => {
    return (
        <ScrollView style={styles.container}>
            <MySearch />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})

export default Categorias;