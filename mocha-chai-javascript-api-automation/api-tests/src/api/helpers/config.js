export const apiUser = Role('https://any-api.com/ebay_com', async t => {
   await ussdSmartLogin(t);
});

export const USSD_SMART_MEMBER = '27646559471' 
export const USSD_SMART_STRING = '**123**' 

export const data_ussdSmartLogin = {
    'password': "****", 
    'username': "****"
};