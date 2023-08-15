
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  message: string;
  onClose: () => void;
}

const Notification = (props: Props) => {
  const { message, onClose } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 6000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
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
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  closeButton: {
    alignSelf: 'center',
    backgroundColor:'#2196F3',
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:20
  },
  closeButtonText:{
      color:'#fff',
      fontWeight:'bold'
   }
});

export default Notification;
