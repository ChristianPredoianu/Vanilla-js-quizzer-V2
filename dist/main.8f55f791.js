parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fx60":[function(require,module,exports) {

},{"./..\\images\\wall.jpg":[["wall.aa2a6296.jpg","XrOC"],"XrOC"]}],"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"g1iY":[function(require,module,exports) {
"use strict";function e(e,t,n,r,o,u,a){try{var c=e[u](a),i=c.value}catch(s){return void n(s)}c.done?t(i):Promise.resolve(i).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(o,u){var a=t.apply(n,r);function c(t){e(a,o,u,c,i,"next",t)}function i(t){e(a,o,u,c,i,"throw",t)}c(void 0)})}}function n(){return r.apply(this,arguments)}function r(){return(r=t(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_category.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function o(e){return u.apply(this,arguments)}function u(){return(u=t(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api.php?amount=10&category=".concat(t.id,"&difficulty=").concat(t.diff,"&type=multiple&encode=base64"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCategories=n,exports.getQuestions=o;
},{}],"DrAD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.populateDropdown=x,exports.getCategoryAndDifficulty=q,exports.initGameUi=_,exports.showQuestion=v,exports.showAnswers=S,exports.shuffleAnswers=h,exports.checkIfCorrectAnswer=C,exports.removeQuestion=g,exports.countdown=w,exports.gameOver=L,exports.showPlayersScore=E,exports.resetUi=z;var e=document.querySelector(".countdown__count"),t=document.querySelector(".glow-sign"),n=document.querySelector(".container-cta"),o=document.querySelector("#category"),s=document.querySelector("#difficulty"),l=document.querySelector(".container-quiz"),r=document.querySelector(".quiz"),c=document.querySelector(".quiz__current-question"),i=document.querySelector(".quiz__category"),a=document.querySelector(".quiz__question"),d=document.querySelector(".quiz__loader"),u=document.querySelector(".quiz__list"),y=document.querySelector(".quiz__nextBtn"),p=document.querySelector(".game-over"),f=0,m=!1;function x(e){e.trivia_categories.forEach(function(e){var t=document.createElement("option");t.value=e.id,t.textContent=e.name,o.appendChild(t)})}function q(){return{id:o.value,diff:s.value}}function _(){l.style.display="flex",n.style.display="none",t.style.display="none",e.style.display="flex",r.style.display="flex",y.style.display="none"}function v(t,n){d.style.display="none",e.style.display="block",y.style.display="block",c.style.display="block",c.textContent="Question ".concat(n+1," / 10"),i.textContent=o.options[o.selectedIndex].text,a.textContent=atob(t.results[n].question)}function S(e,t){var n=document.createElement("li");n.classList.add("quiz__list-item"),u.appendChild(n),n.textContent=atob(e.results[t].correct_answer),e.results[t].incorrect_answers.forEach(function(e){var t=document.createElement("li");t.classList.add("quiz__list-item"),u.appendChild(t),t.textContent=atob(e)})}function h(){for(var e=u.children.length;e>=0;e--)u.appendChild(u.children[Math.random()*e|0])}function C(e,t){document.querySelectorAll("li").forEach(function(n){n.addEventListener("click",function(n){n.target.textContent===atob(e.results[t].correct_answer)?(n.target.classList.add("correct-answer"),n.target.parentElement.classList.add("disabled"),document.querySelector(".quiz__nextBtn").classList.remove("disabled"),f++,m=!0):(n.target.classList.add("incorrect-answer"),n.target.parentElement.classList.add("disabled"),b(e,t),y.classList.remove("disabled"),m=!0)})})}function b(e,t){document.querySelectorAll("li").forEach(function(n){n.textContent===atob(e.results[t].correct_answer)&&n.classList.add("correct-answer")})}function g(){d.style.display="block",c.style.display="none",a.textContent="",document.querySelectorAll("li").forEach(function(e){e.remove()}),u.classList.remove("disabled"),e.style.display="none",y.style.display="none"}function w(t,n){m=!1,clearInterval(s);var o=16;e.style.color="#02ff17";var s=setInterval(function(){--o>=0&&(e.textContent=o,m&&clearInterval(s)),o<=5&&(e.style.color="#ff0202"),0===o&&(b(t,n),document.querySelectorAll("li").forEach(function(e){e.classList.add("disabled")}),y.classList.remove("disabled"),clearInterval(s),m=!0)},1e3)}function L(){r.style.display="none",e.style.display="none",y.style.display="none",r.style.display="none",p.style.display="flex"}function E(){document.querySelector(".game-over__score").textContent="The game is over! Your score is: ".concat(f," / 10")}function z(){p.style.display="none",l.style.display="none",n.style.display="block",t.style.display="flex",e.textContent="",c.textContent="",i.textContent="",f=0}
},{}],"d6sW":[function(require,module,exports) {
"use strict";require("./../scss/main.scss"),require("regenerator-runtime/runtime");var e=require("./openTrivia"),t=require("./ui"),n=0;function i(){(0,e.getCategories)().then(function(e){(0,t.populateDropdown)(e)}),document.querySelector(".start-btn").addEventListener("click",function(){var i=(0,t.getCategoryAndDifficulty)();(0,t.initGameUi)(),(0,e.getQuestions)(i).then(function(e){o(e,n),r(e)})})}function r(e){document.querySelector(".quiz__nextBtn").addEventListener("click",function i(){document.querySelector(".quiz__nextBtn").classList.add("disabled"),e.results.length-1!==n?(n++,(0,t.removeQuestion)(),o(e,n)):((0,t.gameOver)(),(0,t.showPlayersScore)(),this.removeEventListener("click",i))})}function o(e,n){setTimeout(function(){(0,t.countdown)(e,n)},1e3),setTimeout(function(){(0,t.showQuestion)(e,n),(0,t.showAnswers)(e,n),(0,t.shuffleAnswers)(),(0,t.checkIfCorrectAnswer)(e,n)},2e3)}function u(){document.querySelector(".game-over__btn").addEventListener("click",function(){n=0,(0,t.removeQuestion)(),(0,t.resetUi)()})}i(),u();
},{"./../scss/main.scss":"fx60","regenerator-runtime/runtime":"QVnC","./openTrivia":"g1iY","./ui":"DrAD"}]},{},["d6sW"], null)
//# sourceMappingURL=/main.8f55f791.js.map