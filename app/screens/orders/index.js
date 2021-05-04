import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);
let db;

const OrdersScreen = () => {
  
  const [enableScroll, setScroll] = useState(false);
  const [orderData, setOrderData] = useState([]);

  // mag rrun tayo ng useEffect tapos sa loob tatawagin natin yung function to get the data
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
        tx.executeSql('SELECT * from SalesTransactions ORDER BY Date DESC').then(([tx, results]) => {
          var len = results.rows.length;
          var temp = [];
          for(i = 0; i < len; i++) {
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
  // yung empty array sa taas ^ ginagamit para once lang mag rrun yung useEffect natin.

  function renderNewData(item, index) {
    console.log('item', item);
    return (
      <View style={styles.orderPageContainer}>
        <View style={styles.container}>
          <View style={styles.orderNumberContainer}>
            <Text style={styles.orderNumberTitle}>{item.orderNumberTitleData}</Text>
            <Text style={styles.orderNumber}>{item.orderNumberData}</Text>
          </View>

          <View style={styles.orderContentContainer}>
            <Text style={styles.orderPrice}>{item.Amount}</Text>
            <Text style={styles.orderNumberReference}>{item.TransactionNum}</Text>
            <View>
              <Text>Payment Mode:</Text>
            <Text style={styles.orderContent}>{item.PaymentMode}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',       alignItems: 'center'}}>
              <Text>Cashier Name</Text>
            <Text style={styles.orderContent}>{item.CashierName}</Text>
            </View>
            <Text style={styles.orderContent}>{item.orderContent1Data}</Text>
            <Text style={styles.orderContent}>{item.orderContent1Data}</Text>
          </View>

          <View style={styles.orderStatusContainer}>
            <Text style={styles.orderStatus}>{item.orderStatusData}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    // SafeAreaView usually nilalagay as pinaka parent,
    // ang use nito ay para yung content natin hindi matago sa phones na may notch
    <SafeAreaView>
      <View
        onStartShouldSetResponderCapture={() => setScroll(true)}
      >
        <ScrollView scrollEnabled={enableScroll}>
          <View style={styles.orderPageContainer}>
          {/* TITLE */}
            <View style={styles.titleWrapper}>
              <Text style={styles.orderHistoryTitle}>Order History</Text>
              {/* Move your date text na maging part ng renderItem method */}
              {/* Stick mo nalang yung format to be MM/DD/YY */}
              <Text style={styles.orderDate}>March 30, 2021</Text>
            </View>

          {/* Order Items */}
          <View>
            <FlatList
              data={orderData}
              keyExtractor={item => item.id}
              vertical={true}
              renderItem={({ item, index }) => renderNewData(item, index)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

export default OrdersScreen;


