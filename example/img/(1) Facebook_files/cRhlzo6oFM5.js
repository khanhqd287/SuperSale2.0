if (self.CavalryLogger) { CavalryLogger.start_js(["MNhVk"]); }

__d('NotificationHiddenState',['NotificationUpdates','NotificationConstants','isEmpty'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={};c('NotificationUpdates').subscribe('update-notifications',function(j,k){var l=k.nodes,m=k.payloadsource;if(m===c('NotificationConstants').PayloadSourceType.LIVE_SEND&&l&&l.length){var n={};l.forEach(function(o){var p=o.alert_id;if(h[p])n[p]=false;});if(!c('isEmpty')(n)){h=Object.assign(h,n);c('NotificationUpdates').didUpdateHiddenState(Object.keys(n));}}});c('NotificationUpdates').subscribe('update-hidden',function(j,k){if(k.hiddenState){h=Object.assign(h,k.hiddenState);c('NotificationUpdates').didUpdateHiddenState(Object.keys(k.hiddenState));}});var i={isHidden:function j(k){if(h[k])return h[k];return false;}};f.exports=i;}),null);
__d('NotificationVPVs',['getElementRect','MarauderLogger','Set'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=new (c('Set'))();function i(o){if(j(o))return;c('MarauderLogger').log('notifications_vpv',undefined,null,'notification',o);h.add(o);}function j(o){return h.has(o);}function k(){h.clear();}function l(o,p){if(!o||!p)return false;return !(o.bottom<p.top||o.top>p.bottom||o.right<p.left||o.left>p.right);}function m(o){var p=c('getElementRect')(o);if(!p||p.top==0&&p.bottom==0&&p.left==0&&p.right==0)return null;return p;}var n={logImpression:i,clearImpressions:k,hasLoggedImpression:j,getValidatedRectangle:m,areRectsOverlapping:l};f.exports=n;}),null);
__d('NotificationList.react',['NotificationConstants','NotificationHiddenState','NotificationSeenState','NotificationStore','NotificationUpdates','NotificationUserActions','NotificationVPVs','FunnelLogger','NotificationJewelFunnelLoggingConstants','React','getObjectValues','isEmpty','mapObject'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('NotificationJewelFunnelLoggingConstants').FUNNEL_LOGGING_NAME,k=c('NotificationJewelFunnelLoggingConstants').FUNNEL_LOGGING_EVENT,l=c('React').PropTypes,m=c('NotificationConstants').PayloadSourceType.LIVE_SEND;h=babelHelpers.inherits(n,c('React').Component);i=h&&h.prototype;function n(o){'use strict';i.constructor.call(this,o);this.$NotificationList6=function(p){var q=Object.keys(this.state.notifs),r=Object.keys(p).filter(function(t){return !this.state.notifs[t];}.bind(this));q=q.concat(r);var s={};q.forEach(function(t){if(this.$NotificationList2[t]){if(this.state.notifs[t])s[t]=this.state.notifs[t];}else s[t]=p[t];}.bind(this));return s;}.bind(this);this.$NotificationList7=function(){var p={};Object.keys(this.$NotificationList2).forEach(function(q){var r=c('NotificationHiddenState').isHidden(q);if(r!=this.state.hiddenState[q])p[q]=r;}.bind(this));if(!c('isEmpty')(p))this.setState({hiddenState:babelHelpers['extends']({},this.state.hiddenState,p)});this.$NotificationList2={};this.$NotificationList5(c('NotificationStore').getCount(this.props.endpoint));}.bind(this);this.$NotificationList8=function(){if(!this.$NotificationList1){var p=Object.keys(this.state.notifs).length;this.$NotificationList5(p+this.props.numPerPage);}}.bind(this);this.$NotificationList9=function(p,q,r){if(this.$NotificationList1||!this.state.canFetchMore)return;if(p){c('FunnelLogger').appendAction(j,k.FETCH_NEXT_SET);this.$NotificationList8();}this.$NotificationList10(q,r);}.bind(this);this.$NotificationList10=function(p,q){if(!p||!q)return;for(var r=0,s=p.children.length;r<s;r++){var t=p.children[r];if(t){var u=t.getAttribute('data-alert-id');if(u&&!c('NotificationVPVs').hasLoggedImpression(u)){var v=c('NotificationVPVs').getValidatedRectangle(t);if(c('NotificationVPVs').areRectsOverlapping(q,v))c('NotificationVPVs').logImpression(u);}}}};this.$NotificationList11=function(){this.setState({showingChevron:true});}.bind(this);this.$NotificationList12=function(){this.setState({showingChevron:false});}.bind(this);this.$NotificationList13=function(p){if(p.length>this.props.numPerPage){this.$NotificationList5(p.length);}else this.$NotificationList8();return;}.bind(this);this.$NotificationList14=function(p){var q=c('NotificationSeenState').getUnseenIDs();if(!c('isEmpty')(this.$NotificationList2))q=q.filter(function(r){return !this.$NotificationList2[r];}.bind(this));if(q.length&&this.props.paused)c('NotificationUserActions').markNotificationsAsSeen(q);if(this.props.hasEverBeenOpened)if(!p||!p.hasEverBeenOpened)this.$NotificationList13(q);}.bind(this);this.$NotificationList15=function(p){if(this.props.paused&&this.props.filter==='unread')this.setState({reading:p});}.bind(this);this.$NotificationList1=false;this.$NotificationList2={};this.$NotificationList3=false;this.state={canFetchMore:true,notifs:{},hiddenState:{},readState:{},showingChevron:false,reading:null};}n.prototype.componentWillMount=function(){'use strict';c('NotificationStore').registerEndpoint(this.props.endpoint);c('NotificationStore').setBusinessID(this.props.businessID);c('FunnelLogger').appendAction(j,k.FETCH_NOTIFICATIONS);this.$NotificationList4=[c('NotificationUpdates').subscribe('notifications-updated',function(o,p){if(p.source==m&&!c('isEmpty')(p.updates)){this.$NotificationList3=true;if(this.props.paused!==false)this.$NotificationList2=babelHelpers['extends']({},this.$NotificationList2,p.updates);return;}this.$NotificationList5(c('NotificationStore').getCount(this.props.endpoint));}.bind(this)),c('NotificationUpdates').subscribe(['hidden-state-updated','read-state-updated'],function(o,p){if(o=='hidden-state-updated'){if(p.source!==m||!this.props.paused){var q=c('mapObject')(p.updates,function(s,t){return c('NotificationHiddenState').isHidden(t);});this.setState({hiddenState:babelHelpers['extends']({},this.state.hiddenState,q)});}}else{var r=c('mapObject')(p.updates,function(s,t){return c('NotificationSeenState').isRead(t);});this.setState({readState:babelHelpers['extends']({},this.state.readState,r)});}}.bind(this))];};n.prototype.componentWillUnmount=function(){'use strict';if(this.$NotificationList4){while(this.$NotificationList4.length)this.$NotificationList4.pop().unsubscribe();this.$NotificationList4=null;}};n.prototype.componentWillReceiveProps=function(o){'use strict';var p=o.filter!==this.props.filter;if(p||!o.paused)this.setState({reading:null});};n.prototype.$NotificationList5=function(o){'use strict';var p=this.props,q=p.endpoint,r=p.filter;this.$NotificationList1=true;c('NotificationStore').getNotifications(o,function(s){var t=c('isEmpty')(this.$NotificationList2)?s:this.$NotificationList6(s),u={},v={};c('getObjectValues')(t).forEach(function(w){var x=w.alert_id;u[x]=c('NotificationSeenState').isRead(x);v[x]=c('NotificationHiddenState').isHidden(x);});this.$NotificationList1=false;this.setState({notifs:t,canFetchMore:c('NotificationStore').canFetchMore(q,r)||c('NotificationStore').getCount(q)!==Object.keys(t).length,readState:babelHelpers['extends']({},this.state.readState,u),hiddenState:babelHelpers['extends']({},this.state.hiddenState,v)});}.bind(this),q,r);};n.prototype.componentDidUpdate=function(o){'use strict';this.$NotificationList14(o);if(o.paused&&!this.props.paused){this.$NotificationList3=false;setTimeout(this.$NotificationList7,0);return;}if(this.props.paused&&o.filter!=this.props.filter){setTimeout(this.$NotificationList7,0);return;}};n.prototype.componentDidMount=function(){'use strict';this.$NotificationList14();};n.prototype.render=function(){'use strict';var o=this.props.listRenderer,p=this.props.filter,q=this.state,r=q.notifs,s=q.readState,t=q.reading,u={};if(this.props.filter==null){u=r;}else Object.values(r).forEach(function(v){var w=v.alert_id,x=s[w];if(p==='unread')x=!x||t===w;if(x)u[w]=v;});return (c('React').createElement(o,{paused:this.props.paused,tracking:this.props.tracking,negativeTracking:this.props.negativeTracking,shortenTimestamp:this.props.shortenTimestamp,businessID:this.props.businessID,maxHeight:this.props.maxHeight,useChevron:this.props.useChevron,chevronType:this.props.chevronType,notifs:u,afterScroll:this.$NotificationList9,onChevronShow:this.$NotificationList11,onChevronHide:this.$NotificationList12,canFetchMore:this.state.canFetchMore,hiddenState:this.state.hiddenState,readState:this.state.readState,showingChevron:this.state.showingChevron,shouldScroll:this.$NotificationList3,upsell:this.props.upsell||null,isRHC:this.props.isRHC,onRead:this.$NotificationList15}));};n.propTypes={businessID:l.string,hasEverBeenOpened:l.bool,maxHeight:l.number,negativeTracking:l.object,paused:l.bool,tracking:l.string,useChevron:l.bool,chevronType:l.string,numPerPage:l.number.isRequired,listRenderer:l.func.isRequired,upsell:l.object,endpoint:l.string,filter:l.string};f.exports=n;}),null);
__d('ServiceWorkerExperimentPerfTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:ServiceWorkerExperimentPerfLoggerConfig',this.$ServiceWorkerExperimentPerfTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:ServiceWorkerExperimentPerfLoggerConfig',this.$ServiceWorkerExperimentPerfTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$ServiceWorkerExperimentPerfTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1=babelHelpers['extends']({},this.$ServiceWorkerExperimentPerfTypedLogger1,j);return this;};h.prototype.setAppCache=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.app_cache=j;return this;};h.prototype.setBodyVisible=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.body_visible=j;return this;};h.prototype.setCsstart=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.csstart=j;return this;};h.prototype.setDisplayDone=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.display_done=j;return this;};h.prototype.setDns=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.dns=j;return this;};h.prototype.setDomComplete=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.dom_complete=j;return this;};h.prototype.setDomContentLoad=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.dom_content_load=j;return this;};h.prototype.setDomInteractiveLoad=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.dom_interactive_load=j;return this;};h.prototype.setDomSetup=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.dom_setup=j;return this;};h.prototype.setE2e=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.e2e=j;return this;};h.prototype.setExperimentType=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.experiment_type=j;return this;};h.prototype.setFetchStartMs=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.fetch_start_ms=j;return this;};h.prototype.setFirstResponse=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.first_response=j;return this;};h.prototype.setHardwareConcurrency=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.hardware_concurrency=j;return this;};h.prototype.setIsSecondLoad=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.is_second_load=j;return this;};h.prototype.setIsSwFnrLoad=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.is_sw_fnr_load=j;return this;};h.prototype.setLastResponse=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.last_response=j;return this;};h.prototype.setLoadedViaSwCache=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.loaded_via_sw_cache=j;return this;};h.prototype.setNavStartMs=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.nav_start_ms=j;return this;};h.prototype.setPageClient=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.page_client=j;return this;};h.prototype.setPath=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.path=j;return this;};h.prototype.setRbbDisplayDone=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.rbb_display_done=j;return this;};h.prototype.setRedirect=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.redirect=j;return this;};h.prototype.setRequest=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.request=j;return this;};h.prototype.setRespond=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.respond=j;return this;};h.prototype.setSubstream0=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.substream_0=j;return this;};h.prototype.setSubstream1=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.substream_1=j;return this;};h.prototype.setSwStarted=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.sw_started=j;return this;};h.prototype.setTcp=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.tcp=j;return this;};h.prototype.setTti=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.tti=j;return this;};h.prototype.setUnload=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.unload=j;return this;};h.prototype.setVC=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.vc=j;return this;};var i={app_cache:true,body_visible:true,csstart:true,display_done:true,dns:true,dom_complete:true,dom_content_load:true,dom_interactive_load:true,dom_setup:true,e2e:true,experiment_type:true,fetch_start_ms:true,first_response:true,hardware_concurrency:true,is_second_load:true,is_sw_fnr_load:true,last_response:true,loaded_via_sw_cache:true,nav_start_ms:true,page_client:true,path:true,rbb_display_done:true,redirect:true,request:true,respond:true,substream_0:true,substream_1:true,sw_started:true,tcp:true,tti:true,unload:true,vc:true};f.exports=h;}),null);
__d('ServiceWorkerURLCleaner',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=/sw_fnr_id=\d+&?/,i=false,j=false,k={removeRedirectID:function l(){if(i)return j;i=true;if(location.search&&h.test(location.search)){j=true;if(history!==undefined&&typeof history.replaceState==='function'){var m=location.toString().replace(h,'').replace(/\?$/,'');history.replaceState({},document.title,m);}}return j;}};f.exports=k;}),null);
__d('ReactBlueBarPerfLogger',['regeneratorRuntime','Arbiter','ArtillerySWDataCollector','BanzaiScuba','BigPipe','ClientChromeExperimentsData','LogBuffer','NavigationMetrics','PageletEventConstsJS','ServiceWorkerExperimentPerfTypedLogger','ServiceWorkerURLCleaner','SubscriptionsHandler','pageLoadedViaSWCache','performance'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='reactbluebar_perf',i='navigationStart',j='fetchStart',k='domainLookupStart',l='connectStart',m='connectEnd',n='responseStart',o='responseEnd',p='domLoading',q='domInteractive',r='domContentLoadedEventEnd',s='domComplete',t='unloadEventStart',u='unloadEventEnd',v={},w=function y(z){var aa,ba=this,ca,da,ea,fa;return c('regeneratorRuntime').async(function ga(ha){while(1)switch(ha.prev=ha.next){case 0:ca=new (c('BanzaiScuba'))(h,null,{addBrowserFields:true,addGeoFields:true,addPredictedGeographyFields:true,addRequestFields:true});da=new (c('ServiceWorkerExperimentPerfTypedLogger'))();da.setExperimentType(z.experimentName);da.setIsSecondLoad(z.isSecondLoad);da.setLoadedViaSwCache(c('pageLoadedViaSWCache')());da.setPageClient(z.page);ca.addNormal('path',b.location.href);da.setPath(b.location.href);ea=c('ServiceWorkerURLCleaner').removeRedirectID();da.setIsSwFnrLoad(ea);ca.addInteger('sw_fnr_load',ea?1:0);ca.addNormal('experiment_type',z.experimentName);ca.addNormal('page_client',z.page);ca.addNormal('response_type',c('pageLoadedViaSWCache')()?'sw':'server');ca.addNormal('second_load',z.isSecondLoad);fa={};if(c('ClientChromeExperimentsData').shouldShowClientChrome)fa.client_chrome=1;ca.addTagset('gk_on',fa);if(navigator.hardwareConcurrency){ca.addInteger('hardwareConcurrency',navigator.hardwareConcurrency);da.setHardwareConcurrency(navigator.hardwareConcurrency);}if(!c('performance').timing){ha.next=22;break;}ha.next=22;return c('regeneratorRuntime').awrap(function ia(){var ja,ka,la,ma,na,oa,pa;return c('regeneratorRuntime').async(function qa(ra){while(1)switch(ra.prev=ra.next){case 0:ka=c('performance').timing;la=ka.navigationStart;ma=ka.fetchStart;da.setFetchStartMs(ma);da.setNavStartMs(la);ca.addInteger('tti',z.tti-ma);ca.addInteger('e2e',z.e2e-ma);ca.addInteger('display_done',z.displayDone-ma);if(z.rbbDisplayDone)ca.addInteger('rbb_display_done',z.rbbDisplayDone-ma);if(z.bodyVisible)ca.addInteger('body_visible',z.bodyVisible-ma);if(typeof b._cstart==='number')ca.addInteger('cstart',b._cstart-ma);ra.next=13;return c('regeneratorRuntime').awrap(c('ArtillerySWDataCollector').collect());case 13:na=ra.sent;if(na)(function(){var sa={cached_header_response:1,navigation_response:1,await_route_config_cache:1,flush_cache_content:1,await_server_response:1,flush_server_content:1},ta=na.segments.filter(function(ya){return sa[ya.description];});for(var ua=0;ua<ta.length;ua++){var va=ta[ua].begin,wa=ta[ua].end;if(!va||!wa)continue;ca.addInteger(ta[ua].description+'.begin',va-la);ca.addInteger(ta[ua].description+'.end',wa-la);ca.addInteger(ta[ua].description+'.total',wa-va);}var xa=na.segments.find(function(ya){return ya.description==='sw_start';});if(xa&&xa.begin>=la){ca.addInteger('sw_started',1);da.setSwStarted(true);}else if(xa){ca.addInteger('sw_started',0);da.setSwStarted(false);}})();ca.addInteger('tti_navs',z.tti-la);da.setTti(z.tti-la);ca.addInteger('e2e_navs',z.e2e-la);da.setE2e(z.e2e-la);ca.addInteger('display_done_navs',z.displayDone-la);da.setDisplayDone(z.displayDone-la);if(z.rbbDisplayDone){oa=z.rbbDisplayDone;ca.addInteger('rbb_display_done_navs',oa-la);da.setRbbDisplayDone(oa-la);}if(z.bodyVisible){pa=z.bodyVisible;ca.addInteger('body_visible_navs',pa-la);da.setBodyVisible(pa-la);}if(typeof b._cstart==='number'){ca.addInteger('cstart_navs',b._cstart-la);da.setCsstart(b._cstart-la);}Object.keys(v).forEach(function(sa){ca.addInteger('pagelet_arrive_'+sa+'_navs',v[sa]-la);if(sa==='first_response'||sa==='last_response'||sa==='substream_0'||sa==='substream_1'){var ta={};ta[sa]=v[sa]-la;da.updateData(ta);}});[{name:'redirect',start:i,end:j},{name:'app_cache',start:j,end:k},{name:'dns',start:k,end:l},{name:'tcp',start:l,end:m},{name:'request',start:m,end:n},{name:'respond',start:n,end:o},{name:'dom_setup',start:n,end:p},{name:'dom_interactive_load',start:p,end:q},{name:'dom_content_load',start:q,end:r},{name:'dom_complete',start:r,end:s},{name:'unload',start:t,end:u}].forEach(function(sa){var ta=sa.name,ua=sa.start,va=sa.end,wa=c('performance').timing[ua]||0,xa=c('performance').timing[va]||0;if(xa>=wa){ca.addInteger('perf_timing_'+ta,xa-wa);var ya={};ya[ta]=xa-wa;da.updateData(ya);}});case 26:case 'end':return ra.stop();}},null,ba);}());case 22:ca.post();da.log();case 24:case 'end':return ha.stop();}},null,this);},x={init:function y(z){var aa=z.isSecondLoad,ba=z.experimentName,ca=z.waitForRBB,da=null,ea=new (c('SubscriptionsHandler'))();ea.addSubscriptions(c('Arbiter').subscribe('sw/bodyVisible',function(fa,ga){var ha=ga.relativeTime;if(c('performance').timing)da=ha+c('performance').timing.navigationStart;}));ea.addSubscriptions(c('Arbiter').subscribe(c('BigPipe').Events.init,function(fa,ga){var ha=ga.arbiter,ia=ha.subscribe('pagelet_event',function(ja,ka){var event=ka.event,la=ka.id,ma=ka.ts;if(event!==c('PageletEventConstsJS').ARRIVE_START||typeof ma!=='number')return;var na=['first_response','last_response','pagelet_welcome_box','pagelet_dock','pagelet_navigation','pagelet_composer','substream_0','substream_1','pagelet_ego_pane','async_data_preloader_ReactBlueBarJewelsDataPreloader',{regex:/^topnews_main_stream_(\d+)$/,name:'topnews_main_stream'},{regex:/^hyperfeed_story_id_(\d+)$/,name:'hyperfeed_story'}],oa=null;for(var pa=na,qa=Array.isArray(pa),ra=0,pa=qa?pa:pa[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var sa;if(qa){if(ra>=pa.length)break;sa=pa[ra++];}else{ra=pa.next();if(ra.done)break;sa=ra.value;}var ta=sa;if(typeof ta==='string'){if(ta===la){oa=ta;break;}}else if(ta.regex.test(la)){oa=ta.name;break;}}if(oa&&!v[oa])v[oa]=ma;});ea.addSubscriptions(ia);}));ea.addSubscriptions(c('NavigationMetrics').addRetroactiveListener(c('NavigationMetrics').Events.NAVIGATION_DONE,function(fa,ga){var ha=ga.page,ia=ga.pageType,ja=ga.tti,ka=ga.e2e,la=ga.all_pagelets_displayed;ia=ia||'normal';if(ia!=='normal')return;ea.release();var ma=function na(oa){var pa=oa.displayDone;w({bodyVisible:da,rbbDisplayDone:pa,displayDone:la,e2e:ka,page:ha,pageType:ia,tti:ja,isSecondLoad:aa,experimentName:ba});};if(ca){c('LogBuffer').tail('reactbluebar_perf',ma);}else ma({displayDone:null});}));}};f.exports=x;}),null);