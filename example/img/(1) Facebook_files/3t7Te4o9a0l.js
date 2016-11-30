if (self.CavalryLogger) { CavalryLogger.start_js(["\/sDJh"]); }

__d("VideoChannelEntryPoint",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CASTING:"casting",GROUP:"group",NEWSFEED:"newsfeed",PAGE:"page",PROFILE:"profile",SAVED_STORY:"saved_story",SEARCH:"search",SEARCH_TOPIC_MEDIA:"search_topic_media",PERMALINK:"permalink",WWW_RHC:"www_rhc",VIDEO_HOME:"video_home",VIDEO_HOME_LATEST_FROM_PAGES_CHANNEL:"video_home_latest_from_pages_channel",VIDEO_HOME_SAVED_CHANNEL:"video_home_saved_channel",VIDEO_HOME_SHARED_WITH_YOU_CHANNEL:"video_home_shared_with_you_channel",VIDEO_HOME_TOP_CHANNEL:"video_home_top_channel",VIDEO_HOME_WATCHED_CHANNEL:"video_home_watched_channel",UNKNOWN:"unknown",LIVE_MAP:"live_map",PLAYLIST:"playlist",ELECTION_HUB:"election_hub"};}),null);
__d("VideoChannel",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null,i={get:function j(){return h;},set:function j(k){h=k;}};f.exports=i;}),null);
__d('FeedVideoClickToPlayController',['Event','Set','setImmediate','VideoPlayerAbortLoadingExperiment','VideoPlayerExperiments','VideoPlayerReason','destroyOnUnload','throttle'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null;function i(){'use strict';this.$FeedVideoClickToPlayController2=new (c('Set'))();this.$FeedVideoClickToPlayController1=null;c('destroyOnUnload')(function(){this.$FeedVideoClickToPlayController2.clear();if(this.$FeedVideoClickToPlayController1){this.$FeedVideoClickToPlayController1.remove();this.$FeedVideoClickToPlayController1=null;}if(this===h)h=null;}.bind(this));}i.prototype.addVideoUnit=function(j){'use strict';if(!this.$FeedVideoClickToPlayController3())this.$FeedVideoClickToPlayController4();j.addListener('beginPlayback',function(k){var l=k.reason;if(l===c('VideoPlayerReason').USER||l===c('VideoPlayerReason').LOOP)this.$FeedVideoClickToPlayController2.add(j);}.bind(this));j.addListener('turnOffAutoplay',function(k){var l=k.reason;if(l==='unmuted')this.$FeedVideoClickToPlayController2.add(j);}.bind(this));if(j.getVideoPlayerController().isState('playing')&&!j.isAutoplayable())this.$FeedVideoClickToPlayController2.add(j);j.addListener('pausePlayback',function(){this.$FeedVideoClickToPlayController2['delete'](j);}.bind(this));j.addListener('finishPlayback',function(){this.$FeedVideoClickToPlayController2['delete'](j);}.bind(this));};i.registerVideoUnit=function(j){'use strict';if(h==null)h=new i();h.addVideoUnit(j);};i.prototype.$FeedVideoClickToPlayController4=function(){'use strict';if(this.$FeedVideoClickToPlayController1)this.$FeedVideoClickToPlayController1.remove();this.$FeedVideoClickToPlayController1=c('Event').listen(window,'scroll',c('throttle')(this.onScroll.bind(this),300));};i.prototype.$FeedVideoClickToPlayController3=function(){'use strict';return !!this.$FeedVideoClickToPlayController1;};i.prototype.$FeedVideoClickToPlayController5=function(j){'use strict';j.pause(c('VideoPlayerReason').AUTOPLAY);if(c('VideoPlayerAbortLoadingExperiment').canAbort)j.abortLoading();this.$FeedVideoClickToPlayController2['delete'](j);};i.prototype.onScroll=function(){'use strict';this.$FeedVideoClickToPlayController2.forEach(function(j){if(j&&!j.isVisible()&&!j.getIsInChannel()){var k=j.getVideoPlayerController();if(k.isAd()){if(c('VideoPlayerExperiments').slidingWNSv3){c('setImmediate')(function(){if(j&&!j.isVisible()&&!j.getIsInChannel())this.$FeedVideoClickToPlayController5(j);}.bind(this));}else this.$FeedVideoClickToPlayController5(j);}else if(k.isMuted()&&k.isState('playing')){this.$FeedVideoClickToPlayController5(j);k.emit('resumeAutoplay');}}}.bind(this));};f.exports=i;}),null);
__d('VideoClickForMoreOverlay',['cx','CSS','EventListener','VideoPlayerUIComponentDrawer','DOM'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k,l){'use strict';this.$VideoClickForMoreOverlay1=j;this.$VideoClickForMoreOverlay2=k;this.$VideoClickForMoreOverlay3=false;this.$VideoClickForMoreOverlay4=this.$VideoClickForMoreOverlay1.registerDrawer(c('VideoPlayerUIComponentDrawer').priorities.ClickForMore,l?i.REDESIGN_HEIGHT:i.DEFAULT_HEIGHT);this.$VideoClickForMoreOverlay4.addListener('reposition',this.$VideoClickForMoreOverlay5.bind(this));this.$VideoClickForMoreOverlay1.addListener('VideoControls/visibilityUpdate',function(n){var o=n.areControlsVisible;return (this.$VideoClickForMoreOverlay6(o));}.bind(this));var m=this.$VideoClickForMoreOverlay1.getOption('VideoControls','areControlsVisible');if(m)this.$VideoClickForMoreOverlay6(m);this.$VideoClickForMoreOverlay1.addListener('stateChange',this.$VideoClickForMoreOverlay7.bind(this));c('EventListener').listen(this.$VideoClickForMoreOverlay2,'click',function(){return this.$VideoClickForMoreOverlay8();}.bind(this));}i.prototype.$VideoClickForMoreOverlay5=function(j){'use strict';c('DOM').setAttributes(this.$VideoClickForMoreOverlay2,{style:'bottom:'+j+'px;'});};i.prototype.$VideoClickForMoreOverlay6=function(j){'use strict';this.$VideoClickForMoreOverlay3=j;this.$VideoClickForMoreOverlay7();};i.prototype.$VideoClickForMoreOverlay7=function(){'use strict';var j=!this.$VideoClickForMoreOverlay1.isPlayerVersion('silvercity')&&!this.$VideoClickForMoreOverlay1.getIsInChannel()&&this.$VideoClickForMoreOverlay1.isState('playing');if(j&&this.$VideoClickForMoreOverlay3){this.$VideoClickForMoreOverlay9();}else this.$VideoClickForMoreOverlay10();};i.prototype.$VideoClickForMoreOverlay8=function(){'use strict';this.$VideoClickForMoreOverlay1.clickVideo();};i.prototype.$VideoClickForMoreOverlay9=function(){'use strict';c('CSS').removeClass(this.$VideoClickForMoreOverlay2,"_2is8");this.$VideoClickForMoreOverlay4.reserve();};i.prototype.$VideoClickForMoreOverlay10=function(){'use strict';c('CSS').addClass(this.$VideoClickForMoreOverlay2,"_2is8");this.$VideoClickForMoreOverlay4.release();};i.DEFAULT_HEIGHT=18;i.REDESIGN_HEIGHT=38;f.exports=i;}),null);
__d('VideoWithClickToChannelView',['cx','AsyncRequest','Bootloader','CSS','Map','VideoChainingCaller','VideoChannel','VideoChannelEntryPoint','VideoChannelViewGatings','VideoPlayerReason','logVideosClickTracking'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k,l,m,n,o,p,q,r){'use strict';this.$VideoWithClickToChannelView1=j;this.$VideoWithClickToChannelView2=k;this.$VideoWithClickToChannelView3=n;this.$VideoWithClickToChannelView4=l;this.$VideoWithClickToChannelView5=m;this.$VideoWithClickToChannelView6=new (c('Map'))();this.$VideoWithClickToChannelView7=o;this.$VideoWithClickToChannelView8=p;this.$VideoWithClickToChannelView9=q;this.$VideoWithClickToChannelView10=r;this.$VideoWithClickToChannelView1.addListener('stateChange',this.$VideoWithClickToChannelView11.bind(this));this.$VideoWithClickToChannelView1.registerOption('VideoWithClickToChannelView','isChannelEligible',function(){return this.isChannelEligible();}.bind(this));this.$VideoWithClickToChannelView1.registerOption('VideoWithClickToChannelView','canOpenFromVideoPlayer',function(){return this.canOpenChannelView();}.bind(this));this.$VideoWithClickToChannelView1.setLogEntryPropertyGetters({channel_eligibility:'eligible'});if(this.canOpenChannelView())this.$VideoWithClickToChannelView12();this.$VideoWithClickToChannelView1.addListener('clickVideo',this.$VideoWithClickToChannelView13.bind(this));if(this.$VideoWithClickToChannelView1.hasSeenClick())this.$VideoWithClickToChannelView13();}i.prototype.$VideoWithClickToChannelView14=function(){'use strict';return this.$VideoWithClickToChannelView1.hasOption('VideoControls','available');};i.prototype.$VideoWithClickToChannelView15=function(){'use strict';this.$VideoWithClickToChannelView16('hideOnFinish');this.$VideoWithClickToChannelView16('hideOnPause');};i.prototype.$VideoWithClickToChannelView16=function(j){'use strict';var k=this.$VideoWithClickToChannelView1.getOption('VideoControls',j);this.$VideoWithClickToChannelView6.set(j,k);};i.prototype.$VideoWithClickToChannelView12=function(){'use strict';c('CSS').addClass(this.$VideoWithClickToChannelView1.getVideoNode(),"_244o");};i.prototype.$VideoWithClickToChannelView17=function(){'use strict';c('CSS').removeClass(this.$VideoWithClickToChannelView1.getVideoNode(),"_244o");};i.prototype.$VideoWithClickToChannelView11=function(){'use strict';if(this.canOpenChannelView()){this.$VideoWithClickToChannelView12();}else this.$VideoWithClickToChannelView17();};i.prototype.$VideoWithClickToChannelView13=function(){'use strict';if(!this.canOpenChannelView()){if(this.$VideoWithClickToChannelView1.isState('playing')){if(this.$VideoWithClickToChannelView1.getOption('VideoWithLiveBroadcast','isLive'))return;this.$VideoWithClickToChannelView1.pause(c('VideoPlayerReason').USER);}else{c('logVideosClickTracking')(this.$VideoWithClickToChannelView1.getVideoNode());this.$VideoWithClickToChannelView1.play(c('VideoPlayerReason').USER);}}else this.$VideoWithClickToChannelView18();};i.prototype.isChannelEligible=function(){'use strict';var j=c('VideoChannelViewGatings').allowChannelViewForFlash||this.$VideoWithClickToChannelView4===c('VideoChannelEntryPoint').VIDEO_HOME,k=!this.$VideoWithClickToChannelView1.isPlayerVersion('silvercity')||j,l=c('VideoChannelViewGatings').channelView||this.$VideoWithClickToChannelView4===c('VideoChannelEntryPoint').VIDEO_HOME;return l&&!c('VideoChannel').get()&&!this.$VideoWithClickToChannelView1.isState('fallback')&&!this.$VideoWithClickToChannelView1.isFullscreen()&&k;};i.prototype.canOpenChannelView=function(){'use strict';var j=true;if(c('VideoChannelViewGatings').channelViewWithInlineControls)if(!this.$VideoWithClickToChannelView1.isState('playing'))j=false;return this.isChannelEligible()&&j;};i.prototype.$VideoWithClickToChannelView18=function(){'use strict';c('logVideosClickTracking')(this.$VideoWithClickToChannelView1.getVideoNode());if(!this.$VideoWithClickToChannelView10){c('Bootloader').loadModules(["VideoChannelController"],function(j){j.openFromVideoPlayer(this.$VideoWithClickToChannelView1,this.$VideoWithClickToChannelView2,this.$VideoWithClickToChannelView5,this.$VideoWithClickToChannelView19());}.bind(this),'VideoWithClickToChannelView');}else{new (c('AsyncRequest'))(this.$VideoWithClickToChannelView3).send();this.$VideoWithClickToChannelView1.pause();}};i.prototype.$VideoWithClickToChannelView19=function(){'use strict';if(!this.$VideoWithClickToChannelView7)return null;return {originalVideoIds:this.$VideoWithClickToChannelView7,isFromVideoViewCarousel:this.$VideoWithClickToChannelView8,shouldFetchMoreVideos:this.$VideoWithClickToChannelView9};};f.exports=i;}),null);
__d('VideoAutoplayControllerBase',['Arbiter','DesktopHscrollUnitEventConstants','Event','VideoPlayerExperiments','VideoPlayerAbortLoadingExperiment','VideoPlayerReason','Visibility','destroyOnUnload','SubscriptionsHandler','throttle','setTimeoutAcrossTransitions','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=3000;function i(l,m){var n=[];return function(){var o=Date.now();n.unshift(o);var p=0;while(n[++p]+m>o);n=n.slice(0,p);return n.length<=l;};}function j(l,m,n){var o=null;return function(){var p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];if(m()){l.apply(undefined,r);return c('emptyFunction').thatReturnsFalse;}else if(!o)(function(){var t=setTimeout(function(){o=null;l.apply(undefined,r);},n);o=function u(){if(!o)return false;clearTimeout(t);o=null;return true;};})();return o;};}function k(l){'use strict';this.$VideoAutoplayControllerBase3=null;this.$VideoAutoplayControllerBase2=null;this.$VideoAutoplayControllerBase8=[];this.$VideoAutoplayControllerBase1=l;this.$VideoAutoplayControllerBase4=null;this.$VideoAutoplayControllerBase5=new (c('SubscriptionsHandler'))();c('destroyOnUnload')(function(){this.$VideoAutoplayControllerBase8=[];this.$VideoAutoplayControllerBase3=null;if(this.$VideoAutoplayControllerBase4){this.$VideoAutoplayControllerBase4.remove();this.$VideoAutoplayControllerBase4=null;}this.$VideoAutoplayControllerBase5.release();}.bind(this));if(c('VideoPlayerExperiments').autoplayMaxCallsPerWindow)this.$VideoAutoplayControllerBase6=j(function(m){var n=this.$VideoAutoplayControllerBase3;if(n)n.playWithoutUnmute(m);}.bind(this),i(c('VideoPlayerExperiments').autoplayMaxCallsPerWindow,c('VideoPlayerExperiments').autoplayThrottleWindow),c('VideoPlayerExperiments').autoplayThrottleDelay);this.$VideoAutoplayControllerBase7=c('emptyFunction').thatReturnsFalse;}k.prototype.getVideoUnits=function(){'use strict';return this.$VideoAutoplayControllerBase8;};k.prototype.setVideoUnits=function(l){'use strict';this.$VideoAutoplayControllerBase8=l;};k.prototype.addVideoUnit=function(l){'use strict';this.$VideoAutoplayControllerBase8.push(l);};k.prototype.getPlayingVideoUnit=function(){'use strict';return this.$VideoAutoplayControllerBase3;};k.prototype.setPlayingVideoUnit=function(l){'use strict';this.$VideoAutoplayControllerBase3=l;if(this.$VideoAutoplayControllerBase3)this.setupPlayingVideoUnitSubscriptions();};k.prototype.playVideo=function(l,m){'use strict';this.setPlayingVideoUnit(l);if(this.$VideoAutoplayControllerBase3){var n=this.$VideoAutoplayControllerBase6;if(n){this.$VideoAutoplayControllerBase7=n.call(this,m);}else this.$VideoAutoplayControllerBase3.playWithoutUnmute(m);}};k.prototype.setupPlayingVideoUnitSubscriptions=function(){'use strict';throw new Error('Should be overridden');};k.prototype.addSubscriberVideoUnit=function(){'use strict';if(!this.getVideoUnits().length){this.$VideoAutoplayControllerBase5.addSubscriptions(c('Event').listen(window,'resize',this.updateAutoplay.bind(this)),c('Event').listen(window,'blur',this.$VideoAutoplayControllerBase9.bind(this)),c('Event').listen(window,'focus',this.$VideoAutoplayControllerBase10.bind(this)),c('Visibility').addListener(c('Visibility').HIDDEN,this.$VideoAutoplayControllerBase9.bind(this)),c('Visibility').addListener(c('Visibility').VISIBLE,this.$VideoAutoplayControllerBase10.bind(this)),c('Arbiter').subscribe(c('DesktopHscrollUnitEventConstants').HSCROLL_ITEM_SHOWN_EVENT,this.updateAutoplay.bind(this)));if(!this.$VideoAutoplayControllerBase11())this.$VideoAutoplayControllerBase12();}};k.prototype.$VideoAutoplayControllerBase9=function(){'use strict';if(!this.$VideoAutoplayControllerBase2){this.$VideoAutoplayControllerBase2=this.getPlayingVideoUnit();this.pausePlayingVideo(c('VideoPlayerReason').PAGE_VISIBILITY);}};k.prototype.$VideoAutoplayControllerBase10=function(){'use strict';if(this.$VideoAutoplayControllerBase2){this.playVideo(this.$VideoAutoplayControllerBase2,c('VideoPlayerReason').PAGE_VISIBILITY);this.$VideoAutoplayControllerBase2=null;}};k.prototype.$VideoAutoplayControllerBase12=function(){'use strict';if(this.$VideoAutoplayControllerBase4)this.$VideoAutoplayControllerBase4.remove();this.$VideoAutoplayControllerBase4=c('Event').listen(window,'scroll',c('throttle')(this.updateAutoplay.bind(this),this.$VideoAutoplayControllerBase1));};k.prototype.$VideoAutoplayControllerBase11=function(){'use strict';return !!this.$VideoAutoplayControllerBase4;};k.prototype.getClosestVideoUnits=function(l){'use strict';return this.$VideoAutoplayControllerBase8.filter(function(m){return m.getDistanceToViewport()>=0;}).sort(function(m,n){return (m.getDistanceToViewport()-n.getDistanceToViewport());}).slice(0,l);};k.prototype.getVisibleUnits=function(){'use strict';var l=[];this.$VideoAutoplayControllerBase8.forEach(function(m){if(m.isVisible()){l.push(m);if(!m.wasVisible){m.wasVisible=true;m.logDisplayed();}}else m.wasVisible=false;});return l;};k.prototype.pausePlayingVideo=function(l){'use strict';var m=this.$VideoAutoplayControllerBase3;if(m){if(!this.$VideoAutoplayControllerBase7())m.pause(l);if(c('VideoPlayerAbortLoadingExperiment').canAbort&&!m.getIsInChannel())c('setTimeoutAcrossTransitions')(function(){if(!m.isState('playing'))m.abortLoading();},h);this.$VideoAutoplayControllerBase3=null;}};k.prototype.updateAutoplay=function(){'use strict';throw new Error('Should be overridden');};f.exports=k;}),null);
__d("XVideoAutoplayNuxAsyncController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/video\/autoplay\/nux\/",{});}),null);
__d("XVideoAutoplayNuxDismissAsyncController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/video\/autoplay\/nux\/dismiss\/",{});}),null);
__d("XVideoAutoplayNuxLogViewAsyncController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/video\/autoplay\/nux\/log\/view\/",{});}),null);
__d('VideoAutoplayControllerX',['csx','AsyncRequest','DOM','Event','Network','ifRequired','Run','SubscriptionsHandler','VideoAutoplayControllerBase','VideoPlayerExperiments','VideoPlayerPreloadExperiment','VideoPlayerReason','XVideoAutoplayNuxAsyncController','XVideoAutoplayNuxDismissAsyncController','XVideoAutoplayNuxLogViewAsyncController','destroyOnUnload','getViewportDimensions'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=null,l=500,m=false;function n(){return !c('VideoPlayerExperiments').delayAutoplayUntilAfterLoad||m;}i=babelHelpers.inherits(o,c('VideoAutoplayControllerBase'));j=i&&i.prototype;function o(){'use strict';j.constructor.call(this,l);this.$VideoAutoplayControllerX1=new (c('SubscriptionsHandler'))();this.$VideoAutoplayControllerX2=new (c('SubscriptionsHandler'))();this.$VideoAutoplayControllerX3=true;this.$VideoAutoplayControllerX4=true;this.$VideoAutoplayControllerX5=null;this.$VideoAutoplayControllerX6=null;this.$VideoAutoplayControllerX7=false;this.$VideoAutoplayControllerX8=null;var p=c('XVideoAutoplayNuxAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(p).setAllowCrossPageTransition().send();c('destroyOnUnload')(function(){this.$VideoAutoplayControllerX9();if(this===k)k=null;}.bind(this));c('Run').onAfterLoad(function(){m=true;if(c('VideoPlayerExperiments').delayAutoplayUntilAfterLoad)if(k)k.updateAutoplay();});}o.registerVideoUnit=function(p){'use strict';if(k==null)k=new o();k.addSubscriberVideoUnit();k.addVideoUnit(p);if(c('VideoPlayerExperiments').enforceOnlyOneVideoPlayingWithAudio)k.$VideoAutoplayControllerX10(p);k.$VideoAutoplayControllerX11();if(p.isVisible()&&n())k.updateAutoplay();};o.setShouldAutoplay=function(p){'use strict';if(k==null)k=new o();k.$VideoAutoplayControllerX3=p;k.$VideoAutoplayControllerX4=p;k.updateAutoplay();};o.prototype.$VideoAutoplayControllerX9=function(){'use strict';this.$VideoAutoplayControllerX1.release();this.$VideoAutoplayControllerX2.release();};o.setAutoplayNux=function(p,q){'use strict';if(k==null)return;k.$VideoAutoplayControllerX5=p;k.$VideoAutoplayControllerX6=q;k.$VideoAutoplayControllerX7=true;var r=c('DOM').find(q.getContentRoot(),"._5cqr");c('Event').listen(r,'click',function(){k.$VideoAutoplayControllerX12();});var s=c('DOM').scry(q.getContentRoot(),"._36gl")[0];if(s)c('Event').listen(s,'click',function(){k.$VideoAutoplayControllerX12();});};o.prototype.$VideoAutoplayControllerX12=function(){'use strict';this.$VideoAutoplayControllerX6.hide();this.$VideoAutoplayControllerX7=false;var p=c('XVideoAutoplayNuxDismissAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(p).setAllowCrossPageTransition().send();};o.prototype.setupPlayingVideoUnitSubscriptions=function(){'use strict';if(this.getPlayingVideoUnit().addListener){this.$VideoAutoplayControllerX1.release();this.$VideoAutoplayControllerX1.engage();if(!this.getPlayingVideoUnit().isLooping())this.$VideoAutoplayControllerX1.addSubscriptions(this.getPlayingVideoUnit().addListener('finishPlayback',function(){this.setPlayingVideoUnit(null);}.bind(this)));this.$VideoAutoplayControllerX1.addSubscriptions(this.getPlayingVideoUnit().addListener('turnOffAutoplay',function(){this.setPlayingVideoUnit(null);}.bind(this)),this.getPlayingVideoUnit().addListener('pausePlayback',function(){this.$VideoAutoplayControllerX11();}.bind(this)),this.getPlayingVideoUnit().addListener('finishPlayback',function(){this.$VideoAutoplayControllerX11();}.bind(this)),c('Network').addListener('online',function(){this.$VideoAutoplayControllerX11();}.bind(this)),c('Network').addListener('offline',function(){this.$VideoAutoplayControllerX11();}.bind(this)));}};o.prototype.$VideoAutoplayControllerX11=function(){'use strict';if(c('VideoPlayerExperiments').webVideosBlockAutoplayWhenOffline)if(c('Network').isOnline()){this.$VideoAutoplayControllerX3=this.$VideoAutoplayControllerX4;}else{this.$VideoAutoplayControllerX4=this.$VideoAutoplayControllerX3;this.$VideoAutoplayControllerX3=false;return;}var p=this.getVideoUnits();for(var q=0;q<p.length;q++){var r=p[q].getVideoPlayerController();if(r!==null)r.updateAutoplayRestrained();}};o.prototype.$VideoAutoplayControllerX10=function(p){'use strict';if(!p.addListener)return;var q=function(){var r=p.getVideoPlayerController();if(!r.isMuted()&&r.isState('playing')){if(this.$VideoAutoplayControllerX8&&this.$VideoAutoplayControllerX8!==p){var s=this.$VideoAutoplayControllerX8.getVideoPlayerController(),t=s.getOption('VideoWithLiveBroadcast','isLive');if(t){s.mute();}else s.pause(c('VideoPlayerReason').USER);}this.$VideoAutoplayControllerX8=p;}}.bind(this);this.$VideoAutoplayControllerX2.addSubscriptions(p.addListener('beginPlayback',q),p.addListener('changeVolume',q),p.addListener('unmuteVideo',q));};o.prototype.showAutoplayNUX=function(p){'use strict';if(this.$VideoAutoplayControllerX6&&!this.$VideoAutoplayControllerX6.isShown()){var q=p.getVideoPlayerController().getRootNode();c('DOM').prependContent(q,this.$VideoAutoplayControllerX5);this.$VideoAutoplayControllerX6.show();var r=c('XVideoAutoplayNuxLogViewAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(r).setAllowCrossPageTransition().send();}this.$VideoAutoplayControllerX7=false;};o.getChannelVideos=function(){'use strict';if(k)return k.getVideoUnits().filter(function(p){return p.getIsInChannel();});return null;};o.prototype.updateAutoplay=function(){'use strict';if(!this.$VideoAutoplayControllerX3){this.pausePlayingVideo(c('VideoPlayerReason').AUTOPLAY);return;}var p=this.getVisibleUnits();this.getClosestVideoUnits(c('VideoPlayerPreloadExperiment').preloadVideosCount).forEach(function(t){return t.preload();});var q=p.length,r=null;if(q==1){r=p[0];r=r.isAutoplayable()?r:null;}else if(q>1){var s=c('getViewportDimensions')().height/2;p.forEach(function(t){if(!t.isAutoplayable())return;var u=t.getDOMPosition(),v=u.y+u.height/2,w=Math.abs(v-s);t.playPriority=w;if(!r||t.playPriority<r.playPriority)r=t;});}if(this.getPlayingVideoUnit()){if(r!=this.getPlayingVideoUnit()){this.pausePlayingVideo(c('VideoPlayerReason').AUTOPLAY);this.playVideo(r,c('VideoPlayerReason').AUTOPLAY);if(this.$VideoAutoplayControllerX7)this.showAutoplayNUX(r);}}else if(r){this.playVideo(r,c('VideoPlayerReason').AUTOPLAY);if(this.$VideoAutoplayControllerX7)this.showAutoplayNUX(r);}};f.exports=o;}),null);
__d('VideoAutoplayPlayerBase',['EventEmitter'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('EventEmitter'));i=h&&h.prototype;function j(){'use strict';i.constructor.call(this);}j.prototype.isVisible=function(){'use strict';throw new Error('Should be overridden');};j.prototype.getDistanceToViewport=function(){'use strict';throw new Error('Should be overridden');};j.prototype.getVideoPlayerController=function(){'use strict';return null;};j.prototype.logDisplayed=function(){'use strict';throw new Error('Should be overridden');};j.prototype.playWithoutUnmute=function(k){'use strict';throw new Error('Should be overridden');};j.prototype.pause=function(k){'use strict';throw new Error('Should be overridden');};j.prototype.isAutoplayable=function(){'use strict';throw new Error('Should be overridden');};j.prototype.getDOMPosition=function(){'use strict';throw new Error('Should be overridden');};j.prototype.isLooping=function(){'use strict';throw new Error('Should be overridden');};j.prototype.isState=function(k){'use strict';throw new Error('Should be overridden');};f.exports=j;}),null);
__d('VideoCTAEndscreen',['cx','Arbiter','AttachmentRelatedShareConstants','CSS','Event','Focus','SubscriptionsHandler','VideoCTALoggingConfig','VideoPlayerReason','VideoPlayerLoggerEvent','logVideosClickTracking'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){'use strict';this.$VideoCTAEndscreen1=j;this.$VideoCTAEndscreen2=k.endscreenElement;this.$VideoCTAEndscreen3=k.replayElement;this.$VideoCTAEndscreen4=k.ctaElement;this.$VideoCTAEndscreen5=k.isPausescreen;this.$VideoCTAEndscreen6=new (c('SubscriptionsHandler'))();this.$VideoCTAEndscreen6.addSubscriptions(c('Event').listen(this.$VideoCTAEndscreen3,'click',function(){return this.$VideoCTAEndscreen7();}.bind(this)),j.addListener('beginPlayback',function(){return this.$VideoCTAEndscreen8();}.bind(this)),j.addListener('VideoChannelController/exitChannel',function(){if(j.isState('finished'))this.$VideoCTAEndscreen9();}.bind(this)));if(this.$VideoCTAEndscreen4)this.$VideoCTAEndscreen6.addSubscriptions(c('Event').listen(this.$VideoCTAEndscreen4,'click',function(){return this.$VideoCTAEndscreen10();}.bind(this)));if(this.$VideoCTAEndscreen5){this.$VideoCTAEndscreen6.addSubscriptions(j.addListener('pausePlayback',function(){return this.$VideoCTAEndscreen11();}.bind(this)));}else this.$VideoCTAEndscreen6.addSubscriptions(j.addListener('finishPlayback',function(){return this.$VideoCTAEndscreen9();}.bind(this)));}i.prototype.$VideoCTAEndscreen7=function(){'use strict';var j={reason:c('VideoPlayerReason').USER};this.$VideoCTAEndscreen1.clickVideo();if(this.$VideoCTAEndscreen1.isState('paused')){if(c('VideoCTALoggingConfig').shouldLogUnpausedEvent)this.$VideoCTAEndscreen1.logEvent(c('VideoPlayerLoggerEvent').UNPAUSED,j);}else if(this.$VideoCTAEndscreen1.isState('finished'))this.$VideoCTAEndscreen1.logEvent(c('VideoPlayerLoggerEvent').REPLAYED,j);var k=this.$VideoCTAEndscreen1.getVideoNode();c('logVideosClickTracking')(k);c('Focus').set(k);};i.prototype.$VideoCTAEndscreen10=function(){'use strict';c('Arbiter').inform(c('AttachmentRelatedShareConstants').FBVIDEO_CLICK,{attachment:this.$VideoCTAEndscreen1.getRootNode(),fbvideo_id:this.$VideoCTAEndscreen1.getVideoID()});};i.prototype.$VideoCTAEndscreen9=function(){'use strict';if(!this.$VideoCTAEndscreen1.getIsInChannel())this.$VideoCTAEndscreen11();};i.prototype.$VideoCTAEndscreen11=function(){'use strict';c('CSS').addClass(this.$VideoCTAEndscreen2,"_1qbf");};i.prototype.$VideoCTAEndscreen8=function(){'use strict';c('CSS').removeClass(this.$VideoCTAEndscreen2,"_1qbf");};f.exports=i;}),null);