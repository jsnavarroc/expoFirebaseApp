import React, { Component } from 'react';
import t from 'tcomb-form-native';
import FormValidation from '../utils/validation';
import BackgroundImage from '../components/BackgroundImage';
import {View} from 'react-native';
import {Card} from 'react-native-elements';
import AppButton from '../components/AppButton';
import Toast from 'react-native-simple-toast';
import firebase from 'firebase'; 
const Form = t.form.Form;
class Login extends Component {
    constructor() {
        super();
        this.user=t.struct({
            email:FormValidation.email,
            password: FormValidation.password,
        });
        this.options = {
            fields:{
                email: {
                    help: 'Introduce tu email',
                    error: 'Email incorrecto',
                    autoCapitalize:'none',
                },
                password: {
                    help: 'Introduce tu password',
                    error: 'Password no valido',
                    password: true,
                    secureTextEntry:true,
                }
            }
        }
    }

    login(){
 
            const validate = this.refs.form.getValue();
            if(validate){
                firebase.auth().signInWithEmailAndPassword(validate.email, validate.password)
                .then(() => {
                    Toast.showWithGravity("Bienvenido", Toast.LONG, Toast.BOTTOM);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if(errorCode === 'outh/wrong-password'){
                        Toast.showWithGravity("Password Incorrecto", Toast.LONG, Toast.BOTTOM);
                    }else{
                        Toast.showWithGravity(errorMessage, Toast.LONG, Toast.BOTTOM);
                    }        
                });
            }


    }
    
    render() {
        return (
                <BackgroundImage source = {require('../../assets/images/3.jpg')}>
                    <View>
                        <Card wrapperStyle={{paddingLeft:10}} title='Inciar Sesión'>
                            <Form 
                                ref="form"
                                type={this.user}
                                options={this.options}
                            />
                            <AppButton
                                bgColor = "rgba(111, 38, 74, 0.7)"
                                title = "Login"
                                action = { this.login.bind(this)}
                                iconName = {"sign-in"}
                                iconSize = {30}
                                iconColor = "#FFF"
                                widthProp = {333}
                            />
                        </Card>
                    </View>
                </BackgroundImage>
        );
    }
}

export default Login;