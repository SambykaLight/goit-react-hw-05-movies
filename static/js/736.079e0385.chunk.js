"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(n,t,r){r.r(t),r.d(t,{default:function(){return b}});var e,a,c,u=r(861),o=r(439),i=r(687),s=r.n(i),p=r(228),f=r(689),l=r(791),d=r(509),h=r(168),x=r(686),v=x.Z.ul(e||(e=(0,h.Z)(["\n  margin-top: 12px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n"]))),m=x.Z.li(a||(a=(0,h.Z)(["\n  min-width: 182px;\n  font-size: 14px;\n  padding: 6px;\n  max-width: min-content;\n  background-color: rgb(83, 11, 12);\n  border-radius: 14px;\n\n  :not(:last-child) {\n    margin-bottom: 6px;\n  }\n\n  img {\n    max-width: 182px;\n    border-radius: 8px;\n  }\n  span {\n    color: white;\n  }\n\n  p {\n    color: red;\n  }\n"]))),g=x.Z.h3(c||(c=(0,h.Z)(["\n  color: white;\n"]))),w=r(184),b=function(){var n=(0,f.UO)().movieId,t=(0,l.useState)([]),r=(0,o.Z)(t,2),e=r[0],a=r[1];return console.log(n),(0,l.useEffect)((function(){var t=function(){var t=(0,u.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.TW)(n);case 3:r=t.sent,a(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),0===e.length?(0,w.jsx)(g,{children:"Sorry Nothing"}):(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(v,{children:e.map((function(n){var t=n.id,r=n.profile_path,e=n.original_name,a=n.character;return(0,w.jsxs)(m,{children:[(0,w.jsx)("img",{src:"".concat(r?d.y+r:d.l+"?text="+e),alt:e}),(0,w.jsxs)("p",{children:[(0,w.jsx)("span",{children:" Actor:"})," ",e]}),(0,w.jsxs)("p",{children:[(0,w.jsx)("span",{children:"Character:"})," ",a]})]},t)}))})})}},228:function(n,t,r){r.d(t,{Cm:function(){return l},El:function(){return s},TW:function(){return f},dB:function(){return i},sO:function(){return p}});var e=r(861),a=r(687),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="21a8d7e14a9b5e9904fbfbdbadb21ca8",i=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/week?api_key=".concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},509:function(n,t,r){r.d(t,{l:function(){return a},y:function(){return e}});var e="https://image.tmdb.org/t/p/w500/",a="https://via.placeholder.com/182x273"}}]);
//# sourceMappingURL=736.079e0385.chunk.js.map