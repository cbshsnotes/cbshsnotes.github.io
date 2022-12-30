;if(CloudflareApps.matchPage(CloudflareApps.installs['ItShzHgN1Zf1'].URLPatterns)){(function(){'use strict'
if(!window.addEventListener||!document.documentElement.classList)return
var times={'0sec':0,'12hours':42480000,'24hours':84960000,'1week':594720000,}
var app
var title
var message
var action
var visibilityTimeout
var store=window.localStorage||{}
var options=window.CloudflareApps.installs['ItShzHgN1Zf1'].options
function getMaxZIndex(){var max=0
var elements=document.getElementsByTagName('*')
Array.prototype.slice.call(elements).forEach(function(element){var zIndex=parseInt(document.defaultView.getComputedStyle(element).zIndex,10)
max=zIndex?Math.max(max,zIndex):max})
return max}
function getMessageKey(string){var hash=5381
var i=string.length
while(i){hash=(hash*33)^string.charCodeAt(--i)}
return hash>>>0}
function closeApp(){app.setAttribute('data-visibility','hidden')
var contentID=getMessageKey(options.title+options.text)
store['cf-flashcard']=JSON.stringify({contentID:contentID,closedAt:Date.now()})
if("ItShzHgN1Zf1"==='preview')updateVisibility()}
function updateVisibility(){clearTimeout(visibilityTimeout)
var visible=true
var stored=false
try{stored=JSON.parse(store['cf-flashcard'])}catch(e){}
if("ItShzHgN1Zf1"==='preview'||!stored){visible=true}else{var timeframe=times[options.renew]
visible=timeframe===0||(Date.now()-stored.closedAt)>=timeframe}
if(visible&&!options.paused){visibilityTimeout=setTimeout(function(){app.setAttribute('data-visibility','visible')},(options.delay||0)*1000)}}
function updateContent(){app.setAttribute('data-position',options.position)
title.textContent=options.title||'Announcement'
message.innerHTML=options.text.html
action.style.color=options.action.color
action.style.display=options.action.show?'':'none'
action.textContent=(options.action.label||'Take me there').trim()
action.href=options.action.url||''
action.target=options.action.newtab?'_blank':''}
function initialize(){app=CloudflareApps.createElement({selector:'body',method:'append'},app)
app.setAttribute('app','flashcard')
app.style.zIndex=getMaxZIndex()+1
var header=document.createElement('flashcard-header')
app.appendChild(header)
title=document.createElement('flashcard-title')
header.appendChild(title)
var close=document.createElement('flashcard-close')
close.setAttribute('role','button')
close.textContent='✕'
header.appendChild(close)
var content=document.createElement('flashcard-content')
app.appendChild(content)
message=document.createElement('flashcard-message')
content.appendChild(message)
var footer=document.createElement('flashcard-footer')
action=document.createElement('a')
action.className='flashcard-action'
footer.appendChild(action)
app.appendChild(footer)
close.addEventListener('click',closeApp)
action.addEventListener('click',closeApp)
updateContent()
updateVisibility()}
if(document.readyState==='loading'){window.addEventListener('DOMContentLoaded',initialize)}else{initialize()}
window.CloudflareApps.installs['ItShzHgN1Zf1'].scope={updateOptions:function updateOptions(nextOptions){clearTimeout(visibilityTimeout)
options=nextOptions
updateContent()
app.setAttribute('data-visibility','visible')},updateDelay:function updateDelay(nextOptions){options=nextOptions
closeApp()},updatePause:function updatePause(nextOptions){app.setAttribute('data-visibility',nextOptions.paused?'hidden':'visible')}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['KsCBDNzojKf6'].URLPatterns)){'use strict'
var options=CloudflareApps.installs['KsCBDNzojKf6'].options;(function(){if(!window.addEventListener)return
function updateElement(){var codeToAdd=document.createElement("noscript");codeToAdd.append(`<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=`+options.tag_id+`"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`)
document.body.prepend(codeToAdd);}
if(document.readyState=='loading'){window.addEventListener('DOMContentLoaded',updateElement)}else{updateElement()}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['QP7ABsQZtcgV'].URLPatterns)){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.i=function(value){return value;};__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter});}};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=4);})
([(function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,'__esModule',{value:true})
exports.default=easeInOutQuad
function easeInOutQuad(t,b,c,d){t/=d/2
if(t<1)return c/2*t*t+b
t--
return-c/2*(t*(t-2)-1)+b}}),(function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,'__esModule',{value:true})
var fancy=exports.fancy='M83.5244052,130.453237 L129.059785,84.9178576 L174.595164,130.453237 L144.213452,130.453237 L144.213452,186.792818 L113.896389,186.792818 L113.896389,130.453237 L83.5244052,130.453237 Z M64.431707,68.715835 L64.431707,75.0983746 L193.678134,75.0983746 L193.678134,68.715835 L64.431707,68.715835 Z'
var line=exports.line='M88.4020203,153.455844 L128,113.857864 L167.59798,153.455844 L173.254834,147.79899 L128,102.544156 L125.171573,105.372583 L82.745166,147.79899 L88.4020203,153.455844 Z'
var pointer=exports.pointer='M92.9062438,130.532138 C89.0010007,134.437382 82.6693513,134.437382 78.7641081,130.532138 C74.858865,126.626895 74.858865,120.295246 78.7641081,116.390003 L115.887214,79.2668969 L121.190515,73.963596 C125.095758,70.0583529 131.427408,70.0583529 135.332651,73.963596 L140.635951,79.2668969 L177.759058,116.390003 C181.664301,120.295246 181.664301,126.626895 177.759058,130.532138 C173.853814,134.437382 167.522165,134.437382 163.616922,130.532138 L138,104.915217 L138,175 C138,180.522848 133.522848,185 128,185 C122.477152,185 118,180.522848 118,175 L118,105.438382 L92.9062438,130.532138 Z'
var triangle=exports.triangle='M185.081032,156.382867 L128.006097,99.3079319 L70.9311613,156.382867 L185.081032,156.382867 Z'}),(function(module,exports){(function(Math){var trimLeft=/^\s+/,trimRight=/\s+$/,tinyCounter=0,mathRound=Math.round,mathMin=Math.min,mathMax=Math.max,mathRandom=Math.random
function tinycolor(color,opts){color=(color)||''
opts=opts||{}
if(color instanceof tinycolor){return color}
if(!(this instanceof tinycolor)){return new tinycolor(color,opts)}
var rgb=inputToRGB(color)
this._originalInput=color,this._r=rgb.r,this._g=rgb.g,this._b=rgb.b,this._a=rgb.a,this._roundA=mathRound(100*this._a)/100,this._format=opts.format||rgb.format
this._gradientType=opts.gradientType
if(this._r<1){this._r=mathRound(this._r)}
if(this._g<1){this._g=mathRound(this._g)}
if(this._b<1){this._b=mathRound(this._b)}
this._ok=rgb.ok
this._tc_id=tinyCounter++}
tinycolor.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var rgb=this.toRgb()
return(rgb.r*299+rgb.g*587+rgb.b*114)/1000},getLuminance:function(){var rgb=this.toRgb()
var RsRGB,GsRGB,BsRGB,R,G,B
RsRGB=rgb.r/255
GsRGB=rgb.g/255
BsRGB=rgb.b/255
if(RsRGB<=0.03928){R=RsRGB/12.92}else{R=Math.pow(((RsRGB+0.055)/1.055),2.4)}
if(GsRGB<=0.03928){G=GsRGB/12.92}else{G=Math.pow(((GsRGB+0.055)/1.055),2.4)}
if(BsRGB<=0.03928){B=BsRGB/12.92}else{B=Math.pow(((BsRGB+0.055)/1.055),2.4)}
return(0.2126*R)+(0.7152*G)+(0.0722*B)},setAlpha:function(value){this._a=boundAlpha(value)
this._roundA=mathRound(100*this._a)/100
return this},toHsv:function(){var hsv=rgbToHsv(this._r,this._g,this._b)
return{h:hsv.h*360,s:hsv.s,v:hsv.v,a:this._a}},toHsvString:function(){var hsv=rgbToHsv(this._r,this._g,this._b)
var h=mathRound(hsv.h*360),s=mathRound(hsv.s*100),v=mathRound(hsv.v*100)
return(this._a==1)?'hsv('+h+', '+s+'%, '+v+'%)':'hsva('+h+', '+s+'%, '+v+'%, '+this._roundA+')'},toHsl:function(){var hsl=rgbToHsl(this._r,this._g,this._b)
return{h:hsl.h*360,s:hsl.s,l:hsl.l,a:this._a}},toHslString:function(){var hsl=rgbToHsl(this._r,this._g,this._b)
var h=mathRound(hsl.h*360),s=mathRound(hsl.s*100),l=mathRound(hsl.l*100)
return(this._a==1)?'hsl('+h+', '+s+'%, '+l+'%)':'hsla('+h+', '+s+'%, '+l+'%, '+this._roundA+')'},toHex:function(allow3Char){return rgbToHex(this._r,this._g,this._b,allow3Char)},toHexString:function(allow3Char){return'#'+this.toHex(allow3Char)},toHex8:function(allow4Char){return rgbaToHex(this._r,this._g,this._b,this._a,allow4Char)},toHex8String:function(allow4Char){return'#'+this.toHex8(allow4Char)},toRgb:function(){return{r:mathRound(this._r),g:mathRound(this._g),b:mathRound(this._b),a:this._a}},toRgbString:function(){return(this._a==1)?'rgb('+mathRound(this._r)+', '+mathRound(this._g)+', '+mathRound(this._b)+')':'rgba('+mathRound(this._r)+', '+mathRound(this._g)+', '+mathRound(this._b)+', '+this._roundA+')'},toPercentageRgb:function(){return{r:mathRound(bound01(this._r,255)*100)+'%',g:mathRound(bound01(this._g,255)*100)+'%',b:mathRound(bound01(this._b,255)*100)+'%',a:this._a}},toPercentageRgbString:function(){return(this._a==1)?'rgb('+mathRound(bound01(this._r,255)*100)+'%, '+mathRound(bound01(this._g,255)*100)+'%, '+mathRound(bound01(this._b,255)*100)+'%)':'rgba('+mathRound(bound01(this._r,255)*100)+'%, '+mathRound(bound01(this._g,255)*100)+'%, '+mathRound(bound01(this._b,255)*100)+'%, '+this._roundA+')'},toName:function(){if(this._a===0){return'transparent'}
if(this._a<1){return false}
return hexNames[rgbToHex(this._r,this._g,this._b,true)]||false},toString:function(format){var formatSet=!!format
format=format||this._format
var formattedString=false
var hasAlpha=this._a<1&&this._a>=0
var needsAlphaFormat=!formatSet&&hasAlpha&&(format==='hex'||format==='hex6'||format==='hex3'||format==='hex4'||format==='hex8'||format==='name')
if(needsAlphaFormat){if(format==='name'&&this._a===0){return this.toName()}
return this.toRgbString()}
if(format==='rgb'){formattedString=this.toRgbString()}
if(format==='prgb'){formattedString=this.toPercentageRgbString()}
if(format==='hex'||format==='hex6'){formattedString=this.toHexString()}
if(format==='hex3'){formattedString=this.toHexString(true)}
if(format==='hex4'){formattedString=this.toHex8String(true)}
if(format==='hex8'){formattedString=this.toHex8String()}
if(format==='name'){formattedString=this.toName()}
if(format==='hsl'){formattedString=this.toHslString()}
if(format==='hsv'){formattedString=this.toHsvString()}
return formattedString||this.toHexString()},clone:function(){return tinycolor(this.toString())},_applyModification:function(fn,args){var color=fn.apply(null,[this].concat([].slice.call(args)))
this._r=color._r
this._g=color._g
this._b=color._b
this.setAlpha(color._a)
return this},lighten:function(){return this._applyModification(lighten,arguments)},brighten:function(){return this._applyModification(brighten,arguments)},darken:function(){return this._applyModification(darken,arguments)},desaturate:function(){return this._applyModification(desaturate,arguments)},saturate:function(){return this._applyModification(saturate,arguments)},greyscale:function(){return this._applyModification(greyscale,arguments)},spin:function(){return this._applyModification(spin,arguments)},_applyCombination:function(fn,args){return fn.apply(null,[this].concat([].slice.call(args)))},analogous:function(){return this._applyCombination(analogous,arguments)},complement:function(){return this._applyCombination(complement,arguments)},monochromatic:function(){return this._applyCombination(monochromatic,arguments)},splitcomplement:function(){return this._applyCombination(splitcomplement,arguments)},triad:function(){return this._applyCombination(triad,arguments)},tetrad:function(){return this._applyCombination(tetrad,arguments)}}
tinycolor.fromRatio=function(color,opts){if(typeof color==='object'){var newColor={}
for(var i in color){if(color.hasOwnProperty(i)){if(i==='a'){newColor[i]=color[i]}else{newColor[i]=convertToPercentage(color[i])}}}
color=newColor}
return tinycolor(color,opts)}
function inputToRGB(color){var rgb={r:0,g:0,b:0}
var a=1
var s=null
var v=null
var l=null
var ok=false
var format=false
if(typeof color==='string'){color=stringInputToObject(color)}
if(typeof color==='object'){if(isValidCSSUnit(color.r)&&isValidCSSUnit(color.g)&&isValidCSSUnit(color.b)){rgb=rgbToRgb(color.r,color.g,color.b)
ok=true
format=String(color.r).substr(-1)==='%'?'prgb':'rgb'}else if(isValidCSSUnit(color.h)&&isValidCSSUnit(color.s)&&isValidCSSUnit(color.v)){s=convertToPercentage(color.s)
v=convertToPercentage(color.v)
rgb=hsvToRgb(color.h,s,v)
ok=true
format='hsv'}else if(isValidCSSUnit(color.h)&&isValidCSSUnit(color.s)&&isValidCSSUnit(color.l)){s=convertToPercentage(color.s)
l=convertToPercentage(color.l)
rgb=hslToRgb(color.h,s,l)
ok=true
format='hsl'}
if(color.hasOwnProperty('a')){a=color.a}}
a=boundAlpha(a)
return{ok:ok,format:color.format||format,r:mathMin(255,mathMax(rgb.r,0)),g:mathMin(255,mathMax(rgb.g,0)),b:mathMin(255,mathMax(rgb.b,0)),a:a}}
function rgbToRgb(r,g,b){return{r:bound01(r,255)*255,g:bound01(g,255)*255,b:bound01(b,255)*255}}
function rgbToHsl(r,g,b){r=bound01(r,255)
g=bound01(g,255)
b=bound01(b,255)
var max=mathMax(r,g,b),min=mathMin(r,g,b)
var h,s,l=(max+min)/2
if(max==min){h=s=0}else{var d=max-min
s=l>0.5?d/(2-max-min):d/(max+min)
switch(max){case r:h=(g-b)/d+(g<b?6:0);break
case g:h=(b-r)/d+2;break
case b:h=(r-g)/d+4;break}
h/=6}
return{h:h,s:s,l:l}}
function hslToRgb(h,s,l){var r,g,b
h=bound01(h,360)
s=bound01(s,100)
l=bound01(l,100)
function hue2rgb(p,q,t){if(t<0)t+=1
if(t>1)t-=1
if(t<1/6)return p+(q-p)*6*t
if(t<1/2)return q
if(t<2/3)return p+(q-p)*(2/3-t)*6
return p}
if(s===0){r=g=b=l}else{var q=l<0.5?l*(1+s):l+s-l*s
var p=2*l-q
r=hue2rgb(p,q,h+1/3)
g=hue2rgb(p,q,h)
b=hue2rgb(p,q,h-1/3)}
return{r:r*255,g:g*255,b:b*255}}
function rgbToHsv(r,g,b){r=bound01(r,255)
g=bound01(g,255)
b=bound01(b,255)
var max=mathMax(r,g,b),min=mathMin(r,g,b)
var h,s,v=max
var d=max-min
s=max===0?0:d/max
if(max==min){h=0}else{switch(max){case r:h=(g-b)/d+(g<b?6:0);break
case g:h=(b-r)/d+2;break
case b:h=(r-g)/d+4;break}
h/=6}
return{h:h,s:s,v:v}}
function hsvToRgb(h,s,v){h=bound01(h,360)*6
s=bound01(s,100)
v=bound01(v,100)
var i=Math.floor(h),f=h-i,p=v*(1-s),q=v*(1-f*s),t=v*(1-(1-f)*s),mod=i%6,r=[v,q,p,p,t,v][mod],g=[t,v,v,q,p,p][mod],b=[p,p,t,v,v,q][mod]
return{r:r*255,g:g*255,b:b*255}}
function rgbToHex(r,g,b,allow3Char){var hex=[pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))]
if(allow3Char&&hex[0].charAt(0)==hex[0].charAt(1)&&hex[1].charAt(0)==hex[1].charAt(1)&&hex[2].charAt(0)==hex[2].charAt(1)){return hex[0].charAt(0)+hex[1].charAt(0)+hex[2].charAt(0)}
return hex.join('')}
function rgbaToHex(r,g,b,a,allow4Char){var hex=[pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16)),pad2(convertDecimalToHex(a))]
if(allow4Char&&hex[0].charAt(0)==hex[0].charAt(1)&&hex[1].charAt(0)==hex[1].charAt(1)&&hex[2].charAt(0)==hex[2].charAt(1)&&hex[3].charAt(0)==hex[3].charAt(1)){return hex[0].charAt(0)+hex[1].charAt(0)+hex[2].charAt(0)+hex[3].charAt(0)}
return hex.join('')}
function rgbaToArgbHex(r,g,b,a){var hex=[pad2(convertDecimalToHex(a)),pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))]
return hex.join('')}
tinycolor.equals=function(color1,color2){if(!color1||!color2){return false}
return tinycolor(color1).toRgbString()==tinycolor(color2).toRgbString()}
function desaturate(color,amount){amount=(amount===0)?0:(amount||10)
var hsl=tinycolor(color).toHsl()
hsl.s-=amount/100
hsl.s=clamp01(hsl.s)
return tinycolor(hsl)}
function saturate(color,amount){amount=(amount===0)?0:(amount||10)
var hsl=tinycolor(color).toHsl()
hsl.s+=amount/100
hsl.s=clamp01(hsl.s)
return tinycolor(hsl)}
function greyscale(color){return tinycolor(color).desaturate(100)}
function lighten(color,amount){amount=(amount===0)?0:(amount||10)
var hsl=tinycolor(color).toHsl()
hsl.l+=amount/100
hsl.l=clamp01(hsl.l)
return tinycolor(hsl)}
function brighten(color,amount){amount=(amount===0)?0:(amount||10)
var rgb=tinycolor(color).toRgb()
rgb.r=mathMax(0,mathMin(255,rgb.r-mathRound(255* -(amount/100))))
rgb.g=mathMax(0,mathMin(255,rgb.g-mathRound(255* -(amount/100))))
rgb.b=mathMax(0,mathMin(255,rgb.b-mathRound(255* -(amount/100))))
return tinycolor(rgb)}
function darken(color,amount){amount=(amount===0)?0:(amount||10)
var hsl=tinycolor(color).toHsl()
hsl.l-=amount/100
hsl.l=clamp01(hsl.l)
return tinycolor(hsl)}
function spin(color,amount){var hsl=tinycolor(color).toHsl()
var hue=(hsl.h+amount)%360
hsl.h=hue<0?360+hue:hue
return tinycolor(hsl)}
function complement(color){var hsl=tinycolor(color).toHsl()
hsl.h=(hsl.h+180)%360
return tinycolor(hsl)}
function triad(color){var hsl=tinycolor(color).toHsl()
var h=hsl.h
return[tinycolor(color),tinycolor({h:(h+120)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+240)%360,s:hsl.s,l:hsl.l})]}
function tetrad(color){var hsl=tinycolor(color).toHsl()
var h=hsl.h
return[tinycolor(color),tinycolor({h:(h+90)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+180)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+270)%360,s:hsl.s,l:hsl.l})]}
function splitcomplement(color){var hsl=tinycolor(color).toHsl()
var h=hsl.h
return[tinycolor(color),tinycolor({h:(h+72)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+216)%360,s:hsl.s,l:hsl.l})]}
function analogous(color,results,slices){results=results||6
slices=slices||30
var hsl=tinycolor(color).toHsl()
var part=360/slices
var ret=[tinycolor(color)]
for(hsl.h=((hsl.h-(part*results>>1))+720)%360;--results;){hsl.h=(hsl.h+part)%360
ret.push(tinycolor(hsl))}
return ret}
function monochromatic(color,results){results=results||6
var hsv=tinycolor(color).toHsv()
var h=hsv.h,s=hsv.s,v=hsv.v
var ret=[]
var modification=1/results
while(results--){ret.push(tinycolor({h:h,s:s,v:v}))
v=(v+modification)%1}
return ret}
var names=tinycolor.names={}
var hexNames=tinycolor.hexNames=flip(names)
function flip(o){var flipped={}
for(var i in o){if(o.hasOwnProperty(i)){flipped[o[i]]=i}}
return flipped}
function boundAlpha(a){a=parseFloat(a)
if(isNaN(a)||a<0||a>1){a=1}
return a}
function bound01(n,max){if(isOnePointZero(n)){n='100%'}
var processPercent=isPercentage(n)
n=mathMin(max,mathMax(0,parseFloat(n)))
if(processPercent){n=parseInt(n*max,10)/100}
if((Math.abs(n-max)<0.000001)){return 1}
return(n%max)/parseFloat(max)}
function clamp01(val){return mathMin(1,mathMax(0,val))}
function parseIntFromHex(val){return parseInt(val,16)}
function isOnePointZero(n){return typeof n==='string'&&n.indexOf('.')!=-1&&parseFloat(n)===1}
function isPercentage(n){return typeof n==='string'&&n.indexOf('%')!=-1}
function pad2(c){return c.length==1?'0'+c:''+c}
function convertToPercentage(n){if(n<=1){n=(n*100)+'%'}
return n}
function convertDecimalToHex(d){return Math.round(parseFloat(d)*255).toString(16)}
function convertHexToDecimal(h){return(parseIntFromHex(h)/255)}
var matchers=(function(){var CSS_INTEGER='[-\\+]?\\d+%?'
var CSS_NUMBER='[-\\+]?\\d*\\.\\d+%?'
var CSS_UNIT='(?:'+CSS_NUMBER+')|(?:'+CSS_INTEGER+')'
var PERMISSIVE_MATCH3='[\\s|\\(]+('+CSS_UNIT+')[,|\\s]+('+CSS_UNIT+')[,|\\s]+('+CSS_UNIT+')\\s*\\)?'
var PERMISSIVE_MATCH4='[\\s|\\(]+('+CSS_UNIT+')[,|\\s]+('+CSS_UNIT+')[,|\\s]+('+CSS_UNIT+')[,|\\s]+('+CSS_UNIT+')\\s*\\)?'
return{CSS_UNIT:new RegExp(CSS_UNIT),rgb:new RegExp('rgb'+PERMISSIVE_MATCH3),rgba:new RegExp('rgba'+PERMISSIVE_MATCH4),hsl:new RegExp('hsl'+PERMISSIVE_MATCH3),hsla:new RegExp('hsla'+PERMISSIVE_MATCH4),hsv:new RegExp('hsv'+PERMISSIVE_MATCH3),hsva:new RegExp('hsva'+PERMISSIVE_MATCH4),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}})()
function isValidCSSUnit(color){return!!matchers.CSS_UNIT.exec(color)}
function stringInputToObject(color){color=color.replace(trimLeft,'').replace(trimRight,'').toLowerCase()
var named=false
if(names[color]){color=names[color]
named=true}else if(color=='transparent'){return{r:0,g:0,b:0,a:0,format:'name'}}
var match
if((match=matchers.rgb.exec(color))){return{r:match[1],g:match[2],b:match[3]}}
if((match=matchers.rgba.exec(color))){return{r:match[1],g:match[2],b:match[3],a:match[4]}}
if((match=matchers.hsl.exec(color))){return{h:match[1],s:match[2],l:match[3]}}
if((match=matchers.hsla.exec(color))){return{h:match[1],s:match[2],l:match[3],a:match[4]}}
if((match=matchers.hsv.exec(color))){return{h:match[1],s:match[2],v:match[3]}}
if((match=matchers.hsva.exec(color))){return{h:match[1],s:match[2],v:match[3],a:match[4]}}
if((match=matchers.hex8.exec(color))){return{r:parseIntFromHex(match[1]),g:parseIntFromHex(match[2]),b:parseIntFromHex(match[3]),a:convertHexToDecimal(match[4]),format:named?'name':'hex8'}}
if((match=matchers.hex6.exec(color))){return{r:parseIntFromHex(match[1]),g:parseIntFromHex(match[2]),b:parseIntFromHex(match[3]),format:named?'name':'hex'}}
if((match=matchers.hex4.exec(color))){return{r:parseIntFromHex(match[1]+''+match[1]),g:parseIntFromHex(match[2]+''+match[2]),b:parseIntFromHex(match[3]+''+match[3]),a:convertHexToDecimal(match[4]+''+match[4]),format:named?'name':'hex8'}}
if((match=matchers.hex3.exec(color))){return{r:parseIntFromHex(match[1]+''+match[1]),g:parseIntFromHex(match[2]+''+match[2]),b:parseIntFromHex(match[3]+''+match[3]),format:named?'name':'hex'}}
return false}
if(typeof module!=='undefined'&&module.exports){module.exports=tinycolor}
else{window.tinycolor=tinycolor}})(Math)}),,(function(module,exports,__webpack_require__){"use strict";var _tinycolor=__webpack_require__(2)
var _tinycolor2=_interopRequireDefault(_tinycolor)
var _icons=__webpack_require__(1)
var ICONS=_interopRequireWildcard(_icons)
var _easeInOutQuad=__webpack_require__(0)
var _easeInOutQuad2=_interopRequireDefault(_easeInOutQuad)
function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key]}}newObj.default=obj;return newObj}}
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
(function(){if(!window.addEventListener)return
var _window=window,requestAnimationFrame=_window.requestAnimationFrame,cancelAnimationFrame=_window.cancelAnimationFrame
var getComputedStyle=document.defaultView.getComputedStyle||window.getComputedStyle
var topThreshhold=100
var animation=null
var duration=null
var startTime=null
var startPosition=null
var backToTopping=false
var options=CloudflareApps.installs['QP7ABsQZtcgV'].options
var element=void 0
var xmlns='http://www.w3.org/2000/svg'
var icon=document.createElementNS(xmlns,'svg')
icon.setAttribute('class','cloudflare-icon')
icon.setAttributeNS(null,'viewBox','0 0 256 256')
icon.setAttributeNS(null,'version','1.1')
function getColors(){var strategy=options.color.strategy
var backgroundColor=(function(){if(strategy==='dark')return(0,_tinycolor2.default)('#878787')
if(strategy==='light')return(0,_tinycolor2.default)('#ededed')
if(strategy==='custom')return(0,_tinycolor2.default)(options.color.custom)
var _getComputedStyle=getComputedStyle(document.body),backgroundColor=_getComputedStyle.backgroundColor
var components=(0,_tinycolor2.default)(backgroundColor).toHsl()
components.l=Math.abs((components.l+0.5)%1)+(1-components.s)*0.15
return(0,_tinycolor2.default)(components)}())
var iconColor=backgroundColor.clone()
iconColor.setAlpha(0.9)
backgroundColor.setAlpha(options.shape.showBackground?0.2:0)
return{backgroundColor:backgroundColor.toRgbString(),iconColor:iconColor.toRgbString()}}
function resetPositions(){startTime=null
startPosition=null
backToTopping=false}
function animateLoop(time){if(!startTime)startTime=time
var timeSoFar=time-startTime
var easedPosition=(0,_easeInOutQuad2.default)(timeSoFar,startPosition,-startPosition,duration)
window.scrollTo(0,easedPosition)
if(timeSoFar<duration){animation=requestAnimationFrame(animateLoop)}else{resetPositions()}}
function backToTop(){if(backToTopping)return
backToTopping=true
startPosition=document.documentElement.scrollTop||document.body.scrollTop
duration=startPosition/2
requestAnimationFrame(animateLoop)}
function setVisibility(){if(!element)return
var visibility=window.scrollY>topThreshhold?'visible':'hidden'
element.setAttribute('visibility',visibility)}
function setColors(){if(!element)return
var _getColors=getColors(),backgroundColor=_getColors.backgroundColor,iconColor=_getColors.iconColor
element.style.backgroundColor=backgroundColor
icon.style.fill=iconColor}
function setIcon(){icon.innerHTML=''
var path=document.createElementNS(xmlns,'path')
path.setAttributeNS(null,'d',ICONS[options.shape.icon])
icon.appendChild(path)}
function setPosition(){if(!element)return
element.setAttribute('data-position',options.position.value)}
function setShape(){if(!element)return
element.style.borderRadius=(element.clientHeight/2*options.shape.radius).toFixed(2)+'px'}
function updateElement(){element=document.createElement('cloudflare-app')
element.setAttribute('app','back-to-top-button')
element.addEventListener('click',backToTop)
setVisibility()
setIcon()
setPosition()
element.appendChild(icon)
setColors()
document.body.appendChild(element)
requestAnimationFrame(setShape)}
function bootstrap(){updateElement()
window.addEventListener('blur',function(){if(backToTopping){cancelAnimationFrame(animation)
resetPositions()
window.scrollTo(0,0)}})
window.addEventListener('scroll',setVisibility)}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',bootstrap)}else{bootstrap()}
window.CloudflareApps.installs['QP7ABsQZtcgV'].scope={updateColors:function updateColors(nextOptions){options=nextOptions
setColors()},updateShape:function updateShape(nextOptions){options=nextOptions
setIcon()
setShape()
setColors()},updatePosition:function updatePosition(nextOptions){options=nextOptions
setPosition()}}})()})]);};if(CloudflareApps.matchPage(CloudflareApps.installs['A3VP6wwELzrX'].URLPatterns)){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.i=function(value){return value;};__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter});}};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=5);})
([(function(module,exports,__webpack_require__){var pSlice=Array.prototype.slice;var objectKeys=__webpack_require__(3);var isArguments=__webpack_require__(2);var deepEqual=module.exports=function(actual,expected,opts){if(!opts)opts={};if(actual===expected){return true;}else if(actual instanceof Date&&expected instanceof Date){return actual.getTime()===expected.getTime();}else if(!actual||!expected||typeof actual!='object'&&typeof expected!='object'){return opts.strict?actual===expected:actual==expected;}else{return objEquiv(actual,expected,opts);}}
function isUndefinedOrNull(value){return value===null||value===undefined;}
function isBuffer(x){if(!x||typeof x!=='object'||typeof x.length!=='number')return false;if(typeof x.copy!=='function'||typeof x.slice!=='function'){return false;}
if(x.length>0&&typeof x[0]!=='number')return false;return true;}
function objEquiv(a,b,opts){var i,key;if(isUndefinedOrNull(a)||isUndefinedOrNull(b))
return false;if(a.prototype!==b.prototype)return false;if(isArguments(a)){if(!isArguments(b)){return false;}
a=pSlice.call(a);b=pSlice.call(b);return deepEqual(a,b,opts);}
if(isBuffer(a)){if(!isBuffer(b)){return false;}
if(a.length!==b.length)return false;for(i=0;i<a.length;i++){if(a[i]!==b[i])return false;}
return true;}
try{var ka=objectKeys(a),kb=objectKeys(b);}catch(e){return false;}
if(ka.length!=kb.length)
return false;ka.sort();kb.sort();for(i=ka.length-1;i>=0;i--){if(ka[i]!=kb[i])
return false;}
for(i=ka.length-1;i>=0;i--){key=ka[i];if(!deepEqual(a[key],b[key],opts))return false;}
return typeof a===typeof b;}}),(function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,'__esModule',{value:true})
exports.default=stringToHash
function stringToHash(){var string=arguments.length>0&&arguments[0]!==undefined?arguments[0]:''
var hash=0
if(string.length===0)return hash
for(var i=0;i<string.length;i++){var chr=string.charCodeAt(i)
hash=(hash<<5)-hash+chr
hash|=0}
return hash}}),(function(module,exports){var supportsArgumentsClass=(function(){return Object.prototype.toString.call(arguments)})()=='[object Arguments]';exports=module.exports=supportsArgumentsClass?supported:unsupported;exports.supported=supported;function supported(object){return Object.prototype.toString.call(object)=='[object Arguments]';};exports.unsupported=unsupported;function unsupported(object){return object&&typeof object=='object'&&typeof object.length=='number'&&Object.prototype.hasOwnProperty.call(object,'callee')&&!Object.prototype.propertyIsEnumerable.call(object,'callee')||false;};}),(function(module,exports){exports=module.exports=typeof Object.keys==='function'?Object.keys:shim;exports.shim=shim;function shim(obj){var keys=[];for(var key in obj)keys.push(key);return keys;}}),,(function(module,exports,__webpack_require__){"use strict";var _deepEqual=__webpack_require__(0)
var _deepEqual2=_interopRequireDefault(_deepEqual)
var _stringToHash=__webpack_require__(1)
var _stringToHash2=_interopRequireDefault(_stringToHash)
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
(function(){'use strict'
if(!window.addEventListener)return
var hash=void 0
var options=CloudflareApps.installs['A3VP6wwELzrX'].options
var product=CloudflareApps.installs['A3VP6wwELzrX'].product
var localStorage=window.localStorage||{}
var previewMessageIndex=0
var LOCAL_STORAGE_PREFIX='cf-welcome-bar-hashes-seen-'
var VISIBILITY_ATTRIBUTE='data-cf-welcome-bar-visibility'
var DAY_DURATION=172800000
var documentElementOriginallyPositionStatic=window.getComputedStyle(document.documentElement).position==='static'
var element=document.createElement('cloudflare-app')
element.setAttribute('app','welcome-bar')
var htmlStyle=document.createElement('style')
document.head.appendChild(htmlStyle)
var elementStyle=document.createElement('style')
document.head.appendChild(elementStyle)
function getMaxZIndex(){var max=0
var elements=document.getElementsByTagName('*')
Array.prototype.slice.call(elements).forEach(function(element){var zIndex=parseInt(document.defaultView.getComputedStyle(element).zIndex,10)
max=zIndex?Math.max(max,zIndex):max})
return max}
function setPageStyles(){setHTMLStyle()
setFixedElementStyles()}
function setHTMLStyle(){if(!document.body)return
var style=''
if(documentElementOriginallyPositionStatic&&isShown()){style='\n        html {\n          position: relative;\n          top: '+element.clientHeight+'px;\n        }\n      '}
htmlStyle.innerHTML=style}
function setFixedElementStyles(){function removeTopStyle(node){var currentStyle=node.getAttribute('style')
if(!currentStyle)return
node.setAttribute('style',currentStyle.replace(/top[^]+?/g,''))}
var elementHeight=element.clientHeight
var allNodes=document.querySelectorAll('*:not([app="welcome-bar"]):not([data-cfapps-welcome-bar-adjusted-fixed-element-original-top])')
Array.prototype.forEach.call(allNodes,function(node){var computedStyle=window.getComputedStyle(node)
var boundingClientRect=node.getBoundingClientRect()
var isSticky=computedStyle.position==='sticky'
var isFixed=computedStyle.position==='fixed'
var isBottomFixed=computedStyle.bottom==='0px'&&boundingClientRect.bottom===window.innerHeight&&boundingClientRect.top>=elementHeight
if("A3VP6wwELzrX"==='preview'&&node.nodeName==='IFRAME'&&node.src.indexOf('https://embedded.cloudflareapps.com')!==-1){return}
if((isFixed||isSticky)&&!isBottomFixed){var top=boundingClientRect.top
var styleTop=parseInt(computedStyle.top,10)
if(isSticky||top===styleTop&&top<=elementHeight){node.setAttribute('data-cfapps-welcome-bar-adjusted-fixed-element-original-top',top)}}})
var adjustedNodes=document.querySelectorAll('[data-cfapps-welcome-bar-adjusted-fixed-element-original-top]')
Array.prototype.forEach.call(adjustedNodes,function(node){removeTopStyle(node)
var computedStyle=window.getComputedStyle(node)
var isFixedOrSticky=computedStyle.position==='fixed'||computedStyle.position==='sticky'
if(isFixedOrSticky&&isShown()&&elementHeight>0){var newTop=(parseInt(computedStyle.top,10)||0)+elementHeight
node.style.top=newTop+'px'}})}
function isShown(){return document.documentElement.getAttribute(VISIBILITY_ATTRIBUTE)==='visible'}
function cleanUpExpiredHashes(){var weekAgo=Date.now()-DAY_DURATION*7
Object.keys(localStorage).filter(function(key){return key.startsWith(LOCAL_STORAGE_PREFIX)}).filter(function(key){return weekAgo>localStorage[key]}).forEach(function(key){return delete localStorage[key]})}
function getLocalStorageKey(){return LOCAL_STORAGE_PREFIX+hash}
function hideWelcomeBar(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{persist:false},persist=_ref.persist
document.documentElement.setAttribute(VISIBILITY_ATTRIBUTE,'hidden')
element.removeAttribute('data-slide-animation')
if(persist){try{localStorage[getLocalStorageKey()]=Date.now()}catch(e){}}
setPageStyles()}
var hideWelcomeBarPersist=hideWelcomeBar.bind(null,{persist:true})
function cancelAnimation(){element.removeEventListener('transitionend',hideWelcomeBar)
element.removeAttribute('data-slide-animation')}
function updateAnimation(){if(!options.behavior.automaticallyHide){cancelAnimation()
return}
element.addEventListener('transitionend',hideWelcomeBar)
element.addEventListener('mouseover',cancelAnimation)
element.addEventListener('click',cancelAnimation)
window.requestAnimationFrame(function(){element.setAttribute('data-slide-animation','')
window.requestAnimationFrame(function(){element.setAttribute('data-slide-animation','complete')})})}
function updateElementStyle(){elementStyle.innerHTML='\n      cloudflare-app[app="welcome-bar"] {\n        background-color: '+options.theme.backgroundColor+';\n        color: '+options.theme.textColor+';\n      }\n\n      @media (max-width: 768px) {\n        cloudflare-app[app="welcome-bar"][data-style="prominent"] .alert-cta-button,\n        cloudflare-app[app="welcome-bar"][data-style="prominent"] .alert-cta-button:hover,\n        cloudflare-app[app="welcome-bar"][data-style="prominent"] .alert-cta-button:active {\n          color: '+options.theme.textColor+';\n        }\n      }\n\n      @media (min-width: 768px) {\n        cloudflare-app[app="welcome-bar"][data-style="prominent"] .alert-cta-button,\n        cloudflare-app[app="welcome-bar"][data-style="prominent"] .alert-cta-button:hover,\n        cloudflare-app[app="welcome-bar"][data-style="prominent"] .alert-cta-button:active {\n          background-color: '+options.theme.buttonBackgroundColor+' !important;\n          color: '+(options.theme.buttonTextColorStrategy==='auto'?options.theme.backgroundColor:options.theme.buttonTextColor)+' !important;\n        }\n      }\n    '
element.setAttribute('data-style',options.theme.style)}
function hasSeenHash(){var foundHash=false
try{foundHash=!!localStorage[getLocalStorageKey()]}catch(e){}
return foundHash}
function updateElement(){var isPro=product&&product.id==='pro'
var message=void 0,cta=void 0
var shouldShow=true
if(!options.messagePlan||options.messagePlan==='single'){var _options=options
message=_options.message
cta=_options.cta}else if(!options.messages.length){shouldShow=false}else{var messageIndex=void 0
if("A3VP6wwELzrX"==='preview'){messageIndex=previewMessageIndex}else{messageIndex=Math.floor(Math.random()*options.messages.length)}
if(!options.messages.length)return
var entry=options.messages[messageIndex];message=entry.message
cta=entry.cta
if(isPro&&entry.useEndDate){var endDate=new Date(entry.endDate)
var now=new Date()
shouldShow=endDate<now}}
hash=(0,_stringToHash2.default)(message)
if("A3VP6wwELzrX"!=='preview'&&(!shouldShow||hasSeenHash())){hideWelcomeBar()
return}
updateElementStyle()
element.innerHTML=''
element.style.zIndex=getMaxZIndex()+1
var messageContainer=document.createElement('alert-message')
var messageContent=document.createElement('alert-message-content')
messageContent.textContent=(message||'').trim()||'We just launched an amazing new product!'
messageContent.innerHTML=messageContent.innerHTML.replace(/\n/g,'<br />')
messageContainer.appendChild(messageContent)
if(cta.show){var ctaButton=document.createElement('a')
ctaButton.className='alert-cta-button'
ctaButton.textContent=(cta.label||'').trim()||'More info'
if(cta.newWindow)ctaButton.target='_blank'
if(cta.url)ctaButton.href=cta.url
messageContent.appendChild(ctaButton)}
element.appendChild(messageContainer)
if(options.behavior.showCloseButton){var dismissButton=document.createElement('alert-dismiss')
dismissButton.setAttribute('role','button')
dismissButton.textContent='×'
dismissButton.addEventListener('click',hideWelcomeBarPersist)
element.appendChild(dismissButton)}
document.documentElement.setAttribute(VISIBILITY_ATTRIBUTE,'visible')
updateAnimation()}
function bootstrap(){cleanUpExpiredHashes()
document.body.appendChild(element)
updateElement()
window.requestAnimationFrame(setPageStyles)
window.addEventListener('resize',setPageStyles)}
window.CloudflareApps.installs['A3VP6wwELzrX'].scope={updateOptions:function updateOptions(nextOptions){if(nextOptions.messages.length!==options.messages.length){previewMessageIndex=nextOptions.messages.length-1}else{for(var i=0;i<nextOptions.messages.length;i++){var oldEntry=options.messages[i]
var nextEntry=nextOptions.messages[i]
if(!(0,_deepEqual2.default)(nextEntry,oldEntry)){previewMessageIndex=i
break}}}
options=nextOptions
updateElement()
setPageStyles()},updateProduct:function updateProduct(nextProduct){product=nextProduct
updateElement()
setPageStyles()},updateTheme:function updateTheme(nextOptions){var themeStyleChanged=nextOptions.theme.style!==options.theme.style
options=nextOptions
updateElementStyle()
if(themeStyleChanged)setPageStyles()
if(!isShown()){document.documentElement.setAttribute(VISIBILITY_ATTRIBUTE,'visible')}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',bootstrap)}else{bootstrap()}})()})]);};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwPSJiYWNrLXRvLXRvcC1idXR0b24iXSB7CiAgYmFja2dyb3VuZDogI2NjYzsKICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xKTsKICBjdXJzb3I6IHBvaW50ZXI7CiAgZGlzcGxheTogYmxvY2s7CiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7CiAgZm9udC1zaXplOiA0MHB4OwogIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7CiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50YWxpYXNlZDsKICBmb250LXN0eWxlOiBub3JtYWw7CiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsKICBoZWlnaHQ6IDc1cHg7CiAgbGV0dGVyLXNwYWNpbmc6IDA7CiAgbGluZS1oZWlnaHQ6IDc1cHg7CiAgb3BhY2l0eTogMDsKICBwb2ludGVyLWV2ZW50czogbm9uZTsKICBwb3NpdGlvbjogZml4ZWQ7CiAgdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7CiAgdGV4dC1hbGlnbjogY2VudGVyOwogIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7CiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZS1pbi1vdXQ7CiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOwogICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICB3aWR0aDogNzVweDsKICB6LWluZGV4OiA3MDAwOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJhY2stdG8tdG9wLWJ1dHRvbiJdW2RhdGEtcG9zaXRpb25ePSJ0b3AiXSB7CiAgdG9wOiAyNXB4Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJhY2stdG8tdG9wLWJ1dHRvbiJdW2RhdGEtcG9zaXRpb25ePSJib3R0b20iXSB7CiAgYm90dG9tOiAyNXB4Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJhY2stdG8tdG9wLWJ1dHRvbiJdW2RhdGEtcG9zaXRpb24kPSJsZWZ0Il0gewogIGxlZnQ6IDI1cHg7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYmFjay10by10b3AtYnV0dG9uIl1bZGF0YS1wb3NpdGlvbiQ9InJpZ2h0Il0gewogIHJpZ2h0OiAyNXB4Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJhY2stdG8tdG9wLWJ1dHRvbiJdOmhvdmVyIHsKICAtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcygxMDglKTsKICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDglKTsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJiYWNrLXRvLXRvcC1idXR0b24iXTphY3RpdmUgewogIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxcHgsIDApOwogICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxcHgsIDApOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJhY2stdG8tdG9wLWJ1dHRvbiJdW3Zpc2liaWxpdHk9InZpc2libGUiXSB7CiAgcG9pbnRlci1ldmVudHM6IGFsbDsKICBvcGFjaXR5OiAxOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJhY2stdG8tdG9wLWJ1dHRvbiJdW3NoYXBlPSJyb3VuZGVkIl0gewogIGJvcmRlci1yYWRpdXM6IDVweDsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJiYWNrLXRvLXRvcC1idXR0b24iXVtzaGFwZT0iY2lyY2xlIl0gewogIGJvcmRlci1yYWRpdXM6IDUwJTsKfQoKQG1lZGlhIChtYXgtd2lkdGg6IDc4NnB4KSB7CiAgY2xvdWRmbGFyZS1hcHBbYXBwPSJiYWNrLXRvLXRvcC1idXR0b24iXSB7CiAgICBoZWlnaHQ6IDUwcHg7CiAgICB3aWR0aDogNTBweDsKICAgIGZvbnQtc2l6ZTogMjVweDsKICAgIGxpbmUtaGVpZ2h0OiA1MHB4OwogICAgcmlnaHQ6IDEwcHg7CiAgICBib3R0b206IDEwcHg7CiAgfQoKICBjbG91ZGZsYXJlLWFwcFthcHA9ImJhY2stdG8tdG9wLWJ1dHRvbiJdW3NoYXBlPSJyb3VuZGVkIl0gewogICAgYm9yZGVyLXJhZGl1czogM3B4OwogIH0KCn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYmFjay10by10b3AtYnV0dG9uIl0gLmNsb3VkZmxhcmUtaWNvbiB7CiAgYm90dG9tOiAwOwogIGRpc3BsYXk6IGJsb2NrOwogIGZpbGw6ICM2NjY2NjY7CiAgZmlsbDogcmdiYSgwLCAwLCAwLCAuNCk7CiAgaGVpZ2h0OiAxMDAlOwogIGxlZnQ6IDA7CiAgcG9pbnRlci1ldmVudHM6IG5vbmU7CiAgcG9zaXRpb246IGFic29sdXRlOwogIHJpZ2h0OiAwOwogIHRvcDogMDsKICB3aWR0aDogMTAwJTsKfQovKgogIFNwZWNpZmljaXR5IHRvIGNvbWJhdCB0aGluZ3MgbGlrZSB0aGlzIChmcm9tIENOTi5jb20gYXMgb2YgNi82LzE2KToKCiAgYm9keSA+IDpub3QoLm5hdikgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDsKICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50OwogIH0KKi8KaHRtbCA+IGJvZHkgPiBjbG91ZGZsYXJlLWFwcFthcHA9IndlbGNvbWUtYmFyIl0gewogIGRpc3BsYXk6IGJsb2NrOwogIGRpc3BsYXk6IC13ZWJraXQtYm94OwogIGRpc3BsYXk6IC1tcy1mbGV4Ym94OwogIGRpc3BsYXk6IGZsZXg7CiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjsKICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjsKICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTsKICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTsKICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKICBmb250LXNpemU6IDE2cHg7CiAgbWluLWhlaWdodDogMi41ZW07CiAgbGluZS1oZWlnaHQ6IDE7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKICBwb3NpdGlvbjogZml4ZWQ7CiAgdG9wOiAwOwogIGxlZnQ6IDA7CiAgcmlnaHQ6IDA7CiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7CiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsKICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOwogIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwJSwgMCk7CiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMDAlLCAwKTsKfQoKaHRtbCA+IGJvZHkgPiBjbG91ZGZsYXJlLWFwcFthcHA9IndlbGNvbWUtYmFyIl06OmJlZm9yZSB7CiAgY29udGVudDogIiI7CiAgcG9zaXRpb246IGFic29sdXRlOwogIHRvcDogMDsKICBsZWZ0OiAwOwogIHJpZ2h0OiAwOwogIGJvdHRvbTogMDsKICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4wNSk7CiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApOwp9CgpodG1sID4gYm9keSA+IGNsb3VkZmxhcmUtYXBwW2FwcD0id2VsY29tZS1iYXIiXVtkYXRhLXNsaWRlLWFuaW1hdGlvbl06OmJlZm9yZSB7CiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gZWFzZS1vdXQgOHM7CiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2Utb3V0IDhzOwogIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLW91dCA4cywgLXdlYmtpdC10cmFuc2Zvcm0gZWFzZS1vdXQgOHM7Cn0KCmh0bWwgPiBib2R5ID4gY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdW2RhdGEtc2xpZGUtYW5pbWF0aW9uPSJjb21wbGV0ZSJdOjpiZWZvcmUgewogIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7Cn0KCmh0bWxbZGF0YS1jZi13ZWxjb21lLWJhci12aXNpYmlsaXR5PSJ2aXNpYmxlIl0gPiBib2R5ID4gY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIHsKICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIGFsZXJ0LW1lc3NhZ2UgewogIGRpc3BsYXk6IC13ZWJraXQtYm94OwogIGRpc3BsYXk6IC1tcy1mbGV4Ym94OwogIGRpc3BsYXk6IGZsZXg7CiAgLXdlYmtpdC1ib3gtZmxleDogMTsKICAgICAgLW1zLWZsZXg6IDEgMSBhdXRvOwogICAgICAgICAgZmxleDogMSAxIGF1dG87CiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyOwogICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7CiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIGFsZXJ0LW1lc3NhZ2UtY29udGVudCB7CiAgZGlzcGxheTogLXdlYmtpdC1ib3g7CiAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgZGlzcGxheTogZmxleDsKICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyOwogICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyOwogICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICBmb250LXNpemU6IDEuMWVtOwogIGxpbmUtaGVpZ2h0OiAxLjI7CiAgZm9udC13ZWlnaHQ6IDUwMDsKICBtYXgtd2lkdGg6IDcwMHB4Owp9CgpAZm9udC1mYWNlIHsKICBmb250LWZhbWlseTogImNmYXBwcy13ZWxjb21lLWJhci1pY29ucyI7CiAgZm9udC1zdHlsZTogbm9ybWFsOwogIGZvbnQtd2VpZ2h0OiBub3JtYWw7CiAgc3JjOiB1cmwoZGF0YTphcHBsaWNhdGlvbi94LWZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHUms5VVZFOEFBQU9nQUFvQUFBQUFCWHdBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkRSa1lnQUFBQTlBQUFBTUFBQUFEUktqY3BUMFpHVkUwQUFBRzBBQUFBR2dBQUFCeHpDYzJlVDFNdk1nQUFBZEFBQUFCSUFBQUFZSURLQlNsamJXRndBQUFDR0FBQUFEY0FBQUZDQUEwaTRXaGxZV1FBQUFKUUFBQUFMd0FBQURZRHR0WVdhR2hsWVFBQUFvQUFBQUFnQUFBQUpBYXRBZWhvYlhSNEFBQUNvQUFBQUFnQUFBQUlBL29BQUcxaGVIQUFBQUtvQUFBQUJnQUFBQVlBQWxBQWJtRnRaUUFBQXJBQUFBRFlBQUFCc0VuQkIxcHdiM04wQUFBRGlBQUFBQllBQUFBZy81MEFaM2ljWTJSZ1lXRmdaR1RrU1UxTVR5M1N6VXpPenl0bVlHUmlZR1J3L0NIRDlFT1crWWNFU3c4UFl3UVA4MGNlRmprdUJwWU9EZm51YmppRGg3Mjc1TWVrWHgyc01neGQvRElNREFJeURMMkNNZ3djTWd3bmhSaVlRY2J3TWtnd0tCZGxwbWVVSkdla2xoWGw1eUZaaEd3bkF3TmpPd01USTZPQ2VmZkhYendmR1Q5Ky9QQ1IrYVBZOTZPL2J2dyt5dmJ4WDVIb0w1NFAvM2pZK1g1TSt0RWkraWY4eDR5QWlCOWFmMUwvQVBHeFVGYStIeE5GdWtXN2ViZ0FPa1pHbzNpY1kyQmdZR1FBZ2dzRkRva2crcUxQc1hrd0dnQkVZZ2JsQUFCNG5HTmdadnpMT0lHQmxZR0QxWmgxSmdNRG94eUVacjdPa01Za3hBQUVyQXdRME1DQUNnTFNYRk1ZSEJTc0ZLelkwdjZsTWV4Zy9zSWdEaFJtaEN0UUFFSkdBRVE5QzI5NG5HTmdZR0JtZ0dBWkJrWUdFTEFCOGhqQmZCWUdCU0ROQW9SQXZvTFYvLzhROHY1eHFFb0dSallHR0hONEFpSThCd0NZNGdjTkFIaWNZMkJrWUdBQTRpM1A3MnJIODl0OFplRG1ZQUNCaXo3SDVpSG8veThaL3pGL0FYSTVHSmhBb2dCcWR3MUNBSGljWTJCa1lHRCs4djhsd3c3R3Z3d00vLzh6L21NQWlxQUFKZ0RBaHdlWEFmMEFBQUg5QUFBQUFGQUFBQUlBQUhpY2pZKzlEY0l3RUlWZklFSGlSNVNJMGdVU2xTTTdBZ29Hb0tTa1I4aUswc1NTd3d5TXdCaU13UUNNd1FEVVBKc3JLQ2l3ZFBaM2QrOStER0NDS3pMRWsyR011WEFQQll4d0gwdGNoSE5xN3NJRitTazh3RGliVXBubFEwWm1xU3B5RHlNc2hQdllZeU9jVTNNVExzZ1A0UUg1QlljamF0NEJHZzFPOEdqUkFlNVl1NkNiazIvcGZNVWxza3YrT2IwaDFTdFVLUGtQaFMzdGQ5ZFB6bEtsc2FKVkpJczEyL24ydlBPaGRxb3FqZHFxcituMHJORXJYUmxMNFQvYkhsSytZejVtNDd5NEZ3NHVkSTF2bFMzTlgzM2VFaEJETW5pY1kyQm1BSVAvc3hqU2dCUWpBeG9BQUM2cUFnUUFBQT09KSBmb3JtYXQoIndvZmYiKTsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIC5hbGVydC1jdGEtYnV0dG9uIHsKICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50OwogIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7CiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OwogIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsKICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OwogICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50OwogIGJvcmRlcjogMCAhaW1wb3J0YW50OwogIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsKICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDsKICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDsKICAtd2Via2l0LWJveC1mbGV4OiAwICFpbXBvcnRhbnQ7CiAgICAgIC1tcy1mbGV4OiAwIDAgYXV0byAhaW1wb3J0YW50OwogICAgICAgICAgZmxleDogMCAwIGF1dG8gIWltcG9ydGFudDsKICBmb250LXNpemU6IC44NWVtICFpbXBvcnRhbnQ7CiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDsKICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDsKICBsZXR0ZXItc3BhY2luZzogLjA4ZW07CiAgbGluZS1oZWlnaHQ6IC45NSAhaW1wb3J0YW50OwogIG1heC13aWR0aDogMTZlbSAhaW1wb3J0YW50OwogIG9wYWNpdHk6IC44NTsKICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50OwogIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50OwogIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OwogIHRleHQtaW5kZW50OiAuMDhlbTsKICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50OwogIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDsKICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7CiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIC5hbGVydC1jdGEtYnV0dG9uOjphZnRlciB7CiAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDsKICBjb250ZW50OiAiXDIwM0EiOwogIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50OwogIGZvbnQtZmFtaWx5OiAiY2ZhcHBzLXdlbGNvbWUtYmFyLWljb25zIjsKICBmb250LXNpemU6IDEuM2VtICFpbXBvcnRhbnQ7CiAgZm9udC1zdHlsZTogbm9ybWFsOwogIGZvbnQtd2VpZ2h0OiBpbmhlcml0OwogIGxpbmUtaGVpZ2h0OiAuOCAhaW1wb3J0YW50OwogIG1hcmdpbi10b3A6IC0xcHggIWltcG9ydGFudDsKICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7CiAgcGFkZGluZy1sZWZ0OiAuM2VtICFpbXBvcnRhbnQ7CiAgcG9zaXRpb246IGFic29sdXRlOwogIGxlZnQ6IDEwMCU7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0id2VsY29tZS1iYXIiXSBhbGVydC1kaXNtaXNzIHsKICBjdXJzb3I6IHBvaW50ZXI7CiAgY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgLjI1KTsKICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgLXdlYmtpdC1ib3gtZmxleDogMDsKICAgICAgLW1zLWZsZXg6IDAgMCBhdXRvOwogICAgICAgICAgZmxleDogMCAwIGF1dG87CiAgZm9udC1mYW1pbHk6ICJIZWx2ZXRpY2EgTmV1ZSIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7CiAgZm9udC1zaXplOiAyZW07CiAgZm9udC13ZWlnaHQ6IDMwMDsKICBoZWlnaHQ6IDFlbTsKICBsaW5lLWhlaWdodDogLjc1ZW07CiAgbWFyZ2luOiAwIC4yZW07CiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOwogICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICB3aWR0aDogLjllbTsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIGFsZXJ0LWRpc21pc3M6aG92ZXIgewogIGNvbG9yOiByZ2JhKDEwLCAxMCwgMTAsIC41KTsKfQoKaHRtbCA+IGJvZHkgPiBjbG91ZGZsYXJlLWFwcFthcHA9IndlbGNvbWUtYmFyIl1bZGF0YS1zdHlsZT0ic2xpbSJdIHsKICBmb250LXNpemU6IC45MmVtOwogIG1pbi1oZWlnaHQ6IDIuMmVtOwp9CgpodG1sID4gYm9keSA+IGNsb3VkZmxhcmUtYXBwW2FwcD0id2VsY29tZS1iYXIiXVtkYXRhLXN0eWxlPSJwcm9taW5lbnQiXSAuYWxlcnQtY3RhLWJ1dHRvbiB7CiAgYm9yZGVyLXJhZGl1czogLjE1ZW07Cn0KCkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgewogIGNsb3VkZmxhcmUtYXBwW2FwcD0id2VsY29tZS1iYXIiXSB7CiAgICBwYWRkaW5nOiAuNWVtIDA7CiAgfQoKICBjbG91ZGZsYXJlLWFwcFthcHA9IndlbGNvbWUtYmFyIl1bZGF0YS1zdHlsZT0icHJvbWluZW50Il0gLmFsZXJ0LWN0YS1idXR0b24gewogICAgcGFkZGluZzogLjY1ZW0gMS43NWVtIC42ZW0gLjllbSAhaW1wb3J0YW50OwogIH0KCiAgY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdW2RhdGEtc3R5bGU9InByb21pbmVudCJdIC5hbGVydC1jdGEtYnV0dG9uOjphZnRlciB7CiAgICBsZWZ0OiBhdXRvOwogIH0KCiAgY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIC5hbGVydC1jdGEtYnV0dG9uIHsKICAgIG1hcmdpbi1sZWZ0OiAxZW07CiAgfQp9CgpAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHsKICBodG1sID4gYm9keSA+IGNsb3VkZmxhcmUtYXBwW2FwcD0id2VsY29tZS1iYXIiXSB7CiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyOwogICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICBmb250LXNpemU6IC45MmVtOwogICAgbWluLWhlaWdodDogMi4yZW07CiAgICBwYWRkaW5nOiAuNWVtIDAgLjVlbSAuNWVtOwogIH0KCiAgY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIC5hbGVydC1jdGEtYnV0dG9uIHsKICAgIG1hcmdpbi10b3A6IC41ZW07CiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OwogICAgLXdlYmtpdC1ib3gtZmxleDogMDsKICAgICAgICAtbXMtZmxleDogMCAwIGF1dG87CiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvOwogIH0KCiAgY2xvdWRmbGFyZS1hcHBbYXBwPSJ3ZWxjb21lLWJhciJdIGFsZXJ0LW1lc3NhZ2UtY29udGVudCB7CiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7CiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbCAhaW1wb3J0YW50OwogICAgICAgIC1tcy1mbGV4LWZsb3c6IGNvbHVtbiBub3dyYXAgIWltcG9ydGFudDsKICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwICFpbXBvcnRhbnQ7CiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDsKICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDsKICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsKICB9Cn0KCg==';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();