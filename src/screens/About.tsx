import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import StyleText from '../style/text'
import StyleScreen from '../style/screens'

export default function(){
    return(
		<ScrollView>
			<View style={StyleScreen.layout}>
				<Text style={StyleText.title}>Apresentação{'\n'}</Text>
				<Text style={StyleText.regular}>Meu nome é Mateus Enrick Pitura, tenho 19 anos. Nascido e criado em Ponta Grossa, sou um entusiasta por tecnologia, desde criança gostei de explorar, pesquisar e experimentar o mundo digital. Com particular interesse pela área da programação, especialmente no ramo de desenvolvimento mobile.{'\n'}</Text>
				<Text style={StyleText.regular}>Moro atualmente com meus pais, minha irmãe e minha avó. Tenho um puddle chamado Geise Bel e há na minha casa ainda mais dois cachorros e duas calopsitas.{'\n'}</Text>
				<Text style={StyleText.title}>Habilidades{'\n'}</Text>
				<View>
					<Text style={StyleText.regular}>React Native</Text>
					<Text style={StyleText.regular}>HTML</Text>
					<Text style={StyleText.regular}>CSS</Text>
					<Text style={StyleText.regular}>Java Script</Text>
					<Text style={StyleText.regular}>Java</Text>
					<Text style={StyleText.regular}>C</Text>
					<Text style={StyleText.regular}>SQL</Text>
					<Text style={StyleText.regular}>Pacote Office</Text>
					<Text style={StyleText.regular}>SAP</Text>
					<Text style={StyleText.regular}>Git</Text>
					<Text style={StyleText.regular}>Linux</Text>
				</View>
			</View>
		</ScrollView>
    )
}