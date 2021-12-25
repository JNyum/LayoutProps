import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, Button, Image, TouchableOpacity, StyleSheet, View} from "react-native";

function Home({navigation}) {
    return(
        <>

            <View style={styles.container}>

            <Image
                source={require('../assets/frog.jpg')}
                style={{height:400,width:400}}
            />
            
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={()=>navigation.navigate('Layout') }
                >
                <Text style={styles.buttonText}>"Go To Layout" </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={()=>navigation.navigate('Homework') }
                >
                <Text style={styles.buttonText}>"Go To Homework" </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={()=>navigation.navigate('Weather') }
                >
                <Text style={styles.buttonText}>"Go To Weather" </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={()=>navigation.navigate('Map') }
                >
                <Text style={styles.buttonText}>"Go To Map" </Text>
            </TouchableOpacity>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'black',
        borderRadius: 5,
        padding:5,
        margin:10
    },
    buttonText: {
        fontSize:20,
        color:'#fff'
    },
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ebebeb'
    }
})



export default Home;