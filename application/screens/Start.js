import React, { Component } from 'react';
import {View} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import AppButton from '../components/AppButton';
import { NavigationActions } from 'react-navigation';
import Firebase from '../utils/firebase';
import firebase from 'firebase'; 
import facebook from '../utils/facebook';
import Toast from 'react-native-simple-toast';
firebase.initializeApp(Firebase);

class Start extends Component {
    login(){
        const navigateAction = NavigationActions.navigate({
            routeName: 'Login'
        });
        this.props.navigation.dispatch(navigateAction);
    }


    register(){
        const navigateAction = NavigationActions.navigate({
            routeName: 'Register'
        });
        this.props.navigation.dispatch(navigateAction);

    }
    async facebook(){
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
            facebook.config.application_id, 
            {permissions: facebook.config.permissions}
        );

        // signInWithCredential(credentials)
        //signInAndRetrieveDataWithCredential(credentials)
        if (type === 'success') {
            const credentials = firebase.auth.FacebookAuthProvider.credential(token);
            firebase.auth().signInAndRetrieveDataWithCredential(credentials)
            .catch(error => {
                Toast.showWithGravity(error.message, Toast.LONG, Toast.BOTTOM);    
            });
        }else if (type === 'cancel'){
            Toast.showWithGravity('Incio de cesión cancelado', Toast.LONG, Toast.BOTTOM);    
        }else{
            Toast.showWithGravity('Error desconocido', Toast.LONG, Toast.BOTTOM);    
        }
        
    }
    render() {
        return (<BackgroundImage source={require('../../assets/images/3.jpg')}>
                    <View style={{justifyContent:'center', flex:1}}>
                        <AppButton
                            bgColor = "rgba(111, 38, 74, 0.7)"
                            title = "Entrar"
                            action = { this.login.bind(this) }
                            iconName = {"sign-in"}
                            iconSize = {30}
                            iconColor = "#FFF"
                        />
                        <AppButton
                            bgColor = "rgba(20, 200, 50, 0.7)"
                            title = "Registrarme"
                            action = { this.register.bind(this) }
                            iconName = {"user-plus"}
                            iconSize = {30}
                            iconColor = "#FFF"
                        />
                        <AppButton
                            bgColor = "rgba(67, 67, 146, 0.7)"
                            title = "Facebook"
                            action = { this.facebook.bind()}
                            iconName = {"facebook"}
                            iconSize = {30}
                            iconColor = "#FFF"
                        />
                    </View>
           </BackgroundImage>);
    }
}

export default Start;