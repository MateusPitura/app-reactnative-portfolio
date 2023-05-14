import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import StyleText from '../style/text'
import StyleScreen from '../style/screens'


export default function(){
	return(
		<ScrollView>
			<View style={StyleScreen.layout}>
				<View>
					<Text style={StyleText.title}>Estágio em Desenvolvimento</Text>
					<Text style={StyleText.subtitle}>Hospital Regional</Text>
					<Text style={StyleText.subtitle}>2022 - 2023{'\n'}</Text>
					<Text style={StyleText.regular}> • Geração de relatórios do Tasy com SQL a partir de banco de dados Oracle</Text>
					<Text style={StyleText.regular}> • Suporte e desenvolvimento de soluções e melhorias para o sistema de gestão Tasy - Philips</Text>
					<Text style={StyleText.regular}> • Criação de planilhas eletrônicas com automatização de processos</Text>
				</View>
				<Text>{'\n\n'}</Text>
				<View>
					<Text style={StyleText.title}>Aprendiz em TI</Text>
					<Text style={StyleText.subtitle}>Arauco</Text>
					<Text style={StyleText.subtitle}>2022 - 2023{'\n'}</Text>
					<Text style={StyleText.regular}> • Configuração e manutenção de impressoras, impressoras Zebra e infraestrutura de redes</Text>
					<Text style={StyleText.regular}> • Rotinas administrativas pelo sistema SAP e Windows Server</Text>
					<Text style={StyleText.regular}> • Suporte em software e em hardware com gestão de chamados com SLA via Microsoft Azure</Text>
				</View>
			</View>
		</ScrollView>
	)
}