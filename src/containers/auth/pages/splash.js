import React, {useEffect} from 'react';
import { View, Text, Image, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
let styles = require('../../../assets/styles/styles.js');

function Splash() {

  useEffect(() => {
    checkLogin()
  }, []);

  async function checkLogin(){
    let user = JSON.parse(await AsyncStorage.getItem('user'));
  
    if (user) {
      setTimeout(function() {
        Actions.reset("drawer") 
        // AsyncStorage.clear();
      }, 1000);
    } else {
      setTimeout(function() {
        Actions.loginOptions();
      }, 1000);
    }
  }

  return (
    <View style={styles.splashContainer}>
      <Image
        style={styles.splashImage}
        resizeMode={'contain'}
        source={require('../../../assets/images/logo_main.png')}
      />
    </View>
  );
}
export default Splash;