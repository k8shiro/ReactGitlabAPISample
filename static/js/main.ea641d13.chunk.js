(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{340:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(34),l=n.n(i),r=(n(73),n(74),n(19)),c=n(20),s=n(26),u=n(21),h=n(25),p=n(369),m=n(371),d=n(372),f=n(366),g=n(15),b=n(373),v=n(367),E=n(368),y=n(365),j=n(364),k=n(35),O=n.n(k),w=n(64),D=n.n(w),R=n(65),C=n.n(R),I=n(370),F=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={code:""},n.getCode=n.getCode.bind(Object(g.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getCode",value:function(e){var t=this,n="https://"+this.props.gitlab+"/api/v4/projects/"+this.props.repositoyID+"/repository/files/"+encodeURIComponent(e)+"/raw?ref=master";console.log(n),fetch(n).then(function(e){return e.text()}).then(function(e){t.setState({code:e})})}},{key:"componentDidUpdate",value:function(e,t,n){O()(e,this.props)||(console.log(this.props),this.props.codePath&&this.getCode(this.props.codePath))}},{key:"render",value:function(){return o.a.createElement("div",{style:{textAlign:"left"}},o.a.createElement(I.a,null,this.state.code))}}]),t}(a.Component),U=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={tree:[],codePath:null},n.defaultPath="/",n.getFileTree=n.getFileTree.bind(Object(g.a)(n)),n.createFileElement=n.createFileElement.bind(Object(g.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getFileTree",value:function(e){var t=this,n=this.props.gitlab,a=this.props.repositoyID;fetch("https://"+n+"/api/v4/projects/"+a+"/repository/tree?per_page=1000&path="+e).then(function(e){return e.json()}).then(function(e){console.log(e),t.setState({tree:e})})}},{key:"createFileElement",value:function(e){var t=this;return"tree"==e.type?o.a.createElement(j.a,null,o.a.createElement(y.a,{size:"small"},o.a.createElement(D.a,null)),o.a.createElement(y.a,{align:"left"},o.a.createElement(b.a,{component:"button",onClick:function(){return t.getFileTree(e.path)}}," ",e.name," "))):o.a.createElement(j.a,null,o.a.createElement(y.a,{size:"small"},o.a.createElement(C.a,null)),o.a.createElement(y.a,{align:"left"},o.a.createElement(b.a,{component:"button",onClick:function(){return t.setState({codePath:e.path})}}," ",e.name," ")))}},{key:"componentDidMount",value:function(){this.getFileTree(this.defaultPath)}},{key:"componentDidUpdate",value:function(e,t,n){O()(e,this.props)||this.getFileTree(this.defaultPath)}},{key:"render",value:function(){var e=this.state.tree;return console.log(this.props),console.log("tree"),console.log(e),o.a.createElement("div",null,o.a.createElement(f.a,{container:!0,spacing:3},o.a.createElement(f.a,{item:!0,xs:3,style:{height:window.innerHeight,overflowX:"auto"}},o.a.createElement(v.a,null,o.a.createElement(E.a,null,e.map(this.createFileElement)))),o.a.createElement(f.a,{item:!0,xs:9},o.a.createElement(F,{gitlab:this.props.gitlab,repositoyID:this.props.repositoyID,codePath:this.state.codePath}))))}}]),t}(a.Component),P=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={gitlab:null,repositoyID:null},n.defaultRepositoyURL="https://gitlab.com/gitlab-org/gitlab-ce",n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getRepositoryID",value:function(e){var t=this,n=e.split("/"),a=n[2],o=encodeURIComponent(n.slice(-2)[0]+"/"+n.slice(-2)[1]);this.setState({gitlab:a}),fetch("https://"+a+"/api/v4/projects/"+o).then(function(e){return e.json()}).then(function(e){e.id&&t.setState({repositoyID:e.id})})}},{key:"componentDidMount",value:function(){this.getRepositoryID(this.defaultRepositoyURL)}},{key:"gitlabURLChanged",value:function(e){var t=e.target.value;this.getRepositoryID(t)}},{key:"render",value:function(){var e=this.state.gitlab,t=this.defaultRepositoyURL,n=this.state.repositoyID;return o.a.createElement("div",null,o.a.createElement(f.a,{container:!0,spacing:3},o.a.createElement(f.a,{item:!0,xs:12},o.a.createElement(p.a,{fullWidth:!0},o.a.createElement(d.a,null,"Gitlab Repository URL"),o.a.createElement(m.a,{defaultValue:t,onChange:this.gitlabURLChanged.bind(this)}))),o.a.createElement(f.a,{item:!0,xs:12},n&&o.a.createElement(U,{gitlab:e,repositoyID:n}))))}}]),t}(a.Component);var x=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,n){e.exports=n(340)},73:function(e,t,n){},74:function(e,t,n){}},[[68,1,2]]]);
//# sourceMappingURL=main.ea641d13.chunk.js.map