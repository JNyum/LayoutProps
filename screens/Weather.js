import React from 'react';
import {Text, Alert, StyleSheet, View, } from 'react-native';
import * as Location from 'expo-location';
import Axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const apikey = process.env.REACT_APP_WEATHER_KEY;

const weatherOptions = {
    Clear: {
        iconName: "weather-sunny"
    },
    Clouds: {
        iconName: "weather-cloudy"
    },
    Rain: {
        iconName: "weather-rain"
    }
}


export default class Weather extends React.Component {

    state = {
        cond : "Clear"

    }

    getLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync();
        
            const location = await Location.getCurrentPositionAsync();
            console.log(location);
            console.log(location.coords.latitude, location.coords.longitude)
            
            this.getWeather(location.coords.latitude, location.coords.longitude);
        } catch(error) {
            Alert.alert("Error", {error})

        }
    }

    getWeather = async(latitude, longitude) => {
        const {data} = await Axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`

        );
        console.log(data);
        console.log(data.main.temp);
        console.log(data.main.temp_max);
        console.log(data.main.temp_min);
        console.log(data.weather[0].main);
        this.setState({cond:data.weather[0].main, temp:data.main.temp, icon:data.weather[0].icon})
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const {cond, temp, icon} = this.state;
        return (
            <>
            <View style={styles.container}>
                <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[cond].iconName} size={24} color="black" />
                <Text style={styles.temptitile}>temp : {temp}℃</Text>
                </View>
            </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: "center",
        alignItems : "center"
    },
    halfContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    temptitile : {
        fontSize : 24
    }


})