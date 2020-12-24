import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Icon, Item, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {otpActions} from '../actions/getOtp';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
let styles = require('../../../assets/styles/styles.js');

function GetOtp() {
  const [inputs, setInputs] = useState({phone_no: ''});
  const [errors, setErrors] = useState(null);
  const [message, setMessage] = useState(null);
  const getOtp = useSelector(state => state.getOtp);
  const dispatch = useDispatch();

  function handleChange(value) {
    setInputs(inputs => ({...inputs, ['phone_no']: value}));
  }

  function mobileNo() {
    setErrors(null)
    dispatch(otpActions.getOtp(inputs));
    // Actions.verifyOtp({'phone_no':inputs.phone_no});
  }

  if (getOtp.error && errors === null) {
    if(getOtp.getOtp.error){
      setErrors(getOtp.getOtp.error);
    }
  }

  if (getOtp.getOtp && errors === null) {
    if(getOtp.getOtp.data){
      setErrors(false)
      Actions.verifyOtp({'phone_no':inputs.phone_no, 'session_id':getOtp.getOtp.data});
    }
  }
  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1,}}> 
        <View style={styles.mainContainerView}>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Image
              style={styles.logo}
              resizeMode={'contain'}
              source={require('../../../assets/images/logo_main.png')}
            />
            <Text style={styles.mainHeadingText}>Enter your Mobile number</Text>
            <Text style={styles.mainSubText}>You will receive an OTP</Text>
          </View>

          <View style={styles.mainInputView}>
            
            <View>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"Phone No"}
                  placeholderTextColor="#B2B6C1"
                  style={{ height: 45, fontFamily: 'OpenSans-Regular'}}
                  onChangeText={e => handleChange(e)}
                />
              </Item>
            </View>

            {errors ? 
              <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={[styles.accountColorText,styles.errorMsg]}>
                    {errors}
                </Text>
              </View>
              :
              <Text style={{margin:0}}></Text>
            }

            <View style={styles.mainTouchView}>
              <TouchableOpacity style={[styles.colorButton,{marginBottom: 20,}]} 
                onPress={mobileNo}
              >
                <Text style={styles.plainText}>GET OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default GetOtp;