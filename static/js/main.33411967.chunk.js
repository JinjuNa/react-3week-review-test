(this["webpackJsonpreact-3week-review-test"]=this["webpackJsonpreact-3week-review-test"]||[]).push([[0],{29:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n.n(i),r=n(17),a=n.n(r),s=(n(29),n(5)),o=n.n(s),u=n(18),l=n(19),j=n(20),v=n(24),d=n(23),p=n(21),h=n.n(p),m=n(0),b=function(e){var t=e.title,n=e.image,i=e.rating,c=e.discription;return Object(m.jsxs)("div",{className:"movie-item",children:[Object(m.jsx)("img",{src:n,alt:t}),Object(m.jsx)("p",{children:t}),Object(m.jsxs)("p",{children:["\ud3c9\uc810 : ",i]}),Object(m.jsx)("p",{children:c})]})},g=n(22),f=n.n(g),O=(n(71),function(e){Object(v.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={movies:[]},e.getMovies=Object(u.a)(o.a.mark((function t(){var n,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:n=t.sent,i=n.data.data.movies,e.setState({movies:i}),console.log(i);case 6:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state.movies;return Object(m.jsx)("div",{className:"movie-container",children:Object(m.jsx)(h.a,{enableMouseEvents:!0,children:e.map((function(e){return Object(m.jsx)(b,{title:e.title,image:e.large_cover_image,rating:e.rating,discription:e.description_full},e.id)}))})})}}]),n}(c.a.Component)),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),x()}},[[72,1,2]]]);
//# sourceMappingURL=main.33411967.chunk.js.map