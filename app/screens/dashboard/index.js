import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import database from '../../utils/database';

const DashboardScreen = () => {

  useEffect(() => { 
    database.initializeDatabase();
  }, []);

  return(
  <View>
    <Text>Dashboard</Text>
  </View>
  );
}

export default DashboardScreen;
