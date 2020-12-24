import React, {useEffect,useState} from 'react';
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
  const [inputs, setInputs] = useState({quantity: '',});
  
  function handleChange(value) {
    setInputs(inputs => ({...inputs, ['quantity']: value}));
  }

  return (
  	<View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,}}>
        <View style={{backgroundColor: '#29292a'}}>
          <Header transparent styles={{paddingLeft: 5,paddingRight: 5,}}>
            <Left styles={{flex:1}}>
              <Button transparent onPress={() => Actions.selectLocation()}>
                <Icon name="arrowleft" type="AntDesign" style={{fontSize: 20,color: '#fff',marginLeft: -10}}/>
              </Button>
            </Left>
            <Body styles={{flex:1}}>
              <Text style={{color:'#fff',fontSize:16,fontFamily: 'OpenSans-SemiBold',marginLeft: -50}}>Add Address</Text>
            </Body>
          </Header>
        </View>

        <View style={[styles.mainContainerView,{paddingTop: 50}]}>
          <View style={styles.mainInputView}>
            <Text style={{color:'#000',fontSize:14,fontFamily: 'OpenSans-SemiBold',}}>
              Location
            </Text>
            <View style={{marginVertical: 10,}}>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"Enter Location"}
                  placeholderTextColor="#B2B6C1"
                  style={{ height: 45, fontSize:14,fontFamily: 'OpenSans-SemiBold',color: '#B2B6C1',}}
                  onChangeText={e => handleChange(e)}
                />
              </Item>
            </View>
          </View>

          <View style={styles.mainInputView}>
            <Text style={{color:'#000',fontSize:14,fontFamily: 'OpenSans-SemiBold',}}>
              House/Flat No
            </Text>
            <View style={{marginVertical: 10,}}>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"Enter House/Flat No"}
                  placeholderTextColor="#B2B6C1"
                  style={{ height: 45, fontSize:14,fontFamily: 'OpenSans-SemiBold',color: '#B2B6C1',}}
                  onChangeText={e => handleChange(e)}
                />
              </Item>
            </View>
          </View>

          <View style={styles.mainInputView}>
            <Text style={{color:'#000',fontSize:14,fontFamily: 'OpenSans-SemiBold',}}>
              Landmark
            </Text>
            <View style={{marginVertical: 10,}}>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"Enter Landmark"}
                  placeholderTextColor="#B2B6C1"
                  style={{ height: 45, fontSize:14,fontFamily: 'OpenSans-SemiBold',color: '#B2B6C1',}}
                  onChangeText={e => handleChange(e)}
                />
              </Item>
            </View>
          </View>

          <View style={styles.mainInputView}>
            <Text style={{color:'#000',fontSize:14,fontFamily: 'OpenSans-SemiBold',}}>
              PinCode
            </Text>
            <View style={{marginVertical: 10,}}>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  keyboardType="numeric"
                  placeholder={"Enter PinCode"}
                  placeholderTextColor="#B2B6C1"
                  style={{ height: 45, fontSize:14,fontFamily: 'OpenSans-SemiBold',color: '#B2B6C1',}}
                  onChangeText={e => handleChange(e)}
                />
              </Item>
            </View>
          </View>

          <View style={[styles.mainInputView,{marginTop: -20}]}>
            <TouchableOpacity style={styles.colorButton} onPress={() => Actions.home()} >
              <Text style={styles.plainText}>SAVE ADDRESS</Text>
            </TouchableOpacity>
          </View>
        </View>  
  		</ScrollView>
  	</View>
  );
}
export default saveAddress;