// import React from 'react';
import * as React from 'react';
import { Text, View, ScrollView, StyleSheet }  from 'react-native';
import styles from './styles';


export default Orders = () => {

  return(
    <ScrollView>
            <View style={{flex:1}}>

            <View>
            <Text style={styles.orderHistoryTitle}>Order History</Text>
            <Text style={styles.orderDate}>Monday, 01 March 2021</Text>
            </View>

              <View style={styles.container}>
        
                  <View style={styles.orderNumberContainer}>
                    <Text style={styles.orderNumberTitle}>ORDER</Text>
                    <Text style={styles.orderNumber}>30</Text>
                  </View>


                  <View style={styles.orderContentContainer}>
                    <Text style={styles.orderPrice}>PHP 150.00</Text>
                    <Text style={styles.orderNumberReference}>Order no: #000001</Text>
                    <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                    <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                    <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                    <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                  </View>


                  <View style={styles.orderStatusContainer}>
                    <Text style={styles.orderStatus}>Completed</Text>
                  </View>
              </View>



              <View style={styles.container}>

                  <View style={styles.orderNumberContainer}>
                    <Text style={styles.orderNumberTitle}>ORDER</Text>
                    <Text style={styles.orderNumber}>30</Text>
                  </View>

                  <View style={styles.orderContentContainer}>
                    <Text style={styles.orderPrice}>PHP 150.00</Text>
                    <Text style={styles.orderNumberReference}>Order no: #000001</Text>
                    <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                    <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                    <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                    <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                  </View>

                  <View style={styles.orderStatusContainer}>
                    <Text style={styles.orderStatus}>Completed</Text>
                  </View>
              </View> 



              <View style={styles.container}>

                <View style={styles.orderNumberContainer}>
                  <Text style={styles.orderNumberTitle}>ORDER</Text>
                  <Text style={styles.orderNumber}>30</Text>
                </View>

                <View style={styles.orderContentContainer}>
                  <Text style={styles.orderPrice}>PHP 150.00</Text>
                  <Text style={styles.orderNumberReference}>Order no: #000001</Text>
                  <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                  <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                  <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                  <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                </View>

                <View style={styles.orderStatusContainer}>
                  <Text style={styles.orderStatus}>Completed</Text>
                </View>
              </View> 



              <View style={styles.container}>

                <View style={styles.orderNumberContainer}>
                  <Text style={styles.orderNumberTitle}>ORDER</Text>
                  <Text style={styles.orderNumber}>30</Text>
                </View>

                <View style={styles.orderContentContainer}>
                  <Text style={styles.orderPrice}>PHP 150.00</Text>
                  <Text style={styles.orderNumberReference}>Order no: #000001</Text>
                  <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                  <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                  <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                  <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                </View>

                <View style={styles.orderStatusContainer}>
                  <Text style={styles.orderStatus}>Completed</Text>
                </View>
              </View> 


              <View style={styles.container}>

                <View style={styles.orderNumberContainer}>
                  <Text style={styles.orderNumberTitle}>ORDER</Text>
                  <Text style={styles.orderNumber}>30</Text>
                </View>

                <View style={styles.orderContentContainer}>
                  <Text style={styles.orderPrice}>PHP 150.00</Text>
                  <Text style={styles.orderNumberReference}>Order no: #000001</Text>
                  <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                  <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                  <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                  <Text style={styles.orderContent}>Wintermelon Milktea</Text>
                </View>

                <View style={styles.orderStatusContainer}>
                  <Text style={styles.orderStatus}>Completed</Text>
                </View>
              </View> 




          </View>        
    </ScrollView> 
  );
};

