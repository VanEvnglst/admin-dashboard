import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, ScrollView, enableScroll } from 'react-native';
import {styles} from './styles';
import SQLite from 'react-native-sqlite-storage';
import { LogBox } from 'react-native';
import {  notifications } from './styles';
import theme, {COLORS, SIZES, FONTS} from './styles';

SQLite.DEBUG(true);
SQLite.enablePromise(true);
let db;




const TopSellingProducts = () => {

      
  const [topSellerData, setTopSellerData] = useState([]);
  useEffect(() => {    
    getTopSeller();
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);


  getTopSeller = () => {
    SQLite.openDatabase(
      'adminDash.db',
      '1.0',
      'Admin Dashboard',
      '200000'
    ).then(DB => {
      db = DB;
      db.transaction(tx => {
        tx.executeSql('SELECT Item, ItemCount FROM TopSellers ORDER BY ItemCount Desc').then(([tx, results]) => {
          var len = results.rows.length;
          var temp = [];
          for(i = 0; i < len; i++) {
            var item = results.rows.item(i);
            temp.push(item);
          }
          setTopSellerData(temp);
        }).catch(err => {
          console.log('execute err', err);
        })
      });
    }).catch(err => {
      console.log('open database error', err);
    })

    }
  // yung empty array sa taas ^ ginagamit para once lang mag rrun yung useEffect natin.
  function listItemView(item){
    return (
      <View>
        <Text style={styles.baseText} >{item.Item}</Text>
        <Text >{item.ItemCount} orders</Text>
        <Text style={styles.row}> </Text>
      </View>
    );
  };

  return (
    
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flex: 1}} >
        <View>
          <FlatList
            Vertical
            nestedScrollEnabled
            showsVerticalScrollIndicator={true}
            data={topSellerData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
         </View>
      </View>
    </SafeAreaView>
  );



};

const NotificationsSummary = () => {

      
    const [notificationsData, setNotificationsData] = useState([]);
  
    useEffect(() => {    
    getNotifications();
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, []);
  
  
    getNotifications = () => {
      SQLite.openDatabase(
        'adminDash.db',
        '1.0',
        'Admin Dashboard',
        '200000'
      ).then(DB => {
        db = DB;
        db.transaction(tx => {
          tx.executeSql('SELECT * FROM Notifications ORDER BY NotifDate DESC').then(([tx, results]) => {
            var len = results.rows.length;
            var temp = [];
            for(i = 0; i < len; i++) {
              var item = results.rows.item(i);
              temp.push(item);
            }
            setNotificationsData(temp);
          }).catch(err => {
            console.log('execute err', err);
          })
        });
      }).catch(err => {
        console.log('open database error', err);
      })
  
      }
      function renderNotifData(item) {
        return (
          <View>
        <Text style={styles.baseText}>{item.NotifTitle}</Text>
        <Text>{item.NotifDate}</Text>
        <Text style={{color: COLORS.primary}}>{item.NotifDesc}</Text>
        <Text style={styles.row} />
          </View>
        );
      };
    
      return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{flex: 1}} >
              <View>
                <FlatList
                  data={notificationsData}
                  Vertical
                  nestedScrollEnabled
                  showsVerticalScrollIndicator={true}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => renderNotifData(item)}
                />
              </View>
              </View>
        </SafeAreaView>
      );
    };
    

var summaryData = [
  {
      id: 0,
      name: 'Item Sold',
      value: 0,
    },
    {
      id: 1,
      name: 'Total Sales',
      value: 0,
    },
    {
      id: 2,
      name: 'Total Customers',
      value: 0,
    },
    {
      id: 3,
      name: 'Total Discounts',
      value: 0,
    },
    {
      id: 4,
      name: 'Cancelled Orders',
      value: 0,
    },
    {
      id: 5,
      name: 'Take-out Orders',
      value: 0,
    },
    {
      id: 6,
      name: 'Grab Orders',
      value: 0,
    },
    {
      id: 7,
      name: 'Food Panda Orders',
      value: 0,
    },

];




  const getSummary = () => {
    new Promise((resolve) => {
        SQLite.openDatabase(
          'adminDash.db',
          '1.0',
          'Admin Dashboard',
          '200000'
        ).then(DB => {
          db = DB;
          db.executeSql('SELECT * FROM Summary;', []).then(([tx,results]) => {
            var len = tx.rows.length
            for (let i = 0; i < len; i++) {
              let row = tx.rows.item(i)
            
              summaryData[0].value = row.ItemsSold;
              summaryData[1].value = row.TotalSales;
              summaryData[2].value = row.TotalCustomers;
              summaryData[3].value = row.TotalDiscounts;
              summaryData[4].value = row.CancelledOrders;
              summaryData[5].value = row.TakeoutOrders;
              summaryData[6].value = row.GrabOrders;
              summaryData[7].value = row.FoodPandaOrders;
            }
        }
          );
        });
    });
    return summaryData; 
  }
  
  export {TopSellingProducts,NotificationsSummary,getSummary};
