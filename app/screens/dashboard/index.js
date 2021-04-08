import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { initializeDb } from '../../utils/database';

const DashboardScreen = () => {

  useEffect(() => { 
    initializeDb();
  }, []);

  return(
  <View>
    <Text>Dashboard</Text>
  </View>
  );
}

export default DashboardScreen;
