// entrenador casi full
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
import Tabla from './componentessecundariois/tablas';
import { Component } from 'react';
export default class entrenador extends React.Component {
  constructor(P) {
    super(P);

    this.state = {
      id:'',
      loading: true,
      pokemon: [],
    };
   // this.llamarpokemon = this.llamarpokemon.bind(this);

  }
  _llamarentrenadores (id) {
    this.setState({loading:false});
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
          ToastAndroid.show('no existe el entrenador', ToastAndroid.SHORT);
         }
         else{
          this.setState({pokemon:estado.datostodosentrenador.rows});
          console.log(this.state.pokemon);
    }

      });
  }


renderItem =({item})=>{
  return(<View style={{ alignItems: 'center', padding: 20,flex: 0.3,borderWidth: 5}}>
    <Image style={{width:100,height:100,border:'1px solid black',borderRadius:5}} source={{uri:item.imagen}} />
    <View style={{ backgroundColor:'white'}}><Text>{item.jugador_id}</Text></View>
    <View style={{ backgroundColor:'white'}}><Text>{item.nombre}</Text></View>
    <View><Text>{item.fecha_N}</Text></View>
      </View>);
      }

  render() {
  if (this.state.loading) {

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
          placeholder=" entrenador"
          //  leftIcon={<Icon name="torsos-all" size={24} color="white" />}
          inputContainerStyle={styles.inputs}
          onChangeText={value => this.setState({id:value})}
          // eslint-disable-next-line prettier/prettier
        />
             <Button
            style={{ color: 'white' }}
            title="consultar"
            onPress={() => this._llamarentrenadores(this.state.id)}
          />
          <Text>{this.state.id}</Text>
          </View>
             <View style={{ marginTop: 20, alignItems: 'center' }}>

             <Text>{this.state.id}</Text>
             </View>



          <View />

          <View style={{ alignItems: 'center', paddingBottom: 40 }} />

        </View>
         </ImageBackground>
      );
    }
    else {
      return (
        <ImageBackground
        source={{
          uri:
            'https://thumbs.dreamstime.com/b/icono-linear-del-pokeball-entretenimiento-y-de-la-colecci%C3%B3n-esquema-arcada-l%C3%ADnea-fina-vector-aislado-e-en-el-fondo-blanco-140056019.jpg',
        }}
        style={{flex: 1, resizeMode: 'stretch'}}>
        <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <Avatar
              size="large"
              rounded
              source={{
                uri:
                  'https://c0.klipartz.com/pngpicture/569/963/gratis-png-ilustracion-de-pokeball-ash-ketchum-pokeball-s.png',
              }}/>
                <Input
          placeholder="usuario"
          //  leftIcon={<Icon name="torsos-all" size={24} color="white" />}
          inputContainerStyle={styles.inputs}
          onChangeText={value => this.setState({id:value})}
          // eslint-disable-next-line prettier/prettier
        />
              <Button
  style={{ color: 'white' }}
  title="ir a iniciar sesion"
  onPress={() => this._llamarentrenadores(this.state.id)}
/>
</View>
             <View style={{ alignItems: 'center', paddingBottom: 40 }}  />
          </View>
          <View style={{ marginTop: 20, alignItems: 'center' }} />
<FlatList
data= {this.state.pokemon}
renderItem={(this.renderItem)}
/>


          <View />

          <Button
          title="volver"
          onPress = {() => this.navigation.navigate('Entrenadores') }

           />

          </ImageBackground>
      );
    }
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
  contenedoritems:{ 
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
