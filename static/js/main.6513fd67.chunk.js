(this.webpackJsonpcovidstats=this.webpackJsonpcovidstats||[]).push([[0],{55:function(t,e,a){},57:function(t){t.exports=JSON.parse('["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]')},66:function(t,e,a){},67:function(t,e,a){},98:function(t,e,a){"use strict";a.r(e);var s=a(1),n=a(0),o=a.n(n),r=a(22),i=a.n(r),c=(a(66),a(67),a(68),a(8)),l=a(9),d=a(11),h=a(10),j=a(28),b=a(12),u=a(2),p=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(u.d,{})}}]),a}(n.Component),O=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(u.e,{})}}]),a}(n.Component),x=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(u.f,{})}}]),a}(n.Component),g=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(u.g,{})}}]),a}(n.Component),m=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(u.h,{})}}]),a}(n.Component),y=a(15),f=a.n(y),v=a(6),C=a.n(v),w=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=[{value:"National",to:"/",useExact:!0,LinkComponent:Object(b.f)(j.b)},{value:"State",to:"/state",useExact:!0,LinkComponent:Object(b.f)(j.b)},{value:"About",to:"/about",useExact:!0,LinkComponent:Object(b.f)(j.b)}];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(u.m.Header,{imageURL:"https://i.imgur.com/T1s5N9i.png",href:"/",alt:"COVID Stats",navItems:Object(s.jsx)(u.b,{href:"https://github.com/max-richter/covidstats",target:"_blank",outline:!0,RootComponent:"a",color:"info",children:"Source Code"})}),Object(s.jsx)(u.m.Nav,{itemsObjects:t,collapse:!1})]})}}]),a}(n.Component),S=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)("footer",{id:"footer",children:Object(s.jsx)(u.m.Footer,{className:"customFooter",note:"A website containing national and statewide COVID-19 statistics.",copyright:Object(s.jsxs)(s.Fragment,{children:["Copyright \xa9 2020 -",Object(s.jsx)("a",{href:"https://github.com/max-richter",target:"_blank",rel:"noreferrer",children:" Max"})]}),nav:Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(u.i.Col,{auto:!0,children:Object(s.jsx)(u.b,{href:"https://github.com/max-richter/covidstats",target:"_blank",outline:!0,size:"sm",color:"info",RootComponent:"a",children:"Check out the Project!"})})})})})}}]),a}(n.Component),D=a(29),L=a.n(D),I=(a(55),"https://api.covidtracking.com");C()().locale("en");var T=C()().subtract(2,"days").format("YYYYMMDD").toLocaleString(),N=C()().subtract(3,"days").format("YYYYMMDD").toLocaleString(),k=C()().subtract(4,"days").format("YYYYMMDD").toLocaleString(),Y=C()().subtract(5,"days").format("YYYYMMDD").toLocaleString(),H=C()().subtract(6,"days").format("YYYYMMDD").toLocaleString(),M=C()().subtract(7,"days").format("YYYYMMDD").toLocaleString(),P=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).state={newPos:0,newNeg:0,newDeaths:0,totalDeaths:0,hospitalized:0,recovered:0,newHosp:0,currICU:0,onVentilator:0,trendTwo:0,trendThree:0,trendFour:0,trendFive:0,trendSix:0,trendSeven:0,yestPos:0,yestNeg:0,yestDeaths:0,yestHosp:0,yestTotalDeaths:0,loadingCount:0,pendConf:0,yestConf:0},t}return Object(l.a)(a,[{key:"getData",value:function(){var t,e=this;f.a.get(I+"/v1/us/current.json").then((function(a){t=a.data,e.setState({newPos:t[0].positiveIncrease,newNeg:t[0].negativeIncrease,newDeaths:t[0].deathIncrease,totalDeaths:t[0].death,hospitalized:t[0].hospitalizedCurrently,newHosp:t[0].hospitalizedIncrease,currICU:t[0].inIcuCurrently,onVentilator:t[0].onVentilatorCurrently,pendConf:t[0].pending})})),f.a.get(I+"/v1/us/"+T+".json").then((function(t){e.setState({trendTwo:t.data.positiveIncrease,yestPos:t.data.positiveIncrease,yestNeg:t.data.negativeIncrease,yestDeaths:t.data.deathIncrease,yestHosp:t.data.hospitalizedIncrease,yestTotalDeaths:t.data.death,yestConf:t.data.pending})})),f.a.get(I+"/v1/us/"+N+".json").then((function(t){e.setState({trendThree:t.data.positiveIncrease})})),f.a.get(I+"/v1/us/"+k+".json").then((function(t){e.setState({trendFour:t.data.positiveIncrease})})),f.a.get(I+"/v1/us/"+Y+".json").then((function(t){e.setState({trendFive:t.data.positiveIncrease})})),f.a.get(I+"/v1/us/"+H+".json").then((function(t){e.setState({trendSix:t.data.positiveIncrease})})),f.a.get(I+"/v1/us/"+M+".json").then((function(t){e.setState({trendSeven:t.data.positiveIncrease})}))}},{key:"shouldComponentUpdate",value:function(t,e){return this.state.loadingCount!==e.value}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){function t(t,e){var a=Math.round(t/e*100);return a>100?a=100-a:a-=100,a}return Object(s.jsxs)("div",{children:[Object(s.jsx)(w,{}),Object(s.jsx)(u.k.Content,{title:"National Data",children:Object(s.jsxs)(u.i.Row,{cards:!0,children:[Object(s.jsx)(u.i.Col,{width:6,sm:4,lg:2,children:Object(s.jsx)(u.n,{layout:1,movement:t(this.state.newPos,this.state.yestPos),total:this.state.newPos.toLocaleString(),label:"New Positive Cases"})}),Object(s.jsx)(u.i.Col,{width:6,sm:4,lg:2,children:Object(s.jsx)(u.n,{layout:1,movement:t(this.state.newNeg,this.state.yestNeg),total:this.state.newNeg.toLocaleString(),label:"New Negative Cases"})}),Object(s.jsx)(u.i.Col,{width:6,sm:4,lg:2,children:Object(s.jsx)(u.n,{layout:1,movement:t(this.state.newDeaths,this.state.yestDeaths),total:this.state.newDeaths.toLocaleString(),label:"New Daily Deaths"})}),Object(s.jsx)(u.i.Col,{width:6,sm:4,lg:2,children:Object(s.jsx)(u.n,{layout:1,movement:t(this.state.totalDeaths,this.state.yestTotalDeaths),total:this.state.totalDeaths.toLocaleString(),label:"Total Deaths"})}),Object(s.jsx)(u.i.Col,{width:6,sm:4,lg:2,children:Object(s.jsx)(u.n,{layout:1,movement:t(this.state.newHosp,this.state.yestHosp),total:this.state.hospitalized.toLocaleString(),label:"Hospitalized"})}),Object(s.jsx)(u.i.Col,{width:6,sm:4,lg:2,children:Object(s.jsx)(u.n,{layout:1,movement:t(this.state.pendConf,this.state.yestConf),total:this.state.pendConf.toLocaleString(),label:"Pending Pos. Cases"})}),Object(s.jsx)(u.i.Col,{sm:4,children:Object(s.jsx)(u.l,{header:"Newly Hospitalized",content:this.state.newHosp.toLocaleString(),progressWidth:100,progressColor:"blue"})}),Object(s.jsx)(u.i.Col,{sm:4,children:Object(s.jsx)(u.l,{header:"Currently in ICU",content:this.state.currICU.toLocaleString(),progressColor:"purple",progressWidth:100})}),Object(s.jsx)(u.i.Col,{sm:4,children:Object(s.jsx)(u.l,{header:"Patients on Ventilators",content:this.state.onVentilator.toLocaleString(),progressColor:"red",progressWidth:100})}),Object(s.jsx)(u.i.Col,{lg:6,children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.c.Header,{children:Object(s.jsx)(u.c.Title,{children:"Case Trend"})}),Object(s.jsx)(L.a,{style:{height:"10rem"},data:{columns:[["cases",this.state.trendSeven,this.state.trendSix,this.state.trendFive,this.state.trendFour,this.state.trendThree,this.state.trendTwo,this.state.newPos]],type:"area",groups:[["cases"]],colors:{cases:u.q["blue-dark"]},names:{cases:"Cases"}},axis:{y:{padding:{bottom:0},show:!1,tick:{outer:!1}},x:{padding:{left:0,right:0},show:!1}},legend:{show:!0,position:"bottom",padding:0},tooltip:{format:{title:function(t){return""}}},padding:{bottom:0,left:0,right:0},point:{show:!0}}),Object(s.jsxs)(u.o,{cards:!0,striped:!0,responsive:!0,className:"table-vcenter",children:[Object(s.jsx)(u.o.Header,{children:Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.ColHeader,{children:"Date"}),Object(s.jsx)(u.o.ColHeader,{children:"New Cases"})]})}),Object(s.jsxs)(u.o.Body,{children:[Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.Col,{className:"text-nowrap",children:C()().format("LL")}),Object(s.jsx)(u.o.Col,{children:this.state.newPos.toLocaleString()})]}),Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.Col,{className:"text-nowrap",children:C()().subtract(1,"days").format("LL")}),Object(s.jsx)(u.o.Col,{children:this.state.trendTwo.toLocaleString()})]}),Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.Col,{className:"text-nowrap",children:C()().subtract(2,"days").format("LL")}),Object(s.jsx)(u.o.Col,{children:this.state.trendThree.toLocaleString()})]}),Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.Col,{className:"text-nowrap",children:C()().subtract(3,"days").format("LL")}),Object(s.jsx)(u.o.Col,{children:this.state.trendFour.toLocaleString()})]}),Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.Col,{className:"text-nowrap",children:C()().subtract(4,"days").format("LL")}),Object(s.jsx)(u.o.Col,{children:this.state.trendFive.toLocaleString()})]}),Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.Col,{className:"text-nowrap",children:C()().subtract(5,"days").format("LL")}),Object(s.jsx)(u.o.Col,{children:this.state.trendSix.toLocaleString()})]}),Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.Col,{className:"text-nowrap",children:C()().subtract(6,"days").format("LL")}),Object(s.jsx)(u.o.Col,{children:this.state.trendSeven.toLocaleString()})]})]})]})]})}),Object(s.jsxs)(u.i.Col,{md:6,children:[Object(s.jsxs)(u.a,{type:"info",children:[Object(s.jsx)(u.a.Link,{href:"https://github.com/max-richter",target:"_blank",children:"Check out the project's"})," ","documentation on GitHub."]}),Object(s.jsxs)(u.i.Row,{children:[Object(s.jsx)(u.i.Col,{sm:12,children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.c.Header,{children:Object(s.jsx)(u.c.Title,{children:"ICU Status (% of admitted patients)"})}),Object(s.jsx)(u.c.Body,{children:Object(s.jsx)(L.a,{style:{height:"16rem"},data:{columns:[["notInICU",t(this.state.hospitalized,this.state.currICU)],["inICU",t(this.state.currICU,this.state.hospitalized)]],type:"donut",colors:{notInICU:u.q.red,inICU:u.q["red-light"]},names:{notInICU:"non-ICU",inICU:"ICU"}},padding:{bottom:0,top:0}})})]})}),Object(s.jsx)(u.i.Col,{sm:12,children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.c.Header,{children:Object(s.jsx)(u.c.Title,{children:"Ventilator Status (% of admitted patients)"})}),Object(s.jsx)(u.c.Body,{children:Object(s.jsx)(L.a,{style:{height:"16rem"},data:{columns:[["nonICU",t(this.state.hospitalized,this.state.onVentilator)],["ventilator",t(this.state.onVentilator,this.state.hospitalized)]],type:"pie",colors:{nonICU:u.q["blue-dark"],ventilator:u.q["blue-light"]},names:{nonICU:"non-Ventilator",ventilator:"Ventilator"}}})}),Object(s.jsx)(u.c.Footer,{children:Object(s.jsx)(u.p.Small,{children:"Note: Every state has a different way of reporting this statistic. Use this graph as an approximate visual representation of the percentage of patients who are admitted to the hospital and currently on a ventilator."})})]})})]})]})]})}),Object(s.jsx)(S,{})]})}}]),a}(n.Component),R=a(58),F=a(38),U=a(57),A="https://api.covidtracking.com",z=U;C()().locale("en");var V=C()().subtract(3,"days").format("YYYYMMDD").toLocaleString(),K=C()().subtract(4,"days").format("YYYYMMDD").toLocaleString(),W=C()().subtract(5,"days").format("YYYYMMDD").toLocaleString(),E=C()().subtract(6,"days").format("YYYYMMDD").toLocaleString(),B=C()().subtract(7,"days").format("YYYYMMDD").toLocaleString(),G=C()().subtract(8,"days").format("YYYYMMDD").toLocaleString(),q=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).state={newPos:0,newNeg:0,newDeaths:0,totalDeaths:0,hospitalized:0,newHosp:0,lastUpdated:"",dataGrade:"",trendTwo:0,trendThree:0,trendFour:0,trendFive:0,trendSix:0,trendSeven:0,yestPos:0,yestNeg:0,yestDeaths:0,yestHosp:0,yestTotalDeaths:0,loadingCount:0,newTests:0,yestTests:0,selectedCounty:"WI",updated:0},t.onSelectHandler=function(e,a){var s=a.target.innerHTML;t.setState({selectedCounty:s}),t.setState({updated:0})},t}return Object(l.a)(a,[{key:"getData",value:function(){var t=this;f.a.get(A+"/v1/states/"+this.state.selectedCounty+"/current.json").then((function(e){console.log(e.data),t.setState({newPos:e.data.positiveIncrease,newNeg:e.data.negativeIncrease,newDeaths:e.data.deathIncrease,totalDeaths:e.data.death,hospitalized:e.data.hospitalizedCurrently,newHosp:e.data.hospitalizedIncrease,population:e.data.total,dataGrade:e.data.dataQualityGrade,newTests:e.data.totalTestResultsIncrease,lastUpdated:e.data.lastUpdateEt})})),f.a.get(A+"/v1/states/"+this.state.selectedCounty+"/"+V+".json").then((function(e){t.setState({trendTwo:e.data.positiveIncrease,yestPos:e.data.positiveIncrease,yestNeg:e.data.negativeIncrease,yestDeaths:e.data.deathIncrease,yestHosp:e.data.hospitalizedIncrease,yestTotalDeaths:e.data.death})})).catch((function(t){alert("ERROR: Looks like this state has issues reporting their data, please try again later.")})),f.a.get(A+"/v1/states/"+this.state.selectedCounty+"/"+K+".json").then((function(e){t.setState({trendThree:e.data.positiveIncrease,yestTests:e.data.totalTestResultsIncrease})})),f.a.get(A+"/v1/states/"+this.state.selectedCounty+"/"+W+".json").then((function(e){t.setState({trendFour:e.data.positiveIncrease})})),f.a.get(A+"/v1/states/"+this.state.selectedCounty+"/"+E+".json").then((function(e){t.setState({trendFive:e.data.positiveIncrease})})),f.a.get(A+"/v1/states/"+this.state.selectedCounty+"/"+B+".json").then((function(e){t.setState({trendSix:e.data.positiveIncrease})})),f.a.get(A+"/v1/states/"+this.state.selectedCounty+"/"+G+".json").then((function(e){t.setState({trendSeven:e.data.positiveIncrease})})),this.setState({updated:1})}},{key:"componentDidUpdate",value:function(){0===this.state.updated&&(this.getData(),this.setState({updated:1}))}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var t=this;function e(t,e){var a=Math.round(t/e*100);return a>100?a=100-a:a-=100,a}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(w,{}),Object(s.jsxs)(u.a,{type:"primary",isDismissible:!0,children:[Object(s.jsx)(u.j.H4,{children:"READ: Data Inconsistencies"}),Object(s.jsx)("p",{children:"Due to how states report their data, there are many inconsistencies in regard to some states not reporting the same categories of data. Unfortunately, there is no way tell if states don't report the data listed below. Some states will report a category of data one week and deprecate it the next."})]}),Object(s.jsxs)(u.k.Content,{title:"Statewide Data",children:[Object(s.jsx)("p",{children:"Select a State:"}),Object(s.jsx)(R.a,{title:this.state.selectedCounty,id:"dropdown-menu-align-right",className:"dropdown",children:z.map((function(e,a){return Object(s.jsx)(F.a.Item,{eventKey:a.toString(),onSelect:t.onSelectHandler,as:"button",children:e})}))}),Object(s.jsxs)(u.i.Row,{cards:!0,children:[Object(s.jsx)(u.i.Col,{width:6,sm:4,lg:2,children:Object(s.jsx)(u.n,{layout:1,movement:e(this.state.newPos,this.state.yestPos),total:this.state.newPos.toLocaleString(),label:"New Positive Cases"})}),Object(s.jsx)(u.i.Col,{width:6,sm:4,lg:2,children:Object(s.jsx)(u.n,{layout:1,movement:e(this.state.newNeg,this.state.yestNeg),total:this.state.newNeg.toLocaleString(),label:"New Negative Cases"})}),Object(s.jsx)(u.i.Col,{width:6,sm:4,lg:2,children:Object(s.jsx)(u.n,{layout:1,movement:e(this.state.newDeaths,this.state.yestDeaths),total:this.state.newDeaths.toLocaleString(),label:"New Daily Deaths"})}),Object(s.jsx)(u.i.Col,{width:6,sm:4,lg:2,children:Object(s.jsx)(u.n,{layout:1,movement:e(this.state.totalDeaths,this.state.yestTotalDeaths),total:this.state.totalDeaths.toLocaleString(),label:"Total Deaths"})}),Object(s.jsx)(u.i.Col,{width:6,sm:4,lg:2,children:Object(s.jsx)(u.n,{layout:1,movement:e(this.state.newHosp,this.state.yestHosp),total:this.state.hospitalized.toLocaleString(),label:"Hospitalized"})}),Object(s.jsx)(u.i.Col,{width:6,sm:4,lg:2,children:Object(s.jsx)(u.n,{layout:1,movement:e(this.state.newTests,this.state.yestTests),total:this.state.newTests.toLocaleString(),label:"New Tests Taken"})}),Object(s.jsx)(u.i.Col,{sm:4,children:Object(s.jsx)(u.l,{header:"Newly Hospitalized",content:this.state.newHosp.toLocaleString(),progressWidth:100,progressColor:"blue"})}),Object(s.jsx)(u.i.Col,{sm:4,children:Object(s.jsx)(u.l,{header:"Last Updated",content:this.state.lastUpdated.toLocaleString(),progressColor:"purple",progressWidth:100})}),Object(s.jsx)(u.i.Col,{sm:4,children:Object(s.jsx)(u.l,{header:"Data Quality Grade",content:"A",progressColor:"green",progressWidth:100})}),Object(s.jsx)(u.i.Col,{lg:12,children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.c.Header,{children:Object(s.jsx)(u.c.Title,{children:"Case Trend"})}),Object(s.jsx)(L.a,{style:{height:"10rem"},data:{columns:[["cases",this.state.trendSeven,this.state.trendSix,this.state.trendFive,this.state.trendFour,this.state.trendThree,this.state.trendTwo,this.state.newPos]],type:"area",groups:[["cases"]],colors:{cases:u.q["blue-dark"]},names:{cases:"Cases"}},axis:{y:{padding:{bottom:0},show:!1,tick:{outer:!1}},x:{padding:{left:0,right:0},show:!1}},legend:{show:!0,position:"bottom",padding:0},tooltip:{format:{title:function(t){return""}}},padding:{bottom:0,left:0,right:0},point:{show:!0}}),Object(s.jsxs)(u.o,{cards:!0,striped:!0,responsive:!0,className:"table-vcenter",children:[Object(s.jsx)(u.o.Header,{children:Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.ColHeader,{children:"Date"}),Object(s.jsx)(u.o.ColHeader,{children:"New Cases"})]})}),Object(s.jsxs)(u.o.Body,{children:[Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.Col,{className:"text-nowrap",children:C()().format("LL")}),Object(s.jsx)(u.o.Col,{children:this.state.newPos.toLocaleString()})]}),Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.Col,{className:"text-nowrap",children:C()().subtract(1,"days").format("LL")}),Object(s.jsx)(u.o.Col,{children:this.state.trendTwo.toLocaleString()})]}),Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.Col,{className:"text-nowrap",children:C()().subtract(2,"days").format("LL")}),Object(s.jsx)(u.o.Col,{children:this.state.trendThree.toLocaleString()})]}),Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.Col,{className:"text-nowrap",children:C()().subtract(3,"days").format("LL")}),Object(s.jsx)(u.o.Col,{children:this.state.trendFour.toLocaleString()})]}),Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.Col,{className:"text-nowrap",children:C()().subtract(4,"days").format("LL")}),Object(s.jsx)(u.o.Col,{children:this.state.trendFive.toLocaleString()})]}),Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.Col,{className:"text-nowrap",children:C()().subtract(5,"days").format("LL")}),Object(s.jsx)(u.o.Col,{children:this.state.trendSix.toLocaleString()})]}),Object(s.jsxs)(u.o.Row,{children:[Object(s.jsx)(u.o.Col,{className:"text-nowrap",children:C()().subtract(6,"days").format("LL")}),Object(s.jsx)(u.o.Col,{children:this.state.trendSeven.toLocaleString()})]})]})]})]})})]})]}),Object(s.jsx)(S,{})]})}}]),a}(n.Component),_=a(104),J=a(105),Q=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(w,{}),Object(s.jsx)(u.k.Content,{title:"About CovidStats",children:Object(s.jsxs)(_.a,{defaultActiveKey:"0",children:[Object(s.jsxs)(J.a,{children:[Object(s.jsx)(_.a.Toggle,{as:J.a.Header,eventKey:"0",children:"Data Source"}),Object(s.jsx)(_.a.Collapse,{eventKey:"0",children:Object(s.jsxs)(J.a.Body,{children:["All data is acquired from the ",Object(s.jsx)("a",{href:"https://covidtracking.com/data/api",target:"_blank",rel:"noreferrer",children:"The COVID Tracking Project"}),". The full dataset is updated by them between 5:30pm and 7pm Eastern time. This data is not scraped and is gathered and double-checked by humans. Note, the COVID Tracking Project relies on each state to report valid data each and every day. There is no consistent reporting format amongst states, so the data collected for this project is the most recent data available to the public."]})})]}),Object(s.jsxs)(J.a,{children:[Object(s.jsx)(_.a.Toggle,{as:J.a.Header,eventKey:"1",children:"Data Inconsistencies"}),Object(s.jsx)(_.a.Collapse,{eventKey:"1",children:Object(s.jsx)(J.a.Body,{children:"Due to how states collect their data, some states have fewer categories than others. For example, states like Wisconsin and California collect data on the amount of people who have \"recovered\" from the virus. Many other states don't collect this data or don't make it available to the public. I did my best to make sure I gathered data from categories that every state consistently reports, but I ultimately have no way of knowing if states stop reporting the categories listed on this site."})})]}),Object(s.jsxs)(J.a,{children:[Object(s.jsx)(_.a.Toggle,{as:J.a.Header,eventKey:"2",children:"Racial Data Dashboard"}),Object(s.jsx)(_.a.Collapse,{eventKey:"2",children:Object(s.jsxs)(J.a.Body,{children:["While this information isn't available from The COVID Tracking Project's API, they have a detailed dataset on the latest race and ethnicity data from every state/territory that reports it. You can find this data",Object(s.jsx)("a",{href:"https://covidtracking.com/race/dashboard",target:"_blank",rel:"noreferrer",children:" here."})]})})]}),Object(s.jsxs)(J.a,{children:[Object(s.jsx)(_.a.Toggle,{as:J.a.Header,eventKey:"3",children:"Data Quality Grade"}),Object(s.jsx)(_.a.Collapse,{eventKey:"3",children:Object(s.jsx)(J.a.Body,{children:"The COVID Tracking Project have created a category grading each state on how complete their data is. Does the state report their statistics in reliable and consistent manner? Are they reporting on COVID's effects on patients and the healthcare system? Do they categorize COVID's effect based on detailed demographics? How transparent are they with their reporting to the public? There are many more factors considered here, but the goal is to show which states are doing a good job reporting."})})]}),Object(s.jsxs)(J.a,{children:[Object(s.jsx)(_.a.Toggle,{as:J.a.Header,eventKey:"4",children:"Check out the Project"}),Object(s.jsx)(_.a.Collapse,{eventKey:"4",children:Object(s.jsxs)(J.a.Body,{children:["If you're interested in how I made this website, please check out the ",Object(s.jsx)("a",{href:"https://github.com/max-richter/covidstats",target:"_blank",rel:"noreferrer",children:"GitHub repository"}),'. Here you will find the code I wrote to bring this project to life. Have a feature suggestion? Please open up an "Issue" and I will try my best to implement it if the feature fits the project\'s scope.']})})]})]})}),Object(s.jsx)(S,{})]})}}]),a}(n.Component),X=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(j.a,{basename:"/covidstats",children:Object(s.jsxs)(b.c,{children:[Object(s.jsx)(b.a,{exact:!0,path:"/",component:P}),Object(s.jsx)(b.a,{exact:!0,path:"/state",component:q}),Object(s.jsx)(b.a,{exact:!0,path:"/about",component:Q}),Object(s.jsx)(b.a,{exact:!0,path:"/400",component:p}),Object(s.jsx)(b.a,{exact:!0,path:"/401",component:O}),Object(s.jsx)(b.a,{exact:!0,path:"/403",component:x}),Object(s.jsx)(b.a,{exact:!0,path:"/404",component:g}),Object(s.jsx)(b.a,{exact:!0,path:"/500",component:m})]})})})}}]),a}(n.Component);var Z=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(X,{})})},$=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,106)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,o=e.getLCP,r=e.getTTFB;a(t),s(t),n(t),o(t),r(t)}))};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(Z,{})}),document.getElementById("root")),$()}},[[98,1,2]]]);
//# sourceMappingURL=main.6513fd67.chunk.js.map