import React, { Component } from 'React';
import { View, Image, StyleSheet } from 'react-native';

export default class HomeProducts extends Component{

	static navigationOption = {
		title:'Restaurante STI3',
		tabBarLabel:'Home',
		tabBarIcon:({focused, tintColor}) => {

			if(focused){
				<Image source={require('../assets/images/home_azul.png')} style={styles.icone} />
			} else {
				<Image source={require('../assets/images/home_preto.png')} style={styles.icone} />
			}

		}
	}

	render(){
		return(
			<View>
				
			</View>
		);
	}
}

const style = StyleSheet.create({
	icone:{
		width:26,
		height:26
	}
});