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
import {verifyActions} from '../actions/verifyOtp';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
let styles = require('../../../assets/styles/styles.js');

function VerifyOtp({phone_no, session_id}) {
  const [inputs, setInputs] = useState({otp_input: ''});
  const [errors, setErrors] = useState(null);
  const [message, setMessage] = useState(null);
  const otpActions = useSelector(state => state.otpActions);
  const getOtp = useSelector(state => state.getOtp);
  const verifyOtp = useSelector(state => state.verifyOtp);
  const dispatch = useDispatch();

  function handleChange(value) {
    setInputs(inputs => ({...inputs, ['otp_input']: value}));
  }

  function OtpVerification() {
    setErrors(null)
    dispatch(verifyActions.verifyOtp(inputs));
  }

  useEffect(() => {
    if (getOtp.getOtp && errors === null) {
      if(getOtp.getOtp.data){
        setInputs(inputs => ({...inputs, ['session_id']: session_id}));
        setInputs(inputs => ({...inputs, ['phone_no']: phone_no}));
        setInputs(inputs => ({...inputs, ['phoneno']: phone_no}));
      }
    }
  }, []);

  if (verifyOtp.verifyOtp && errors === null) {
    if(verifyOtp.verifyOtp.status === 'Success'){
      setErrors(false)
      Actions.signUp({'phone_no':inputs.phone_no});
    }
  }

  if (verifyOtp.verifyOtp && errors === null) {
    if(verifyOtp.verifyOtp.status === 'Error'){
      setErrors(verifyOtp.verifyOtp.status)
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
            <Text style={styles.mainHeadingText}>Enter OTP</Text>
          <Text style={styles.mainSubText}>An OTP has been sent on {phone_no}</Text>
          </View>

          <View style={styles.mainInputView}>
            
            <View>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"Enter Otp"}
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
                onPress={OtpVerification}
              >
                <Text style={styles.plainText}>VERIFY OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default VerifyOtp;