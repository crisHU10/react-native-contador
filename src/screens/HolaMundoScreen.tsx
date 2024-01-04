import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'red'
          }}>
            <Text style={{
              fontSize: 30,
              textAlign: 'center'
            }}>
              Hola Cristian
            </Text>
        </View>
    )
}
