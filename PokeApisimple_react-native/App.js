import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Contes from './apps'
import Jav from './ejecucionjava';
import Vistaprincipal from './componentes/vistaPrincipal';
import Perfil from './componentes/perfil';
import IniciarSsesion from './componentes/inicio';
import Tras from './componentes/contenedorvistasmusica';
import GlobalState from './contextos/globalState';

const Stack = createStackNavigator();

function App() {
  return (
    <GlobalState>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Musica" component={Vistaprincipal} />
        <Stack.Screen name="perfil" component={Perfil} />
        <Stack.Screen name="contexto" component={Contes}/>
        <Stack.Screen name="Java" component={Jav} />
        <Stack.Screen name="Home" component={IniciarSsesion} />
        <Stack.Screen name="iniciodesesion" component={IniciarSsesion} />
        <Stack.Screen name="tras" component={Tras} />
        <Stack.Screen name='otra' component ={GlobalState}/>
      </Stack.Navigator>
    </NavigationContainer>
    </GlobalState>
  );
}

export default App;
