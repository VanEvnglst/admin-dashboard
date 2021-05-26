import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import SQLite from 'react-native-sqlite-storage';
import moment from "moment";


SQLite.DEBUG(true);
SQLite.enablePromise(true);
let db;

const OrdersScreen = () => {

  const [enableScroll, setScroll] = useState(false);
  const [orderData, setOrderData] = useState([]);


  useEffect(() => {
    getOrderContentData();

  }, []);

  getOrderContentData = () => {
    SQLite.openDatabase(
      'adminDash.db',
      '1.0',
      'Admin Dashboard',
      '200000'
    ).then(DB => {
      db = DB;
      db.transaction(tx => {
        tx.executeSql('SELECT * from SalesTransactions ORDER BY Date DESC')
          .then(([tx, results]) => {
            var len = results.rows.length;
            var temp = [];
            for (i = 0; i < len; i++) {
              var item = results.rows.item(i);
              temp.push(item);
            }
            setOrderData(temp);
          }).catch(err => {
            console.log('execute err', err);
          })
      });
    }).catch(err => {
      console.log('open database error', err);
    })
  }

  function renderNewData(item) {
    console.log('item', item);
    const DATE = moment(item.Date, 'MM/DD/YYYY').format("MMMM DD, YYYY")
    return (
      <View style={styles.orderPageContainer}>
        <Text style={styles.orderDate}>{DATE}</Text>
        <View style={styles.container}>
          <View style={styles.orderNumberContainer}>
            <Text style={styles.orderNumberTitle}>ORDER</Text>
            <Text style={styles.orderNumber}></Text>
          </View>

          <View style={styles.orderDetailsContainer}>
            <Text style={styles.amount}>{item.Amount}PHP</Text>
            <Text style={styles.transactionNum}>Order No: #{item.TransactionNum}</Text>
            <View style={styles.paymentModeContainer}>
              <Text style={styles.paymentMode}>Payment Mode: {item.PaymentMode}</Text>
            </View>
            <View style={styles.cashierNameContainer}>
              <Text style={styles.cashierName}>Cashier Name: {item.CashierName}</Text>
            </View>
            <View style={styles.totalItemsWithVoid}>
              <Text style={styles.cashierName}>TotalItemsWithVoid: {item.TotalItemsWithVoid}</Text>
            </View>
            <View style={styles.totalAmountWithVoid}>
              <Text style={styles.cashierName}>TotalAmountWithVoid: {item.TotalAmountWithVoid}</Text>
            </View>
          </View>

          <View style={styles.statusContainer}>
            <Text style={styles.status}>{item.Status}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View
        onStartShouldSetResponderCapture={() => setScroll(true)}
      >
        <ScrollView scrollEnabled={enableScroll}>
          <View style={styles.orderPageContainer}>
            {/* TITLE */}
            <View style={styles.titleWrapper}>
              <Text style={styles.orderHistoryTitle}>Order History</Text>
            </View>

            {/* Order Items */}
            <View>
            <FlatList
                data={orderData}
                keyExtractor={item => item.TransactionNum}
                vertical={true}
                renderItem={({ item }) => renderNewData(item)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrdersScreen;
