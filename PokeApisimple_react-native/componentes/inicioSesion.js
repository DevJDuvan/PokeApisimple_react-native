/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ImageBackground,ToastAndroid} from 'react-native';
import {Avatar, Input} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/Foundation';

function inicioSesion({navigation}) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [usuario, setusuarios] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [contraseña,setcontraseña] = useState('');
  return (
    <ImageBackground
      source={{
        uri:
          'https://pokemongolive.com/img/posts/animationweek2020.jpg',
      }}
      style={{flex: 1, resizeMode: 'stretch'}}>

      <View style={styles.container} />
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <Text style={{margin: 20}}>INCIAR SESION POKEMON</Text>
      </View>
      <View style={styles.informacion}>
        <Input
          placeholder=" usuario"
          //  leftIcon={<Icon name="torsos-all" size={24} color="white" />}
          inputContainerStyle={styles.inputs}
          onChangeText={value => setusuarios(value)}
          // eslint-disable-next-line prettier/prettier
        />
        <Text>{usuario}</Text>
        <Text>{contraseña}</Text>
        <Input
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={value => setcontraseña(value)}
          // leftIcon={<Icon name="lock" size={22} color="white" />}
          inputContainerStyle={styles.inputs}

        />
      </View>
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <Button
           onPress={() => peticionlogin(usuario,contraseña,navigation)}
          color="grey"
          title="inciar sesion"
        />
       
        <Text style={{margin: 20}}>registrate!, es gratis</Text>
        <Button
  title="registrate"
  type="outline"
  onPress={()=> navigation.navigate('Registro')}
/>
      </View>
    </ImageBackground>

  );
}
const peticionlogin = (usuario,Contraseña,navigation) => {
  if (usuario !== '' && Contraseña !== '') {

  try {
    console.log('entrof');
    const data = {correo:usuario, contraseña: Contraseña};
    console.log(data);
    fetch('http://10.0.3.2:4000/login', {
      method: 'POST',
      body: JSON.stringify(data),

      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        return res.json();

      })
      .then(estado => {
        console.log(estado);

        if (estado.estado === 0){
          ToastAndroid.show('entro', ToastAndroid.SHORT);
          navigation.navigate('inicio');

        }
       
      });
  } catch (e){ console.log(e.error);}

  }
  else {
    ToastAndroid.show('ingrese datos completos', ToastAndroid.SHORT);


  }
};
const styles = StyleSheet.create({
  container: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  informacion: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginRight: 20,

    marginBottom: 50,
  },
  inputs: {
    margin: 20,
  },
});

export default inicioSesion;
