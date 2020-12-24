import React, { useEffect,useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Right, Left, Body, Icon, Button, Item, Input, } from 'native-base';
import Timeline from 'react-native-timeline-flatlist'; 
let styles = require('../../../assets/styles/styles.js');

function OrderStatus() {
  const [timelinedata, setTimeline] = useState([
      { title: 'Accepted By Dealer', icon: <Image style={{height: 35, width: 40,marginLeft: 100,marginTop: 20}} resizeMode={'contain'} source={require('../../../assets/images/status/order.png')}/>},
      { title: 'Out For Delivery',icon: <Image style={{height: 40, width: 40,marginLeft: 100,}} resizeMode={'contain'} source={require('../../../assets/images/status/truck.png')}/>,},
      { title: 'GeoFence Reached',icon: <Image style={{height: 40, width: 35,marginLeft: 100,}} resizeMode={'contain'} source={require('../../../assets/images/status/map.png')}/>},
      { title: 'Dispensing Completed',icon: <Image style={{height: 35, width: 40,marginLeft: 105,}} resizeMode={'contain'} source={require('../../../assets/images/status/location.png')}/>},
      { title: 'Order Completed',icon: <Image style={{height: 40, width: 30,marginLeft: 110,}} resizeMode={'contain'} source={require('../../../assets/images/status/checkmark.png')}/>},
    ]);
  return (
  	<View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,}}>
        <View style={{backgroundColor: '#29292a'}}>
          <Header transparent styles={{paddingLeft: 5,paddingRight: 5,}}>
            <Left styles={{flex:1}}>
              <Button transparent onPress={() => Actions.showOrder()}>
                <Icon name="arrowleft" type="AntDesign" style={{fontSize: 20,color: '#fff',marginLeft: -10}}/>
              </Button>
            </Left>
            <Body styles={{flex:1}}>
              <Text style={{color:'#fff',fontSize:16,fontFamily: 'OpenSans-SemiBold',marginLeft: -50}}>Order Status</Text>
            </Body>
          </Header>
        </View>
        <View style={styles.orderStatusContainer}>
          <Timeline
            options={{
              style: {paddingTop: 10,},
            }}
            circleSize={20}
            titleStyle={styles.orderStatusText} // Text Style
            timeContainerStyle={{minHeight: 90,}} //Line style
            innerCircle={'icon'}
            circleColor="#ff6200"
            lineColor="#ff6200"
            data={timelinedata}
          />
        </View> 
        <View style={{marginTop: -50,}}>
          <Text style={{borderBottomWidth: 1,borderColor: '#000',}}></Text>
          <Text style={{fontSize: 14,fontFamily: 'OpenSans-SemiBold',paddingHorizontal: 10,color: '#FF8A01',marginVertical: 5}}>Delivery to: </Text>
          <Text style={{fontSize: 14,fontFamily: 'OpenSans-SemiBold',paddingHorizontal: 10,color: '#FF8A01'}}>Order No: </Text>
        </View> 
  		</ScrollView>
  	</View>
  );
}
export default OrderStatus;