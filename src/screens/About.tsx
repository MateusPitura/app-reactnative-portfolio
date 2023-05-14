import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import StyleText from '../style/text'
import StyleScreen from '../style/screens'

export default function(){
    return(
		<ScrollView>
			<View style={StyleScreen.layout}>
				<Text style={StyleText.title}>Apresentação{'\n'}</Text>
				<Text style={StyleText.regular}>Me chamo Mateus Enrick Pitura, tenho 19 anos. Nascido e criado em Ponta Grossa, sou um entusiasta por tecnologia, desde criança gostei de explorar, experimentar e me divertir com o mundo tecnológico. Com particular interesse pela área da programação, especialmente na âmbito do desenvolvimento mobile.{'\n'}</Text>
				<Text style={StyleText.regular}>Moro atualmente com meus pais, minha irmãe e minha avó. Tenho um puddle chamado Geise Bel e a minha casa ainda tem mais dois cachorros da minha avó e duas calopsitas da minha mãe.{'\n'}</Text>
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
				</View>
			</View>
		</ScrollView>
    )
}