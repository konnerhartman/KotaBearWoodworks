(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{100:function(e,t,c){},108:function(e,t,c){},114:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(37),r=c.n(s),i=(c(100),c(4)),o=c(14),l=c(17),d=c(89),j=c(93),b=c(131),m=c(127),u=c(88),h=c.p+"static/media/KBWW-black.7a191c9c.png",O=c(0),x=function(){return Object(O.jsxs)("div",{className:"jumbotron p-5 row text-center",children:[Object(O.jsx)("div",{className:"col-1 d-none d-sm-block"}),Object(O.jsx)("div",{className:"col-5 d-none d-sm-block",children:Object(O.jsx)("img",{src:h,alt:"KBWW Logo",className:"home-logo"})}),Object(O.jsxs)("div",{className:"col-lg-5 col-sm-12 p-3",children:[Object(O.jsxs)("div",{className:"intro",children:[Object(O.jsx)("h2",{children:Object(O.jsx)("span",{children:"Welcome,"})}),Object(O.jsx)("p",{children:"To Kota Bear Woodworks."}),Object(O.jsx)("p",{className:"m-0",children:"Custom handmade goods created in DFW, Texas."}),Object(O.jsx)("p",{className:"m-0",children:"Take a look at my gallery to see a few items I have built."})]}),Object(O.jsx)(o.b,{className:"btn btn-secondary btn-lg m-4",to:"/gallery",children:"Gallery"})]}),Object(O.jsx)("div",{className:"col-1 d-none d-sm-block"})]})},p=function(){return Object(O.jsxs)("div",{className:"about row",children:[Object(O.jsx)("div",{className:"col-5"}),Object(O.jsxs)("aside",{className:"p-3 col-6 text-center text-white",children:[Object(O.jsx)("h2",{className:"p-2",children:Object(O.jsx)("span",{children:"About Kota Bear Woodworks"})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:'My name is Kevin. I have been woodworking since I was a young man. In the beginning I did it for work, but as time went on I discovered that it was a true passion. With this revelation, I made the moved from woodworking as a "job" onto something that I love; creating art. Wether that be repurposing old items to make them usable and beautiful again, building custom furniture, adding exciting new features to homes, or any and everything you could imagine, it seems I can and have done it all!'}),Object(O.jsxs)("p",{children:["For any inquiries about pricing or custom pieces, please feel free to",Object(O.jsx)(o.b,{className:"p-1 text-white",to:"/contact",children:"contact me."})]})]})]}),Object(O.jsx)("div",{className:"col-1"})]})},g=c(90),f=c(21),v=c(23),N=function(){return Object(O.jsx)("div",{className:"contact row text-cetner",children:Object(O.jsx)("section",{className:"mb-4 text-white",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-md-6 p-3",children:[Object(O.jsx)("h2",{className:"h1-responsive font-weight-bold text-center my-4",children:Object(O.jsx)("span",{children:"Reach Out"})}),Object(O.jsx)("p",{className:"text-center w-responsive mx-auto",children:"Do you have any questions about pricing? Want to discuss custom pieces? Please do not hesitate to contact me directly."}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g.a.sendForm("service_cu1kehw","template_3p56679",e.target,"sGi0Fy7UX2yCkogHD").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},id:"contact-form",name:"contact-form",action:"mail.php",method:"POST",children:[Object(O.jsxs)("div",{className:"row mb-3",children:[Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"md-form mb-0",children:[Object(O.jsx)("input",{type:"text",id:"name",name:"name",className:"form-control",required:!0}),Object(O.jsx)("label",{className:"",children:"Your name"})]})}),Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"md-form mb-0",children:[Object(O.jsx)("input",{type:"text",id:"email",name:"email",className:"form-control",required:!0}),Object(O.jsx)("label",{className:"",children:"Your email"})]})})]}),Object(O.jsx)("div",{className:"row  mb-3",children:Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsxs)("div",{className:"md-form mb-0",children:[Object(O.jsx)("input",{type:"text",id:"subject",name:"subject",className:"form-control",required:!0}),Object(O.jsx)("label",{className:"",children:"Subject"})]})})}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsxs)("div",{className:"md-form",children:[Object(O.jsx)("textarea",{type:"text",id:"message",name:"message",rows:"2",className:"form-control md-textarea",required:!0}),Object(O.jsx)("label",{children:"Your message"})]})}),Object(O.jsx)("div",{className:"text-end",children:Object(O.jsxs)("button",{className:"btn btn-secondary px-4",type:"submit",children:["Send ",Object(O.jsx)(f.a,{icon:v.c})]})})]})]})]})})})})})},y=c(7),w=c(9),k=c(30),_="UPDATE_PRODUCTS",C="ADD_TO_CART",S="ADD_MULTIPLE_TO_CART",T="REMOVE_FROM_CART",E="TOGGLE_CART",A="UPDATE_CATEGORIES",W="UPDATE_CURRENT_CATEGORY",L=function(e,t){switch(t.type){case _:return Object(i.a)(Object(i.a)({},e),{},{products:Object(k.a)(t.products)});case C:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(k.a)(e.cart),[t.product])});case S:return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object(k.a)(e.cart),Object(k.a)(t.products))});case T:var c=e.cart.filter((function(e){return e._id!==t._id}));return Object(i.a)(Object(i.a)({},e),{},{cartOpen:c.length>0,cart:c});case"CLEAR_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!1,cart:[]});case E:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!e.cartOpen});case A:return Object(i.a)(Object(i.a)({},e),{},{categories:Object(k.a)(t.categories)});case W:return Object(i.a)(Object(i.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var I=["value"],D=Object(a.createContext)(),P=D.Provider,R=function(e){e.value;var t,c=Object(w.a)(e,I),n=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(a.useReducer)(L,t)),s=Object(y.a)(n,2),r=s[0],o=s[1];return Object(O.jsx)(P,Object(i.a)({value:[r,o]},c))},F=function(){return Object(a.useContext)(D)};function $(e,t,c){return new Promise((function(a,n){var s,r,i,o=window.indexedDB.open("Kota Bear Woodworks",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(n){switch(s=o.result,r=s.transaction(e,"readwrite"),i=r.objectStore(e),s.onerror=function(e){console.log("error",e)},t){case"put":i.put(c),a(c);break;case"get":var l=i.getAll();l.onsuccess=function(){a(l.result)};break;case"delete":i.delete(c._id);break;default:console.log("No valid method")}r.oncomplete=function(){s.close()}}}))}var B,U,G,K,q,M=function(e){var t=F(),c=Object(y.a)(t,2),a=c[0],n=c[1],s=e.image,r=e.name,l=e._id,d=e.availability,j=a.cart;return Object(O.jsx)("div",{className:"card item-card p-2 m-2 d-inline-flex shadow",children:Object(O.jsxs)("div",{children:[Object(O.jsxs)(o.b,{to:"/products/".concat(l),className:"text-decoration-none",children:[Object(O.jsx)("img",{className:"card-img-top gallery-img",alt:r,src:"/images/".concat(s)}),Object(O.jsxs)("div",{className:"card-body text-dark ",children:[Object(O.jsx)("h5",{className:"card-title",children:r}),Object(O.jsxs)("p",{className:"card-text",children:["Available: ",Object(O.jsx)("span",{className:"font-weight-bold",children:d})]})]})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:"btn btn-primary",onClick:function(){var t=j.find((function(e){return e._id===l}));t?$("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1})):(n({type:C,product:Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})}),$("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})))},children:"Add to favorites"})})]})})},Q=c(123),Y=c(39),H=c(130),J=Object(H.a)(B||(B=Object(Y.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      image\n      availability\n      category {\n        _id\n      }\n    }\n  }\n"]))),z=(Object(H.a)(U||(U=Object(Y.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),Object(H.a)(G||(G=Object(Y.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      availability\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(H.a)(K||(K=Object(Y.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"]))));Object(H.a)(q||(q=Object(Y.a)(["\n  {\n    user {\n      firstName\n      lastName\n    }\n  }\n"])));var V=function(){var e=F(),t=Object(y.a)(e,2),c=t[0],n=t[1],s=c.currentCategory,r=Object(Q.a)(J),i=r.loading,l=r.data;return Object(a.useEffect)((function(){l?(n({type:_,products:l.products}),l.products.forEach((function(e){$("products","put",e)}))):i||$("products","get").then((function(e){n({type:_,products:e})}))}),[l,i,n]),Object(O.jsxs)("div",{className:"mt-2 text-center",children:[Object(O.jsx)("h2",{className:"p-2",children:Object(O.jsx)("span",{children:"My Pieces"})}),c.products.length?Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["For any inquiries about pricing or custom pieces, please feel free to",Object(O.jsx)(o.b,{className:"p-1 text-dark",to:"/contact",children:"contact me."})]}),(s?c.products.filter((function(e){return e.category._id===s})):c.products).map((function(e){return Object(O.jsx)(M,{_id:e._id,image:e.image,name:e.name,availability:e.availability},e._id)}))]}):Object(O.jsx)("h3",{children:"I haven't added any products yet!"}),i?Object(O.jsx)(f.a,{className:"spinner",icon:v.d}):null]})};var X=function(){var e=F(),t=Object(y.a)(e,2),c=t[0],n=t[1],s=c.categories,r=Object(Q.a)(z),i=r.loading,o=r.data;return Object(a.useEffect)((function(){o?(n({type:A,categories:o.categories}),o.categories.forEach((function(e){$("categories","put",e)}))):i||$("categories","get").then((function(e){n({type:A,categories:e})}))}),[o,i,n]),Object(O.jsxs)("div",{className:"text-center",children:[Object(O.jsx)("h2",{className:"p-1",children:"Categories:"}),s.map((function(e){return Object(O.jsx)("button",{className:"btn btn-secondary mx-2",onClick:function(){var t;t=e._id,n({type:W,currentCategory:t})},children:e.name},e._id)}))]})},Z=c(43),ee=c(29),te=c.n(ee),ce=function(e){var t=e.item,c=F(),a=Object(y.a)(c,2)[1];return Object(O.jsxs)("div",{className:"d-inline-flex",children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:t.name}),Object(O.jsx)("div",{children:Object(O.jsx)(f.a,{"aria-label":"trash",onClick:function(){return function(e){a({type:T,_id:e._id}),$("cart","delete",Object(i.a)({},e))}(t)},icon:v.e})})]})]})},ae=(c(108),function(){var e=F(),t=Object(y.a)(e,2),c=t[0],n=t[1];function s(){n({type:E})}return Object(a.useEffect)((function(){function e(){return(e=Object(Z.a)(te.a.mark((function e(){var t;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$("cart","get");case 2:t=e.sent,n({type:S,products:Object(k.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.cart.length||function(){e.apply(this,arguments)}()}),[c.cart.length,n]),c.cartOpen?Object(O.jsxs)("div",{className:"cart bg-light",children:[Object(O.jsx)(f.a,{className:"close",onClick:s,icon:v.f}),Object(O.jsx)("h2",{className:"px-2 text-center pb-3",children:"Liked items"}),c.cart.length?Object(O.jsx)("div",{children:c.cart.map((function(e){return Object(O.jsx)(ce,{item:e},e._id)}))}):Object(O.jsx)("h3",{className:"text-center",children:"You haven't liked anything yet!"})]}):Object(O.jsx)("div",{className:"cart-closed text-center",onClick:s,children:Object(O.jsx)(f.a,{"aria-label":"trash",icon:v.b,className:"text-white p-2 pb-0"})})}),ne=function(){return Object(O.jsxs)("div",{className:"gallery",children:[Object(O.jsx)(X,{}),Object(O.jsx)(V,{}),Object(O.jsx)(ae,{})]})},se=function(e){var t=e.item,c=F(),a=Object(y.a)(c,2)[1];return Object(O.jsxs)("div",{className:"card d-inline-flex m-2 p-2 shadow-lg",children:[Object(O.jsx)(o.b,{to:"/products/".concat(t._id),children:Object(O.jsx)("img",{className:"card-img-top favorite-img",src:"/images/".concat(t.image),alt:""})}),Object(O.jsxs)("div",{className:"card-body row",children:[Object(O.jsx)(o.b,{className:"col-10 text-dark text-decoration-none",to:"/products/".concat(t._id),children:Object(O.jsx)("h5",{className:"p-0 m-0",children:t.name})}),Object(O.jsx)(f.a,{className:"col-1 p-1","aria-label":"trash",onClick:function(){return function(e){a({type:T,_id:e._id}),$("cart","delete",Object(i.a)({},e))}(t)},icon:v.e})]})]})},re=function(){var e=F(),t=Object(y.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(Z.a)(te.a.mark((function e(){var t;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$("cart","get");case 2:t=e.sent,n({type:S,products:Object(k.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.cart.length||function(){e.apply(this,arguments)}()}),[c.cart.length,n]),Object(O.jsxs)("div",{className:"likes bg-white text-center favorites pb-2",children:[Object(O.jsx)("h2",{className:"p-3 text-light",children:Object(O.jsx)("span",{children:"Favorites"})}),c.cart.length?Object(O.jsx)("div",{children:c.cart.map((function(e){return Object(O.jsx)(se,{item:e},e._id)}))}):Object(O.jsx)("h3",{className:"p-5 text-white",children:"You haven't liked anything yet!"})]})},ie=c(86);var oe,le,de=function(){var e=F(),t=Object(y.a)(e,2),c=t[0],n=t[1],s=Object(l.f)().id,r=Object(a.useState)({}),d=Object(y.a)(r,2),j=d[0],b=d[1],m=Object(Q.a)(J),u=m.loading,h=m.data,x=c.products,p=c.cart;return Object(a.useEffect)((function(){x.length?b(x.find((function(e){return e._id===s}))):h?(n({type:_,products:h.products}),h.products.forEach((function(e){$("products","put",e)}))):u||$("products","get").then((function(e){n({type:_,products:e})}))}),[x,h,u,n,s]),Object(O.jsxs)("div",{className:"gallery",children:[j&&p?Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:Object(O.jsxs)(o.b,{to:"/gallery",className:"backBtn p-2 text-dark",children:[Object(O.jsx)(f.a,{icon:v.a})," Back to Gallery"]})}),Object(O.jsxs)("div",{className:"text-center",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("h2",{className:"col-lg-7 col-9 text-end",children:Object(O.jsx)("span",{children:j.name})}),Object(O.jsxs)("p",{className:"likeBtn col-lg-5 col-3 text-start",children:[Object(O.jsx)("button",{hidden:p.find((function(e){return e._id===j._id})),onClick:function(){var e=p.find((function(e){return e._id===s}));e?$("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1})):(n({type:C,product:Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})}),$("cart","put",Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})))},children:Object(O.jsx)(f.a,{icon:ie.a})}),Object(O.jsx)("button",{hidden:!p.find((function(e){return e._id===j._id})),onClick:function(){n({type:T,_id:j._id}),$("cart","delete",Object(i.a)({},j))},children:Object(O.jsx)(f.a,{icon:v.b})})]})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-lg-6 col-sm-12 p-2",children:Object(O.jsx)("img",{className:"rounded shadow-lg detail-img",src:"/images/".concat(j.image),alt:j.name})}),Object(O.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[Object(O.jsx)("h4",{children:"Available:"}),Object(O.jsx)("p",{className:"m-0 pb-4 detail-text",children:Object(O.jsx)("span",{children:j.availability})}),Object(O.jsx)("h4",{children:"Details:"}),Object(O.jsx)("p",{className:"m-0 detail-text",children:j.description})]})]})]})]}):null,u?Object(O.jsx)(f.a,{className:"spinner",icon:v.d}):null,Object(O.jsx)(ae,{})]})},je=function(){return Object(O.jsx)("div",{className:"noMatch text-center",children:Object(O.jsx)("div",{className:"noMatch-bg",children:Object(O.jsxs)("div",{className:"p-5",children:[Object(O.jsx)("h2",{className:"not-found",children:Object(O.jsx)("span",{children:"404: PAGE NOT FOUND"})}),Object(O.jsx)(o.b,{to:"/",children:Object(O.jsx)("button",{className:"btn btn-dark m-2",children:"Go To Home"})})]})})})},be=c(11),me=c(125),ue=Object(H.a)(oe||(oe=Object(Y.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),he=Object(H.a)(le||(le=Object(Y.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),Oe=c(42),xe=c(41),pe=c(75),ge=c.n(pe),fe=new(function(){function e(){Object(Oe.a)(this,e)}return Object(xe.a)(e,[{key:"getProfile",value:function(){return ge()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return ge()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());var ve=function(e){var t=Object(a.useState)({email:"",password:""}),c=Object(y.a)(t,2),n=c[0],s=c[1],r=Object(me.a)(ue),l=Object(y.a)(r,2),d=l[0],j=l[1].error,b=function(){var e=Object(Z.a)(te.a.mark((function e(t){var c,a;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:n.email,password:n.password}});case 4:c=e.sent,a=c.data.login.token,fe.login(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.target,c=t.name,a=t.value;s(Object(i.a)(Object(i.a)({},n),{},Object(be.a)({},c,a)))};return Object(O.jsx)("div",{className:"login text-white",children:Object(O.jsxs)("div",{className:"row p-5",children:[Object(O.jsx)("div",{className:"col-md-3"}),Object(O.jsxs)("div",{className:"text-center col-md-6",children:[Object(O.jsx)("h2",{children:Object(O.jsx)("span",{children:"Login"})}),Object(O.jsx)("p",{className:"",children:"Login to your account to save/view your favorite pieces from the gallery."}),Object(O.jsxs)("form",{className:"",onSubmit:b,children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(O.jsx)("input",{className:"form-control",placeholder:"youremail@email.com",name:"email",type:"email",id:"email",onChange:m})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"pwd",children:"Password"}),Object(O.jsx)("input",{className:"form-control",placeholder:"******",name:"password",type:"password",id:"pwd",onChange:m})]}),j?Object(O.jsx)("div",{className:"rounded m-3 bg-danger font-weight-bold",children:Object(O.jsx)("p",{className:"text-white",children:"The provided credentials are incorrect"})}):null,Object(O.jsx)("button",{className:"btn btn-primary m-2",type:"submit",children:"Submit"})]}),Object(O.jsxs)("p",{children:["Don't have an account?",Object(O.jsx)("br",{}),Object(O.jsx)(o.b,{to:"/signup",children:Object(O.jsx)("b",{children:"Go to Signup"})})]})]}),Object(O.jsx)("div",{className:"col-md-3"})]})})};var Ne=function(e){var t=Object(a.useState)({email:"",password:""}),c=Object(y.a)(t,2),n=c[0],s=c[1],r=Object(me.a)(he),l=Object(y.a)(r,1)[0],d=function(){var e=Object(Z.a)(te.a.mark((function e(t){var c,a;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:n.email,password:n.password,firstName:n.firstName,lastName:n.lastName}});case 3:c=e.sent,a=c.data.addUser.token,fe.login(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,c=t.name,a=t.value;s(Object(i.a)(Object(i.a)({},n),{},Object(be.a)({},c,a)))};return Object(O.jsx)("div",{className:"login text-white",children:Object(O.jsxs)("div",{className:"row p-5",children:[Object(O.jsx)("div",{className:"col-md-3"}),Object(O.jsxs)("div",{className:"text-center col-md-6",children:[Object(O.jsx)("h2",{children:Object(O.jsx)("span",{children:"Signup"})}),Object(O.jsx)("p",{className:"",children:"Create an account to save/view your favorite pieces from the gallery."}),Object(O.jsxs)("form",{onSubmit:d,children:[Object(O.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(O.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(O.jsx)("input",{className:"text-center form-control",placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:j})]}),Object(O.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(O.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(O.jsx)("input",{className:"text-center form-control",placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:j})]}),Object(O.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email"}),Object(O.jsx)("input",{className:"text-center form-control",placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(O.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(O.jsx)("label",{htmlFor:"pwd",children:"Password"}),Object(O.jsx)("input",{className:"text-center form-control",placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),Object(O.jsx)("button",{className:"btn btn-primary m-2",type:"submit",children:"Submit"})]}),Object(O.jsxs)("p",{children:["Already have an account?",Object(O.jsx)("br",{}),Object(O.jsx)(o.b,{className:"",to:"/login",children:Object(O.jsx)("b",{children:"Go to Login"})})]})]}),Object(O.jsx)("div",{className:"col-md-3"})]})})},ye=c(129),we=c(128),ke=c(126),_e=c.p+"static/media/KBWW-white.fc3d5820.png";var Ce=function(){return Object(O.jsxs)("nav",{className:"navbar navbar-light bg-dark p-3 d-flex",children:[Object(O.jsx)("div",{className:"h1",children:Object(O.jsxs)(o.b,{className:"text-decoration-none d-flex",to:"/",children:[Object(O.jsx)("img",{className:"justify-content-center",src:_e,alt:"Kota Bear Woodworks Logo",height:"95px"}),Object(O.jsx)("h1",{className:"text-white pt-4 px-3 d-none d-sm-block",children:Object(O.jsx)("span",{children:"KOTA BEAR WOODWORKS"})})]})}),Object(O.jsx)(we.a,{className:"nav-links",collapseOnSelect:!0,fixed:"",expand:"lg",bg:"dark",variant:"dark",children:Object(O.jsxs)(ke.a,{className:"",children:[Object(O.jsx)(we.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsx)(we.a.Collapse,{id:"responsive-navbar-nav",children:Object(O.jsxs)(ye.a,{children:[Object(O.jsx)(ye.a.Link,{className:"text-white",href:"/about",children:"About"}),Object(O.jsx)(ye.a.Link,{className:"text-white",href:"/gallery",children:"Gallery"}),Object(O.jsx)(ye.a.Link,{className:"text-white",href:"/contact",children:"Contact"}),fe.loggedIn()?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ye.a.Link,{className:"text-white",href:"/favorites",children:"Favorites"}),Object(O.jsx)(ye.a.Link,{className:"text-white",href:"/",onClick:function(){return fe.logout()},children:"Logout"})]}):Object(O.jsx)(ye.a.Link,{className:"text-white",href:"/login",children:"Login"})]})})]})})]})},Se=c.p+"static/media/KH-LOGO.92005212.png";var Te=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("footer",{className:"text-white sticky-bottom bg-dark",children:[Object(O.jsxs)("div",{className:"row px-2 pt-3 row text-center",children:[Object(O.jsx)("p",{className:"col-lg-4 col-sm-12 p-2",children:"\xa9 2022 Copyright"}),Object(O.jsx)("div",{className:"col-lg-2 d-none d-sm-block"}),Object(O.jsx)("div",{className:"col-lg-2 d-none d-sm-block"}),Object(O.jsxs)("p",{className:"col-lg-4 col-sm-12 p-2",children:["Website built by:",Object(O.jsx)("a",{className:"text-decoration-none p-2",href:"https://github.com/konnerhartman",children:Object(O.jsx)("img",{height:"18rem",src:Se,alt:"Konner Hartman Logo"})})]})]}),Object(O.jsx)("div",{className:""})]})})},Ee=Object(d.a)({uri:"/graphql"}),Ae=Object(u.a)((function(e,t){var c=t.headers,a=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},c),{},{authorization:a?"Bearer ".concat(a):""})}})),We=new j.a({link:Ae.concat(Ee),cache:new b.a});var Le=function(){return Object(O.jsx)(m.a,{client:We,children:Object(O.jsx)(o.a,{children:Object(O.jsx)("div",{children:Object(O.jsxs)(R,{children:[Object(O.jsx)(Ce,{}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",component:x}),Object(O.jsx)(l.a,{exact:!0,path:"/gallery",component:ne}),Object(O.jsx)(l.a,{exact:!0,path:"/favorites",component:re}),Object(O.jsx)(l.a,{exact:!0,path:"/about",component:p}),Object(O.jsx)(l.a,{exact:!0,path:"/contact",component:N}),Object(O.jsx)(l.a,{exact:!0,path:"/login",component:ve}),Object(O.jsx)(l.a,{exact:!0,path:"/signup",component:Ne}),Object(O.jsx)(l.a,{exact:!0,path:"/products/:id",component:de}),Object(O.jsx)(l.a,{component:je})]}),Object(O.jsx)(Te,{})]})})})})},Ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function De(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c(113);r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(Le,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var a=c.headers.get("content-type");404===c.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):De(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):De(t,e)}))}}()}},[[114,1,2]]]);
//# sourceMappingURL=main.dffc64e2.chunk.js.map