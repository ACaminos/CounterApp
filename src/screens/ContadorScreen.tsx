import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export const ContadorScreen = () => {
    const [contador, setcontador] = useState(10)
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Contador : {contador}</Text>

        <TouchableOpacity
            style={styles.fabLocationBR}
            onPress= { () => setcontador(contador+1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>+1</Text>
                </View>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    title:{
        textAlign:'center',
        fontSize:40,
        marginBottom:30
    },
    fabLocationBR:{
        position:'absolute',
        bottom:25,
        right:25
    },
    fab:{
        backgroundColor:'#5856d6',
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:'center'
    },
    fabText:{
        color: 'white',
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center'
    }
})