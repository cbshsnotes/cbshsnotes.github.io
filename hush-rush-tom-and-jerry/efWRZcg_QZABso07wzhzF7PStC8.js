;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="f0baeb8126a6b176cf2de66ac20f66f7";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["A3VP6wwELzrX"]={appId:"ZCDIXCYkgZ6P",scope:{}};;CloudflareApps.installs["A3VP6wwELzrX"].options={"behavior":{"automaticallyHide":false,"showCloseButton":true},"cta":{"label":"Contact Us For License","newWindow":false,"show":true,"url":"https://www.forestrygames.com/p/contact.html"},"message":"Get Unlimited Benefits on Mega Bundle All HTML5 Games Pack - USD $9999 - Limited Time Offer","messagePlan":"single","messages":[{"cta":{"label":"","newWindow":false,"show":true},"endDate":"Mon Dec 30 2019 11:30","useEndDate":false}],"theme":{"backgroundColor":"#d10000","buttonBackgroundColor":"#ffffff","buttonTextColor":"#000000","buttonTextColorStrategy":"auto","style":"prominent","textColor":"#ffffff"}};;CloudflareApps.installs["A3VP6wwELzrX"].URLPatterns=["^forestrygames.com/?.*$","^games.forestrygames.com/?.*$","^shop.forestrygames.com/?.*$","^www.forestrygames.com/?.*$"];;CloudflareApps.installs["A3VP6wwELzrX"].product={"id":"basic"};;CloudflareApps.installs["KsCBDNzojKf6"]={appId:"NFE2MpUAp1fZ",scope:{}};;CloudflareApps.installs["KsCBDNzojKf6"].options={"tag_id":"GTM-TWKXWB4"};;CloudflareApps.installs["QP7ABsQZtcgV"]={appId:"0VJ1mCYqPTh4",scope:{}};;CloudflareApps.installs["QP7ABsQZtcgV"].options={"color":{"custom":"#000000","strategy":"automatic"},"position":{"value":"bottom-right"},"shape":{"icon":"line","radius":0.13,"showBackground":true}};;CloudflareApps.installs["QP7ABsQZtcgV"].URLPatterns=["^connect.forestrygames.com/?.*$","^shop.forestrygames.com/?.*$","^www.forestrygames.com/?.*$"];;CloudflareApps.installs["iaGz9RgikjFP"]={appId:"b9dwZce78j9q",scope:{}};;CloudflareApps.installs["iaGz9RgikjFP"].options={"account":{"accountId":"-6MI-5xnCzNx","service":"chatra","userId":"vLXwMeJG2BQTuBHsZ"},"advanced":{"devices":"all","enabled":true,"groupId":"","language":"","zIndex":1000000},"button":{"bgColor":"#804000","position":"bl","size":60,"style":"tab","textColor":"#ffffff","useChatraSettings":false},"window":{"agentBubbleBg":"#f1f3f5","clientBubbleBg":"#d4f2fc","height":600,"width":380}};;CloudflareApps.installs["iaGz9RgikjFP"].URLPatterns=["^forestrygames.com/?.*$","^shop.forestrygames.com/?.*$","^www.forestrygames.com/?.*$"];;CloudflareApps.installs["3uVLdaEVaQTv"]={appId:"lMxPPXVOqmoE",scope:{}};;CloudflareApps.installs["3uVLdaEVaQTv"].options={"anonymizeIp":false,"id":"UA-107994504-1","social":true};;CloudflareApps.installs["ItShzHgN1Zf1"]={appId:"-gXRR7q4QzkP",scope:{}};;CloudflareApps.installs["ItShzHgN1Zf1"].options={"action":{"color":"#c0670e","label":"Contact Us for Details","newtab":true,"show":true,"url":"https://www.forestrygames.com/p/contact.html"},"delay":3,"paused":false,"position":"left","renew":"0sec","text":{"html":"\u003cp\u003eNeed to license games for your business?\u003c/p\u003e","markdown":"Need to license games for your business?"},"title":"License HTML5 Games"};;CloudflareApps.installs["ItShzHgN1Zf1"].URLPatterns=["^games.forestrygames.com/?.*$"];;CloudflareApps.installs["bXCY7Jz1CwQd"]={appId:"Bqo4JBRinHeM",scope:{}};;CloudflareApps.installs["bXCY7Jz1CwQd"].options={"advanced":{"action":"like","share":true,"showFaces":false,"url":"https://www.facebook.com/ForestryGames","urlType":"provided"},"layout":"button_count","location":{"method":"after","selector":"#Translate1"},"showAdvanced":true};;CloudflareApps.installs["bXCY7Jz1CwQd"].selectors={"location.selector":"#Translate1"};;CloudflareApps.installs["wlVEaiJ250KQ"]={appId:"t8Sk01am_9iA",scope:{}};;CloudflareApps.installs["wlVEaiJ250KQ"].options={"advancedOptions":{"disableOnAJAX":false,"disableOnPushState":false},"color":"black","hidePage":false,"showAdvanced":false,"theme":"flash"};;CloudflareApps.installs["ywKwgp5EjfX8"]={appId:"Ek_0U0d0YWhZ",scope:{}};;CloudflareApps.installs["ywKwgp5EjfX8"].options={};;if(CloudflareApps.matchPage(CloudflareApps.installs['bXCY7Jz1CwQd'].URLPatterns)){(function(){if(!document.addEventListener)return
var options=CloudflareApps.installs['bXCY7Jz1CwQd'].options
var isPreview="bXCY7Jz1CwQd"==='preview'
var element
function fbAsyncInit(){window.FB.init({appId:'819140248140343',xfbml:false,version:'v2.9'})
window.FB.AppEvents.logPageView()
updateElement()}
function loadFacebookScript(){var rootId='fb-root'
var sdkId='facebook-jssdk'
if(document.getElementById(rootId)&&document.getElementById(sdkId))return
var root=document.createElement('div')
root.id=rootId
document.body.appendChild(root)
var script=document.createElement('script')
script.id=sdkId
script.src='//connect.facebook.net/en_US/sdk.js'
var firstScript=document.getElementsByTagName('script')[0]
firstScript.parentNode.insertBefore(script,firstScript)
window.fbAsyncInit=fbAsyncInit}
function getCanonicalURL(){var url=isPreview?CloudflareApps.proxy.originalURL.raw:document.location.href
if(!document.head)return url
var link=document.head.querySelector('link[rel="canonical"][href]')
if(!link)return url
return link.getAttribute('href')}
function updateElement(){element=CloudflareApps.createElement(options.location,element)
if(!element||!element.parentNode)return
var attributes={class:'fb-like',app:'like-button','cf-env':isPreview?'preview':'production','data-href':options.advanced.urlType==='automatic'?getCanonicalURL():options.advanced.url,'data-layout':options.layout,'data-action':options.advanced.action,'data-share':options.advanced.share,'data-show-faces':options.advanced.showFaces}
Object.keys(attributes).forEach(function(key){element.setAttribute(key,attributes[key])})
window.FB.XFBML.parse()}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',loadFacebookScript)}else{loadFacebookScript()}
window.CloudflareApps.installs['bXCY7Jz1CwQd'].scope={setOptions:function setOptions(nextOptions){options=nextOptions
if(element&&element.parentNode){element.parentNode.removeChild(element)
element=null}
updateElement()}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['wlVEaiJ250KQ'].URLPatterns)){(function(){var AjaxMonitor,Bar,DocumentMonitor,ElementMonitor,ElementTracker,EventLagMonitor,Evented,Events,NoTargetError,Pace,RequestIntercept,SOURCE_KEYS,Scaler,SocketRequestTracker,XHRRequestTracker,animation,avgAmplitude,bar,cancelAnimation,cancelAnimationFrame,defaultOptions,extend,extendNative,getFromDOM,getIntercept,handlePushState,ignoreStack,init,now,options,paceHideStyle,requestAnimationFrame,result,runAnimation,scalers,shouldIgnoreURL,shouldTrack,source,sources,uniScaler,_WebSocket,_XDomainRequest,_XMLHttpRequest,_i,_intercept,_len,_pushState,_ref,_ref1,_replaceState,__slice=[].slice,__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;},__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i;}return-1;};defaultOptions={hidePage:false,catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:true,restartOnPushState:true,restartOnRequestAfter:500,target:'body',elements:{checkInterval:100,selectors:['body']},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:['GET'],trackWebSockets:true,ignoreURLs:[]}};now=function(){var _ref;return(_ref=typeof performance!=="undefined"&&performance!==null?typeof performance.now==="function"?performance.now():void 0:void 0)!=null?_ref:+(new Date);};requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame;if(requestAnimationFrame==null){requestAnimationFrame=function(fn){return setTimeout(fn,50);};cancelAnimationFrame=function(id){return clearTimeout(id);};}
runAnimation=function(fn){var last,tick;last=now();tick=function(){var diff;diff=now()-last;if(diff>=33){last=now();return fn(diff,function(){return requestAnimationFrame(tick);});}else{return setTimeout(tick,33-diff);}};return tick();};result=function(){var args,key,obj;obj=arguments[0],key=arguments[1],args=3<=arguments.length?__slice.call(arguments,2):[];if(typeof obj[key]==='function'){return obj[key].apply(obj,args);}else{return obj[key];}};extend=function(){var key,out,source,sources,val,_i,_len;out=arguments[0],sources=2<=arguments.length?__slice.call(arguments,1):[];for(_i=0,_len=sources.length;_i<_len;_i++){source=sources[_i];if(source){for(key in source){if(!__hasProp.call(source,key))continue;val=source[key];if((out[key]!=null)&&typeof out[key]==='object'&&(val!=null)&&typeof val==='object'){extend(out[key],val);}else{out[key]=val;}}}}
return out;};avgAmplitude=function(arr){var count,sum,v,_i,_len;sum=count=0;for(_i=0,_len=arr.length;_i<_len;_i++){v=arr[_i];sum+=Math.abs(v);count++;}
return sum/count;};getFromDOM=function(key,json){var data,e,el;if(key==null){key='options';}
if(json==null){json=true;}
el=document.querySelector("[data-pace-"+key+"]");if(!el){return;}
data=el.getAttribute("data-pace-"+key);if(!json){return data;}
try{return JSON.parse(data);}catch(_error){e=_error;return typeof console!=="undefined"&&console!==null?console.error("Error parsing inline pace options",e):void 0;}};Evented=(function(){function Evented(){}
Evented.prototype.on=function(event,handler,ctx,once){var _base;if(once==null){once=false;}
if(this.bindings==null){this.bindings={};}
if((_base=this.bindings)[event]==null){_base[event]=[];}
return this.bindings[event].push({handler:handler,ctx:ctx,once:once});};Evented.prototype.once=function(event,handler,ctx){return this.on(event,handler,ctx,true);};Evented.prototype.off=function(event,handler){var i,_ref,_results;if(((_ref=this.bindings)!=null?_ref[event]:void 0)==null){return;}
if(handler==null){return delete this.bindings[event];}else{i=0;_results=[];while(i<this.bindings[event].length){if(this.bindings[event][i].handler===handler){_results.push(this.bindings[event].splice(i,1));}else{_results.push(i++);}}
return _results;}};Evented.prototype.trigger=function(){var args,ctx,event,handler,i,once,_ref,_ref1,_results;event=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];if((_ref=this.bindings)!=null?_ref[event]:void 0){i=0;_results=[];while(i<this.bindings[event].length){_ref1=this.bindings[event][i],handler=_ref1.handler,ctx=_ref1.ctx,once=_ref1.once;handler.apply(ctx!=null?ctx:this,args);if(once){_results.push(this.bindings[event].splice(i,1));}else{_results.push(i++);}}
return _results;}};return Evented;})();Pace=window.Pace||{};window.Pace=Pace;extend(Pace,Evented.prototype);options=Pace.options=extend({},defaultOptions,window.paceOptions,getFromDOM());_ref=['ajax','document','eventLag','elements'];for(_i=0,_len=_ref.length;_i<_len;_i++){source=_ref[_i];if(options[source]===true){options[source]=defaultOptions[source];}}
NoTargetError=(function(_super){__extends(NoTargetError,_super);function NoTargetError(){_ref1=NoTargetError.__super__.constructor.apply(this,arguments);return _ref1;}
return NoTargetError;})(Error);Bar=(function(){function Bar(){this.progress=0;}
Bar.prototype.getElement=function(){var targetElement;if(this.el==null){targetElement=document.querySelector(options.target);if(!targetElement){throw new NoTargetError;}
this.el=document.createElement('div');this.el.className="pace pace-active";document.body.className=document.body.className.replace(/pace-done/g,'');document.body.className+=' pace-running';this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';if(targetElement.firstChild!=null){targetElement.insertBefore(this.el,targetElement.firstChild);}else{targetElement.appendChild(this.el);}}
return this.el;};Bar.prototype.finish=function(){var el;el=this.getElement();el.className=el.className.replace('pace-active','');el.className+=' pace-inactive';document.body.className=document.body.className.replace('pace-running','');return document.body.className+=' pace-done';};Bar.prototype.update=function(prog){this.progress=prog;return this.render();};Bar.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement());}catch(_error){NoTargetError=_error;}
return this.el=void 0;};Bar.prototype.render=function(){var el,progressStr;if(document.querySelector(options.target)==null){return false;}
el=this.getElement();el.children[0].style.width=""+this.progress+"%";if(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0){el.children[0].setAttribute('data-progress-text',""+(this.progress|0)+"%");if(this.progress>=100){progressStr='99';}else{progressStr=this.progress<10?"0":"";progressStr+=this.progress|0;}
el.children[0].setAttribute('data-progress',""+progressStr);}
return this.lastRenderedProgress=this.progress;};Bar.prototype.done=function(){return this.progress>=100;};return Bar;})();Events=(function(){function Events(){this.bindings={};}
Events.prototype.trigger=function(name,val){var binding,_j,_len1,_ref2,_results;if(this.bindings[name]!=null){_ref2=this.bindings[name];_results=[];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){binding=_ref2[_j];_results.push(binding.call(this,val));}
return _results;}};Events.prototype.on=function(name,fn){var _base;if((_base=this.bindings)[name]==null){_base[name]=[];}
return this.bindings[name].push(fn);};return Events;})();_XMLHttpRequest=window.XMLHttpRequest;_XDomainRequest=window.XDomainRequest;_WebSocket=window.WebSocket;extendNative=function(to,from){var e,key,val,_results;_results=[];for(key in from.prototype){try{val=from.prototype[key];if((to[key]==null)&&typeof val!=='function'){_results.push(to[key]=val);}else{_results.push(void 0);}}catch(_error){e=_error;}}
return _results;};ignoreStack=[];Pace.ignore=function(){var args,fn,ret;fn=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];ignoreStack.unshift('ignore');ret=fn.apply(null,args);ignoreStack.shift();return ret;};Pace.track=function(){var args,fn,ret;fn=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];ignoreStack.unshift('track');ret=fn.apply(null,args);ignoreStack.shift();return ret;};shouldTrack=function(method){var _ref2;if(method==null){method='GET';}
if(ignoreStack[0]==='track'){return'force';}
if(!ignoreStack.length&&options.ajax){if(method==='socket'&&options.ajax.trackWebSockets){return true;}else if(_ref2=method.toUpperCase(),__indexOf.call(options.ajax.trackMethods,_ref2)>=0){return true;}}
return false;};RequestIntercept=(function(_super){__extends(RequestIntercept,_super);function RequestIntercept(){var monitorXHR,_this=this;RequestIntercept.__super__.constructor.apply(this,arguments);monitorXHR=function(req){var _open;_open=req.open;return req.open=function(type,url,async){if(shouldTrack(type)){_this.trigger('request',{type:type,url:url,request:req});}
return _open.apply(req,arguments);};};window.XMLHttpRequest=function(flags){var req;req=new _XMLHttpRequest(flags);monitorXHR(req);return req;};try{extendNative(window.XMLHttpRequest,_XMLHttpRequest);}catch(_error){}
if(_XDomainRequest!=null){window.XDomainRequest=function(){var req;req=new _XDomainRequest;monitorXHR(req);return req;};try{extendNative(window.XDomainRequest,_XDomainRequest);}catch(_error){}}
if((_WebSocket!=null)&&options.ajax.trackWebSockets){window.WebSocket=function(url,protocols){var req;if(protocols!=null){req=new _WebSocket(url,protocols);}else{req=new _WebSocket(url);}
if(shouldTrack('socket')){_this.trigger('request',{type:'socket',url:url,protocols:protocols,request:req});}
return req;};try{extendNative(window.WebSocket,_WebSocket);}catch(_error){}}}
return RequestIntercept;})(Events);_intercept=null;getIntercept=function(){if(_intercept==null){_intercept=new RequestIntercept;}
return _intercept;};shouldIgnoreURL=function(url){var pattern,_j,_len1,_ref2;_ref2=options.ajax.ignoreURLs;for(_j=0,_len1=_ref2.length;_j<_len1;_j++){pattern=_ref2[_j];if(typeof pattern==='string'){if(url.indexOf(pattern)!==-1){return true;}}else{if(pattern.test(url)){return true;}}}
return false;};getIntercept().on('request',function(_arg){var after,args,request,type,url;type=_arg.type,request=_arg.request,url=_arg.url;if(shouldIgnoreURL(url)){return;}
if(!Pace.running&&(options.restartOnRequestAfter!==false||shouldTrack(type)==='force')){args=arguments;after=options.restartOnRequestAfter||0;if(typeof after==='boolean'){after=0;}
return setTimeout(function(){var stillActive,_j,_len1,_ref2,_ref3,_results;if(type==='socket'){stillActive=request.readyState<2;}else{stillActive=(0<(_ref2=request.readyState)&&_ref2<4);}
if(stillActive){Pace.restart();_ref3=Pace.sources;_results=[];for(_j=0,_len1=_ref3.length;_j<_len1;_j++){source=_ref3[_j];if(source instanceof AjaxMonitor){source.watch.apply(source,args);break;}else{_results.push(void 0);}}
return _results;}},after);}});AjaxMonitor=(function(){function AjaxMonitor(){var _this=this;this.elements=[];getIntercept().on('request',function(){return _this.watch.apply(_this,arguments);});}
AjaxMonitor.prototype.watch=function(_arg){var request,tracker,type,url;type=_arg.type,request=_arg.request,url=_arg.url;if(shouldIgnoreURL(url)){return;}
if(type==='socket'){tracker=new SocketRequestTracker(request);}else{tracker=new XHRRequestTracker(request);}
return this.elements.push(tracker);};return AjaxMonitor;})();XHRRequestTracker=(function(){function XHRRequestTracker(request){var event,size,_j,_len1,_onreadystatechange,_ref2,_this=this;this.progress=0;if(window.ProgressEvent!=null){size=null;request.addEventListener('progress',function(evt){if(evt.lengthComputable){return _this.progress=100*evt.loaded/evt.total;}else{return _this.progress=_this.progress+(100-_this.progress)/2;}},false);_ref2=['load','abort','timeout','error'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){event=_ref2[_j];request.addEventListener(event,function(){return _this.progress=100;},false);}}else{_onreadystatechange=request.onreadystatechange;request.onreadystatechange=function(){var _ref3;if((_ref3=request.readyState)===0||_ref3===4){_this.progress=100;}else if(request.readyState===3){_this.progress=50;}
return typeof _onreadystatechange==="function"?_onreadystatechange.apply(null,arguments):void 0;};}}
return XHRRequestTracker;})();SocketRequestTracker=(function(){function SocketRequestTracker(request){var event,_j,_len1,_ref2,_this=this;this.progress=0;_ref2=['error','open'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){event=_ref2[_j];request.addEventListener(event,function(){return _this.progress=100;},false);}}
return SocketRequestTracker;})();ElementMonitor=(function(){function ElementMonitor(options){var selector,_j,_len1,_ref2;if(options==null){options={};}
this.elements=[];if(options.selectors==null){options.selectors=[];}
_ref2=options.selectors;for(_j=0,_len1=_ref2.length;_j<_len1;_j++){selector=_ref2[_j];this.elements.push(new ElementTracker(selector));}}
return ElementMonitor;})();ElementTracker=(function(){function ElementTracker(selector){this.selector=selector;this.progress=0;this.check();}
ElementTracker.prototype.check=function(){var _this=this;if(document.querySelector(this.selector)){return this.done();}else{return setTimeout((function(){return _this.check();}),options.elements.checkInterval);}};ElementTracker.prototype.done=function(){return this.progress=100;};return ElementTracker;})();DocumentMonitor=(function(){DocumentMonitor.prototype.states={loading:0,interactive:50,complete:100};function DocumentMonitor(){var _onreadystatechange,_ref2,_this=this;this.progress=(_ref2=this.states[document.readyState])!=null?_ref2:100;_onreadystatechange=document.onreadystatechange;document.onreadystatechange=function(){if(_this.states[document.readyState]!=null){_this.progress=_this.states[document.readyState];}
return typeof _onreadystatechange==="function"?_onreadystatechange.apply(null,arguments):void 0;};}
return DocumentMonitor;})();EventLagMonitor=(function(){function EventLagMonitor(){var avg,interval,last,points,samples,_this=this;this.progress=0;avg=0;samples=[];points=0;last=now();interval=setInterval(function(){var diff;diff=now()-last-50;last=now();samples.push(diff);if(samples.length>options.eventLag.sampleCount){samples.shift();}
avg=avgAmplitude(samples);if(++points>=options.eventLag.minSamples&&avg<options.eventLag.lagThreshold){_this.progress=100;return clearInterval(interval);}else{return _this.progress=100*(3/(avg+3));}},50);}
return EventLagMonitor;})();Scaler=(function(){function Scaler(source){this.source=source;this.last=this.sinceLastUpdate=0;this.rate=options.initialRate;this.catchup=0;this.progress=this.lastProgress=0;if(this.source!=null){this.progress=result(this.source,'progress');}}
Scaler.prototype.tick=function(frameTime,val){var scaling;if(val==null){val=result(this.source,'progress');}
if(val>=100){this.done=true;}
if(val===this.last){this.sinceLastUpdate+=frameTime;}else{if(this.sinceLastUpdate){this.rate=(val-this.last)/this.sinceLastUpdate;}
this.catchup=(val-this.progress)/options.catchupTime;this.sinceLastUpdate=0;this.last=val;}
if(val>this.progress){this.progress+=this.catchup*frameTime;}
scaling=1-Math.pow(this.progress/100,options.easeFactor);this.progress+=scaling*this.rate*frameTime;this.progress=Math.min(this.lastProgress+options.maxProgressPerFrame,this.progress);this.progress=Math.max(0,this.progress);this.progress=Math.min(100,this.progress);this.lastProgress=this.progress;return this.progress;};return Scaler;})();sources=null;scalers=null;bar=null;uniScaler=null;animation=null;cancelAnimation=null;Pace.running=false;handlePushState=function(){if(options.restartOnPushState){return Pace.restart();}};if(window.history.pushState!=null){_pushState=window.history.pushState;window.history.pushState=function(){handlePushState();return _pushState.apply(window.history,arguments);};}
if(window.history.replaceState!=null){_replaceState=window.history.replaceState;window.history.replaceState=function(){handlePushState();return _replaceState.apply(window.history,arguments);};}
SOURCE_KEYS={ajax:AjaxMonitor,elements:ElementMonitor,document:DocumentMonitor,eventLag:EventLagMonitor};(init=function(){var type,_j,_k,_len1,_len2,_ref2,_ref3,_ref4;Pace.sources=sources=[];_ref2=['ajax','elements','document','eventLag'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){type=_ref2[_j];if(options[type]!==false){sources.push(new SOURCE_KEYS[type](options[type]));}}
_ref4=(_ref3=options.extraSources)!=null?_ref3:[];for(_k=0,_len2=_ref4.length;_k<_len2;_k++){source=_ref4[_k];sources.push(new source(options));}
Pace.bar=bar=new Bar;scalers=[];return uniScaler=new Scaler;})();Pace.stop=function(){Pace.trigger('stop');Pace.running=false;bar.destroy();cancelAnimation=true;if(animation!=null){if(typeof cancelAnimationFrame==="function"){cancelAnimationFrame(animation);}
animation=null;}
return init();};Pace.restart=function(){Pace.trigger('restart');Pace.stop();return Pace.start();};Pace.go=function(){var start;Pace.running=true;bar.render();start=now();cancelAnimation=false;return animation=runAnimation(function(frameTime,enqueueNextFrame){var avg,count,done,element,elements,i,j,remaining,scaler,scalerList,sum,_j,_k,_len1,_len2,_ref2;remaining=100-bar.progress;count=sum=0;done=true;for(i=_j=0,_len1=sources.length;_j<_len1;i=++_j){source=sources[i];scalerList=scalers[i]!=null?scalers[i]:scalers[i]=[];elements=(_ref2=source.elements)!=null?_ref2:[source];for(j=_k=0,_len2=elements.length;_k<_len2;j=++_k){element=elements[j];scaler=scalerList[j]!=null?scalerList[j]:scalerList[j]=new Scaler(element);done&=scaler.done;if(scaler.done){continue;}
count++;sum+=scaler.tick(frameTime);}}
avg=sum/count;bar.update(uniScaler.tick(frameTime,avg));if(bar.done()||done||cancelAnimation){bar.update(100);Pace.trigger('done');return setTimeout(function(){bar.finish();Pace.running=false;return Pace.trigger('hide');},Math.max(options.ghostTime,Math.max(options.minTime-(now()-start),0)));}else{return enqueueNextFrame();}});};paceHideStyle=null;Pace.start=function(_options){extend(options,_options);if(options.hidePage){if(!paceHideStyle){paceHideStyle=document.createElement('style');document.head.appendChild(paceHideStyle);}
paceHideStyle.innerHTML="body > *:not(.pace), body:before, body:after { -webkit-transition: opacity .4s ease-in-out; -moz-transition: opacity .4s ease-in-out; -o-transition: opacity .4s ease-in-out; -ms-transition: opacity .4s ease-in-out; transition: opacity .4s ease-in-out } body:not(.pace-done) > *:not(.pace), body:not(.pace-done):before, body:not(.pace-done):after { opacity: 0 }";}else{if(paceHideStyle!=null){paceHideStyle.innerHTML='';}}
Pace.running=true;try{bar.render();}catch(_error){NoTargetError=_error;}
if(!document.querySelector('.pace')){return setTimeout(Pace.start,50);}else{Pace.trigger('start');return Pace.go();}};if(typeof define==='function'&&define.amd){define(function(){return Pace;});}else if(typeof exports==='object'){module.exports=Pace;}else{if(options.startOnPageLoad){Pace.start();}}}).call(this);};if(CloudflareApps.matchPage(CloudflareApps.installs['ywKwgp5EjfX8'].URLPatterns)){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])
return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0);})
([function(module,exports,__webpack_require__){module.exports=__webpack_require__(1);},function(module,exports,__webpack_require__){var cssPath=__webpack_require__(2);var asConstants=__webpack_require__(3);var storageAvailable=__webpack_require__(4);var lStorage=__webpack_require__(5);var getLocationParam=function(){return window.location.pathname;}
var shouldBackup=function(formElement){if(asConstants.excludedTypes.indexOf(formElement.type)!==-1){return false;}
for(var i=0;i<asConstants.regExps.length;i++){if(asConstants.regExps[i].test(formElement.name)){return false;}}
return true;}
var formBackedUp=[];var FormBackup=function(formElement){this.backupObject={};this.formElement=formElement;this.formPath=cssPath(formElement);formBackedUp.push(this.formPath);};FormBackup.prototype.setElemValue=function(elem,value){if(!elem.name){return false;}
this.backupObject[elem.name]=value;this.save();};FormBackup.prototype.save=function(){lStorage.setJSON(getLocationParam()+this.formPath,this.backupObject);}
FormBackup.prototype.restore=function(){var formParams=lStorage.getJSON(getLocationParam()+this.formPath);this.backupObject=formParams;for(var fieldName in formParams){var formValue=formParams[fieldName];var elem=document.getElementsByName(fieldName)[0];if(!elem.value){elem.value=formParams[fieldName];}}}
FormBackup.prototype.attachSubmitListener=function(){var me=this;this.formElement.addEventListener("submit",function(e){lStorage.clear(getLocationParam()+me.formPath);})}
FormBackup.prototype.attachInputListeners=function(){var formFields=document.querySelectorAll(this.formPath+' input,textarea');var formFieldsArr=[].slice.call(formFields);var me=this;formFieldsArr.forEach(function(field){if(!shouldBackup(field)){return;}
field.addEventListener("input",function(e){me.setElemValue(this,e.target.value);});});}
var bootstrap=function(){if(!storageAvailable("localStorage")){return false;}
var timerLength=100;var setFormBackup=function(){setTimeout(function(){for(var i=0;i<document.forms.length;i++){if(formBackedUp.indexOf(cssPath(document.forms[i]))!==-1){return false;};var formBackup=new FormBackup(document.forms[i]);formBackup.restore();formBackup.attachSubmitListener();formBackup.attachInputListeners();};timerLength*=2;setFormBackup();},timerLength);}
setFormBackup();};document.addEventListener("DOMContentLoaded",function(event){bootstrap();});if(document.readyState==="complete"){bootstrap();}},function(module,exports){var UTILS={};UTILS.cssPath=function(node,optimized)
{if(node.nodeType!==Node.ELEMENT_NODE)
return"";var steps=[];var contextNode=node;while(contextNode){var step=UTILS._cssPathStep(contextNode,!!optimized,contextNode===node);if(!step)
break;steps.push(step);if(step.optimized)
break;contextNode=contextNode.parentNode;}
steps.reverse();return steps.join(" > ");}
UTILS._cssPathStep=function(node,optimized,isTargetNode)
{if(node.nodeType!==Node.ELEMENT_NODE)
return null;var id=node.getAttribute("id");if(optimized){if(id)
return new UTILS.DOMNodePathStep(idSelector(id),true);var nodeNameLower=node.nodeName.toLowerCase();if(nodeNameLower==="body"||nodeNameLower==="head"||nodeNameLower==="html")
return new UTILS.DOMNodePathStep(node.nodeName.toLowerCase(),true);}
var nodeName=node.nodeName.toLowerCase();if(id)
return new UTILS.DOMNodePathStep(nodeName.toLowerCase()+idSelector(id),true);var parent=node.parentNode;if(!parent||parent.nodeType===Node.DOCUMENT_NODE)
return new UTILS.DOMNodePathStep(nodeName.toLowerCase(),true);function prefixedElementClassNames(node)
{var classAttribute=node.getAttribute("class");if(!classAttribute)
return[];return classAttribute.split(/\s+/g).filter(Boolean).map(function(name){return"$"+name;});}
function idSelector(id)
{return"#"+escapeIdentifierIfNeeded(id);}
function escapeIdentifierIfNeeded(ident)
{if(isCSSIdentifier(ident))
return ident;var shouldEscapeFirst=/^(?:[0-9]|-[0-9-]?)/.test(ident);var lastIndex=ident.length-1;return ident.replace(/./g,function(c,i){return((shouldEscapeFirst&&i===0)||!isCSSIdentChar(c))?escapeAsciiChar(c,i===lastIndex):c;});}
function escapeAsciiChar(c,isLast)
{return"\\"+toHexByte(c)+(isLast?"":" ");}
function toHexByte(c)
{var hexByte=c.charCodeAt(0).toString(16);if(hexByte.length===1)
hexByte="0"+hexByte;return hexByte;}
function isCSSIdentChar(c)
{if(/[a-zA-Z0-9_-]/.test(c))
return true;return c.charCodeAt(0)>=0xA0;}
function isCSSIdentifier(value)
{return/^-?[a-zA-Z_][a-zA-Z0-9_-]*$/.test(value);}
var prefixedOwnClassNamesArray=prefixedElementClassNames(node);var needsClassNames=false;var needsNthChild=false;var ownIndex=-1;var siblings=parent.children;for(var i=0;(ownIndex===-1||!needsNthChild)&&i<siblings.length;++i){var sibling=siblings[i];if(sibling===node){ownIndex=i;continue;}
if(needsNthChild)
continue;if(sibling.nodeName.toLowerCase()!==nodeName.toLowerCase())
continue;needsClassNames=true;var ownClassNames=prefixedOwnClassNamesArray;var ownClassNameCount=0;for(var name in ownClassNames)
++ownClassNameCount;if(ownClassNameCount===0){needsNthChild=true;continue;}
var siblingClassNamesArray=prefixedElementClassNames(sibling);for(var j=0;j<siblingClassNamesArray.length;++j){var siblingClass=siblingClassNamesArray[j];if(ownClassNames.indexOf(siblingClass))
continue;delete ownClassNames[siblingClass];if(!--ownClassNameCount){needsNthChild=true;break;}}}
var result=nodeName.toLowerCase();if(isTargetNode&&nodeName.toLowerCase()==="input"&&node.getAttribute("type")&&!node.getAttribute("id")&&!node.getAttribute("class"))
result+="[type=\""+node.getAttribute("type")+"\"]";if(needsNthChild){result+=":nth-child("+(ownIndex+1)+")";}else if(needsClassNames){for(var prefixedName in prefixedOwnClassNamesArray)
result+="."+escapeIdentifierIfNeeded(prefixedOwnClassNamesArray[prefixedName].substr(1));}
return new UTILS.DOMNodePathStep(result,false);}
UTILS.DOMNodePathStep=function(value,optimized)
{this.value=value;this.optimized=optimized||false;}
UTILS.DOMNodePathStep.prototype={toString:function()
{return this.value;}}
module.exports=UTILS.cssPath;},function(module,exports){var CC_NUM=/^((card|cc|acct).?(number|#|no|num)|nummer|credito|numero|número|numéro|カード番号|Номер.*карты|信用卡号|信用卡号码|信用卡卡號|카드)$/;var CC_CVV=/^(verification|card identification|security code|card code|cvn|cvv|cvc|csc|cvd|cid|ccv)$/;var CC_MON=/^(expir|exp.*mo|exp.*date|ccmonth|cardmonth|gueltig|gültig|monat|fecha|date.*exp|scadenza|有効期限|validade|Срок действия карты|月)$/;var CC_YEAR=/^(exp.?year|ablaufdatum|gueltig|gültig|yahr|fecha|scadenza|有効期限|validade|Срок действия карты|年|有效期)$/;var regExps=[CC_NUM,CC_CVV,CC_MON,CC_YEAR];var excludedTypes=["hidden","password","file","submit","reset","button","checkbox","radio"];module.exports={regExps,excludedTypes}},function(module,exports){module.exports=function storageAvailable(type){try{var storage=window[type],x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);return true;}
catch(e){return false;}}},function(module,exports){var lStorage={getJSON:function(key,placeholder){var value=localStorage.getItem(key);if(value){try{return JSON.parse(value);}catch(e){}}
return placeholder||{};},setJSON:function(key,value){localStorage.setItem(key,JSON.stringify(value))},clear:function(key){localStorage.removeItem(key);}}
module.exports=lStorage;}]);};if(CloudflareApps.matchPage(CloudflareApps.installs['3uVLdaEVaQTv'].URLPatterns)){(function(){var options=CloudflareApps.installs['3uVLdaEVaQTv'].options;var id;if(options.account&&options.organization){id=options["web-properties-for-"+options.organization];}else{id=(options.id||"").trim();}
if(!id){console.log("Cloudflare Google Analytics: Disabled. UA-ID not present.");return;}else if("3uVLdaEVaQTv"==="preview"){console.log("Cloudflare Google Analytics: Enabled",id);}
function resolveParameter(uri,parameter){if(uri){var parameters=uri.split("#")[0].match(/[^?=&]+=([^&]*)?/g);for(var i=0,chunk;(chunk=parameters[i]);++i){if(chunk.indexOf(parameter)===0){return unescape(chunk.split("=")[1]);}}}}
window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}
gtag("js",new Date());gtag("config",id);gtag("set",{anonymizeIp:options.anonymizeIp});var vendorScript=document.createElement("script");vendorScript.src="https://www.googletagmanager.com/gtag/js?id="+id;document.head.appendChild(vendorScript);if(options.social){window.addEventListener("load",function googleAnalyticsSocialTracking(){var FB=window.FB;var twttr=window.twttr;if("FB"in window&&"Event"in FB&&"subscribe"in window.FB.Event){FB.Event.subscribe("edge.create",function(targetUrl){gtag("event","share",{method:"facebook",event_action:"like",content_id:targetUrl});});FB.Event.subscribe("edge.remove",function(targetUrl){gtag("event","share",{method:"facebook",event_action:"unlike",content_id:targetUrl});});FB.Event.subscribe("message.send",function(targetUrl){gtag("event","share",{method:"facebook",event_action:"send",content_id:targetUrl});});}
if("twttr"in window&&"events"in twttr&&"bind"in twttr.events){twttr.events.bind("tweet",function(event){if(event){var targetUrl;if(event.target&&event.target.nodeName==="IFRAME"){targetUrl=resolveParameter(event.target.src,"url");}
gtag("event","share",{method:"twitter",event_action:"tweet",content_id:targetUrl});}});}},false);}})();};if(CloudflareApps.matchPage(CloudflareApps.installs['KsCBDNzojKf6'].URLPatterns)){'use strict'
var options=CloudflareApps.installs['KsCBDNzojKf6'].options;(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',options.tag_id);};if(CloudflareApps.matchPage(CloudflareApps.installs['iaGz9RgikjFP'].URLPatterns)){(function(){var demoChatraId="iaGz9RgikjFP"=='preview'?'hX8ihkAcyHK93ue99':void 0;var demoGroupId="iaGz9RgikjFP"=='preview'?'BKjdxwGNFhDE4DJ2r':void 0;var currentChatraId;function convertOptions(options,isDemo){var useChatraButtonSettings=options.button.useChatraSettings&&!isDemo;if(!options.button)options.button={};if(!options.window)options.window={};if(!options.advanced)options.advanced={};var result={chatWidth:parseInt(options.window.width)||void 0,chatHeight:parseInt(options.window.height)||void 0,zIndex:options.advanced.zIndex!==null?options.advanced.zIndex:void 0,mobileOnly:options.advanced.devices=='mob',disabledOnMobile:options.advanced.devices=='notMob',language:options.advanced.language||(isDemo?'en':void 0)};if(isDemo||options.advanced.groupId){result.groupId=isDemo?demoGroupId:options.advanced.groupId;}
if(!useChatraButtonSettings){result.buttonStyle=options.button.style||void 0;result.buttonSize=parseInt(options.button.size)||void 0;result.buttonPosition=options.button.position||void 0;}
result.colors={};if(!useChatraButtonSettings&&options.button.textColor)result.colors.buttonText=options.button.textColor;if(!useChatraButtonSettings&&options.button.bgColor)result.colors.buttonBg=options.button.bgColor;if(options.window.bgColor)result.colors.chatBg=options.window.bgColor;if(options.window.clientBubbleBg)result.colors.clientBubbleBg=options.window.clientBubbleBg;if(options.window.agentBubbleBg)result.colors.agentBubbleBg=options.window.agentBubbleBg;return result;}
function initialize(options){var chatraId=(options.account||{}).userId;window.ChatraSetup=convertOptions(options,!chatraId);currentChatraId=chatraId;window.ChatraID=chatraId||demoChatraId;window.ChatraProtocol='https:';var s=document.createElement('script');window.Chatra=window.Chatra||function(){(window.Chatra.q=window.Chatra.q||[]).push(arguments);};s.async=true;s.src='https://call.chatra.io/chatra.js';if(document.head)document.head.appendChild(s);}
window.CloudflareApps.installs['iaGz9RgikjFP'].scope.setOptions=function(options){var newChatraId=(options.account||{}).userId;var newChatraSetup=convertOptions(options,!newChatraId);if(newChatraId!=currentChatraId){currentChatraId=newChatraId;window.ChatraID=newChatraId||demoChatraId;window.ChatraSetup=newChatraSetup;Chatra('restart');}
else if(window.ChatraSetup.buttonStyle!=newChatraSetup.buttonStyle){window.ChatraSetup=newChatraSetup;Chatra('restart');Chatra('minimizeWidget');}
else if(window.ChatraSetup.mobileOnly!=newChatraSetup.mobileOnly||window.ChatraSetup.disabledOnMobile!=newChatraSetup.disabledOnMobile||window.ChatraSetup.language!=newChatraSetup.language){var isExpanded=Chatra._chatExpanded;window.ChatraSetup=newChatraSetup;Chatra('restart');if(isExpanded)Chatra('expandWidget');}
else{var chatButtonChanged=false;var chatWindowChanged=false;if(window.ChatraSetup.buttonSize!=newChatraSetup.buttonSize){Chatra('setButtonSize',newChatraSetup.buttonSize);chatButtonChanged=true;}
if(window.ChatraSetup.buttonPosition!=newChatraSetup.buttonPosition){Chatra('setButtonPosition',newChatraSetup.buttonPosition);chatButtonChanged=true;}
if(window.ChatraSetup.chatWidth!=newChatraSetup.chatWidth){Chatra('setChatWidth',newChatraSetup.chatWidth);chatWindowChanged=true;}
if(window.ChatraSetup.chatHeight!=newChatraSetup.chatHeight){Chatra('setChatHeight',newChatraSetup.chatHeight);chatWindowChanged=true;}
if(window.ChatraSetup.zIndex!=newChatraSetup.zIndex)
Chatra('setZIndex',newChatraSetup.zIndex);if(window.ChatraSetup.groupId!=newChatraSetup.groupId)
Chatra('setGroupId',newChatraSetup.groupId?newChatraSetup.groupId:null);if(window.ChatraSetup.colors.buttonText!=newChatraSetup.colors.buttonText||window.ChatraSetup.colors.buttonBg!=newChatraSetup.colors.buttonBg){Chatra('setColors',newChatraSetup.colors);chatButtonChanged=true;}
else if(window.ChatraSetup.colors.chatBg!=newChatraSetup.colors.chatBg||window.ChatraSetup.colors.clientBubbleBg!=newChatraSetup.colors.clientBubbleBg||window.ChatraSetup.colors.agentBubbleBg!=newChatraSetup.colors.agentBubbleBg){Chatra('setColors',newChatraSetup.colors);chatWindowChanged=true;}
if(chatButtonChanged&&!chatWindowChanged&&Chatra._chatExpanded)Chatra('minimizeWidget');else if(chatWindowChanged&&!chatButtonChanged&&!Chatra._chatExpanded)Chatra('expandWidget');window.ChatraSetup=newChatraSetup;}};initialize(CloudflareApps.installs['iaGz9RgikjFP'].options);})();};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,QGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMCk7CmNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl0gewogIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOwogIGJhY2tncm91bmQtY29sb3I6ICNmZmY7CiAgY29sb3I6ICM0NDQ7CiAgZGlzcGxheTogZmxleDsKICBmbGV4LWZsb3c6IGNvbHVtbjsKICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjsKICBmb250LXNpemU6IDE0cHg7CiAgZm9udC13ZWlnaHQ6IDQwMDsKICBtYXgtd2lkdGg6IDEwMCU7CiAgbWluLWhlaWdodDogNzBweDsKICBwYWRkaW5nOiAyMHB4IDE1cHg7CiAgcG9zaXRpb246IGZpeGVkOwogIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7CiAgdHJhbnNpdGlvbjogYm90dG9tIC40cyBlYXNlLWluLW91dDsKICB2aXNpYmlsaXR5OiBoaWRkZW47Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl1bZGF0YS12aXNpYmlsaXR5PSJ2aXNpYmxlIl0gewogIHZpc2liaWxpdHk6IHZpc2libGU7Cn0KCkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgewogIGNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl0gewogICAgYm90dG9tOiAyMHB4OwogICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsKICAgIGJvcmRlci1yYWRpdXM6IDNweDsKICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpOwogICAgd2lkdGg6IDMzMHB4OwogIH0KICBjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdW2RhdGEtcG9zaXRpb249ImxlZnQiXSB7CiAgICBsZWZ0OiAyMHB4OwogIH0KICBjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdW2RhdGEtcG9zaXRpb249InJpZ2h0Il0gewogICAgcmlnaHQ6IDIwcHg7CiAgfQogIGNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl0gZmxhc2hjYXJkLWNvbnRlbnQgewogICAgbGluZS1oZWlnaHQ6IDEuNTsKICB9Cn0KCkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgewogIGNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl0gewogICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7CiAgICBib3R0b206IDA7CiAgICBsZWZ0OiAwOwogICAgcmlnaHQ6IDA7CiAgfQogIGNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl0gZmxhc2hjYXJkLWNvbnRlbnQgewogICAgbGluZS1oZWlnaHQ6IDEuNzg1OwogIH0KfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJmbGFzaGNhcmQiXSBmbGFzaGNhcmQtaGVhZGVyIHsKICBhbGlnbi1pdGVtczogY2VudGVyOwogIGRpc3BsYXk6IGZsZXg7CiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogIGZsZXg6IDEgMSBhdXRvOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdIGZsYXNoY2FyZC10aXRsZSB7CiAgZm9udC1zaXplOiAxNnB4OwogIGZvbnQtd2VpZ2h0OiA3MDA7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsKICB3aGl0ZS1zcGFjZTogbm93cmFwOwogIGZsZXg6IDEgMSBhdXRvOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdIGZsYXNoY2FyZC1jbG9zZSB7CiAgbWFyZ2luLWxlZnQ6IDFlbTsKICBjb2xvcjogaW5oZXJpdDsKICBjdXJzb3I6IHBvaW50ZXI7CiAgZGlzcGxheTogaW5saW5lLWJsb2NrOwogIGZvbnQtc2l6ZTogMWVtOwogIGZsZXg6IDAgMCBhdXRvOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdIGZsYXNoY2FyZC1jb250ZW50IHsKICBkaXNwbGF5OiBmbGV4OwogIGZsZXgtZmxvdzogY29sdW1uOwogIGZsZXg6IDEgMSBhdXRvOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdIGZsYXNoY2FyZC1mb290ZXIgewogIG1hcmdpbi10b3A6IDAuNWVtOwogIGRpc3BsYXk6IGZsZXg7CiAgZmxleC1mbG93OiBjb2x1bW47CiAgZmxleDogMCAwIGF1dG87CiAgdGV4dC1hbGlnbjogY2VudGVyOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdIGZsYXNoY2FyZC1mb290ZXIgLmZsYXNoY2FyZC1hY3Rpb24gewogIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDsKICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDsKICBib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50OwogIGJveC1zaGFkb3c6IGluaGVyaXQgIWltcG9ydGFudDsKICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDsKICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDsKICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7CiAgcGFkZGluZzogNXB4IDAgIWltcG9ydGFudDsKICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDsKICB0ZXh0LXNoYWRvdzogaW5oZXJpdCAhaW1wb3J0YW50Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdIC5mbGFzaGNhcmQtYWN0aW9uW2hyZWY9IiJdIHsKICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdIGZsYXNoY2FyZC1tZXNzYWdlIHsKICBkaXNwbGF5OiBibG9jazsKICBsaW5lLWhlaWdodDogMS40OwogIG1hcmdpbi10b3A6IDEwcHg7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKICBwYWRkaW5nLXJpZ2h0OiAxMHB4OwogIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdIGZsYXNoY2FyZC1tZXNzYWdlIHA6Zmlyc3QtY2hpbGQgewogIG1hcmdpbi10b3A6IDA7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl0gZmxhc2hjYXJkLW1lc3NhZ2UgcDpsYXN0LWNoaWxkIHsKICBtYXJnaW4tYm90dG9tOiAwOwp9Y2xvdWRmbGFyZS1hcHBbYXBwPSJsaWtlLWJ1dHRvbiJdIHsKICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0ibGlrZS1idXR0b24iXVtjZi1lbnY9InByZXZpZXciXSA+IHNwYW4sCmNsb3VkZmxhcmUtYXBwW2FwcD0ibGlrZS1idXR0b24iXVtjZi1lbnY9InByZXZpZXciXSA+IHNwYW4gPiBpZnJhbWUgewogIGhlaWdodDogYXV0byAhaW1wb3J0YW50OwogIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7CiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDsKfQovKiBUaGlzIGlzIGEgY29tcGlsZWQgZmlsZSwgeW91IHNob3VsZCBiZSBlZGl0aW5nIHRoZSBmaWxlIGluIHRoZSB0ZW1wbGF0ZXMgZGlyZWN0b3J5ICovCi5wYWNlIHsKICAtd2Via2l0LXBvaW50ZXItZXZlbnRzOiBub25lOwogIHBvaW50ZXItZXZlbnRzOiBub25lOwogIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7CiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICB1c2VyLXNlbGVjdDogbm9uZTsKfQoKLnBhY2UtaW5hY3RpdmUgewogIGRpc3BsYXk6IG5vbmU7Cn0KCi5wYWNlIC5wYWNlLXByb2dyZXNzIHsKICBiYWNrZ3JvdW5kOiAjMDAwMDAwOwogIHBvc2l0aW9uOiBmaXhlZDsKICB6LWluZGV4OiAyMDAwOwogIHRvcDogMDsKICBsZWZ0OiAwOwogIGhlaWdodDogMnB4Owp9CgoucGFjZSAucGFjZS1wcm9ncmVzcy1pbm5lciB7CiAgZGlzcGxheTogYmxvY2s7CiAgcG9zaXRpb246IGFic29sdXRlOwogIHJpZ2h0OiAwcHg7CiAgd2lkdGg6IDEwMHB4OwogIGhlaWdodDogMTAwJTsKICBib3gtc2hhZG93OiAwIDAgMTBweCAjMDAwMDAwLCAwIDAgNXB4ICMwMDAwMDA7CiAgb3BhY2l0eTogMS4wOwogIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7CiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTsKICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7CiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7CiAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7Cn0KCi5wYWNlIC5wYWNlLWFjdGl2aXR5IHsKICBkaXNwbGF5OiBibG9jazsKICBwb3NpdGlvbjogZml4ZWQ7CiAgei1pbmRleDogMjAwMDsKICB0b3A6IDE1cHg7CiAgcmlnaHQ6IDE1cHg7CiAgd2lkdGg6IDE0cHg7CiAgaGVpZ2h0OiAxNHB4OwogIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50OwogIGJvcmRlci10b3AtY29sb3I6ICMwMDAwMDA7CiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDAwMDA7CiAgYm9yZGVyLXJhZGl1czogMTBweDsKICAtd2Via2l0LWFuaW1hdGlvbjogcGFjZS1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTsKICAtbW96LWFuaW1hdGlvbjogcGFjZS1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTsKICAtbXMtYW5pbWF0aW9uOiBwYWNlLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlOwogIC1vLWFuaW1hdGlvbjogcGFjZS1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTsKICBhbmltYXRpb246IHBhY2Utc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7Cn0KCkAtd2Via2l0LWtleWZyYW1lcyBwYWNlLXNwaW5uZXIgewogIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH0KICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9Cn0KQC1tb3ota2V5ZnJhbWVzIHBhY2Utc3Bpbm5lciB7CiAgMCUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfQogIDEwMCUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0KfQpALW8ta2V5ZnJhbWVzIHBhY2Utc3Bpbm5lciB7CiAgMCUgeyAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH0KICAxMDAlIHsgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfQp9CkAtbXMta2V5ZnJhbWVzIHBhY2Utc3Bpbm5lciB7CiAgMCUgeyAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9CiAgMTAwJSB7IC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9Cn0KQGtleWZyYW1lcyBwYWNlLXNwaW5uZXIgewogIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9CiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0KfQo=';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/z6kiOrK8GwKDzRIi8Lah5tAjclA.js';document.head.appendChild(script);})();