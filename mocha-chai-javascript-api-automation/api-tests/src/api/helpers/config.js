export const ussdSmartUser = Role('https://ussd.qa.wyzetalk.co.za/ussd/login', async t => {
   await ussdSmartLogin(t);
});

export const USSD_SMART_MEMBER = '27720000000' 
export const USSD_SMART_STRING = '*134*20002#' 

export const data_ussdSmartLogin = {
    'password': "5585", 
    'username': "wyzetalk"
};