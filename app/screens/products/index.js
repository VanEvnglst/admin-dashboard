import React, {Component} from 'react';
import styles from './styles';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import SQLite from 'react-native-sqlite-storage';
import AddFab from './add';

export default class ProductsScreen extends Component {
   constructor(props) {
   super(props)
   this.state = {
    products: [],
    };
  }
  
  componentDidMount() {
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
          tx.executeSql('SELECT SerialNo, Item, ItemCategory, ItemPrice FROM Items ORDER BY ItemCategory, Item', []).then(([tx,results]) => {
              var len = results.rows.length;
              var temp = [];
              for (let i = 0; i < len; i++) {
                let row = results.rows.item(i)
                temp.push({'SKU': row.SerialNo, 'Item': row.Item, 'ItemCategory': row.ItemCategory, 'ItemPrice': row.ItemPrice});
              }
              this.setState({ products: temp });
          }).catch(err => {
          console.log(err);
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
    const headTable = [ 'SKU', 'Item Name', 'Category', 'Price' ];

    return (
      <View style={styles.container}>
        <Table style={styles.tableStyle}>
          <Row
            data={headTable}
            flexArr={[1,1.5,0.75,1]}
            style={styles.headStyle}
            textStyle={styles.tableText}
          />
          <ScrollView>
            {
            show.map((rowData, index) => (
              <TableWrapper key={index} style={styles.wrap}>
                  <Cell data= {'00000'} style={styles.cell} flex={1} textStyle={styles.tableText}/>
                  <Cell data= {rowData.Item} style={styles.cell} flex={1.5} textStyle={styles.tableText}/>
                  <Cell data= {rowData.ItemCategory} style={styles.cell} flex={0.75} textStyle={styles.tableText}/>
                  <Cell data= {rowData.ItemPrice} style={styles.cell} flex={1} textStyle={styles.tableText}/>
              </TableWrapper>
            ))
            }
          </ScrollView>
        </Table>
        <AddFab />
      </View>
    );
  }
}