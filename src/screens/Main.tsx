import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import StyleText from '../style/text'
import StyleScreen from '../style/screens'


export default function(){
	return(
		<ScrollView>
			<View style={StyleScreen.layout}>
				<Text style={StyleText.regular}>Este aplicativo foi desenvolvimento a fim de contar um pouco sobre mim. Navegue entre as categorias para me conhecer melhor!{'\n'}</Text>
			</View>
		</ScrollView>
	)
}