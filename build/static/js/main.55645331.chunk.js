(this.webpackJsonpbatman_click_game=this.webpackJsonpbatman_click_game||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":0,"img":"/characterImages/Bane.jpg","name":"Bane"},{"id":1,"img":"/characterImages/batman.jpg","name":"Batman"},{"id":2,"img":"/characterImages/catwoman.png","name":"Cat Woman"},{"id":3,"img":"/characterImages/croc.jpg","name":"Killer Croc"},{"id":4,"img":"/characterImages/joker.jpg","name":"Joker"},{"id":5,"img":"/characterImages/madhatter.jpg","name":"Mad Hatter"},{"id":6,"img":"/characterImages/mrFreeze.jpg","name":"Mr. Freeze"},{"id":7,"img":"/characterImages/penguin.jpg","name":"Penguin"},{"id":8,"img":"/characterImages/posionivy.jpg","name":"Poision Ivy"},{"id":9,"img":"/characterImages/rashaghul.jpg","name":"Rasha Al Ghul"},{"id":10,"img":"/characterImages/robin.jpg","name":"Robin"},{"id":11,"img":"/characterImages/twoface.jpg","name":"Two Face"}]')},,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(2),i=t.n(n),s=(t(14),t(3)),m=t(4),o=t(7),l=t(5),h=t(8);var d=function(e){var a=e.current,t=e.highest,r=e.isCorrect,n=e.alert;return c.a.createElement("div",{class:"row",id:"nav"},c.a.createElement("div",{className:"col-md-4 d-flex align-items-center"},c.a.createElement("img",{src:"favicon.ico",className:"icon"}),c.a.createElement("h3",{className:"m-3 p-0"}," Batman Clicker Game")),c.a.createElement("div",{className:"col-md-4 d-flex justify-content-center align-items-center "},c.a.createElement("h5",{className:n},r)),c.a.createElement("div",{className:"col-md-4 d-flex align-items-center"},c.a.createElement("h3",{className:"m-0 p-0"},"Score: ",a,"| Top Score: ",t)))};var g=function(e){var a=e.characters,t=e.handleOnCickEvent;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-10 offset-md-1",id:"imageGrid"},a.map((function(e){return c.a.createElement("div",{className:"m-1 p-0 imageContainer center","data-id":e.id,key:e.id},c.a.createElement("img",{tabIndex:"0",src:e.img,onClick:function(e){return t(e)},className:"Images btn btn-secondary","data-id":e.id,key:e.id,alt:e.name}))}))))},u=t(6),p=(t(15),function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(t=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(c)))).state={clicked:[],highest:0,current:0,isCorrect:"",characters:u,alert:"alert"},t.checkCharacter=function(e){return t.state.clicked.find((function(a){return a===e}))?"Is Incorrect Guess! You Lose":"Is Correct Guess!"},t.handleOnCickEvent=function(e){var a=t.state.highest,r=t.state.current,c=t.state.clicked,n=e.target.dataset.id,i=t.checkCharacter(n),s=t.state.alert;"Is Incorrect Guess! You Lose"===i?(a=r>a?r:a,r=0,c=[],s="alertWrong"):(c.push(n),a=++r>a?r:a,s="alertCorrect"),t.setState({characters:t.state.characters.sort((function(){return Math.random()-.5})),isCorrect:i,clicked:c,highest:a,current:r,alert:s})},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d,{current:this.state.current,alert:this.state.alert,highest:this.state.highest,isCorrect:this.state.isCorrect}),c.a.createElement("div",{className:"container"},c.a.createElement(g,{characters:this.state.characters,handleOnCickEvent:this.handleOnCickEvent})))}}]),a}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.55645331.chunk.js.map