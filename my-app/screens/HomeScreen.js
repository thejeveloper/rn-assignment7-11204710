import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation, menuVisible, toggleMenu }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const addToCart = async (product) => {
    let cartItems = [];
    const savedCart = await AsyncStorage.getItem('cart');
    if (savedCart) {
      cartItems = JSON.parse(savedCart);
    }
    const newCartItems = [...cartItems, product];
    await AsyncStorage.setItem('cart', JSON.stringify(newCartItems));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productContainer}
            onPress={() => navigation.navigate('ProductDescription', { product: item })}
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
              <Ionicons name="add-circle" size={24} color="tomato" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  productName: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  addButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
});

export default HomeScreen;
