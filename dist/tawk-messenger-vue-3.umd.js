(function(a,d){typeof exports=="object"&&typeof module!="undefined"?module.exports=d():typeof define=="function"&&define.amd?define(d):(a=typeof globalThis!="undefined"?globalThis:a||self,a["tawk-messenger-vue-3"]=d())})(this,function(){"use strict";function a({propertyId:t="",widgetId:e="",embedId:i="",basePath:o="tawk.to"}){if(i.length){if(!document.getElementById(i)){const p=document.createElement("div");p.id=i,document.body.appendChild(p)}window.Tawk_API.embedded=i}const n=document.createElement("script");n.async=!0,n.src=`https://embed.${o}/${t}/${e}`,n.charset="UTF-8",n.setAttribute("crossorigin","*");const s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(n,s)}function d(t){return!t||t.length===0?!1:t!=null&&typeof t=="string"}class r{constructor(e,i){!d(i.propertyId)||!d(i.widgetId)||(this.app=e,this.propertyId=i.propertyId,this.widgetId=i.widgetId,this.embedId=i.embedId,this.customStyle=i.customStyle,this.basePath=i.basePath,this.load())}load(){!window||!document||(window.Tawk_API=window.Tawk_API||{},window.Tawk_LoadStart=new Date,a({propertyId:this.propertyId,widgetId:this.widgetId,embedId:this.embedId,basePath:this.basePath}),this.init())}init(){this.customStyle&&typeof this.customStyle=="object"&&(window.Tawk_API.customStyle=this.customStyle),typeof this.app=="object"&&(this.provideActions(),this.provideGetters(),this.provideListeners(),this.provideSetters())}provideActions(){this.app.provide("maximize",()=>{window.Tawk_API.maximize()}),this.app.provide("minimize",()=>{window.Tawk_API.minimize()}),this.app.provide("toggle",()=>{window.Tawk_API.toggle()}),this.app.provide("popup",()=>{window.Tawk_API.popup()}),this.app.provide("showWidget",()=>{window.Tawk_API.showWidget()}),this.app.provide("hideWidget",()=>{window.Tawk_API.hideWidget()}),this.app.provide("toggleVisibility",()=>{window.Tawk_API.toggleVisibility()}),this.app.provide("endChat",()=>{window.Tawk_API.endChat()})}provideGetters(){this.app.provide("getWindowType",()=>{window.Tawk_API.getWindowType()}),this.app.provide("getStatus",()=>{window.Tawk_API.getStatus()}),this.app.provide("isChatMaximized",()=>{window.Tawk_API.isChatMaximized()}),this.app.provide("isChatMinimized",()=>{window.Tawk_API.isChatMinimized()}),this.app.provide("isChatHidden",()=>{window.Tawk_API.isCHatHidden()}),this.app.provide("isChatOngoing",()=>{window.Tawk_API.isChatOngoing()}),this.app.provide("isVisitorEngaged",()=>{window.Tawk_API.isVisitorEngaged()}),this.app.provide("onLoaded",()=>{window.Tawk_API.onLoaded}),this.app.provide("onBeforeLoaded",()=>{window.Tawk_API.onBeforeLoaded}),this.app.provide("widgetPosition",()=>{window.Tawk_API.widgetPosition()})}provideListeners(){this.app.provide("onLoad",e=>{window.addEventListener("tawkLoad",()=>{e()})}),this.app.provide("onStatusChange",e=>{window.addEventListener("tawkStatusChange",i=>{e(i.detail)})}),this.app.provide("onBeforeLoad",e=>{window.addEventListener("tawkBeforeLoad",()=>{e()})}),this.app.provide("onChatMaximized",e=>{window.addEventListener("tawkChatMaximized",()=>{e()})}),this.app.provide("onChatMinimized",e=>{window.addEventListener("tawkChatMinimized",()=>{e()})}),this.app.provide("onChatHidden",e=>{window.addEventListener("tawkChatHidden",()=>{e()})}),this.app.provide("onChatStarted",e=>{window.addEventListener("tawkChatStarted",()=>{e()})}),this.app.provide("onChatEnded",e=>{window.addEventListener("tawkChatEnded",()=>{e()})}),this.app.provide("onPrechatSubmit",e=>{window.addEventListener("tawkPrechatSubmit",i=>{e(i.detail)})}),this.app.provide("onOfflineSubmit",e=>{window.addEventListener("tawkOfflineSubmit",i=>{e(i.detail)})}),this.app.provide("onChatMessageVisitor",e=>{window.addEventListener("tawkChatMessageVisitor",i=>{e(i.detail)})}),this.app.provide("onChatMessageAgent",e=>{window.addEventListener("tawkChatMessageAgent",i=>{e(i.detail)})}),this.app.provide("onChatMessageSystem",e=>{window.addEventListener("tawkChatMessageSystem",i=>{e(i.detail)})}),this.app.provide("onAgentJoinChat",e=>{window.addEventListener("tawkAgentJoinChat",i=>{e(i.detail)})}),this.app.provide("onAgentLeaveChat",e=>{window.addEventListener("tawkAgentLeaveChat",i=>{e(i.detail)})}),this.app.provide("onChatSatisfaction",e=>{window.addEventListener("tawkChatSatisfaction",i=>{e(i.detail)})}),this.app.provide("onVisitorNameChanged",e=>{window.addEventListener("tawkVisitorNameChanged",i=>{e(i.detail)})}),this.app.provide("onFileUpload",e=>{window.addEventListener("tawkFileUpload",i=>{e(i.detail)})}),this.app.provide("onTagsUpdated",e=>{window.addEventListener("tawkTagsUpdated",i=>{e(i.detail)})}),this.app.provide("onUnreadCountChanged",e=>{window.addEventListener("tawkUnreadCountChanged",i=>{e(i.detail)})})}provideSetters(){this.app.provide("visitor",e=>{window.Tawk_API.visitor(e)}),this.app.provide("setAttributes",(e,i)=>{window.Tawk_API.setAttributes(e,i)}),this.app.provide("addEvent",(e,i,o)=>{window.Tawk_API.addEvent(e,i,o)}),this.app.provide("addTags",(e,i)=>{window.Tawk_API.addTags(e,i)}),this.app.provide("removeTags",(e,i)=>{window.Tawk_API.removeTags(e,i)})}}var w={install:(t,e={})=>{if(!d(e.propertyId)){console.error("[Tawk-messenger-vue warn]: You didn't specified 'propertyId' property in the plugin.");return}if(!d(e.widgetId)){console.error("[Tawk-messenger-vue warn]: You didn't specified 'widgetId' property in the plugin.");return}new r(t,e)}};return w});