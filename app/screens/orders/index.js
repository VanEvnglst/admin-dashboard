import React, { Component, useState, useEffect } from 'react';
import { Text, View, FlatList, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import styles from './styles';
import { getOrderContentData } from './content'
import database from '../../utils/database';

const OrdersScreen = () => {
  const [enableScroll, setScroll] = useState(false);
  const [orderData, setOrderData] = useState();

  function getOrderData() {
    const response = getOrderContentData();
    console.log('res', response);
  }

  useEffect(() => {
    getOrderData();
  }, []);

  function renderNewData(item, index) {
    return (
      <View style={styles.orderPageContainer}>
        <View style={styles.container}>
          <View style={styles.orderNumberContainer}>
            <Text style={styles.orderNumberTitle}>{item.orderNumberTitleData}</Text>
            <Text style={styles.orderNumber}>{item.orderNumberData}</Text>
          </View>

          <View style={styles.orderContentContainer}>
            <Text style={styles.orderPrice}>{item.orderPriceData}</Text>
            <Text style={styles.orderNumberReference}>{item.transactionNum}</Text>
            <Text style={styles.orderContent}>{item.orderContent1Data}</Text>
            <Text style={styles.orderContent}>{item.orderContent1Data}</Text>
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
    <View
      onStartShouldSetResponderCapture={() => setScroll(true)}
    >
      <ScrollView
        scrollEnabled={enableScroll}
      //ref={myScroll => (_myScroll = myScroll)}
      >
        <View style={styles.orderPageContainer}>

          {/* TITLE */}
          <SafeAreaView>
            <View style={styles.titleWrapper}>
              <Text style={styles.orderHistoryTitle}>Order History</Text>
              <Text style={styles.orderDate}>March 30, 2021</Text>
            </View>
          </SafeAreaView>

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
  );
};

export default OrdersScreen;


