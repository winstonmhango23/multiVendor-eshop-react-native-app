import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Task from './Task';

interface TaskListProps {
  tasks: string[];
  onDeleteTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item, index }) => <Task task={item} onDelete={() => onDeleteTask(index)} />}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});

export default TaskList;
