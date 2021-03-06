import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
const { createCanvas } = require('canvas');

class QRCodeScanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 300,
      result: 'No result',
      jsonData: [],
      displayScanner: true,
    }

    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
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
      height: 240,
      width: 320,
    }

    return(
      <div>
        {
          this.state.displayScanner ?
            <div className="text-center col-md-auto justify-content-center d-flex">
              <QrReader
                delay={this.state.delay}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
                />
            </div>
          :
            // <p>{this.state.jsonData.Name}</p>
            <div className="table-responsive-md w-50 m-auto">
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
        }
      </div>
    )
  }
}

export default QRCodeScanner;
