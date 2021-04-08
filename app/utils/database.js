import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);
let db;

const DatabaseConfig = {
  dbName: 'pos.db',
  dbVersion: '1.0',
  dbDisplayName:'POS',
  dbSize: '200000',
}

const { 
  createCategoriesTable: createCategoriesTable,
  createUsersTable: createUsersTable,
  createItemsTable: createItemsTable,
  createSummaryTable: createSummaryTable,
  createSalesTransTable: createSalesTransTable,
  createItemTransTable: createItemTransTable,
  createDiscountsTable: createDiscountsTable,
  createTopSellersTable: createTopSellersTable,
  createNotificationsTable: createNotificationsTable,
  
} = DatabaseConstants;

export default {
  initializeDatabase: () => {
    return new Promise((resolve) => {
      console.log('Plugin integrity check ...');
      SQLite.echoTest().then(() => {
        console.log('Integrity check passed ...');
        SQLite.openDatabase(
          'adminDash.db',
          '1.0',
          'Admin Dashboard',
          '200000'
        ).then(DB => {
          db = DB;
          db.executeSql('SELECT 1 FROM Categories LIMIT 1').then(initRes => {
            if(initRes[0].rows.length === 0) {
              populateDatabase(db);
            }
          }).catch(error => {
            db.transaction(tx => {
              tx.executeSql(createCategoriesTable);
              tx.executeSql(createItemsTable);
              tx.executeSql(createTopSellersTable);
              tx.executeSql(createSummaryTable);
              tx.executeSql(createNotificationsTable);
              tx.executeSql(createUsersTable);
              tx.executeSql(createSalesTransTable);
              tx.executeSql(createItemTransTable);
              tx.executeSql(createDiscountsTable);
            }).then(respo => {
              populateDatabase(db);
            }).catch(error => {
              //database creation error
              // add functionality to re-create tables
            });
          });
          resolve('200');
        }).catch(err => {
          resolve(err);
        });
      }).catch(error => {
        console.warn('echoTest failed - plugin not functional');
      });
    });
  },


  populateDatabase: (db) => {
    const {
      insertCategories: insertCategories,
      insertItems: insertItems,
      insertDiscounts: insertDiscounts,
      insertAdminAcct: insertAdminAcct,
      insertSalesTransactions: insertSalesTransactions,
      insertSummary: insertSummary,    
      insertTopSellers: insertTopSellers,
      insertNotifications: insertNotifications,
      insertItemTransactions: insertItemTransactions,
    } = DatabaseConstants;
    db.transaction(tx => {
      tx.executeSql(insertCategories);
      tx.executeSql(insertItemTransactions);
      tx.executeSql(insertItems);
      tx.executeSql(insertTopSellers);
      tx.executeSql(insertNotifications);
      tx.executeSql(insertAdminAcct);
      tx.executeSql(insertSalesTransactions),
      tx.executeSql(insertSummary),
      tx.executeSql(insertDiscounts)
    }).then(() => {
      debugger;
      db.close().then(status => {
        debugger;
        console.log('stat', status);
      });
    });
  },
}