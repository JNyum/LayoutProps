/*import { NavigationContainer } from "@react-navigation/native";
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

            <Button
                title="GO TO Homework"
                onPress={()=>navigation.navigate('Homework')}
            />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'black',
        borderRadius: 5,
        padding:10,
        margin:20
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



export default Home;*/