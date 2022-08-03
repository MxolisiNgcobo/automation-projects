export const cookieStr = resp.headers["set-cookie"][0].split(';')[0];
export const cookieObj = Cookie.parse(cookieStr);


//`${Cookie}`
//`${sessionid}`