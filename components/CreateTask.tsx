import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface CreateTaskProps {
  onAddTask: (taskTitle: string, isCompleted: boolean) => void;
  onClose: () => void;
}

const CreateTask: React.FC<CreateTaskProps> = ({ onAddTask, onClose }) => {
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleAddTask = () => {
    onAddTask(taskTitle, isCompleted);
    setTaskTitle('');
    setIsCompleted(false);
    onClose();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <FontAwesomeIcon icon={faTimes} size={20} color="#333" />
      </TouchableOpacity>
      <Text style={styles.title}>Add New Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 290,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 0,
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  checkedCheckbox: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  checkboxLabel: {
    fontSize: 16,
  },
  addButton: {
    width:323,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    alignSelf:'center',
     marginBottom:-35
   },
   addButtonText:{
     color:'#fff',
     fontSize :16,
     fontWeight:'bold'
   }
});

export default CreateTask;