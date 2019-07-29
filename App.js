import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './application/components/AppButton';
import PreLoader from './application/components/PreLoader';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app! Johan</Text>
      <AppButton
        title={"text"}
        bgColor={"rgba(111,38,74,0.7)"}
        action={()=>console.log(1)}
        iconName = {"sign-in"}
        iconSize = {30}
        iconColor ={"#fff"}
      /> */}
      <PreLoader/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
