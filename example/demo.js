define(["react-dom","react","fl-google-maps-react"],function(e,o,t){"use strict";e="default"in e?e.default:e,o="default"in o?o.default:o;var n=function(e){return o.createElement("div",{style:{width:"100vw",height:"100vh",backgroundColor:"green"}},o.createElement(t.Map,{google:e.google},o.createElement(t.Marker,{google:e.google,pos:{lat:51.496322,lng:-.178736},listeners:{click:function(){return console.log("Clicked!")},mouseover:function(){return console.log("Mouseovered!")}}})))},r=function(t,r){e.render(o.createElement(n,{google:r}),t)};return r});
//# sourceMappingURL=demo.js.map
