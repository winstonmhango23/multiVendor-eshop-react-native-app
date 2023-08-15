import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  showBackButton?: boolean;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onBack,
  showBackButton = true,
  rightIcon,
  onRightIconPress,
}) => {
  return (
    <View style={styles.container}>
      {showBackButton && onBack && (
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backButton}>{'< Back'}</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>

      {rightIcon && onRightIconPress && (
        <TouchableOpacity onPress={onRightIconPress}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#007bff',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Header;
