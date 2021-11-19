import { useRoute } from '@react-navigation/core'
import React from 'react'
import { Button, Text, View } from 'react-native'


export function Detail({navigation}){
    const route = useRoute()
    const { filme } = route.params
    
    function handleBack(){
        navigation.goBack()
    }

    return (
        <View>
            <Text>Detalhes</Text>
            <Text>{filme.name}</Text>
            <Text>{filme.overview}</Text>
            <Button onPress={handleBack} title="voltar" /> 
        </View>
    )
}