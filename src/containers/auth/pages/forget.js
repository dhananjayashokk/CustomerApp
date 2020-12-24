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
import {forgetActions} from '../actions/forget';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
let styles = require('../../../assets/styles/styles.js');

function Forget() {
  const [inputs, setInputs] = useState({phone_no: ''});
  const [errors, setErrors] = useState(null);
  const forgetpassword = useSelector(state => state.forgetpassword);
  const dispatch = useDispatch();

  function handlePhoneNo(value) {
    setInputs(inputs => ({...inputs, ['phone_no']: value}));
  }

  function phoneNo() {
    setErrors(null)
    dispatch(forgetActions.forget(inputs));
  }

  if (forgetpassword.error && errors === null) {
    if(forgetpassword.forgetpassword.error){
      setErrors(forgetpassword.forgetpassword.error);
    }
  }

  if (forgetpassword.forgetpassword && errors === null) {
    if(forgetpassword.forgetpassword.data){
      setErrors(false)
      Actions.resetPassword({'phone_no':inputs.phone_no});
    }
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}> 
        <View style={styles.mainContainerView}>
        
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Image
              style={styles.logo}
              resizeMode={'contain'}
              source={require('../../../assets/images/logo_main.png')}
            />
            <Text style={styles.mainHeadingText}>Reset Password</Text>
          <Text style={styles.mainSubText}>Mobile number has to be verified to reset password</Text>
          </View>

          <View style={styles.mainInputView}>
            
            <View style={{marginBottom:20}}>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"Phone No"}
                  placeholderTextColor="#B2B6C1"
                  style={{ height: 45, fontFamily: 'OpenSans-Regular'}}
                  onChangeText={e => handlePhoneNo(e)}
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
              <Text style={{margin:-10}}></Text>
            }

            <View style={styles.mainTouchView}>
              <TouchableOpacity style={[styles.colorButton,{marginBottom: 20,}]} 
                onPress={phoneNo}
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
export default Forget;