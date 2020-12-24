import React, { useEffect, useState, } from 'react';
import { View,Text, TouchableOpacity, ScrollView, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Right, Left, Body, Icon, Button, Item, Input, Picker} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { createOrderActions } from '../actions/createOrder';
import AsyncStorage from '@react-native-community/async-storage';
let styles = require('../../../assets/styles/styles.js');

function CreateOrder() {
  const [inputs, setInputs] = useState({retail: 0,fuel: 0,fuel_volume: '',});
  const [retailer, setRetailer] = useState([]);
  const [fuel, setFuel] = useState([]);
  const [errors, setErrors] = useState(null);
  const [retailErrors, setRetailErrors] = useState(null);
  const [fuelErrors, setFuelErrors] = useState(null);
  const fetchRetailer = useSelector(state => state.fetchRetailer);
  const fetchFuel = useSelector(state => state.fetchFuel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createOrderActions.fetchRetailer(inputs));
  }, []);

  if (fetchRetailer.fetchRetailer && retailErrors === null) {
    if(fetchRetailer.fetchRetailer.error){
      setRetailErrors(fetchRetailer.fetchRetailer.error);
    }else{
      setRetailer(fetchRetailer.fetchRetailer);
      setRetailErrors(false);
    }
  }

  if(fetchFuel.fetchFuel && fuelErrors === null){
    if(fetchFuel.fetchFuel.error){
      setFuelErrors(fetchFuel.fetchFuel.error);
    }else{
      console.log(fetchFuel.fetchFuel)
      setFuel(fetchFuel.fetchFuel);
      setFuelErrors(false);
    }
  }

  function handleInputs(value,name) {
    setInputs(inputs => ({...inputs, [name]: value}));
  }

  function handleRetailOutlet(value,name) {
    setInputs(inputs => ({...inputs, [name]: value}));
    setInputs(inputs => ({...inputs, ['fuel']: 0}));
    retailer.map(item => {
      if(value === item.f_ro_id){
        setFuelErrors(null);
        setInputs(inputs => ({...inputs, ['dealer_id']: item.f_dealer_id}));
        dispatch(createOrderActions.fetchFuel(item.f_ro_id, item.f_dealer_id));
      }
    });
    
  }

  function handleFuel(value,name) {
    setInputs(inputs => ({...inputs, [name]: value}));
  }
  
  function addCart() {
    if(!inputs.retail){
      alert('Please Select Retail Outlet.')
    }else if(!inputs.fuel){
      alert('Please Select Fuel Type.')
    }else if(!inputs.fuel_volume){
      alert('Please Enter Quantity.')
    }else{
      Actions.addToCart({
        'ro_id':inputs.retail,
        'dealer_id':inputs.dealer_id,
        'product_id':inputs.fuel,
        'fuel_volume':inputs.fuel_volume
      })
    }
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,}}>
        <View style={{backgroundColor: '#29292a'}}>
          <Header transparent styles={{paddingLeft: 5,paddingRight: 5,}}>
            <Left styles={{flex:1}}>
              <Button transparent onPress={() => Actions.home()}>
                <Icon name="arrowleft" type="AntDesign" style={{fontSize: 20,color: '#fff',marginLeft: -10}}/>
              </Button>
            </Left>
            <Body styles={{flex:1}}>
              <Text style={{color:'#fff',fontSize:16,fontFamily: 'OpenSans-SemiBold',marginLeft: -50}}>Order Details</Text>
            </Body>
          </Header>
        </View>

        <View style={styles.mainContainerViewInputs}>
          <View style={styles.mainInputView}>
            <Text style={styles.mainInputsHeading}>
              Retail Outlet
            </Text>
            <View style={styles.mainInputMargin}>
              <Item
                regular
                picker
                style={styles.mainPickerInput}>
                <Picker
                  mode="dropdown"
                  placeholder="Select your Retailer"
                  style={styles.mainPicker}
                  selectedValue={inputs.retail}
                  onValueChange={(e) => handleRetailOutlet(e, 'retail')}
                >
                <Picker.Item label="Select Your Retailer" />
                { retailer.map((item, key)=>(
                  <Picker.Item label={item.f_name} value={item.f_ro_id} key={key} />)
                )}
                </Picker>
              </Item>
            </View>
          </View>

          <View style={styles.mainInputView}>
            <Text style={styles.mainInputsHeading}>
              Fuel Type
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
                  selectedValue={inputs.fuel}
                  onValueChange={(e) => handleFuel(e, 'fuel')}
                >
                <Picker.Item label="Select Fuel Type" />
                { fuel.map((item, key)=>(
                  <Picker.Item label={item.f_product_name} value={item.f_product_id} key={key} />)
                )}
                </Picker>
              </Item>
            </View>
          </View>
          
          <View style={styles.mainInputView}>
            <Text style={styles.mainInputsHeading}>
              Quantity
            </Text>
            <View style={styles.mainInputMargin}>
              <Item
                regular
                style={{}}>
                <Input
                  keyboardType="numeric"
                  placeholder={"Select Quantity"}
                  placeholderTextColor="#B2B6C1"
                  style={styles.inputContainer}
                  value={inputs.fuel_volume}
                  onChangeText={(e) => handleInputs(e, 'fuel_volume')}
                />
              </Item>
            </View>
          </View>

          {fuelErrors ? 
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Text style={[styles.accountColorText,styles.errorMsg]}>
                  {fuelErrors}
              </Text>
            </View>
            :
            <Text style={{marginTop:-20}}></Text>
          }

          {retailErrors ? 
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Text style={[styles.accountColorText,styles.errorMsg]}>
                  {retailErrors}
              </Text>
            </View>
            :
            <Text style={{marginTop:-20}}></Text>
          }

          <View style={styles.inputBtn}>
            <TouchableOpacity style={styles.colorButton} onPress={addCart} >
              <Text style={styles.plainText}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>

        </View>  
      </ScrollView>
    </View>
  );
}
export default CreateOrder;