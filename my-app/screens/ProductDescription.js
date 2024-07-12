import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ProductDescription = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.title}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>

      <Text style={styles.materialHeader}>MATERIALS</Text>
      <Text style={styles.materialText}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>
      <Text style={styles.careInstructionsHeader}>Care Instructions</Text>
      <Text style={styles.careInstructionsText}>• Do not use bleach</Text>
      <Text style={styles.careInstructionsText}>• Do not tumble dry</Text>
      <Text style={styles.careInstructionsText}>• Dry clean with tetrachloroethylene</Text>
      <Text style={styles.careInstructionsText}>• Iron at a maximum of 110°C/230°F</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 20,
    color: 'tomato',
    marginVertical: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
  },
  materialHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  materialText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
  },
  careInstructionsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  careInstructionsText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 2,
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'tomato',
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProductDescription;
