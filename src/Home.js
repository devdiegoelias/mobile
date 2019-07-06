import React, { Component } from 'React';
import { View, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const Navegador = createStackNavigator({
	HomeList:{
		screen:HomeList
	},
	HomeProducts:{
		screen:HomeProductsHomeProducts
	}
});

const AppCotainer = createAppContainer(Navegador);
export default AppCotainer;