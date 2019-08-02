import { StackNavigator } from 'react-navigation';
import StartScreen from '../screens/Start';
import LoginScreen from '../screens/Login';
// import RegisterScreen from '../screens/Register';


  export default StackNavigator (
    {
        Start:{
                screen:StartScreen 
             },
        Login:{
                screen:LoginScreen 
             },
        // Register:{
        //         screen:RegisterScreen 
        //      },

    },
    {
        initialRouteName:'Start',
        navigationOptions:{
            headerStyle: {
              backgroundColor: 'rgba(111, 38, 74, 0.7)',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:'center',
              alignSelf:'center',
            },
        }
    }
);