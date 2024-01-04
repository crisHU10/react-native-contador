import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';


interface FuncionamientoBoton {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const BotonFlotante = ({ title, onPress, position = 'br' }: FuncionamientoBoton ) => {
    const plataforma = () => {
        return (Platform.OS === 'ios') ? "ios" : "android";
    }
   const visualizacionPorPlataforma = plataforma();
 
   console.log("visualizacionPorPlataforma: ", visualizacionPorPlataforma);
   const ios = () => {
        return (
            <TouchableOpacity
                onPress={ onPress }
                activeOpacity={ 0.75 }
                style={[ 
                    styles.fabLocation,  
                    ( position === 'bl' ) ? styles.left : styles.right
                ]}
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }> { title } </Text>
                </View>
            </TouchableOpacity>
        )
    }
    const android = () => {
        return (
            <View
                style={[ 
                    styles.fabLocation,  
                    ( position === 'bl' ) ? styles.left : styles.right
                ]}
            >
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple('#28425B', false, 30 ) }
                >
                    <View style={ styles.fab }>
                        <Text style={ styles.fabText }> { title } </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

   if(visualizacionPorPlataforma === 'ios'){
     return ios();
   }
   else{
    return android();
   }
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: '#00bfff',
        width: 125,
        height: 125,
        borderRadius: 125,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})