(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{78:function(e,t,c){},86:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),r=c(61),s=c.n(r),i=(c(78),c(5)),o=c(9),l=c(11),d=c(69),j=c(71),b=c(102),u=c(100),m=c(68),h=c(0),O=function(){return Object(h.jsxs)("div",{className:"jumbotron text-center p-5",children:[Object(h.jsx)("h1",{className:"display-4",children:"Hello!"}),Object(h.jsx)("p",{className:"lead",children:"Welcome to Kota Bear's workshop."}),Object(h.jsx)("p",{children:"Take a look at my gallery to see a few items I have built."}),Object(h.jsx)(o.b,{className:"btn btn-primary btn-lg",to:"/gallery",children:"Gallery"})]})},p=function(){return Object(h.jsxs)("div",{className:"about row",children:[Object(h.jsx)("div",{className:"col-6"}),Object(h.jsxs)("aside",{className:"p-3 col-6 text-center text-white",children:[Object(h.jsx)("h2",{className:"p-2",children:"About Kota Bear Woodworks"}),Object(h.jsx)("p",{children:"My name is Kevin. I have been building with wood since I was a young child. My first jobs were building houses. I've always been a DIYer. As I aged and moved out of the construction business, I always kept at it by doing side projects for friends and family."}),Object(h.jsx)("p",{children:'If you\'re wondering where the name "Kota Bear" comes from...'})]})]})},x=function(){return Object(h.jsxs)("div",{className:"contact row",children:[Object(h.jsx)("section",{class:"mb-4 text-white",children:Object(h.jsx)("div",{children:Object(h.jsxs)("div",{class:"col-md-6 p-3",children:[Object(h.jsx)("h2",{class:"h1-responsive font-weight-bold text-center my-4",children:"Reach Out"}),Object(h.jsx)("p",{class:"text-center w-responsive mx-auto",children:"Do you have any questions about pricing? Want to discuss custom pieces? Please do not hesitate to contact me directly."}),Object(h.jsxs)("form",{id:"contact-form",name:"contact-form",action:"mail.php",method:"POST",children:[Object(h.jsxs)("div",{class:"row",children:[Object(h.jsx)("div",{class:"col-md-6",children:Object(h.jsxs)("div",{class:"md-form mb-0",children:[Object(h.jsx)("input",{type:"text",id:"name",name:"name",class:"form-control"}),Object(h.jsx)("label",{for:"name",class:"",children:"Your name"})]})}),Object(h.jsx)("div",{class:"col-md-6",children:Object(h.jsxs)("div",{class:"md-form mb-0",children:[Object(h.jsx)("input",{type:"text",id:"email",name:"email",class:"form-control"}),Object(h.jsx)("label",{for:"email",class:"",children:"Your email"})]})})]}),Object(h.jsx)("div",{class:"row",children:Object(h.jsx)("div",{class:"col-md-12",children:Object(h.jsxs)("div",{class:"md-form mb-0",children:[Object(h.jsx)("input",{type:"text",id:"subject",name:"subject",class:"form-control"}),Object(h.jsx)("label",{for:"subject",class:"",children:"Subject"})]})})}),Object(h.jsx)("div",{class:"row",children:Object(h.jsx)("div",{class:"col-md-12",children:Object(h.jsxs)("div",{class:"md-form",children:[Object(h.jsx)("textarea",{type:"text",id:"message",name:"message",rows:"2",class:"form-control md-textarea"}),Object(h.jsx)("label",{for:"message",children:"Your message"})]})})})]})]})})}),Object(h.jsx)("div",{className:"col-6"})]})},f=c(8),v=c(64),g=c(29),y="UPDATE_PRODUCTS",w="ADD_TO_CART",N="ADD_MULTIPLE_TO_CART",k="REMOVE_FROM_CART",_="TOGGLE_CART",C="UPDATE_CATEGORIES",S="UPDATE_CURRENT_CATEGORY",T=function(e,t){switch(t.type){case y:return Object(i.a)(Object(i.a)({},e),{},{products:Object(g.a)(t.products)});case w:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(g.a)(e.cart),[t.product])});case N:return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object(g.a)(e.cart),Object(g.a)(t.products))});case k:var c=e.cart.filter((function(e){return e._id!==t._id}));return Object(i.a)(Object(i.a)({},e),{},{cartOpen:c.length>0,cart:c});case"CLEAR_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!1,cart:[]});case _:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!e.cartOpen});case C:return Object(i.a)(Object(i.a)({},e),{},{categories:Object(g.a)(t.categories)});case S:return Object(i.a)(Object(i.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var E=["value"],A=Object(n.createContext)(),D=A.Provider,I=function(e){e.value;var t,c=Object(v.a)(e,E),a=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(T,t)),r=Object(f.a)(a,2),s=r[0],o=r[1];return Object(h.jsx)(D,Object(i.a)({value:[s,o]},c))},P=function(){return Object(n.useContext)(A)};function $(e,t,c){return new Promise((function(n,a){var r,s,i,o=window.indexedDB.open("Kota Bear Woodworks",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(a){switch(r=o.result,s=r.transaction(e,"readwrite"),i=s.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":i.put(c),n(c);break;case"get":var l=i.getAll();l.onsuccess=function(){n(l.result)};break;case"delete":i.delete(c._id);break;default:console.log("No valid method")}s.oncomplete=function(){r.close()}}}))}var R,W,L,B,F,U=function(e){var t=P(),c=Object(f.a)(t,2),n=c[0],a=c[1],r=e.image,s=e.name,l=e._id,d=n.cart;return Object(h.jsxs)("div",{className:"card p-2 m-2 d-inline-flex",children:[Object(h.jsx)(o.b,{to:"/products/".concat(l),children:Object(h.jsx)("img",{className:"card-img-top",alt:s,src:"/images/".concat(r)})}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:s}),Object(h.jsx)("div",{className:"card-text",children:"Available"})]}),Object(h.jsx)("button",{className:"btn btn-primary",onClick:function(){var t=d.find((function(e){return e._id===l}));t?$("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1})):(a({type:w,product:Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})}),$("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})))},children:"Add to favorites"})]})},K=c(97),G=c(24),Q=c(101),Y=Object(Q.a)(R||(R=Object(G.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),M=(Object(Q.a)(W||(W=Object(G.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),Object(Q.a)(L||(L=Object(G.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(Q.a)(B||(B=Object(G.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),q=Object(Q.a)(F||(F=Object(G.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          image\n        }\n      }\n    }\n  }\n"]))),H=c.p+"static/media/spinner.689d9a07.gif";var J=function(){var e=P(),t=Object(f.a)(e,2),c=t[0],a=t[1],r=c.currentCategory,s=Object(K.a)(Y),i=s.loading,o=s.data;return Object(n.useEffect)((function(){o?(a({type:y,products:o.products}),o.products.forEach((function(e){$("products","put",e)}))):i||$("products","get").then((function(e){a({type:y,products:e})}))}),[o,i,a]),Object(h.jsxs)("div",{className:"mt-2 text-center",children:[Object(h.jsx)("h2",{children:"My Pieces"}),c.products.length?Object(h.jsx)("div",{children:(r?c.products.filter((function(e){return e.category._id===r})):c.products).map((function(e){return Object(h.jsx)(U,{_id:e._id,image:e.image,name:e.name},e._id)}))}):Object(h.jsx)("h3",{children:"You haven't added any products yet!"}),i?Object(h.jsx)("img",{src:H,alt:"loading"}):null]})};var z=function(){var e=P(),t=Object(f.a)(e,2),c=t[0],a=t[1],r=c.categories,s=Object(K.a)(M),i=s.loading,o=s.data;return Object(n.useEffect)((function(){o?(a({type:C,categories:o.categories}),o.categories.forEach((function(e){$("categories","put",e)}))):i||$("categories","get").then((function(e){a({type:C,categories:e})}))}),[o,i,a]),Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("h2",{children:"Categories"}),r.map((function(e){return Object(h.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t;t=e._id,a({type:S,currentCategory:t})},children:e.name},e._id)}))]})},V=c(28),X=c(19),Z=c.n(X),ee=function(e){var t=e.item,c=P(),n=Object(f.a)(c,2)[1];return Object(h.jsxs)("div",{className:"d-inline-flex",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:t.name}),Object(h.jsx)("div",{children:Object(h.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:k,_id:e._id}),$("cart","delete",Object(i.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})})]})]})},te=(c(86),function(){var e=P(),t=Object(f.a)(e,2),c=t[0],a=t[1];function r(){a({type:_})}return Object(n.useEffect)((function(){function e(){return(e=Object(V.a)(Z.a.mark((function e(){var t;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$("cart","get");case 2:t=e.sent,a({type:N,products:Object(g.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.cart.length||function(){e.apply(this,arguments)}()}),[c.cart.length,a]),c.cartOpen?Object(h.jsxs)("div",{className:"cart bg-light",children:[Object(h.jsx)("div",{className:"close",onClick:r,children:"[close]"}),Object(h.jsx)("h2",{className:"px-2 text-center pb-3",children:"Liked items"}),c.cart.length?Object(h.jsx)("div",{children:c.cart.map((function(e){return Object(h.jsx)(ee,{item:e},e._id)}))}):Object(h.jsx)("h3",{children:"You haven't liked anything yet!"})]}):Object(h.jsx)("div",{className:"cart-closed",onClick:r,children:Object(h.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83e\udd0d"})})}),ce=function(){return Object(h.jsxs)("div",{className:"gallery",children:[Object(h.jsx)(z,{}),Object(h.jsx)(J,{}),Object(h.jsx)(te,{})]})};var ne=function(){var e=P(),t=Object(f.a)(e,2),c=t[0],a=t[1],r=Object(l.f)().id,s=Object(n.useState)({}),d=Object(f.a)(s,2),j=d[0],b=d[1],u=Object(K.a)(Y),m=u.loading,O=u.data,p=c.products,x=c.cart;return Object(n.useEffect)((function(){p.length?b(p.find((function(e){return e._id===r}))):O?(a({type:y,products:O.products}),O.products.forEach((function(e){$("products","put",e)}))):m||$("products","get").then((function(e){a({type:y,products:e})}))}),[p,O,m,a,r]),Object(h.jsxs)("div",{className:"gallery",children:[j&&x?Object(h.jsxs)("div",{children:[Object(h.jsx)(o.b,{to:"/gallery",children:"\u2190 Back to Products"}),Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsxs)("div",{className:"",children:[Object(h.jsx)("h2",{children:j.name}),Object(h.jsxs)("p",{className:"likeBtn",children:[" Add to Favorites:",Object(h.jsx)("button",{hidden:x.find((function(e){return e._id===j._id})),onClick:function(){var e=x.find((function(e){return e._id===r}));e?$("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1})):(a({type:w,product:Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})}),$("cart","put",Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})))},children:"\ud83e\udd0d"}),Object(h.jsx)("button",{hidden:!x.find((function(e){return e._id===j._id})),onClick:function(){a({type:k,_id:j._id}),$("cart","delete",Object(i.a)({},j))},children:"\u2764\ufe0f"})]})]}),Object(h.jsx)("img",{className:"rounded",src:"/images/".concat(j.image),alt:j.name}),Object(h.jsx)("p",{className:"m-0 p-4",children:j.description})]})]}):null,m?Object(h.jsx)("img",{src:H,alt:"loading"}):null,Object(h.jsx)(te,{})]})};var ae,re,se,ie=function(e){var t=e.children;return Object(h.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},oe=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(ie,{children:[Object(h.jsx)("h1",{children:"404 Page Not Found"}),Object(h.jsx)("h1",{children:Object(h.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},le=c(33),de=c(99),je=Object(Q.a)(ae||(ae=Object(G.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),be=Object(Q.a)(re||(re=Object(G.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),ue=Object(Q.a)(se||(se=Object(G.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),me=c(66),he=c(67),Oe=c(53),pe=c.n(Oe),xe=new(function(){function e(){Object(me.a)(this,e)}return Object(he.a)(e,[{key:"getProfile",value:function(){return pe()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return pe()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());var fe=function(e){var t=Object(n.useState)({email:"",password:""}),c=Object(f.a)(t,2),a=c[0],r=c[1],s=Object(de.a)(je),l=Object(f.a)(s,2),d=l[0],j=l[1].error,b=function(){var e=Object(V.a)(Z.a.mark((function e(t){var c,n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:a.email,password:a.password}});case 4:c=e.sent,n=c.data.login.token,xe.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,c=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},a),{},Object(le.a)({},c,n)))};return Object(h.jsx)("div",{className:"login text-white",children:Object(h.jsxs)("div",{className:"row p-5",children:[Object(h.jsx)("div",{className:"col-md-3"}),Object(h.jsxs)("div",{className:"text-center col-md-6",children:[Object(h.jsx)("h2",{children:"Login"}),Object(h.jsx)("p",{className:"",children:"Login to your account to save/view your favorite pieces from the gallery."}),Object(h.jsxs)("form",{className:"",onSubmit:b,children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(h.jsx)("input",{className:"form-control",placeholder:"youremail@email.com",name:"email",type:"email",id:"email",onChange:u})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"pwd",children:"Password"}),Object(h.jsx)("input",{className:"form-control",placeholder:"******",name:"password",type:"password",id:"pwd",onChange:u})]}),j?Object(h.jsx)("div",{className:"rounded m-3 bg-danger font-weight-bold",children:Object(h.jsx)("p",{className:"text-white",children:"The provided credentials are incorrect"})}):null,Object(h.jsx)("button",{className:"btn btn-primary m-2",type:"submit",children:"Submit"})]}),Object(h.jsxs)("p",{children:["Don't have an account?",Object(h.jsx)("br",{}),Object(h.jsx)(o.b,{className:"",to:"/signup",children:Object(h.jsx)("b",{children:"Go to Signup"})})]})]}),Object(h.jsx)("div",{className:"col-md-3"})]})})};var ve=function(e){var t=Object(n.useState)({email:"",password:""}),c=Object(f.a)(t,2),a=c[0],r=c[1],s=Object(de.a)(ue),l=Object(f.a)(s,1)[0],d=function(){var e=Object(V.a)(Z.a.mark((function e(t){var c,n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:c=e.sent,n=c.data.addUser.token,xe.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,c=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},a),{},Object(le.a)({},c,n)))};return Object(h.jsx)("div",{className:"login text-white",children:Object(h.jsxs)("div",{className:"row p-5",children:[Object(h.jsx)("div",{className:"col-md-3"}),Object(h.jsxs)("div",{className:"text-center col-md-6",children:[Object(h.jsx)("h2",{children:"Signup"}),Object(h.jsx)("p",{className:"",children:"Create an account to save/view your favorite pieces from the gallery."}),Object(h.jsxs)("form",{onSubmit:d,children:[Object(h.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(h.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(h.jsx)("input",{className:"text-center form-control",placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:j})]}),Object(h.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(h.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(h.jsx)("input",{className:"text-center form-control",placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:j})]}),Object(h.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsx)("input",{className:"text-center form-control",placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(h.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(h.jsx)("label",{htmlFor:"pwd",children:"Password"}),Object(h.jsx)("input",{className:"text-center form-control",placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),Object(h.jsx)("button",{className:"btn btn-primary m-2",type:"submit",children:"Submit"})]}),Object(h.jsxs)("p",{children:["Already have an account?",Object(h.jsx)("br",{}),Object(h.jsx)(o.b,{className:"",to:"/login",children:Object(h.jsx)("b",{children:"Go to Login"})})]})]}),Object(h.jsx)("div",{className:"col-md-3"})]})})},ge=c.p+"static/media/KBWW-white.fc3d5820.png";var ye=function(){return Object(h.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark px-3 py-4",children:[Object(h.jsx)("div",{className:"p-2 justify-content-center",children:Object(h.jsx)("img",{src:ge,alt:"Kota Bear Woodworks Logo",height:"85px"})}),Object(h.jsx)("div",{className:"h1 nav-item p-2",children:Object(h.jsx)(o.b,{className:"text-decoration-none text-white",to:"/",children:"Kota Bear Woodworks"})}),Object(h.jsx)("button",{className:"navbar-toggler text-white",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:Object(h.jsxs)("ul",{className:"navbar-nav",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(o.b,{className:"nav-link text-white",to:"/about",children:"About"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(o.b,{className:"nav-link text-white",to:"/gallery",children:"Gallery"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(o.b,{className:"nav-link text-white",to:"/contact",children:"Contact"})}),xe.loggedIn()?Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link text-white",href:"/",onClick:function(){return xe.logout()},children:"Logout"})}):Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(o.b,{className:"nav-link text-white",to:"/login",children:"Login"})})]})})]})};var we=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("footer",{className:"text-white sticky-bottom bg-dark",children:[Object(h.jsxs)("div",{className:"row px-2 pt-3",children:[Object(h.jsx)("p",{className:"col-6 text-start p-2",children:"\xa9 2022 Copyright"}),Object(h.jsxs)("p",{className:"col-6 text-end p-2",children:["Website built by:",Object(h.jsx)("a",{className:"text-decoration-none",href:"https://github.com/konnerhartman",children:"Konner Hartman"})]})]}),Object(h.jsx)("div",{className:"text-end"})]})})};var Ne=function(){var e=Object(de.a)(be),t=Object(f.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(V.a)(Z.a.mark((function e(){var c,n,a,r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$("cart","get");case 2:if(c=e.sent,!(n=c.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:a=e.sent,r=a.data,r.addOrder.products.forEach((function(e){$("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(h.jsx)("div",{children:Object(h.jsxs)(ie,{children:[Object(h.jsx)("h1",{children:"Success!"}),Object(h.jsx)("h2",{children:"Thank you for your purchase!"}),Object(h.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var ke=function(){var e,t=Object(K.a)(q).data;return t&&(e=t.user),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container my-1",children:[Object(h.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(h.jsxs)("div",{className:"my-2",children:[Object(h.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(h.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var c=e._id,n=e.image,a=e.name,r=e.price;return Object(h.jsxs)("div",{className:"card px-1 py-1",children:[Object(h.jsxs)(o.b,{to:"/products/".concat(c),children:[Object(h.jsx)("img",{alt:a,src:"/images/".concat(n)}),Object(h.jsx)("p",{children:a})]}),Object(h.jsx)("div",{children:Object(h.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})},_e=Object(d.a)({uri:"/graphql"}),Ce=Object(m.a)((function(e,t){var c=t.headers,n=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},c),{},{authorization:n?"Bearer ".concat(n):""})}})),Se=new j.a({link:Ce.concat(_e),cache:new b.a});var Te=function(){return Object(h.jsx)(u.a,{client:Se,children:Object(h.jsx)(o.a,{children:Object(h.jsx)("div",{children:Object(h.jsxs)(I,{children:[Object(h.jsx)(ye,{}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",component:O}),Object(h.jsx)(l.a,{exact:!0,path:"/gallery",component:ce}),Object(h.jsx)(l.a,{exact:!0,path:"/about",component:p}),Object(h.jsx)(l.a,{exact:!0,path:"/contact",component:x}),Object(h.jsx)(l.a,{exact:!0,path:"/login",component:fe}),Object(h.jsx)(l.a,{exact:!0,path:"/signup",component:ve}),Object(h.jsx)(l.a,{exact:!0,path:"/success",component:Ne}),Object(h.jsx)(l.a,{exact:!0,path:"/orderHistory",component:ke}),Object(h.jsx)(l.a,{exact:!0,path:"/products/:id",component:ne}),Object(h.jsx)(l.a,{component:oe})]}),Object(h.jsx)(we,{})]})})})})},Ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c(89);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(Te,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ae(t,e)}))}}()}},[[90,1,2]]]);
//# sourceMappingURL=main.70914e41.chunk.js.map