(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(8),r=a.n(s),c=(a(15),a(2)),l=a(3),o=a(5),m=a(4),u=a(6),d=(a(17),a(1)),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).Resettime=function(){a.setState({millisecond:0}),clearInterval(a.incrementer)},a.Startpause=function(){a.state.isstart?a.Starttime():a.Pausetime()},a.state={millisecond:0,isstart:!0},a.Resettime=a.Resettime.bind(Object(d.a)(Object(d.a)(a))),a.Starttime=a.Starttime.bind(Object(d.a)(Object(d.a)(a))),a.Pausetime=a.Pausetime.bind(Object(d.a)(Object(d.a)(a))),a.incrementer=0,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"Starttime",value:function(){var e=this;this.incrementer=setInterval(function(){return e.setState({millisecond:parseInt(e.state.millisecond)+1e3})},1e3),this.setState({isstart:!1})}},{key:"Pausetime",value:function(){clearInterval(this.incrementer),this.setState({isstart:!0})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"timer"},i.a.createElement("p",{className:"time"}," ",Math.floor(this.state.millisecond/1e3/3600).toString().padStart(2,"0"),":",Math.floor(this.state.millisecond/1e3%3600/60).toString().padStart(2,"0"),":",Math.floor(this.state.millisecond/1e3%60).toString().padStart(2,"0")),i.a.createElement("p",{className:"text"},i.a.createElement("span",null,"Hours"),i.a.createElement("span",null,"Minutes"),i.a.createElement("span",null,"Seconds")),i.a.createElement("div",{className:"timercontrol"},i.a.createElement("input",{type:"button",value:this.state.isstart?"Start":"Pause",onClick:this.Startpause}),i.a.createElement("input",{type:"reset",value:"Reset",onClick:this.Resettime})),i.a.createElement("p",{className:"label"}," Pass a time value in milliseconds to the component :  "),i.a.createElement("input",{className:"millisecondsinput",type:"text",value:this.state.millisecond,onChange:function(t){return e.setState({millisecond:t.target.value})}}))}}]),t}(i.a.Component),h=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.b76bdcaf.chunk.js.map