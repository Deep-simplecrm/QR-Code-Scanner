import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
//import  CameraList  from "./CameraList";
const { createCanvas } = require('canvas');


class QRCodeScanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 300,
      result: 'No result',
      jsonData: [],
      displayScanner: true,
      cameraView:'rear',
      deviceId:'',
      facingMode:'rear',
      legacyMode:false,
      cameraList:[]      
    }    
    this.handleChangeCamera = this.handleChangeCamera.bind(this);
    this.handleFacingModeChange = this.handleFacingModeChange.bind(this);
    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }
  
  componentDidMount(){
    // if(!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    //   //alert("enumerateDevices() not supported.");
    //   //return;
    // }   
    // let self =this;
    // navigator.mediaDevices.enumerateDevices()
    // .then(function(devices) {
    //   let deviceNo = 1;
    //   devices.forEach(function(device) {
        
    //     if(device.kind=='videoinput')
    //     {
            
    //         let deviceList = {name:'Camera '+deviceNo, id:device.deviceId};
    //         deviceNo++;      
    //         self.setState({cameraList:self.state.cameraList.concat(deviceList)});
    //     }
    //   });
    // });
  
    
  }
  handleScan(data){
    if(data != null){
      this.setState({
        result: data,
        delay: false,
      });
      this.getJsonFormatData(data);
    }

  }
  handleLoad(){
    var _props = this.props,
	          delay = _props.delay,
	          onLoad = _props.onLoad;

	      var preview = this.els.preview;
	      preview.play();

	      if (typeof onLoad == 'function') {
	        onLoad();
	      }

	      if (typeof delay == 'number') {
	        this.timeout = setTimeout(this.check, delay);
	      }

	      // Some browsers call loadstart continuously
	      preview.removeEventListener('loadstart', this.handleLoadStart);
	    
  }
  
  handleChangeCamera(e){   
    this.setState({deviceId:e.target.value});

  }
  handleFacingModeChange(e){   
    //alert(e.target.value);
    this.setState({facingMode:e.target.value});
  }
  getJsonFormatData(data){
    const res = data.split(',');
    console.log(res);
    let email_id = res[3].split(': ');
    let phone = res[2].split(': ');
    let adderss_res = res[4].split(': ');
    let image_res = res[9].split('Powerful');
    let address = adderss_res[1]+ ',' + res[5]+ ',' + res[6]+ ',' + res[7];
    let extractJsonData = {Name:res[0], Email:email_id[1], Phone:phone[1], Address:address, Website:res[8], image: image_res[1]};
    this.setState({jsonData: extractJsonData, displayScanner: false});
    // const canvas = createCanvas(200, 200);
    // const ctx = canvas.getContext('2d', { pixelFormat: 'A8' });
    // console.log(ctx.putImageData(image_res[1]);
  }
  handleError(err){
    console.error(err);
  }
  render(){
    const previewStyle = {
      height: '100%',
      width: '100%',
    }

    return(
      <div>
        
    
        <p>
        <button onClick={this.handleFacingModeChange} onClickCapture={this.handleFacingModeChange} value="rear">Back Camera</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.handleFacingModeChange} onClickCapture={this.handleFacingModeChange} value="front">Front Camera</button> 
        
        </p>
        {/* <select onChange={this.handleFacingModeChange}>
          <option value="front">Front Camera</option>
          <option value="rear">Back Camera</option>
        </select> */}
        {/* <select onChange={this.handleChangeCamera}>
          
          {this.state.cameraList.map((row) => (<option key={row.id} value={row.id}>{row.name}</option>))}
        </select> */}
        {/* <p>If camera not supported</p>
        <input type="button" value="Submit QR Code" onClick={this.openImageDialog} /> */}
        {
          this.state.displayScanner ?
            <div className="text-center col-md-auto justify-content-center">
              <div>    
                
              
              </div>
              <QrReader
                delay={this.state.delay}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
                facingMode={this.state.facingMode}               
	              legacyMode= {this.state.legacyMode}
	              ref= 'reader'     
              />
            </div>
          :
          <div>
            <hr />
            <p><button onClick={()=>window.location.reload()}>Scan Again</button></p>
            <hr />
            <div className="table-responsive">
              <div className="col-12 col-sm-12 col-md-8 col-lg-6 m-auto">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{this.state.jsonData.Name}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{this.state.jsonData.Email}</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>{this.state.jsonData.Phone}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{this.state.jsonData.Address}</td>
                    </tr>
                    <tr>
                      <td>Website</td>
                      <td>{this.state.jsonData.Website}</td>
                    </tr>
                    <tr>
                      <td>Image</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            </div>
        }
      </div>
    )
  }
}

export default QRCodeScanner;
