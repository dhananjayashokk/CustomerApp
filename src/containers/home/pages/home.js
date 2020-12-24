import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Modal, } from 'react-native';
import { Card, CardItem, Body, Right, Icon,Item, Input, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { homeActions } from '../actions/home';
import HomeBlank from '../../../components/homeBlank.js';
import Header from '../../../components/header.js';
let styles = require('../../../assets/styles/styles.js');

function Home() {
  const home = useSelector(state => state.home);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(true);
  const [inputs, setInputs] = useState({pickDefault: '',});

  function pickDefault(value,name) {
    setInputs(inputs => ({...inputs, [name]: value}));
  }

  const selectDefault = () => {
    setModalVisible(false);
  }
  
  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser(){
    let user = JSON.parse(await AsyncStorage.getItem('user'));
    
    if(user){
      dispatch(homeActions.home(user.f_customer_id));
    }
  }

  let data = home.home? home.home.data ? home.home.data : [] : [] ;

  function loadAssets(){
    if(home.home){
      return(
      data.map(item => {
        return(
          <Card style={styles.homeCard}>
            <CardItem cardBody style={styles.homeCardItem}>
              <Body>
                <Text style={styles.homeCardItemText}>
                  {item.f_address_nick}
                </Text>
              </Body>
              {/*
              <Right>
                <TouchableOpacity>
                  <Text style={styles.homeColorText}>Default</Text>
                </TouchableOpacity>
              </Right>
              */}
            </CardItem>
            <CardItem cardBody style={styles.homeCardItem}>
              <View style={styles.homeCardItemView}>
                <Icon type="MaterialIcons" name="local-gas-station" style={styles.homeCardItemIcon} />
                  <Text style={styles.homeCardItemSubText}>{item.f_address}</Text>
                </View>
            </CardItem>
            <CardItem cardBody style={styles.homeCardItem}>
              <View style={styles.homeCardItemView}>
                <Icon type="Entypo" name="location-pin" style={styles.homeCardItemIcon} />
                  <Text style={styles.homeCardItemSubText}>{item.f_product_name}</Text>
                </View>
            </CardItem>
          </Card>
        )
      })
      )
    } 
  }

  return (
  	<View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,}}>
        <Header/>
        <View style={styles.homeContainer}>

          <Card style={styles.homeCard}>
            <CardItem cardBody style={styles.homeCardItem}>
              <Body>
                <Text style={styles.homeCardItemText}>
                 Office
                </Text>
              </Body>
              <Right>
              { modalVisible ? 
                <TouchableOpacity onPress={selectDefault} >
                  <Icon type="Entypo" name="dots-three-vertical" style={styles.homeIcon} />
                </TouchableOpacity>
                :
                 
                <Picker
                  mode="dropdown"
                  style={{height: 10,width: 130,color: 'orange',backgroundColor: 'white', fontSize: 14, fontFamily: 'OpenSans-SemiBold',}}
                  selectedValue={inputs.pickDefault}
                  onValueChange={(e) => pickDefault(e, 'pickDefault')}
                >
                  <Picker.Item label="None" value="0" />
                  <Picker.Item label="Default" value="1" />
                </Picker>
              } 
              </Right>
            </CardItem>
            <CardItem cardBody style={styles.homeCardItem}>
              <View style={styles.homeCardItemView}>
                <Icon type="MaterialIcons" name="local-gas-station" style={styles.homeCardItemIcon} />
                  <Text style={styles.homeCardItemSubText}>Petrol</Text>
                </View>
            </CardItem>
            <CardItem cardBody style={styles.homeCardItem}>
              <View style={styles.homeCardItemView}>
                <Icon type="Entypo" name="location-pin" style={styles.homeCardItemIcon} />
                  <Text style={styles.homeCardItemSubText}>Sion</Text>
                </View>
            </CardItem>
          </Card>
          {loadAssets()}
        </View>  
  		</ScrollView>
      <View style={styles.homeButtonView}>
        <TouchableOpacity style={styles.colorButton} onPress={createOrder}>
          <Text style={styles.plainText}>Schedule Delivery</Text>
        </TouchableOpacity>
      </View> 
  	</View>
  );
}
export default Home;