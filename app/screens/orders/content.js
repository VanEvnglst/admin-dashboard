import SQLite from 'react-native-sqlite-storage';
import { useState } from 'react';
import { RecyclerViewBackedScrollViewComponent } from 'react-native';

SQLite.DEBUG(true);
SQLite.enablePromise(true);
let db;

var orderContentData = [
    {
        id: 1,
        name: "FirstOrder",

        orderNumberTitleData: 'ORDER',
        orderNumberData: '1',

        orderPriceData: "₱ 150.00",
        orderTitleData: 0,
        orderContent1Data: "Wintermelon Milktea",
        orderContent2Data: "Wintermelon Milktea",
        orderContent3Data: "Wintermelon Milktea",
        orderContent4Data: "Wintermelon Milktea",

        orderStatusData: 'Completed',
    },

    {
        id: 2,
        name: "SecondOrder",

        orderNumberTitleData: 'ORDER',
        orderNumberData: '20',

        orderPriceData: "₱ 2000.00",
        orderTitleData: 0,
        orderContent2Data: "Strawberry Chocolate Milktea",
        orderContent3Data: "Strawberry Chocolate Milktea",
        orderContent4Data: "Strawberry Chocolate Milktea",
        orderContent1Data: "Strawberry Chocolate Milktea",

        orderStatusData: 'Completed',

    },

    {
        id: 3,
        name: "ThirdOrder",

        orderNumberTitleData: 'ORDER',
        orderNumberData: '300',

        orderPriceData: "₱ 10000.00",
        orderTitleData: 0,
        orderContent1Data: "Matcha Milktea",
        orderContent2Data: "Matcha Milktea",
        orderContent3Data: "Matcha Milktea",
        orderContent4Data: "Matcha Milktea",

        orderStatusData: 'Completed',
    },

    {
        id: 4,
        name: "FourthOrder",

        orderNumberTitleData: 'ORDER',
        orderNumberData: '4',

        orderPriceData: "₱ 150.00",
        orderTitleData: 0,
        orderContent1Data: "Creamcheese Milktea",
        orderContent2Data: "Creamcheese Milktea",
        orderContent3Data: "Creamcheese Milktea",
        orderContent4Data: "Creamcheese Milktea",

        orderStatusData: 'Completed',
    },

    {
        id: 5,
        name: "FifthOrder",

        orderNumberTitleData: 'ORDER',
        orderNumberData: '5',

        orderPriceData: "₱ 150.00",
        orderTitleData: 0,
        orderContent1Data: "Creamcheese Milktea",
        orderContent2Data: "Creamcheese Milktea",
        orderContent3Data: "Creamcheese Milktea",
        orderContent4Data: "Creamcheese Milktea",

        orderStatusData: 'Completed',
    },


    {
        id: 6,
        name: "SixthOrder",

        orderNumberTitleData: 'ORDER',
        orderNumberData: '6',

        orderPriceData: "₱ 150.00",
        orderTitleData: 0,
        orderContent1Data: "Creamcheese Milktea",
        orderContent2Data: "Creamcheese Milktea",
        orderContent3Data: "Creamcheese Milktea",
        orderContent4Data: "Creamcheese Milktea",

        orderStatusData: 'Completed',
    },
]


const getOrderContentData = () => {
    var [orderList, setOrderList] = useState([]);

    new Promise((resolve) => {

        SQLite.openDatabase(
            'adminDash.db',
            '1.0',
            'Admin Dashboard',
            '200000'
        ).then(DB => {
            db = DB;
            db.executeSql('Select TransactionNum from SalesTransactions Order by Date DESC;', []).then(([tx, results]) => {
                var len = tx.rows.length;
                var temp = [];
                var tempObj = {
                    "transactionNum": '',
                    'cash': '',
                };
                for (let i = 0; i < len; i++) {
                    let row = tx.rows.item(i)
                    console.log('item', row);
                    tempObj.transactionNum = row.TransactionNum,
                    console.log('object',tempObj)
                    temp.push(tempObj);


        /*  orderContentData[1].orderTitleData = row.FirstOrder;
                    orderContentData[2].orderTitleData = row.SecondOrder;
                    orderContentData[3].orderTitleData = row.ThirdOrder;
                    orderContentData[4].orderTitleData = row.FourthOrder;
                    orderContentData[5].orderTitleData = row.FifthOrder;
                    orderContentData[6].orderTitleData = row.SixthOrder; */

                }
                console.log('temp', temp)
                setOrderList(temp);
               // console.log(setOrderItems);
            }
            );
        }).catch(err => { 

        });
        resolve({'status':'200', 'data': orderList});
    });
};

export { getOrderContentData }