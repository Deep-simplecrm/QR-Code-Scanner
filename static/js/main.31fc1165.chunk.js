(this.webpackJsonpqrcodescanner=this.webpackJsonpqrcodescanner||[]).push([[0],{13:function(e,t,a){e.exports=a(27)},18:function(e,t,a){},19:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},20:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),o=(a(18),a(5)),i=a(6),s=a(8),d=a(7),u=(a(19),a(20),a(2)),m=a(3),h=a(12),E=(a(24).createCanvas,function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={delay:300,result:"No result",jsonData:[],displayScanner:!0,cameraView:"rear",deviceId:"",facingMode:"rear",legacyMode:!1,cameraList:[]},n.handleChangeCamera=n.handleChangeCamera.bind(Object(m.a)(n)),n.handleFacingModeChange=n.handleFacingModeChange.bind(Object(m.a)(n)),n.handleScan=n.handleScan.bind(Object(m.a)(n)),n.handleError=n.handleError.bind(Object(m.a)(n)),n.handleLoad=n.handleLoad.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"handleScan",value:function(e){null!=e&&(this.setState({result:e,delay:!1}),this.getJsonFormatData(e))}},{key:"handleLoad",value:function(){var e=this.props,t=e.delay,a=e.onLoad,n=this.els.preview;n.play(),"function"==typeof a&&a(),"number"==typeof t&&(this.timeout=setTimeout(this.check,t)),n.removeEventListener("loadstart",this.handleLoadStart)}},{key:"handleChangeCamera",value:function(e){this.setState({deviceId:e.target.value})}},{key:"handleFacingModeChange",value:function(e){this.setState({facingMode:e.target.value})}},{key:"getJsonFormatData",value:function(e){var t=e.split(",");console.log(t);var a=t[3].split(": "),n=t[2].split(": "),l=t[4].split(": "),r=t[9].split("Powerful"),c=l[1]+","+t[5]+","+t[6]+","+t[7],o={Name:t[0],Email:a[1],Phone:n[1],Address:c,Website:t[8],image:r[1]};this.setState({jsonData:o,displayScanner:!1})}},{key:"handleError",value:function(e){console.error(e)}},{key:"render",value:function(){var e;return l.a.createElement("div",null,l.a.createElement("p",null,"Select Camera"),l.a.createElement("select",{onChange:this.handleFacingModeChange},l.a.createElement("option",{value:"front"},"Front Camera"),l.a.createElement("option",{value:"rear"},"Back Camera")),this.state.displayScanner?l.a.createElement("div",{className:"text-center col-md-auto justify-content-center"},l.a.createElement("div",null),l.a.createElement(h.a,(e={delay:this.state.delay,style:{height:"100%",width:"100%"},onError:this.handleError,onScan:this.handleScan,facingMode:this.state.facingMode},Object(u.a)(e,"delay",this.state.delay),Object(u.a)(e,"legacyMode",this.state.legacyMode),Object(u.a)(e,"ref","reader"),e))):l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("button",{onClick:window.location.reload()},"Scan Again")),l.a.createElement("hr",null),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("div",{className:"col-12 col-sm-12 col-md-8 col-lg-6 m-auto"},l.a.createElement("table",{className:"table table-bordered"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Name"),l.a.createElement("td",null,this.state.jsonData.Name)),l.a.createElement("tr",null,l.a.createElement("td",null,"Email"),l.a.createElement("td",null,this.state.jsonData.Email)),l.a.createElement("tr",null,l.a.createElement("td",null,"Phone"),l.a.createElement("td",null,this.state.jsonData.Phone)),l.a.createElement("tr",null,l.a.createElement("td",null,"Address"),l.a.createElement("td",null,this.state.jsonData.Address)),l.a.createElement("tr",null,l.a.createElement("td",null,"Website"),l.a.createElement("td",null,this.state.jsonData.Website)),l.a.createElement("tr",null,l.a.createElement("td",null,"Image"),l.a.createElement("td",null))))))))}}]),a}(n.Component)),v=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App mt-5"},l.a.createElement("h2",null," QR Code Scanner "),l.a.createElement(E,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.31fc1165.chunk.js.map