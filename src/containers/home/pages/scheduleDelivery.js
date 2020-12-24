import React, { useEffect,useState, } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Right, Left, Body, Icon, Button, Item, Input, Picker,} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from 'react-redux';
import { createOrderActions } from '../actions/createOrder';
import AsyncStorage from '@react-native-community/async-storage';
import Moment from 'moment';
let styles = require('../../../assets/styles/styles.js');

function ScheduleDelivery({fuel_volume,fuel_price,dealer_id,product_id,order_type,base_price,delivery_price,excise_duty,tax,amount_paid}) {

  const [inputs, setInputs] = useState({date: '',time: '',payment: ''});
  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState(new Date());
  const [dateChange, setDateChange] = useState(false);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const scheduleDelivery = useSelector(state => state.scheduleDelivery);
  const timeSlots = useSelector(state => state.timeSlots);
  const paymentMode = useSelector(state => state.paymentMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createOrderActions.fetchTimeSlots());
    dispatch(createOrderActions.fetchPaymentMode());
    fetchUser();
  }, []);

  let time = timeSlots.timeSlots ? timeSlots.timeSlots : [] ;
  let payment = paymentMode.paymentMode ? paymentMode.paymentMode : [] ;

  console.log('time',time)
  console.log('payment',payment)

  async function fetchUser(){
    let user = await AsyncStorage.getItem('user')
    let custid = JSON.parse(user);
    console.log(custid);
    setUser(custid);
  }

  function placeOrder(){

    if(!inputs.date){
      alert('Please Select Date.')
    }else if(!inputs.time){
      alert('Please Select Time Slot.')
    }else if(!inputs.payment){
      alert('Please Select Payment Method.')
    }else{
      let store = {
        "asset_id" : "1",
        "fuel_volume": fuel_volume,
        "fuel_price": fuel_price,
        "custid" : user.f_customer_id,
        "dealer_id" : dealer_id,
        "product_id": product_id,
        "payment_id": inputs.payment,
        "order_type": order_type,
        "delivery_date": Moment(inputs.date).format('Y-M-DTHH:mm:ss')+'Z',
        "expected_time": inputs.time,
        "admin_id": "1",
        "base_price": base_price,
        "delivery_price": delivery_price,
        "excise_duty": excise_duty,
        "tax": tax,
        "amount_paid": amount_paid
      }
  
      dispatch(createOrderActions.scheduleDelivery(store));
      Actions.home();
    }
    
  }

  function handleInputs(value,name) {
    setInputs(inputs => ({...inputs, [name]: value}));
  }
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setInputs(inputs => ({...inputs, ['date']: currentDate}));
    setDateChange(true);
  };

  const showDate = () => {
    showMode('date');
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
  	<View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,}}>
        <View style={{backgroundColor: '#29292a'}}>
          <Header transparent styles={{paddingLeft: 5,paddingRight: 5,}}>
            <Left styles={{flex:1}}>
              <Button transparent onPress={() => Actions.addToCart()}>
                <Icon name="arrowleft" type="AntDesign" style={{fontSize: 20,color: '#fff',marginLeft: -10}}/>
              </Button>
            </Left>
            <Body styles={{flex:1}}>
              <Text style={{color:'#fff',fontSize:16,fontFamily: 'OpenSans-SemiBold',marginLeft: -50}}>Schedule Your Order</Text>
            </Body>
          </Header>
        </View>

        <View style={styles.mainContainerViewInputs}>
          <View style={styles.mainInputView}>
            <Text style={styles.mainInputsHeading}>
              Select Date
            </Text>
            <View style={styles.mainInputMargin}>
              <Item
                regular
                style={styles.inputContainer}>
               {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={'date'}
                  display="default"
                  onChange={onChange}
                />
              )}
              <TouchableOpacity onPress={showDate}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="calendar" type="EvilIcons" 
                    style={styles.sdIcon}
                  />
                  <Text
                    style={styles.sdDateText}>
                    {inputs.date
                      ? Moment(inputs.date).format('MMM D, Y')
                      : 'Select Date'}
                  </Text>
                </View>
              </TouchableOpacity>
              <Text style={{}}></Text>
              </Item>
            </View>
          </View>

          <View style={styles.mainInputView}>
            <Text style={styles.mainInputsHeading}>
              Select Time
            </Text>
            <View style={styles.mainInputMargin}>
              <Item
                regular
                picker
                style={styles.mainPickerInput}>
                <Picker
                  mode="dropdown"
                  placeholder="Select your Retailer"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  style={styles.mainPicker}
                  selectedValue={inputs.time}
                  onValueChange={(e) => handleInputs(e, 'time')}
                >
                  <Picker.Item label="Select Time Slot" />
                  { time.map((item, key)=>(
                  <Picker.Item label={item.TimeSlot} value={item.TimeSlot} key={key} />)
                  )}
                </Picker>
              </Item>
            </View>
          </View>

          <View style={styles.mainInputView}>
            <Text style={styles.mainInputsHeading}>
              Payment Mode
            </Text>
            <View style={styles.mainInputMargin}>
              <Item
                regular
                picker
                style={styles.mainPickerInput}>
                <Picker
                  mode="dropdown"
                  placeholder="Fuel Type"
                  placeholderTextColor="#B2B6C1"
                  style={styles.mainPicker}
                  selectedValue={inputs.payment}
                  onValueChange={(e) => handleInputs(e, 'payment')}
                >
                <Picker.Item label="Payment Mode" />
                { payment.map((item, key)=>(
                  <Picker.Item label={item.payment_mode_name} value={item.payment_id} key={key} />)
                  )}
                </Picker>
              </Item>
            </View>
          </View>
          
          <View style={styles.inputBtn}>
            <TouchableOpacity style={styles.colorButton} onPress={placeOrder} >
              <Text style={styles.plainText}>PLACE ORDER</Text>
            </TouchableOpacity>
          </View>
        </View>  
  		</ScrollView>
  	</View>
  );
}
export default ScheduleDelivery;