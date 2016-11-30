if (self.CavalryLogger) { CavalryLogger.start_js(["5JcQM"]); }

__d("AYMTTipEventType",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CREATED:"created",PASSED_VALIDATION:"passed_validation",FAILED_VALIDATION:"failed_validation",PASSED_INVALIDATION:"passed_invalidation",FAILED_INVALIDATION:"failed_invalidation",PASSED_VISIBILITY:"passed_visibility",FAILED_VISIBILITY:"failed_visibility",ERROR:"error",ELIGIBILITY:"eligibility",INVALIDATED:"invalidated",READY_FOR_RENDER:"ready_for_render",IMPRESSION:"impression",CLICK:"click",XOUT:"xout",CONVERSION:"conversion",DELIVERY:"delivery",DELIVERY_FAILURE:"delivery_failure",TOUR_COMPLETE:"tour_complete",CAROUSEL_NAVIGATE:"caoursel_navigate"};}),null);
__d("AYMTTipSettings",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ALERT_BLACKLISTED:"alert_blacklisted",ALREADY_DELIVERED:"already_delivered",AYMT_DATA:"aymt_data",AYMT_REQUEST_ID:"aymt_request_id",CAMPAIGN_ACTION_COUNT_LOWER_BOUND:"campaign_action_count_lower_bound",CAMPAIGN_ACTION_COUNT_UPPER_BOUND:"campaign_action_count_upper_bound",CAMPAIGN_OBJECTIVE:"campaign_objective",CHANNEL_ID:"channel_id",CLICK_EXPIRES_AFTER:"click_expires_after",CLIENT_SIDE_IMPRESSIONS_COUNT:"client_side_impressions_count",CLIENT_SIDE_RENDERER:"client_side_renderer",CLIENT_SIDE_RENDERING_CLASS:"client_side_rendering_class",CLIENT_SIDE_RENDERING_PARAMS:"client_side_rendering_params",CLIENT_SIDE_RENDERING_SPEC:"client_side_rendering_spec",CLIENT_SIDE_RULES:"client_side_rules",CLIENT_SIDE_RULE_CLASS:"client_side_rule_class",CLIENT_SIDE_RULE_PARAMS:"client_side_rule_params",CMS_ID:"cms_id",CONVERSION_EXPIRES_AFTER:"conversion_expires_after",DEPENDS_ON_OTHER_TIP_EVENT:"depends_on_other_tip_event",DELAY_IN_SEC:"delay_in_sec",DELIVERY_REQUESTED_BY_USER:"delivery_requested_by_user",ELIGIBILITY_GK:"eligibility_gk",EMAIL_CMS_ID:"email_cms_id",ENT_TIP_CONFIG_ID:"ent_tip_config_id",GUARANTEE_DELIVERY:"guarantee_delivery",HAS_GLOBAL_HOLDOUT:"has_global_holdout",HIDE_IF_CONVERTED:"hide_if_converted",HIDE_ON_BUSINESS_MANAGER:"hide_on_business_manager",HOLDOUT_UNIT_TYPE:"holdout_unit_type",IMPRESSION_CAP:"impression_cap",IMPRESSION_CAP_RESET_PERIOD:"impression_cap_reset_period",INVALID_REASON_SAMPLE_RATE:"invalid_reason_sample_rate",IS_HIGHLIGHTED_IN_MOBILE_ADS_MANAGER:"is_highlighted_in_mobile_ads_manager",LAUNCH_GK:"launch_gk",LOOKBACK_DAYS:"lookback_days",MAX_INSTANCES_NUM:"max_instances_num",NAME:"name",OWNER:"owner",PIXEL_HELP_LINK:"pixel_help_link",PIXEL_LAST_FIRING_DAYS_BACK:"pixel_last_firing_days_back",PROMOTION_ID:"promotion_id",PROMOTION_TEST_QE:"promotion_test_qe",PROMOTION_GROUP_ID:"promotion_group_id",RENDERING_TYPE:"rendering_type",SIGNATURE_PARAMS:"signature_params",SKIP_AUGMENTATION_FOR_CONVERSION:"skip_augmentation_for_conversion",SUPPORT_FORM_ID:"support_form_id",TASK_NUMBER:"task_number",TASK_SPECIFIC_HOLDOUT:"task_specific_holdout",TASK_SPECIFIC_GK_HOLDOUT:"task_specific_gk_holdout",TIP_CLASS:"tip_class",TIP_DELIVERY_CAP:"tip_delivery_cap",TIP_DELIVERY_CAP_RESET_PERIOD:"tip_delivery_cap_reset_period",TIP_GLOBAL_IMPRESSION_CAP:"tip_global_impression_cap",TIP_ID:"tip_id",TIP_IS_INLINE:"tip_is_inline",TIP_IS_STANDALONE:"tip_is_standalone",TIP_NAME_DELIVERY_CAP:"tip_name_delivery_cap",TIP_NAME_DELIVERY_CAP_RESET_PERIOD:"tip_name_delivery_cap_reset_period",TIP_NAME_IMPRESSION_CAP:"tip_name_impression_cap",TIP_NAME_IMPRESSION_CAP_RESET_PERIOD:"tip_name_impression_cap_reset_period",TIP_PRIORITY:"tip_priority",TIP_SCORE:"tip_score",TIP_XOUT_IS_BENIGN:"tip_xout_is_benign",TUTORIAL_ID:"tutorial_id",UNSAMPLED_SCUBA:"unsampled_scuba",VALIDATE_ONLY_ESSENTIAL:"validate_only_essential",VALIDATION_CACHE_TIMEOUT:"validation_cache_timeout",VISIBILITY_PARAM:"visibility_param",VISIBILITY_QE:"visibility_qe",XOUT_EXPIRES_AFTER:"xout_expires_after"};}),null);
__d("EventWatchStatus",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={WATCHED:"WATCHED",UNWATCHED:"UNWATCHED",GOING:"GOING",DECLINED:"DECLINED"};}),null);
__d("XAYMTMultiTipAsyncClickController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ads\/growth\/aymt\/multi_async_click\/",{tip_id:{type:"String"},channel_id:{type:"String"},aymt_data:{type:"String"},target:{type:"String",required:true},handled_delete:{type:"Bool",defaultValue:true}});}),null);
__d("XAYMTMultiTipCarouselNavigationLoggerAsyncController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ads\/growth\/aymt\/log\/carousel_navigation\/",{tip_id:{type:"String"},channel_id:{type:"String"},aymt_data:{type:"String"},message:{type:"String",required:true}});}),null);
__d("XAYMTMultiTipEligibilityLoggerAsyncController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ads\/growth\/aymt\/log\/eligibility\/",{tip_id:{type:"String"},channel_id:{type:"String"},aymt_data:{type:"String"}});}),null);
__d("XAYMTTipImpressionLoggerAsyncController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ads\/growth\/aymt\/log\/impression\/",{tip_id:{type:"String"},channel_id:{type:"String"},aymt_data:{type:"String"},reason:{type:"String"},message:{type:"String"}});}),null);
__d("XAYMTTipTourCompleteLoggerAsyncController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ads\/growth\/aymt\/log\/tour_complete\/",{tip_id:{type:"String"},channel_id:{type:"String"},aymt_data:{type:"String"}});}),null);
__d('AYMTClientSideLogging',['AsyncRequest','AYMTTipEventType','AYMTTipSettings','XAYMTTipImpressionLoggerAsyncController','XAYMTMultiTipAsyncClickController','XAYMTMultiTipEligibilityLoggerAsyncController','XAYMTMultiTipCarouselNavigationLoggerAsyncController','XAYMTTipTourCompleteLoggerAsyncController'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={logEligibility:function i(j,k){var l=c('XAYMTMultiTipEligibilityLoggerAsyncController').getURIBuilder().setString('tip_id',j).setString('channel_id',k).getURI();new (c('AsyncRequest'))().setURI(l).setAllowCrossPageTransition(true).send();},logImpression:function i(j,k){var l=c('XAYMTTipImpressionLoggerAsyncController').getURIBuilder().setString('tip_id',j).setString('channel_id',k).getURI();new (c('AsyncRequest'))().setURI(l).setAllowCrossPageTransition(true).send();},logXout:function i(j,k){var l=arguments.length<=2||arguments[2]===undefined?true:arguments[2],m=c('XAYMTMultiTipAsyncClickController').getURIBuilder().setString('tip_id',j).setString('channel_id',k).setString('target',c('AYMTTipEventType').XOUT).setBool('handled_delete',l).getURI();new (c('AsyncRequest'))().setURI(m).setAllowCrossPageTransition(true).send();},logClick:function i(j,k){var l=c('XAYMTMultiTipAsyncClickController').getURIBuilder().setString('tip_id',j).setString('channel_id',k).setString('target',c('AYMTTipEventType').CLICK).getURI();new (c('AsyncRequest'))().setURI(l).setAllowCrossPageTransition(true).send();},logTourComplete:function i(j,k){var l=c('XAYMTTipTourCompleteLoggerAsyncController').getURIBuilder().setString('tip_id',j).setString('channel_id',k).getURI();new (c('AsyncRequest'))().setURI(l).setAllowCrossPageTransition(true).send();},logTourStepImpression:function i(j,k,l){var m=c('XAYMTTipImpressionLoggerAsyncController').getURIBuilder().setString('tip_id',j).setString('channel_id',k).setString('reason','tour_step').setString('message',l.toString()).getURI();new (c('AsyncRequest'))().setURI(m).setAllowCrossPageTransition(true).send();},logRenderingTypeImpression:function i(j,k,l){var m=c('XAYMTTipImpressionLoggerAsyncController').getURIBuilder().setString('tip_id',j).setString('channel_id',k).setString('reason','rendering_type').setString('message',l).getURI();new (c('AsyncRequest'))().setURI(m).setAllowCrossPageTransition(true).send();},logCarouselNavigation:function i(j,k,l){var m=c('XAYMTMultiTipCarouselNavigationLoggerAsyncController').getURIBuilder().setString('tip_id',j).setString('channel_id',k).setString('message',l).getURI();new (c('AsyncRequest'))().setURI(m).setAllowCrossPageTransition(true).send();},logClickNew:function i(j){var k=c('XAYMTMultiTipAsyncClickController').getURIBuilder().setString('tip_id',j[c('AYMTTipSettings').TIP_ID]).setString('channel_id',j[c('AYMTTipSettings').CHANNEL_ID]).setString('aymt_data',JSON.stringify(j)).setString('target',c('AYMTTipEventType').CLICK).getURI();new (c('AsyncRequest'))().setURI(k).setAllowCrossPageTransition(true).send();},logEligibilityNew:function i(j){var k=c('XAYMTMultiTipEligibilityLoggerAsyncController').getURIBuilder().setString('tip_id',j[c('AYMTTipSettings').TIP_ID]).setString('channel_id',j[c('AYMTTipSettings').CHANNEL_ID]).setString('aymt_data',JSON.stringify(j)).getURI();new (c('AsyncRequest'))().setURI(k).setAllowCrossPageTransition(true).send();},logImpressionNew:function i(j){var k=c('XAYMTTipImpressionLoggerAsyncController').getURIBuilder().setString('tip_id',j[c('AYMTTipSettings').TIP_ID]).setString('channel_id',j[c('AYMTTipSettings').CHANNEL_ID]).setString('aymt_data',JSON.stringify(j)).getURI();new (c('AsyncRequest'))().setURI(k).setAllowCrossPageTransition(true).send();},logXoutNew:function i(j){var k=arguments.length<=1||arguments[1]===undefined?true:arguments[1],l=c('XAYMTMultiTipAsyncClickController').getURIBuilder().setString('tip_id',j[c('AYMTTipSettings').TIP_ID]).setString('channel_id',j[c('AYMTTipSettings').CHANNEL_ID]).setString('aymt_data',JSON.stringify(j)).setString('target',c('AYMTTipEventType').XOUT).setBool('handled_delete',k).getURI();new (c('AsyncRequest'))().setURI(l).setAllowCrossPageTransition(true).send();},logTourCompleteNew:function i(j){var k=c('XAYMTTipTourCompleteLoggerAsyncController').getURIBuilder().setString('tip_id',j[c('AYMTTipSettings').TIP_ID]).setString('channel_id',j[c('AYMTTipSettings').CHANNEL_ID]).setString('aymt_data',JSON.stringify(j)).getURI();new (c('AsyncRequest'))().setURI(k).setAllowCrossPageTransition(true).send();},logTourStepImpressionNew:function i(j,k){var l=c('XAYMTTipImpressionLoggerAsyncController').getURIBuilder().setString('tip_id',j[c('AYMTTipSettings').TIP_ID]).setString('channel_id',j[c('AYMTTipSettings').CHANNEL_ID]).setString('aymt_data',JSON.stringify(j)).setString('reason','tour_step').setString('message',k.toString()).getURI();new (c('AsyncRequest'))().setURI(l).setAllowCrossPageTransition(true).send();},logRenderingTypeImpressionNew:function i(j,k){var l=c('XAYMTTipImpressionLoggerAsyncController').getURIBuilder().setString('tip_id',j[c('AYMTTipSettings').TIP_ID]).setString('channel_id',j[c('AYMTTipSettings').CHANNEL_ID]).setString('aymt_data',JSON.stringify(j)).setString('reason','rendering_type').setString('message',k).getURI();new (c('AsyncRequest'))().setURI(l).setAllowCrossPageTransition(true).send();},logCarouselNavigationNew:function i(j,k){var l=c('XAYMTMultiTipCarouselNavigationLoggerAsyncController').getURIBuilder().setString('tip_id',j[c('AYMTTipSettings').TIP_ID]).setString('channel_id',j[c('AYMTTipSettings').CHANNEL_ID]).setString('aymt_data',JSON.stringify(j)).setString('message',k).getURI();new (c('AsyncRequest'))().setURI(l).setAllowCrossPageTransition(true).send();}};f.exports=h;}),null);
__d('AdsGuidanceNewBadge.react',['cx','fbt','React'],(function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=function k(){return (c('React').createElement('div',{className:"_44xu"},i._("NEW")));};f.exports=j;}),null);
__d('MenuSeparator.react',['MenuSeparator'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){j.isReactLegacyFactory={};j.type=j;}var i=c('MenuSeparator');h(i);f.exports=i;}),null);
__d('MenuStaticItem.react',['MenuStaticItem'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){j.isReactLegacyFactory={};j.type=j;}var i=c('MenuStaticItem');h(i);f.exports=i;}),null);
__d('ScrollColumn.react',['cx','invariant','joinClasses','throttle','tidyEvent','Arbiter','Event','React','ReactDOM','Vector','ViewportBounds'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k='ScrollColumn/adjust',l=c('React').createClass({displayName:'ScrollColumn',propTypes:{topOffset:j.number,zIndex:j.number},getDefaultProps:function m(){return {topOffset:0,zIndex:0};},_scroll:0,_scrollDelta:0,getInitialState:function m(){return {fixed:null,fixedBottom:0,fixedTop:this.props.topOffset,top:0};},render:function m(){var n='auto',o=this.state.fixedLeft,p='auto';if(this.state.fixed==='bottom'){n=this.state.fixedBottom;}else if(this.state.fixed==='top'){p=this.state.fixedTop;}else{o='auto';p=this.state.top;}var q=c('joinClasses')(this.props.className,"_5ss7");return (c('React').createElement('div',{className:q,ref:'container'},c('React').createElement('div',{className:"_5ss8"+(this.state.fixed?' '+"fixed_always":''),ref:'column',style:{bottom:n,left:o,top:p,zIndex:this.props.zIndex}},this.props.children)));},componentDidMount:function m(){this.setState({adjustEventListener:c('tidyEvent')(c('Arbiter').subscribe(k,function(){this._adjust();}.bind(this))),resizeListener:c('tidyEvent')(c('Event').listen(window,'resize',c('throttle')(this._adjust))),scrollListener:c('tidyEvent')(c('Event').listen(window,'scroll',this._onScroll)),viewportBoundsUpdateListener:c('tidyEvent')(c('ViewportBounds').subscribe('change',this._adjust))});this._adjust();},componentDidUpdate:function m(n,o){if(o.fixed!==this.state.fixed)c('Arbiter').inform('reflow');},componentWillUnmount:function m(){this.state.adjustEventListener.unsubscribe();this.state.resizeListener.remove();this.state.scrollListener.remove();},_onScroll:function m(event){var n=c('Vector').getScrollPosition().y;this._scrollDelta=n-this._scroll;this._scroll=n;this._adjust();},_adjust:function m(){if(!this.isMounted())return;this._updateContainerHeight();this._updateColumnWidth();if(this._isContainerBelowViewportTop()){this._setNotFixed(0);return;}if(!this._isColumnLargerThanViewport()){this._setFixedToTop();return;}if(this._scrollDelta>0)if(this._isBottomOfColumnVisible()){this._setFixedToBottom();return;}if(this._scrollDelta<0)if(this._isTopOfColumnVisible()){this._setFixedToTop();return;}var n=this._getTopPositionForRef('column'),o=this._getTopPositionForRef('container'),p=n-o;this._setNotFixed(p);},_getTopPositionForRef:function m(n){var o=this.refs[n];!o?i(0):void 0;var p=c('Vector').getElementPosition(c('ReactDOM').findDOMNode(o),'viewport').y;if(this._scroll<0)p+=this._scroll;return p;},_getTopBoundWithOffset:function m(){return c('ViewportBounds').getTop()+this.props.topOffset;},_isContainerBelowViewportTop:function m(){var n=this._getTopPositionForRef('container');return n>=this._getTopBoundWithOffset();},_isColumnLargerThanViewport:function m(){var n=c('Vector').getViewportDimensions().y-c('ViewportBounds').getBottom()-this._getTopBoundWithOffset();return c('ReactDOM').findDOMNode(this.refs.column).offsetHeight>n;},_isBottomOfColumnVisible:function m(){var n=this._getTopPositionForRef('column'),o=c('Vector').getElementDimensions(c('ReactDOM').findDOMNode(this.refs.column),'viewport').y,p=n+o;return p<=c('Vector').getViewportDimensions().y-c('ViewportBounds').getBottom();},_isTopOfColumnVisible:function m(){var n=this._getTopPositionForRef('column');return n>=this._getTopBoundWithOffset();},_getFixedLeft:function m(){return (c('Vector').getElementPosition(c('ReactDOM').findDOMNode(this.refs.container),'viewport').x);},_setFixedToBottom:function m(){this.setState({fixed:'bottom',fixedBottom:c('ViewportBounds').getBottom(),fixedLeft:this._getFixedLeft()});},_setFixedToTop:function m(){this.setState({fixed:'top',fixedLeft:this._getFixedLeft(),fixedTop:this._getTopBoundWithOffset()});},_setNotFixed:function m(n){this.setState({fixed:false,top:n});},_updateContainerHeight:function m(){c('ReactDOM').findDOMNode(this.refs.container).style.height=c('ReactDOM').findDOMNode(this.refs.column).offsetHeight+this.state.top+'px';},_updateColumnWidth:function m(){c('ReactDOM').findDOMNode(this.refs.column).style.width=c('ReactDOM').findDOMNode(this.refs.container).offsetWidth+'px';}});l.EVENT_SHOULD_ADJUST=k;f.exports=l;}),null);
__d('StickyArea.react',['cx','React','ReactDOM','StickyArea','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.componentDidMount=function(){'use strict';this.$StickyArea1=new (c('StickyArea'))(c('ReactDOM').findDOMNode(this),true,this.props.offset||0,{boundToContainer:this.props.boundToContainer,stickTo:this.props.stickTo,notBoundZIndexBump:this.props.notBoundZIndexBump});};l.prototype.componentDidUpdate=function(m){'use strict';if(this.props.offset!==m.offset)this.$StickyArea1.setOffset(this.props.offset);c('StickyArea').reflow();};l.prototype.componentWillUnmount=function(){'use strict';this.$StickyArea1.destroy();this.$StickyArea1=null;};l.prototype.setOffset=function(m){'use strict';this.$StickyArea1.setOffset(m);};l.prototype.render=function(){'use strict';return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_k"),ref:'root'}),this.props.children));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={boundToContainer:k.bool,stickTo:k.oneOf([c('StickyArea').stickTo.SCROLL_PARENT,c('StickyArea').stickTo.WINDOW]).isRequired,notBoundZIndexBump:k.number};l.defaultProps={boundToContainer:true,stickTo:c('StickyArea').stickTo.WINDOW};f.exports=l;}),null);
__d('XUIMenuSeparator.react',['MenuSeparator.react'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('MenuSeparator.react');f.exports=h;}),null);
__d('XUIMenuStaticItem.react',['MenuStaticItem.react'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('MenuStaticItem.react');f.exports=h;}),null);
__d('BasicFBNux',['AsyncRequest','XBasicFBNuxDismissController','XBasicFBNuxViewController'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={subscribeHide:function i(j,k){j.subscribe('hide',function(){var l=c('XBasicFBNuxDismissController').getURIBuilder().setInt('nux_id',k).getURI();new (c('AsyncRequest'))().setURI(l).send();});},onView:function i(j){var k=c('XBasicFBNuxViewController').getURIBuilder().setInt('nux_id',j).getURI();new (c('AsyncRequest'))().setURI(k).send();},onDismiss:function i(j){var k=c('XBasicFBNuxDismissController').getURIBuilder().setInt('nux_id',j).getURI();new (c('AsyncRequest'))().setURI(k).send();}};f.exports=h;}),null);
__d('PagesCalloutStore',['FluxReduceStore','PagesCalloutActions','PagesCalloutDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FluxReduceStore'));i=h&&h.prototype;j.prototype.getInitialState=function(){return {channelID:null,eligible:{},pageID:null,showing:[],surface:'unknown'};};j.prototype.reduce=function(k,l){var m=babelHelpers['extends']({},k);switch(l.type){case c('PagesCalloutActions').INIT_SURFACE:return {channelID:l.data.channelID,eligible:{},pageID:l.data.pageID,showing:[],surface:l.data.surface};case c('PagesCalloutActions').REGISTER_CALLOUT:if(!l.data.tip_id||l.data.tip_id==='')break;m.eligible=babelHelpers['extends']({},k.eligible);m.eligible[l.data.tip_id]=babelHelpers['extends']({},l.data);break;case c('PagesCalloutActions').SHOW_CALLOUT:m.showing.push(l.data.tip_id);break;case c('PagesCalloutActions').DISMISS_CALLOUT:var n=m.showing.indexOf(l.data.tip_id);if(n!=null)m.showing.splice(n,1);break;}return m;};function j(){h.apply(this,arguments);}f.exports=new j(c('PagesCalloutDispatcher'));}),null);
__d("XPageCalloutAsyncController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pages\/callout\/",{pageid:{type:"Int",required:true},tip_ids:{type:"IntVector"}});}),null);
__d('PagesCalloutHelper',['AsyncRequest','AYMTClientSideLogging','BasicFBNux','PagesCalloutActions','PagesCalloutDispatcher','PagesCalloutStore','Run','XPageCalloutAsyncController'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={_initSurface:function i(j,k,l){c('PagesCalloutDispatcher').dispatch({data:{surface:l,pageID:j,channelID:k},type:c('PagesCalloutActions').INIT_SURFACE});},registerNux:function i(j,k,l){if(j.length===0)return;var m=function(){return this._showCalloutAndListenToClose(j,k,true);}.bind(this),n=l?{tip_id:j,showCallback:m,nux_id:l}:{tip_id:j,showCallback:m};c('PagesCalloutDispatcher').dispatch({type:c('PagesCalloutActions').REGISTER_CALLOUT,data:n});},registerCallout:function i(j,k,l){if(j.length===0)return;var m=function(){return this._showCalloutAndListenToClose(j,k,false);}.bind(this),n=l?{tip_id:j,showCallback:m,nux_id:l}:{tip_id:j,showCallback:m};c('PagesCalloutDispatcher').dispatch({type:c('PagesCalloutActions').REGISTER_CALLOUT,data:n});},showCalloutAfterLoading:function i(j,k,l){c('PagesCalloutDispatcher').explicitlyRegisterStore(c('PagesCalloutStore'));this._initSurface(j,k,l);c('Run').onAfterLoad(function(){return this._pickAndShowCallout();}.bind(this));},logXout:function i(j){c('AYMTClientSideLogging').logXout(j,c('PagesCalloutStore').getState().channelID);var k=c('PagesCalloutStore').getState().eligible[j];if(k&&k.nux_id)c('BasicFBNux').onDismiss(k.nux_id);},_pickAndShowCallout:function i(){var j=c('PagesCalloutStore').getState();if(j.showing.length>0)return;var k=c('XPageCalloutAsyncController').getURIBuilder().setInt('pageid',j.pageID).setIntVector('tip_ids',Object.keys(j.eligible)).getURI();new (c('AsyncRequest'))().setHandler(function(l){this._showCalloutAndLog(l.payload);}.bind(this)).setURI(k).send();},_showCalloutAndLog:function i(j){if(!j)return;var k=c('PagesCalloutStore').getState().eligible[j];if(!k)return;var l=k.showCallback;if(!l)return;var m=c('PagesCalloutStore').getState();if(m.showing.length>0)return;l.apply();c('AYMTClientSideLogging').logImpression(j,m.channelID);if(k.nux_id)c('BasicFBNux').onView(k.nux_id);},_showCalloutAndListenToClose:function i(j,k,l){if(!k.isShown()){k.show();c('PagesCalloutDispatcher').dispatch({type:c('PagesCalloutActions').SHOW_CALLOUT,data:{tip_id:j}});k.subscribe('hide',function(){c('PagesCalloutDispatcher').dispatch({type:c('PagesCalloutActions').DISMISS_CALLOUT,data:{tip_id:j}});this.logXout(j);}.bind(this));}}};f.exports=h;}),null);
__d('Clipboard',['UserAgent'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isSupported:function i(){return (document.queryCommandSupported instanceof Function&&document.queryCommandSupported('copy')&&!c('UserAgent').isBrowser('Firefox < 41')||c('UserAgent').isBrowser('Chrome >= 43'));},copy:function i(j,k){k=k||document.body;var l=true,m=document.createElement('textarea');k.appendChild(m);m.value=j;m.select();try{l=document.execCommand('copy');}catch(n){l=false;}k.removeChild(m);return l;}};f.exports=h;}),null);
__d('groupArray',[],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j){var k={};i.forEach(function(l,m){var n=j(l,m,i);if(!k[n])k[n]=[];k[n].push(l);});return k;}f.exports=h;}),null);
__d("XPagesManagerSettingsController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/{page_token}\/settings\/",{page_token:{type:"String",required:true},business_id:{type:"Int"},edited:{type:"String"},section:{type:"String"},tab:{type:"String"},change_admin_action:{type:"String"},change_admin_uid:{type:"Int"},tbid:{type:"Int"},fid:{type:"Int"},item_id:{type:"Int"},ref:{type:"String"},q:{type:"String"},promote_plugin_tab:{type:"Enum",enumType:1},active_pms_section:{type:"Enum",enumType:1},partner_id:{type:"Int"}});}),null);
__d("XVideoPermalinkController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/{vanity}\/videos\/{?set_token}\/{video_id}\/",{photo_id:{type:"Int"},set_token:{type:"String"},type:{type:"Enum",defaultValue:3,enumType:0},link_share:{type:"String"},subject:{type:"Int"},object_id:{type:"Int"},opaque_cursor:{type:"String"},legacy_user_id:{type:"Int"},legacy_photo_id:{type:"Int"},video_id:{type:"Int"},comment_id:{type:"Int"},notif_t:{type:"Bool",defaultValue:false},is_notification_preview:{type:"Bool",defaultValue:false},vanity:{type:"String"},reply_comment_id:{type:"Int"}});}),null);