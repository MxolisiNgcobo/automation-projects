import { expect } from "chai";
import request from "supertest";


export  const data_ussdSmartLogin = {
    'password': "5585", 
    'username': "wyzetalk"};

export const baseUrl = request("https://ussd.qa.wyzetalk.co.za")
