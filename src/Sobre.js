import React, { Component } from 'React';
import { View, Image, StyleSheet } from 'react-native';

export default class Sobre extends Component{

	static navigationOption = {
		tabBarLabel:'Sobre',
		tabBarIcon:({focused, tintColor}) => {
				if(focused){
					<Image source={require('../assets/images/sobre_azul.png')} style={styles.icone} />
				} else {
					<Image source={require('../assets/images/sobre_preto.png')} style={styles.icone} />
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