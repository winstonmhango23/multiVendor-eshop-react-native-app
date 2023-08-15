// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// interface HeaderProps {
//   title: string;
//   onBackPress: () => void;
//   showBackButton?: boolean;
// }

// const Header: React.FC<HeaderProps> = ({ title, onBackPress, showBackButton = true }) => {
//   return (
//     <View style={styles.headerContainer}>
//       {showBackButton && (
//         <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
//           <FontAwesomeIcon icon={faArrowLeft} size={20} color="white" />
//         </TouchableOpacity>
//       )}
//       <Text style={styles.headerTitle}>{title}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#007bff',
//     height: 60,
//     paddingHorizontal: 16,
//   },
//   backButton: {
//     padding: 10,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//     marginLeft: 16,
//   },
// });

// export default Header;


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';

// interface HeaderProps {
//   title: string;
//   onBackPress: () => void;
//   showBackButton?: boolean;
//   onAddTaskProduct?: () => void; // Add this new prop
//   showAddTaskPress?: boolean;
// }

// const Header: React.FC<HeaderProps> = ({ title, onBackPress, showBackButton = true, showAddTaskPress=true, onAddTaskProduct }) => {
//   return (
//     <View style={styles.headerContainer}>
//       {showBackButton && (
//         <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
//           <FontAwesomeIcon icon={faArrowLeft} size={20} color="white" />
//         </TouchableOpacity>
//       )}
//       <Text style={styles.headerTitle}>{title}</Text>
//       {showAddTaskPress && ( // Render the add task button only if onAddTaskPress is provided
//         <TouchableOpacity style={styles.addButton} onPress={onAddTaskProduct}>
//           <FontAwesomeIcon icon={faPlus} size={20} color="white" />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFA41B',
//     height: 60,
//     paddingHorizontal: 16,
//   },
//   backButton: {
//     padding: 10,
//   },
//   headerTitle: {
//     flex: 1, // Make the header title take up remaining space
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//     marginLeft: 16,
//   },
//   addButton: {
//     padding: 10,
//   },
// });

// export default Header;



import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onAddTaskProduct?: () => void;
  showAddTaskPress?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = true,
  showAddTaskPress = true,
  onAddTaskProduct,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color="white" />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      {showAddTaskPress && (
        <TouchableOpacity style={styles.addButton} onPress={onAddTaskProduct}>
          <FontAwesomeIcon icon={faPlus} size={20} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFA41B',
    height: 60,
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 16,
  },
  addButton: {
    padding: 10,
  },
});

export default Header;
