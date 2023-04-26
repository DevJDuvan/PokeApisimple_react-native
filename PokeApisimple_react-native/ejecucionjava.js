/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Icon} from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  NativeModules,FlatList
} from 'react-native';
var duracion;
import {useFocusEffect} from '@react-navigation/native';
import Slider from '@react-native-community/slider';
// call of module native
const reproductor = NativeModules.ContactsManager;
// call api context
import Context from './contextos/contexto';
//llamado funcion reproducir al abrir una ventana
function FetchUserData({u}) {
  useFocusEffect( 
    React.useCallback( () => {
  const R  =  reproductor.Reproducir(u);
    return () => R;
    
    }, [u]),
  );
  return null;
}
var voton = false;
var selex ;

export default class Friends extends React.Component {
  static contextType = Context;
  constructor(P) {
    super(P);
    this.state = {
      FSelecionada:null,
      nombre: this.props.route.params.titulo,
      Duracion: null,
      value: 1,
      estadoboton: voton,
      canciones: [],
    };
  }

  ComponentDidMount() {
    this.mensaje();
    this.pasusarCancion();
    this.reproduccion();
    this.reanudarCancion();
    this.prueba();
  }
// funcion pra reproducir canciones
  reproduccion = async () => {
 try {
   
  window.alert("llega al java"+this.context.canciones[selex].artista)
  const R  = await reproductor.Reproducir(this.context.canciones[selex].artista);
  this.setState({duracion:R})
 } catch (error) {
   window.alert("error e reproduccion de cancion")
 }
}
// funcion pausar cancion
  pausarCancion = () => {
    voton = true;
    this.setState({estadoboton: voton});
    reproductor.pausarCancion(this.state.nombre);
  };
  reanudarCancion = () => {
    voton = false;
    this.setState({estadoboton: voton});
    reproductor.reanudarCancion();
  };

  mensaje=() => {
    try {
     reproductor.cancelar();
    } catch (e) {
      console.error(e);
    }
  };

  prueba = async () => {
    try {
      const cancionesjava = await mensaje.mensaje();
      this.setState({canciones: cancionesjava});
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    // renderizar boton segun estado de votonn true = sale boton de play el else = pause
    const isLoggedIn = voton;
    let boton;  
    if (isLoggedIn) {
      boton = (
        <Icon
          name="play"
          type="font-awesome"
          size={30}
          color="black"
          onPress={() => this.reanudarCancion()}
        />
      );
    } else {
      boton = (
        <Icon
          name="pause"
          type="font-awesome"
          size={30}
          color="black"
          onPress={() => this.pausarCancion()}
        />
      );
    }

      return (
        <>
       { duracion=  <FetchUserData  u={this.props.route.params.artista} />}
  
          <View style={styles.container}>
           
            <View style={styles.cabeza}>
              <Icon
                name="chevron-down"
                type="evilicon"
                size={30}
                color="red"
                onPress={() => {
                  this.prueba();
                }}
              />
              <Text>{<Text>{this.state.nombre}</Text>}</Text>
              <Icon name="heart" type="evilicon" size={30} color="black" onPress={()=>{this.mensaje()}} />
            </View>
            <View style={styles.cuerpo}>
          <Button
          title="bb"
          onPress={()=>{window.alert(this.context.canciones.length)}}
          ></Button>
            </View>

            <View style={styles.pie}>
              <Slider
                style={{
                  position: 'absolute',
                  top: '10%',
                  left: '9%',
                  width: 345,
                }}
                thumbTintColor="black"
                minimumTrackTintColor="black"
                maximumTrackTintColor="black"
                orientation="horizontal"
                value={this.state.value}
                onValueChange={value => this.setState({value})}
                maximumValue={100}
                minimumValue={1}
                step={1}
              />
              <Text style={{position: 'absolute', top: '18%', left: '11%'}}>
              {duracion}
              </Text>
              <Text style={{position: 'absolute', top: '18%', right: '11%'}}>
             "nnnmnm"
              </Text>
              <View style={styles.botonesRP}>
                <Icon
                  name="step-backward"
                  type="font-awesome"
                  size={30}
                  color="grey"
                  onPress={() =>{
                    this.mensaje();
                    selex = this.context.Fselecionada(1);
                    window.alert("cambio" + selex)
                   this.setState({ nombre: this.context.canciones[selex].titulo })
                   this.reproduccion();
  

                  }}
                />

                {boton}

                <Icon
                  name="step-forward"
                  type="font-awesome"
                  size={30}
                  color="blue"
                  onPress={() => 
                   {  
                    this.mensaje();
                    selex = this.context.Fselecionada(0);
                    window.alert("cambio" + selex)
                  this.setState({ nombre: this.context.canciones[selex].titulo })
                  this.reproduccion();

                    
                  }}
                 />
              </View>
        
            </View>
            <Text>{this.context.posicionactual}</Text>
          </View>
        </>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pie: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flex: 5,
  },
  slider: {
    position: 'absolute',
    justifyContent: 'center',
  },
  botonesRP: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    top: '18%',
  },
  icono: {},
  cabeza: {

    flexDirection: 'row',
    flex: 2,
    width: '100%',
    height: 10,
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  cuerpo: {
    flex: 10,
    width: '100%',
    height: 'auto',
 
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor:'black',
    width: '44%',
    height: '44%',
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 12,
    marginBottom: 15,
    shadowColor: '#303838',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});
