import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import Produto from './Itens'

const Lista = () => {
	const [listaItens, setListaItens] = useState([])

	useEffect(() => {
		axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
		.then((response) => {setListaItens(response.data)})
		.catch(() => { alert("Deu ruim") })
	}, [])


	return (
		<ScrollView>
			{ listaItens.map((item) => {
				return (
					<Produto dados={item} key={item.titulo} />
				)
			})}
		</ScrollView>
	)
}

export default Lista