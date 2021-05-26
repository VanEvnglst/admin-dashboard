import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  orderPageContainer: {
    flex: 1,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  titleWrapper: {
    paddingLeft: 2,
  },
  orderHistoryTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 18,
    marginTop: 20,
    marginBottom: 5,
  },
  orderDate: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 18,
  },

  /* First Container*/
  orderNumberContainer: {
    padding: 15,
    backgroundColor: "#E9EAEA",
    borderTopStartRadius: 20,
    borderBottomLeftRadius: 20,
    marginLeft: 16,
    borderColor: '#000000',
    borderWidth: 1,
    width: 120,
    height: 200,
  },
  orderNumberTitle: {
    fontSize: 24,
    marginTop: 50,
    textAlign: 'center',
  },
  orderNumber: {
    fontSize: 36,
    marginLeft: 2,
    textAlign: 'center',
  },

  /* Second Container*/
  orderDetailsContainer: {
    backgroundColor: "#FFFFFF",
    paddingLeft: 15,
    width: 400,
    height: 200,
    borderColor: '#000000',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  amount: {
    fontSize: 20,
    textAlign: "right",
    marginRight: 10,
  },
  transactionNum: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  paymentModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  paymentMode: {
    fontSize: 18,
    marginLeft: 5,
  },
  cashierNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cashierName: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: 5,
  },
  totalItemsWithVoidContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  TotalItemsWithVoid: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: 5,
  },
  totalAmountWithVoidContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  TotalAmountWithVoid: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: 5,
  },



  /* Third Container*/
  statusContainer: {
    width: 120,
    height: 200,
    backgroundColor: "#A6AFAA",
    borderTopEndRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: '#000000',
    borderWidth: 1,
  },
  status: {
    fontSize: 19,
    textAlign: "center",
    marginTop: 160,
    fontWeight: 'bold',
  },
});

export default styles;
