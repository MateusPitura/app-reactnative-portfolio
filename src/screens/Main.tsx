import React, {useState} from 'react'
import {View, Text, ScrollView, Image, Modal} from 'react-native'
import StyleText from '../style/text'
import StyleScreen from '../style/screens'
import StyleModal from '../style/modal'
import Bottom from '../components/Bottom'

export default function(){

	const [modalIsVisible, setmodalIsVisible] = useState(false)

	return(
		<ScrollView>
			<View style={StyleScreen.layout}>
				<Text style={StyleText.regular}>Este aplicativo foi desenvolvimento a fim de contar um pouco sobre mim na estrevista para estágio da Continental. Navegue entre as categorias para me conhecer melhor!</Text>
				<View style={StyleScreen.layoutImages}>
					<Image 
						source={require('../assets/images/Foto.png')}
						style={StyleScreen.images}
					/>
				</View>
				<Bottom title='Entre em Contato' state={true} setState={setmodalIsVisible}/>
				<Modal
					animationType='slide'	
					visible={modalIsVisible}
					transparent={true}
				>
					<View style={StyleModal.background}>
						<View style={StyleModal.layout}>
							<Text style={StyleText.title}>Telefone{'\n'}</Text>
							<Text style={StyleText.regular}>(42) 9 9152-7032{'\n'}</Text>
							<Text style={StyleText.title}>E-mail{'\n'}</Text>
							<Text style={StyleText.regular}>mateuspitura@gmail.com{'\n'}</Text>
							<Text style={StyleText.title}>LinkedIn{'\n'}</Text>
							<Text style={StyleText.regular}>linkedin.com/in/mateuspitura{'\n'}</Text>
							<Bottom title='Voltar' state={false} setState={setmodalIsVisible}/>
						</View>
					</View>
				</Modal>
			</View>
		</ScrollView>
	)
}