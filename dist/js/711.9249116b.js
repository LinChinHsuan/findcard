"use strict";(self["webpackChunkfindcard"]=self["webpackChunkfindcard"]||[]).push([[711],{958:function(s,t,e){e.d(t,{Z:function(){return p}});var n=e(3396);const o={class:"bg-primary text-center text-white py-3"},a=(0,n._)("p",{class:"mb-0"},"Copyright © 2022 ChinHsuan Lin",-1),r=(0,n._)("p",{class:"mb-0"},"個人練習作品，非商業用途，素材來源：unsplash、pexels",-1),i=[a,r];function l(s,t){return(0,n.wg)(),(0,n.iD)("footer",o,i)}var c=e(89);const d={},u=(0,c.Z)(d,[["render",l]]);var p=u},711:function(s,t,e){e.r(t),e.d(t,{default:function(){return x}});var n=e(3396),o=e(9242);const a={class:"bg-light vh-100"},r={class:"container h-100 py-5"},i={class:"row h-100 flex-nowrap flex-column justify-content-center"},l=(0,n._)("div",{class:"col-12"},[(0,n._)("h1",{class:"d-flex align-items-center justify-content-center mt-3 mb-4"},[(0,n._)("span",{class:"pb-2 me-2 fs-1 fw-bolder"},"管理員登入"),(0,n._)("span",{class:"fs-4 text-primary align-self-end"},"/ Login")])],-1),c={class:"col-10 col-sm-8 col-md-6 col-xl-4 mx-auto"},d=(0,n._)("p",{class:"fs-4 mt-4 mb-3 font-weight-normal text-center"}," 請輸入帳號密碼 ",-1),u={class:"form-floating"},p=(0,n._)("label",{for:"floatingInput"},"Email address",-1),f={class:"form-floating"},m=(0,n._)("label",{for:"floatingPassword"},"Password",-1);function h(s,t,e,h,w,g){const b=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",a,[(0,n._)("div",r,[(0,n._)("div",i,[l,(0,n._)("div",c,[d,(0,n._)("div",u,[(0,n.wy)((0,n._)("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com","onUpdate:modelValue":t[0]||(t[0]=s=>w.user.username=s)},null,512),[[o.nr,w.user.username]]),p]),(0,n._)("div",f,[(0,n.wy)((0,n._)("input",{type:"password",class:"form-control border-top-0",id:"floatingPassword",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=s=>w.user.password=s)},null,512),[[o.nr,w.user.password]]),m]),(0,n._)("button",{class:"btn btn-primary text-white fs-5 fw-bold w-100 my-4 py-2",type:"button",onClick:t[2]||(t[2]=(...s)=>g.signin&&g.signin(...s))}," 登入 ")])])])]),(0,n.Wm)(b,{class:"position-fixed bottom-0 w-100"})],64)}var w=e(958),g={data(){return{user:{username:"",password:""}}},components:{Footer:w.Z},methods:{signin(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(s,this.user).then((s=>{if(s.data.success){const{token:t,expired:e}=s.data;document.cookie=`findcardCookie=${t}; expires=${new Date(e)};`,this.$router.push("/admin/products")}}))}}},b=e(89);const _=(0,b.Z)(g,[["render",h]]);var x=_}}]);
//# sourceMappingURL=711.9249116b.js.map