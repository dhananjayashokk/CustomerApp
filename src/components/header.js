import React, {useState, useEffect, useRef} from 'react';
import { Header, Right, Left, Body, Button, Icon, } from 'native-base';
import { View, Text, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

function Headers() { 
  return (
      <View style={{backgroundColor: '#29292a'}}>
        <Header transparent styles={{paddingLeft: 5,paddingRight: 5,}}>
          <Left styles={{flex:1}}>
            <Button transparent onPress={() => Actions.drawerOpen()}>
              <Icon name="menu" type="MaterialIcons" style={{fontSize: 26,color: '#FF8A01',marginLeft: -10}}/>
            </Button>
          </Left>
          <Body styles={{flex:1}}>
            <Text style={{color:'#fff',fontSize:16,fontFamily: 'OpenSans-SemiBold',}}>Home</Text>
          </Body>
          <Right styles={{flex:1,}}>
             <Image
              style={{height: 20, width: 50,left: "30%"}}
              resizeMode={'contain'}
              source={require('../assets/images/fuel.png')}
            />
          </Right>
        </Header>
      </View>
  );
}

export default Headers;