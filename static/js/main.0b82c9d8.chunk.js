(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),s=(a(48),a(49),a(3)),c=a(16),o=a(9),m=a(10),d=a(12),u=a(11),p=a(13),h=(n.Component,{root:{},title:{fontSize:"1.5rem",backgroundColor:"#100d2b",color:"#f48f50",position:"absolute",top:"55%",opacity:".9",left:"0px",width:"80%",margin:"auto",padding:"15px",fontFamily:"Judson sans-serif"},desc:{fontSize:"16px",height:"700px",margin:"auto",alignText:"justify",justifyContent:"center",fontFamily:"Judson sans-serif"},alt_header:{background:"url(assets/images/waitinng.jpg) center top/ 100% 70% no-repeat",minHeight:"70%"}}),g=function(e){var t=h.alt_header;if(null!=e.img){var a="url(".concat(e.img,")");t={background:"".concat(a," center top/ 100% 70% no-repeat"),minHeight:"70%"}}return l.a.createElement(s.Card,{shadow:5,style:{minWidth:"370px",maxWidth:"400px",minHeight:"500px",maxHeight:"400px",margin:"8px"}},l.a.createElement(s.Card,{style:{width:"100%",height:"100%"}},l.a.createElement(s.CardTitle,{expand:!0,style:t},l.a.createElement("p",{style:h.title},e.title)),l.a.createElement(s.CardText,{style:h.desc},e.des)),l.a.createElement(s.CardActions,{border:!0},l.a.createElement(s.Button,{colored:!0},"GitHub")))},E=function(e){return l.a.createElement("a",{href:e.link,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("div",null,l.a.createElement("i",{className:e.class,"aria-hidden":"true"})))},b={1:[["React Portfolio","This is my Portfolio is ReactJs using react-mdl library a\n nd deployed on Github",a(99)]],2:[["Android BloodBud App",'Project revamped the old system and introduced a hassle free way to ensure blood to potential donors\n    "Polished GUI that communicates through Firebase.\n  '],["Android Music App",'Let\u2019s user play their favorite YouTube platform as a Music Player even after a user navigate back or turn screen off.\n"Single handedly designed the GUI and carried out the Development.']],3:[["ReactNative/NodeJs Instagram Clone","Just like Instagram with features like Navigation, Post Feed, Like, Upload pictures, Manage Profile and Login/ Sign Up.\nSingle handedly developed using ReactNative and Turbo360 as Backend.\n"]],4:[["PyQt Desktop Messenger","Social Networking Messenger developed using python libraries and socket programming.\nSingle handedly designed the GUI using PyQt and established my knowledge in computer networking and administered the development\n"],["PyQt/Socketing Desktop App","Orchestrated and Developed a Desktop Application.\nSingly Handled many analysis that carries out stock operations and generates those statistics.\n"]],5:[["Rock-Paper-Scissor - Html/CSS/JS(ES)","It is simple yet elegant web game that lets user play against a computer.\nSingle handedly combined HTML with CSS to create an elegant design which is backed up by Javascript to dynamically handle events.\n"],[".NET ASP Library Manag. System -  MVC","Has Library Catalogue. Manager can lent book to user and the system also has checkout/check-in features.\nImplemented web services using .NET and SQL-Server for Business Logic.\n"]],6:[["Text Normalization - ML/ Scikit-learn","As a team-project we assessed and established knowledge in Text Normalization, then we trained the model to predict next 3 words."]]},f="I believe that my experience with technology, specifically in possession of versatile skillset, make me the best match for any position.",v="https://github.com/zaint10?tab=repositories",y="fa fa-github",k="https://twitter.com/Zaiyan121",N="fa fa-twitter",w="https://leetcode.com/zat938/",C="fa fa-code",S="https://www.linkedin.com/in/zain-tanveer-571bb717a/",j="fa fa-linkedin",x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={activetabs:0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"getNoOfCards",value:function(e,t){for(var a=[],n=0;n<e;n++){var r=t[n];a.push(l.a.createElement(g,{title:r[0],des:r[1],img:r[2]}))}return a}},{key:"toggleCategories",value:function(){var e=[],t=this.state.activetabs,a=Object.keys(b).length;console.log(a);var n=null,r=null;if(0===t)for(var i=1;i<=a;i++)r=(n=b[i]).length,e.push(this.getNoOfCards(r,n));else r=(n=b[t]).length,e.push(this.getNoOfCards(r,n));return l.a.createElement("div",{className:"projects-grid"},e)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"category-tabs"},l.a.createElement(s.Tabs,{id:"tabs",activetabs:this.state.activeTabs,onChange:function(t){return e.setState({activetabs:t})},ripple:!0},l.a.createElement(s.Tab,{id:"tabs"},"All"),l.a.createElement(s.Tab,{id:"tabs"},"ReactJs"),l.a.createElement(s.Tab,{id:"tabs"},"Android"),l.a.createElement(s.Tab,{id:"tabs"},"ReactNative"),l.a.createElement(s.Tab,{id:"tabs"},"Python"),l.a.createElement(s.Tab,{id:"tabs"},"Web"),l.a.createElement(s.Tab,{id:"tabs"},"Data Sceince")),l.a.createElement("section",null,this.toggleCategories()))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:T.root},l.a.createElement(s.Grid,{className:"landing-grid"},l.a.createElement(s.Cell,{noSpacing:!0,style:{marginBottom:"15px"},col:12},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",null,"Software Developer"),l.a.createElement("div",{className:"solid-line"},l.a.createElement("span",{class:"line"}),l.a.createElement("span",{class:"fa fa-bolt fa-3x","aria-hidden":"true"}),l.a.createElement("span",{class:"line"})),l.a.createElement("h2",null,"HTML/CSS | JS(ES6) | Python | Java | ReactJs | ReactNative | SQL | Mobile/Hybrid | Desktop"," "),l.a.createElement("div",{className:"social-links"},l.a.createElement(E,{link:S,class:j}),l.a.createElement(E,{link:v,class:y}),l.a.createElement(E,{link:w,class:C}),l.a.createElement(E,{link:k,class:N}))))),l.a.createElement(s.Grid,{className:"abtme-grid",noSpacing:!0},l.a.createElement(s.Cell,{class:"abtme",col:12},l.a.createElement(s.Cell,{col:12},l.a.createElement("h1",null,"ABOUT ME",l.a.createElement("span",null,l.a.createElement("strong",null," ."))),l.a.createElement("div",{className:"solid-line"},l.a.createElement("span",{class:"line"}),l.a.createElement("span",{class:"fa fa-bolt fa-3x","aria-hidden":"true"}),l.a.createElement("span",{class:"line"}))),l.a.createElement(s.Cell,{col:12},l.a.createElement("p",null,"Full Stack Software Engineer, in possession of versatile skillset & variety of projects\",\nand a Willingness to work with unfamiliar technologies. I'm Adept in Front-End using MongoDb, Express, React NodeJs. Fluent in \nMobile/Hybrid using Android/ ReactNative. Experienced in building CRUD applications, \nWeb games and Desktop Applications (Python, Java C#, WPF). \nKnow - how of ML, Data - science, Neural Networks & data wrangling. \nWell versed with algorithms, OOP, DSA, Design Patterns, Programming practice & SDLC.")))))}}]),t}(n.Component),T={root:{width:"100%",height:"auto",margin:"auto"}},L=O,P=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null)}}]),t}(n.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"ctct-root"},l.a.createElement(s.Grid,{shadow:4,noSpacing:!0,className:"ctct-grid"},l.a.createElement(s.Cell,{className:"ctct-cell",col:6},l.a.createElement("h2",null,"Z | T"),l.a.createElement("img",{src:"assets/images/me2.jpeg",alt:"Zain Tanveer"}),l.a.createElement("p",null,f+f)),l.a.createElement(s.Cell,{className:"ctct-cell",col:6},l.a.createElement("h2",null,"Contact Me"),l.a.createElement("hr",null),l.a.createElement("div",{className:"ctct"},l.a.createElement(s.List,null,l.a.createElement(s.ListItem,null,l.a.createElement(s.ListItemContent,{className:"ctct-items"},l.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}),"zat938@gmail.com")),l.a.createElement(s.ListItem,null,l.a.createElement(s.ListItemContent,{className:"ctct-items"},l.a.createElement("i",{className:"fa fa-phone","aria-hidden":"true"}),"+92 320 4419651")),l.a.createElement(s.ListItem,null,l.a.createElement(s.ListItemContent,{className:"ctct-items"},l.a.createElement("i",{className:"fa fa-skype","aria-hidden":"true"}),"zat405@outlook.com"))))),l.a.createElement("div",{className:"ctct-footer"})))}}]),t}(n.Component),A=function(){return l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/",component:L}),l.a.createElement(c.a,{path:"/resume.pdf",component:P}),l.a.createElement(c.a,{path:"/projects",component:x}),l.a.createElement(c.a,{path:"/contact",component:M}))};var I=a(15);var J=function(){return l.a.createElement("div",null,l.a.createElement(s.Layout,{className:"app-root",fixedHeader:!0},l.a.createElement(s.Header,{hideTop:!0,className:"header",title:l.a.createElement(I.b,{className:"header-title",to:"/"},"Zain Tanveer |")},l.a.createElement(s.Navigation,{className:"nav"},l.a.createElement(I.b,{to:"/resume.pdf"},l.a.createElement("p",null,"Resume")),l.a.createElement(I.b,{to:"/projects"},l.a.createElement("p",null,"Projects")),l.a.createElement(I.b,{to:"/contact"},l.a.createElement("p",null,"Contact")))),l.a.createElement(s.Content,{className:"app-root"},l.a.createElement(A,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(102),a(103);i.a.render(l.a.createElement(I.a,null,l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},43:function(e,t,a){e.exports=a(104)},48:function(e,t,a){},49:function(e,t,a){},99:function(e,t,a){e.exports=a.p+"static/media/des_portfolio.fb3fb94c.JPG"}},[[43,1,2]]]);
//# sourceMappingURL=main.0b82c9d8.chunk.js.map