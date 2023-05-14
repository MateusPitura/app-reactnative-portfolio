import React from 'react'
import {View, Text, ScrollView, Image} from 'react-native'
import StyleText from '../style/text'
import StyleScreen from '../style/screens'


export default function(){
	return(
		<ScrollView>
			<View style={StyleScreen.layout}>
				<Text style={StyleText.regular}>Este aplicativo foi desenvolvimento a fim de contar um pouco sobre mim na estrevista para estágio da Continental. Navegue entre as categorias para me conhecer melhor!{'\n'}</Text>
				<View style={StyleScreen.layoutImages}>
					<Image 
						source={require('../assets/images/Foto.png')}
						style={StyleScreen.images}
					/>
				</View>
			</View>
		</ScrollView>
	)
}