import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Right, Left, Body, Icon, Button, } from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import { profileActions } from '../actions/profile';
import AsyncStorage from '@react-native-community/async-storage';
let styles = require('../../../assets/styles/styles.js');

function Profile() {
  const profile = useSelector(state => state.profile);
  console.log(profile,"profile")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileActions.profile());
  }, []);

  let profiledata = profile.profile ? profile.profile.data[0] : [];
  console.log(profiledata,"profiledata")

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,}}>
        <View style={{backgroundColor: '#29292a'}}>
          <Header transparent styles={{paddingLeft: 5,paddingRight: 5,}}>
            <Left styles={{flex:1}}>
              <Button transparent onPress={() => Actions.home()}>
                <Icon name="arrowleft" type="AntDesign" style={{fontSize: 20,color: '#fff',marginLeft: -10}}/>
              </Button>
            </Left>
            <Body styles={{flex:1}}>
              <Text style={{color:'#fff',fontSize:14,fontFamily: 'OpenSans-SemiBold',marginLeft: -50}}>Profile</Text>
            </Body>
          </Header>
        </View>
        <View style={styles.mainContainerView}>
          <View style={styles.profileContent}>
            <Text style={styles.profileHeadingText}>Name : </Text>
            <Text style={styles.profileSubText}>{profiledata.cust_name}</Text>
          </View>
          <View style={styles.profileContent}>
            <Text style={styles.profileHeadingText}>Phone : </Text>
            <Text style={styles.profileSubText}>{profiledata.f_phone}</Text>
          </View>
          <View style={styles.profileContent}>
            <Text style={styles.profileHeadingText}>Email : </Text>
            <Text style={styles.profileSubText}>{profiledata.f_email_id}</Text>
          </View>
          <View style={styles.profileContent}>
            <Text style={styles.profileHeadingText}>Gst No : </Text>
            <Text style={styles.profileSubText}>{profiledata.f_gstin}</Text>
          </View>
        </View>  
      </ScrollView>
      <View style={styles.mainContainerBottomView}>
        <TouchableOpacity style={styles.colorButtonFull} onPress={() => Actions.pop()} >
          <Text style={styles.plainText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Profile;