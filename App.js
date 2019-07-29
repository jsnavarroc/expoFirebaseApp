import React from 'react';
import { StyleSheet } from 'react-native';
import GuestNavigation from './application/navigations/guest';

export default function App() {
  return (
    <GuestNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1, //with this we indicate that it takes as much space as it can
    flexDirection : 'column',  //with this we indicate that it takes much space as it cana vertical 
    justifyContent : 'center', //we want to center all the elements
    backgroundColor: '#fff',
  },
});
