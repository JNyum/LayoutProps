import React from 'react';
import Styled from 'styled-components/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';

const Container = Styled.View`
    flex: 1;
`;

/*getLocation = async () => {
    try {
        await Location.requestForegroundPermissionsAsync();
    
        const location = await Location.getCurrentPositionAsync();
        console.log(location);
        console.log(location.coords.latitude, location.coords.longitude)
        
        this.initialRegion(location.coords.latitude, location.coords.longitude);
    } catch(error) {
        Alert.alert("Error", {error})

    }
}*/


const GoogleMap = () => {
  return (
    <Container>
      <MapView style={{flex: 1}}
        provider={PROVIDER_GOOGLE} 
        initialRegion={{
            latitude: 37.3338882,
            longitude: 127.25508,
        }}
        />
    </Container>
  );
};

export default GoogleMap;