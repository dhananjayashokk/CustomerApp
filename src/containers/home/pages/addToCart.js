import React, { useEffect, useState, } from 'react';
import { View, Text, TouchableOpacity, ScrollView, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Left, Body, Icon, Button, Card, CardItem, } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { createOrderActions } from '../actions/createOrder';
let styles = require('../../../assets/styles/styles.js');

function AddToCart({ro_id,dealer_id,product_id,fuel_volume}) {

  const [errors, setErrors] = useState(null);
  const [inputs, setInputs] = useState({'fuel_price':0});
  const [baseFuelPrice, setBaseFuelPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [excise, setExcise] = useState(0);
  const [tax, setTax] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  
  const fetchFuelPrice = useSelector(state => state.fetchFuelPrice);
  const fetchDeliveryTax = useSelector(state => state.fetchDeliveryTax);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createOrderActions.fetchFuelPrice(ro_id,dealer_id,product_id));
    dispatch(createOrderActions.fetchDeliveryTax(ro_id,dealer_id,product_id));
  }, []);

  let fuelPrice = fetchFuelPrice.fetchFuelPrice ? fetchFuelPrice.fetchFuelPrice : [] ;
  let fetchTax = fetchDeliveryTax.fetchDeliveryTax ? fetchDeliveryTax.fetchDeliveryTax : [] ;

  if(fetchDeliveryTax.fetchDeliveryTax && fetchFuelPrice.fetchFuelPrice && errors === null){

    if(!fetchDeliveryTax.fetchDeliveryTax.error || fetchFuelPrice.fetchFuelPrice.error){
      let base_fuel_price = fuel_volume * fuelPrice[0].f_price_per_unit;
      let delivery_price = fetchTax[0].f_delivery_price ? parseFloat(fetchTax[0].f_delivery_price) : 0;
      let excise = fetchTax[0].f_excise_duty ? fuel_volume * fetchTax[0].f_excise_duty : 0;
      let tax = fetchTax[0].f_tax_percent ? [base_fuel_price + delivery_price + excise] * fetchTax[0].f_tax_percent / 100 : [base_fuel_price + delivery_price + excise];
      setInputs(inputs => ({...inputs, ['fuel_price']: fuelPrice[0].f_price_per_unit}));
      setBaseFuelPrice(base_fuel_price);
      setDeliveryPrice(delivery_price);
      setExcise(excise);
      setTax(tax);
      setFinalPrice(base_fuel_price + delivery_price + excise + tax);
      setErrors(false);
    }else{
      setErrors(true);
    }
  }

  let today = new Date();
  let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+ today.getFullYear();

  function scheduleDelivery(){
    Actions.scheduleDelivery({
      'fuel_volume':fuel_volume,
      'fuel_price':inputs.fuel_price,
      'dealer_id':dealer_id,
      'product_id':product_id,
      'order_type':"volume",
      'base_price':baseFuelPrice,
      'delivery_price': deliveryPrice,
      'excise_duty':excise,
      'tax':tax,
      'amount_paid':finalPrice
    })
  }
  return (
  	<View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,}}>
        <View style={{backgroundColor: '#29292a'}}>
          <Header transparent styles={{paddingLeft: 5,paddingRight: 5,}}>
            <Left styles={{flex:1}}>
              <Button transparent onPress={() => Actions.createOrder()}>
                <Icon name="arrowleft" type="AntDesign" style={{fontSize: 20,color: '#fff',marginLeft: -10}}/>
              </Button>
            </Left>
            <Body styles={{flex:1}}>
              <Text style={{color:'#fff',fontSize:16,fontFamily: 'OpenSans-SemiBold',marginLeft: -50}}>Cart Details</Text>
            </Body>
          </Header>
        </View>
        
        <View style={styles.mainContainerCardView}>
          
          <Card style={{flex:1,}}>
            <CardItem cardBody style={styles.cartCardItem}>
              <Icon type="Entypo" name="location-pin" style={styles.cartCardItemIcon} />
              <Text style={styles.cartCardHeadingTxt}>
                Home
              </Text>   
            </CardItem>
            <CardItem cardBody style={styles.cartCardItem}>
              <View style={{flex: 1}}>
                <Text style={styles.cartCardTxt}>Petrol Quantity</Text>
              </View>
              <View style={{flex: 1,justifyContent: 'flex-end',alignItems: 'flex-end'}}>
                <Text style={styles.cartCardStyleTxt}>{fuel_volume} ltrs</Text>
              </View>
            </CardItem>
            <CardItem cardBody style={styles.cartCardItem}>
              <View style={{flex: 2,}}>
                <Text style={styles.cartCardTxt}>Fuel Price</Text>
                <Text style={styles.cartCardNoteTxt}>Price last Updated on: {date}</Text>
              </View>
              <View style={{flex: 1,justifyContent: 'flex-end',alignItems: 'flex-end'}}>
                <Text style={styles.cartCardStyleTxt}>₹ {baseFuelPrice}</Text>
              </View>
            </CardItem>
            <CardItem cardBody style={styles.cartCardItem}>
              <View style={{flex: 1,}}>
                <Text style={styles.cartCardTxt}>Excise Duty</Text>
              </View>
              <View style={{flex: 1,justifyContent: 'flex-end',alignItems: 'flex-end'}}>
                <Text style={styles.cartCardStyleTxt}>₹ {excise}</Text>
              </View>
            </CardItem>
            <CardItem cardBody style={styles.cartCardItem}>
              <View style={{flex: 1,}}>
                <Text style={styles.cartCardTxt}>Including Tax</Text>
              </View>
              <View style={{flex: 1,justifyContent: 'flex-end',alignItems: 'flex-end'}}>
                <Text style={styles.cartCardStyleTxt}>₹ {tax}</Text>
              </View>
            </CardItem>
            <CardItem cardBody style={styles.cartCardItem}>
              <View style={{flex: 1,}}>
                <Text style={styles.cartCardTxt}>Delivery Price</Text>
              </View>
              <View style={{flex: 1,justifyContent: 'flex-end',alignItems: 'flex-end'}}>
                <Text style={styles.cartCardStyleTxt}>₹ {deliveryPrice}</Text>
              </View>
            </CardItem>
            <CardItem cardBody style={[styles.cartCardItem, {borderTopColor:'#eee', borderTopWidth:1, marginVertical:5, paddingTop:5}]}>
              <View style={{flex: 1,}}>
                <Text style={styles.cartCardTxt}>Total Price </Text>
              </View>
              <View style={{flex: 1,justifyContent: 'flex-end',alignItems: 'flex-end'}}>
                <Text style={[styles.cartCardStyleTxt,{fontWeight:'bold'}]}>₹ {finalPrice}</Text>
              </View>
            </CardItem>
            <View style={styles.cartCardBtn}>
              <TouchableOpacity style={styles.colorButton} onPress={scheduleDelivery}>
                <Text style={styles.plainText}>Delivery</Text>
              </TouchableOpacity>
            </View>
          </Card>
          
        </View>  
  		</ScrollView>
  	</View>
  );
}
export default AddToCart;