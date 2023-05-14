import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import StyleText from '../style/text'
import StyleBottom from '../style/bottom'

export default function(props: any){
    return(
        <TouchableHighlight
            onPress={()=>{props.setState(props.state)}}
            underlayColor='#000'
            style={StyleBottom.layoutUnderlay}
        >
            <View style={StyleBottom.layoutBox}>
                <Text style={StyleText.bottom}>{props.title}</Text>
            </View>
        </TouchableHighlight>
    )
}