if (self.CavalryLogger) { CavalryLogger.start_js(["VdNG1"]); }

__d('ViewportTrackingHooks',['Base64'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i=[],j={registerFeedObject:function k(l,m){h[l]=c('Base64').encode(m);},updateVisibleViewportObjects:function k(l){var m=[],n=false;for(var o=0;o<l.length;o++){var p=l[o],q=p.id;while(!(q in h)&&p.firstChild!=undefined&&p.firstChild.id!=undefined&&p.firstChild.id.startsWith("u_")){q=p.firstChild.id;p=p.firstChild;}if(q in h){m.push(h[q]);if(!(o in i)||i[o]!=h[q])n=true;}}if(!n&&i.length!=m.length)n=true;if(n){i=m;if(typeof __EXT__updateVisibleViewportObjects==='function')__EXT__updateVisibleViewportObjects(i);}}};f.exports=j;}),null);
__d('viewportTrackingBuilder',[],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=function i(j){var k=null;return {factory:j,singleton:function l(){if(!k)k=j.apply(undefined,arguments);return k;},clearSingleton:function l(){k=null;}};};f.exports=h;}),null);
__d('ViewportTracking',['cx','invariant','Arbiter','Banzai','BanzaiScuba','CSS','CurrentUser','DOM','DOMDimensions','Event','LitestandMessages','NavigationMessage','Run','SubscriptionsHandler','UserActivity','ViewportTrackingHelper','ViewportTrackingHooks','clickRefAction','collectDataAttributes','debounce','getElementPosition','getViewportDimensions','throttle','viewportTrackingBuilder','setTimeout'],(function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=97,k='vpv',l=3,m=2,n=1,o=0,p=1,q=2,r=3,s=4;function t(w){this.cachedAllStories=[];this.cachedVisibleStories={init:false,data:{}};this.fireTimer=this.fireTimer.bind(this);this.logAnnotatedVPV=this.logAnnotatedVPV.bind(this);this.markStoryRead=this.markStoryRead.bind(this);this.behavior=w;}t.prototype.init=function(w){this.useBanzai=true;this.vpvDebug=!!w.vpv_debug;this.vpvdDebug=!!w.vpvd_debug;this.vpvdAnalysis=!!w.vpvd_analysis;this.trackingHooks=!!w.tracking_hooks;this.readStoryIDs={};this.annotatedStoryIDs={};this.minSizeToBeVisible=200;this.minFractionToBeVisibleForTimetracking=.5;this.scrollThrottlingInterval=100;this.mouseThrottlingInterval=100;this.keyboardThrottlingInterval=100;this.minTimeToReportImmediately=500;this.discardVPVDIntervalThreshold=90000;this.active_state_duration=1000;this.height_diff_to_change_state=25;this.focused_state_duration=3500;this.invalidateAllStoriesCache();this.cachedViewportHeight=c('getViewportDimensions')().height;this.isTimetrackingEnabled=false;this.activeStories={};this.userInactiveLock=false;this.userActivityPollerTimeoutID=-1;this._headLoadStoryCount=0;if(this.behavior.getDataFromConfig)this.behavior.getDataFromConfig(w,this);if(this.isTimetrackingEnabled){this.lastMouseX=-1;this.lastMouseY=-1;this.lastStreamY=-1;this.latestStreamYChangedTimeStamp=-1;this.userFocus=q;this.latestUserFocus=q;this.latestUserActivity='init';this.focusedStory=null;this.latestFocusedStory=null;this.latestActiveStory=null;this.totalVPVDuration={};}if(w.tracking_duration_config){this.scrollThrottlingInterval=w.tracking_duration_config.scroll_throttling_interval;this.mouseThrottlingInterval=w.tracking_duration_config.mouse_throttling_interval;this.keyboardThrottlingInterval=w.tracking_duration_config.keyboard_throttling_interval;this.userActivityPollingInterval=w.tracking_duration_config.user_activity_polling_interval;this.timeToBeConsideredInactive=w.tracking_duration_config.time_to_be_considered_inactive;this.minFractionToBeVisibleForTimetracking=w.tracking_duration_config.min_fraction_to_be_visible;this.minTimeToReportImmediately=w.tracking_duration_config.min_time_to_report_immediately;this.active_state_duration=w.tracking_duration_config.active_state_duration;this.height_diff_to_change_state=w.tracking_duration_config.story_height_diff_to_change_state;this.focused_state_duration=w.tracking_duration_config.focused_state_duration;this.discardVPVDIntervalThreshold=w.tracking_duration_config.discard_vpvd_interval_threshold;}!(w.record_delay!==undefined)?i(0):void 0;var x=c('debounce')(this.fireTimer,w.record_delay,this);this.initialStories=this.getStoriesInView();this.initialStoriesLogged=false;if(this.annotatedVPVLogging)this.initialStories.forEach(this.logAnnotatedVPV,this);this.subscriptions=new (c('SubscriptionsHandler'))();this.subscriptions.addSubscriptions(this._getScrollListener(x),c('Event').listen(window,'resize',function(){this.invalidateVisibleStoriesCache();this.cachedViewportHeight=c('getViewportDimensions')().height;x();}.bind(this)),c('Event').listen(window,'focus',function(){if(this.isTimetrackingEnabled)this.updateTimeTrackingData(false,'window_focus');}.bind(this)),c('Event').listen(window,'blur',function(){if(this.isTimetrackingEnabled)this.updateTimeTrackingData(true,'window_blur');}.bind(this)),c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,this.cleanup.bind(this)),c('Arbiter').subscribe('Stream/totalHeadLoadedStories',function(ba,ca){this._headLoadStoryCount=ca.count;}.bind(this)),c('Arbiter').subscribe(c('LitestandMessages').STORIES_INSERTED,function(){if(!this.initialStoriesLogged){var ba=this.getStoriesInView();ba.forEach(this.logAnnotatedVPV,this);}else x();if(this.isTimetrackingEnabled)this.updateTimeTrackingData(false,'stories_inserted');}.bind(this)));if(this.isTimetrackingEnabled&&this.behavior.getStream){this.updateTimeTrackingData(false,'init');var y=c('throttle')(function(event){this.invalidateVisibleStoriesCache();this.handleScroll(event);}.bind(this),this.scrollThrottlingInterval),z=c('throttle')(function(event){return this.handleKeyboard(event);}.bind(this),this.keyboardThrottlingInterval),aa=c('throttle')(function(event){return this.handleMouse(event);}.bind(this),this.mouseThrottlingInterval);this.subscriptions.addSubscriptions(c('Event').listen(window,'scroll',y),c('Event').listen(document.documentElement,'DOMMouseScroll',y),c('Event').listen(document.documentElement,'mousewheel',y),c('Event').listen(document.documentElement,'keydown',z),c('Event').listen(document.documentElement,'mouseover',aa),c('Event').listen(document.documentElement,'mousemove',aa),c('Event').listen(document.documentElement,'click',function(event){this.handleMouse(event);}.bind(this)),c('Arbiter').subscribe('Event/stop',function(ba,ca){this.handleMouse(ca.event);}.bind(this)),c('Arbiter').subscribe('PhotoSnowlift.OPEN',function(){this.userFocus=r;this.handleLayers();}.bind(this)),c('Arbiter').subscribe('PhotoSnowlift.CLOSE',function(){this.userFocus=p;this.focusedStory=null;this.updateTimeTrackingData(false,'snowlift_close');}.bind(this)));this._userActivityPoller();}c('Run').onLeave(this.cleanup.bind(this));c('Run').onUnload(this.cleanup.bind(this));};t.prototype._getScrollListener=function(w){return c('Event').listen(window,'scroll',w);};t.prototype.cleanup=function(){if(this.subscriptions){this.subscriptions.release();this.subscriptions=null;}if(this.isTimetrackingEnabled){clearTimeout(this.userActivityPollerTimeoutID);this.updateTimeTrackingData(true,'cleanup');}if(this.annotatedVPVLogging){var w=this.getStoriesInView();w.forEach(this.logAnnotatedVPV,this);}this.initialStories=[];this._headLoadStoryCount=0;};t.prototype.fireTimer=function(){if(!this.initialStoriesLogged){this.initialStories.forEach(this.markStoryRead,this);this.initialStoriesLogged=true;}this.storiesInView=this.getStoriesInView();this.storiesInView.forEach(this.markStoryRead,this);if(this.trackingHooks){var w=this.isTimetrackingEnabled?this.getVisibleStoriesFromCache():this.getAllStoriesInView(),x=[],y=Object.keys(w);for(var z=0,aa=y.length;z<aa;z++){var ba=y[z];if(w[ba].story)x.push(w[ba].story);}c('ViewportTrackingHooks').updateVisibleViewportObjects(x);}};t.prototype.getSessionID=function(){return null;};t.prototype._userActivityPoller=function(){if(!this.userInactiveLock&&!c('UserActivity').isActive(this.timeToBeConsideredInactive)){this.userInactiveLock=true;this.userFocus=q;this.updateTimeTrackingData(false,'user_activity_inactive');c('UserActivity').subscribeOnce(function(){this.userFocus=p;this.updateTimeTrackingData(false,'user_activity_active');this.userInactiveLock=false;}.bind(this));}this.userActivityPollerTimeoutID=c('setTimeout')(this._userActivityPoller.bind(this),this.userActivityPollingInterval);};t.prototype.getQueryID=function(w){return -1;};t.prototype.getFBFeedLocations=function(w){return -1;};t.prototype.getFBFeedInsertionPosition=function(w){return -1;};t.prototype.createVPVDTimer=function(w){var x=document.createElement('label');x.setAttribute('for',w.toString());x.setAttribute('class','vpvd_debug_timer');return x;};t.prototype.updateVPVDTimer=function(w){var x=this.activeStories[w].story;if(!x)return;var y=c('DOM').scry(x,'.vpvd_debug_timer');if(!y.length){y=[this.createVPVDTimer(x),this.createVPVDTimer(x)];var z=c('DOM').scry(x,'.UFIRow');if(z.length&&z[z.length-1].clientWidth>0){z[z.length-1].appendChild(y[0]);}else x.appendChild(y[0]);x.insertBefore(y[1],x.firstChild);}var aa=this.totalVPVDuration[w],ba=Math.floor(aa/1000)+'.'+Math.floor(aa%1000/100);c('DOM').setContent(y[0],ba);c('DOM').setContent(y[1],ba);};t.prototype.updateVPVDTimers=function(){for(var w in this.activeStories)if(this.activeStories.hasOwnProperty(w))this.updateVPVDTimer(w);};t.prototype.logVpvdAnalysis=function(w,x,y,z,aa,ba){var ca=new (c('BanzaiScuba'))('vpv_duration');ca.addDenorm('qid',this.getQueryID(this.activeStories[w].story));ca.addDenorm('uid',c('CurrentUser').getID());ca.addDenorm('vsid',w);ca.addInteger('time',Math.round(Date.now()/1000));ca.addInteger('duration',z);ca.addInteger('total_duration',aa);ca.addNormal('story_state',this.activeStories[w].state);ca.addNormal('is_active_state',y);ca.addNormal('num_visible_stories',this.numVisibleStories);ca.addInteger('story_height',this.activeStories[w].story_height);ca.addInteger('story_visible_height',this.activeStories[w].height);ca.addInteger('state_visible_height',ba);ca.addInteger('total_visible_height',this.totalVisibleHeight);ca.addInteger('total_height',this.totalHeight);ca.addNormal('user_focus',this.latestUserFocus);ca.addNormal('next_user_focus',this.userFocus);ca.addInteger('vpvd',x);ca.addInteger('accumulated_vpvd',this.activeStories[w].vpvd);ca.addNormal('user_activity',this.latestUserActivity);ca.addNormal('next_user_activity',this.userActivity);ca.addInteger('story_position_y',this.activeStories[w].y);ca.addInteger('feed_insertion_position',this.getFBFeedInsertionPosition(this.activeStories[w].story));ca.addNormal('visible_position',this.activeStories[w].visible_position);ca.addNormal('is_focused_story',this.activeStories[w].is_focused);ca.post();};t.prototype.shouldDiscardStory=function(w){var x=this.activeStories[w].height||0;return x!=this.activeStories[w].story_height&&x<this.totalHeight/2;};t.prototype.calculateTotalHeight=function(){this.totalHeight=0;for(var w in this.activeStories)if(this.activeStories.hasOwnProperty(w))this.totalHeight+=this.activeStories[w].height;};t.prototype.updateVPVDurations=function(w){var x;if(this.latestUserFocus===q||w-this.latestTimeTrackingTimestamp>this.discardVPVDIntervalThreshold)return;var y=(x={},x[n]=0,x[m]=0,x[l]=0,x),z=w-this.latestTimeTrackingTimestamp>=this.focused_state_duration;this.totalVisibleHeight=0;for(var aa in this.activeStories)if(this.activeStories.hasOwnProperty(aa))if(!(this.latestUserFocus===p&&z&&this.shouldDiscardStory(aa))){var ba=this.activeStories[aa].state||null,ca=this.activeStories[aa].height||0;if(ba!==null&&y.hasOwnProperty(ba))y[ba]+=ca;this.totalVisibleHeight+=ca;}var da=0,ea=w-this.latestTimeTrackingTimestamp;if(this.latestUserFocus===p){ea=y[l]>0?this.focused_state_duration:this.active_state_duration;ea=Math.min(ea,w-this.latestTimeTrackingTimestamp);da=w-this.latestTimeTrackingTimestamp-ea;}var fa=0,ga=l;for(var ha=l;ha>=n;ha--)if(y[ha]>0){fa=y[ha];ga=ha;break;}var ia=y[l]+y[m]+y[n],ja=0;for(aa in this.activeStories)if(this.activeStories.hasOwnProperty(aa)){if(this.latestUserFocus===p&&z&&this.shouldDiscardStory(aa))continue;var ka=this.activeStories[aa].state||o;if(fa>0&&ka>=ga){var la=this.activeStories[aa].height||0;ja=ea*(la/fa);if(this.vpvdAnalysis&&ea>0)this.logVpvdAnalysis(aa,ja,true,ea,ea+da,fa);this.activeStories[aa].vpvd+=ja;this.totalVPVDuration[aa]+=ja;}if(ia>0){var ma=this.activeStories[aa].height||0;ja=da*(ma/ia);if(this.vpvdAnalysis&&da>0)this.logVpvdAnalysis(aa,ja,false,da,ea+da,ia);this.activeStories[aa].vpvd+=ja;this.totalVPVDuration[aa]+=ja;}}};t.prototype.updateActiveStory=function(w,x,y,z){this.activeStories[w].state=x;this.activeStories[w].ts=y;this.activeStories[w].height_snapshot=z[w].height;this.activeStories[w].is_focused=this.focusedStory===z[w].story;this.activeStories[w].story_height=z[w].story_height;if(this.vpvdAnalysis){this.activeStories[w].visible_position=z[w].visible_position;this.activeStories[w].y=z[w].y;}};t.prototype.updateActiveStories=function(w,x){for(var y in w)if(w.hasOwnProperty(y))if(y in this.activeStories){var z=w[y].height||0;this.activeStories[y].height=z;var aa=z-(this.activeStories[y].height_snapshot||0);if(this.focusedStory===w[y].story){this.updateActiveStory(y,l,x,w);}else if(aa<=-this.height_diff_to_change_state){this.updateActiveStory(y,this.shouldDiscardStory(y)?o:n,x,w);}else if(aa>=this.height_diff_to_change_state||this.activeStories[y].is_focused||this.activeStories[y].height===this.activeStories[y].story_height)this.updateActiveStory(y,m,x,w);}else{this.activeStories[y]={evp_ts:x,story:w[y].story,height:w[y].height,vpvd:0};if(!this.totalVPVDuration[y])this.totalVPVDuration[y]=0;this.updateActiveStory(y,m,x,w);}};t.prototype.recordVPVDurations=function(w,x){for(var y in this.activeStories)if(this.activeStories.hasOwnProperty(y))if(x||!(y in w)){var z=this.activeStories[y].vpvd||0;if(z>this.focused_state_duration||z===this.totalVPVDuration[y])this.recordTimeStoryWasInView(this.activeStories[y]);delete this.activeStories[y];}};t.prototype.updateTimeTrackingData=function(w,x){this.userActivity=x;if(!this.activeStories)this.activeStories={};var y=Date.now();if(!this.latestTimeTrackingTimestamp)this.latestTimeTrackingTimestamp=y;var z=this.getVisibleStoriesFromCache();this.calculateTotalHeight();this.updateVPVDurations(y);this.updateActiveStories(z,y);if(this.vpvdDebug)this.updateVPVDTimers();this.recordVPVDurations(z,w);if(w){this.latestTimeTrackingTimestamp=0;}else this.latestTimeTrackingTimestamp=y;this.latestUserActivity=this.userActivity;this.latestUserFocus=this.userFocus;if(this.focusedStory)this.latestActiveStory=this.focusedStory;this.latestFocusedStory=this.focusedStory;this.focusedStory=null;};t.prototype.needsToUpdateTimeTrackingData=function(){return !(this.latestUserFocus===this.userFocus&&(this.userFocus===q||this.userFocus===p&&!this.latestFocusedStory&&!this.focusedStory));};t.prototype.getfocusedStory=function(w){var x=this.getVisibleStoriesFromCache();for(var y in x)if(x.hasOwnProperty(y)){var z=x[y].story;if(z&&c('ViewportTrackingHelper').isDescendantOf(w,z))return z;}return null;};t.prototype.handleLayers=function(){if(this.userFocus===r||this.userFocus===s){this.focusedStory=this.latestActiveStory;this.updateTimeTrackingData(false,'media_layer');return true;}return false;};t.prototype.didInteractWithStream=function(w){if(!this.behavior.getStream)return false;var x=this.behavior.getStream();return c('ViewportTrackingHelper').isDescendantOf(w,x)||c('ViewportTrackingHelper').isDescendantOf(x,w);};t.prototype.handleScroll=function(event){if(this.handleLayers())return;var w=Date.now();!this.behavior.getStream?i(0):void 0;var x=c('getElementPosition')(this.behavior.getStream()).y;if(x!=this.lastStreamY||w-this.latestStreamYChangedTimeStamp<2.5*this.scrollThrottlingInterval||this.didInteractWithStream(event.target)){this.latestStreamYChangedTimeStamp=w;this.userFocus=p;}else this.userFocus=q;this.lastStreamY=x;if(this.userFocus===p||this.needsToUpdateTimeTrackingData())this.updateTimeTrackingData(false,'scroll');};t.prototype.handleKeyboard=function(event){if(this.handleLayers())return;if(this.didInteractWithStream(event.target)){this.userFocus=p;this.focusedStory=this.getfocusedStory(event.target);}else if(c('CSS').hasClass(event.target,'shareInput')){this.userFocus=p;this.focusedStory=this.latestActiveStory;}else this.userFocus=q;if(this.userFocus===p||this.needsToUpdateTimeTrackingData())this.updateTimeTrackingData(false,'keyboard');};t.prototype.handleMouse=function(event){if(this.handleLayers())return;if(event.type!='click'&&event.clientX===this.lastMouseX&&event.clientY===this.lastMouseY)return;if(event.type==='click')this.invalidateVisibleStoriesCache();if(this.didInteractWithStream(event.target)){this.userFocus=p;this.focusedStory=this.getfocusedStory(event.target);}else this.userFocus=q;this.lastMouseX=event.clientX;this.lastMouseY=event.clientY;if(this.needsToUpdateTimeTrackingData())this.updateTimeTrackingData(false,event.type);};t.prototype.getStoriesInView=function(){var w=this.behavior.getAllStories(),x=[],y=false;for(var z=0;z<w.length;z++){var aa=w[z],ba=this.behavior.getStoryID(aa);if(ba&&this.hasBeenVisible(ba))continue;if(c('ViewportTrackingHelper').isVisible(aa,this.minSizeToBeVisible)){if(aa.getAttribute('data-insertion-position')===null)aa.setAttribute('data-insertion-position',(z-this._headLoadStoryCount).toString());x.push(aa);y=true;}else if(y)break;}return x;};t.prototype.getAllStoriesFromCache=function(){if(this.cachedAllStories.length===0)this.cachedAllStories=this.behavior.getAllStories();return this.cachedAllStories;};t.prototype.invalidateAllStoriesCache=function(){this.cachedAllStories=[];this.invalidateVisibleStoriesCache();};t.prototype.getVisibleStoriesFromCache=function(){if(!this.cachedVisibleStories.init)this.cachedVisibleStories={init:true,data:this.getAllStoriesInView()};return this.cachedVisibleStories.data;};t.prototype.invalidateVisibleStoriesCache=function(){this.cachedVisibleStories={init:false,data:{}};};t.prototype.getAllStoriesInView=function(){var w=this.getAllStoriesFromCache(),x={},y=false,z=0,aa=w.length,ba=1,ca=w.length;if(this._indexOfLastVisibleStoryOnPreviousPass>aa/2){z=aa-1;aa=-1;ba=-ba;}for(var da=z;da!=aa;da+=ba){var ea=w[da],fa=c('ViewportTrackingHelper').getHeightIfVisible(ea,Math.min(this.minSizeToBeVisible,this.minFractionToBeVisibleForTimetracking*c('DOMDimensions').getElementDimensions(ea).height));if(fa>0||ea===this.focusedStory){if(ea.getAttribute('data-insertion-position')===null)ea.setAttribute('data-insertion-position',(da-this._headLoadStoryCount).toString());var ga=this.behavior.getStoryID(ea);if(ga){x[ga]={story:ea,height:fa,story_height:c('DOMDimensions').getElementDimensions(ea).height};y=true;if(this.vpvdAnalysis){x[ga].y=c('getElementPosition')(ea).y;x[ga].visible_position=da;ca=Math.min(ca,da);}}}else if(y){this._indexOfLastVisibleStoryOnPreviousPass=da-ba;break;}}if(this.vpvdAnalysis){this.numVisibleStories=0;for(ga in x)if(x.hasOwnProperty(ga)){x[ga].visible_position-=ca;this.numVisibleStories++;}}return x;};t.prototype.getTimetrackingDataToLog=function(w){var x={evt:j,vpvd_start_timestamp:w.evp_ts||null,vpvd_time_delta:Math.round(w.vpvd||0),story_height:c('DOMDimensions').getElementDimensions(w.story).height,viewport_height:this.cachedViewportHeight};return {ft:x};};t.prototype.recordTimeStoryWasInView=function(w){if(!this.isTimetrackingEnabled)return;if(!w.vpvd||!w.story)return;if(w.vpvd>0){var x=this.getTimetrackingDataToLog(w),y=c('collectDataAttributes')(w.story,['ft']);Object.assign(x.ft,y.ft);var z=!!y.ft.ei&&x.ft.vpvd_time_delta>this.minTimeToReportImmediately;if(x.ei)delete x.ei;!w.story?i(0):void 0;this.sendDataToLog(w.story,x,z);}};t.prototype.hasBeenVisible=function(w){return w in this.readStoryIDs;};t.prototype.sendDataToLog=function(w,x,y){if(this.useBanzai){var z={};if(y)z.delay=3000;var aa=this.getSessionID();if(aa)x.ft.session_id=aa;c('Banzai').post('feed_tracking',x,z);}else c('clickRefAction')(k,w,null,'FORCE',x);};t.prototype.markStoryRead=function(w){var x=this.behavior.getStoryID(w);if(!x||this.hasBeenVisible(x))return;this.readStoryIDs[x]=true;this.annotatedStoryIDs[x]=true;var y=this._getDataToLogImpl(w),z=c('collectDataAttributes')(w,['ft']);Object.assign(y.ft,z.ft);delete y.ei;this.sendDataToLog(w,y,false);c('CSS').addClass(w,"_x72");if(this.vpvDebug)c('CSS').addClass(w,"_5m7s");};t.prototype.logAnnotatedVPV=function(w){var x=this.behavior.getStoryID(w);if(!x||x in this.annotatedStoryIDs)return;this.annotatedStoryIDs[x]=true;var y=this._getDataToLogImpl(w),z=c('collectDataAttributes')(w,['ft']);Object.assign(y.ft,z.ft);delete y.ei;y.ft.vpv_ft_only=1;this.sendDataToLog(w,y,false);};t.prototype._getDataToLogImpl=function(w){var x=this.behavior.getDataToLog(w);if(!x.ft)x.ft={};return x;};t.clearSingleton=function(){};var u={getAllStories:function w(){return [];},getStoryID:function w(x){return null;},getDataToLog:function w(x){return {};}},v=c('viewportTrackingBuilder')(function(w){return new t(u);});t.factory=v.factory.bind(v);t.singleton=v.singleton.bind(v);t.clearSingleton=v.clearSingleton.bind(v);t.getBehavior=function(){return u;};f.exports=t;}),null);
__d('collectSubtreeData',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k,l,m,n){if(j.offsetWidth===0&&j.offsetHeight===0)return n;var o={};if(j.getAttribute)for(s=0;s<k.length;s++){u=k[s];var p=j.getAttribute(l[u]);if(p){o[u]={};var q=JSON.parse(p);for(var r in m)if(q[r]!==undefined){o[u][r]=true;if(n[u]===undefined)n[u]={};if(n[u][r]===undefined)n[u][r]=[];if(m[r].length>0)n[u][r].push(m[r]);n[u][r].push('('+q[r]);}}}for(var s=0;s<j.childNodes.length;s++){var t=j.childNodes[s];h(t,k,l,m,n);}for(var u in o)for(var v in o[u]){var w=n[u][v][n[u][v].length-1];if(w.length>0&&w.charAt(0)=='('){n[u][v][n[u][v].length-1]=w.substr(1);}else n[u][v].push(')');}return n;}function i(j,k){var l={};for(var m=0;m<k.length;++m)l[k[m]]='data-'+k[m];var n={tn:"","tn-debug":","},o={};h(j,k,l,n,o);for(var p in o)for(var q in o[p])o[p][q]=o[p][q].join('');return o;}f.exports=i;}),null);
__d('recordTNTreeData',['collectSubtreeData'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k={},l=c('collectSubtreeData')(i,['ft']);for(var m in l.ft){k[m+'_tree']=l.ft[m];if(m==='tn-debug')i.setAttribute('tn-debug_subtree',l.ft[m]);}k.evt_value=i.offsetHeight;if(j)k.offset=Math.max(0,i.offsetTop-j.offsetTop);return k;}f.exports=h;}),null);
__d('StreamViewportTracking',['DataAttributeUtils','DOM','DOMDimensions','ViewportTracking','ge','recordTNTreeData','viewportTrackingBuilder'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=51;function k(n,o,p){return {_stream:null,getDataFromConfig:function q(r,s){s.isTimetrackingEnabled=true;},getAllStories:function q(){var r=c('DOM').scry(this.getStream(),p);return r.filter(function(s){return c('DataAttributeUtils').getDataFt(s);});},getStream:function q(){if(o)return o;if(!this._stream)this._stream=c('ge')('home_stream');return this._stream;},getStoryID:function q(r){var s=JSON.parse(c('DataAttributeUtils').getDataFt(r));return s&&s.mf_story_key;},getDataToLog:function q(r){var s=this.getStream(),t=c('recordTNTreeData')(r,s),u=r.getAttribute('data-insertion-position');if(u!==null)t.inspos=u;t.evt=j;t.vpv_time=Math.round(Date.now()/1000);var v=c('DOM').scry(r,'.fbStoryAttachmentImage')[0];if(v){var w=c('DOMDimensions').getElementDimensions(v);t.story_image_height=w.height;t.story_image_width=w.width;}return {ft:t};}};}h=babelHelpers.inherits(l,c('ViewportTracking'));i=h&&h.prototype;l.prototype.getQueryID=function(n){var o=JSON.parse(c('DataAttributeUtils').getDataFt(n));return o.qid;};l.prototype.getFBFeedLocations=function(n){var o=JSON.parse(c('DataAttributeUtils').getDataFt(n));return o.fbfeed_location;};l.prototype.getFBFeedInsertionPosition=function(n){var o=JSON.parse(c('DataAttributeUtils').getDataFt(n));return o.insertion_position;};l.prototype.cleanup=function(){m.clearSingleton();i.cleanup.call(this);};function l(){h.apply(this,arguments);}var m=c('viewportTrackingBuilder')(function(n,o){var p=new l(k(n,o,'.uiStreamStory'));p.init(n);return p;});l.factory=m.factory.bind(m);l.singleton=m.singleton.bind(m);l.clearSingleton=m.clearSingleton.bind(m);l.getBehavior=k;f.exports=l;}),null);
__d('VideoFrameBuffer',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){'use strict';this.$VideoFrameBuffer2=j;this.$VideoFrameBuffer1=i;this.$VideoFrameBuffer3=k||'contain';}h.prototype.updateFrameBuffer=function(){'use strict';if(this.$VideoFrameBuffer4){this.$VideoFrameBuffer1.width=this.$VideoFrameBuffer4;this.$VideoFrameBuffer4=null;}if(this.$VideoFrameBuffer5){this.$VideoFrameBuffer1.height=this.$VideoFrameBuffer5;this.$VideoFrameBuffer5=null;}var i=this.$VideoFrameBuffer1.clientWidth||this.$VideoFrameBuffer1.width,j=this.$VideoFrameBuffer1.clientHeight||this.$VideoFrameBuffer1.height,k=i,l=j,m=this.$VideoFrameBuffer2.videoWidth/this.$VideoFrameBuffer2.videoHeight,n=k/l;if(this.$VideoFrameBuffer3==='cover'){n*=-1;m*=-1;}if(n>m){k=l*m;}else if(n<m)l=k/m;var o=this.$VideoFrameBuffer1.getContext('2d');if(!(o instanceof window.CanvasRenderingContext2D))return;o.drawImage(this.$VideoFrameBuffer2,(i-k)/2,(j-l)/2,k,l);};h.prototype.getDOMNode=function(){'use strict';return this.$VideoFrameBuffer1;};h.prototype.updateDimensions=function(i,j){'use strict';this.$VideoFrameBuffer4=i;this.$VideoFrameBuffer5=j;};f.exports=h;}),null);