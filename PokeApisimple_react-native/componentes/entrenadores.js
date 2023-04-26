/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line prettier/prettier
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet,ImageBackground,FlatList,ToastAndroid,Image } from 'react-native';
import { Avatar,Input } from 'react-native-elements';
export default class Entrenadores extends React.Component {
  constructor(P) {
    super(P);

    this.state = {
      ids:'',
      loading: true,
      entrenadores: [],
    };
   // this.llamarpokemon = this.llamarpokemon.bind(this);

  }

   _llamarentrenadores (id) {
      const data = {id_entrenadorinput:id};
      //this.setState({ loading: true });
      fetch('http://10.0.3.2:4000/entrenadores', {
        method: 'post',
        // eslint-disable-next-line no-undef
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          return res.json();
        })
        .then(estado => {
          if(estado.estado === 0){
            this.setState({pokemon:estado.datosunentrenador.rows});
            console.log(this.state.pokemon);
          } else if(estado.estado === 1){
            ToastAndroid.show('no existe el pokemon', ToastAndroid.SHORT);
           }
           else{
            this.setState({pokemon:estado.datostodosentrenador.rows});
            console.log(this.state.pokemon);
      }

        });
    }

  render() {
      return (
        <ImageBackground
        source={{
          uri:
            'https://thumbs.dreamstime.com/b/signo-de-bola-vectorial-aislado-s%C3%ADmbolo-p%C3%B3keball-icono-concepto-juego-pokemon-popular-web-aplicaci%C3%B3n-l%C3%ADnea-pok%C3%A9mon-la-bolas-187435285.jpg',
        }}style={{flex: 1, resizeMode: 'stretch'}}>

        <View style={{ flex: 1 }}>
          <View style={styles.container}>
             <Avatar
              size="large"
              rounded
              source={{
                uri:
                  'https://c0.klipartz.com/pngpicture/569/963/gratis-png-ilustracion-de-pokeball-ash-ketchum-pokeball-s.png',
              }}
            />
            <Input
          placeholder=" usuarios"
          //  leftIcon={<Icon name="torsos-all" size={24} color="white" />}
          //inputContainerStyle={styles.inputs}
          onChangeText={value => this.setState({ids:value})}
          // eslint-disable-next-line prettier/prettier
        />
             <Button
            style={{ color: 'white' }}
            title="consultar"
            onPress={() => this._llamarentrenadores(this.state.ids)}
          />
       
          </View>
             <View style={{ marginTop: 20, alignItems: 'center' }}>
 
            
             </View>



          <View />

          <View style={{ alignItems: 'center', paddingBottom: 40 }} />

        </View>
         </ImageBackground>
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
  informacion: {
    flexDirection: 'column',
    marginRight: 10,
  },
  texto: {
    margin: 20,
    textDecorationColor: 'white',
  },
});
