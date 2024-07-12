// SlidingMenu.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const SlidingMenu = ({ isVisible, toggleMenu }) => {
  const slideAnim = React.useRef(new Animated.Value(-screenWidth)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : -screenWidth,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  return (
    <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
      <View style={styles.menuContent}>
        <Text style={styles.menuTitle}>ERIC ATSU</Text>
        {['Store', 'Locations', 'Blog', 'Jewelry', 'Electronic', 'Clothing'].map((item, index) => (
          <TouchableOpacity key={index} onPress={() => console.log(`${item} clicked`)}>
            <Text style={styles.menuItem}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.overlay} onPress={toggleMenu} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: screenWidth,
    flexDirection: 'row',
  },
  menuContent: {
    width: screenWidth * 0.75,
    backgroundColor: 'white',
    padding: 20,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default SlidingMenu;
