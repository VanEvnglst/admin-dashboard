import React, { Component } from 'react';
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
import theme, {COLORS, SIZES, FONTS} from './styles';
import { styles, calendar, insight, notifications, product } from './styles';
import {getSummary,getTopSeller} from './content';
import database from '../../utils/database';


const {height} = Dimensions.get ('window');



export default class DashboardScreen extends Component {
  
  constructor (props) {
    super (props);
    this.state = {enableScrollViewScroll: true};
  }
  
  componentDidMount() {
    database.initializeDatabase();
  

  }
  
  render () {
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <View
        onStartShouldSetResponderCapture={() => {
          this.setState ({enableScrollViewScroll: true});
        }}
      >
        <ScrollView
          scrollEnabled={this.state.enableScrollViewScroll}
          ref={myScroll => (this._myScroll = myScroll)}
        >
          <ScreenContent />
        </ScrollView>
      </View>
    );
  }
}

const ScreenContent = ({navigation}) => {


var summaryData = getSummary();


  
function renderNewData (item, index) {
  return (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: SIZES.base,
      }}
    >
      <View style={styles.boxContainer}/>
      <View  style={styles.boxTextView}>
        <Text style={{color: COLORS.black}}>{item.name}</Text>
        <Text style={{color: COLORS.white}}>
          {item.value}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.iconPosition}
        onPress={() => {
          console.log ('Focus on pressed');
        }}
      >
          <View
          resizeMode="contain"
          style={styles.iconContainer}
        />
      </TouchableOpacity>
    </View>
  );
}

return (
  <View style={styles.container}>
    {/* New Data */}
    <View style={{height: '20%', backgroundColor: COLORS.lightGray}}>
        <View style={{marginTop: SIZES.padding,}}>
          <View style={styles.item} >
            <Text style={styles.header}>
              Welcome Back Admin!
            </Text>
          </View>

          <View style={{marginTop: SIZES.base}}>
            <FlatList
              horizontal
              nestedScrollEnabled
              showsHorizontalScrollIndicator={false}
              data={summaryData}
              keyExtractor={item => item.id.toString ()}
              renderItem={({item, index}) => renderNewData (item, index)}
            />
          </View>
        </View>
    </View>

    {/* Calendar Display */}
    <View style={styles.subTextStyle}>
      <View style={calendar.textContainer}>
        <Text style={styles.titleText}> Calendar </Text>
      </View>
    </View>

    {/*Insights Display*/}

    <View style={styles.subTextStyle}>
      <View style={insight.textContainer}>
        <Text style={styles.titleText}>
          {' '}Insights {'\n'}
        </Text>
        <Text style={insight.subTextStyle}>
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

    <View style={styles.subTextStyle}>
      <View style={notifications.textContainer}>
        <Text style={styles.titleText}>
          Activities Notifications 
        </Text>
        <Text style={styles.baseText}>National Milk Tea Day!</Text>
        <Text>
          01 Apr 2021 
        </Text>
        <Text style={{color: COLORS.primary}}>
          {' '}It's National Milk Tea Day and we're offering
          a Buy 1 Take 1 Promo from 10am to 3pm
        </Text>
        <Text style={styles.row} />
        <Text style={styles.baseText}>Day of Valor</Text>
        <Text>
          09 Apr 2021 
        </Text>
        <Text style={{color: COLORS.primary}}>
          {' '}It's National Milk Tea Day and we're offering
          a Buy 1 Take 1 Promo from 10am to 3pm
        </Text>
      </View>
    </View>

    {/*Top Selling Products*/}

    <View style={styles.subTextStyle, {flex: 1} }>
      <View style={product.textContainer}>
      <Text style={styles.titleText}>
            Top Selling Products 
      </Text>
      {getTopSeller()}
    
      </View>
    </View>
  </View>
);
};