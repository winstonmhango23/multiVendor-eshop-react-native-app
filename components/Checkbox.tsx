import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';

interface CheckboxProps {
  title: string;
  checked: boolean;
  onPress: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ title, checked, onPress }) => {
  return (
    <TouchableOpacity style={styles.checkbox} onPress={onPress}>
      <FontAwesomeIcon
        icon={checked ? faCheckSquare : faSquare}
        size={24}
       color={checked ? '#39B68D' : '#CCCCCC'} // #FF0060 redbg
      />
      <Text style={styles.checkboxTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkboxTitle: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default Checkbox;
