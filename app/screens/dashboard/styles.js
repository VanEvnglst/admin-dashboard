import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: '#696969', // Gray
    secondary: "#606d87",   // Gray
    
    // colors
    white: "#FFFFFF",
    lightGray: "#eff2f5",
};
export const SIZES = {
    // global sizes
    base: 8,
    radius: 12,
    padding: 24,

    // app dimensions
    width,
    height
};

const appTheme = { COLORS, SIZES };

export default appTheme;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      height: 1150,
      marginTop: 12,
      marginHorizontal: 24
  },
  header: {
    fontSize: 24,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  boxContainer:{
    width: SIZES.width * 0.20,
    height: '90%',
    borderRadius: 10,
    backgroundColor: '#696969',
  },

  boxTextView: {
    position: 'absolute',
    bottom: '20%',
    left: 0,
    paddingHorizontal: SIZES.base,
  },

  iconPosition: {
      position: 'absolute',
      top: '10%',
      left: 9,
  },
  iconContainer:{
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },

  subTextStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },

  titleText: {
    textAlign: 'left',
    color: '#696969',
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15
  },

  row: {
    padding: 2,
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  baseText: {
    textAlign: 'left',
    color: '#000',
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom:10
  },


});

const calendar = StyleSheet.create({
  
  textContainer:
  {
     borderWidth: 1, 
     borderRadius: 10,
     borderColor: '#1E1F20',
     padding: 5,
     backgroundColor: '#eff2f5',
     position: 'absolute',
     top: 40,
     left: 20,
     width: 450,
     height: 300,
  },

});

const insight = StyleSheet.create({
  
  textContainer:
  {
     borderWidth: 1, 
     borderRadius: 10,
     borderColor: '#1E1F20',
     padding: 5,
     backgroundColor: '#eff2f5',
     position: 'absolute',
     top: 40,
     right: 20,
     width: 300,
     height: 250,
  },

});

const notifications = StyleSheet.create({
  
  textContainer:
  {
     borderWidth: 1, 
     borderRadius: 10,
     borderColor: '#1E1F20',
     padding: 15,
     backgroundColor: '#eff2f5',
     position: 'absolute',
     top: 370,
     left: 20,
     width: 300,
     height: 450,

  },
});
const product = StyleSheet.create({

  textContainer:
  {
     borderWidth: 1, 
     borderRadius: 10,
     borderColor: '#1E1F20',
     padding: 8,
     backgroundColor: '#eff2f5',
     position: 'absolute',
     top: 360,
     right: 10,
     width: 250,
     height: 400,
  },
});

export {styles, calendar, insight, notifications, product}