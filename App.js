import React from "react";
import {Button, ScrollView, View , StyleSheet, Text, Image } from "react-native";
import Constants from 'expo-constants';
const App = () => {
    return (
        <>
            <View style={{paddingTop: Constants.statusBarHeight}}/>
            <View style={[styles.container, styles.playingSpace]}>
            
                <Text> 
                    교수님이 하시는거랑 제가 하는거랑 
                    한 눈에 구별할 수 있게 사각형 색을
                    빨간색으로 했습니다 </Text>
                <Text> Hello </Text>
                <Text> Hello </Text>
                <Text>
                    대중음악 뭐시기
                    미국 뭐시기대중문화 머시기
                    면제가 뭐시기
                    전문연구요원 뭐시기
                    정치권 뭐시기 점점점...
                </Text>
                <Image style={{
                    width : 150,
                    height : 150,
                   // resizeMod: 'contain'
                }}
                    source={{ uri: 'http://reactnative.dev/img/tiny_logo.png',}}/>

            </View>
            <ScrollView style={[styles.container]}>
         <View style={[styles.buttonView]}>
                        <Button title="CHANGE FLEX DIRECTION"/>
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE JUSTIFY CONTENT"/>
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE ALIGN ITEMS"/>
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE DIRECTION"/>
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE FLEX WRAP"/>
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="ADD SQUARE"/>
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="DELETE SQUARE"/>
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