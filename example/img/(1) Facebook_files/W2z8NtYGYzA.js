if (self.CavalryLogger) { CavalryLogger.start_js(["kTQQN"]); }

__d('ChatAddToThreadButton.react',['cx','fbt','AutoFocusableLink.react','Keys','React','TrackingNodes','joinClasses'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').PureComponent);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.$ChatAddToThreadButton1=function(s){if(s.keyCode===c('Keys').RETURN||s.keyCode===c('Keys').SPACE)this.props.onClick&&this.props.onClick(s);}.bind(this),o;}m.prototype.render=function(){if(!this.props.shown)return null;var n=void 0;if(this.props.isFBAtWork){n=i._("Add more co-workers to chat");}else if(this.props.isMessengerRoom){n=i._("Invite more friends to chat");}else n=i._("Add more friends to chat");var o=c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.ADD_TO_THREAD),p=c('joinClasses')(this.props.className||"_3olv _3jyj","button");return c('React').createElement(c('AutoFocusableLink.react'),{autoFocus:this.props.autoFocus,'aria-label':n,className:p,'data-ft':o,'data-hover':'tooltip','data-tooltip-alignv':'top','data-tooltip-content':n,onClick:this.props.onClick,onKeyDown:this.$ChatAddToThreadButton1,role:'button'});};m.propTypes={autoFocus:l.bool,isFBAtWork:l.bool,onClick:l.func,shown:l.bool,isMessengerRoom:l.bool};f.exports=m;}),null);