import * as React from 'react';
import { Header } from 'react-native';

export const MyHeader = props => {
    return (
        <Header
        leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => props.navigation.toggleDrawer()}/>}
        centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
        backgroundColor = "#eaf8fe"
      />
    );
};