(this.webpackJsonpcrypto_hunter=this.webpackJsonpcrypto_hunter||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){},182:function(e,t){},235:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(12),c=n.n(r),i=(n(132),n(293)),s=n(75),o=n(7),l=(n(133),n(116)),u=n(274),d=n(275),j=n(278),b=n(279),p=n(280),h=n(292),g=n(298),f=n(14),m=n(2),O=Object(a.createContext)(),x=function(e){var t=Object(a.useState)("INR"),n=Object(f.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)("\u20b9"),s=Object(f.a)(i,2),o=s[0],l=s[1];return Object(a.useEffect)((function(){"INR"===r?l("\u20b9"):"USD"===r&&l("$")}),[r]),Object(m.jsx)(O.Provider,{value:{currency:r,symbol:o,setCurrency:c},children:e.children})},y=function(){return Object(a.useContext)(O)},v=Object(i.a)((function(){return{title:{flex:1,color:"gold",fontFamily:"Montserrat",fontWeight:"bold",cursor:"pointer"}}})),k=function(){var e=v(),t=Object(o.f)(),n=y(),a=n.currency,r=n.setCurrency,c=Object(l.a)({palette:{primary:{main:"#fff"},type:"dark"}});return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(u.a,{theme:c,children:Object(m.jsx)(d.a,{color:"transparent",position:"static",children:Object(m.jsx)(j.a,{children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)(p.a,{onClick:function(){return t("/CryptoMarket")},className:e.title,variant:"h5",children:"Crypto Hunter"}),Object(m.jsxs)(h.a,{variant:"outlined",style:{width:100,height:40,marginRight:15},value:a,onChange:function(e){return r(e.target.value)},children:[Object(m.jsx)(g.a,{value:"USD",children:"USD"}),Object(m.jsx)(g.a,{value:"INR",children:"INR"})]})]})})})})})},C=n(11),w=n(25),_=n.n(w),S=n(31),D=n(32),F=n.n(D),N=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},M=function(e){return"https://api.coingecko.com/api/v3/coins/".concat(e)},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(n,"&days=").concat(t)},B=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")},T=n(283),P=n(286),E=n(284),R=(n(157),n(117)),H=[{label:"24 Hours",value:1},{label:"30 Days",value:30},{label:"3 Months",value:90},{label:"1 Year",value:365}],L=function(e){var t=e.childern;return Object(m.jsx)("span",{children:t})},W=function(e){var t=e.coin,n=Object(a.useState)(),r=Object(f.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(1),o=Object(f.a)(s,2),d=o[0],j=(o[1],y().currency),b=function(){var e=Object(S.a)(_.a.mark((function e(){var n,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get(I(t.id,d,j));case 2:n=e.sent,a=n.data,i(a.prices),console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){b()}),[j,d]);var p=Object(l.a)({palette:{primary:{main:"#fff"},type:"dark"}}),h=Object(T.a)((function(e){return{container:Object(C.a)({display:"flex",width:"75%",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:25},e.breakpoints.down("md"),{width:"100%",marginTop:0,padding:20,paddingTop:0})}}))();return Object(m.jsx)(u.a,{theme:p,children:Object(m.jsx)("div",{className:h.container,children:c?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(R.a,{data:{labels:c.map((function(e){var t=new Date(e[0]),n=t.getHours()>12?"".concat(t.getHours()-12,":").concat(t.getMinutes()," PM"):"".concat(t.getHours(),":").concat(t.getMinutes()," AM");return 1===d?n:t.toLocaleDateString()})),datasets:[{data:c.map((function(e){return e[1]})),label:"Price (Past ".concat(d," Days) in ").concat(j),borderColor:"#EEBC1D"}]},options:{elements:{point:{radius:1}}}}),Object(m.jsx)("div",{style:{display:"flex",marginTop:20,justifyContent:"space-around",width:"100%"},children:H.map((function(e){return Object(m.jsxs)(L,{children:[" ",e.label," "]})}))})]}):Object(m.jsx)(E.a,{style:{color:"gold"},size:250,thickness:1})})})},A=n(114),z=n.n(A),U=n(294),J=n(296),G=n(285),Y=n(236),$=n(287),q=n(288),K=n(289),Q=n(290),V=n(291);function X(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function Z(){var e,t=Object(a.useState)([]),n=Object(f.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),s=Object(f.a)(i,2),d=s[0],b=s[1],h=Object(a.useState)(""),g=Object(f.a)(h,2),O=g[0],x=g[1],v=Object(a.useState)(1),k=Object(f.a)(v,2),C=k[0],w=k[1],D=y(),M=D.currency,I=D.symbol,B=Object(T.a)({row:{backgroundColor:"#16171a",cursor:"pointer","&:hover":{backgroundColor:"#131111"},fontFamily:"Montserrat"},pagination:{"& .MuiPaginationItem-root":{color:"gold"}}})(),E=Object(o.f)(),R=Object(l.a)({palette:{primary:{main:"#fff"},type:"dark"}}),H=function(){var e=Object(S.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,F.a.get(N(M));case 3:t=e.sent,n=t.data,c(n),b(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){H()}),[M]);var L=function(){return r.filter((function(e){return e.name.toLowerCase().includes(O)||e.symbol.toLowerCase().includes(O)}))};return Object(m.jsx)(u.a,{theme:R,children:Object(m.jsxs)(j.a,{style:{textAlign:"center"},children:[Object(m.jsx)(p.a,{variant:"h4",style:{margin:18,fontFamily:"Montserrat"},children:"Cryptocurrency Prices by Market Cap"}),Object(m.jsx)(J.a,{label:"Search For a Crypto Currency..",variant:"outlined",style:{marginBottom:20,width:"100%"},onChange:function(e){return x(e.target.value)}}),Object(m.jsx)(G.a,{component:Y.a,children:d?Object(m.jsx)(P.a,{style:{backgroundColor:"gold"}}):Object(m.jsxs)($.a,{"aria-label":"simple table",children:[Object(m.jsx)(q.a,{style:{backgroundColor:"#EEBC1D"},children:Object(m.jsx)(K.a,{children:["Coin","Price","24h Change","Market Cap"].map((function(e){return Object(m.jsx)(Q.a,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},align:"Coin"===e?"":"right",children:e},e)}))})}),Object(m.jsx)(V.a,{children:L().slice(10*(C-1),10*(C-1)+10).map((function(e){var t=e.price_change_percentage_24h>0;return Object(m.jsxs)(K.a,{onClick:function(){return E("/coins/".concat(e.id))},className:B.row,children:[Object(m.jsxs)(Q.a,{component:"th",scope:"row",style:{display:"flex",gap:15},children:[Object(m.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"50",style:{marginBottom:10}}),Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(m.jsx)("span",{style:{textTransform:"uppercase",fontSize:22},children:e.symbol}),Object(m.jsx)("span",{style:{color:"darkgray"},children:e.name})]})]}),Object(m.jsxs)(Q.a,{align:"right",children:[I,X(e.current_price.toFixed(2))]}),Object(m.jsxs)(Q.a,{align:"right",style:{color:t>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[t&&"+",e.price_change_percentage_24h.toFixed(2),"%"]}),Object(m.jsxs)(Q.a,{align:"right",children:[I,X(e.market_cap.toString().slice(0,-6)),"M"]})]},e.name)}))})]})}),Object(m.jsx)(U.a,{style:{padding:20,width:"100%",display:"flex",justifyContent:"center"},classes:{ul:B.pagination},count:((null===(e=L())||void 0===e?void 0:e.length)/10).toFixed(0),onChange:function(e,t){w(t),window.scroll(0,450)}})]})})}var ee=function(){var e=Object(o.g)().id,t=Object(a.useState)(),n=Object(f.a)(t,2),r=n[0],c=n[1],i=y(),s=i.currency,l=i.symbol,u=function(){var t=Object(S.a)(_.a.mark((function t(){var n,a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.a.get(M(e));case 2:n=t.sent,a=n.data,c(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){u()}),[]);var d=Object(T.a)((function(e){var t,n;return{container:Object(C.a)({display:"flex"},e.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"}),sidebar:(t={width:"30%"},Object(C.a)(t,e.breakpoints.down("md"),{width:"100%"}),Object(C.a)(t,"display","flex"),Object(C.a)(t,"flexDirection","column"),Object(C.a)(t,"alignItems","center"),Object(C.a)(t,"marginTop",25),Object(C.a)(t,"borderRight","2px solid grey"),t),heading:{fontWeight:"bold",marginBottom:20,fontFamily:"Montserrat"},description:{fontFamily:"Montserrat",width:"100%",padding:25,paddingBottom:15,paddingTop:0,textAlign:"justify"},marketData:(n={width:"100%",alignSelf:"start",padding:25,paddingTop:10},Object(C.a)(n,e.breakpoints.down("md"),{display:"flex",justifyContent:"space-around"}),Object(C.a)(n,e.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"}),Object(C.a)(n,e.breakpoints.down("md"),{alignItems:"start"}),n)}}))();return r?Object(m.jsxs)("div",{className:d.container,children:[Object(m.jsxs)("div",{className:d.sidebar,children:[Object(m.jsx)("img",{src:null===r||void 0===r?void 0:r.image.large,alt:null===r||void 0===r?void 0:r.name,height:"200",style:{marginBottom:20}}),Object(m.jsx)(p.a,{variant:"h3",className:d.heading,children:null===r||void 0===r?void 0:r.name}),Object(m.jsx)(p.a,{variant:"subtitle1",className:d.description,children:z()(null===r||void 0===r?void 0:r.description.en.split(". ")[0])}),Object(m.jsxs)("div",{className:d.marketData,children:[Object(m.jsxs)("span",{style:{display:"flex"},children:[Object(m.jsx)(p.a,{variant:"h5",className:d.heading,children:"Rank :"}),"\xa0\xa0",Object(m.jsx)(p.a,{variant:"h5",children:null===r||void 0===r?void 0:r.market_cap_rank})]}),Object(m.jsxs)("span",{style:{display:"flex"},children:[Object(m.jsx)(p.a,{variant:"h5",className:d.heading,children:"Current Price :"}),"\xa0\xa0",Object(m.jsxs)(p.a,{variant:"h5",children:[l," ",X(null===r||void 0===r?void 0:r.market_data.current_price[s.toLowerCase()])]})]}),Object(m.jsxs)("span",{style:{display:"flex"},children:[Object(m.jsx)(p.a,{variant:"h5",className:d.heading,children:"Market Cap :"}),"\xa0\xa0",Object(m.jsxs)(p.a,{variant:"h5",children:[l," ",X(null===r||void 0===r?void 0:r.market_data.market_cap[s.toLowerCase()].toString().slice(0,-6))]})]})]})]}),Object(m.jsx)(W,{coin:r})]}):Object(m.jsx)(P.a,{style:{backgroundColor:"gold"}})},te=n(115),ne=n.n(te),ae=Object(T.a)((function(){return{carousel:{height:"50%",display:"flex",alignItems:"center"},carouselItem:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",textTransform:"uppercase",color:"white"}}}));var re=function(){var e=ae(),t=y(),n=t.currency,r=t.symbol,c=Object(a.useState)([]),i=Object(f.a)(c,2),o=i[0],l=i[1],u=function(){var e=Object(S.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get(B(n));case 2:t=e.sent,a=t.data,l(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){u()}),[n]);var d=o.map((function(t){var n,a=t.price_change_percentage_24h>=0;return Object(m.jsxs)(s.b,{className:e.carouselItem,to:"/coins/".concat(t.id),children:[Object(m.jsx)("img",{src:t.image,alt:t.name,height:"80",style:{marginBottom:10}}),Object(m.jsxs)("span",{children:[t.symbol,"\xa0",Object(m.jsxs)("span",{style:{color:a>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[a&&"+"," ",t.price_change_percentage_24h.toFixed(2)]})]}),Object(m.jsxs)("span",{style:{fontSize:22,fontWeight:500},children:[r," ",(n=t.current_price.toFixed(2),n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))]})]})}));return Object(m.jsx)("div",{className:e.carousel,children:Object(m.jsx)(ne.a,{mouseTracking:!0,infinite:!0,autoPlayInterval:1e3,animationDuration:1500,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:2},512:{items:4}},autoPlay:!0,items:d})})},ce=Object(T.a)((function(){return{banner:{backgroundImage:"url(./banner2.jpg)"},bannerContent:{height:400,display:"flex",flexDirection:"column",paddingTop:25,justifyContent:"space-arround"},tagline:{display:"flex",height:"40%",flexDirection:"column",justifyContent:"center",textAlign:"center"}}})),ie=function(){var e=ce();return Object(m.jsx)("div",{className:e.banner,children:Object(m.jsxs)(j.a,{className:e.bannerContent,children:[Object(m.jsxs)("div",{className:e.tagline,children:[Object(m.jsx)(p.a,{variant:"h2",style:{fontWeight:"bold",marginBottom:15,fontFamily:"Montserrat"},children:"Crypto Hunter"}),Object(m.jsx)(p.a,{variant:"subtitle2",style:{color:"darkgray",textTransform:"capitalize",fontFamily:"Montserrat"},children:"Get all the Info Regarding your favorite Crypto Currency"})]}),Object(m.jsx)(re,{})]})})},se=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(ie,{}),Object(m.jsx)(Z,{})]})};var oe=function(){var e=Object(i.a)((function(){return{App:{backgroundColor:"#14161a",color:"white",minHeight:"100vh"}}}))();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(s.a,{children:[Object(m.jsxs)("div",{className:e.App,children:[Object(m.jsx)(k,{}),Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/CryptoMarket",element:Object(m.jsx)(se,{})}),Object(m.jsx)(o.a,{exact:!0,path:"/coins/:id",element:Object(m.jsx)(ee,{})})]})]}),";"]})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,299)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(234);c.a.render(Object(m.jsx)(x,{children:Object(m.jsx)(oe,{})}),document.getElementById("root")),le()}},[[235,1,2]]]);
//# sourceMappingURL=main.3ad09a67.chunk.js.map