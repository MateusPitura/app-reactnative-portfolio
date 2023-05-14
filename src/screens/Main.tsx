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
				<View style={StyleScreen.layoutImagesProfile}>
					<Image 
						source={require('../assets/images/Foto.png')}
						style={StyleScreen.imagesProfile}
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
							<Text style={StyleText.title}>LinkedIn{'\n'}</Text>
							<Text style={StyleText.regular}>linkedin.com/in/mateuspitura{'\n'}</Text>
							<View style={StyleModal.layoutImagesQrcode}>
								<Image
									source={require('../assets/images/qrcode.png')}
									style={StyleModal.imagesQrcode}
								/>	
							</View>
							<View style={StyleModal.bottomModal}>
								<Bottom title='Voltar' state={false} setState={setmodalIsVisible}/>
							</View>
						</View>
					</View>
				</Modal>
			</View>
		</ScrollView>
	)
}