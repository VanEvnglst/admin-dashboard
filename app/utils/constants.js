const DatabaseConstants = {
  createProductsTable: 
    'CREATE TABLE IF NOT EXISTS Products (ProductID Integer Primary Key Autoincrement, SerialNo Text, Item Text, ItemDes Text, ItemCategory Integer, SubCategory Text, ' +
    'ItemPrice Real, Constraint fk_categories Foreign Key (ItemCategory) References Categories(CatEntryID))',
  createCategoriesTable:
    'CREATE TABLE IF NOT EXISTS Categories (CatEntryID Integer Primary Key Autoincrement, CatName Text, CatPriority Integer, CatAbb Text)',
  createOrdersTable:
    'CREATE TABLE IF NOT EXISTS Orders (OrderEntryID Integer Primary Key Autoincrement, OrderReference Integer Autoincrement, OrderCount Integer, OrderStatus Text,' + 
    'Amount Numeric, Cash Numeric, PaymentMode Text, Date Numeric, CashierName Integer, TotalItemsWithVoid Integer, TotalAmountWithVoid Numeric, DateVoided Numeric )',
  createItemsTable:
    'CREATE TABLE IF NOT EXISTS Items' +
    '(ItemEntryID Integer Primary Key Autoincrement, SerialNo Text,Item Text, ItemDes Text, ItemCategory Integer, SubCategory Text, ItemImage Blob, ItemCost Real,' + 
    'ItemPrice Real, ItemStock Integer,ItemUseAdd Integer, Constraint fk_categories Foreign Key (ItemCategory) References Categories(CatEntryID))',
  createUsersTable: 
    'CREATE TABLE IF NOT EXISTS Users (UserEntryID Integer Primary Key Autoincrement, RegSurname Text, RegFirstName Text, RegMiddleName Text,' +
    'RegFullname Text, RegUsername Text, RegEmail Text, RegPassword Text, RegDate Numeric)',
  createItemTransTable:
    'CREATE TABLE IF NOT EXISTS ItemTransactions' +
    '(ItemTransEntryID Integer Primary Key Autoincrement, TransactionNum Integer, Item Text, Price Numeric, CashierName Integer,' +
    'Date Numeric, Status Text, MoPayment Text, Category Integer, DateVoided Numeric, VATableSale Numeric, VAT Numeric,' +
    'nonVATable Numeric, LessVat Numeric,' +
    'Constraint fk_salestransactions Foreign Key (TransactionNum) References SalesTransactions(TransactionNum),' +
    'Constraint fk_categories Foreign Key (Category) References Categories(CatEntryID),' +
    'Constraint fk_users Foreign Key (CashierName) References Users(UserEntryID))',
  createDiscountsTable:
    'CREATE TABLE IF NOT EXISTS Discounts (DiscountEntryID Integer Primary Key Autoincrement, DiscountName Text, DiscountPrice Real)',
  createPrinterSetupTable:
  'CREATE TABLE IF NOT EXISTS PrinterSetups' +
  '(printerID Integer Primary Key Autoincrement, printerName Text, HeaderFont Real, ItemFont Real, Status Text, DetailFont Real, OrderSlipFont Real)',
  createReprintTable:
    'CREATE TABLE IF NOT EXISTS Reprint' +
    '(RecID Integer Primary Key Autoincrement, TransactionNo Integer, Amount Real, DateReprinted Numeric)',
  createEODTable:
  'CREATE TABLE IF NOT EXISTS EOD' +
  '(EntryID Integer Primary Key Autoincrement, DateTransaction Text, TenantID Text, TerminalNo Text, GrossSales Text, TotalTax Text,' +
  'TotalAmountVoid Text, NoOfVoid Text, TotalAmountDiscount Text, NoOfDiscount Text, TotalAmountRefund Text, NoOfRefund Text, '+
  'OtherNegative Text, NoOfRecordedNegative Text, TotalServiceCharge Text, PreviousEODCounter Text, PreviousAccumulatedGrandTotal Text,' +
  'CurrentEODCounter Text, CurrentAccumulatedGrandTotal Text, SalesTransactionDate Text, Novelty Text, Misc Text, LocalTax Text,' +
  'TotalCreditSales Text, TotalCreditTax Text, TotalNonVatSales Text, PharmaSales Text, NonPharmaSales Text, PWDDiscount Text,' +
  'GrossSalesNotSubject Text, TotalAmountOfReprint Text, NumberOfReprint Text, filename Text, DateSent Numeric, Status Text,' +
  'BatchNo Integer)',
  insertCategories:
    'INSERT INTO Categories (CatName,CatPriority,CatAbb) VALUES' +
    `('Milk Tea',1,'MT'), ('Flavoured Tea',2,'FT'), ('Coffee',3,'Cof'), ('Bun',4,'Bun')`,
  insertItems: 
    'INSERT INTO Items (Item, ItemCategory, ItemCost, ItemPrice, ItemUseAdd) Values' +
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
}

export default DatabaseConstants;