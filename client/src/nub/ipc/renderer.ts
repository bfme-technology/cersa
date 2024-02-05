import { BrowserWindow,ipcMain } from "electron";
import { Connection, ConnectionBuilder } from "electron-cgi";
import { CONSTANTS, ENV, SUCCESS } from "./../../app/constants";

export interface NubIPCRenderer{
    init:(mainWindow:BrowserWindow)=>void,
    runAllProcess:()=>void,
    core_lookup:()=>void,
    core_init:()=>void,
    add_expense_data:()=>void,
    fetch_expense_data:()=>void,
    fetch_Lookup_data:()=>void,
    delete_expense_data:()=>void,
    fetch_expense:()=>void,
    fetch_profile:()=>void,
    fetch_expensejob_data:()=>void,
    mainWindow?:BrowserWindow,
    connection?:Connection,
}


export var ipcRenderer:NubIPCRenderer = {
    init: (mainWindow:BrowserWindow)=>{
        switch(process.env.NODE_ENV){
            case ENV.PROD:
                ipcRenderer.connection = new ConnectionBuilder()
                .connectTo(".\\core.exe")
                .build();
                break;
            case ENV.DEV:
            default:
                ipcRenderer.connection = new ConnectionBuilder()
                .connectTo("dotnet", "run", "--project", "./../core")
                .build();
                break;
        }
        

        ipcRenderer.connection.onDisconnect = () => {
            console.log("lost");
        };

        ipcRenderer.mainWindow = mainWindow;
        ipcRenderer.runAllProcess();
    },
    runAllProcess:()=>{
        ipcRenderer.core_init();
        ipcRenderer.core_lookup();
        ipcRenderer.add_expense_data();
        ipcRenderer.fetch_expense_data();
        ipcRenderer.fetch_Lookup_data();
        ipcRenderer.delete_expense_data();
        ipcRenderer.fetch_profile();
        ipcRenderer.fetch_expense();
        ipcRenderer.fetch_expensejob_data();
    },
    core_lookup:()=>{
        ipcMain.on(CONSTANTS.APP_REQUEST_GETTRANSECTIONTYPE,(param)=>{
            ipcRenderer.connection.send(CONSTANTS.CORE_LOOKUP, "Deepak Belbase",(err:ErrorCallback, response: string) => {
                if (err) {
                    // console.log('CONSTANTS.APP_ERROR',CONSTANTS.APP_ERROR);
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_ERROR, err);
                }
                else{
                    // console.log('CONSTANTS.APP_RESPONSE_GETTRANSECTIONTYPE',CONSTANTS.APP_RESPONSE_GETTRANSECTIONTYPE);
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_RESPONSE_GETTRANSECTIONTYPE, response);
                }
            });
        })
    },
    add_expense_data:()=>{
        ipcMain.on(CONSTANTS.APP_REQUEST_ADDEXPENSES,(events,args)=>{
            ipcRenderer.connection.send(CONSTANTS.MERCURY_REQUEST_ADDEXPENSES, args,(err:ErrorCallback, response: string) => {
                if (err) {
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_ERROR, err);
                }
                else{
                    // console.log("got from the Core App",args,response);
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_SUCCESS,SUCCESS.APP_RESPONSE_ADDEXPENSES )
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_RESPONSE_ADDEXPENSES, response);
                }
              });    
        })
    },
    fetch_expense_data:()=>{
        ipcMain.on(CONSTANTS.APP_REQUEST_FETCHEXPENSES,(events,args)=>{
            ipcRenderer.connection.send(CONSTANTS.MERCURY_REQUEST_FETCHEXPENSES, args,(err:ErrorCallback, response: string) => {
                if (err) {
                    // console.log(CONSTANTS.APP_RESPONSE_FETCHEXPENSES,"error",err);
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_ERROR, err);
                }
                else{
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_RESPONSE_FETCHEXPENSES, response);
                    // console.log(CONSTANTS.APP_RESPONSE_FETCHEXPENSES,response);
                }
              });    
        })
    },
    fetch_expense:()=>{
        ipcMain.on(CONSTANTS.APP_REQUEST_FETCHEXPENSE,(events,args)=>{
            ipcRenderer.connection.send(CONSTANTS.MERCURY_REQUEST_FETCHEXPENSE, args,(err:ErrorCallback, response: string) => {
                if (err) {
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_ERROR, err);
                }
                else{
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_RESPONSE_FETCHEXPENSE, response);
                }
              });    
        })
    },
    delete_expense_data:()=>{
        ipcMain.on(CONSTANTS.APP_REQUEST_DELETEEXPENSES,(events,args)=>{
            ipcRenderer.connection.send(CONSTANTS.MERCURY_REQUEST_DELETEEXPENSES, args,(err:ErrorCallback, response: string) => {
                if (err) {
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_ERROR, err);
                }
                else{
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_SUCCESS,SUCCESS.APP_RESPONSE_DELETEEXPENSES);
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_RESPONSE_DELETEEXPENSES, response);
                }
              });    
        })
    },
    fetch_expensejob_data:()=>{
        ipcMain.on(CONSTANTS.APP_REQUEST_FETCHEXPENSEJOBS,(events,args)=>{
            ipcRenderer.connection.send(CONSTANTS.MERCURY_REQUEST_FETCHEXPENSEJOBS, args,(err:ErrorCallback, response: string) => {
                if (err) {
                    // console.log(CONSTANTS.APP_RESPONSE_FETCHEXPENSES,"error",err);
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_ERROR, err);
                }
                else{
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_RESPONSE_FETCHEXPENSEJOBS, response);
                    // console.log(CONSTANTS.APP_RESPONSE_FETCHEXPENSES,response);
                }
              });    
        })
    },
    fetch_Lookup_data:()=>{
        ipcMain.on(CONSTANTS.APP_REQUEST_FETCHLOOKUPS,(events,args)=>{
            ipcRenderer.connection.send(CONSTANTS.MERCURY_REQUEST_FETCHLOOKUPS, args,(err:ErrorCallback, response: string) => {
                if (err) {
                    // console.log(CONSTANTS.APP_RESPONSE_FETCHEXPENSES,"error",err);
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_ERROR, err);
                }
                else{
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_RESPONSE_FETCHLOOKUPS, response);
                    // console.log(CONSTANTS.APP_RESPONSE_FETCHLOOKUPS,response);
                }
              });    
        })
    },
    fetch_profile:()=>{
        ipcMain.on(CONSTANTS.APP_REQUEST_FETCHPROFILE,(events,args)=>{
            ipcRenderer.connection.send(CONSTANTS.MERCURY_REQUEST_FETCHPROFILE, args,(err:any, response: any) => {
                if (err) {
                    console.log('CONSTANTS.APP_ERROR',err);
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_ERROR, err.Message);
                }
                else{
                    console.log('CONSTANTS.APP_RESPONSE_FETCHPROFILE',CONSTANTS.APP_RESPONSE_FETCHPROFILE);
                    ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_RESPONSE_FETCHPROFILE, response);
                }
              });    
        })
    },
    core_init:()=>{
        ipcRenderer.connection.send(CONSTANTS.CORE_INIT, "Deepak Belbase",(err:ErrorCallback, response: string) => {
            if (err) {
                ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_ERROR, err);
            }
            else{
                ipcRenderer.mainWindow.webContents.send(CONSTANTS.APP_RESPONSE_GETWELCOMEMESSAGE, response);
            }
          });
    },
}
