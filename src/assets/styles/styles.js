import {Dimensions, StyleSheet} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
let primaryColor = '#FF8A01';
let secondaryColor = '#FFFFFF';
let textColor= '#B2B6C1';
let lineColor = '#D3D3D3';

module.exports = StyleSheet.create({

//Common Container
	
	mainContainer: {
  	flex: 1,
  	backgroundColor: secondaryColor,
  	justifyContent: 'center',
	},

  mainContainerView:{
    flex: 1,
    justifyContent:'center',
  },

  mainContainerViewInputs:{
    flex: 1,
    justifyContent:'center',
    paddingTop: 50
  },

  mainContainerCardView:{
    flex: 1,
    justifyContent:'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  mainContainerBottomView:{
    flex: 1,
    justifyContent: 'flex-end',
  },

  logo:{
    height:220,
    width: 230,
  },

  mainHeadingText:{
    fontSize: 15,
    fontFamily: 'OpenSans-Bold',
    color: textColor,
    textAlign: 'center',
    marginTop:-30
  },

  mainSubText:{
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: textColor,
    textAlign: 'center',
    paddingVertical: 10,
    marginBottom: 10,
  },

  inputText:{
    backgroundColor: '#F8F8F8',
  },

  mainTouchView:{
    marginTop: -30,
  },

  errorMsg:{
    paddingVertical:10,
  },

  mainInputMargin:{
    marginVertical: 10,
  },

  mainPickerInput:{
    height: 45,
    backgroundColor: '#F8F8F8',
  },

  mainPicker:{
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#111111',
  },

  mainInputView:{
    flex: 1,
    paddingHorizontal: 10,
  },

  mainInputsHeading:{
    color:'#000',
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
  },

  inputContainer:{
    height: 45, 
    fontFamily: 'OpenSans-Regular',
    backgroundColor: '#F8F8F8',
  },

  inputBtn:{
    marginTop: -20,
    paddingHorizontal: 10,
  },

  mainNoteContainer:{
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  mainNoteText:{
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: '#B2B6C1',
  },

//Buttons 
  
  colorButton:{
    backgroundColor: primaryColor,
    paddingVertical: 10,
    marginTop: 30,
  },

  colorButtonFull:{
    backgroundColor: primaryColor,
    paddingVertical: 10,
    width: width,
  },

  noColorButton:{
    backgroundColor: secondaryColor,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: lineColor,
    marginTop: 20,
  },

  plainText:{
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
  },

  coloredText:{
    color: primaryColor,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
  },

//Splash

	splashContainer: {
    flex: 1,
    backgroundColor: secondaryColor,
    justifyContent: 'center',
	},

	splashImage:{
		alignSelf: 'center',
    height: '50%',
    width: '50%',
	},

//Login Options

  logOptImageContainer:{
    flex:2,
    width: 280,
    height: 280,
    alignSelf: 'center',
  },

  logOptTextContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  logOptText:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    marginBottom: 15,
  }, 

  logOptTextDescription:{
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    width: 290,
  },

  logOptButtons:{
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

//login

  forgetText:{
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
    color: '#FF8A01',
  },

  lineView:{
    flexDirection: 'row',
    marginVertical: 10,
  },

  line:{
    borderBottomWidth: 1,
    borderColor: textColor,
    width: '45%',
  },

  lineText:{
    fontSize: 14,
    top: 7,
    fontFamily: 'OpenSans-Regular',
    paddingHorizontal:5,
    textAlign: 'center',
    color: textColor,
  },

  accountTextView:{
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 10,
  },

  accountText:{
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    color: textColor,
  },

  accountColorText:{
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    color: '#FF6F01',
  },

//Sign Up

//Home

  homeContainer:{
    flex:1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  homeCard:{
    flex:1,
    marginTop: 10,
  },

  homeCardItem:{
    marginHorizontal: 10,
    marginVertical: 5,
  },

  homeCardItemView:{
    flexDirection: 'row',
  },

  homeCardItemText:{
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
  },

  homeCardItemSubText:{
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    marginLeft: -10,
    width: 280,
  },

  homeCardItemIcon:{
    fontSize: 16,
    color: '#FF8A01',
  },

  homeButtonView:{
    paddingHorizontal: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    marginTop: -20,
  },

  homeColorText:{
    color: '#ff9f00',
    fontSize: 12,
  },

  homeIcon:{
    fontSize: 12,
    color: '#000',
  },

//add To Cart

  cartCardItem:{
    paddingHorizontal: 10,
    marginVertical: 5,
  },

  cartCardItemIcon:{
    fontSize: 20,
    color: '#FF8A01',
    marginLeft: -5,
  },

  cartCardHeadingTxt:{
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    marginLeft: -10,
  },

  cartCardTxt:{
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
  },

  cartCardStyleTxt:{
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    
  },

  cartCardNoteTxt:{
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
  },

  cartCardBtn:{
    marginTop: -30,
  },

//Schedule delivery

  sdIcon:{
    color: '#ff9f00',
    fontSize: 26,
    marginLeft: -7,
  },

  sdDateText:{
    color:'#111111',
    fontSize:14,
    fontFamily: 'OpenSans-SemiBold',
    marginLeft: -5,
  },

//Show Order

  showOrderCard:{
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  showOrderCardItem:{
    marginVertical: 2,
  },

  showOrderHeadingTxt:{
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    color: '#B2B6C1',
  },

  showOrderHeadingTxtView:{
    justifyContent: 'flex-end',
  },

  showOrderHeadingTxtLeft:{
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#B2B6C1',
  },

  showOrderViewTxt:{
    flexDirection: 'row',
  },

  showOrderColorTxt:{
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: '#FF8A01',
  },

  showOrderRegularTxt:{
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#B2B6C1',
  },

  showOrderStatus:{
    width: 10,
    height: 10,
    backgroundColor: '#ff9f00',
    borderRadius: 10/2,
    alignSelf: 'center',
    marginTop: 2,
    marginLeft: 3,
  },

    showOrderStatusCancel:{
    width: 10,
    height: 10,
    backgroundColor: '#ff0000',
    borderRadius: 10/2,
    alignSelf: 'center',
    marginTop: 2,
    marginLeft: 3,
  },


  showOrderStatusComplete:{
    width: 10,
    height: 10,
    backgroundColor: '#00ff00',
    borderRadius: 10/2,
    alignSelf: 'center',
    marginTop: 2,
    marginLeft: 3,
  },


  showOrderBtn:{
    flex: 1,
    alignSelf: 'flex-end',
    marginTop: -30,
  },

  showOrderTouchBtn:{
    backgroundColor: primaryColor,
    paddingVertical: 10,
    marginTop: 30,
    width: width/3,
  },

//Order Status
  
  orderStatusContainer:{
    flex: 1,
    justifyContent:'center',
    paddingTop: 20,
  },

  orderStatusText:{
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: '#B2B6C1',
    marginTop: -5, 
    paddingLeft: '25%',
  },

// Show Assets
  
  showAssetsCard:{
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  showAssetsHeadingTxt:{
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    color: '#FF8A01',
  },

  showAssetsIconView:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  showAssetsIconBg:{
    backgroundColor: '#F0F0F0',
    width: 30,
    height: 30,
    borderRadius: 30/2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },

  showAssetsIconBgg:{
    backgroundColor: '#F0F0F0',
    width: 30,
    height: 30,
    borderRadius: 30/2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  showAssetsIcon:{
    fontSize: 30,
    color: '#FF8A01',
    marginLeft: 5,
  },

  showAssetsIconCross:{
    fontSize: 30,
    color: '#FF8A01',
    alignSelf: 'center',
    marginLeft: 3
  },

  showAssetsCardItemView:{
    flexDirection: 'row',
    marginTop: 5,
  },

  showAssetsCardItemColorTxt:{
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    color: '#FF8A01',
  },

  showAssetsCardItemTxt:{
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    width: 250,
    textAlign: 'justify',
    color: '#B2B6C1',
  },

//Profile

  profileContent:{
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomColor: '#E1E7ED',
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },

  profileHeadingText:{
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: '#000',
    textAlign: 'justify',
    marginLeft: -10,
  },

  profileSubText:{
    flex: 1,
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color:'#B2B6C1',
  },

//Model

  mainModel:{
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainModelView:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 10,
  },

  mainTextModelContainer:{
    height: 100,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  mainTextModelHeading:{
    fontSize: 18,
    color: '#000',
    fontFamily: 'OpenSans-SemiBold',
  },

  mainTextModelSub:{
    fontSize: 18,
    color: '#2E2E2E',
    paddingVertical: 5,
  },

  mainModelTouch:{
    alignSelf:'flex-end',
    marginTop: 15,
    marginLeft: 20,
  },

  mainModelTouchText:{
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },

//Drawer Component

	drawerViewContainer:{
		flex:1,
    backgroundColor:'#323232',
    height: height,
    width: '100%',
	},

	drawerListItem:{
    borderBottomColor: '#444', 
    borderBottomWidth: 1,
    height: 45,
  	},

  drawerTouch:{
    flexDirection: 'row',
    marginLeft: -55,
  },

	drawerListIcon:{
		fontSize: 16,
		color: '#ff6200',
	},

	drawerText:{
  	color: textColor,
  	fontSize: 14,
  	fontFamily: 'OpenSans-SemiBold',
    paddingHorizontal: 10,
  },

//Blank 

	blankConatiner:{
		flex: 1,
		backgroundColor: '#fff',
	},

	blankConatinerView:{
		flex:1,
		justifyContent: 'center',
	},

	blankViewHeadText:{
		color: '#000',
		fontSize: 22,
		textAlign: 'center',
		fontFamily: 'OpenSans-SemiBold',
	},

	blankViewSubText:{
		color: '#000',
		fontSize: 12,
		textAlign: 'center',
		fontFamily: 'OpenSans-Regular',
	},

});