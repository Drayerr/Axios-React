import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

const Produto = ({dados}) => {
	return (
		<TouchableOpacity>
			<Text>{dados.titulo}</Text>
			<Text>{dados.valor}</Text>
			<Image style={{width: 66, height: 58}} source={{ uri:dados.foto}}/>
		</TouchableOpacity>
	)
}

export default Produto

// <Produto dados={}></Produto>
// <input name="" type="button">