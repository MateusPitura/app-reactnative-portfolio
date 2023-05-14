import React from 'react'
import {View, Text, Image, Modal} from 'react-native'
import StyleText from '../style/text'
import StyleModal from '../style/modal'
import Bottom from '../components/Bottom'

export default function(props: any){
    return(
        <Modal
            animationType='slide'	
            visible={props.visible}
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
                    <Bottom title='Voltar' state={false} setState={props.setState}/>
                </View>
            </View>
        </View>
    </Modal>
    )
}