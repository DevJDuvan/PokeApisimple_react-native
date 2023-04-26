/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';

export default class perfil extends React.Component {
  constructor(P) {
    super(P);

    this.state = {
      segundo: 0,
    };
  }
  render() {
    return (
      <View>
        <View style={styles.cabeza}>
          <Avatar
            size="large"
            rounded
            source={{
              uri:
                'https://3.bp.blogspot.com/-KV4cQEHTQQQ/Uz5wH2JbNpI/AAAAAAAAACM/_kEdq-lCkzk/s1600/reloj+blog.gif',
            }}
          />
          <Text>"perfil"</Text>
          <Text>nombre</Text>
          <Button
            icon={<Icon name="arrow-right" size={15} color="white" />}
            iconRight
            title="EDITAR PERRFIL"
            onPress={() => this.props.navigation.navigate('Java')}
          />
        </View>

        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedorperfil: {
    color: 'blue',
  },
  cabeza: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    top: '10%',
  },
});
