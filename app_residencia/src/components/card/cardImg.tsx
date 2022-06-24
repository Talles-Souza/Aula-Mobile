import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View } from 'react-native';

//const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyCardImg = () => {

    return (
        <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <Card>
                {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
                <Card.Content>
                    <Title>Alguma coisa</Title>
                    <Paragraph>Alguma coisa</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Comprar</Button>
                </Card.Actions>
            </Card>
            <Card>
                {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
                <Card.Content>
                    <Title>Alguma coisa</Title>
                    <Paragraph>Alguma coisa</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Comprar</Button>
                </Card.Actions>
            </Card>
        </View>
    );
}

export default MyCardImg;