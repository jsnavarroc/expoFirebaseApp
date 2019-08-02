import React from 'react';
import {ActivityIndicator, View, StyleSheet, Dimensions, Text} from 'react-native';

const PreLoader = () => {

    return (
        <View style = {[style.preLoader]}>
         <ActivityIndicator style = {{height: 80}} size="large"/>
        </View>
    );
};

const {height} = Dimensions.get('window');
const style = StyleSheet.create({
    preLoader:{
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        height:height,
        backgroundColor: '#242935',
    }
 });

export default PreLoader;


