import * as React from 'react';
import { Appbar } from 'react-native-paper';

const MyHeader = () => {
    //const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header>
            <Appbar.Action icon="equal" onPress={_handleMore} />
            <Appbar.Content title="Delivery" />
        </Appbar.Header>
    );
};

export default MyHeader;