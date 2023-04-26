import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, FlatList, ToastAndroid, Image } from 'react-native';
import { Avatar, Input } from 'react-native-elements';
import Tabla from './componentessecundariois/tablas';
import { Component } from 'react';
export default class Inicio extends React.Component {
  constructor(P) {
    super(P);

    this.state = {
      id: '',
      loading: true,
      pokemon: [],
    };

  }



  render() {
    return (
      <View style={{ flex: 1 }}></View>


    );
  }

}
const styles = StyleSheet.create({
  container: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: '100%',
    height: '30%',
  },
  contenedoritems: {
    flex: 1,
    padding: 20,
    flex: 0.3,
    borderWidth: 5,

  },
  informacion: {
    flexDirection: 'column',
    marginRight: 10,
  },
  texto: {
    margin: 20,
    textDecorationColor: 'white',
  },
});
