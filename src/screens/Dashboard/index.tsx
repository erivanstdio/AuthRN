import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Dashboard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
    </View>
  );
}

export default Dashboard;