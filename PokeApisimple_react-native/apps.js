import React from 'react';
import { View, StyleSheet } from 'react-native';
import TaskList from './componentes/lista';
import Footer from './componentes/footer';
import GlobalState from './contextos/globalState';

export default class apps extends React.Component {
  render() {
    return (
 
        <View style={styles.container}>
          <TaskList />
          <Footer />
        </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
