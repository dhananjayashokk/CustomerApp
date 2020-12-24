import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import {Icon, Item, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {forgetActions} from '../actions/forget';
import {resetActions} from '../actions/reset';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
let styles = require('../../../assets/styles/styles.js');

function ResetPassword({phone_no}) {
  
  const [inputs, setInputs] = useState({password: '',phoneno:'', otp_input: ''});
  const [errors, setErrors] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const resetpassword = useSelector(state => state.resetpassword);
  const forgetpassword = useSelector(state => state.forgetpassword);
  const dispatch = useDispatch();

  const passwordChange = () => {
    setModalVisible(false);
    Actions.login();
  }

  function handleChange(value) {
    setInputs(inputs => ({...inputs, ['password']: value}));
  }

  function handleConfirmChange(value) {
    setInputs(inputs => ({...inputs, ['otp_input']: value}));
  }


  function reset() {
    setErrors(null)
    dispatch(resetActions.resetpassword(inputs));
  }

  useEffect(() => {
    if (forgetpassword.forgetpassword && errors === null) {
      if(forgetpassword.forgetpassword.data){
        setInputs(inputs => ({...inputs, ['session_id']: forgetpassword.forgetpassword.data}));
        setInputs(inputs => ({...inputs, ['phone_no']: phone_no}));
        setInputs(inputs => ({...inputs, ['phoneno']: phone_no}));
      }
    }
  }, []);

  if (resetpassword.error && errors === null) {
    if(resetpassword.resetpassword.error){
      setErrors(resetpassword.resetpassword.error);
    }
  }

  if (resetpassword.resetpassword && errors === null) {
    if(resetpassword.resetpassword.data){
      setErrors(false);
      setModalVisible(true);
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
            <Text style={styles.mainHeadingText}>Reset Password</Text>
            <Text style={styles.mainSubText}>Mobile number has to be verified to reset password</Text>
          </View>

          <View style={styles.mainInputView}>

            <View style={{marginBottom:15}}>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"Enter New Password"}
                  placeholderTextColor="#B2B6C1"
                  secureTextEntry={true}
                  style={{ height: 45, fontFamily: 'OpenSans-Regular'}}
                  onChangeText={e => handleChange(e)}
                />
              </Item>
            
            </View>

            <View style={{marginBottom:15}}>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"Enter OTP"}
                  placeholderTextColor="#B2B6C1"
                  style={{ height: 45, fontFamily: 'OpenSans-Regular'}}
                  onChangeText={e => handleConfirmChange(e)}
                />
              </Item>
            
            </View>

            {errors ? 
              <View style={{justifyContent:'center', alignItems:'center', marginTop:-15}}>
                <Text style={[styles.accountColorText,styles.errorMsg]}>
                    {errors}
                </Text>
              </View>
              :
              <Text style={{margin:-10}}></Text>
            }
          
            <View style={styles.mainTouchView}>
              <TouchableOpacity style={[styles.colorButton,{marginBottom: 20,}]} 
               onPress={reset}
              >
                <Text style={styles.plainText}>RESET PASSWORD</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <Modal
        style={styles.mainModel}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
      }}>
        <View style={styles.mainModelView}>
          <View style={[styles.mainTextModelContainer,{height: 150}]}>
            <Text style={styles.mainTextModelHeading}>ALERT</Text>
            <Text style={styles.mainTextModelSub}>Password Changed Sucessfully</Text>
            <TouchableOpacity onPress={passwordChange} style={styles.mainModelTouch}>
              <Text style={styles.mainModelTouchText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
export default ResetPassword;