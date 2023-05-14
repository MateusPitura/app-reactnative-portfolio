import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: 'rgba(217, 217, 217, 0.9)',
    },
    layout:{
        flex: 1,
        margin: 20,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 25,
    },
    layoutImagesQrcode:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagesQrcode:{
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    bottomModal:{
        flex: 1,
        justifyContent: 'flex-end',
    },
})