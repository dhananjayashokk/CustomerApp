import React, { useEffect,useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {useDispatch, useSelector} from 'react-redux';
import { orderActions } from '../actions/order';
import AsyncStorage from '@react-native-community/async-storage';
import { Header, Right, Left, Body, Icon, Button, Card, CardItem, } from 'native-base';
let styles = require('../../../assets/styles/styles.js');

function ShowOrder() {
  const order = useSelector(state => state.order);
  const dispatch = useDispatch();
  useEffect(() => {
    
    fetchUser()
  }, []);


  async function fetchUser(){
    let user = await AsyncStorage.getItem('user')
    let custid = JSON.parse(user);
    dispatch(orderActions.order(custid.f_customer_id));
  }

  let data = order.order ? order.order.data ? order.order.data : [] : [] ;

  function loadAssets(){
    if(order.order){
      return(
      data.map(item => {
        return(
          <TouchableOpacity onPress={() => Actions.orderStatus()} >
            <Card style={styles.showOrderCard}>
              <CardItem cardBody style={styles.showOrderCardItem}>
                <View style={{flex: 1}}>
                  <Text style={styles.showOrderHeadingTxt}>Order #{item.f_order_id}</Text>
                </View>
                <View style={styles.showOrderHeadingTxtView}>
                  <Text style={styles.showOrderHeadingTxtLeft}>{item.f_quantity}</Text>
                </View>
              </CardItem>
              <CardItem cardBody style={styles.showOrderCardItem}>
                <View style={styles.showOrderViewTxt}>
                  <Text style={styles.showOrderColorTxt}>Deliver to: </Text>
                  <Text style={styles.showOrderRegularTxt}>{item.cust_name}</Text>
                </View>
              </CardItem>
              <CardItem cardBody style={styles.showOrderCardItem}>
                <View style={styles.showOrderViewTxt}>
                  <Text style={styles.showOrderColorTxt}>Address: </Text>
                  <Text style={[styles.showOrderRegularTxt,{width: 300,}]}>{item.f_address}</Text>
                </View>
              </CardItem>
              <CardItem cardBody style={styles.showOrderCardItem}>
                <View style={styles.showOrderViewTxt}>
                  <Text style={styles.showOrderColorTxt}>Delivery Date: </Text>
                  <Text style={styles.showOrderRegularTxt}>{item.f_scheduled_time}</Text>
                </View>
              </CardItem>
              <CardItem cardBody style={styles.showOrderCardItem}>
                <View style={styles.showOrderViewTxt}>
                  <Text style={styles.showOrderColorTxt}>Status: </Text>
                  {
                    (item.f_stage_id < 6) ? 
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.showOrderRegularTxt}>Ongoing</Text>
                        <Text style={styles.showOrderStatus}></Text>
                      </View>
                    :
                    (item.f_stage_id > 6) ?
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.showOrderRegularTxt}>Cancel</Text>
                      <Text style={styles.showOrderStatusCancel}></Text>
                    </View>
                    :
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.showOrderRegularTxt}>completed</Text>
                      <Text style={styles.showOrderStatusComplete}></Text>
                    </View>
                  }
               </View>
              </CardItem>
              {
                (item.f_stage_id < 6) ? 
                  <View style={styles.showOrderBtn}>
                    <TouchableOpacity style={styles.showOrderTouchBtn} onPress={() => Actions.pop()}>
                      <Text style={styles.plainText}>CANCEL ORDER</Text>
                    </TouchableOpacity>
                  </View>
                :
                <View></View>
              }
            </Card>
          </TouchableOpacity>
        )
      })
      )
    } 
  }

  return (
  	<View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,}}>
        <View style={{backgroundColor: '#29292a'}}>
          <Header transparent styles={{paddingLeft: 5,paddingRight: 5,}}>
            <Left styles={{flex:1}}>
              <Button transparent onPress={() => Actions.drawerOpen()}>
                <Icon name="menu" type="MaterialIcons" style={{fontSize: 26,color: '#FF8A01',marginLeft: -10}}/>
              </Button>
            </Left>
            <Body styles={{flex:1}}>
              <Text style={{color:'#fff',fontSize:16,fontFamily: 'OpenSans-SemiBold',marginLeft: -50}}>Show Orders</Text>
            </Body>
          </Header>
        </View>

        <View style={styles.mainNoteContainer}>
          <Text style={styles.mainNoteText}>Select order to see status</Text>
        </View>
        <View style={styles.mainContainerCardView}>
          {loadAssets()}
        </View>
  		</ScrollView>
  	</View>
  );
}
export default ShowOrder;