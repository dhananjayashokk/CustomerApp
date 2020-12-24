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
import {loginActions} from '../actions/login';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
let styles = require('../../../assets/styles/styles.js');

function Login({register_success}) {
  const [inputs, setInputs] = useState({username: '',password: '',});
  const [errors, setErrors] = useState(null);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (register_success && errors === null) {
      if(register_success){
        setErrors(register_success);
      }
    }
  }, []);

  function handleInputs(value,name) {
    setInputs(inputs => ({...inputs, [name]: value}));
  }

  function checkLogin() {
    setErrors(null);
    dispatch(loginActions.login(inputs));
  }

  async function loadAsync(user){
    await AsyncStorage.setItem('user',JSON.stringify(user));
    Actions.replace('drawer');
  }

  if (auth.error && errors === null) {
    if(auth.auth.error){
      setErrors(auth.auth.error);
    }
  }

  if (auth.auth && errors === null) {
    if(auth.auth[0]){
      setErrors(false)
      loadAsync(auth.auth[0]);
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
            <Text style={styles.mainHeadingText}>Login to your account</Text>
            <Text style={styles.mainSubText}>Enter your email and password to login</Text>
          </View>

          <View style={styles.mainInputView}>
           
            <View style={{marginBottom:15}}>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"Email"}
                  placeholderTextColor="#B2B6C1"
                  style={{ height: 45, fontFamily: 'OpenSans-Regular'}}
                  onChangeText={(e) => handleInputs(e, 'username')}
                />
              </Item>
            </View>

            <View>
              <Item
                regular
                style={styles.inputText}>
                <Input
                  placeholder={"Password"}
                  placeholderTextColor="#B2B6C1"
                  secureTextEntry={true}
                  style={{ height: 45, fontFamily: 'OpenSans-Regular'}}
                  onChangeText={(e) => handleInputs(e, 'password')}
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
              <Text style={{marginTop:10}}></Text>
            }

            <View style={{marginTop: -30}}>
              <TouchableOpacity style={[styles.colorButton,{marginBottom: 20,}]} 
                onPress={() => checkLogin()}
              >
                <Text style={styles.plainText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => Actions.forget()}>
                <Text style={styles.forgetText}>Forget Password?</Text>
              </TouchableOpacity>
              <View style={styles.lineView}>
                <Text style={styles.line}></Text>
                <Text style={styles.lineText}>or</Text>
                <Text style={styles.line}></Text>
              </View>

              <View style={styles.accountTextView}>
                <Text style={styles.accountText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => Actions.getOtp()}>
                  <Text style={styles.accountColorText}> Signup</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default Login;