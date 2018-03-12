webpackJsonp([0x67ef26645b2a],{129:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Adam Stegman",description:"Software Engineer (B.S. Computer Science) with experience in Ruby (and Rails), HTML/CSS, Javascript, Go, several JVM languages, and with devops. I like to work on distributed systems using agile and XP practices."}}},layoutContext:{}}},256:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),u=n(265),l=r(u),c=n(129),s=r(c);t.default=function(e){return i.default.createElement(l.default,o({},e,s.default))},e.exports=t.default},23:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=i.call(e),t=i.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=u(e),d=u(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),a=f.length-1;a>=0;a--)if(f[a]!=d[a])return!1;for(a=f.length-1;a>=0;a--)if(s=f[a],!c(e[s],t[s],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(25),l=n(24),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},24:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},25:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},26:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},30:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),d=n(7),p=r(d),T=n(32),E=r(T),m=n(23),h=r(m),A=n(31),y=n(11),b=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case y.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case y.TAG_NAMES.TITLE:return l({},o,(t={},t[r.type]=i,t.titleAttributes=l({},a),t));case y.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},a)});case y.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},a)})}return l({},o,(n={},n[r.type]=l({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),l=(0,A.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case y.TAG_NAMES.LINK:case y.TAG_NAMES.META:case y.TAG_NAMES.NOSCRIPT:case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=l({},r);return n&&(a=this.mapChildrenToProps(n,a)),f.default.createElement(e,a)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,A.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},S=function(){return null},_=(0,E.default)(A.reducePropsToState,A.handleClientStateChange,A.mapStateOnServer)(S),v=b(_);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},11:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},31:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),u=r(i),l=n(4),c=r(l),s=n(11),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,s.TAG_NAMES.TITLE),n=h(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],l=u.toLowerCase();t.indexOf(l)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===s.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],l=(0,c.default)({},r[u],o[u]);r[u]=l}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=function(e){return{baseTag:E([s.TAG_PROPERTIES.HREF],e),bodyAttributes:T(s.ATTRIBUTE_NAMES.BODY,e),defer:h(e,s.HELMET_PROPS.DEFER),encode:h(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(s.ATTRIBUTE_NAMES.HTML,e),linkTags:m(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:m(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(s.ATTRIBUTE_NAMES.TITLE,e)}},y=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){y(t)},0)}}(),b=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:e.requestAnimationFrame||y,_="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,O=function(e){g&&_(g),e.defer?g=S(function(){M(e,function(){g=null})}):(M(e),g=null)},M=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;N(s.TAG_NAMES.BODY,r),N(s.TAG_NAMES.HTML,o),R(d,p);var T={baseTag:w(s.TAG_NAMES.BASE,n),linkTags:w(s.TAG_NAMES.LINK,a),metaTags:w(s.TAG_NAMES.META,i),noscriptTags:w(s.TAG_NAMES.NOSCRIPT,u),scriptTags:w(s.TAG_NAMES.SCRIPT,c),styleTags:w(s.TAG_NAMES.STYLE,f)},E={},m={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(m[e]=T[e].oldTags)}),t&&t(),l(e,E,m)},P=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),N(s.TAG_NAMES.TITLE,t)},N=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var l=i[u],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var f=a.indexOf(l);f!==-1&&a.splice(f,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,i.join(","))}},w=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},x=function(e,t,n,r){var o=C(n),a=P(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"},I=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},j=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),a=L(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,a,t)]},H=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},k=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return j(e,t.title,t.titleAttributes,n)},toString:function(){return x(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return I(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.scriptTags,c=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:k(s.TAG_NAMES.BASE,t,r),bodyAttributes:k(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(s.ATTRIBUTE_NAMES.HTML,o,r),link:k(s.TAG_NAMES.LINK,a,r),meta:k(s.TAG_NAMES.META,i,r),noscript:k(s.TAG_NAMES.NOSCRIPT,u,r),script:k(s.TAG_NAMES.SCRIPT,l,r),style:k(s.TAG_NAMES.STYLE,c,r),title:k(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=O,t.mapStateOnServer=U,t.reducePropsToState=A,t.requestAnimationFrame=S,t.warn=v}).call(t,function(){return this}())},32:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),l=r(u),c=n(26),s=r(c),f=n(34),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function f(){T=e(p.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,E=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return l.default.createElement(c,this.props)},t}(u.Component);return E.displayName="SideEffect("+r(c)+")",E.canUseDOM=s.default.canUseDOM,E}}},34:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!u(c))return!1;var s=e[c],f=t[c];if(o=n?n.call(r,s,f,c):void 0,o===!1||void 0===o&&s!==f)return!1}return!0}},54:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),u=function(e){return i.default.createElement("svg",o({version:1,width:1365.333,height:1365.333,viewBox:"0 0 1024 1024"},e),i.default.createElement("path",{d:"M498 8.6c-25.2 6.8-50.3 31.6-73.8 73.1-21.2 37.2-40.4 94-54.2 160.3-1.8 8.5-3.4 15.6-3.5 15.8-.1.1-8.3-2.5-18.1-5.8-85.4-29-156.7-39.4-207.5-30.5-40.1 7.1-63.1 24.7-69.5 53.2-7.7 34.7 15.8 90.5 61.7 146.6 21.3 25.9 53.7 58.9 83.1 84.3l4.7 4.1-10.7 9.4c-59 51.8-100 100.3-121.3 143.4-19.7 40-24 71.7-12.8 95.2 2.3 4.9 5.4 9 11.3 14.9 6.9 6.9 9.7 8.9 18.6 13.2 48.9 23.8 133.2 17.3 239.9-18.4 10.6-3.6 19.7-6.2 20.1-5.7.4.4 1.7 5.7 2.9 11.8 3.8 18.4 12.8 54.4 18 71.8 25.8 85.5 63.9 145.5 102.4 161.6 25.7 10.7 50.5 3.8 74.7-20.8 39-39.4 70.9-113.3 90-208.1 1.7-8.5 3.3-16 3.5-16.7.3-.8 5.7.6 16.7 4.3 49.5 16.7 96.8 27.7 137 32 19 2 58.3 1.5 72.3-1 59-10.2 82-42.5 67.9-95.5-13.8-52.2-61.2-115.3-136-181.2l-12.1-10.6 6.6-5.8c27.5-24 59.6-56.3 79.7-80.5 34.1-40.9 57.1-82.1 63.9-114.5 2.2-10.3 2.3-27 .1-35.8-5.7-23.8-26.4-41.2-58-48.7-53.3-12.7-125.9-3.6-219.1 27.5-10.4 3.4-19.1 6.2-19.2 6.1-.1-.1-1.9-8.1-3.8-17.7-16-78-36.9-135.3-64.4-176.6-21-31.4-41.3-49.3-62.6-54.8-7.4-1.9-21.2-1.8-28.5.1zm25.8 33.9c7.2 2.2 19 10.4 26.2 18.3 17.6 19.3 36.9 56.1 49.9 94.8 9.7 29.2 19.4 69.4 26.6 110.6.4 2.6 0 2.8-11.8 7.4-19.9 7.7-58.7 24.4-81.2 35.1l-21.1 9.9-19.9-9.4c-24.1-11.3-57.6-25.8-78-33.7-8.2-3.2-15.4-6.1-15.8-6.5-1.6-1.4 7.5-48.1 15.3-78.5 20.3-78.9 52.7-135.3 84.5-147.2 7.2-2.7 17.8-3 25.3-.8zM205 249c33.7 3.1 75.6 12.8 120 27.8 16.9 5.8 35.2 12.2 35.8 12.7.2.2-1.1 9.7-2.7 21.1-4.1 28.4-6.7 50.4-9.1 78.8-1.1 13.2-2.1 24.1-2.3 24.2-.1.1-7.8 5.5-17.2 11.9-20.3 14.1-49.7 36-68.9 51.4-12 9.6-14.1 10.9-15.5 9.8-53.6-44.3-90.8-83.2-116-121.2-20.7-31.3-30-57.1-27.2-75.3 3.5-22.7 22.5-37 54.6-41.1 10-1.2 35-1.3 48.5-.1zm661.5.1c34.3 4.1 52.7 17.1 56.6 40.2 2.1 12.8-1.8 29.3-11.8 49.5-6.7 13.6-23.8 39.7-35.6 54.2-19.8 24.6-49.2 53.9-80.2 79.8-8.2 6.9-15.7 13.2-16.7 13.9-1.4 1.3-2.9.4-13.5-8-17.6-14-49.6-37.6-70.1-51.7-15.7-10.8-18.2-12.9-18.6-15.5-.2-1.7-1.4-14.5-2.6-28.5-2-24.7-6.4-62-9.5-80.5-2.2-13.7-2.6-12.7 6.3-15.9 59.7-21.6 107.1-33.6 147-37.5 12.9-1.2 38.4-1.2 48.7 0zM439 321.8c31.3 13.8 35 15.5 35 16.1 0 .3-7.5 4.6-16.7 9.6-9.1 4.9-29.6 16.7-45.5 26.2-15.8 9.4-28.8 16.6-28.8 15.9 0-4.6 8.5-80.5 9.5-85.2.5-2.1.9-2 13.2 3.1 7.1 2.9 22 9.3 33.3 14.3zm192.3-17.5c1.6 6.1 9.7 78.3 9.7 85.9 0 .4-9.3-4.9-20.7-11.9-20.3-12.4-37.8-22.4-59.5-34-5.9-3.2-10.8-6.1-10.8-6.4 0-.7 77.8-35.7 79.6-35.8.7-.1 1.4.9 1.7 2.2zm-100.7 62.8c38.7 20.7 103.6 58.3 110.8 64.3l2.5 2.1 1.2 31.5c1.1 30 .8 78.7-.8 107.9l-.6 12.3-11.4 7.4c-31 20.1-115.7 68.4-120 68.4-4.2 0-86.4-46.7-120.3-68.3l-11.5-7.3-.3-76.2-.2-76.1 4.2-2.9c15-10.2 123-72.4 126.9-73.1.3-.1 9.1 4.4 19.5 10zm-186 193.7c-1.2 1.1-71.2-49.5-71-51.3.1-1.4 27.9-22.7 51.4-39.5l19.5-13.9.3 52.1c.1 28.7 0 52.3-.2 52.6zm349.2-94.6c19.9 13.7 50.2 36.2 57 42.3 1.1 1-1.6 3.4-13.5 12.2-26.2 19.3-56.5 40.3-58.2 40.3-.8 0-.9-1-.4-2.8 1-3.6 1-93.6 0-98.5-.4-2-.5-3.7-.2-3.7s7.2 4.6 15.3 10.2zm-439.3 70.4c21.2 17 58 44.1 83.2 61.3l9.2 6.2.5 5.2c.3 2.9 1 11.5 1.6 19.2 1.6 20.5 5.7 56.1 9.1 79.4 1.6 11.2 2.8 20.5 2.5 20.8-1.9 1.9-46.4 16.6-71.8 23.7-66.7 18.6-123 22.3-156 10.3-33.1-12-39.9-39.7-20-81.7 5.1-10.6 17.9-32.1 25.7-43 20.8-28.9 53.1-61.8 95.5-97.3 6.3-5.3 12-9.7 12.5-9.7.6 0 4.2 2.5 8 5.6zm537.6 5.6c58.5 48.7 97.5 93.8 119 137.3 13.9 28.3 16.1 46.7 7.6 62.8-7 13.4-23.5 22-49.2 25.8-10.4 1.6-43.1 1.6-56.5 0-39.4-4.6-80.7-15-135.6-34.3l-14-4.9 2.3-16.2c3.4-24.3 7-57.8 8.8-81.3.9-11.5 1.8-22.3 2.1-24.1.4-2.8 2.4-4.5 18.2-15.4 21.8-15 44.9-32 66.3-48.4 8.9-6.9 16.5-12.5 16.9-12.5.4 0 6.8 5 14.1 11.2zm-396 92.9c10.8 6.7 57.6 33.7 68.7 39.5 5 2.7 9.2 5.1 9.2 5.4-.1.7-33.2 15.9-58.4 26.8-14.1 6-22.1 9-22.6 8.3-.9-1.5-9.9-79.3-10-86.5 0-1.8.1-1.8 2.8 0 1.5 1 6.1 3.9 10.3 6.5zM639 649.9c-2.9 31.5-7.4 66.1-8.6 66.1-.9 0-36.5-15.5-54.4-23.7-10.2-4.7-20.2-9.2-22.2-10-2.1-.9-3.8-1.9-3.8-2.4 0-.4 6.4-4.1 14.3-8.2 17.7-9.2 43.8-24.3 62.2-35.8 7.7-4.8 14.1-8.6 14.3-8.5.1.2-.7 10.3-1.8 22.5zm-118 53.6c21.2 10.6 74.9 34.1 99.7 43.6l6.3 2.4-.6 3.5c-14.8 84.8-35.2 146.1-62.4 187.5-29.4 44.5-63.7 49.3-93.9 13.1-28.8-34.4-50.9-92.2-66.9-174.6-2.2-11.3-4.3-22.5-4.7-25l-.7-4.6 9.9-3.8c24.3-9.5 73.9-31.6 94.8-42.4 4.4-2.2 8.3-4.1 8.8-4.2.4 0 4.8 2 9.7 4.5z"}),i.default.createElement("path",{d:"M501.1 459.5C477 464.8 462 484 462 509.6c0 19.3 11.2 37.1 28.4 45.3 7.9 3.8 13.4 5 22.1 5.1 29 0 52.4-25.3 50.2-54.5-1.4-19-12.5-35.7-28.2-42.5-11-4.8-22.1-5.9-33.4-3.5z"}))};t.default=u},125:function(e,t,n){e.exports=n.p+"static/resume.aff57785.pdf"},15:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(27),u=r(i);t.default=function(e){var t=e.children;return a.default.createElement("div",{className:u.default.container},t)},e.exports=t.default},27:function(e,t){e.exports={container:"src-components-Container----index-module---container---2t0s4"}},261:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(54),u=r(i),l=n(15),c=r(l),s=n(351),f=r(s),d=function(){return a.default.createElement("footer",{className:f.default.footer},a.default.createElement(u.default,{className:f.default.logo}),a.default.createElement(c.default,null,a.default.createElement("h2",{className:f.default.h2},"Contact"),a.default.createElement("nav",null,a.default.createElement("ul",{className:f.default["nav-list"]},a.default.createElement("li",{className:f.default["nav-item"]},a.default.createElement("a",{href:"//twitter.com/adamstegman",className:f.default["nav-link"]},"Follow me on Twitter")),a.default.createElement("li",{className:f.default["nav-item"]},a.default.createElement("a",{href:"//github.com/adamstegman",className:f.default["nav-link"]},"Follow me on Github")),a.default.createElement("li",{className:f.default["nav-item"]},a.default.createElement("a",{href:"//profiles.google.com/adam.stegman",rel:"me",className:f.default["nav-link"]},"Google Profile")),a.default.createElement("li",{className:f.default["nav-item"]},a.default.createElement("a",{href:"mailto:me@adamstegman.com",className:f.default["nav-link"]},"Email me"))))))};t.default=d,e.exports=t.default},351:function(e,t){e.exports={footer:"src-components-Footer----index-module---footer---329-w src-components-Header----index-module---header---239p4 src-layouts----index-module---splash---1MfZE",logo:"src-components-Footer----index-module---logo---38B_c src-components-Header----index-module---logo---1kTSE",h2:"src-components-Footer----index-module---h2---1Zc31 src-layouts----index-module---splash-text---9T2Kn","nav-list":"src-components-Footer----index-module---nav-list---ONep3","nav-item":"src-components-Footer----index-module---nav-item---F2mv0","nav-link":"src-components-Footer----index-module---nav-link---1VqZy src-components-Header----index-module---nav-link---atajS src-layouts----index-module---splash-link---1a9Ac src-layouts----index-module---splash-text---9T2Kn"}},98:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),c=n(80),s=r(c),f=n(54),d=r(f),p=n(15),T=r(p),E=n(99),m=r(E),h=n(125),A=r(h),y=n(121),b=r(y),S=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return l.default.createElement("header",{className:b.default.header},l.default.createElement(d.default,{className:b.default.logo}),l.default.createElement(T.default,null,l.default.createElement("hgroup",null,l.default.createElement("h1",{className:b.default.h1},l.default.createElement(s.default,{to:"/",className:b.default["header-link"]},this.props.title)),l.default.createElement("h2",{className:b.default.h2},"Senior Software Engineer")),l.default.createElement(m.default,null,l.default.createElement(s.default,{to:"/",className:b.default["nav-link"]},"About Me"),l.default.createElement("a",{href:"//blog.adamstegman.com",className:b.default["nav-link"]},"My Kind of Stupid (Blog)"),l.default.createElement(s.default,{to:"/projects",className:b.default["nav-link"]},"Projects"),l.default.createElement("a",{href:A.default,className:b.default["nav-link"]},"Résumé"),l.default.createElement("a",{href:"//twitter.com/adamstegman",className:b.default["nav-link"]},"Twitter"),l.default.createElement("a",{href:"//github.com/adamstegman",className:b.default["nav-link"]},"Github"))))},t}(l.default.Component);t.default=S,e.exports=t.default},121:function(e,t){e.exports={header:"src-components-Header----index-module---header---239p4 src-layouts----index-module---splash---1MfZE",logo:"src-components-Header----index-module---logo---1kTSE",h1:"src-components-Header----index-module---h1---APUqe src-layouts----index-module---splash-text---9T2Kn",h2:"src-components-Header----index-module---h2---1gyib src-layouts----index-module---splash-text---9T2Kn","header-link":"src-components-Header----index-module---header-link---2lNhd src-layouts----index-module---splash-text---9T2Kn","nav-link":"src-components-Header----index-module---nav-link---atajS src-layouts----index-module---splash-link---1a9Ac src-layouts----index-module---splash-text---9T2Kn"}},99:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),c=n(122),s=r(c),f=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.state={expanded:!1},r.toggle=r.toggle.bind(r),r}return i(t,e),t.prototype.toggle=function(){this.setState(function(e){return{expanded:!e.expanded}})},t.prototype.render=function(){var e=this,t=[s.default.list];return this.state.expanded||t.push(s.default["menu-hidden"]),l.default.createElement("nav",null,l.default.createElement("button",{"aria-expanded":this.state.expanded,"aria-controls":"nav-list",className:s.default.button,onClick:this.toggle},l.default.createElement("h3",{className:s.default["button-text"]},this.state.expanded?"Hide":"Show"," Navigation")),l.default.createElement("ul",{id:"nav-list",className:t.join(" ")},this.props.children.map(function(t,n){return l.default.createElement("li",{key:n,className:s.default.item,onClick:e.toggle},t)})))},t}(l.default.Component);t.default=f,e.exports=t.default},122:function(e,t){e.exports={button:"src-components-NavList----index-module---button---1GxUW src-layouts----index-module---splash-border---3tLlG","button-text":"src-components-NavList----index-module---button-text---PNYPk src-layouts----index-module---splash-text---9T2Kn","menu-hidden":"src-components-NavList----index-module---menu-hidden---1i53O",list:"src-components-NavList----index-module---list---121RX",item:"src-components-NavList----index-module---item---1x6bz"}},265:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=n(1),a=r(o),i=n(7),u=r(i),l=n(30),c=r(l),s=n(98),f=r(s),d=n(261),p=r(d),T=function(e){var t=e.children,n=e.data;return a.default.createElement("div",null,a.default.createElement(c.default,{
title:n.site.siteMetadata.title,meta:[{name:"description",content:n.site.siteMetadata.description}]}),a.default.createElement(f.default,{title:n.site.siteMetadata.title}),t(),a.default.createElement(p.default,null))};T.propTypes={children:u.default.func},t.default=T;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-js-d51773d4b3ecfe921bc1.js.map