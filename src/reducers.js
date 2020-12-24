import {combineReducers} from 'redux';
import authentication from './containers/auth/reducers/login';
import forgetpassword from './containers/auth/reducers/forget';
import resetpassword from './containers/auth/reducers/reset';
import getOtp from './containers/auth/reducers/getOtp';
import verifyOtp from './containers/auth/reducers/verifyOtp';
import signup from './containers/auth/reducers/signup';
import home from './containers/home/reducers/home';
import fetchRetailer from './containers/home/reducers/fetchRetailer';
import fetchFuel from './containers/home/reducers/fetchFuel';
import fetchFuelPrice from './containers/home/reducers/fetchFuelPrice';
import fetchDeliveryTax from './containers/home/reducers/fetchDeliveryTax';
import scheduleDelivery from './containers/home/reducers/scheduleDelivery';
import profile from './containers/user/reducers/profile';
import order from './containers/orders/reducers/order';
import fetchFuelAsset from './containers/orders/reducers/fetchFuelAsset';
import timeSlots from './containers/home/reducers/timeSlot';
import paymentMode from './containers/home/reducers/paymentMode';

export default combineReducers({
	auth: authentication,
	forgetpassword: forgetpassword,
	resetpassword: resetpassword,
	getOtp: getOtp,
	verifyOtp: verifyOtp,
	signup: signup,
	home: home,
	fetchRetailer: fetchRetailer,
	fetchFuel: fetchFuel,
	fetchFuelPrice: fetchFuelPrice,
	fetchDeliveryTax: fetchDeliveryTax,
	scheduleDelivery: scheduleDelivery,
	profile: profile,
	order: order,
	fetchFuelAsset: fetchFuelAsset,
	timeSlots:timeSlots,
	paymentMode:paymentMode
});