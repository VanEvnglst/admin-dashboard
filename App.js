import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './app/screens/dashboard';
import OrdersScreen from './app/screens/orders';
import ProductsScreen from './app/screens/products';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        openByDefault={true}
        drawerType={'permanent'}
        drawerStyle={{
          backgroundColor: '#E8E8E8',
        }}
      >
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Orders" component={OrdersScreen}/>
        <Drawer.Screen name="Products" component={ProductsScreen} />
      </Drawer.Navigator>

    </NavigationContainer>
    
  );
};

export default App;

