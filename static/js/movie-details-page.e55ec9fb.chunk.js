(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{32:function(t,e,r){"use strict";r.d(e,"e",(function(){return i})),r.d(e,"d",(function(){return c})),r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return u})),r.d(e,"c",(function(){return h}));var n=r(37),o=r.n(n),a="030295876ec9637cb436e167c8c73741";o.a.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){return o.a.get("trending/all/day?api_key=".concat(a)).then((function(t){return t.data.results}))},c=function(t){return o.a.get("search/movie?api_key=".concat(a,"&language=en-US&query=").concat(t,"&page=1&include_adult=false")).then((function(t){return t.data.results}))},s=function(t){return o.a.get("movie/".concat(t,"?api_key=").concat(a,"&language=en-US")).then((function(t){return t.data}))},u=function(t){return o.a.get("movie/".concat(t,"/credits?api_key=").concat(a)).then((function(t){return t.data.cast}))},h=function(t){return o.a.get("movie/".concat(t,"/reviews?api_key=").concat(a,"&language=en-US&page=1")).then((function(t){return t.data.results}))}},33:function(t,e,r){t.exports=r(36)},34:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},36:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(F){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return I()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=h(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function m(){}function j(){}function b(){}var g={};g[a]=function(){return this};var y=Object.getPrototypeOf,O=y&&y(y(S([])));O&&O!==r&&n.call(O,a)&&(g=O);var x=b.prototype=m.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,i,c){var s=h(t[o],t,a);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return j.prototype=x.constructor=b,b.constructor=j,j.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(x),s(x,c,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},69:function(t,e,r){t.exports={movieCard:"movieDetails_movieCard__3WE1Y",genreList:"movieDetails_genreList__PtnCM",genreListItem:"movieDetails_genreListItem__VwJDU",addInf:"movieDetails_addInf__9UKzP",bttn:"movieDetails_bttn__3p0_E"}},72:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return m}));var n=r(33),o=r.n(n),a=r(34),i=r(35),c=r(0),s=r(2),u=r(9),h=r(32),l=r(1);var f=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),r=e[0],n=e[1],u=Object(s.g)().params.movieId;return Object(c.useEffect)((function(){Object(a.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.a)(u);case 2:e=t.sent,n(e);case 4:case"end":return t.stop()}}),t)})))()}),[u]),Object(l.jsx)(l.Fragment,{children:r.length&&Object(l.jsx)("ul",{children:r.map((function(t){return Object(l.jsxs)("li",{children:[t.profile_path&&Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t.profile_path),width:"200",alt:t.name}),Object(l.jsx)("h3",{children:t.name}),Object(l.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})||Object(l.jsx)("p",{className:"descr",children:"The resource you requested could not be found."})})};function d(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),r=e[0],n=e[1],u=Object(s.g)().params.movieId;return Object(c.useEffect)((function(){Object(a.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.c)(u);case 2:e=t.sent,n(e);case 4:case"end":return t.stop()}}),t)})))()}),[u]),Object(l.jsx)(l.Fragment,{children:r.length&&Object(l.jsx)("ul",{children:r.map((function(t){return Object(l.jsxs)("li",{children:[Object(l.jsxs)("h3",{children:["Author: ",t.author]}),Object(l.jsx)("p",{children:t.content})]},t.id)}))})||Object(l.jsx)("p",{className:"descr",children:"We don't have any reviews for this movie"})})}var p=r(69),v=r.n(p);var m=function(t){var e=Object(c.useState)({}),r=Object(i.a)(e,2),n=r[0],p=r[1],m=Object(c.useState)(""),j=Object(i.a)(m,2),b=j[0],g=j[1],y=Object(c.useState)(""),O=Object(i.a)(y,2),x=O[0],w=O[1],_=Object(c.useState)(""),L=Object(i.a)(_,2),E=L[0],k=L[1],N=Object(s.f)(),S=Object(s.g)().params.movieId;return Object(c.useEffect)((function(){Object(a.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h.b)(S);case 3:e=t.sent,p(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),t.t0.response&&k(t.t0.response.data.status_message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}),[S]),Object(c.useEffect)((function(){g(N.state&&N.state.from?N.state.from:"/"),w(N.state&&N.state.search?N.state.search:"")}),[N.state]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{type:"button",onClick:function(){return t.history.push({pathname:b,search:x})},className:v.a.bttn,children:"Go back"}),n.id&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:v.a.movieCard,children:[n.poster_path&&Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(n.poster_path),width:"300",alt:n.title||n.name}),Object(l.jsxs)("div",{className:"descr",children:[Object(l.jsx)("h2",{children:n.title||n.name}),Object(l.jsxs)("p",{children:["User score: ",10*n.vote_average,"%"]}),Object(l.jsx)("h3",{children:"Overview"}),Object(l.jsx)("p",{children:n.overview||"This movie has no overview yet."}),Object(l.jsx)("h3",{children:"Genres"}),Object(l.jsx)("ul",{className:v.a.genreList,children:n.genres.map((function(t){return Object(l.jsx)("li",{className:v.a.genreListItem,children:t.name},t.id)}))})]})]}),Object(l.jsxs)("div",{className:v.a.addInf,children:[Object(l.jsx)("p",{children:"Additional information"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(u.b,{to:{pathname:"/movies/".concat(n.id,"/cast"),state:{search:x,from:b}},children:"Cast"})})," ",Object(l.jsx)("li",{children:Object(l.jsx)(u.b,{to:{pathname:"/movies/".concat(n.id,"/reviews"),state:{search:x,from:b}},children:"Reviews"})})]})]}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{path:"/movies/:movieId/cast",component:f}),Object(l.jsx)(s.a,{path:"/movies/:movieId/reviews",component:d})]})]})||E&&Object(l.jsx)("p",{className:"descr",children:E})]})}}}]);
//# sourceMappingURL=movie-details-page.e55ec9fb.chunk.js.map