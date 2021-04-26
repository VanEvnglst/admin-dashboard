import SQLite from 'react-native-sqlite-storage';
import {useState} from 'react';
import React, { useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView } from 'react-native';

import { LogBox } from 'react-native';
import { styles } from './styles';

SQLite.DEBUG(true);
SQLite.enablePromise(true);
let db;



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


const getTopSeller = () => {
  var [flatListItems, setFlatListItems] = useState([]);
    useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
    new Promise((resolve) => {
      
        SQLite.openDatabase(
          'adminDash.db',
          '1.0',
          'Admin Dashboard',
          '200000'
        ).then(DB => {
          db = DB;
          db.executeSql('SELECT Item, ItemCount FROM TopSellers ORDER BY ItemCount;', []).then(([tx,results]) => {
            var len = tx.rows.length;
            var temp = [];
            for (let i = 0; i < len; i++) {
              let row = tx.rows.item(i)
              temp.push({'Item': row.Item,'ItemCount': row.ItemCount});
            }
            setFlatListItems(temp);
        }
          );
        });
      });
      
      let listItemView = (item) => {
        return (
          <View>
            <Text  style={styles.baseText} >{item.Item}</Text>
            <Text  style={styles.baseText} >{item.ItemCount}</Text>
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
                data={flatListItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => listItemView(item)}
              />
             </View>
          </View>
        </SafeAreaView>
      );

  };

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

  

  
export {getSummary,getTopSeller};
