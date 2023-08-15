import React from 'react';
import { View, StyleSheet } from 'react-native';

const TaskBar: React.FC = () => {
  return <View style={styles.taskBar} />;
};

const styles = StyleSheet.create({
  taskBar: {
    backgroundColor: '#FFD700',
    height: 60,
    width: '100%',
  },
});

export default TaskBar;
