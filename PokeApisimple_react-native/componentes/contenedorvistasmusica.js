import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
export default class contenedorvistasmusica extends React.Component {
  constructor(P) {
    super(P);
    this.state = {};
  }

  render() {
    return (
      <TouchableHighlight key={this.props.keyval} onPress={this.props.funcion}>
        <View style={styles.vista}>
          <Image
          
            style={{
          
                  alignItems:'center',
                  justifyContent:'center',
                  width:40,
                  height:40,
                  borderRadius:50,
              position: 'relative',
              left: '30%',
            
            }}
            source={require('../assets/fondo.png')}
          />
          <Text style={styles.notetext} />
          <TouchableOpacity
            style={{width: '100%'}}
            onPress={this.props.funcion}>
            <View style={{position: 'absolute', width: '90%'}}>
              <Text style={{fontSize: 15,width:'80%',height:20}}>{this.props.val.titulo}</Text>
              <Text style={{width:'60%',height:20,color: 'grey', position: 'absolute', top: 18}}>
                {this.props.val.artista}
              </Text>
            </View>
          </TouchableOpacity>

          <Icon
            onPress={() => {
              window.alert('opciones');
            }}
            name="ellipsis-v"
            size={25}
            color="black"
            type="font-awesome"
            containerStyle={{
              position: 'absolute',
              top: 15,
              left: 360,
              width:10,
            }}
          />
        </View>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  vista: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },

  notetext: {
    margin: 15,
  },
});
