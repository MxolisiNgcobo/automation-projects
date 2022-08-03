import { expect } from "chai";

import { data_ussdSmartLogin,baseUrl } from '../helpers/config'
import data_files from "../atoms/data-files";

let Cookie = `${Cookie}`;

const { data_msg_ussdstr,
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
        } = data_files()

    it('POST /login-test', () => {
        return baseUrl
        .post('/ussd/login')
        .send(data_ussdSmartLogin)
        .then((res) => {
            Cookie = res.headers["set-cookie"][0].split(';')[0];
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
        });
    });

    it('POST /dial-ussd-string', () => {     
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', Cookie)
        .send(data_msg_ussdstr)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Welcome to the Anglo American Job Opportunities");
        });
    });

    it('POST /access-portal', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_1)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Job Applications");
        });
    });

    it('POST /apply', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_1)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Please enter Job Reference Number");
        }); 
    });

    it('POST /JOB REF', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_jobref)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Application for REF3226E");
        }); 
    });

    it('POST /start', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_1)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Are you an Anglo American Employee");
        }); 
    });

    it('POST /Are you an Anglo American Employee = No', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_2)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Please specify the Applicant First Name");
        }); 
    });

    it('POST /Applicant First Name', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_TestFirstName)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Please provide the Applicant Surname");
        }); 
    });
    
    it('POST /Applicant Surname', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_TestLastName)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Please provide the Applicant Mobile Number");
        }); 
    });

    it('POST /Applicant Mobile Number', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_msisdn)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Please choose your type of ID");
        }); 
    });

    it('POST /Please choose your type of ID (ID)', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_1)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Do you have the right to work");
        }); 
    });

    it('POST /Do you have the right to work', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_1)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Select your nationality");
        }); 
    });
  
    it('POST /Select your nationality', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_1)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Insert your 13 digit ID");
        }); 
    });

    it('POST /Select your nationality', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_idnumber)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Select your gender");
        }); 
    });

    it('POST /Select your gender', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_2)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Select your race");
        }); 
    });

    it('POST /Select your race', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_1)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("disability");
        }); 
    });

    it('POST /Have a disability', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_2)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("required certifications");
        }); 
    });

    it('POST /Required certifications', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_1)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("highest qualification");
        }); 
    });

    it('POST /Highest qualification', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_1)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Institution");
        }); 
    });

    it('POST /Institution', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_institution)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("completed your highest");
        }); 
    });

    it('POST /Completed your highest', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_completed_highest)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Name of Highest Qualification");
        }); 
    });

    it('POST /Name of Highest Qualification', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_highest_qualification)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("other relevant certifications");
        }); 
    });

    it('POST /Other relevant certifications', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_other_relevant)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("How many Kms");
        }); 
    });

    it('POST /How many Kms', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_2)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Indicate your current Town or Village");
        }); 
    });

    it('POST /Indicate your current Town or Village', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_current_town)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Please provide your postcode");
        }); 
    });

    it('POST /Please provide your postcode', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_postcode)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Indicate your valid drivers licence");
        }); 
    });

    it('POST /Indicate your valid drivers licence', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_2)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Select how many years experience");
        }); 
    });

    it('POST /Select how many years experience', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_3)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Do you consent");
        }); 
    });

    it('POST /Do you consent', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_1)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("Application successfully submitted");
        }); 
    });

    it('POST /End Session', () => {
        return baseUrl
        .post('/ussd/dialer')
        .set('Cookie', `${Cookie}`)
        .send(data_msg_end_session)
        .then((res) => {
            expect(res).to.not.be.empty;
            expect(res.statusCode).to.eq(200);
            expect(res.body.msg).to.contain("");
        }); 
    });
