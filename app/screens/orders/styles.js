import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({  
    orderPageContainer:{
      flex: 1,
      marginBottom: 10,
    },
    container:{
      flex: 1,
      flexDirection: 'row',
    },
    titleWrapper: {
      paddingLeft: 2,
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
    orderNumberContainer:{
      padding: 15,
      backgroundColor: "#E9EAEA",
      borderTopStartRadius: 20,
      borderBottomLeftRadius: 20,
      marginLeft: 16,
      borderColor: '#000000',
      borderWidth: 1,
      width: 95,
      height: 200,
    },
    orderNumberTitle:{
      fontSize: 18,
      marginTop: 50,
      textAlign: 'center',
    },
    orderNumber:{
      fontSize: 36,
      marginLeft: 2,
      textAlign: 'center',
    },
    orderContentContainer:{
      backgroundColor: "#FFFFFF",
      paddingLeft: 15,
      width: 360,
      height: 200,
      borderColor: '#000000',
      borderBottomWidth: 1,
      borderTopWidth: 1,
    },
    orderPrice:{
      fontSize: 20,
      textAlign: "right",
      marginRight: 10,
    },
    orderNumberReference:{
      fontSize: 20,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    orderContent:{
      fontSize: 20,
      marginBottom: 5,
      marginRight: 50,
      marginLeft: 15,
    },
    orderStatusContainer:{
      width: 95,
      height: 200,
      backgroundColor: "#A6AFAA",
      borderTopEndRadius: 20,
      borderBottomRightRadius: 20,
      borderColor: '#000000',
      borderWidth: 1,
    },
    orderStatus:{
      fontSize: 17,
      textAlign: "center",
      marginTop: 140,
      fontWeight: 'bold',
    },

  });

  export default styles;
  