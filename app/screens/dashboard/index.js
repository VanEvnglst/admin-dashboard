import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView,
    SafeAreaView,
    scrollEnabled,
    Dimensions,
} from 'react-native';
import theme, { COLORS, SIZES, FONTS } from "./styles";



const { height } = Dimensions.get('window');

export default class DashboardScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {enableScrollViewScroll: true};
    }
    render() {
      const scrollEnabled = this.state.screenHeight > height;
      return (
        
        <View onStartShouldSetResponderCapture={() => {
          this.setState({ enableScrollViewScroll: true });
      }}>
          <ScrollView
        scrollEnabled={this.state.enableScrollViewScroll}
        ref={myScroll => (this._myScroll = myScroll)}
          >
          <Home/>
          </ScrollView>
        </View>
      );
    }
  }


const Home = ({ navigation }) => {


    // Dummy Data
    const [newData, setnewData] = React.useState([
        {
            id: 0,
            name: "Total Orders",
            value: 268,
        
            
        },
        {
            id: 1,
            name: "Total Customers",
            value: 268,
            
            
        },
        {
            id: 2,
            name: "Total Sales",
            value: 10000,
            
            
        },
        {
            id: 3,
            name: "Total Discounts",
            value: 17,
            
            
        },
        {
            id: 4,
            name: "",
            value: "",
            
            
        },
        {
            id: 5,
            name: "",
            value: "",
            
            
        },
        {
            id: 6,
            name: "",
            value: "",
            
            
        },
    ]);


    React.useEffect(() => {
    }, []);

    // Render

    function renderNewData(item, index) {
       
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: SIZES.base }}>
                <Text
                    
                
                    style={{
                        width: SIZES.width * 0.18,
                        height: '90%',
                        borderRadius: 10,
                        backgroundColor: '#696969',
                    }}
                ></Text>

                <View
                    style={{
                        position: 'absolute',
                        bottom: '17%',
                        left: 0,
                        paddingHorizontal: SIZES.base,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                    }}
                >
                    <Text style={{ color: COLORS.black, ...FONTS.body4 }}>{item.name}</Text>
                    <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.value}</Text>
                </View>

                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: 7,
                    }}
                    onPress={() => { console.log("Focus on pressed") }}
                >
                    <Text
                        
                        resizeMode="contain"
                        style={{
                            width: 50,
                            height: 50,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 10,
                        }}
                    />
                </TouchableOpacity>

            </View>
        )
    }

    return (
        // Add scroll view
        
        <View style={styles.container}>


            {/* New Data */}
            <View style={{ height: "20%", backgroundColor: COLORS.white }}>
                <View style={{
                    flex: 1,
                    backgroundColor: COLORS.lightGray
                }}>
                    <View style={{ marginTop: SIZES.padding * 2, marginHorizontal: SIZES.padding }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ color: COLORS.black, ...FONTS.h2, }}>Welcome Back Admin!</Text>
                        </View>

                        <View style={{ marginTop: SIZES.base }}>
                            <FlatList
                                horizontal
                                nestedScrollEnabled
                                showsHorizontalScrollIndicator={false}
                                data={newData}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item, index }) => renderNewData(item, index)}
                            />
                        </View>
                    </View>
                </View>
            </View>

            {/* Calendar Display */}
            <View style = { calendar_styles.MainContainer }>
 
 
                <View style={calendar_styles.TextViewStyle}>
 
                    <Text style={calendar_styles.titleText}> Calendar </Text>
                    
 
                </View>  
 
            
            </View>

            {/*Insights Display*/}
            
            <View style = { insight_styles.MainContainer }>
 
 
            <View style={insight_styles.TextViewStyle}>

            <Text style={insight_styles.titleText}> Insights  {"\n"} 
           
             </Text>
             <Text style={insight_styles.TextStyle}>
            In publishing and graphic design,
             Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of 
              a document or a typeface without relying on
               meaningful content. Lorem ipsum may be used 
               as a placeholder before final copy is available.
             </Text>
     

            </View>  


            </View>
                {/*Notifications Display*/}
            
                    
                    <View style = { notifications_styles.MainContainer }>
                    
                        
                    <View style={notifications_styles.TextViewStyle}>

                    <Text style={notifications_styles.titleText}> Activities Notifications {"\n"}
                    </Text>
                    <Text style={notifications_styles.baseText}>National Milk Tea Day!</Text>
                    <Text style={{ color: COLORS.black, ...FONTS.h3, }}>01 Apr 2021 {"\n"}</Text>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3, }}> It's National Milk Tea Day and we're offering
                     a Buy 1 Take 1 Promo from 10am to 3pm</Text>

                     <Text style={notifications_styles.row}></Text>
                     <Text style={notifications_styles.baseText}>{"\n"}Day of Valor</Text>
                    <Text style={{ color: COLORS.black, ...FONTS.h3, }}>09 Apr 2021 {"\n"}</Text>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3, }}> It's National Milk Tea Day and we're offering
                     a Buy 1 Take 1 Promo from 10am to 3pm</Text>



                    
                    </View>  

                    </View>

                {/*Top Selling Products*/}


            
                <View style = { product_styles.MainContainer }>
 
                    
                    <View style={product_styles.TextViewStyle}>

                    <Text style={product_styles.titleText}> Top Selling Products {"\n"} {"\n"} </Text>
                    <Text style={product_styles.baseText}> Cheese Burger </Text>
                    <Text style={product_styles.row}> </Text>
                    <Text style={product_styles.baseText}> {"\n"} Milk Tea </Text>
                    <Text style={product_styles.row}> </Text>
                    <Text style={product_styles.baseText}> {"\n"} Mocha Latte </Text>
                    <Text style={product_styles.row}> </Text>
                    <Text style={product_styles.baseText}> {"\n"} Smoothie </Text>
                    <Text style={product_styles.row}> </Text>

                    </View>


                </View>

            
        </View>
        
    );
};




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





