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
  createShiftTable: createShiftTable,
  createSalesTransTable: createSalesTransTable,
  createItemTransTable: createItemTransTable,
  createDiscountsTable: createDiscountsTable,
  createPrinterSetupTable: createPrinterSetupTable,
  createReprintTable: createReprintTable,
  createEODTable: createEODTable
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
          db.executeSql('SELECT 1 FROM Products LIMIT 1').then(initRes => {
            if(initRes[0].rows.length === 0) {
              populateDatabase(db);
            }
          }).catch(error => {
            db.transaction(tx => {
              tx.executeSql(createProductsTable);
              tx.executeSql(createOrdersTable);
              tx.executeSql(createSummaryTable);
              tx.executeSql(createTopSellersTable);
              tx.executeSql(createNotificationsTable);
              tx.executeSql(createEODTable);
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
      insertProductsData: insertProductsData,
      insertOrdersData: insertOrdersData,
      insertSummaryData: insertSummaryData,
      insertTopSellersData: insertTopSellersData,
      insertNotifications: insertNotifications,
      insertEODData: insertEODData,
    } = DatabaseConstants;
    db.transaction(tx => {
      tx.executeSql(insertProductsData);
      tx.executeSql(insertOrdersData);
      tx.executeSql(insertSummaryData);
      tx.executeSql(insertTopSellersData);
      tx.executeSql(insertNotifications);
      tx.executeSql(insertEODData);
    }).then(() => {
      debugger;
      db.close().then(status => {
        debugger;
        console.log('stat', status);
      });
    });
  },
}