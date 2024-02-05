// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import {contextBridge, ipcRenderer } from "electron";
type EventCallback = (_event: any,param:any) => any

contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);
contextBridge.exposeInMainWorld('coreAPI', {
    on: (_eventName:string,callback:EventCallback)=>
    { 
        ipcRenderer.on(_eventName,callback) 
    }
});