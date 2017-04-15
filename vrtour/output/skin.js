// Garden Gnome Software - Skin
// Pano2VR 5.1/15722
// Filename: SBRNAA.ggsk
// Generated sam. avr. 15 15:52:32 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._screentint_image=document.createElement('div');
		this._screentint_image.ggId="screentint_image";
		this._screentint_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint_image.ggVisible=false;
		this._screentint_image.className='ggskin ggskin_rectangle ';
		this._screentint_image.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screentint_image.setAttribute('style',hs);
		this._screentint_image.style[domTransform + 'Origin']='50% 50%';
		me._screentint_image.ggIsActive=function() {
			return false;
		}
		me._screentint_image.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._screentint_image.onclick=function (e) {
			me._screentint_image.style[domTransition]='none';
			me._screentint_image.style.visibility='hidden';
			me._screentint_image.ggVisible=false;
			me._popup_image.ggText="";
			me._popup_image__img.src=me._popup_image.ggText;
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.style[domTransition]='none';
			me._popup_image.style.visibility='hidden';
			me._popup_image.ggVisible=false;
			me._image_popup_close.style[domTransition]='none';
			me._image_popup_close.style.visibility='hidden';
			me._image_popup_close.ggVisible=false;
		}
		this._screentint_image.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._screentint_image);
		this._image_popup=document.createElement('div');
		this._image_popup.ggId="image_popup";
		this._image_popup.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_popup.ggVisible=false;
		this._image_popup.className='ggskin ggskin_container ';
		this._image_popup.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		this._image_popup.setAttribute('style',hs);
		this._image_popup.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		me._image_popup.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_popup.ggUpdatePosition=function (useTransition) {
		}
		this._loading_image=document.createElement('div');
		this._loading_image__img=document.createElement('img');
		this._loading_image__img.className='ggskin ggskin_svg';
		this._loading_image__img.setAttribute('src',basePath + 'images/loading_image.svg');
		this._loading_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_image__img['ondragstart']=function() { return false; };
		this._loading_image.appendChild(this._loading_image__img);
		this._loading_image.ggId="loading_image";
		this._loading_image.ggLeft=-20;
		this._loading_image.ggTop=-20;
		this._loading_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_image.ggVisible=true;
		this._loading_image.className='ggskin ggskin_svg ';
		this._loading_image.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._loading_image.setAttribute('style',hs);
		this._loading_image.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._image_popup.appendChild(this._loading_image);
		this._popup_image=document.createElement('div');
		this._popup_image__img=document.createElement('img');
		this._popup_image__img.className='ggskin ggskin_external';
		this._popup_image__img.onload=function() {me._popup_image.ggUpdatePosition();}
		this._popup_image__img.setAttribute('src',basePath + '');
		this._popup_image__img['ondragstart']=function() { return false; };
		hs ='';
		this._popup_image.appendChild(this._popup_image__img);
		this._popup_image.ggId="popup_image";
		this._popup_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_image.ggVisible=false;
		this._popup_image.className='ggskin ggskin_external ';
		this._popup_image.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._popup_image.setAttribute('style',hs);
		this._popup_image.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._popup_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = me._popup_image__img.naturalWidth / me._popup_image__img.naturalHeight;
			if (me._popup_image__img.naturalWidth < parentWidth) parentWidth = me._popup_image__img.naturalWidth;
			if (me._popup_image__img.naturalHeight < parentHeight) parentHeight = me._popup_image__img.naturalHeight;
			var currentWidth = me._popup_image__img.naturalWidth;
			var currentHeight = me._popup_image__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;');
			};
		}
		this._image_popup.appendChild(this._popup_image);
		this.divSkin.appendChild(this._image_popup);
		this._image_popup_close=document.createElement('div');
		this._image_popup_close__img=document.createElement('img');
		this._image_popup_close__img.className='ggskin ggskin_svg';
		this._image_popup_close__img.setAttribute('src',basePath + 'images/image_popup_close.svg');
		this._image_popup_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_popup_close__img['ondragstart']=function() { return false; };
		this._image_popup_close.appendChild(this._image_popup_close__img);
		this._image_popup_close__imgo=document.createElement('img');
		this._image_popup_close__imgo.className='ggskin ggskin_svg';
		this._image_popup_close__imgo.setAttribute('src',basePath + 'images/image_popup_close__o.svg');
		this._image_popup_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._image_popup_close__imgo['ondragstart']=function() { return false; };
		this._image_popup_close.appendChild(this._image_popup_close__imgo);
		this._image_popup_close.ggId="image_popup_close";
		this._image_popup_close.ggLeft=-37;
		this._image_popup_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_popup_close.ggVisible=false;
		this._image_popup_close.className='ggskin ggskin_svg ';
		this._image_popup_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -37px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._image_popup_close.setAttribute('style',hs);
		this._image_popup_close.style[domTransform + 'Origin']='50% 50%';
		me._image_popup_close.ggIsActive=function() {
			return false;
		}
		me._image_popup_close.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_popup_close.onclick=function (e) {
			me._popup_image.ggText="";
			me._popup_image__img.src=me._popup_image.ggText;
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.style[domTransition]='none';
			me._popup_image.style.visibility='hidden';
			me._popup_image.ggVisible=false;
			me._screentint_image.style[domTransition]='none';
			me._screentint_image.style.visibility='hidden';
			me._screentint_image.ggVisible=false;
			me._image_popup_close.style[domTransition]='none';
			me._image_popup_close.style.visibility='hidden';
			me._image_popup_close.ggVisible=false;
		}
		this._image_popup_close.onmouseover=function (e) {
			me._image_popup_close__img.style.visibility='hidden';
			me._image_popup_close__imgo.style.visibility='inherit';
		}
		this._image_popup_close.onmouseout=function (e) {
			me._image_popup_close__img.style.visibility='inherit';
			me._image_popup_close__imgo.style.visibility='hidden';
		}
		this._image_popup_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_popup_close);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_image";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 200px;';
			hs+='position : absolute;';
			hs+='top : 200px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._popup_image.ggText=me.player.getBasePath()+""+me.hotspot.url;
				me.skin._popup_image__img.src=me.skin._popup_image.ggText;
				me.skin._popup_image.style[domTransition]='none';
				me.skin._popup_image.style.visibility=(Number(me.skin._popup_image.style.opacity)>0||!me.skin._popup_image.style.opacity)?'inherit':'hidden';
				me.skin._popup_image.ggVisible=true;
				me.skin._image_popup.style[domTransition]='none';
				me.skin._image_popup.style.visibility=(Number(me.skin._image_popup.style.opacity)>0||!me.skin._image_popup.style.opacity)?'inherit':'hidden';
				me.skin._image_popup.ggVisible=true;
				me.skin._screentint_image.style[domTransition]='none';
				me.skin._screentint_image.style.visibility=(Number(me.skin._screentint_image.style.opacity)>0||!me.skin._screentint_image.style.opacity)?'inherit':'hidden';
				me.skin._screentint_image.ggVisible=true;
				me.skin._image_popup_close.style[domTransition]='none';
				me.skin._image_popup_close.style.visibility=(Number(me.skin._image_popup_close.style.opacity)>0||!me.skin._image_popup_close.style.opacity)?'inherit':'hidden';
				me.skin._image_popup_close.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._ht_image_image=document.createElement('div');
			this._ht_image_image__img=document.createElement('img');
			this._ht_image_image__img.className='ggskin ggskin_svg';
			this._ht_image_image__img.setAttribute('src',basePath + 'images/ht_image_image.svg');
			this._ht_image_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_image_image__img['ondragstart']=function() { return false; };
			this._ht_image_image.appendChild(this._ht_image_image__img);
			this._ht_image_image__imgo=document.createElement('img');
			this._ht_image_image__imgo.className='ggskin ggskin_svg';
			this._ht_image_image__imgo.setAttribute('src',basePath + 'images/ht_image_image__o.svg');
			this._ht_image_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_image_image__imgo['ondragstart']=function() { return false; };
			this._ht_image_image.appendChild(this._ht_image_image__imgo);
			this._ht_image_image.ggId="ht_image_image";
			this._ht_image_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_image_image.ggVisible=true;
			this._ht_image_image.className='ggskin ggskin_svg ';
			this._ht_image_image.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._ht_image_image.setAttribute('style',hs);
			this._ht_image_image.style[domTransform + 'Origin']='50% 50%';
			me._ht_image_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_image_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_image_image.onmouseover=function (e) {
				me._ht_image_image__img.style.visibility='hidden';
				me._ht_image_image__imgo.style.visibility='inherit';
			}
			this._ht_image_image.onmouseout=function (e) {
				me._ht_image_image__img.style.visibility='inherit';
				me._ht_image_image__imgo.style.visibility='hidden';
			}
			this._ht_image_image.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_image_image);
			this._tt_ht_image=document.createElement('div');
			this._tt_ht_image__text=document.createElement('div');
			this._tt_ht_image.className='ggskin ggskin_textdiv';
			this._tt_ht_image.ggTextDiv=this._tt_ht_image__text;
			this._tt_ht_image.ggId="tt_ht_image";
			this._tt_ht_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_image.ggVisible=false;
			this._tt_ht_image.className='ggskin ggskin_text ';
			this._tt_ht_image.ggType='text';
			hs ='';
			hs+='z-index: 100;';
			hs+='height : 17px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 95px;';
			hs+='pointer-events:auto;';
			this._tt_ht_image.setAttribute('style',hs);
			this._tt_ht_image.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.666667);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 3px 6px 3px 6px;';
			hs+='overflow: hidden;';
			this._tt_ht_image__text.setAttribute('style',hs);
			this._tt_ht_image__text.innerHTML=me.hotspot.title;
			this._tt_ht_image.appendChild(this._tt_ht_image__text);
			me._tt_ht_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_image.ggCurrentLogicStateVisible = -1;
			this._tt_ht_image.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._tt_ht_image.style[domTransition]='';
					if (me._tt_ht_image.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_image.style.visibility=(Number(me._tt_ht_image.style.opacity)>0||!me._tt_ht_image.style.opacity)?'inherit':'hidden';
						me._tt_ht_image.ggVisible=true;
					}
					else {
						me._tt_ht_image.style.visibility="hidden";
						me._tt_ht_image.ggVisible=false;
					}
				}
			}
			this._tt_ht_image.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_ht_image);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_image.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};