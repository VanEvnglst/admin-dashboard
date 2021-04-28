import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import database from './content';

const OrdersScreen = () => {
  const [enableScroll, setScroll] = useState(false);
  const [orderData, setOrderData] = useState([]);

  // mag rrun tayo ng useEffect tapos sa loob tatawagin natin yung function to get the data
  useEffect(() => {    
      const response = database.getOrderContentData();
      // log mo muna yung response to see yung laman. not sure why pero may parameter na _W
      // where yung response na gusto natin naka log. kaya ginawa kong ganito
      let res = response._W;
      if(res.status === '200') {
        //check status if okay, if okay set the data to orderData
        setOrderData(res.data);
      } else {
        alert('Response has error');
      }
  }, []);
  // yung empty array sa taas ^ ginagamit para once lang mag rrun yung useEffect natin.

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


