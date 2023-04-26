/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        '',
        '              fecha            ',
        '     horario  entrada   ',
        '    horario salida ',
        '       head4      ',
        '   otrokkkkkkk ',
      ],
      tableTitle: ['T', 'Title2', 'Title3', 'Tjjjj4'],
      tableData: [
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['a', 'b', 'c'],
        ['j', 'j', 'k'],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <ScrollView horizontal={true}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row
            data={state.tableHead}
            flexArr={[0, 0, 0, 0, 0]} // ancho de la cabeza columnas
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={state.tableTitle}
              style={styles.title}
              heightArr={[28, 28, 28, 28]} // altura de primeas filas
              textStyle={styles.text}
            />
            <Rows
              data={state.tableData}
              flexArr={[1, 1, 1, 1]} // ancho del cuerpo de la tabla
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 50, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: 'white'},
  wrapper: {flexDirection: 'row'},
  title: {backgroundColor: 'white'},
  row: {height: 28},
  text: {textAlign: 'center'},
});
