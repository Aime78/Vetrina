import React from 'react';
import {DisableGreen, Disable, CommingSoon} from './components/Status/Status';
import {Image} from 'react-native';

const methods = [
  {
    id: 1,
    method: <Image source={require('assets/cash.png')} />,
    methodName: 'Cash',
    status: <DisableGreen />,
  },
  {
    id: 2,
    method: <Image source={require('assets/bank.png')} />,
    methodName: 'Wire Transfer',
    status: <Disable />,
  },
  {
    id: 3,
    method: <Image source={require('assets/stripe.png')} />,
    methodName: 'Stripe',
    status: <Disable />,
  },
  {
    id: 4,
    method: <Image source={require('assets/paypall.png')} />,
    methodName: 'Paypal',
    status: <Disable />,
  },
  {
    id: 5,
    method: <Image source={require('assets/razoplay.png')} />,
    methodName: 'Razoplay',
    status: <Disable />,
  },
  {
    id: 6,
    method: <Image source={require('assets/alipay.png')} />,
    methodName: 'AliPay',
    status: <CommingSoon />,
  },
  {
    id: 7,
    method: <Image source={require('assets/paystack.png')} />,
    methodName: 'Paystack',
    status: <CommingSoon />,
  },
];

export default methods;
