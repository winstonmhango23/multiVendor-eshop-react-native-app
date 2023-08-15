import React from 'react';
import { View, StyleSheet } from 'react-native';

interface OverlayProps {
    children: React.ReactNode;
    onClose: () => void;
  }
const Overlay: React.FC<OverlayProps> = ({ children }) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 4,
  },
});

export default Overlay;
