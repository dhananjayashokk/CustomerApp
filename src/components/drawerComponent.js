import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity,Image,Alert} from 'react-native';
import {Root, Container, Body, Right, Icon, ListItem,} from 'native-base';
import { Actions } from "react-native-router-flux";
import { config } from '../config/config';
import RNRestart from 'react-native-restart';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
let styles = require('../assets/styles/styles.js');

function DrawerComponent(){

  const [user, setUser] = useState(null);
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser(){
    let data = await AsyncStorage.getItem('user');
    let decode = JSON.parse(data);
    setUser(decode);
  }

  function logout() {
    Alert.alert(
      'Fuel Panther',
      'Are you sure you want to logout?',
      [
        {
          text: 'Yes',
          onPress: signOut(),
        },
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }

  async function signOut() {
    await AsyncStorage.removeItem('user');
    RNRestart.Restart();
    Actions.splash();
  }

  return (
    <Root>
      <Container style={{flex: 1,}}>
        <View style={styles.drawerViewContainer}>
          <View style={{height: 100, borderBottomColor: '#444', borderBottomWidth: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#29292a',borderBottomLeftRadius: 20,borderBottomRightRadius: 20,paddingTop: 30,}}>
            <Text style={{color : '#fff',fontFamily: 'OpenSans-Bold',fontSize: 16,}}> David Villa</Text>
          </View>

          <ListItem noIndent style={styles.drawerListItem}>
            <TouchableOpacity onPress={() => Actions.home()} style={styles.drawerTouch}>
              <Right>
                <Icon name="truck" type="FontAwesome5" style={[styles.drawerListIcon,{fontSize: 14}]}/>
              </Right>
                <Body>
                  <Text style={styles.drawerText}>Make An Order</Text>
                </Body>
             </TouchableOpacity>
          </ListItem>
      
          <ListItem noIndent style={styles.drawerListItem}>
            <TouchableOpacity onPress={() => Actions.showOrder()} style={styles.drawerTouch}>
              <Right>
                <Icon name="gas-pump" type="FontAwesome5" style={styles.drawerListIcon}/>
              </Right>
              <Body>
                <Text style={styles.drawerText}>Show Current Order</Text>
              </Body>
            </TouchableOpacity>
          </ListItem>

          <ListItem noIndent style={styles.drawerListItem}>
            <TouchableOpacity onPress={() => Actions.showAsset()} style={styles.drawerTouch}>
              <Right>
                <Icon name="home" type="FontAwesome5" style={styles.drawerListIcon}/>
              </Right>
              <Body>
                <Text style={styles.drawerText}>Asset Info</Text>
              </Body>
            </TouchableOpacity>
          </ListItem>

          <ListItem noIndent style={styles.drawerListItem}>
            <TouchableOpacity onPress={() => Actions.profile()} style={styles.drawerTouch}>   
              <Right>
                <Icon name="user-alt" type="FontAwesome5" style={styles.drawerListIcon}/>
              </Right>
              <Body>
                <Text style={styles.drawerText}>Profile</Text>
              </Body>
            </TouchableOpacity>
          </ListItem> 

          <ListItem noIndent style={styles.drawerListItem}>
            <TouchableOpacity onPress={() => logout()} style={styles.drawerTouch}>
              <Right>
                <Icon name="log-out" type="Entypo" style={styles.drawerListIcon}/>
              </Right>
              <Body>
                <Text style={styles.drawerText}>Logout</Text>
              </Body>
            </TouchableOpacity>
          </ListItem>          
        </View>

        <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10,justifyContent: 'flex-end', alignItems: 'flex-end',backgroundColor:'#323232',borderTopColor: '#444', borderTopWidth: 1,}}>
          <View style={{flex: 1, flexDirection: 'row',}}>
            <Image style={{height: 25, width: 85,}} source={require('../assets/images/logo_main.png')}/>
          </View>
          <View style={{justifyContent: 'flex-end',alignItems: 'center'}}>
            <Text style={{ color: '#ff9f00',fontSize: 12,fontFamily: 'OpenSans-Regular',alignSelf:'center',marginBottom: 10}}>V 0.1</Text>
          </View>
        </View> 
      </Container>
    </Root>
  );
}

export default DrawerComponent;