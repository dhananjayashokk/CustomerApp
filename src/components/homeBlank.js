import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from './header';
import {Actions} from 'react-native-router-flux'; 
let styles = require('../assets/styles/styles.js');

function HomeBlank() {
  return (
    <View style={styles.blankConatiner}>
      <Header/>
      <View style={styles.blankConatinerView}>
        <Text style={styles.blankViewHeadText}>No assets found</Text>
        <Text style={styles.blankViewSubText}>Add assets to proceed</Text>
        
      </View>
    </View>
  );
}
export default HomeBlank;