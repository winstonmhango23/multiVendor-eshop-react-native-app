import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface CustoomButtonButtonProps extends TouchableOpacityProps {
  title: string;
  buttonStyle?: object;
  textStyle?: object;
}

const CustoomButton : React.FC<CustoomButtonButtonProps> = ({ title, buttonStyle, textStyle, ...restProps }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} {...restProps}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustoomButton;
