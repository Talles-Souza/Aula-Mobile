import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
const MyCard = () => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 25 }}>
            <Card style={{ display: 'flex', width: 99, height: 90, justifyContent: 'center', backgroundColor: '#00ff00' }}>
                <Card.Content style={{ justifyContent: 'center', marginTop: 18, display: 'flex' }}>
                    <Text>Categoria</Text>
                </Card.Content>
            </Card>
            <Card style={{ display: 'flex', width: 99, height: 90, justifyContent: 'center', backgroundColor: '#00ff00' }}>
                <Card.Content style={{ justifyContent: 'center', marginTop: 18, display: 'flex' }}>
                    <Text>Categoria</Text>
                </Card.Content>
            </Card>
            <Card style={{ display: 'flex', width: 99, height: 90, justifyContent: 'center', backgroundColor: '#00ff00' }}>
                <Card.Content style={{ display: 'flex', justifyContent: 'center', marginTop: 18, alignItems: "center" }}>
                    <Text>Categoria</Text>
                </Card.Content>
            </Card>
        </View>
    );
};

export default MyCard;