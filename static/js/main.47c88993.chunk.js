(this["webpackJsonpunited-dreamers"]=this["webpackJsonpunited-dreamers"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/UnitedDreamers.bd27bed7.png"},36:function(e,t,a){e.exports=a(80)},41:function(e,t,a){},74:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=(a(41),a(9)),l=a(10),c=a(12),m=a(11),u=a(13),d=a(14),p=a(6),h=a(2),g=a(24),f=a.n(g),v=a(3),y=a(25),b=a.n(y),E=(a(81),a(32)),w=a(27),N=a.n(w),C=a(28),x=(a.n(C).a,{nameNoSpaces:/^(?=.{1,50}$)[a-z-]+(?:['_.\s][a-z-]+)*$/i,emailAddress:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,phoneNumber:/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,anyText:/^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/,website:/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/,socialUsername:/[a-z]\d?/gi,zipCode:/^\d{5}$|^\d{5}-\d{4}$/}),S={first:["firstName","lastName","emailAddress","phoneNumber","companyName"],second:["category","description","services"],third:["zipCode"]},k=["Micro Business (1 - 9 employees)","Small Business (10 - 49 employees)","Medium Sized Business (50 - 249 employees)","Large Business (250+ employees)","Startup (seeking funding)","Startup (funded)","Other"],O=["Accounting ","Construction","Consulting","Ecommerce","Education","Cosmetics","Entertainment","Food and Drinks","Health Care","Marketing","Photography","Restaurant","Real Estate","Technology","Other"],z=["firstName","lastName","emailAddress","phoneNumber","companyName","category","description","services","companyURL","companyFacebookURL","companyInstagramUsername","companyTwitterUsername","zipCode","city","state","country"],I=function(e){var t=e.handleChange,a=e.errors,n=e.userInput,o=e.handleKeyPress;return r.a.createElement("ul",{className:"form-style-1"},r.a.createElement("li",null,r.a.createElement("input",{name:"firstName",className:"field-divided",placeholder:"First Name",onKeyDown:o,onChange:function(e){return t({evt:e,regex:x.nameNoSpaces,warningMessage:"Use a real first name"})},value:n.firstName,formNoValidate:!0,autoFocus:!0}),r.a.createElement("br",null),r.a.createElement("b",null,a.firstName&&a.firstName.message)),r.a.createElement("li",null,r.a.createElement("input",{name:"lastName",className:"field-divided",placeholder:"Last Name",onKeyDown:o,onChange:function(e){return t({evt:e,regex:x.nameNoSpaces,warningMessage:"Use a real last name"})},value:n.lastName,formNoValidate:!0}),r.a.createElement("br",null),r.a.createElement("b",null,a.lastName&&a.lastName.message)),r.a.createElement("li",null,r.a.createElement("input",{name:"emailAddress",className:"field-divided",placeholder:"Email Address",onKeyDown:o,onChange:function(e){return t({evt:e,regex:x.emailAddress,warningMessage:"Invalid email address"})},value:n.emailAddress,formNoValidate:!0}),r.a.createElement("br",null),r.a.createElement("b",null,a.emailAddress&&a.emailAddress.message)),r.a.createElement("li",null,r.a.createElement("input",{name:"phoneNumber",className:"field-divided",placeholder:"Phone Number",onKeyDown:o,onChange:function(e){return t({evt:e,regex:x.phoneNumber,warningMessage:"Invalid phone number"})},value:n.phoneNumber,formNoValidate:!0}),r.a.createElement("br",null),r.a.createElement("b",null,a.phoneNumber&&a.phoneNumber.message)),r.a.createElement("li",null,r.a.createElement("input",{name:"companyName",className:"field-divided",placeholder:"Company Name",onKeyDown:o,onChange:function(e){return t({evt:e,regex:x.anyText,warningMessage:"Invalid company name"})},value:n.companyName,formNoValidate:!0}),r.a.createElement("br",null),r.a.createElement("b",null,a.companyName&&a.companyName.message)))},P=function(e){var t=e.userInput,a=e.handleChange,n=e.handleKeyPress,o=e.errors,s=e.zipCodeObj;return r.a.createElement("ul",{className:"form-style-1"},r.a.createElement("br",null),r.a.createElement("b",null,t.companyName),r.a.createElement("li",null,r.a.createElement("input",{name:"companyFacebookURL",className:"field-long",placeholder:"Company Facebook Link",handleKeyPress:n,onChange:function(e){return a({evt:e,regex:x.website,warningMessage:"Invalid Facebook Link"})},value:t.companyFacebookURL,formNoValidate:!0,autoFocus:!0}),r.a.createElement("br",null),r.a.createElement("b",null,o.companyFacebookURL&&o.companyFacebookURL.message)),r.a.createElement("li",null,r.a.createElement("input",{name:"companyInstagramUsername",className:"field-long",placeholder:"Company Instagram Username",handleKeyPress:n,onChange:function(e){return a({evt:e,regex:x.socialUsername,warningMessage:"Invalid Instagram username"})},value:t.companyInstagramUsername,formNoValidate:!0}),r.a.createElement("br",null),r.a.createElement("b",null,o.companyInstagramUsername&&o.companyInstagramUsername.message)),r.a.createElement("li",null,r.a.createElement("input",{name:"companyTwitterUsername",className:"field-long",placeholder:"Company Twitter Username",handleKeyPress:n,onChange:function(e){return a({evt:e,regex:x.socialUsername,warningMessage:"Invalid Twitter username"})},value:t.companyTwitterUsername,formNoValidate:!0}),r.a.createElement("br",null),r.a.createElement("b",null,o.companyTwitterUsername&&o.companyTwitterUsername.message)),r.a.createElement("li",null,r.a.createElement("input",{name:"zipCode",placeholder:"Zip Code",handleKeyPress:n,onChange:function(e){return a({evt:e,regex:x.zipCode,warningMessage:"Invalid Zip Code"})},value:t.zipCode,formNoValidate:!0}),r.a.createElement("br",null),o.zipCode?r.a.createElement("b",null,o.zipCode.message):void 0!==s&&"city"in s&&"state"in s?r.a.createElement("p",{className:"center-p"},s.city,", ",s.state," ",s.country," "):void 0!==s&&"zip"in s&&5===s.zip.length?r.a.createElement("b",null,"Invalid Zip Code"):void 0===s&&5===t.zipCode.length?r.a.createElement("b",null,"Invalid US Zip Code"):null))},j=function(e){var t=e.userInput,a=e.handleChange,n=e.errors,o=e.handleKeyPress;return r.a.createElement("ul",{className:"form-style-1"},r.a.createElement("br",null),r.a.createElement("b",null,t.companyName),r.a.createElement("li",null,r.a.createElement("p",{className:"field-divided"},"Category"),r.a.createElement("select",{name:"category",className:"field-divided",onChange:function(e){return a({evt:e})},value:t.category,autoFocus:!0},O.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"field-divided"},"Business Type"),r.a.createElement("select",{name:"companyType",className:"field-divided",onChange:function(e){return a({evt:e})},value:t.companyType},k.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("li",null,r.a.createElement("textarea",{name:"description",className:"field-long field-textarea",placeholder:"Brief Company Description",onChange:function(e){return a({evt:e})},value:t.description,formNoValidate:!0}),r.a.createElement("br",null),r.a.createElement("b",null,n.description&&n.description.message)),r.a.createElement("li",null,r.a.createElement("input",{name:"services",className:"field-long",onKeyDown:o,placeholder:"Your Company's Services (i.e. haircuts, real estate, software development, construction)",onChange:function(e){return a({evt:e})},value:t.services,formNoValidate:!0}),r.a.createElement("br",null),r.a.createElement("b",null,n.services&&n.services.message)),r.a.createElement("li",null,r.a.createElement("input",{name:"companyURL",className:"field-long",placeholder:"Company Website (www.companywebsite.com)",onKeyDown:o,onChange:function(e){return a({evt:e,regex:x.website,warningMessage:"Invalid URL"})},value:t.companyURL,formNoValidate:!0}),r.a.createElement("br",null),r.a.createElement("b",null,n.companyURL&&n.companyURL.message)))};a(69);function T(){var e=Object(h.a)(["\n  color: ",";\n\n"]);return T=function(){return e},e}var U=v.a.h4(T(),(function(e){return e.color})),A=function(e){e.zipCodeObj;var t=e.userInput;return r.a.createElement("div",null,r.a.createElement("p",null,"Thanks for submitting ",t.companyName,", ",t.firstName,"!"),r.a.createElement("p",null,"We're making a platform for DACA owned businesses and will reach out for more info if needed."),r.a.createElement("p",null,"Join our United Dreamers Facebook page as we grow our community!"),r.a.createElement("button",{style:{color:"#3b5998",fontSize:16},onClick:function(){window.open("https://www.facebook.com/groups/2524403604498738/about/")}},"Join Facebook Community"))};function F(){var e=Object(h.a)(["\n  font-size: 2em;\n  margin-bottom: 0.25em;\n  margin-left: 5vw;\n  margin-right: 5vw;\n"]);return F=function(){return e},e}var D=v.a.h1(F());var M=function(e){return r.a.createElement("img",{className:e.className,src:e.src,alt:e.alt,style:e.style})};function K(){var e=Object(h.a)(["\n  margin: 0em auto;\n\n  &:first-child {\n    margin-top: 0;\n  }\n"]);return K=function(){return e},e}var L=v.a.section(K());function R(){var e=Object(h.a)(["\n  text-align: center;\n  height: ","px;\n"]);return R=function(){return e},e}var W=Object(v.a)(L)(R(),(function(e){return e.height})),V=a(8),Z=a.n(V),B=a(21),$=function(){var e=Object(B.a)(Z.a.mark((function e(t){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(JSON.stringify(t)),e.next=4,fetch("https://united-dreamers-backend.herokuapp.com/createCompany",{mode:"cors",method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 4:return a=e.sent,e.abrupt("return",a.json());case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(B.a)(Z.a.mark((function e(t){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://blooming-beyond-72124.herokuapp.com/api/send_email",{mode:"cors",method:"POST",body:JSON.stringify({email:t}),headers:{"Content-Type":"application/json"}});case 3:return a=e.sent,e.abrupt("return",a.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),J=function(e){return new Promise((function(t){return setTimeout(t,e)}))};a(74);function H(){var e=Object(h.a)(["\n  padding: 0;\n  margin: 0;\n  padding-top: ",";\n  text-align: center;\n"]);return H=function(){return e},e}var q=v.a.div(H(),(function(e){return e.paddingTop})),Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).percentStatus="first",a.state={category:"Accounting",companyType:"Micro Business (1 - 9 employees)",loading:!1,openModal:!1,modalText:"",buttonText1:"",buttonText2:"Next",zipCode:"",errors:{},progressPercent:0},a.handleChange=function(e){var t,n=e.evt,r=e.regex,o=void 0===r?null:r,s=e.warningMessage,i=void 0===s?"":s,l=a.state.errors,c=n.target,m=c.name,u=c.value;o&&(u.match(o)?delete l[m]:l[m]={message:i}),a.setState((t={},Object(p.a)(t,m,u),Object(p.a)(t,"errors",l),t))},a.updateProgress=function(e){"forward"===e?66===a.state.progressPercent?a.setState({buttonText1:"",buttonText2:"",progressPercent:a.state.progressPercent+Math.round(5/15*100)}):a.setState({buttonText1:"Previous",buttonText2:"Next",progressPercent:a.state.progressPercent+Math.round(5/15*100)}):"reverse"===e&&(33===a.state.progressPercent?a.setState({buttonText1:"",buttonText2:"Next",progressPercent:a.state.progressPercent-Math.round(5/15*100)}):a.setState({buttonText1:"Previous",buttonText2:"Next",progressPercent:a.state.progressPercent-Math.round(5/15*100)}))},a.openModal=function(){},a.closeModal=function(){},a.validateFormInput=function(e,t){return void 0!==t&&e in t&&""!==t[e]&&!(e in a.state.errors)},a.validateNoError=function(e){return!(e in a.state.errors)},a.handleKeyPress=function(e){if("Enter"===e.key){e.preventDefault();var t=e.target.form,a=Array.prototype.indexOf.call(t,e.target);t.elements[a+1].focus()}},a.onFormSubmit=function(e,t){a.setState({loading:!0}),e.preventDefault(),"reverse"!==t||"first"===a.percentStatus?J(500).then((function(){a.setState({loading:!1});var e=a.state,n=a.state.errors;if(S[a.percentStatus].forEach((function(t){t in e?""===e[t]?n[t]={message:"Required"}:delete n[t]:n[t]={message:"Required"}})),a.setState({errors:n}),"third"===a.percentStatus&&a.validateNoError("companyFacebookURL")&&a.validateNoError("companyInstagramURL")&&a.validateNoError("companyTwitterURL")&&a.validateFormInput("zipCode",a.state)&&a.validateFormInput("state",a.zipCodeObj)&&a.validateFormInput("city",a.zipCodeObj))return a.updateProgress(t),console.log("over here"),z.forEach((function(t){t in e||(e[t]="")})),console.log(Object(d.a)({},e,{},a.zipCodeObj)),void $(Object(d.a)({},e,{},a.zipCodeObj)).then((function(t){t.success?console.log("Success"):(_(Object(d.a)({},e,{},a.zipCodeObj)),console.log("failure"))}));"second"===a.percentStatus&&a.validateFormInput("description",a.state)&&a.validateFormInput("services",a.state)&&a.validateFormInput("category",a.state)?a.updateProgress(t):"first"===a.percentStatus&&a.validateFormInput("firstName",a.state)&&a.validateFormInput("lastName",a.state)&&a.validateFormInput("emailAddress",a.state)&&a.validateNoError("phoneNumber")&&a.validateFormInput("companyName",a.state)&&a.updateProgress(t)})):a.updateProgress(t)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.width,n=t.height,o=t.screenState;this.zipCodeObj=f.a.lookup(this.state.zipCode);var s=this.state,i=s.buttonText1,l=s.buttonText2,c=s.progressPercent,m=function(e,t){var a=0,n="",r=1;return"wide"===e?(a=.5*t,n="1vh",r=.5):"full"===e?(a=.35*t,n="1vh",r=.6):"pacman"===e?(a=.5*t,n="1vh",r=.75):"half"===e?(a=.6*t,n="7.5vh",r=.9):"mobile"===e&&(a=.8*t,n="0vh",r=1.5),{imageMaxWidth:a,paddingTop:n,strokeWidth:r}}(o,a),u=m.imageMaxWidth,d=m.paddingTop,p=m.strokeWidth;return 0===c?this.percentStatus="first":33===c?this.percentStatus="second":66===c?this.percentStatus="third":99===c&&(this.percentStatus="done"),c&&(c+=1),r.a.createElement(q,{paddingTop:d},r.a.createElement(W,{height:n},r.a.createElement(D,null,"United Dreamers"),r.a.createElement(U,null,"Supporting each other as DACA recipients"),r.a.createElement(M,{className:"no-margin",src:N.a,alt:"Yeux_contact_image",style:{maxHeight:n,maxWidth:u,width:"auto",height:"auto"}}),r.a.createElement(E.a,{percent:c,strokeWidth:p,strokeColor:"#88D5E9",className:"progress-bar"}),r.a.createElement("br",null),"first"===this.percentStatus&&r.a.createElement("i",null,"Please fill out this form if you're a Dreamer and a business owner."),"second"===this.percentStatus&&r.a.createElement("i",null,"Please select the category and type of your company, give a brief description of your company, your services separated by a comma, and your company website if available."),"third"===this.percentStatus&&r.a.createElement("i",null,"Please provide your companies Facebook link (if available), Instagram or Twitter username (if available), and your company's zip code."),"done"===this.percentStatus&&r.a.createElement("i",null,"\xa1Muchas gracias!"),r.a.createElement("form",{noValidate:!0},"first"===this.percentStatus&&r.a.createElement(I,{userInput:this.state,handleChange:this.handleChange,errors:this.state.errors,handleKeyPress:this.handleKeyPress}),"second"===this.percentStatus&&r.a.createElement(j,{userInput:this.state,handleChange:this.handleChange,handleKeyPress:this.handleKeyPress,errors:this.state.errors}),"third"===this.percentStatus&&r.a.createElement(P,{zipCodeObj:this.zipCodeObj,userInput:this.state,handleChange:this.handleChange,handleKeyPress:this.handleKeyPress,errors:this.state.errors}),r.a.createElement("br",null),i&&r.a.createElement("button",{style:{marginRight:l?"5vw":0},onClick:function(t){return e.onFormSubmit(t,"reverse")}},i),l&&r.a.createElement("button",{style:{marginLeft:i?"5vw":0},onClick:function(t){return e.onFormSubmit(t,"forward")}},l)),"done"===this.percentStatus&&r.a.createElement(A,{zipCodeObj:this.zipCodeObj,userInput:this.state}),this.state.loading?r.a.createElement("div",null,r.a.createElement("div",{style:{position:"fixed",left:"0vw",top:"0vh",width:"100vw",height:"100vh",zIndex:9999,backgroundColor:"#FFFFFF",opacity:.5}}),r.a.createElement("div",{style:{position:"fixed",translate:"translate('-50%', '-50%')",left:"45vw",top:"15vh",zIndex:9999}},r.a.createElement(b.a,{type:"ThreeDots",color:"black",height:"10vh",width:"10vw"}))):null))}}]),t}(r.a.Component),G=function(e){return r.a.createElement(Y,e)},Q=a(31),X=(a(79),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={height:0,width:0},a.updateWindowDimensions=function(){a.setState({width:window.innerWidth,height:window.innerHeight})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this.state,t=e.height,a=e.width,n={height:t,width:a,screenState:function(e){return e>1500?"wide":e>1200?"full":e>900?"pacman":e>700?"half":"mobile"}(a)};return r.a.createElement("div",{className:"App"},r.a.createElement(Q.Helmet,null,r.a.createElement("title",null,"United Dreamers"),r.a.createElement("meta",{name:"description",content:"Our DACA community strongly supports each other - this form is intended for business owners who are also Dreamers so that our community can rally and support each other as DACA recipients."}),r.a.createElement("meta",{property:"og:title",content:"United Dreamers"}),r.a.createElement("meta",{property:"og:description",content:"Our DACA community strongly supports each other - this form is intended for business owners who are also Dreamers so that our community can rally and support each other as DACA recipients."}),r.a.createElement("meta",{property:"og:image",content:"./UnitedDreamersMeta.png"}),r.a.createElement("meta",{property:"og:url",content:"uniteddreamers.juliomaldonado.com"}),r.a.createElement("meta",{property:"og:site_name",content:"United Dreamers"}),r.a.createElement("meta",{property:"og:type",content:"website"})),r.a.createElement(G,n))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.47c88993.chunk.js.map