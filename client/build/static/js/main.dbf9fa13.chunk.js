(this["webpackJsonpchattingstar-spa"]=this["webpackJsonpchattingstar-spa"]||[]).push([[0],{116:function(e,t,a){e.exports=a(226)},121:function(e,t,a){},122:function(e,t,a){},169:function(e,t){},190:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),s=a(28),i=a(27),l=(a(121),a(122),a(2)),u=a.n(l),m=a(5),p=a(4),f=a(23),d=a.n(f),v=a(105),h=a.n(v),g=null,b=function(){return null==g&&(g=h()("".concat("","/star-move"))),g},E={},y=function(){return E},j=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:if(!(a<t.length)){e.next=13;break}if(n=t[a].username,!E[n]){e.next=5;break}return e.abrupt("continue",10);case 5:return e.next=7,N(n);case 7:r=e.sent,c=r.data.user,E[n]=c;case 10:a++,e.next=1;break;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O={},w=[],x=function(e,t){return d.a.post("".concat("","/api/user/login"),{username:e,password:t})},k=function(e){return d.a.post("".concat("","/api/user/signup"),{obj:e})},S=function(e){return d.a.get("".concat("","/api/user/checkToken"),{headers:{token:e}})},N=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return a=e.sent,e.abrupt("return",d.a.post("".concat("","/api/user/getOneByName"),{username:t},{headers:{token:a}}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C="token_chattingstar",I=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem(C);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(m.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(t,a);case 3:return n=e.sent,r=n.data.token,e.next=7,localStorage.setItem(C,r);case 7:return e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}(),L=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(t);case 3:return a=e.sent,n=a.data.token,e.next=7,localStorage.setItem(C,n);case 7:return e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem(C);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,localStorage.getItem(C);case 3:if(!(t=e.sent)){e.next=10;break}return e.next=7,S(t);case 7:return a=e.sent,B=a.data.username,e.abrupt("return",!0);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),B=null,R=a(42),H=a.n(R),U=function(){var e=Object(n.useState)(),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(),s=Object(p.a)(o,2),l=s[0],f=s[1],d=Object(n.useState)(!1),v=Object(p.a)(d,2),h=v[0],g=v[1],b=Object(i.g)(),E=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,M(a,l);case 3:t=e.sent,g(!1),t&&b.replace({pathname:"/"});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(H.a,{active:h,spinner:!0,text:"Loading..."},r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{src:"/assets/img/logo512.png",className:"App-logo",alt:"logo"})),r.a.createElement("video",{className:"video-background",preload:"auto",autoPlay:!0,loop:!0,muted:!0},r.a.createElement("source",{src:"/assets/video/starfield.mp4",type:"video/mp4"}),"Your browser does not support HTML5 video."),r.a.createElement("div",{className:"content-bottom"},r.a.createElement("h1",null,"Chatting Star"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E()}},r.a.createElement("a",{className:"btn-transp-round",href:"/signup"},"+"),r.a.createElement("input",{type:"text",className:"input-transp",placeholder:"username",onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"password",className:"input-transp",placeholder:"password",onChange:function(e){return f(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn-transp"},"Log In"))))},F=a(33),D=a(34),G=a(37),W=a(38),Y=a(52),_=a.n(Y),P=a(29),z=a.n(P),X=function(e){Object(W.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(F.a)(this,a),(n=t.call(this,e)).arrCountry=_()().getData(),n}return Object(D.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{style:{border:"1px solid yellow",display:"inline-block"}},r.a.createElement(z.a,{code:this.props.value,height:"35px"})),r.a.createElement("br",null),r.a.createElement("select",{id:"country",name:"country",className:"input-transp w3-black",value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}},this.arrCountry.map((function(e,t){return r.a.createElement("option",{key:t,value:e.value},e.label)}))))}}]),a}(n.Component),V=a(114),J=a(107),K=a.n(J),Z=(a(189),a(108)),$=a.n(Z),q=(a(190),a(229)),Q=a(230),ee=function(e){var t=Object(n.useState)(),a=Object(p.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(null),i=Object(p.a)(s,2),l=i[0],f=i[1],d=Object(n.useState)({unit:"%",width:30,aspect:1}),v=Object(p.a)(d,2),h=v[0],g=v[1],b=Object(n.useState)(),E=Object(p.a)(b,2),y=E[0],j=E[1],O=Object(n.useState)(!1),w=Object(p.a)(O,2),x=w[0],k=w[1],S=Object(n.useCallback)((function(e){f(e)}),[]),N=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l&&t.width&&t.height&&C(l,t,"newFile.jpeg");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var t=Object(m.a)(u.a.mark((function t(a,n,r){var c,o,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=document.createElement("canvas"),o=a.naturalWidth/a.width,s=a.naturalHeight/a.height,c.width=n.width,c.height=n.height,c.getContext("2d").drawImage(a,n.x*o,n.y*s,n.width*o,n.height*s,0,0,n.width,n.height),t.abrupt("return",new Promise((function(t,a){c.toBlob((function(t){if(t){t.name=r,window.URL.revokeObjectURL(y);var n=window.URL.createObjectURL(t);j(n),e.handleChange(n)}else a(new Error("Canvas is empty"))}),"image/jpeg")})));case 8:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),I=function(){k(!1)};return r.a.createElement("div",null,r.a.createElement("div",{className:"avatar-wrapper",onClick:function(e){return $()(".file-upload").click()}},r.a.createElement("i",{className:"avatar-icon fa fa-user",style:{display:c?"none":"block"}}),r.a.createElement("img",{src:y,style:{width:"100%",height:"100%",zIndex:"10"},alt:"User"}),r.a.createElement("input",{className:"file-upload",type:"file",accept:"image/*",onChange:function(e){if(e.target.files&&e.target.files.length>0){var t=new FileReader;t.addEventListener("load",(function(){o(t.result),k(!0)})),t.readAsDataURL(e.target.files[0])}}})),r.a.createElement(q.a,{style:{color:"black"},show:x,onHide:I},r.a.createElement(q.a.Header,{closeButton:!0},r.a.createElement(q.a.Title,null,"Modal heading")),r.a.createElement(q.a.Body,{style:{maxHeight:"80vh",overflow:"auto"}},r.a.createElement(K.a,{src:c,onImageLoaded:S,crop:h,onChange:function(e){return g(e)},onComplete:N})),r.a.createElement(q.a.Footer,null,r.a.createElement(Q.a,{variant:"secondary",onClick:I},"Close"),r.a.createElement(Q.a,{variant:"primary",onClick:function(){k(!1),console.log(h)}},"Save Changes"))))},te=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),l=s[0],f=s[1],d=Object(n.useState)("US"),v=Object(p.a)(d,2),h=v[0],g=v[1],b=Object(n.useState)(0),E=Object(p.a)(b,2),y=E[0],j=E[1],O=Object(n.useState)(25),w=Object(p.a)(O,2),x=w[0],k=w[1],S=Object(n.useState)(""),N=Object(p.a)(S,2),C=N[0],I=N[1],M=Object(i.g)(),A=function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),T.current.getValue(),n={username:a,password:l,country:h,gender:y,age:x,imgUrl:C},e.next=5,L(n);case 5:e.sent&&M.replace({pathname:"/"});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=Object(n.useRef)();return r.a.createElement("form",{className:"container",onSubmit:A},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(ee,{handleChange:function(e){return I(e)}}),r.a.createElement("div",{className:"mt-3"},r.a.createElement("div",null,"Username"),r.a.createElement("input",{type:"text",className:"input-transp",placeholder:"username",onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"mt-3"},r.a.createElement("div",null,"Password"),r.a.createElement("input",{type:"password",className:"input-transp",placeholder:"password",onChange:function(e){return f(e.target.value)}})),r.a.createElement("div",{className:"mt-3"},r.a.createElement(X,{value:h,onChange:function(e){return g(e)}})),r.a.createElement("div",{className:"mt-3"},r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("div",null,"Age"),r.a.createElement("input",{type:"number",className:"input-transp-sm",placeholder:"age",value:x,onChange:function(e){return k(e.target.value)}})),r.a.createElement("div",{style:{display:"inline-block",marginLeft:"10px"}},r.a.createElement("div",null,"Gender"),r.a.createElement("select",{className:"input-transp-sm w3-black",value:y,onChange:function(e){return j(e.target.value)}},r.a.createElement("option",{value:0},"Male"),r.a.createElement("option",{value:1},"Female"),r.a.createElement("option",{value:2},"Other")))),r.a.createElement("div",{className:"mt-3"},r.a.createElement(V.a,{sitekey:"6LcyhucUAAAAAKyGU-pG8fvZPM3ic9Iev4uSZgbi",ref:T,theme:"dark"})),r.a.createElement("div",{className:"mt-5"},r.a.createElement("button",{type:"submit",className:"btn-transp"},"Sign up"))),r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"w3-center"},"HELP"))))},ae=a(54),ne=a(15),re=a(24),ce=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return t=e.sent,e.abrupt("return",d.a.get("".concat("","/api/star/map"),{headers:{token:t}}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return a=e.sent,e.abrupt("return",d.a.post("".concat("","/api/star/getXY"),{idSocket:t},{headers:{token:a}}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(i.g)(),t=function(){var t=Object(m.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:e.replace({pathname:"/login"});case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("strong",null,B),r.a.createElement("button",{className:"btn btn-warning ml-3",onClick:function(e){return t()}},r.a.createElement("i",{className:"fa fa-user mr-1"})," ",r.a.createElement("i",{className:"fa fa-sign-out"})))},ie=a(25);function le(){var e=Object(re.a)(["\n  border: 1px dotted grey;\n  &:hover {\n    background-color: yellow;\n    color: black;\n    cursor: pointer;\n  }\n"]);return le=function(){return e},e}var ue=ie.a.div(le()),me=["fa fa-mars","fa fa-venus","fa fa-genderless"],pe=function(e){var t=e.arrStar,a=e.filter,n=e.moveToStar;e.handleBlock;return r.a.createElement("div",{style:{paddingTop:"30px"}},t.map((function(e,t){if(e.username==B)return null;var c=y()[e.username];return-1!=a.country&&c.country!=a.country||-1!=a.age&&(c.age<a.age||c.age>a.age+9)||-1!=a.gender&&c.gender!=a.gender?null:r.a.createElement(ue,{key:t,onClick:function(t){return n(e)},style:{position:"relative"}},r.a.createElement(z.a,{code:c.country,height:"25px"}),r.a.createElement("span",{className:"ml-3"},c.username),r.a.createElement("span",{style:{position:"absolute",top:0,right:0}},r.a.createElement("span",null,c.age),r.a.createElement("span",{className:"ml-2"},r.a.createElement("i",{className:me[c.gender]}))))})))},fe=a(53),de=(a(191),a(113));function ve(){var e=Object(re.a)(["\n  &:hover {\n    cursor: pointer;\n  }\n"]);return ve=function(){return e},e}var he=ie.a.i(ve()),ge=function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),i=Object(p.a)(s,2),l=i[0],u=i[1],m=Object(n.useRef)(),f=function(t){t.preventDefault();var a=c.trim();a.length<1||(e.handleSubmit(a),o(""),u(!1))};return r.a.createElement("foreignObject",{x:"0",y:"200",width:"350",height:l?"530":"95"},r.a.createElement("form",{onSubmit:f},r.a.createElement("textarea",{className:"input-transp",style:{padding:"3px",fontSize:"14px",width:"100%"},placeholder:"Type here...",value:c,onKeyUp:function(e){13==e.keyCode&&f(e)},onChange:function(e){o(e.target.value)},autoFocus:!0}),r.a.createElement("div",{style:{position:"relative",minHeight:"28px"}},r.a.createElement(he,{onClick:function(e){u((function(e){return!e}))},className:"fa fa-smile-o h4 text-warning",style:{position:"absolute",bottom:0,left:0}}),r.a.createElement(he,{onClick:f,className:"fa fa-send-o h4 text-warning",style:{position:"absolute",bottom:0,right:0}})),r.a.createElement("span",Object(fe.a)({style:!0,ref:m},"style",{display:l?"block":"none"}),r.a.createElement(de.a,{onSelect:function(e){var t=e.native;o((function(e){return e+t}))},emojiTooltip:!0,title:"ChattingStar"}))))},be=a(112),Ee=a.n(be),ye=a(41),je=function(e,t){return{xx:parseInt(e)%Oe,yy:parseInt(t)%Oe}},Oe=2e3,we=function(e){var t=e.isMe,a=e.star,c=(e.me,Object(n.useState)()),o=Object(p.a)(c,2),s=o[0],i=o[1],l=Object(n.useState)(a.x),u=Object(p.a)(l,2),m=u[0],f=u[1],d=Object(n.useState)(a.y),v=Object(p.a)(d,2),h=v[0],g=v[1],E=Object(n.useState)(null),j=Object(p.a)(E,2),x=j[0],k=j[1],S=Object(n.useState)(!1),N=Object(p.a)(S,2),C=N[0],I=N[1],M=Object(n.useState)(!1),L=Object(p.a)(M,2),A=L[0],T=L[1],R=Object(n.useState)(!1),H=Object(p.a)(R,2),U=H[0],F=H[1],D=Object(n.useState)(a.x),G=Object(p.a)(D,2),W=G[0],Y=G[1],_=Object(n.useState)(a.y),P=Object(p.a)(_,2),X=P[0],V=P[1],J=Object(n.useState)(!1),K=Object(p.a)(J,2),Z=K[0],$=K[1];Object(n.useEffect)((function(){return function(){x&&clearInterval(x)}}),[]),Object(n.useEffect)((function(){if(s&&s==a.username?(x&&clearInterval(x),Math.abs(m-a.x)>=2e3||Math.abs(h-a.y)>=2e3?q(a.x,a.y):Q(a.x,a.y)):(i(a.username),f(a.x),g(a.y)),t){var e=document.getElementById("star-container"),n=e.scrollTop,r=n+e.clientHeight,c=e.scrollLeft,o=c+e.clientWidth,l=je(a.x,a.y),u=l.xx,p=l.yy;(u<=c||u>=o||p<=n||p>=r)&&e.scrollTo({left:u-170,top:p-170,behavior:"smooth"})}}),[a.x,a.y]),Object(n.useEffect)((function(){if(s&&s==a.username){var e=a.arrMsg.length;if(e<=0)return;var t=function(e){if(O.username==e)return O;var t=w.findIndex((function(t){return t.username==e}));return t>-1?w[t]:null}(a.arrMsg[e-1].sender);if(!t)return;var n=a,r=t.x,c=t.y,o=n.x,l=n.y;ee(r,c,o,l)}else i(a.username)}),[a.arrMsg]);var q=function(e,t){f(e),g(t)},Q=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,n=16,r=a/n;if(0!=r){var c=(e-m)/r,o=(t-h)/r,s=0,i=setInterval((function(){s<r?(f((function(e){return e+c})),g((function(e){return e+o})),s++):(f(e),g(t),clearInterval(i))}),n);k(i)}},ee=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:200,c=16,o=r/c;if(0!=o){var s=(a-e)/o,i=(n-t)/o,l=0;Y(e),V(t),$(!0),setTimeout((function(){return I(!0)}),200);var u=setInterval((function(){l<o?(Y((function(e){return e+s})),V((function(e){return e+i})),l++):(Y(a),V(n),$(!1),setTimeout((function(){return I(!1)}),100),clearInterval(u))}),c)}},te=je(m,h),ae=te.xx,ne=te.yy,re=y()[a.username],ce=a.idSocket,oe=Object(ye.css)({height:U?"140px":"90px",overflowX:"hidden"});return r.a.createElement("g",{transform:"translate(".concat(ae,",").concat(ne,")")},r.a.createElement("image",{className:"scale-down-center",href:t?"./assets/img/star1_thumb.png":"./assets/img/star0_thumb.png",x:"-15",y:"-15",height:C?"40":"30",width:C?"40":"30",onMouseMove:function(e){I(!0)},onMouseLeave:function(e){I(!1)}}),r.a.createElement("image",{style:{display:Z?"block":"none"},href:"./assets/img/star0_thumb.png",x:-ae+parseInt(W)%Oe-15,y:-ne+parseInt(X)%Oe-15,height:"20",width:"20"}),r.a.createElement("foreignObject",{id:ce,x:"0",y:"15",width:"150",height:"100",style:{overflowY:"auto"}},r.a.createElement("div",{style:{width:"150px",height:"30px"}},r.a.createElement(z.a,{id:ce,code:re.country,height:"25px"}),r.a.createElement("strong",{style:{marginLeft:"10px"}},re.username))),r.a.createElement("rect",{className:"scale-down-center",x:"0",y:"40",rx:"10",ry:"10",width:U?"350":"150",height:U?"150":"100",style:{fill:"transparent",stroke:t?"yellow":"white",strokeWidth:t?.5:.3,opacity:t?1:.5}}),r.a.createElement("foreignObject",{className:"scale-down-center",x:"0",y:"40",width:U?"350":"150",height:U?"150":"100"},r.a.createElement("div",{style:{padding:"5px",position:"relative"},onMouseMove:function(e){T(!0)},onMouseLeave:function(e){T(!1)},onClick:function(e){F(!U)}},!U&&A?r.a.createElement("i",{className:"fa fa-edit",style:{fontSize:"50px",position:"absolute",top:50,left:50,opacity:.8}}):null,r.a.createElement(Ee.a,{className:oe},a.arrMsg.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("span",{className:"w3-text-teal"},e.sender==B?"me":e.sender,":"," "),r.a.createElement("span",{className:"ml-2"},e.content),r.a.createElement("br",null))}))))),U?r.a.createElement(ge,{handleSubmit:function(e){var t=b(),n=a.username,r=a.idSocket,c=B;t.emit("chat-msg",{sender:c,receiver:n,receiverSocketId:r,content:e})}}):null)},xe=function(e){var t=e.busy,a=e.room,c=e.me,o=e.arrMate,s=e.handleClickSVG,i=e.handleClickStar;Object(n.useEffect)((function(){O=c}),[c]),Object(n.useEffect)((function(){w=o}),[o]);return t?r.a.createElement(H.a,{active:t,spinner:!0,text:"Loading..."}):r.a.createElement("div",{id:"star-container",style:{width:"100%",height:"100%",overflow:"auto"}},r.a.createElement("svg",{id:"svgRoom",width:2e3,height:2e3,onClick:function(e){if("svgRoom"==e.target.id){var t=document.getElementById("svgRoom").getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,c=function(e){var t=e.split("_");return{x:parseInt(t[0]),y:parseInt(t[1])}}(a);n=parseInt(2e3*c.x+n),r=parseInt(2e3*c.y+r),s(n,r)}else if(e.target.id){var o=e.target.id;i(o)}}},r.a.createElement(we,{star:c,isMe:!0,me:e.me}),o.map((function(t,a){return r.a.createElement(we,{key:a,star:t,isMe:!1,me:e.me})}))))},ke=function(e){for(var t=e.arrStar,a=[],n=0;n<10;n++)for(var c=0;c<10;c++)a.push(r.a.createElement("rect",{key:"".concat(n,"-").concat(c),x:100*c,y:100*n,width:100,height:100,style:{stroke:"yellow",strokeWidth:"1px"}}));return r.a.createElement("div",{style:{width:"100%",height:"100%",overflow:"scroll"}},r.a.createElement("svg",{id:"svgMap",width:1e3,height:1e3,onClick:function(t){var a=document.getElementById("svgMap").getBoundingClientRect(),n=t.clientX-a.left,r=t.clientY-a.top;n=parseInt(20*n),r=parseInt(20*r),e.handleClick(n,r)}},a,t.map((function(e,t){return r.a.createElement("image",{key:t,href:"./assets/img/star0_thumb.png",x:(e.x-150)/20,y:(e.y-150)/20,height:"20",width:"20"})}))))},Se=function(e){Object(W.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(F.a)(this,a),(n=t.call(this,e)).arrCountry=_()().getData(),n.arrCountry=[{value:-1,label:"All"}].concat(Object(ne.a)(n.arrCountry)),n}return Object(D.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("select",{className:"input-transp-sm w3-black",style:{width:"100%"},value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}},this.arrCountry.map((function(e,t){return r.a.createElement("option",{key:t,value:e.value},e.label)})))}}]),a}(n.Component);function Ne(){var e=Object(re.a)(["\n  border: 1px dotted grey;\n"]);return Ne=function(){return e},e}ie.a.div(Ne());var Ce=function(e){var t=e.filter,a=e.handleChangeFilter,c=Object(n.useState)(t.country),o=Object(p.a)(c,2),s=o[0],i=o[1],l=Object(n.useState)(t.gender),u=Object(p.a)(l,2),m=u[0],f=u[1],d=Object(n.useState)(t.age),v=Object(p.a)(d,2),h=v[0],g=v[1];return r.a.createElement("div",{style:{paddingTop:"20px"}},r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"col-sm-4"},"country"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement(Se,{onChange:function(e){return i(e)}}))),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"col-sm-4"},"age"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("select",{className:"input-transp-sm w3-black",style:{width:"100%"},onChange:function(e){return g(Number(e.target.value))}},r.a.createElement("option",{value:-1},"All"),r.a.createElement("option",{value:10},"10~19"),r.a.createElement("option",{value:20},"20~29"),r.a.createElement("option",{value:30},"30~39"),r.a.createElement("option",{value:40},"40~49"),r.a.createElement("option",{value:50},"50~59"),r.a.createElement("option",{value:60},"60~69"),r.a.createElement("option",{value:70},"70~79"),r.a.createElement("option",{value:80},"80~89")))),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"col-sm-4"},"gender"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("select",{className:"input-transp-sm w3-black",style:{width:"100%"},onChange:function(e){return f(Number(e.target.value))}},r.a.createElement("option",{value:-1},"All"),r.a.createElement("option",{value:0},"Male"),r.a.createElement("option",{value:1},"Female"),r.a.createElement("option",{value:2},"Other")))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("button",{className:"btn-transp-sm ",style:{width:"100%"},onClick:function(e){a({country:s,gender:m,age:h})}},r.a.createElement("i",{className:"fa fa-filter"}))))};function Ie(){var e=Object(re.a)(["\n  &:hover {\n    cursor: pointer;\n  }\n"]);return Ie=function(){return e},e}function Me(){var e=Object(re.a)(["\n  border: 1px dotted grey;\n"]);return Me=function(){return e},e}var Le=ie.a.div(Me()),Ae=ie.a.strong(Ie()),Te=function(){var e=Object(i.g)(),t=Object(n.useState)(!0),a=Object(p.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)([]),l=Object(p.a)(s,2),f=l[0],d=l[1],v=Object(n.useState)({country:-1,age:-1,gender:-1}),h=Object(p.a)(v,2),g=h[0],E=h[1],y=Object(n.useState)(),O=Object(p.a)(y,2),w=O[0],x=O[1],k=Object(n.useState)(),S=Object(p.a)(k,2),N=S[0],C=S[1],I=Object(n.useState)([]),M=Object(p.a)(I,2),L=M[0],T=M[1],R=Object(n.useState)(!1),H=Object(p.a)(R,2),U=H[0],F=H[1],D=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce();case 3:return t=e.sent,a=t.data.arrStar,e.next=7,j(a);case 7:d(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){var e=b();return G(e),e.emit("i-connected",{username:B}),o(!0),function(){b().emit("i-disconnected",{username:B})}}),[]);var G=function(t){t.on("star-connected",function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.star,console.log("star-connected"),a.username!=B){e.next=6;break}D(),e.next=9;break;case 6:return e.next=8,j([a]);case 8:d((function(e){return[].concat(Object(ne.a)(e),[a])}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.on("star-disconnected",function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.username,console.log("star-disconneted",a),d((function(e){var t=e.length,n=e.findIndex((function(e){return e.username==a}));return n>-1&&(e=[].concat(Object(ne.a)(e.slice(0,n)),Object(ne.a)(e.slice(n+1,t)))),e}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.on("you-are-already-in",function(){var t=Object(m.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.username,window.alert("Your account is already in using. Sorry."),t.next=4,A();case 4:e.replace({pathname:"/login"});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.on("you-joined-room",function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.room,n=t.me,r=t.arrMate,console.log("you-joined-room"),e.next=4,j([].concat(Object(ne.a)(r),[n]));case 4:x(a),C(n),T(r),o(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.on("mate-joined-room",function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.mate,console.log("mate-joined-room"),e.next=4,j([a]);case 4:T((function(e){return[].concat(Object(ne.a)(e),[a])}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.on("mate-moved",(function(e){var t=e.username,a=e.x,n=e.y;T((function(e){var r=e.length,c=e.findIndex((function(e){return e.username==t}));if(c>-1){var o=e[c];o.x=a,o.y=n,e=[].concat(Object(ne.a)(e.slice(0,c)),[o],Object(ne.a)(e.slice(c+1,r)))}return e}))})),t.on("mate-leaved-room",(function(e){var t=e.username;T((function(e){var a=e.length,n=e.findIndex((function(e){return e.username==t}));return n>-1&&(e=[].concat(Object(ne.a)(e.slice(0,n)),Object(ne.a)(e.slice(n+1,a)))),e}))}));t.on("chat-msg",(function(e){var t=e.sender,a=e.receiver,n=e.content;n.length>200&&(n=n.substr(0,200)),a==B?C((function(e){var a=[].concat(Object(ne.a)(e.arrMsg),[{sender:t,content:n}]);return a.length>10&&a.shift(),Object(ae.a)({},e,{arrMsg:a})})):T((function(e){var r=e.findIndex((function(e){return e.username==a}));if(r>-1){var c=e[r],o=[].concat(Object(ne.a)(c.arrMsg),[{sender:t,content:n}]);o.length>10&&o.shift();var s=Object(ae.a)({},c,{arrMsg:o}),i=e.length;return[].concat(Object(ne.a)(e.slice(0,r)),[s],Object(ne.a)(e.slice(r+1,i)))}return e}))}))},W=function(e,t){C((function(a){return Object(ae.a)({},a,{x:e,y:t})})),b().emit("i-moved",{username:B,x:e,y:t})},Y=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe(t.idSocket);case 3:a=e.sent,n=a.data,r=n.x,c=n.y,window.confirm("".concat(t.username," is at (").concat(r,", ").concat(c,") now. Move to there?"))&&W(r+160,c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),_=document.getElementById("star-container");return r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12",style:{minHeight:"40px"}},r.a.createElement("div",{className:"text-center"},r.a.createElement("span",{style:{fontSize:"25px"}},"Chatting Star"),r.a.createElement("div",{className:"w3-right"},r.a.createElement(se,null)))),r.a.createElement(Le,{className:"col-sm-4 col-md-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 col-sm-12"},r.a.createElement(Ce,{filter:g,handleChangeFilter:function(e){E(e)}})),r.a.createElement("div",{className:"col-6 col-sm-12"},r.a.createElement(pe,{filter:g,arrStar:f,moveToStar:Y})))),r.a.createElement(Le,{className:"col-sm-8 col-md-8",style:{height:"80vmin",position:"relative",paddingTop:"20px"}},U?r.a.createElement(ke,{arrStar:f,handleClick:function(e,t){window.confirm("Move to (".concat(e,", ").concat(t,")?"))&&(F(!1),W(e,t))}}):r.a.createElement(xe,{busy:c,room:w,me:N,arrMate:L,handleClickSVG:function(e,t){W(e,t)},handleClickStar:function(e){e!=N.idSocket&&console.log("star clicked")}}),r.a.createElement("div",{style:{position:"absolute",top:"0px",left:"10px"}},N?r.a.createElement(Ae,{className:"w3-text-yellow ml-5",onClick:function(e){_&&_.scrollTo({left:N.x%2e3-170,top:N.y%2e3-170,behavior:"smooth"})}},"ScrollToMe"):null),r.a.createElement("div",{style:{position:"absolute",top:"0px",left:"150px"}},w?r.a.createElement(Ae,{className:"w3-text-yellow mr-5",onClick:function(e){U||D(),F(!U)}},U?"HideMap":"ShowMap"):null)),r.a.createElement(Le,{className:"col-sm-12 col-md-2",style:{minHeight:"100px"}},"Google Ads"),r.a.createElement(Le,{className:"col-12",style:{minHeight:"100px"}},"Google Ads")))},Be=function(e){Object(W.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(F.a)(this,a),(n=t.call(this,e)).state={isAuthed:!1,isLoading:!0},n}return Object(D.a)(a,[{key:"componentDidMount",value:function(){this.check()}},{key:"check",value:function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,T();case 3:e.sent?this.setState({isAuthed:!0,isLoading:!1}):this.setState({isAuthed:!1,isLoading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.isLoading?r.a.createElement("div",{className:"w3-black"},"loading"):r.a.createElement(i.b,Object.assign({},this.props.rest,{render:function(t){t.location;return e.state.isAuthed?e.props.children:r.a.createElement(i.a,{to:{pathname:"/login"}})}}))}}]),a}(r.a.Component);var Re=function(){return r.a.createElement(s.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/login"},r.a.createElement(U,null)),r.a.createElement(i.b,{path:"/signup"},r.a.createElement(te,null)),r.a.createElement(Be,{path:"/"},r.a.createElement(Te,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[116,1,2]]]);
//# sourceMappingURL=main.dbf9fa13.chunk.js.map