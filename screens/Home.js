import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, Button, Image, TouchableOpacity, StyleSheet, View} from "react-native";

function Home({navigation}) {
    return(
        <>

            <View style={styles.container}>

            <Image
                source={require('../assets/frog.jpg')}
                style={{height:200,width:200}}
            />
            <Text>To. 교수님<div/>
            안녕하십니까 교수님, 이번 학기 교수님의 강의 수강하게된 GBT 17 장정윤입니다<div/>
            학기 초 자바 기초 문법만 알고, 자바가 조금은 친숙해진 상태로 교수님의 강의를 듣게 되었습니다.<div/>
            하지만 워낙 사용하는 문법이 달라서 그런지 낯설었고, <div/>
            또 교수님이 주신 코드와 설명 덕분에 어떤 식으로 코드를 짜고, 구성을 하는지를 배워 조금이나마 익숙해진 것 같습니다.<div/>
            하지만, 저한테 가장 큰 배움은 교수님의 디버깅 과정이었습니다.<div/>
            처음에 구글링을 할 때는 내가 무엇을 모르는지, 어느 과정에서 문제가 있는지, 어디가 잘못된건지를 몰랐는데<div/>
            교수님이 하시는 것을 보고 조금 감을 잡은 것 같습니다.<div/>
            특히 구글링한 결과를 여러개 보며 내가 필요한 코드 한 두 줄을 찾아 집어넣는 과정이 너무 재미있었습니다.<div/>
            또, 교수님이 마지막에 말씀 해주신 무작정 해보라는 말 한 마디에 방학에 공부하고싶은게 생겼습니다.<div/>
            감사드립니다. 기회가 된다면, 다음 학기에 또 뵙고싶습니다.<div/>
            코로나가 또 다시 극성인 가운데, 무탈하셨으면 좋겠습니다. 감사합니다.    
            </Text>
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