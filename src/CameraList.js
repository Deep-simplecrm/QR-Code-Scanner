import React, { Component } from 'react';
class CameraList extends Component {
    
    render(){
        let deviceArr = [];
        if(!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
          console.log("enumerateDevices() not supported.");
          return;
        }   
        navigator.mediaDevices.enumerateDevices()
        .then(function(devices) {
            ///console.log(devices);
          devices.forEach(function(device) {
        if(device.kind=='videoinput')
        {
            let deviceList = {name:device.label, id:device.deviceId};
            deviceArr.push(deviceList);
            
        }
          });
        });
        return (data);
    }
}
export default CameraList;