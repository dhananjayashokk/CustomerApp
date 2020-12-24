import React from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { Actions } from 'react-native-router-flux';
let styles = require('../../../assets/styles/styles.js');

function LoginOptions() {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.logOptImageContainer}
        resizeMode={'contain'}
        source={require('../../../assets/images/welcome_onboard.png')}
      />
      <View style={styles.logOptTextContainer}>
        <Text style={styles.logOptText}>Welcome abroad!</Text>
        <Text style={styles.logOptTextDescription}>
          Order fuel and relax while we bring it to you
          in cost effective and effecient way
        </Text>
      </View>
      <View style={styles.logOptButtons}>
        <TouchableOpacity style={styles.colorButton} 
          onPress={() => Actions.getOtp()}>
          <Text style={styles.plainText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.noColorButton}
          onPress={() => Actions.login()}>
          <Text style={styles.coloredText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default LoginOptions;