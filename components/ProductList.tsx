import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from '../components/Cardv2';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParamList';


interface Product {
  id: string;
  name: string;
  price: number;
  image: any;
  rating: number;
}

const products = [
  {
    id: '1',
    name: 'Product A',
    price: 49.99,
    image: require('../assets/products/product2.jpg'),
    rating: 3.5, // Set a default value for the rating property
  },
  {
    id: '2',
    name: 'Product B',
    price: 59.99,
    image: require('../assets/products/product15.jpg'),
    rating: 4.0, // Set a default value for the rating property
  },
  {
    id: '3',
    name: 'Product C',
    price: 59.99,
    image: require('../assets/products/product16.jpg'),
    rating: 3.8, // Set a default value for the rating property
  },
  {
    id: '4',
    name: 'Product C',
    price: 59.99,
    image: require('../assets/products/product17.jpg'),
    rating: 3.8, // Set a default value for the rating property
  },
  {
    id: '5',
    name: 'Product C',
    price: 59.99,
    image: require('../assets/products/product18.jpg'),
    rating: 3.8, // Set a default value for the rating property
  },
  {
    id: '6',
    name: 'Product C',
    price: 59.99,
    image: require('../assets/products/product19.jpg'),
    rating: 3.8, // Set a default value for the rating property
  },
];

// const products: Product[] = [
//   // ... (unchanged)
// ];

const ProductList = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
//   const navigation = useNavigation();

  const handleCardPress = (product: Product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Card product={item} onPress={() => handleCardPress(item)} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  listContainer: {
    paddingTop: 16,
    alignItems: 'center',
  },
});

export default ProductList;
