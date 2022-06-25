import * as React from 'react';
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';


//const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyCardImg = () => {

    return (
        <ScrollView horizontal={true} >

            <TouchableOpacity>
                <Card>
                    <Card.Image source={require('../../assets/fundo.png')} />
                    <Card.Divider />
                    <Card.Title>
                        Título
                    </Card.Title>
                    <Text>Descrição</Text>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity>
                <Card>
                    <Card.Image source={require('../../assets/fundo.png')} />
                    <Card.Divider />
                    <Card.Title>
                        Título
                    </Card.Title>
                    <Text>Descrição</Text>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity>
                <Card>
                    <Card.Image source={require('../../assets/fundo.png')} />
                    <Card.Divider />
                    <Card.Title>
                        Título
                    </Card.Title>
                    <Text>Descrição</Text>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity>
                <Card>
                    <Card.Image source={require('../../assets/fundo.png')} />
                    <Card.Divider />
                    <Card.Title>
                        Título
                    </Card.Title>
                    <Text>Descrição</Text>
                </Card>
            </TouchableOpacity>







        </ScrollView>
    );
}

export default MyCardImg;