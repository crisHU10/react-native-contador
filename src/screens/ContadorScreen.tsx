import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { BotonFlotante } from '../components/BotonFlotante';

export const ContadorScreen = () => {

    
    const [contador, setContador] = useState(10);
    console.log("contador aumenta o: ",contador);

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Contador: { contador }
            </Text>

            <BotonFlotante 
                title="Suma + 1"
                onPress={ () => setContador( contador + 1 ) }
            />

            <BotonFlotante 
                title="Menos -1"
                position="bl"
                onPress={ () => setContador( contador - 1 ) }
            />

            {/* <TouchableOpacity
                style={ styles.fabLocationBL }
                onPress={ () => setContador( contador - 1 ) }
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }> -1 </Text>
                </View>
            </TouchableOpacity>
             */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 45,
        top: -30,
        textAlign: 'center',
    },
})
