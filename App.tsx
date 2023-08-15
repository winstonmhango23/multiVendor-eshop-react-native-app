
import React from 'react';
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import Card from './components/Cardv2';
import Header from './components/Header';

// const ProductDetailsScreen = () => {
 
// }

const products = [
  {
    id: '1',
    name: 'Product A',
    price: 49.99,
    image: require('./assets/products/product2.jpg'),
    rating: 3.5, // Set a default value for the rating property
  },
  {
    id: '2',
    name: 'Product B',
    price: 59.99,
    image: require('./assets/products/product15.jpg'),
    rating: 4.0, // Set a default value for the rating property
  },
  {
    id: '3',
    name: 'Product C',
    price: 59.99,
    image: require('./assets/products/product16.jpg'),
    rating: 3.8, // Set a default value for the rating property
  },
  {
    id: '4',
    name: 'Product C',
    price: 59.99,
    image: require('./assets/products/product17.jpg'),
    rating: 3.8, // Set a default value for the rating property
  },
  {
    id: '5',
    name: 'Product C',
    price: 59.99,
    image: require('./assets/products/product18.jpg'),
    rating: 3.8, // Set a default value for the rating property
  },
  {
    id: '6',
    name: 'Product C',
    price: 59.99,
    image: require('./assets/products/product19.jpg'),
    rating: 3.8, // Set a default value for the rating property
  },
];

const handleBack = () => {
  // Handle the back button press
};

const handleRightIconPress = () => {
  // Handle the press of the right icon
};

const App = () => {
  const handleCardPress = (productId: string) => {
    // ... (unchanged)
  };


return (
  <View style={styles.container}>
    {/* <Header title="Shop"/> */}
    <Header
        // title="Product List"
        onBackPress={handleBack}
        showBackButton
        onAddTaskProduct={handleRightIconPress}
      />
    <StatusBar backgroundColor="#FFA41B" barStyle="light-content" />
    {/* <View style={styles.taskbar} /> */}
    <FlatList
      data={products}
      renderItem={({ item }) => <Card product={item} onPress={() => handleCardPress(item.id)} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  // alignItems: 'center',
  backgroundColor: '#f0f0f0',
},
listContainer: {
  paddingTop: 16,
  alignItems: 'center',
},
taskbar: {
  backgroundColor: '#007bff',
  height: 60,
},
});

export default App;