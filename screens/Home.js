import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, Button, StyleSheet} from "react-native";

function Home({navigation}) {
    return(
        <>
            <Text> Hello Home </Text>
            <Button
                title="GO TO LAYOUT"
                onPress={()=>navigation.navigate('Layout') }
            />
            <Button
                title="GO TO Homework"
                onPress={()=>navigation.navigate('Homework')}
            />
        </>
    );
}


export default Home;