export default () => {

    let sessionid = `${sessionid}`;

    const data_msg_ussdstr = {
        'msisdn': '27646559471',
        'sessionid': "postman-" + new Date().getTime(),
        'network': '1', 
        'type': '1', 
        'ussd': '*#',
        'msg': '*#',
    };
    
    const data_msg_end_session = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '3', 
        'ussd': '*134*20002#', 
        'msg': ''
    };
    
    const data_msg_1 = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '1'
    };    
    
    const data_msg_2 = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '2'
    };
    
    const data_msg_3 = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '3'
    };
    
    const data_msg_jobref = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '*#'
    };
    
    const data_msg_TestFirstName = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '*#'
    };

    const data_msg_TestLastName = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '*#'
    }; 
    
    const data_msg_msisdn = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '27720000000'
    };
    
    const data_msg_idnumber = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '*#'
    };
    
    const data_msg_institution = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '*#'
    };
    
    const data_msg_completed_highest = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '*#'
    };
    
    const data_msg_highest_qualification = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '*#'
    };
    
    const data_msg_other_relevant = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '*#'
    };
    
    const data_msg_current_town = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '*#'
    };
    
    const data_msg_postcode = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '*#'
    };

    const data_msg_empno = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '*#'
    };

    const data_msg_dob = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '*#'
    };

    const data_msg_someplace = {
        'msisdn': '27646559471',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134**##', 
        'msg': '*#'
    };
    
    return {
        data_msg_ussdstr,
        data_msg_end_session,
        data_msg_1,
        data_msg_2,
        data_msg_3,
        data_msg_jobref,
        data_msg_TestFirstName,
        data_msg_TestLastName,
        data_msg_msisdn,
        data_msg_idnumber,
        data_msg_institution,
        data_msg_completed_highest,
        data_msg_highest_qualification,
        data_msg_other_relevant,
        data_msg_current_town,
        data_msg_postcode,
        data_msg_empno,
        data_msg_dob,
        data_msg_someplace
      };
    };
    