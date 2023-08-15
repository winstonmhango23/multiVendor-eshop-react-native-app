import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar ,faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';

interface StarProps {
  rating: number;
  size?: number;
  filledColor?: string;
  emptyColor?: string;
}

const Star: React.FC<StarProps> = ({ rating, size = 20, filledColor = 'gold', emptyColor = 'gray' }) => {
  const numberOfStars = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  return (
    <View style={styles.container}>
      {Array.from({ length: numberOfStars }).map((_, index) => (
        // <FontAwesomeIcon
        //   key={index}
        //   icon={index < filledStars ? faStar : hasHalfStar && index === filledStars ? faStarHalfAlt : ['far', 'star']}
        //   size={size}
        //   color={index < filledStars ? filledColor : emptyColor}
        // />
        <FontAwesomeIcon
            key={index}
            icon={index < filledStars ? faStar : hasHalfStar && index === filledStars ? faStarHalfAlt : faStar}
            size={size}
            color={index < filledStars ? filledColor : emptyColor}
            />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Star;
