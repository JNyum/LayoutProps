import React from "react";
import {Button, ScrollView, View , StyleSheet, Text, Image, onpress } from "react-native";
import Constants from 'expo-constants';
const App = () => {
    const flexDirection = ['row', 'row-reverse', 'column', 'column-reverse'];
    return (
        <>
            <View style={{paddingTop: Constants.statusBarHeight}}/>
            <View style={[styles.container, styles.playingSpace]}>
            
                

            </View>
            <ScrollView style={[styles.container]}>
         <View style={[styles.buttonView]}>
                        <Button title="CHANGE FLEX DIRECTION"
                            onPress={() =>
                                console.log("press CHANGE FLEX DIRECTION")
                            }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE JUSTIFY CONTENT"
                        onPress={() =>
                            console.log("press CHANGE JUSTIFY CONTENT")
                        }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE ALIGN ITEMS"
                        onPress={() =>
                            console.log("press CHANGE ALIGN ITEMS")
                        }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE DIRECTION"
                        onPress={() =>
                            console.log("press CHANGE DIRECTION")
                        }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE FLEX WRAP"
                        onPress={() =>
                            console.log("press CHANGE FLEX WRAP")
                        }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="ADD SQUARE"
                        onPress={() =>
                            console.log("press ADD SQUARE")
                        }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="DELETE SQUARE"
                        onPress={() =>
                            console.log("press DELETE SQUARE")
                        }
                        />
                    </View>

             <View/>
                

             </ScrollView>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        height: '50%',
    },
    playingSpace: {
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 3,
    },
    controlSpace: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#F5F5F5',
    },
    buttonView: {
        width:'50%',
        padding: 10,
    }
})
export default App;