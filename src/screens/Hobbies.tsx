import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import StyleText from '../style/text'
import StyleScreen from '../style/screens'


export default function(){
	return(
		<ScrollView>
			<View style={StyleScreen.layout}>
				<Text style={StyleText.title}>Fã da Marvel{'\n'}</Text>
				<Text style={StyleText.regular}>Gosto de filmes de super-heróis, principalmente os da Marvel, vou na pré-estreia de todos os filmes{'\n'}</Text>
				<Text style={StyleText.title}>Corredor de rua{'\n'}</Text>
				<Text style={StyleText.regular}>Gosto de correr na rua, apesar da minha estatura tenho uma pésima capacidade pulmonar, por isso ainda estou sofrendo para chegar ao 5 km{'\n'}</Text>
				<Text style={StyleText.title}>Mercado financeiro{'\n'}</Text>
				<Text style={StyleText.regular}>Gosto de estudar sobre finaças no tempo livro por meio de livros e vídeos{'\n'}</Text>
			</View>
		</ScrollView>
	)
}