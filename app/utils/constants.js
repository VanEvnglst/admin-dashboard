const DatabaseConstants = {
  createCategoriesTable:
    'CREATE TABLE IF NOT EXISTS Categories (CatEntryID Integer Primary Key Autoincrement, CatName Text, CatPriority Integer, CatAbb Text)',
  createItemsTable:
    'CREATE TABLE IF NOT EXISTS Items' +
    '(ItemEntryID Integer Primary Key Autoincrement, SerialNo Text,Item Text, ItemDes Text, ItemCategory Integer, SubCategory Text, ItemImage Blob, ItemCost Real,' + 
    'ItemPrice Real, ItemStock Integer,ItemUseAdd Integer, Constraint fk_categories Foreign Key (ItemCategory) References Categories(CatEntryID))',
  createSummaryTable:
    'CREATE TABLE IF NOT EXISTS Summary (ItemsSold INTEGER, TotalSales INTEGER, TotalCustomers INTEGER, TotalDiscounts INTEGER, CancelledOrders INTEGER, TakeoutOrders INTEGER, GrabOrders INTEGER, FoodPandaOrders INTEGER)',
  createTopSellersTable:
    'CREATE TABLE IF NOT EXISTS TopSellers (SerialNo Text, Item Text, ItemCategory Integer, ItemCount Integer,' +
    'Constraint fk_categories Foreign Key (ItemCategory) References Categories(CatEntryID), '+
    'Constraint fk_serial Foreign Key (SerialNo) References Items(SerialNo) ' +
    'Constraint fk_itemName Foreign Key (Item) References Items(Item))',
  createNotificationsTable:
    'CREATE TABLE IF NOT EXISTS Notifications (NotifID Integer Primary Key Autoincrement, NotifTitle Text, NotifDesc Text, NotifDate Text)',
  createUsersTable: 
    'CREATE TABLE IF NOT EXISTS Users (UserEntryID Integer Primary Key Autoincrement, RegSurname Text, RegFirstName Text, RegMiddleName Text,' +
    'RegFullname Text, RegUsername Text, RegEmail Text, RegPassword Text, RegDate Numeric)',
  createSalesTransTable:
    'CREATE TABLE IF NOT EXISTS SalesTransactions' +
    '(SalesTransEntryID Integer Primary Key Autoincrement, TransactionNum Integer, Amount Numeric, Cash Numeric, PaymentMode Text,' +
    'Date Text, CashierName Text, TotalItemsWithVoid Integer, TotalAmountWithVoid Numeric, DateVoided Numeric, Status Text)', // +
    // 'Constraint fk_users Foreign Key (CashierName) References Users(UserEntryID))',
  createItemTransTable:
    'CREATE TABLE IF NOT EXISTS ItemTransactions' +
    '(ItemTransEntryID Integer Primary Key Autoincrement, TransactionNum Integer, Item Text, Price Numeric, CashierName Text,' +
    'Date Text, Status Text, PaymentMode Text, Category Integer, DateVoided Numeric, VATableSale Numeric, VAT Numeric,' +
    'nonVATable Numeric, LessVat Numeric,' +
    'Constraint fk_salestransactions Foreign Key (TransactionNum) References SalesTransactions(TransactionNum),' +
    'Constraint fk_categories Foreign Key (Category) References Categories(CatEntryID))', // + 
    // 'Constraint fk_users Foreign Key (CashierName) References Users(UserEntryID))',
  createDiscountsTable:
    'CREATE TABLE IF NOT EXISTS Discounts (DiscountEntryID Integer Primary Key Autoincrement, DiscountName Text, DiscountPrice Real)',
  insertCategories:
    'INSERT INTO Categories (CatName,CatPriority,CatAbb) VALUES' +
    `('Milk Tea',1,'MT'), ('Flavoured Tea',2,'FT'), ('Coffee',3,'Cof'), ('Bun',4,'Bun')`,
  insertItems: 
    'INSERT INTO Items (Item, ItemCategory, ItemCost, ItemPrice, ItemUseAdd) VALUES' +
    `('Assam', 1,90,90,1 ), ('Earl Grey', 1,90,90,1 ), ('Genmaicha', 1,90,90,1 ), ('Dark Roast Oolong', 1,90,90,1 ),` +
    `('Mango', 1,90,90,1 ), ('Taro', 1,90,90,1 ), ('Assam Peach', 2,90,90,1 ), ('Assam Lychee', 2,90,90,1 ), ` +
    `('Assam Strawberry', 2,90,90,1 ), ('Earl Grey Strawberry', 2,90,90,1 ), ('Earl Grey Peach', 2,90,90,1 ), ` +
    `('Genmai Wintermelon', 2,90,90,1 ), ('Americano', 3,95,95,1 ), ('Latte', 3,100,100,1 ), ('Caramel Latte', 3,105,105,1 ),` +
    `('Vanilla Latte', 3,95,95,1 ), ('Coconut Latte', 3,105,105,1 ), ('Mocha', 3,100,100,1 ), ('Bun', 4,45,45,0 ), ` +
    `('Danish', 4,45,45,0 ),('Croissant', 4,45,45,0 )`,
  insertDiscounts: 
    `INSERT INTO Discounts (DiscountName, DiscountPrice) VALUES ('Senior',20), ('PWD', 20), ('10%', 10) `,
  insertAdminAcct: 
    `INSERT INTO USERS (RegUsername, RegPassword) VALUES ('admin', '1234')`,
  insertSalesTranscations:
    'INSERT INTO SalesTransactions (TransactionNum, Amount, Cash, PaymentMode, Date, CashierName, Status, TotalItemsWithVoid, TotalAmountWithVoid) VALUES' + 
    `(133456, 250, 500, 'Cash', '03/01/2021', 'Raven', 'Completed', 0, 0),` + 
    `(133457, 400, 400, 'Cash', '03/01/2021', 'Raven', 'Completed', 0, 0),` +
    `(133458, 150, 0, 'Credit card', '03/01/2021', 'Raven', 'Completed', 0, 0),` + 
    `(133459, 370, 500, 'Cash', '03/01/2021', 'Raven', 'Completed', 0, 0),` + 
    `(133460, 200, 0, 'Credit card', '03/01/2021', 'Raven', 'Completed', 0, 0),` + 
    `(133461, 750, 0, 'Credit card', '03/02/2021', 'Raven', 'Completed', 0, 0),` + 
    `(133462, 640, 700, 'Cash', '03/02/2021', 'Raven', 'Completed', 0, 0),` +
    `(133463, 200, 500, 'Cash', '03/02/2021', 'Raven', 'Completed', 0, 0),` +
    `(133464, 550, 0, 'Credit card', '03/02/2021', 'Raven', 'Completed', 0, 0),` +
    `(133465, 800, 1000, 'Cash', '03/02/2021', 'Raven', 'Completed', 0, 0),` +
    `(133466, 200, 300, 'Cash', '03/03/2021', 'Raven', 'Completed', 0, 0),` +
    `(133467, 155, 200, 'Cash', '03/03/2021', 'Raven', 'Completed', 0, 0),` +
    `(133468, 690, 0, 'Credit card', '03/03/2021', 'Raven', 'Completed', 0, 0),` +
    `(133469, 300, 1000, 'Cash', '03/03/2021', 'Raven', 'Completed', 0, 0),` +
    `(133470, 630, 700, 'Cash', '03/03/2021', 'Raven', 'Completed', 0, 0)`,
  insertSummary:
    'INSERT INTO Summary (ItemsSold, TotalSales, TotalCustomers, TotalDiscounts, CancelledOrders, TakeoutOrders, GrabOrders, FoodPandaOrders) VALUES (1478, 80000, 450, 60, 0, 550, 478, 450)',
  insertTopSellers:
    'INSERT INTO TopSellers (SerialNo, Item, ItemCategory, ItemCount) VALUES ' +
    `('MT-45', 'Wintermelon milk tea', 1, 450),` +
    `('CF-23', 'Iced Mocha coffee', 3, 440),` +
    `('FT-01', 'Assam Strawberry', 2, 350),` +
    `('CF-05', 'Americano', 2, 300),` +
    `('MT-03', 'Mango milk tea', 1, 270),` +
    `('BR-30', 'Croissant', 4, 200)`,
  insertNotifications:
    'INSERT INTO Notifications (NotifTitle, NotifDesc, NotifDate) VALUES' +
    `('Day of Valor', 'Buy 1 and we will give a free drink to a frontliner.', '04/09/21'),` +
    `('National croissant day', '20% off on croissants for this day', '04/11/21'),` +
    `('Birthday discount', 'Avail of our free upsize on your drink if its your birthday', 'Whole of April'),` +
    `('Afternoon coffee special', 'Free upsize on all coffee orders from 2 - 4PM', '04/15/21'),` +
    `('Labor day special', 'Buy 1 Take 1 on all drinks from April 29 - May 1, 2021', '04/29/21 - 05/01/21')`,
  insertItemTransactions:
    'INSERT INTO ItemTransactions (TransactionNum, Item, Price, CashierName, Date, Status, PaymentMode, Category) VALUES' +
    `(133456, 'Wintermelon milk tea', 125, 'Raven', '03/01/2021', 'Completed', 'Cash', 1),` + 
    `(133456, 'Wintermelon milk tea', 125, 'Raven', '03/01/2021', 'Completed', 'Cash', 1),` + 
    `(133457, 'Iced Mocha coffee', 100, 'Raven', '03/01/2021', 'Completed', 'Cash', 3),` + 
    `(133457, 'Iced Mocha coffee', 100, 'Raven', '03/01/2021', 'Completed', 'Cash', 3),` + 
    `(133457, 'Iced Mocha coffee', 100, 'Raven', '03/01/2021', 'Completed', 'Cash', 3),` + 
    `(133457, 'Iced Mocha coffee', 100, 'Raven', '03/01/2021', 'Completed', 'Cash', 3),` + 
    `(133458, 'Americano', 150, 'Raven', '03/01/2021', 'Completed', 'Credit card', 3),` +
    `(133459, 'Iced Mocha coffee', 100, 'Raven', '03/01/2021', 'Completed', 'Cash', 3),` + 
    `(133459, 'Wintermelon milk tea', 125, 'Raven', '03/01/2021', 'Completed', 'Cash', 1),` + 
    `(133459, 'Wintermelon milk tea', 125, 'Raven', '03/01/2021', 'Completed', 'Cash', 1),` + 
    `(133459, 'Bun', 20, 'Raven', '03/01/2021', 'Completed', 'Cash', 4),` + 
    `(133460, 'Mango milk tea', 100, 'Raven', '03/01/2021', 'Completed', 'Credit card', 1),` + 
    `(133460, 'Mango milk tea', 100, 'Raven', '03/01/2021', 'Completed', 'Credit card', 1)`,
}

export default DatabaseConstants;