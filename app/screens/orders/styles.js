import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    orderPage:{
    flex:1,
    },
    orderHistoryTitle:{
      fontWeight: 'bold',
      fontSize: 24,
      marginLeft: 18,
      marginTop: 20,
    },
    orderDate:{
      fontSize: 18,
      marginBottom: 10,
      marginLeft: 18,
    },
    container:{
      flexDirection:"row",
      marginBottom: 10,
      flex:1,
    },
    orderNumberContainer:{
      padding: 15,
      backgroundColor: "#E9EAEA",
      borderTopStartRadius: 20,
      borderBottomLeftRadius: 20,
      marginLeft: 8,
    },
    orderNumberTitle:{
      fontSize: 18,
      marginTop: 25,
    },
    orderNumber:{
      fontSize: 48,
      marginLeft: 2,
    },
    orderContentContainer:{
      backgroundColor: "#FFFFFF",
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 10,
    },
    orderPrice:{
      fontSize: 14,
      textAlign: "right",
      marginBottom: 3,
    },
    orderNumberReference:{
      fontSize: 16,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    orderContent:{
      fontSize: 14,
      marginBottom: 5,
      marginRight: 50,
    },
    orderStatusContainer:{
      padding:20,
      backgroundColor: "#A6AFAA",
      borderTopEndRadius: 20,
      borderBottomRightRadius: 20,
    },
    orderStatus:{
      fontSize: 13,
      marginTop: 105,
      fontWeight: 'bold',
    },

  });

  export default styles;
  