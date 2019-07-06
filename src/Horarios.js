import React, { Component } from 'React';
import { View, Image, StyleSheet } from 'react-native';

export default class Horarios extends Component{

	static navigationOption = {
		tabBarLabel:'Horários',
		tabBarIcon:(focused, tintColor) => {
			if(focused){
				<Image source={require('../assets/images/horario_azul.png')} style={styles.icone} />
			} else {
				<Image source={require('../assets/images/horario_preto.png')} style={styles.icone} />
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