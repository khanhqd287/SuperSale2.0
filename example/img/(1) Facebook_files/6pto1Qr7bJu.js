if (self.CavalryLogger) { CavalryLogger.start_js(["UxKbA"]); }

__d("AlbumLoggerSourceEnum",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={TIMELINE_PHOTOS:"timeline_photos",SNOWFLAKE:"snowflake",COMPOSER:"composer",ALBUM_PERMALINK:"album_permalink",EDIT_ALBUM:"edit_album",DELETE_CONFIRMATION:"delete_confirmation",ALBUM_DRAFTS:"album_drafts",LEAVE_CONFIRMATION:"leave_confirmation"};}),null);
__d('LongLiveTimer',['fbt','LiveTimer'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('LiveTimer').CONSTS,j=24,k=30,l=12,m=babelHelpers['extends']({},c('LiveTimer'));m.parentRenderRelativeTime=m.renderRelativeTime;m.renderRelativeTime=function(n,o,p){var q=this.parentRenderRelativeTime(n,o,p);if(!q.text&&o){var r={text:'',next:-1},s,t=n-o,u=Math.floor(t/i.SEC_IN_MIN),v=Math.floor(u/i.MIN_IN_HOUR),w=Math.floor(v/j),x=Math.floor(w/k),y=Math.floor(x/l);if(v<j){if(p){r.text=h._("{number} hr",[h.param('number',v)]);}else r.text=h._({"*":"{number} hours ago"},[h.param('number',v,[0])]);r.next=i.SEC_IN_HOUR-t%i.SEC_IN_HOUR;}else if(w<k){if(p){r.text=h._({"*":"{number} d"},[h.param('number',w,[0])]);}else r.text=w==1?h._("about a day ago"):h._({"*":"{number} days ago"},[h.param('number',w,[0])]);s=j*i.SEC_IN_HOUR;r.next=s-t%s;}else if(x<l){if(p){r.text=h._({"*":"{number} mo"},[h.param('number',x,[0])]);}else r.text=x==1?h._("about a month ago"):h._({"*":"{number} months ago"},[h.param('number',x,[0])]);s=k*j*i.SEC_IN_HOUR;r.next=s-t%s;}else{if(p){r.text=h._({"*":"{number} yr"},[h.param('number',y,[0])]);}else r.text=y==1?h._("over a year ago"):h._({"*":"{number} years ago"},[h.param('number',y,[0])]);s=l*k*j*i.SEC_IN_HOUR;r.next=s-t%s;}return r;}return q;};f.exports=m;}),null);
__d('PagePhotosTabAddPhotosFromPageAlbumsView.react',['cx','MediaPageRoute','PagePhotosTabAlbumsView.react','React','RelayRootContainer','XUISpinner.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=8,l=8;i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;m.prototype.render=function(){var n=this.props.page,o=n.id,p=n.name,q=new (c('MediaPageRoute'))({albums_num_each_load_more:k,albums_num_first_load:l,hide_album:this.props.albumID,name:p,on_album_click:this.props.onAlbumClick,page_id:o,show_all_photos_grid:true,show_create_album_grid:false,show_header:false});return (c('React').createElement('div',{className:"_kbt"},c('React').createElement(c('RelayRootContainer'),{Component:c('PagePhotosTabAlbumsView.react'),renderLoading:function r(){return (c('React').createElement('div',{className:"_3d2x _fh4"},c('React').createElement(c('XUISpinner.react'),{size:'large'})));},route:q})));};function m(){i.apply(this,arguments);}f.exports=m;}),null);
__d('PagePhotosTabAlbumPhotosGrid.react',['PagePhotosTabAddPhotosGridItem.react','PagePhotosTabConfig','PagePhotosTabPhotoGridItem.react','PagePhotosTabPhotosView.react','React','Relay'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;function j(){var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.$PagePhotosTabAlbumPhotosGrid1=function(){this.props.relay.setVariables({count:this.props.relay.variables.count+c('PagePhotosTabConfig').NUM_EACH_LOAD_MORE});}.bind(this),l;}j.prototype.render=function(){var k=this.props.album,l=k.media,m=k.owner;return c('React').createElement(c('PagePhotosTabPhotosView.react'),babelHelpers['extends']({hasMore:this.props.relay.variables.count<l.count,onLoadMore:this.$PagePhotosTabAlbumPhotosGrid1,pageID:m.id,photos:l},this.props));};f.exports=c('Relay').createContainer(j,{initialVariables:{count:c('PagePhotosTabConfig').NUM_FIRST_LOAD,imageSize:c('PagePhotosTabConfig').PHOTO_SIZE},fragments:{album:function k(){return function(l,m){return {children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{calls:[{kind:'Call',metadata:{},name:'first',value:{kind:'CallVariable',callVariableName:'count'}}],children:[{fieldName:'count',kind:'Field',metadata:{},type:'Int'},{children:[{children:[].concat.apply([],[{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},c('Relay').QL.__frag(l),{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{isAbstract:true},name:'IdFragment',type:'Node'}]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,isAbstract:true,isRequisite:true},type:'Media'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'MediaSetMediaEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],fieldName:'media',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true,isFindable:true},type:'MediaSetMediaConnection'},{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'owner',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isAbstract:true},type:'Actor'},c('Relay').QL.__frag(m)]),id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'PagePhotosTabAlbumPhotosGrid_react_AlbumRelayQL',type:'Album'};}(c('PagePhotosTabPhotoGridItem.react').getFragment('photo'),c('PagePhotosTabAddPhotosGridItem.react').getFragment('album'));}}});}),null);
__d('PhotoAlbumRoute',['Relay'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('Relay').Route);i=h&&h.prototype;function j(){h.apply(this,arguments);}j.routeName='PhotoAlbumRoute';j.path='/{profile}/albums/{album}';j.paramDefinitions={profile:{type:'String',required:true},album:{type:'String',required:true}};j.queries={album:function k(l){return function(m){return {calls:[{kind:'Call',metadata:{type:'ID!'},name:'id',value:{kind:'CallVariable',callVariableName:'album'}}],children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},c('Relay').QL.__frag(m)]),fieldName:'node',kind:'Query',metadata:{isAbstract:true,identifyingArgName:'id',identifyingArgType:'ID!'},name:'PhotoAlbumRoute',type:'Node'};}(l.getFragment('album'));},viewer:function k(l){return function(m){return {children:[].concat.apply([],[c('Relay').QL.__frag(m)]),fieldName:'viewer',kind:'Query',metadata:{},name:'PhotoAlbumRoute',type:'Viewer'};}(l.getFragment('viewer'));}};f.exports=j;}),null);
__d('PagePhotosTabAddPhotosFromPagePhotosView.react',['cx','MediaPageRoute','PagePhotosTabAlbumPhotosGrid.react','PagePhotosTabAllPhotosGrid.react','PhotoAlbumRoute','React','RelayRootContainer','XUISpinner.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){var l=this.props.page,m=l.id,n=l.name,o=void 0,p=void 0;if(this.props.selectedAlbumID===null){o=c('PagePhotosTabAllPhotosGrid.react');p=new (c('MediaPageRoute'))({name:n,page_id:m});}else{o=c('PagePhotosTabAlbumPhotosGrid.react');p=new (c('PhotoAlbumRoute'))({album:this.props.selectedAlbumID,profile:m});}return (c('React').createElement('div',{className:"_2j1p"},c('React').createElement(c('RelayRootContainer'),{Component:o,renderFetched:function(q){return (c('React').createElement(o,babelHelpers['extends']({hideAlbum:this.props.hideAlbum,onPhotoClick:this.props.onPhotoClick,shouldHideInlineAction:true},q)));}.bind(this),renderLoading:function q(){return (c('React').createElement('div',{className:"_3d2x _fh4"},c('React').createElement(c('XUISpinner.react'),{size:'large'})));},route:p})));};function k(){i.apply(this,arguments);}f.exports=k;}),null);
__d("XPagesProfilePhotosAddPhotosFromPageController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pages\/photos\/album\/photos_from_page_submit\/",{album_id:{type:"FBID",required:true},page_id:{type:"FBID",required:true},photo_ids:{type:"FBIDVector",required:true}});}),null);
__d('PagePhotosTabAddPhotosFromPageDialog.react',['cx','fbt','AsyncRequest','AsyncResponse','LayerHideOnEscape','LoadingIndicator.react','PagePhotosTabAddPhotosFromPageAlbumsView.react','PagePhotosTabAddPhotosFromPagePhotosView.react','React','ReactDOM','XPagesProfilePhotosAddPhotosFromPageController','XUIButton.react','XUIDialog.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogTitle.react'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=850;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;function m(n){k.constructor.call(this,n);this.$PagePhotosTabAddPhotosFromPageDialog2=function(o){var p=this.state.selectedPhotos;if(p[o]){delete p[o];}else p[o]=o;this.setState({selectedPhotos:p});}.bind(this);this.$PagePhotosTabAddPhotosFromPageDialog3=function(o){this.setState({photosViewShown:true,selectedAlbumID:o});}.bind(this);this.state={isPublishingPhotos:false,photosViewShown:false,selectedAlbumID:undefined,selectedPhotos:{}};}m.prototype.componentDidMount=function(){this.refs.addPhotosFromPageDialog.layer.subscribe('hide',this.$PagePhotosTabAddPhotosFromPageDialog1.bind(this));};m.prototype.render=function(){var n=this.props.album,o=n.can_edit_caption,p=n.id,q=n.owner;if(!o)return null;var r=this.state.photosViewShown?c('React').createElement(c('PagePhotosTabAddPhotosFromPagePhotosView.react'),{hideAlbum:p,onPhotoClick:this.$PagePhotosTabAddPhotosFromPageDialog2,page:q,selectedAlbumID:this.state.selectedAlbumID}):c('React').createElement(c('PagePhotosTabAddPhotosFromPageAlbumsView.react'),{albumID:p,onAlbumClick:this.$PagePhotosTabAddPhotosFromPageDialog3,page:q});return c('React').createElement(c('XUIDialog.react'),{behaviors:{LayerHideOnEscape:c('LayerHideOnEscape')},ref:'addPhotosFromPageDialog',shown:true,width:l},c('React').createElement(c('XUIDialogTitle.react'),null,i._("Select Photos from Facebook Page")),c('React').createElement(c('XUIDialogBody.react'),{className:"_kbs"},r),this.$PagePhotosTabAddPhotosFromPageDialog4());};m.prototype.$PagePhotosTabAddPhotosFromPageDialog4=function(){if(this.state.photosViewShown){var n=!this.state.isPublishingPhotos?null:c('React').createElement(c('LoadingIndicator.react'),{className:"mrm",color:'white',size:'small'});return c('React').createElement(c('XUIDialogFooter.react'),null,n,c('React').createElement(c('XUIButton.react'),{disabled:this.state.isPublishingPhotos,label:i._("Back"),onClick:function(){this.setState({photosViewShown:false,selectedAlbumID:undefined,selectedPhotos:{}});}.bind(this)}),c('React').createElement(c('XUIButton.react'),{disabled:Object.keys(this.state.selectedPhotos).length===0||this.state.isPublishingPhotos,label:i._("Add to Album"),onClick:function(){this.setState({isPublishingPhotos:true});new (c('AsyncRequest'))().setErrorHandler(function(o){c('AsyncResponse').defaultErrorHandler(o);}).setURI(c('XPagesProfilePhotosAddPhotosFromPageController').getURIBuilder().setFBID('album_id',this.props.album.id).setFBID('page_id',this.props.album.owner.id).setFBIDVector('photo_ids',Object.keys(this.state.selectedPhotos)).getURI()).send();}.bind(this),use:'confirm'}));}else return c('React').createElement(c('XUIDialogFooter.react'),null,c('React').createElement(c('XUIButton.react'),{label:i._("Cancel"),onClick:function(){return this.$PagePhotosTabAddPhotosFromPageDialog1();}.bind(this)}));};m.prototype.$PagePhotosTabAddPhotosFromPageDialog1=function(){c('ReactDOM').unmountComponentAtNode(this.props.root);};f.exports=m;}),null);
__d('PagePhotosTabAlbumLinkConfirmationDialog.react',['cx','fbt','ix','Image.react','React','XUIDialog.react','XUIDialogBody.react','XUIDialogButton.react','XUIDialogFooter.react','XUIText.react'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l;if(c.__markCompiled)c.__markCompiled();var m=494;k=babelHelpers.inherits(n,c('React').Component);l=k&&k.prototype;n.prototype.render=function(){return (c('React').createElement(c('XUIDialog.react'),{onToggle:function(o){if(!o)this.props.onClose();}.bind(this),shown:true,width:m},c('React').createElement(c('XUIDialogBody.react'),{className:"_3d2x _3-95"},c('React').createElement(c('Image.react'),{className:"_3-97 _3-8x",src:j('/images/pages/linkshare/checkmark.png')}),c('React').createElement(c('XUIText.react'),{display:'block',size:'large'},i._("The album link was copied.")),c('React').createElement(c('XUIText.react'),{className:"_3-8y",display:'block',size:'medium'},i._("The album link was copied to your clipboard. Any person who clicks this link will be able to view the album."))),c('React').createElement(c('XUIDialogFooter.react'),null,c('React').createElement(c('XUIDialogButton.react'),{label:i._("Done"),onClick:this.props.onClose,use:'confirm'}))));};function n(){k.apply(this,arguments);}f.exports=n;}),null);
__d("XPhotosDeleteAlbumUIController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/photos\/delete\/album\/{album_id}\/",{album_id:{type:"Int",required:true},cancel_uri:{type:"String"},referrer:{type:"Enum",required:true,enumType:1},redirect_uri:{type:"String"},should_redirect:{type:"Bool",defaultValue:true},__asyncDialog:{type:"Int"}});}),null);
__d("XPhotosPhotoAlbumBulkDeletePhotosController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/photos\/album\/bulk_delete_photos\/",{album_fbid:{type:"FBID",required:true},page_fbid:{type:"FBID",required:true},photo_fbids:{type:"FBIDVector",required:true}});}),null);
__d("XPhotosPhotoAlbumSelectOrderTypeDialogController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/photos\/photo_albums\/select_order_type\/",{album_fbid:{type:"Int",required:true},__asyncDialog:{type:"Int"}});}),null);
__d('PagePhotosTabAlbumPhotosView.react',['ix','cx','fbt','ActionList.react','AlbumLoggerSourceEnum','AsyncRequest','AsyncResponse','Clipboard','CSS','DOM','FBConfirmDialog.react','Image.react','LeftRight.react','Link.react','LoadingIndicator.react','LongLiveTimer','PagePhotosTabAddPhotosFromPageDialog.react','PagePhotosTabAddPhotosGridItem.react','PagePhotosTabAlbumLinkConfirmationDialog.react','PagePhotosTabAlbumPhotosGrid.react','PagePhotosTabConfig','PagePhotosTabPhotoGridItem.react','PopoverMenu.react','ProfileTabConst','React','ReactDOM','Relay','Set','XPagesProfilePhotosController','XPhotosDeleteAlbumUIController','XPhotosPhotoAlbumBulkDeletePhotosController','XPhotosPhotoAlbumSelectOrderTypeDialogController','XUIButton.react','XUIButtonGroup.react','XUIGrayText.react','ReactXUIMenu','XUIPopoverButton.react','XUIText.react','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l;if(c.__markCompiled)c.__markCompiled();var m=c('ReactXUIMenu').Item;k=babelHelpers.inherits(n,c('React').Component);l=k&&k.prototype;function n(p){l.constructor.call(this,p);this.$PagePhotosTabAlbumPhotosView7=function(){if(this.state.selectedPhotos.size===0)return;this.setState({hasConfirmedBulkDeletePhotos:true});var q=this.props.album,r=q.id,s=q.owner;new (c('AsyncRequest'))().setURI(c('XPhotosPhotoAlbumBulkDeletePhotosController').getURIBuilder().setFBID('album_fbid',r).setFBID('page_fbid',s.id).setFBIDVector('photo_fbids',Array.from(this.state.selectedPhotos)).getURI()).send();}.bind(this);this.$PagePhotosTabAlbumPhotosView13=function(){this.props.relay.setVariables({count:this.props.relay.variables.count+c('PagePhotosTabConfig').NUM_EACH_LOAD_MORE});}.bind(this);this.state={albumLinkDialogShown:false,hasConfirmedBulkDeletePhotos:false,isBulkDeletingPhotos:false,isConfirmingBulkDeletePhotos:false,selectedPhotos:new (c('Set'))()};}n.prototype.render=function(){var p=this.props.album,q=p.can_edit_caption,r=p.can_upload,s=p.media,t=p.message,u=p.modified_time,v=p.name,w=t===null?null:c('React').createElement(c('XUIText.react'),{size:'medium'},t.text),x=c('LongLiveTimer').renderRelativeTimeToServer(u,false).text;return c('React').createElement('div',null,c('React').createElement('div',{className:"_3xgc"},c('React').createElement('div',{className:"_5xz-"},c('React').createElement(c('XUIText.react'),{className:"_3xgd"},v)),this.$PagePhotosTabAlbumPhotosView1(),this.$PagePhotosTabAlbumPhotosView2(),c('React').createElement(c('ActionList.react'),{className:"_3xge"+(t!==null?' '+"_2pip":'')},c('React').createElement(c('XUIGrayText.react'),null,j._({"*":{"Photo":"{photo count} Photo","Photos":"{photo count} Photos"}},[j.param('photo count',s.count,[0]),j['enum'](s.count===1?'Photo':'Photos',{Photo:'Photo',Photos:'Photos'})])),c('React').createElement(c('XUIGrayText.react'),null,j._("{updated}{time since update}",[j.param('updated','Updated '),j.param('time since update',x)]))),w),this.$PagePhotosTabAlbumPhotosView3(),this.$PagePhotosTabAlbumPhotosView4(),c('React').createElement(c('PagePhotosTabAlbumPhotosGrid.react'),babelHelpers['extends']({album:this.props.album,onPhotoClick:!this.state.isBulkDeletingPhotos?null:this.$PagePhotosTabAlbumPhotosView5.bind(this),reorderablePhotos:q,shouldHideInlineAction:this.state.isBulkDeletingPhotos,shouldShowAddPhotos:r,taggablePhotos:q},this.props)));};n.prototype.$PagePhotosTabAlbumPhotosView5=function(p){var q=this.state.selectedPhotos;if(q.has(p)){q['delete'](p);}else q.add(p);this.setState({selectedPhotos:q});};n.prototype.$PagePhotosTabAlbumPhotosView4=function(){if(!this.props.album.can_edit_caption||!this.state.isBulkDeletingPhotos)return null;return c('React').createElement('div',null,c('React').createElement(c('LeftRight.react'),{className:"uiBoxGray _3-96 _3-8r _3-8w _2ph-"},c('React').createElement('div',{className:"_3-8h"},c('React').createElement(c('XUIGrayText.react'),{shade:'medium',size:'small'},j._("Select photos for deletion"))),c('React').createElement('div',null,!this.state.hasConfirmedBulkDeletePhotos?null:c('React').createElement(c('LoadingIndicator.react'),{className:"_3-91",color:'white',size:'small'}),c('React').createElement(c('XUIButton.react'),{className:"_3-8_",disabled:this.state.selectedPhotos.size===0||this.state.isConfirmingBulkDeletePhotos,label:j._("Delete Photos"),onClick:function(){return this.setState({isConfirmingBulkDeletePhotos:true});}.bind(this),use:'confirm'}),c('React').createElement(c('XUIButton.react'),{disabled:this.state.isConfirmingBulkDeletePhotos,label:j._("Close"),onClick:function(){return this.$PagePhotosTabAlbumPhotosView6();}.bind(this)}))),c('React').createElement(c('FBConfirmDialog.react'),{content:j._("Are you sure you want to delete these photos?"),onCancel:function(){return this.setState({isConfirmingBulkDeletePhotos:false});}.bind(this),onConfirm:this.$PagePhotosTabAlbumPhotosView7,onToggle:function(p){return this.setState({isConfirmingBulkDeletePhotos:p});}.bind(this),shown:this.state.isConfirmingBulkDeletePhotos,title:j._("Delete Photos")}));};n.prototype.$PagePhotosTabAlbumPhotosView6=function(){this.setState({isBulkDeletingPhotos:false,selectedPhotos:new (c('Set'))()});};n.prototype.$PagePhotosTabAlbumPhotosView3=function(){if(!this.props.album.can_edit_caption||this.state.isBulkDeletingPhotos)return null;return c('React').createElement('div',{className:"_3-8h",id:'bulk_tag_selector_container'},c('React').createElement('box',{className:"hidden_elem uiBoxGray",id:'fbx_sets_bulk_tagger'},c('React').createElement('div',{className:"bulk_tagger_loading"})));};n.prototype.$PagePhotosTabAlbumPhotosView1=function(){var p=c('XPagesProfilePhotosController').getURIBuilder().setEnum('tab',c('ProfileTabConst').ALBUMS).setString('page_token',this.props.album.owner.id).getURI();return c('React').createElement('div',{className:"_3rgt _3-9c _3-8z"},c('React').createElement(c('XUIGrayText.react'),{className:"_1a2o _2pih",size:'large'},c('React').createElement(c('Link.react'),{className:"_3rgv",href:p},j._("Albums"))),c('React').createElement(c('Image.react'),{className:"_1a2o",src:h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/chevron-right_16_fig-dark-50.png")}),c('React').createElement('div',{className:"_3rgw _1a2o _2pir"},c('React').createElement(c('XUIText.react'),{size:'large'},this.props.album.name)));};n.prototype.$PagePhotosTabAlbumPhotosView2=function(){if(!this.props.album.can_edit_caption)return null;return c('React').createElement('div',{className:"_3rgx _3-92 _3-8z"},c('React').createElement(c('XUIButtonGroup.react'),null,this.$PagePhotosTabAlbumPhotosView8(),this.$PagePhotosTabAlbumPhotosView9(),this.$PagePhotosTabAlbumPhotosView10()));};n.prototype.$PagePhotosTabAlbumPhotosView8=function(){return c('React').createElement(c('XUIButton.react'),{href:this.props.relay.route.params.edit_album_uri,label:j._("Edit"),size:'large'});};n.prototype.$PagePhotosTabAlbumPhotosView9=function(){return c('React').createElement(c('XUIButton.react'),{disabled:this.props.album.media.count<1,id:'openBulkTaggerLink',label:j._("Tag"),onClick:function(){this.$PagePhotosTabAlbumPhotosView6();new (c('AsyncRequest'))().setData({set:this.props.relay.route.params.album_token,fbid:this.props.album.media.edges[0].node.__dataID__,useImageTag:true}).setErrorHandler(function(p){c('AsyncResponse').defaultErrorHandler(p);}).setURI('/ajax/photos/sets/tags_fetch.php').send();c('CSS').show('fbx_sets_bulk_tagger');}.bind(this),rel:'async',size:'large'});};n.prototype.$PagePhotosTabAlbumPhotosView10=function(){return c('React').createElement(c('PopoverMenu.react'),{alignh:'right',menu:this.$PagePhotosTabAlbumPhotosView11()},c('React').createElement(c('XUIPopoverButton.react'),{haschevron:false,image:c('React').createElement(c('Image.react'),{src:h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/3-dots-h_12_fig-black.png")}),size:'large'}),this.$PagePhotosTabAlbumPhotosView12());};n.prototype.$PagePhotosTabAlbumPhotosView11=function(){var p=c('XPhotosDeleteAlbumUIController').getURIBuilder().setEnum('referrer',c('AlbumLoggerSourceEnum').TIMELINE_PHOTOS).setInt('album_id',this.props.album.id).getURI(),q=c('XPhotosPhotoAlbumSelectOrderTypeDialogController').getURIBuilder().setInt('album_fbid',this.props.album.id).getURI();return c('React').createElement(c('ReactXUIMenu'),null,c('React').createElement(m,{onclick:function(){c('Clipboard').copy(this.props.relay.route.params.album_public_link);this.setState({albumLinkDialogShown:true});}.bind(this)},j._("Get Link")),c('React').createElement(m,{onclick:function(){new (c('AsyncRequest'))().setData({fbid:this.props.album.id}).setErrorHandler(function(r){c('AsyncResponse').defaultErrorHandler(r);}).setURI('/photos/album/download_process/dialog').send();}.bind(this)},j._("Download Album")),c('React').createElement(m,{ajaxify:p,rel:'async'},j._("Delete Album")),c('React').createElement(m,{onclick:function(){return this.setState({isBulkDeletingPhotos:true});}.bind(this)},j._("Delete Photos")),c('React').createElement(m,{ajaxify:q,rel:'async'},j._("Change Ordering")),c('React').createElement(m,{onclick:function(){var r=c('DOM').create('div');c('ReactDOM').render(c('React').createElement(c('PagePhotosTabAddPhotosFromPageDialog.react'),{album:this.props.album,root:r}),r);}.bind(this)},j._("Add Photos from Page")));};n.prototype.$PagePhotosTabAlbumPhotosView12=function(){if(!this.state.albumLinkDialogShown)return null;return c('React').createElement(c('PagePhotosTabAlbumLinkConfirmationDialog.react'),{onClose:function(){return this.setState({albumLinkDialogShown:false});}.bind(this)});};var o=c('Relay').createContainer(n,{initialVariables:{count:c('PagePhotosTabConfig').NUM_FIRST_LOAD,imageSize:c('PagePhotosTabConfig').PHOTO_SIZE},fragments:{album:function p(){return function(q,r,s){return {children:[].concat.apply([],[{fieldName:'can_edit_caption',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'can_upload',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{calls:[{kind:'Call',metadata:{},name:'first',value:{kind:'CallVariable',callVariableName:'count'}}],children:[{fieldName:'count',kind:'Field',metadata:{},type:'Int'},{children:[{children:[].concat.apply([],[{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},c('Relay').QL.__frag(q),{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{isAbstract:true},name:'IdFragment',type:'Node'}]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,isAbstract:true,isRequisite:true},type:'Media'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'MediaSetMediaEdge'},{children:[{fieldName:'has_next_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'has_previous_page',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'page_info',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],fieldName:'media',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true,isFindable:true},type:'MediaSetMediaConnection'},{children:[{fieldName:'text',kind:'Field',metadata:{},type:'String'}],fieldName:'message',kind:'Field',metadata:{canHaveSubselections:true},type:'TextWithEntities'},{fieldName:'modified_time',kind:'Field',metadata:{},type:'Time'},{fieldName:'name',kind:'Field',metadata:{},type:'String'},{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'name',kind:'Field',metadata:{},type:'String'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'owner',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isAbstract:true},type:'Actor'},c('Relay').QL.__frag(r),c('Relay').QL.__frag(s)]),id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'PagePhotosTabAlbumPhotosView_react_AlbumRelayQL',type:'Album'};}(c('PagePhotosTabPhotoGridItem.react').getFragment('photo'),c('PagePhotosTabAddPhotosGridItem.react').getFragment('album'),c('PagePhotosTabAlbumPhotosGrid.react').getFragment('album'));}}});o.moduleName='PagePhotosTabAlbumPhotosView.react';f.exports=o;}),null);