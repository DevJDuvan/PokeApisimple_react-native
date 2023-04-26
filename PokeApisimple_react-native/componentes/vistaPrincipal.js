import React from 'react';
import {
  TouchableOpacity,  View,
  Text,
  StyleSheet,
  SafeAreaView,
  NativeModules,
  Image,
  ScrollView,
} from 'react-native';
import {Input, Icon } from 'react-native-elements';
import Contenedorvistasmusica from './contenedorvistasmusica';
import Context from '../contextos/contexto';
const buscarMusica = NativeModules.buscarMusica;
const reproductor = NativeModules.ContactsManager;

export default class Inicio extends React.Component {
  

  static contextType = Context;
  
  constructor(props) {
   
    super(props);
    this.state = {
      posicionar:null,
      musicaarray: [],
      estadoboton: true,
      infoCancion: [],
      contador:0,
    };
  }


  componentDidMount() {
    try {
      // funcion leer directorios y traer mp3s
      buscarMusica.buscacanciones(myarray => {
        this.setState({ musicaarray: myarray });
        if(this.state.contador==0){
        this.context.addNewTask(myarray);
        this.state.contador++;
        }
     
      });
    } catch (e) {
      console.error(e);
    }
  
  
  }

  // funcion pausar cancion
  pausarCancion = () => {
    this.context.stateButton(true);
 let  voton = this.context.estadoBoton; // defecto en true en el context
    this.setState({estadoboton:voton});
    reproductor.pausarCancion("pausado");
    window.alert(this.context.estadoBoton);
  };

  // funcion para reanudar cancion
  reanudarCancion = () => {
    this.context.stateButton(false);
    this.setState({estadoboton: this.context.estadoButon});
    window.alert(this.context.estadoBoton);
    reproductor.reanudarCancion();
  };
 
  // render vista de canciones
  render() {
    const isLoggedIn = this.context.estadoBoton;
    let boton;
    if (isLoggedIn) {
      boton = (
        <Icon
          name="play"
          type="font-awesome"
          size={13}
          color="grey"
          onPress={() => this.reanudarCancion()}
        />
      );
    } else {
      boton = (
        <Icon
          name="pause"
          type="font-awesome"
          size={13}
          color="grey"
          onPress={() => this.pausarCancion()}
        />
      ); }

   

      let Vista = this.state.musicaarray.map((val, keye) => {
        return (
          <Contenedorvistasmusica
            key={keye}
            keyval={keye}
            val={val}
            funcion={() => {
            if(keye!=this.context.posisionactual){
              this.context.posicionar(keye);
              this.setState({ infoCancion: val, }),
                this.props.navigation.navigate('Java', val),
                this.context.stateButton(false);
                ;
              }
              else{
                this.props.navigation.navigate('Java');
              }
                
                
            }}
          />
        );
      });
   

      return (
        
        <View style={styles.container}>


          <View style={styles.cabeza}>
            <View style={styles.menuBuscar}>
              <Icon name="cogs" size={24} type="font-awesome" color="black" />
              <Input
                rightIcon={
                  <Icon
                    name="search"
                    size={18}
                    type="font-awesome"
                    color="black"
                  />
                }
                placeholder="Buscar"
                inputContainerStyle={styles.inputs}
              />
            </View>
            <View style={styles.botonesRP}>
              <Icon
                buscar
                name="history"
                type="font-awesome"
                size={23}
                color="black"
                containerStyle={{ position: 'relative', right: 8 }}
                onPress={() =>
                  this.props.navigation.navigate('contexto', {
                    otro: 89,
                    otros: 'jjkjj'
                  })
                }
              />
              <Icon
                name="heartbeat"
                type="font-awesome"
                size={23}
                color="black"
                position="relative"
                left={100}
              />
              <Icon
                name="calendar-check-o"
                type="font-awesome"
                size={23}
                color="black"
                position="relative"
                left={210}
              />
            </View>
            <View style={styles.btnOrganizar}>
              <View
                style={{
                  position: 'relative',
                  left: 12,
                  borderRadius: 8,
                  backgroundColor: '#E9DFDC',
                  flexDirection: 'row',
                  width: '40%',
                  height: '105%',
                  justifyContent: 'center',
                  alignContent: 'center'
                }}
              >
                <Icon
                  name="gg-circle"
                  size={18}
                  type="font-awesome"
                  color="black"
                />
                <Text>reproduccion aleatoria </Text>
                <View
                  style={{
                    position: 'absolute',
                    right: -210,
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                  }}
                >
                  <Icon
                    name="sort-alpha-asc"
                    position="relative"
                    right={60}
                    size={18}
                    type="font-awesome"
                    color="black"
                  />
                  <Icon
                    name="star-half-empty"
                    position="relative"
                    right={40}
                    size={18}
                    type="font-awesome"
                    color="green"
                    
                  />
                  <Icon
                    name="location-arrow"
                    position="relative"
                    right={25}
                    size={18}
                    type="font-awesome"
                    color="black"
                  />
                </View>
              </View>
            </View>
          </View>
          <SafeAreaView style={styles.cuerpo}>
            <ScrollView contentContainerStyle={styles.cuerposcroll}>
              {Vista}
            </ScrollView>
          </SafeAreaView>

          <View style={styles.pie} >
            <View style={{ width: 30, height: 30, position: 'absolute', left: '4%', top: -8,justifyContent:'center',borderRadius: 64 }}>
            <TouchableOpacity
                style={{  
                 alignItems:'center',
                  justifyContent:'center',
                  width:48,
                  height:48,
                  backgroundColor:'black',
                  borderRadius:50,}}
                onPress={() => {
                 window.alert(this.state.infoCancion.titulo);
                }}>
                <Image
                  style={{
                  alignItems:'center',
                  justifyContent:'center',
                  width:30,
                  height:30,
                  borderRadius:50,}}
                  source={require('../assets/fondo.png')}
                />
              </TouchableOpacity>
              </View>
              <View style={{ position:'absolute', left:'18%',height:20,width:'70%' }}>
              <Text>{this.state.infoCancion.titulo}</Text>
            </View>
            <View style={{ width:'10%', flexDirection: 'row',position:'absolute',left:'80%',top:'10%', justifyContent: 'space-around' }}>
              {boton}
              <View>
        <Icon name="pause"
          type="font-awesome"
          size={13}
          color="grey"
          onPress={() => this.reanudarCancion()}
        ></Icon></View>
            </View>
          </View>

       </View>
      );
    }
    
  }


const styles = StyleSheet.create({
  container: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',

    flex: 1,
  },
  cabeza: {
    backgroundColor: 'white',
    flexDirection: 'row',
    flex: 1,
    width: '100%',

    alignContent: 'center',
    justifyContent: 'space-around'
  },
  cuerpo: {
    flex: 3,
    height: '10%',
    width: '100%',
    backgroundColor: 'white'
  },
  cuerposcroll: {
    width: '100%'
  },
  pie: {
    borderTopColor: 'gray',
    borderRadius: 1,
    width: '100%',
    height:'13%',
 flexDirection:'row'
  },
  menuBuscar: {
    marginTop: 20,
    marginLeft: 25,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  inputs: {
    marginLeft: 30,

    height: 14,
    borderTopColor: 'red',
    backgroundColor: 'transparent'
  },
  botonesRP: {
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'row',
    right: '66%',
    top: '-8%'
  },
  btnOrganizar: {
    left: 10,
    position: 'absolute',
    width: '100%',
    top: '75%'
  },
});
