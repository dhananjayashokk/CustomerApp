import React from 'react';
import {Scene, Router, Drawer, Actions} from 'react-native-router-flux';
import Splash from '../containers/auth/pages/splash';
import LoginOptions from '../containers/auth/pages/loginOptions';
import Login from '../containers/auth/pages/login';
import Forget from '../containers/auth/pages/forget';
import ResetPassword from '../containers/auth/pages/resetPassword';
import SignUp from '../containers/auth/pages/signUp';
import GetOtp from '../containers/auth/pages/getOtp';
import VerifyOtp from '../containers/auth/pages/verifyOtp';
import Home from '../containers/home/pages/home';
import CreateOrder from '../containers/home/pages/createOrder';
import AddToCart from '../containers/home/pages/addToCart';
import ScheduleDelivery from '../containers/home/pages/scheduleDelivery';
import ShowOrder from '../containers/orders/pages/showOrder';
import OrderStatus from '../containers/orders/pages/orderStatus';
import ShowAsset from '../containers/orders/pages/showAsset';
import AddAsset from '../containers/orders/pages/addAsset';
import AddAddress from '../containers/orders/pages/addAddress';
import SaveAddress from '../containers/orders/pages/saveAddress';
import Profile from '../containers/user/pages/profile';
import DrawerComponent from '../components/drawerComponent';

const Routes = props => {
  return (
    <Router>
      <Scene key="mainNav" hideNavBar> 
        <Scene key="splash" component={Splash} hideNavBar />
        <Scene key="loginOptions" component={LoginOptions} hideNavBar />
        <Scene key="login" component={Login} hideNavBar />
        <Scene key="forget" component={Forget} hideNavBar />
        <Scene key="resetPassword" component={ResetPassword} hideNavBar />
        <Scene key="getOtp" component={GetOtp} hideNavBar />
        <Scene key="verifyOtp" component={VerifyOtp} hideNavBar />
        <Scene key="signUp" component={SignUp} hideNavBar />
        
        <Drawer 
          key="drawer"
          tapToClose={true}
          contentComponent={DrawerComponent}
          onOpen={() => Actions.refresh({key: 'drawer', open: true})}
          onClose={() => Actions.refresh({key: 'drawer', open: false})}>
          <Scene key="main" hideNavBar> 
            <Scene initial key="home" component={Home} hideNavBar />
            <Scene key="createOrder" component={CreateOrder} hideNavBar />
            <Scene key="addToCart" component={AddToCart} hideNavBar />
            <Scene key="scheduleDelivery" component={ScheduleDelivery} hideNavBar />
            <Scene key="showOrder" component={ShowOrder} hideNavBar />
            <Scene key="orderStatus" component={OrderStatus} hideNavBar />
            <Scene key="showAsset" component={ShowAsset} hideNavBar />
            <Scene key="addAsset" component={AddAsset} hideNavBar />
            <Scene key="addAddress" component={AddAddress} hideNavBar />
            <Scene key="saveAddress" component={SaveAddress} hideNavBar />
            <Scene key="profile" component={Profile} hideNavBar /> 
          </Scene>
        </Drawer>
      </Scene> 
    </Router>
  );
};

export default Routes;