interface IConstant {
    APP_REQUEST_GETTRANSECTIONTYPE:string,
    APP_RESPONSE_GETTRANSECTIONTYPE: string,
    APP_ERROR:string,
    APP_SUCCESS:string,
    APP_RESPONSE_GETWELCOMEMESSAGE:string,
    APP_REQUEST_ADDEXPENSES:string,
    APP_RESPONSE_ADDEXPENSES:string,
    APP_REQUEST_FETCHEXPENSES:string,
    APP_RESPONSE_FETCHEXPENSES:string,
    CORE_LOOKUP:string,
    CORE_INIT:string,
    MERCURY_REQUEST_ADDEXPENSES:string,
    MERCURY_REQUEST_FETCHEXPENSES:string,
    APP_REQUEST_FETCHLOOKUPS:string,
    APP_RESPONSE_FETCHLOOKUPS:string,
    MERCURY_REQUEST_FETCHLOOKUPS:string,
    APP_REQUEST_DELETEEXPENSES:string,
    APP_RESPONSE_DELETEEXPENSES:string,
    MERCURY_REQUEST_DELETEEXPENSES:string,
    APP_REQUEST_FETCHEXPENSE:string,
    MERCURY_REQUEST_FETCHEXPENSE:string,
    APP_RESPONSE_FETCHEXPENSE:string,
    APP_REQUEST_FETCHPROFILE:string,
    MERCURY_REQUEST_FETCHPROFILE:string,
    APP_RESPONSE_FETCHPROFILE:string,
    APP_REQUEST_FETCHEXPENSEJOBS:string,
    MERCURY_REQUEST_FETCHEXPENSEJOBS:string,
    APP_RESPONSE_FETCHEXPENSEJOBS:string
};
interface IAlertMessages {
    APP_RESPONSE_ADDEXPENSES:string,
    APP_RESPONSE_FETCHEXPENSES:string,
    APP_RESPONSE_DELETEEXPENSES?:string
};

export const CONSTANTS:IConstant = {
    APP_REQUEST_GETTRANSECTIONTYPE:"app:request:getTransactionType",
    APP_RESPONSE_GETTRANSECTIONTYPE:"app:response:getTransactionType",
    APP_ERROR:"app:errors",
    APP_SUCCESS:"app:success",
    APP_REQUEST_ADDEXPENSES:"app:request:addexpenses",
    APP_RESPONSE_ADDEXPENSES:"app:response:addexpenses",
    MERCURY_REQUEST_ADDEXPENSES:"mercury:request:addexpenses",
    APP_REQUEST_FETCHEXPENSES:"app:request:fetchexpenses",
    APP_RESPONSE_FETCHEXPENSES:"app:response:fetchexpenses",
    APP_REQUEST_FETCHLOOKUPS:"app:request:fetchlookups",
    APP_RESPONSE_FETCHLOOKUPS:"app:response:fetchlookups",
    MERCURY_REQUEST_FETCHLOOKUPS:"mercury:request:fetchlookups",
    MERCURY_REQUEST_FETCHEXPENSES:"mercury:request:fetchexpenses",
    APP_RESPONSE_GETWELCOMEMESSAGE:"app:message",
    CORE_LOOKUP:"core:lookup",
    CORE_INIT:"core:init",
    APP_REQUEST_DELETEEXPENSES:"app:request:deleteexpense",
    APP_RESPONSE_DELETEEXPENSES:"app:response:deleteexpense",
    MERCURY_REQUEST_DELETEEXPENSES:"mercury:request:deleteexpense",
    APP_REQUEST_FETCHEXPENSE:"app:request:fetchexpense",
    MERCURY_REQUEST_FETCHEXPENSE:"mercury:request:fetchexpense",
    APP_RESPONSE_FETCHEXPENSE:"app:response:fetchexpense",
    //mercury:request:fetchprofile
    APP_REQUEST_FETCHPROFILE:"app:request:fetchprofile",
    MERCURY_REQUEST_FETCHPROFILE:"mercury:request:fetchprofile",
    APP_RESPONSE_FETCHPROFILE:"app:response:fetchprofile",
    APP_REQUEST_FETCHEXPENSEJOBS:"app:request:fetchexpensejobs",
    MERCURY_REQUEST_FETCHEXPENSEJOBS:"mercury:request:fetchexpensejobs",
    APP_RESPONSE_FETCHEXPENSEJOBS:"app:response:fetchexpensejobs"
}

export const ERRORS:IAlertMessages = {
    APP_RESPONSE_ADDEXPENSES:"Couldn't Add the Expense",
    APP_RESPONSE_FETCHEXPENSES:"Couldn't Fetch the Expense",
};
export const SUCCESS:IAlertMessages = {
    APP_RESPONSE_ADDEXPENSES:"Added the Entry in Expense Successfully!",
    APP_RESPONSE_FETCHEXPENSES:"Fetched the Expense Sheet Successfully!",
    APP_RESPONSE_DELETEEXPENSES:"Data Deleted from Expense Sheet SuccessFully"
};

export enum ENV{
    PROD="production",
    DEV=" development",
}