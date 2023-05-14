import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import StyleText from '../style/text'
import StyleScreen from '../style/screens'


export default function(){
	return(
		<ScrollView>
			<View style={StyleScreen.layout}>
				<View>
					<Text style={StyleText.title}>Engenharia de Software</Text>
					<Text style={StyleText.subtitle}>Bacharelado - UEPG</Text>
					<Text style={StyleText.subtitle}>2022 - 2026</Text>
				</View>
				<Text>{'\n\n'}</Text>
				<View>
					<Text style={StyleText.title}>Automação Industrial</Text>
					<Text style={StyleText.subtitle}>Técnico - SENAI</Text>
					<Text style={StyleText.subtitle}>2019 - 2021</Text>
				</View>
				<Text>{'\n\n'}</Text>
				<Text style={StyleText.title}>Cursos{'\n'}</Text>
				<View>
					<Text style={StyleText.subtitle}>Oracle ONE + Alura</Text>
					<Text style={StyleText.subtitle}>6 meses{'\n'}</Text>
					<Text style={StyleText.regular}>Back-end com Java; métodologias ágeis; versionamento de código com Git</Text>
				</View>
			</View>
		</ScrollView>
	)
}