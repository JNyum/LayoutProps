import React from "react";
import { Text, Button, StyleSheet, View } from "react-native";

function Homework({navigation}) {
    return(
        <>
            <Text> Hw </Text>
            <View style={[styles.buttonView]}>
                        <Button title="GO TO Home"
                        onPress={() =>navigation.navigate('Home')}/>
            </View>

            <View style={[styles.buttonView]}>
                        <Button title="GO TO Layout"
                        onPress={() =>navigation.navigate('Layout')}/>
            </View>

            <View style={[styles.buttonView]}>
                        <Button title="GO TO Weather"
                        onPress={() =>navigation.navigate('Weather')}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    
    buttonView: {
        width:'50%',
        padding: 10,
    }

    
})

export default Homework;