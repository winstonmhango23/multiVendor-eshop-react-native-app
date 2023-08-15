// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { RouteProp } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from './RootStackParamList';

// type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;
// type ProductDetailsScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'ProductDetails'
// >;

// interface Props {
//   route: ProductDetailsScreenRouteProp;
//   navigation: ProductDetailsScreenNavigationProp;
// }

// const ProductDetails = ({ route }: Props) => {
//   const { product } = route.params;

//   return (
//     <View style={styles.container}>
//       <Image source={product.image} style={styles.image} />
//       <View style={styles.contentContainer}>
//         <Text style={styles.name}>{product.name}</Text>
//         <Text style={styles.price}>${product.price.toFixed(2)}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: '100%',
//     height: 300,
//     resizeMode: 'cover',
//   },
//   contentContainer: {
//     padding: 16,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   price: {
//     fontSize: 18,
//     color: '#888',
//   },
// });

// export default ProductDetails;


import React from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParamList';

type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;
type ProductDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

interface Props {
  route: ProductDetailsScreenRouteProp;
  navigation: ProductDetailsScreenNavigationProp;
}

const ProductDetails = ({ route }: Props) => {
  const { product } = route.params;

  const [animation] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#888',
  },
});

export default ProductDetails;


