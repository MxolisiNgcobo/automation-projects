export default () => {

    let sessionid = `${sessionid}`;

    const data_msg_ussdstr = {
        'msisdn': '27720000000',
        'sessionid': "postman-" + new Date().getTime(),
        'network': '1', 
        'type': '1', 
        'ussd': '*134*20002#',
        'msg': '*134*20002#',
    };
    
    const data_msg_end_session = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '3', 
        'ussd': '*134*20002#', 
        'msg': ''
    };
    
    const data_msg_1 = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': '1'
    };    
    
    const data_msg_2 = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': '2'
    };
    
    const data_msg_3 = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': '3'
    };
    
    const data_msg_jobref = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': 'REF3226E'
    };
    
    const data_msg_TestFirstName = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': 'TestFirstName'
    };

    const data_msg_TestLastName = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': 'TestLastName'
    }; 
    
    const data_msg_msisdn = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': '27720000000'
    };
    
    const data_msg_idnumber = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': '8101015086085'
    };
    
    const data_msg_institution = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': 'Someplace'
    };
    
    const data_msg_completed_highest = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': '1998'
    };
    
    const data_msg_highest_qualification = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': 'SomeQuali'
    };
    
    const data_msg_other_relevant = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': 'OtherRelevant'
    };
    
    const data_msg_current_town = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': 'TownVillage'
    };
    
    const data_msg_postcode = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': '6660'
    };

    const data_msg_empno = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': '6061480'
    };

    const data_msg_dob = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': '19810101'
    };

    const data_msg_someplace = {
        'msisdn': '27720000000',
        'sessionid': `${sessionid}`, 
        'network': '1', 
        'type': '2', 
        'ussd': '*134*20002#', 
        'msg': 'someplace'
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
    