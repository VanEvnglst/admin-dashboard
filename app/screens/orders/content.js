import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);
let db;

// since yung data galing na sa database, pwede mo na delete to.
// Hindi mo na din need tong fixed data mo
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

// pwede mo gamiting reference yung pag gawa ko ng functions sa database.js

// export default gagamitin para pwede natin siya ma-call sa ibang file
export default {
    // follow mo nalang tong pattern for all future functions
    // functionName: () => {}
    getOrderContentData: () => {
        // const orderList = [];
        return new Promise(resolve => {
            SQLite.openDatabase(
                'adminDash.db',
                '1.0',
                'Admin Dashboard',
                '200000'
            ).then(DB => {
                db = DB;
                // bago tayo makapag execute ng sql query kailangan ready yung database for transactions/queries
                // so laging ganito nadin pattern niya. db.transaction
                db.transaction(tx => {
                    // sa loob ng transaction gamitin yung tx para makapag execute ng query
                    // sa loob ng query niyo, di niyo na need isama yung ";".
                    // baguhin mo nalang tong query to get what you need.
                    tx.executeSql('SELECT * from SalesTransactions ORDER BY Date DESC').then(([tx, results]) => {
                        //after ng execution ng query, yung iccheck natin lagi yung results kasi yun yung kailangan natin
                        // always check yung length kasi yun yung magsasabi kung may nagbago ba sa rows ng database mo.
                        var len = results.rows.length;
                        var temp = []
                        for (i = 0; i < len; i++) { 
                            var item = results.rows.item(i);
                            temp.push(item);
                        }
                        const orderList = temp;
                    // for every .then() na nilalagay natin, dapat naglalagay din tayo ng .catch() kasi sila yung huhuli kung may error
                    }).catch(err => {
                        // for .catch() okay lang iwan yung console.log. Pwede mo din gawin na ganito para alam mo san siya nag
                        // error.
                        console.log('execute SQL err', err);
                    });
                }).catch(err => {
                    console.log('db transaction err', err);
                });
    }).catch(err => {
        console.log('open database err', err);
    });
    // yung resolve is part ng Promise, follow niyo nalang din to as pattern,
    // using this, ma-access na natin yung data from the function.
    resolve({'status': '200', 'data': orderList});
    });
    }
}
// const getOrderContentData = () => {
//     var [orderList, setOrderList] = useState([]);

//     new Promise((resolve) => {


//                 for (let i = 0; i < len; i++) {
//                     let row = tx.rows.item(i)
//                     console.log('item', row);
//                     tempObj.transactionNum = row.TransactionNum,
//                     console.log('object',tempObj)
//                     temp.push(tempObj);


        /*  orderContentData[1].orderTitleData = row.FirstOrder;
                    orderContentData[2].orderTitleData = row.SecondOrder;
                    orderContentData[3].orderTitleData = row.ThirdOrder;
                    orderContentData[4].orderTitleData = row.FourthOrder;
                    orderContentData[5].orderTitleData = row.FifthOrder;
                    orderContentData[6].orderTitleData = row.SixthOrder; */

//                 }
//                 console.log('temp', temp)
//                 setOrderList(temp);
//                // console.log(setOrderItems);
//             }
//             );
//         }).catch(err => { 

//         });
//         resolve({'status':'200', 'data': orderList});
//     });
// };

// export { getOrderContentData }