if (self.CavalryLogger) { CavalryLogger.start_js(["Q4hWS"]); }

__d('LoginFormError',['Event','containsNode','ContextualDialog','ErrorContextualDialogXUITheme','LayerAutoFocus','LayerRefocusOnHide'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={setUpErrorContextualDialog:function i(j,k){var l=new (c('ContextualDialog'))({context:j,position:'right',theme:c('ErrorContextualDialogXUITheme')},k).disableBehavior(c('LayerAutoFocus')).disableBehavior(c('LayerRefocusOnHide'));l.show();this._setUpDialogEvents(j,l);},_setUpDialogEvents:function i(j,k){c('Event').listen(j,'blur',function(l){if(!c('containsNode')(k.getContentRoot(),l.relatedTarget))k.hide();});c('Event').listen(j,'focus',k.show.bind(k));c('Event').listen(j,'mouseover',k.show.bind(k));c('Event').listen(j,'click',k.show.bind(k));}};f.exports=h;}),null);
__d('ServiceWorkerLoginAndLogout',['ClientServiceWorkerMessage'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){new (c('ClientServiceWorkerMessage'))(j,null).sendViaController();}var i={login:function j(){h('login');},logout:function j(){h('logout');}};f.exports=i;}),null);
__d('ServiceWorkerLoginAndLogoutListener',['Event','ServiceWorkerLoginAndLogout'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={listen:function i(j,k){var l=function m(){if(k==='login'){c('ServiceWorkerLoginAndLogout').login();}else if(k==='logout'){c('ServiceWorkerLoginAndLogout').logout();}else throw new Error('bad login type given');};c('Event').listen(j,{click:l,submit:l});}};f.exports=h;}),null);