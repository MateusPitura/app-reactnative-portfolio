import React, {useState} from 'react'
import {View, Text, ScrollView, Image} from 'react-native'
import StyleText from '../style/text'
import StyleScreen from '../style/screens'
import Bottom from '../components/Bottom'
import ContatoModal from '../components/ContatoModal'

export default function(){

	const [modalIsVisible, setModalIsVisible] = useState(false)

	return(
		<ScrollView>
			<View style={StyleScreen.layout}>
				<Text style={StyleText.regular}>Este aplicativo foi desenvolvimento a fim de contar um pouco sobre mim na estrevista para estágio da Continental. Navegue entre as categorias para me conhecer melhor!</Text>
				<View style={StyleScreen.layoutImagesProfile}>
					<Image 
						source={require('../assets/images/Foto.png')}
						style={StyleScreen.imagesProfile}
					/>
				</View>
				<Bottom title='Entrar em Contato' state={true} setState={setModalIsVisible}/>
				<ContatoModal visible={modalIsVisible} setState={setModalIsVisible}/>
			</View>
		</ScrollView>
	)
}