import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: '#696969', // Gray
    secondary: "#606d87",   // Gray
    
    // colors
    black: "#1E1F20", 
    white: "#FFFFFF",
    lightGray: "#eff2f5",
    gray: "#BEC1D2",
    

};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 28 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
};




const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;



const styles = StyleSheet.create({
  container: {
      flex: 1,
      height: 1150,
  },
  scroll_view: {
      flex: 1
    }

});

const calendar_styles = StyleSheet.create({
  
  MainContainer:
  {

    justifyContent: 'center',
    alignItems: 'center',


  },

  TextViewStyle:
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

  TextStyle:
  {
      textAlign: 'center',
      color: '#000',
      padding: 10
  
  },

  titleText: {
      textAlign: 'left',
      color: '#696969',
      fontSize: 20,
      fontWeight: "bold"
    },


});

const insight_styles = StyleSheet.create({
  
  MainContainer:
  {

    justifyContent: 'center',
    alignItems: 'center',
      

  },

  TextViewStyle:
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

  TextStyle:
  {
      textAlign: 'center',
      color: '#000',
      padding: 10
  
  },

  titleText: {
      textAlign: 'left',
      color: '#696969',
      fontSize: 20,
      fontWeight: "bold"
    }


});

const notifications_styles = StyleSheet.create({
  
  MainContainer:
  {
      
    justifyContent: 'center',
    alignItems: 'center',
    height: 1000,
    flex: 1,

  },

  TextViewStyle:
  {
     borderWidth: 1, 
     borderRadius: 10,
     borderColor: '#1E1F20',
     padding: 15,
     backgroundColor: '#eff2f5',
     position: 'absolute',
     top: 370,
     left: 20,
     width: 450,
     height: 450,


  },

  TextStyle:
  {
      textAlign: 'center',
      color: '#000',
      padding: 10
  
  },

  titleText: {
      textAlign: 'left',
      color: '#696969',
      fontSize: 20,
      fontWeight: "bold"
    },

    baseText: {
      textAlign: 'left',
      color: '#000',
      fontSize: 20,
      fontWeight: "bold"

    },

    row: {
      padding: 8,
      borderBottomColor: '#000',
      borderBottomWidth: StyleSheet.hairlineWidth
    }


});
const product_styles = StyleSheet.create({
  
  MainContainer:
  {
      
    justifyContent: 'center',
    alignItems: 'center',
    height: 1000,
    flex: 1,
    padding: 24

  },

  TextViewStyle:
  {
     borderWidth: 1, 
     borderRadius: 10,
     borderColor: '#1E1F20',
     padding: 8,
     backgroundColor: '#eff2f5',
     position: 'absolute',
     top: -120,
     right: 20,
     width: 300,
     height: 400,


  },

  TextStyle:
  {
      textAlign: 'center',
      color: '#000',
      padding: 5
  
  },

  row: {
      padding: 1,
      borderBottomColor: '#000',
      borderBottomWidth: StyleSheet.hairlineWidth
    },

    baseText: {
      textAlign: 'left',
      color: '#000',
      fontSize: 20,
      fontWeight: "bold"

    },

    titleText: {
        textAlign: 'left',
        color: '#696969',
        fontSize: 20,
        fontWeight: "bold"
      }


});

export {styles, calendar_styles, insight_styles, notifications_styles, product_styles}