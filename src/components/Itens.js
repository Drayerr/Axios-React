import React from 'react';
import { View, Text, Image } from 'react-native';
import { Styles } from "./ListaItens"

const Produto = ({dados}) => {
	return (
		<View style={ Styles.item }>
			<View>
				<Image style={ Styles.foto } source={{ uri:dados.foto}}/>
			</View>
			<View style={ Styles.itemData }>
				<Text style={ Styles.txtItem }>{dados.titulo}</Text>
				<Text style={ Styles.valor }>R$:{dados.valor},00</Text>
				<Text style={ Styles.common }>{dados.local_anuncio}</Text>
				<Text>{dados.data_publicacao}</Text>
			</View>
		</View>
	)
}

export default Produto

// <Produto dados={}></Produto>
// <input name="" type="button">