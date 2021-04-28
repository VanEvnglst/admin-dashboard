import React, {Component} from 'react';
import styles from './styles';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import {headTable, dataTable} from './content'
import database from './../../utils/database';
import SQLite from 'react-native-sqlite-storage';

export default class ProductsScreen extends Component {
   constructor(props) {
   super(props)
   this.state = {
    products: [],
   };
 }
  
  componentDidMount() {
   console.log('did mount')
   this.getProducts();
  }

   getProducts = () => {
     SQLite.openDatabase(
      'adminDash.db',
      '1.0',
      'Admin Dashboard',
      '200000'
      ).then(DB => {
        db = DB;
        db.transaction((tx) => {
          tx.executeSql('SELECT Item, ItemCategory FROM Items', []).then(([tx,results]) => {
              var len = results.rows.length;
              var temp = [];
              for (let i = 0; i < len; i++) {
                let row = results.rows.item(i)
                temp.push({'Item': row.Item,'ItemCategory': row.ItemCategory});
              }
              console.log(temp);
              this.setState({ products: temp });
          }).catch(err => {
            console.log('exe',err);
          });
          }).then((result) => {
          db.close();
          }).catch((err) => {
          console.log(err);
          });
      }).catch((err) => {
      console.log(err);
      });
  }

  render () {
    const show = this.state.products;
    return (
      <View style={styles.container}>
        <Table style={styles.tableStyle}>
          <Row
            data={headTable}
            style={styles.headStyle}
            textStyle={styles.tableText}
          />
          <ScrollView>
              <TableWrapper>
                  <Cell data= {show.Item}/>
              </TableWrapper>
          </ScrollView>
        </Table>
      </View>
    );
  }
}