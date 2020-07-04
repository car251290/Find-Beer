import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

import HomeScreen from './Components/Home/HomeScreen'
import SearchTabNavigator from './Components/Search/SearchTabNavigation'

import * as firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCrRu1Uu0L7uZlOlO18_AcOdc4oKGodjBc",
  authDomain: "my-beer-app-347d9.firebaseapp.com",
  databaseURL: "https://my-beer-app-347d9.firebaseio.com",
  projectId: "my-beer-app-347d9",
   storageBucket: "my-beer-app-347d9.appspot.com",
  messagingSenderId: "677758847884",
  appId: "1:677758847884:web:0d7dfef29cf6db3e44a4a9"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

const App = StackNavigator({

  HomeScreen: { screen: HomeScreen },
  SearchTabNavigator: {
    screen: SearchTabNavigator
  }
}, {
    initialRouteName: 'HomeScreen'
  })


export default App 
