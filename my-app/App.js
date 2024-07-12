import { useState } from 'react';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ProductDescription from './screens/ProductDescription';
import CartScreen from './screens/CartScreen';
import { Ionicons } from '@expo/vector-icons';
import SlidingMenu from './screens/SlidingMenu';

const Stack = createStackNavigator();

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTitleAlign: 'center',
            headerTitle: () => (
              <Image
                source={require('./screens/Logo.png')}
                style={{ width: 100, height: 50, resizeMode: 'contain' }}
              />
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={toggleMenu} style={{ marginLeft: 10 }}>
                <Ionicons name="menu" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={{ marginRight: 10 }}>
                <Ionicons name="cart" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        >
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} menuVisible={menuVisible} toggleMenu={toggleMenu} />}
          </Stack.Screen>
          <Stack.Screen name="ProductDescription" component={ProductDescription} options={{ title: 'Product Details' }} />
          <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: 'Cart' }} />
        </Stack.Navigator>
        <SlidingMenu isVisible={menuVisible} toggleMenu={toggleMenu} />
      </View>
    </NavigationContainer>
  );
};

export default App;
