import React from 'react';
import {ActivityIndicator, View, StyleSheet, Dimensions} from 'react-native';

const PreLoader = () => {

    return (
        <View style = {[style.preLoader, style.color ]}>
         <ActivityIndicator style = {{height: 80}} size="large"/>
        </View>
    );
};

const {height} = Dimensions.get('window'); //we take the height

const style = StyleSheet.create({
    preLoader:{
        flex : 1, //with this we indicate that it takes as much space as it can
        flexDirection : 'column',  //with this we indicate that it takes much space as it cana vertical 
        justifyContent : 'center', //we want to center all the elements
        alignItems : 'center',
        height:height,
    },
    color:{
        backgroundColor: '#242935',
    },
    container: {
        flex: 1,
        justifyContent: 'center'
      },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
 });

export default PreLoader;
// https://facebook.github.io/react-native/docs/activityindicator