import React, {useEffect,useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Header, Right, Left, Body, Icon, Button,Item, Input,} from 'native-base';
let styles = require('../../../assets/styles/styles.js');

function saveAddress() {
  const [address, set_address] = useState('');
  const destination = {latitude: 37.78825,longitude: -122.4324,};
  const [origin, setOrigin] = useState({
    latitude: 19.079298,
    longitude: 73.019954,
  });

  const [regionval, set_regionval] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
  });

  const MovingMarker = () => {
    return (
      <MapView.Marker.Animated
        ref={marker => {
          marker;
        }}
        image={require('../../../assets/images/driver.png')}
        coordinate={origin}
      />
    );
  };

  const GOOGLE_MAPS_APIKEY = 'AIzaSyAJfpu1UhjR0c2uaqGIwtm-x4BCZzk9qLQ';

  return (
  	<View style={styles.mainContainer}>
      <View style={{backgroundColor: '#29292a'}}>
        <Header transparent styles={{paddingLeft: 5,paddingRight: 5,}}>
          <Left styles={{flex:1}}>
            <Button transparent onPress={() => Actions.addAsset()}>
              <Icon name="arrowleft" type="AntDesign" style={{fontSize: 20,color: '#fff',marginLeft: -10}}/>
            </Button>
          </Left>
          <Body styles={{flex:1}}>
            <Text style={{color:'#fff',fontSize:16,fontFamily: 'OpenSans-SemiBold',marginLeft: -50}}>Select Location</Text>
          </Body>
        </Header>
      </View>

        <View style={styles.mainContainerView}>
          <MapView
            toolbarEnabled={true}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{flex: 1,weight: '100%',height: Dimensions.get('window').height}}
            region={regionval}
            onRegionChangeComplete={e => {
              set_regionval(e);
          }}>
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={6}
            strokeColor="grey"
          />
          <MovingMarker />
          <MapView.Marker
            image={require('../../../assets/images/fuel.png')}
            coordinate={destination}
          />
          </MapView>
          <View style={[styles.inputBtn,{marginBottom: 10}]}>
            <TouchableOpacity style={styles.colorButton} onPress={() => Actions.saveAddress()} >
              <Text style={styles.plainText}>CHOOSE THIS LOCATION</Text>
            </TouchableOpacity>
          </View>
        </View>  
  	</View>
  );
}
export default saveAddress;