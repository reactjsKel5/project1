import e from"@csstools/postcss-progressive-custom-properties";import r from"postcss-value-parser";
/**
 * Simple matrix (and vector) multiplication
 * Warning: No error handling for incompatible dimensions!
 * @author Lea Verou 2020 MIT License
 *
 * @license W3C
 * https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/multiply-matrices.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 *
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/multiply-matrices.js
 */
function t(e,r){const t=e.length;let n,u;n=Array.isArray(e[0])?e:[e],Array.isArray(r[0])||(u=r.map((e=>[e])));const o=u[0].length,a=u[0].map(((e,r)=>u.map((e=>e[r]))));let s=n.map((e=>a.map((r=>Array.isArray(e)?e.reduce(((e,t,n)=>e+t*(r[n]||0)),0):r.reduce(((r,t)=>r+t*e),0)))));return 1===t&&(s=s[0]),1===o?s.map((e=>e[0])):s}
/**
 * @license W3C
 * https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 *
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js
 */function n(e){return e.map((function(e){const r=e<0?-1:1,t=Math.abs(e);return t<.04045?e/12.92:r*Math.pow((t+.055)/1.055,2.4)}))}function u(e){return e.map((function(e){const r=e<0?-1:1,t=Math.abs(e);return t>.0031308?r*(1.055*Math.pow(t,1/2.4)-.055):12.92*e}))}function o(e){return t([[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],e)}function a(e){return t([[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],e)}function s(e){return t([[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]],e)}function c(e){const r=t([[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],e);return t([[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],r.map((e=>Math.cbrt(e))))}function i(e){const r=t([[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]],e);return t([[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],r.map((e=>e**3)))}function l(e){const r=180*Math.atan2(e[2],e[1])/Math.PI;return[e[0],Math.sqrt(e[1]**2+e[2]**2),r>=0?r:r+360]}function p(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}
/**
 * @license W3C
 * https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/deltaEOK.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 *
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/deltaEOK.js
 */function f(e,r){const[t,n,u]=e,[o,a,s]=r,c=t-o,i=n-a,l=u-s;return Math.sqrt(c**2+i**2+l**2)}function d(e,r,t){return function(e,r,t){let n=0,u=e[1];const o=e;for(;u-n>1e-4;){const e=v(r(o));f(p(o),p(t(e)))-.02<1e-4?n=o[1]:u=o[1],o[1]=(u+n)/2}return v(r([...o]))}(e,r,t)}function v(e){return e.map((e=>e<0?0:e>1?1:e))}function m(e){const[r,t,n]=e;return r>=-1e-4&&r<=1.0001&&t>=-1e-4&&t<=1.0001&&n>=-1e-4&&n<=1.0001}function h(e){let r=e.slice();r=r.map((function(e){const r=e<0?-1:1,t=Math.abs(e);return r*Math.pow(t,563/256)})),r=t([[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],r);let s=r.slice();return s=c(s),s=l(s),s[0]<1e-6&&(s=[0,0,0]),s[0]>.999999&&(s=[1,0,0]),r=a(r),r=u(r),m(r)?v(r):d(s,(e=>u(e=a(e=i(e=p(e))))),(e=>l(e=c(e=o(e=n(e))))))}function b(e){let r=e.slice();r=s(r);let t=r.slice();return t=c(t),t=l(t),t[0]<1e-6&&(t=[0,0,0]),t[0]>.999999&&(t=[1,0,0]),r=a(r),r=u(r),m(r)?v(r):d(t,(e=>u(e=a(e=i(e=p(e))))),(e=>l(e=c(e=o(e=n(e))))))}function y(e){let r=e.slice(),t=r.slice();return t=c(t),t=l(t),t[0]<1e-6&&(t=[0,0,0]),t[0]>.999999&&(t=[1,0,0]),r=a(r),r=u(r),m(r)?v(r):d(t,(e=>u(e=a(e=i(e=p(e))))),(e=>l(e=c(e=o(e=n(e))))))}function g(e){let r=e.slice();r=n(r),r=t([[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],r);let s=r.slice();return s=c(s),s=l(s),s[0]<1e-6&&(s=[0,0,0]),s[0]>.999999&&(s=[1,0,0]),r=a(r),r=u(r),m(r)?v(r):d(s,(e=>u(e=a(e=i(e=p(e))))),(e=>l(e=c(e=o(e=n(e))))))}function x(e){let r=e.slice();r=r.map((function(e){const r=e<0?-1:1;return Math.abs(e)<=.03125?e/16:r*Math.pow(e,1.8)})),r=t([[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],r),r=s(r);let f=r.slice();return f=c(f),f=l(f),f[0]<1e-6&&(f=[0,0,0]),f[0]>.999999&&(f=[1,0,0]),r=a(r),r=u(r),m(r)?v(r):d(f,(e=>u(e=a(e=i(e=p(e))))),(e=>l(e=c(e=o(e=n(e))))))}function M(e){let r=e.slice();r=function(e){const r=1.09929682680944;return e.map((function(e){const t=e<0?-1:1,n=Math.abs(e);return n<.08124285829863151?e/4.5:t*Math.pow((n+r-1)/r,1/.45)}))}(r),r=t([[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],r);let s=r.slice();return s=c(s),s=l(s),s[0]<1e-6&&(s=[0,0,0]),s[0]>.999999&&(s=[1,0,0]),r=a(r),r=u(r),m(r)?v(r):d(s,(e=>u(e=a(e=i(e=p(e))))),(e=>l(e=c(e=o(e=n(e))))))}function w(e){let r=e.slice();r=o(r);let t=r.slice();return t=c(t),t=l(t),t[0]<1e-6&&(t=[0,0,0]),t[0]>.999999&&(t=[1,0,0]),r=a(r),r=u(r),m(r)?v(r):d(t,(e=>u(e=a(e=i(e=p(e))))),(e=>l(e=c(e=o(e=n(e))))))}function I(e){let r=e.slice();r=n(r),r=o(r);let t=r.slice();return t=c(t),t=l(t),t[0]<1e-6&&(t=[0,0,0]),t[0]>.999999&&(t=[1,0,0]),r=a(r),r=u(r),m(r)?v(r):d(t,(e=>u(e=a(e=i(e=p(e))))),(e=>l(e=c(e=o(e=n(e))))))}function S(e,t,n,u){const o=r.stringify(e),a=e.value,s=e.nodes.slice().filter((e=>"comment"!==e.type&&"space"!==e.type));let c,i=null;if("color"===a&&(i=function(e){if(!function(e){if(!e||"word"!==e.type)return!1;switch(e.value){case"srgb":case"srgb-linear":case"display-p3":case"a98-rgb":case"prophoto-rgb":case"rec2020":case"xyz-d50":case"xyz-d65":case"xyz":return!0;default:return!1}}(e[0]))return null;const t={colorSpace:e[0].value,colorSpaceNode:e[0],parameters:[]};for(let n=1;n<e.length;n++)if(E(e[n]))t.slash=e[n];else{if(t.slash&&(k(e[n])||P(e[n])||z(e[n]))){t.alpha=e[n];break}if(!t.colorSpace.startsWith("xyz")&&k(e[n])){const u=r.unit(e[n].value);"%"===u.unit&&(u.number=String(parseFloat(u.number)/100),u.unit="",e[n].value=String(u.number)),t.parameters.push({value:u,node:e[n]})}else{if(!t.colorSpace.startsWith("xyz")||!k(e[n]))return null;{const u=r.unit(e[n].value);if(""!==u.unit)return null;t.parameters.push({value:u,node:e[n]})}}}if(0===t.parameters.length)return t;t.parameters.length<3&&(t.parameters=[...t.parameters,{node:{sourceIndex:0,sourceEndIndex:1,value:"0",type:"word"},value:{number:"0",unit:""}},{node:{sourceIndex:0,sourceEndIndex:1,value:"0",type:"word"},value:{number:"0",unit:""}}]);t.parameters.length>3&&(t.parameters=t.parameters.slice(0,3));return t}(s)),!i)return;switch(e.value="rgb",function(e,t,n){if(!t||!n)return;if(e.value="rgba",t.value=",",t.before="",!function(e){if(!e||"word"!==e.type)return!1;if(!A(e))return!1;const t=r.unit(e.value);if(!t)return!1;return!!t.number}(n))return;const u=r.unit(n.value);if(!u)return;"%"===u.unit&&(u.number=String(parseFloat(u.number)/100),n.value=String(u.number))}(e,i.slash,i.alpha),i.colorSpace){case"srgb":c=I;break;case"srgb-linear":c=w;break;case"a98-rgb":c=h;break;case"prophoto-rgb":c=x;break;case"display-p3":c=g;break;case"rec2020":c=M;break;case"xyz-d50":c=b;break;case"xyz-d65":case"xyz":c=y;break;default:return}const l=(p=i,p.parameters.map((e=>e.value))).map((e=>parseFloat(e.number)));var p;const f=c(l);!m(l)&&u&&t.warn(n,`"${o}" is out of gamut for "${i.colorSpace}". Given "preserve: true" is set, this will lead to unexpected results in some browsers.`),e.nodes=[{sourceIndex:0,sourceEndIndex:1,value:String(Math.round(255*f[0])),type:"word"},{sourceIndex:0,sourceEndIndex:1,value:",",type:"div",before:"",after:""},{sourceIndex:0,sourceEndIndex:1,value:String(Math.round(255*f[1])),type:"word"},{sourceIndex:0,sourceEndIndex:1,value:",",type:"div",before:"",after:""},{sourceIndex:0,sourceEndIndex:1,value:String(Math.round(255*f[2])),type:"word"}],i.alpha&&(e.nodes.push({sourceIndex:0,sourceEndIndex:1,value:",",type:"div",before:"",after:""}),e.nodes.push(i.alpha))}function k(e){if(!e||"word"!==e.type)return!1;if(!A(e))return!1;const t=r.unit(e.value);return!!t&&("%"===t.unit||""===t.unit)}function P(e){return e&&"function"===e.type&&"calc"===e.value}function z(e){return e&&"function"===e.type&&"var"===e.value}function E(e){return e&&"div"===e.type&&"/"===e.value}function A(e){if(!e||!e.value)return!1;try{return!1!==r.unit(e.value)}catch(e){return!1}}const F=e=>{const t="preserve"in Object(e)&&Boolean(e.preserve);return{postcssPlugin:"postcss-color-function",Declaration:(e,{result:n})=>{if(function(e){const r=e.parent;if(!r)return!1;const t=r.index(e);for(let n=0;n<t;n++){const t=r.nodes[n];if("decl"===t.type&&t.prop===e.prop)return!0}return!1}(e))return;if(function(e){let r=e.parent;for(;r;)if("atrule"===r.type){if("supports"===r.name&&-1!==r.params.indexOf("color("))return!0;r=r.parent}else r=r.parent;return!1}(e))return;const u=e.value;if(-1===u.indexOf("color("))return;const o=function(e,t,n,u){let o;try{o=r(e)}catch(r){t.warn(n,`Failed to parse value '${e}' as a color function. Leaving the original value intact.`)}if(void 0===o)return;o.walk((e=>{e.type&&"function"===e.type&&"color"===e.value&&S(e,t,n,u)}));const a=String(o);return a!==e?a:void 0}(u,e,n,t);void 0!==o&&(t?e.cloneBefore({value:o}):e.value=o)}}};F.postcss=!0;const O=r=>{const t=Object.assign({preserve:!1,enableProgressiveCustomProperties:!0},r);return t.enableProgressiveCustomProperties&&t.preserve?{postcssPlugin:"postcss-color-function",plugins:[e(),F(t)]}:F(t)};O.postcss=!0;export{O as default};
