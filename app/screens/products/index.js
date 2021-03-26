import React, {Component} from 'react';
import styles from './styles';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {headTable, dataTable} from './content'

export default class ProductsScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Table style={styles.tableStyle}>
          <Row
            data={headTable}
            style={styles.headStyle}
            textStyle={styles.tableText}
          />
          <ScrollView>
            <Rows 
              data={dataTable} 
              textStyle={styles.tableText}
            />
          </ScrollView>
        </Table>
      </View>
    );
  }
}
