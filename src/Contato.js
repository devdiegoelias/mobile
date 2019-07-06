import React, { Component } from 'React';
import { View, Image, StyleSheet } from 'react-native';

export default class Contato extends Component{

	static navigationOption = {
		tabBarLabel:'Contato',
		tabBarIcon:({focused, tintColor}) => {

				if(focused){
					return(
						<Image source={require('../assets/images/contato_azul.png')} style={styles.icone} />
					);
				} else {
					return(
						<Image source={require('../assets/images/contato_preto.png')} style={styles.icone} />
					);
					
				}
			}
		};

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