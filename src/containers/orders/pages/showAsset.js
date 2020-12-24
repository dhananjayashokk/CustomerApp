import React, { useEffect,useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Right, Left, Body, Icon, Button, Card, CardItem, } from 'native-base';
let styles = require('../../../assets/styles/styles.js');

function ShowOrder() {

  const [modalVisible, setModalVisible] = useState(false);

  const deleteAsset = () => {
    setModalVisible(false);
  }

  return (
  	<View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,}}>
        <View style={{backgroundColor: '#29292a'}}>
          <Header transparent styles={{paddingLeft: 5,paddingRight: 5,}}>
            <Left styles={{flex:1}}>
              <Button transparent onPress={() => Actions.drawerOpen()}>
                <Icon name="menu" type="MaterialIcons" style={{fontSize: 26,color: '#FF8A01',marginLeft: -10}}/>
              </Button>
            </Left>
            <Body styles={{flex:1}}>
              <Text style={{color:'#fff',fontSize:16,fontFamily: 'OpenSans-SemiBold',marginLeft: -50}}>Show Assets</Text>
            </Body>
          </Header>
        </View>

        <View style={styles.mainNoteContainer}>
          <Text style={styles.mainNoteText}>Added Assets</Text>
        </View>
        <View style={styles.mainContainerCardView}>
          <Card style={styles.showAssetsCard}>
            <CardItem cardBody style={{}}>
              <View style={{flex: 1}}>
                <Text style={styles.showAssetsHeadingTxt}>Home</Text>
              </View>
              <View style={styles.showAssetsIconView}>
                <TouchableOpacity style={styles.showAssetsIconBg}>
                  <Icon name="pencil" type="EvilIcons" style={styles.showAssetsIcon}/>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.showAssetsIconBgg} onPress={() => setModalVisible(true)}>
                  <Icon name="cross" type="Entypo" style={styles.showAssetsIconCross}/>
                </TouchableOpacity>
              </View>
            </CardItem>
            <CardItem cardBody style={styles.showAssetsCardItemView}>
              <Text style={styles.showAssetsCardItemColorTxt}>Address : </Text>
              <Text style={styles.showAssetsCardItemTxt}>Sion Station</Text>
            </CardItem>
          </Card>
        </View>  
  		</ScrollView>
      <View style={styles.homeButtonView}>
        <TouchableOpacity style={styles.colorButton} onPress={() => Actions.addAsset()} >
          <Text style={styles.plainText}>ADD ASSETS</Text>
        </TouchableOpacity>
      </View> 

      <Modal
        style={styles.mainModel}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}>
        <View style={styles.mainModelView}>
          <View style={[styles.mainTextModelContainer,{height: 120,}]}>
            <Text style={styles.mainTextModelHeading}>ALERT</Text>
            <Text style={styles.mainTextModelSub}>Delete This Asset ?</Text>
            <View style={{flexDirection: 'row',justifyContent: 'flex-end'}}>
              <TouchableOpacity onPress={deleteAsset} style={styles.mainModelTouch}>
                <Text style={styles.mainModelTouchText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={deleteAsset} style={styles.mainModelTouch}>
                <Text style={styles.mainModelTouchText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

  	</View>
  );
}
export default ShowOrder;