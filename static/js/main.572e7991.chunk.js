(this.webpackJsonpqrcodescanner=this.webpackJsonpqrcodescanner||[]).push([[0],{12:function(e,t,a){e.exports=a(26)},17:function(e,t,a){},18:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),s=(a(17),a(18),a(19),a(6)),o=a(7),i=a(3),d=a(11),m=a(9),u=a(10),h=(a(23).createCanvas,function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={delay:300,result:"No result",jsonData:[],displayScanner:!0},n.handleScan=n.handleScan.bind(Object(i.a)(n)),n.handleError=n.handleError.bind(Object(i.a)(n)),n}return Object(o.a)(a,[{key:"handleScan",value:function(e){null!=e&&(this.setState({result:e,delay:!1}),this.getJsonFormatData(e))}},{key:"getJsonFormatData",value:function(e){var t=e.split(",");console.log(t);var a=t[3].split(": "),n=t[2].split(": "),l=t[4].split(": "),r=t[9].split("Powerful"),c=l[1]+","+t[5]+","+t[6]+","+t[7],s={Name:t[0],Email:a[1],Phone:n[1],Address:c,Website:t[8],image:r[1]};this.setState({jsonData:s,displayScanner:!1})}},{key:"handleError",value:function(e){console.error(e)}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.displayScanner?l.a.createElement("div",{className:"text-center col-md-auto justify-content-center d-flex"},l.a.createElement(u.a,{delay:this.state.delay,style:{height:420,width:420},onError:this.handleError,onScan:this.handleScan})):l.a.createElement("div",{className:"table-responsive"},l.a.createElement("div",{className:"col-12 col-sm-12 col-md-8 col-lg-6 m-auto"},l.a.createElement("table",{className:"table table-bordered"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Name"),l.a.createElement("td",null,this.state.jsonData.Name)),l.a.createElement("tr",null,l.a.createElement("td",null,"Email"),l.a.createElement("td",null,this.state.jsonData.Email)),l.a.createElement("tr",null,l.a.createElement("td",null,"Phone"),l.a.createElement("td",null,this.state.jsonData.Phone)),l.a.createElement("tr",null,l.a.createElement("td",null,"Address"),l.a.createElement("td",null,this.state.jsonData.Address)),l.a.createElement("tr",null,l.a.createElement("td",null,"Website"),l.a.createElement("td",null,this.state.jsonData.Website)),l.a.createElement("tr",null,l.a.createElement("td",null,"Image"),l.a.createElement("td",null)))))))}}]),a}(n.Component));var E=function(){return l.a.createElement("div",{className:"App mt-5"},l.a.createElement("h2",null," QR Code Scanner "),l.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.572e7991.chunk.js.map