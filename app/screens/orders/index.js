import * as React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, ScrollView}  from 'react-native';
import styles from './styles';
import orderListData from './orderListData';

export default OrdersScreen = () => {

  const renderOrderItem = ({ item }) => {
    return(
        <View style={styles.orderPageContainer}>
          <View style={styles.container}>
              <View style={styles.orderNumberContainer}>
                <Text style={styles.orderNumberTitle}>{item.orderNumberTitleData}</Text>
                <Text style={styles.orderNumber}>{item.orderNumberData}</Text>
              </View>

              <View style={styles.orderContentContainer}>
                <Text style={styles.orderPrice}>{item.orderPriceData}</Text>
                <Text style={styles.orderNumberReference}>{item.orderTitleData}</Text>
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

  return( 
    <View style = {styles.orderPageContainer}>

      {/* TITLE */}
        <SafeAreaView>
          <View style = {styles.titleWrapper}>
            <Text style = {styles.orderHistoryTitle}>Order History</Text>
            <Text style = {styles.orderDate}>March 30, 2021</Text>
          </View>
        </SafeAreaView>

      {/* Order Items */}
        <View>
        <FlatList 
          data={orderListData}
          renderItem={renderOrderItem}
          keyExtractor={item => item.id.toString()}
          vertical= {true}
        />
        </View>

  </View>
  );
};


