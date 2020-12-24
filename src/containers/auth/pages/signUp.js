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
import { signupActions } from '../actions/signup';
import {useDispatch, useSelector} from 'react-redux';
let styles = require('../../../assets/styles/styles.js');

function SignUp({phone_no}) {
  const [inputs, setInputs] = useState({firstname: '',lastname: '',email: '',password: '',gstin: '',phoneno: ''});
  const [errors, setErrors] = useState(null);
  const [message, setMessage] = useState(null);
  const signup = useSelector(state => state.signup);
  const dispatch = useDispatch();

  function handleFirstName(value) {
    setInputs(inputs => ({...inputs, ['firstname']: value}));
  }

  function handleLastName(value) {
    setInputs(inputs => ({...inputs, ['lastname']: value}));
  }

  function handleEmail(value) {
    setInputs(inputs => ({...inputs, ['email']: value}));
  }

  function handlePassword(value) {
    setInputs(inputs => ({...inputs, ['password']: value}));
  }

  function handleGstin(value) {
    setInputs(inputs => ({...inputs, ['gstin']: value}));
  }

  function handlePhoneNo(value) {
    setInputs(inputs => ({...inputs, ['phoneno']: value}));
  }

  function checkSignup() {
    if(!inputs.firstname){
      setErrors('Please Enter First Name');
    }else if(!inputs.lastname){
      setErrors('Please Enter Last Name');
    }else if(!inputs.email){
      setErrors('Please Enter Email');
    }else if(!inputs.password){
      setErrors('Please Enter Password');
    }else if(!inputs.gstin){
      setErrors('Please Enter Gst No.');
    }else{
      setErrors(null);
      dispatch(signupActions.signup(inputs));
    }
    
  }

  if (signup.error && errors === null) {
    if(signup.signup.error){
      setErrors(signup.signup.error);
    }
  }

  if (signup.signup && errors === null) {
    if(signup.signup.data){
      setErrors(false);
      Actions.login({'register_success':'Register successfully please login.'})
    }
  }

  useEffect(() => {
    if (phone_no && errors === null) {
      if(phone_no){
        setInputs(inputs => ({...inputs, ['phoneno']: phone_no}));
      }
    }
  }, []);


  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}> 
        <View style={styles.mainContainerView}>

          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Image
              style={[styles.logo,{height:170}]}
              resizeMode={'contain'}
              source={require('../../../assets/images/logo_main.png')}
            />
            <Text style={styles.mainHeadingText}>OTP Verified</Text>
            <Text style={styles.mainSubText}>Enter your name, email and password to create an account</Text>
          </View>

          <View style={styles.mainInputView}>
            
            <View style={{marginBottom:15}}>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"First Name"}
                  placeholderTextColor="#B2B6C1"
                  style={{ height: 45, fontFamily: 'OpenSans-Regular'}}
                  onChangeText={e => handleFirstName(e)}
                />
              </Item>
              
            </View>

            <View style={{marginBottom:15}}>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"Last Name"}
                  placeholderTextColor="#B2B6C1"
                  style={{ height: 45, fontFamily: 'OpenSans-Regular'}}
                  onChangeText={e => handleLastName(e)}
                />
              </Item>
              
            </View>

            <View style={{marginBottom:15}}>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"Email"}
                  placeholderTextColor="#B2B6C1"
                  style={{ height: 45, fontFamily: 'OpenSans-Regular'}}
                  onChangeText={e => handleEmail(e)}
                />
              </Item>
              
            </View>

            <View style={{marginBottom:15}}>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"Enter Password"}
                  placeholderTextColor="#B2B6C1"
                  secureTextEntry={true}
                  style={{ height: 45, fontFamily: 'OpenSans-Regular'}}
                  onChangeText={e => handlePassword(e)}
                />
              </Item>
              
            </View>

            <View style={{marginBottom:15}}>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"Gst No"}
                  placeholderTextColor="#B2B6C1"
                  style={{ height: 45, fontFamily: 'OpenSans-Regular'}}
                  onChangeText={e => handleGstin(e)}
                />
              </Item>
              
            </View>

            <View style={{marginBottom:15}}>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"Phone No"}
                  placeholderTextColor="#B2B6C1"
                  style={{ height: 45, fontFamily: 'OpenSans-Regular'}}
                  disabled
                  value={inputs.phoneno}
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
              <Text style={{marginTop:-10}}></Text>
            }

            <View style={{marginTop: -30}}>
              <TouchableOpacity style={[styles.colorButton,{marginBottom: 20,}]} 
                onPress={() => checkSignup()}
              >
                <Text style={styles.plainText}>REGISTER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default SignUp;