import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    
    const [contador, setContador] = useState(10);
    console.log("contador aumenta o: ",contador);

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Contador: { contador }
            </Text>

            <Fab 
                title="Suma + 1"
                onPress={ () => setContador( contador + 1 ) }
            />

            <Fab 
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
