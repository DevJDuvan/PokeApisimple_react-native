/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ImageBackground} from 'react-native';
import {Avatar, Input} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/Foundation';

/*const peticionlogin = () => {
  if (correo !== '' && Contraseña !== '') {
    const data = {correo: correo, Contraseña: Contraseña};
    fetch('', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        return res.JSON();
      })
      .then(estado => {
        console.log(estado);
      });
  }
};*/

function inicioSesion({navigation}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [usuarios, setusuarios] = useState('l');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [correos, setcorreos] = useState('l');
  return (
    <ImageBackground
      source={{
        uri:
          'data:image/jpeg;base64,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',
      }}
      style={{flex: 1, resizeMode: 'stretch'}}>
      <View style={styles.container}>
        <Text>ff</Text>
        <Avatar
          size="large"
          rounded
          source={{
            uri:
              'https://3.bp.blogspot.com/-KV4cQEHTQQQ/Uz5wH2JbNpI/AAAAAAAAACM/_kEdq-lCkzk/s1600/reloj+blog.gif',
          }}
        />
      </View>
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <Text style={{margin: 20}}>INCIAR SESION</Text>
      </View>
      <View style={styles.informacion}>
        <Input
          placeholder=" usuario"
          //leftIcon={<Icon name="torsos-all" size={24} color="white"
           />
        }
          inputContainerStyle={styles.inputs}
          //onChangeText={value => setusuario(value)}
        />
        <Text>{usuarios}</Text>
        <Input
          placeholder="Contraseña"
          secureTextEntry={true}
          //leftIcon={<Icon name="lock" size={22} color="white"
           />}
          inputContainerStyle={styles.inputs}
        />
      </View>
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <Button
          // onPress={() => peticionlogin()}
          color="grey"
          title="inciar sesion"
        />
        <Text style={{margin: 20}}>olvidaste tu contraseña</Text>
      </View>
    </ImageBackground>
  );
}
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
    marginRight: 10,

    marginBottom: 50,
  },
  inputs: {
    margin: 20,
  },
});

export default inicioSesion;
