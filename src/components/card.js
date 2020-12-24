import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Card, CardItem, Body,Right,Icon } from 'native-base';
let styles = require('../../../assets/styles/styles.js');

function Card() {
  return (
  		<View style={{paddingHorizontal: 5}}>
  			<Card style={{paddingHorizontal: 10}}>
	            <CardItem header>
		            <Body>
		                <Text>
		                   David Villa
		                </Text>
		            </Body>
	              	<Right>
		              	<TouchableOpacity >
	                		<Icon type="Entypo" name="dots-three-vertical" style={{fontSize: 16,color: '#000'}} />
	              		</TouchableOpacity>
		            </Right>
            	</CardItem>
	            <CardItem cardBody>
	            	<View style={{flexDirection: 'row'}}>
	            		<Icon type="MaterialIcons" name="local-gas-station" style={{fontSize: 16,color: '#FF8A01'}} />
	              		<Text>Hello</Text>
	              	</View>
             	</CardItem>
             	<CardItem cardBody>
	            	<View style={{flexDirection: 'row'}}>
	            		<Icon type="Entypo" name="location-pin" style={{fontSize: 16,color: '#FF8A01'}} />
	              		<Text>Hello</Text>
	              	</View>
             	</CardItem>
            </Card>
  		</View>
  );
}
export default Card;