import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Right, Left, Body, Icon, Button, Item, Input, Picker, } from 'native-base';

import {useDispatch, useSelector} from 'react-redux';
import { orderActions } from '../actions/order';
import AsyncStorage from '@react-native-community/async-storage';
let styles = require('../../../assets/styles/styles.js');

function AddAsset() {
  const [inputs, setInputs] = useState({name: '',type: 'Fuel Type',quantity: '',});
  const fetchFuelAsset = useSelector(state => state.fetchFuelAsset);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderActions.fetchFuelAsset());
  }, []);

  let fuelData = fetchFuelAsset.fetchFuelAsset ? fetchFuelAsset.fetchFuelAsset.data ? fetchFuelAsset.fetchFuelAsset.data : [] : [] ;
  
  function handleInputs(value,name) {
    setInputs(inputs => ({...inputs, [name]: value}));
  }

  function Address() {
    const data = new FormData();
    data.append('name',inputs.name)
    data.append('fuel',inputs.type)
    data.append('quantity',inputs.quantity)
    console.log(data,"data")
    Actions.addAddress()
  }

  return (
  	<View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,}}>
        <View style={{backgroundColor: '#29292a'}}>
          <Header transparent styles={{paddingLeft: 5,paddingRight: 5,}}>
            <Left styles={{flex:1}}>
              <Button transparent onPress={() => Actions.showAsset()}>
                <Icon name="arrowleft" type="AntDesign" style={{fontSize: 20,color: '#fff',marginLeft: -10}}/>
              </Button>
            </Left>
            <Body styles={{flex:1}}>
              <Text style={{color:'#fff',fontSize:16,fontFamily: 'OpenSans-SemiBold',marginLeft: -50}}>Add Assets</Text>
            </Body>
          </Header>
        </View>

        <View style={styles.mainContainerViewInputs}>
          <View style={styles.mainInputView}>
            <Text style={styles.mainInputsHeading}>
              Asset
            </Text>
            <View style={styles.mainInputMargin}>
              <Item
                regular
                style={{}}>
                <Input
                  placeholder={"Asset Name"}
                  placeholderTextColor="#B2B6C1"
                  style={styles.inputContainer}
                  value={inputs.name}
                  onChangeText={(e) => handleInputs(e, 'name')}
                />
              </Item>
            </View>
          </View>
          <View style={styles.mainInputView}>
            <Text style={styles.mainInputsHeading}>
              Fuel Type
            </Text>
            <View style={styles.mainInputMargin}>
              <Item
                regular
                picker
                style={styles.mainPickerInput}>
                <Picker
                  mode="dropdown"
                  placeholder="Select your Retailer"
                  placeholderStyle={{ color: "#B2B6C1" }}
                  style={styles.mainPicker}
                  selectedValue={inputs.type}
                  onValueChange={(e) => handleInputs(e, 'type')}
                >
                <Picker.Item label="Select Fuel Type" value="0" />
                { fuelData.map((item, key)=>(
                  <Picker.Item label={item.ProductName} value={item.ProductName} key={key} />)
                )}

                </Picker>
              </Item>
            </View>
          </View>
          <View style={styles.mainInputView}>
            <Text style={styles.mainInputsHeading}>
              Fuel Capacity
            </Text>
            <View style={styles.mainInputMargin}>
              <Item
                regular
                style={{}}>
                <Input
                  keyboardType="numeric"
                  placeholder={"Capacity"}
                  placeholderTextColor="#B2B6C1"
                  style={styles.inputContainer}
                  value={inputs.quantity}
                  onChangeText={(e) => handleInputs(e, 'quantity')}
                />
              </Item>
            </View>
          </View>
          <View style={styles.mainInputView}>
            <Text style={styles.mainInputsHeading}>
              Asset Address
            </Text>
          </View>
          <View style={styles.inputBtn}>
            <TouchableOpacity style={styles.colorButton} onPress={Address}>
              <Text style={styles.plainText}>ADD ADDRESS</Text>
            </TouchableOpacity>
          </View>
        </View>  
  		</ScrollView>
  	</View>
  );
}
export default AddAsset;