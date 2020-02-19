import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import Produto from './Itens'

export const Styles = {
	principal: {
		backgroundColor: "#DDD"
	},

	item: {
		backgroundColor: "#fff",
		color: "black",
		borderColor: "#999",
		borderWidth: 2,
		margin: 10,
		padding: 5,
		flexDirection: "row",
		borderRadius: 15,
		elevation: 5,
	},

	foto: {
		width: 102,
		height: 102
	},

	itemData: {
		marginLeft: 10,
		flex: 1
	},

	txtItem: {
		color: "blue",
		marginBottom: 3,
		fontSize: 18
	},

	valor: {
		fontWeight: "bold",
		fontSize: 16
	},

	common: {
		fontSize: 16
	}
}

const Lista = () => {
	const [listaItens, setListaItens] = useState([])

	useEffect(() => {
		axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
		.then((response) => {setListaItens(response.data)})
		.catch(() => { alert("Deu ruim") })
	}, [])

	return (
		<ScrollView style={ Styles.principal }>
			{ listaItens.map((item) => {
				return (
					<Produto dados={item} key={item.titulo} />
				)
			})}
		</ScrollView>
	)
}

export default Lista