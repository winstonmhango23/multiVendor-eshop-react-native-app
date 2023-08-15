import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Star from './Star'; // Import the Star component


interface Product {
  id: string;
  name: string;
  price: number;
  image: any; 
  rating: number; 
}

interface CardProps {
  product: Product;
  onPress: () => void;
}

// const Card: React.FC<CardProps> = ({ product, onPress }) => {
//   return (
//     <TouchableOpacity style={styles.container} onPress={onPress}>
//       <Image source={product.image} style={styles.image} />
//       <View style={styles.contentContainer}>
//         <Text style={styles.title}>{product.name}</Text>
//         <View style={styles.starContainer}>
//           <Star rating={product.rating} size={16} filledColor="gold" emptyColor="gray" />
//         </View>
//       </View>
//       <Text style={styles.price}>${product.price.toFixed(2)}</Text>
//     </TouchableOpacity>
//   );
// };

const Card: React.FC<CardProps> = ({ product, onPress }) => {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={product.image} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <View style={styles.starContainer}>
            <Star rating={product.rating} size={16} filledColor="gold" emptyColor="gray" />
          </View>
          {/* <AddToCartButton onPress={() => console.log('Added to Cart')} /> */}
        </View>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 290,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 4,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  starContainer: {
    marginLeft: 8,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
});

export default Card;
