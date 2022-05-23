"use strict";(self["webpackChunkfindcard"]=self["webpackChunkfindcard"]||[]).push([[968],{8884:function(t,i,a){a.r(i),a.d(i,{default:function(){return At}});var e=a(3396),l=a(7139);const o=t=>((0,e.dD)("data-v-789a0357"),t=t(),(0,e.Cn)(),t),s={class:"text-end pt-4"},r={class:"table-responsive"},n={class:"table my-4"},d=o((()=>(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",{width:"120"},"分類"),(0,e._)("th",{width:"120"},"作者"),(0,e._)("th",null,"標題"),(0,e._)("th",{width:"120"},"建立時間"),(0,e._)("th",{width:"120",class:"text-center"},"是否啟用"),(0,e._)("th",{width:"120",class:"text-center"},"編輯")])],-1))),c={class:"text-center"},p={key:0,class:"text-success fw-bold"},u={key:1,class:"text-muted"},m={class:"btn-group"},v=["onClick"],b=["onClick"];function h(t,i,a,o,h,f){const _=(0,e.up)("Loading"),y=(0,e.up)("Pagination"),w=(0,e.up)("TriviaModal"),T=(0,e.up)("DelModal");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(_,{active:h.isLoading},null,8,["active"]),(0,e._)("div",s,[(0,e._)("button",{type:"button",class:"btn btn-primary fw-bold text-white",onClick:i[0]||(i[0]=t=>f.openModal(!0))},"建立新的冷知識")]),(0,e._)("div",r,[(0,e._)("table",n,[d,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(h.Trivia,(i=>((0,e.wg)(),(0,e.iD)("tr",{class:"align-middle",key:i.id},[(0,e._)("td",null,(0,l.zw)(i.category),1),(0,e._)("td",null,(0,l.zw)(i.author),1),(0,e._)("td",null,(0,l.zw)("冷知識"===i.category?i.title:i.question),1),(0,e._)("td",null,(0,l.zw)(t.$filters.date(i.create_at)),1),(0,e._)("td",c,[i.isPublic?((0,e.wg)(),(0,e.iD)("span",p,"啟用")):((0,e.wg)(),(0,e.iD)("span",u,"未起用"))]),(0,e._)("td",null,[(0,e._)("div",m,[(0,e._)("button",{class:"btn btn-outline-primary fw-bold",type:"button",onClick:t=>f.openModal(!1,i)},"編輯",8,v),(0,e._)("button",{class:"btn btn-outline-danger fw-bold",type:"button",onClick:t=>f.openDelModal(i)},"刪除",8,b)])])])))),128))])])]),(0,e.Wm)(y,{pages:h.pagination,onEmitPages:f.getTrivia},null,8,["pages","onEmitPages"]),(0,e.Wm)(w,{ref:"triviaModal",trivia:h.tempTrivia,onUpdateTrivia:f.updateTrivia},null,8,["trivia","onUpdateTrivia"]),(0,e.Wm)(T,{ref:"delModal",item:h.tempTrivia,onDelItem:f.delTrivia},null,8,["item","onDelItem"])],64)}var f=a(9242);const _=t=>((0,e.dD)("data-v-529552cc"),t=t(),(0,e.Cn)(),t),y={ref:"modal",class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"ProductModalLabel","aria-hidden":"true"},w={class:"modal-dialog modal-xl",role:"document"},T={class:"modal-content border-0"},g={class:"modal-header bg-primary text-white"},x={class:"modal-title fw-bold",id:"ProductModalLabel"},k=_((()=>(0,e._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1))),D={class:"modal-body"},A={class:"row"},C={class:"col-lg-4"},M={class:"mb-3"},U=_((()=>(0,e._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1))),$={class:"mb-3"},Q=_((()=>(0,e._)("label",{for:"customFile",class:"form-label"},"或 上傳圖片",-1))),V={key:0,class:"text-center"},P=_((()=>(0,e._)("div",{class:"spinner-border text-primary mt-5",role:"status"},[(0,e._)("span",{class:"visually-hidden"},"Loading...")],-1))),L=[P],B=["src"],I={class:"col-lg-8"},q={class:"mb-3"},z=_((()=>(0,e._)("label",{class:"btn btn-outline-primary",for:"radioTrivia"},"冷知識",-1))),F=_((()=>(0,e._)("label",{class:"btn btn-outline-primary",for:"radioQuestion"},"題目",-1))),G={class:"mb-3"},N=_((()=>(0,e._)("label",{for:"author",class:"form-label"},"作者",-1))),Z={key:0},S={class:"mb-3"},W=_((()=>(0,e._)("label",{for:"title",class:"form-label"},"標題",-1))),O={class:"mb-3"},E=_((()=>(0,e._)("label",{for:"explanation",class:"form-label"},"文章內容",-1))),H={key:1},J={class:"mb-3"},Y=_((()=>(0,e._)("label",{for:"question",class:"form-label"},"問題",-1))),j={class:"row"},K={class:"col-6 mb-3"},R=_((()=>(0,e._)("label",{for:"optionA",class:"form-label"},"答案A",-1))),X={class:"col-6 mb-3"},tt=_((()=>(0,e._)("label",{for:"option2",class:"form-label"},"答案2",-1))),it={class:"col-6 mb-3"},at=_((()=>(0,e._)("label",{for:"optionC",class:"form-label"},"答案C",-1))),et={class:"col-6 mb-3"},lt=_((()=>(0,e._)("label",{for:"optionD",class:"form-label"},"答案D",-1))),ot={class:"mb-3"},st=_((()=>(0,e._)("label",{class:"form-label w-100"},"正解",-1))),rt=_((()=>(0,e._)("label",{class:"btn btn-outline-primary",for:"radioQuestionAnswerA"},"A",-1))),nt=_((()=>(0,e._)("label",{class:"btn btn-outline-primary",for:"radioQuestionAnswerB"},"B",-1))),dt=_((()=>(0,e._)("label",{class:"btn btn-outline-primary",for:"radioQuestionAnswerC"},"C",-1))),ct=_((()=>(0,e._)("label",{class:"btn btn-outline-primary",for:"radioQuestionAnswerD"},"D",-1))),pt={class:"mb-3"},ut={class:"form-check"},mt=_((()=>(0,e._)("label",{class:"form-check-label",for:"isPublic"},"是否啟用",-1))),vt={class:"modal-footer"},bt=_((()=>(0,e._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1)));function ht(t,i,a,o,s,r){return(0,e.wg)(),(0,e.iD)("div",y,[(0,e._)("div",w,[(0,e._)("div",T,[(0,e._)("div",g,[(0,e._)("h5",x,(0,l.zw)(s.tempTrivia.id?"編輯":"新增")+(0,l.zw)("題目"===s.tempTrivia.category?"題目":"冷知識"),1),k]),(0,e._)("div",D,[(0,e._)("div",A,[(0,e._)("div",C,[(0,e._)("div",M,[U,(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":i[0]||(i[0]=t=>s.tempTrivia.imageUrl=t)},null,512),[[f.nr,s.tempTrivia.imageUrl]])]),(0,e._)("div",$,[Q,(0,e._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:i[1]||(i[1]=(...t)=>r.uploadFile&&r.uploadFile(...t))},null,544)]),s.isLoading?((0,e.wg)(),(0,e.iD)("div",V,L)):(0,e.kq)("",!0),(0,e._)("img",{class:"img-fluid",src:s.tempTrivia.imageUrl},null,8,B)]),(0,e._)("div",I,[(0,e._)("div",q,[(0,e.wy)((0,e._)("input",{ref:"radioTrivia",type:"radio",class:"btn-check",name:"radioCategory",id:"radioTrivia",autocomplete:"off","onUpdate:modelValue":i[2]||(i[2]=t=>s.tempTrivia.category=t),value:"冷知識",checked:""},null,512),[[f.G2,s.tempTrivia.category]]),z,(0,e.wy)((0,e._)("input",{ref:"radioQuestion",type:"radio",class:"btn-check",name:"radioCategory",id:"radioQuestion",autocomplete:"off","onUpdate:modelValue":i[3]||(i[3]=t=>s.tempTrivia.category=t),value:"題目"},null,512),[[f.G2,s.tempTrivia.category]]),F]),(0,e._)("div",G,[N,(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",id:"author",placeholder:"請輸入姓名","onUpdate:modelValue":i[4]||(i[4]=t=>s.tempTrivia.author=t)},null,512),[[f.nr,s.tempTrivia.author]])]),"冷知識"===this.tempTrivia.category?((0,e.wg)(),(0,e.iD)("div",Z,[(0,e._)("div",S,[W,(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":i[5]||(i[5]=t=>s.tempTrivia.title=t)},null,512),[[f.nr,s.tempTrivia.title]])]),(0,e._)("div",O,[E,(0,e.wy)((0,e._)("textarea",{type:"text",class:"form-control",id:"explanation",placeholder:"請輸入冷知識內容","onUpdate:modelValue":i[6]||(i[6]=t=>s.tempTrivia.explanation=t)},null,512),[[f.nr,s.tempTrivia.explanation]])])])):((0,e.wg)(),(0,e.iD)("div",H,[(0,e._)("div",J,[Y,(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",id:"question",placeholder:"請輸入問題","onUpdate:modelValue":i[7]||(i[7]=t=>s.tempTrivia.question=t)},null,512),[[f.nr,s.tempTrivia.question]])]),(0,e._)("div",j,[(0,e._)("div",K,[R,(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",id:"optionA",placeholder:"請輸入答案A","onUpdate:modelValue":i[8]||(i[8]=t=>s.tempTrivia.optionA=t)},null,512),[[f.nr,s.tempTrivia.optionA]])]),(0,e._)("div",X,[tt,(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",id:"optionB",placeholder:"請輸入答案B","onUpdate:modelValue":i[9]||(i[9]=t=>s.tempTrivia.optionB=t)},null,512),[[f.nr,s.tempTrivia.optionB]])]),(0,e._)("div",it,[at,(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",id:"optionC",placeholder:"請輸入答案C","onUpdate:modelValue":i[10]||(i[10]=t=>s.tempTrivia.optionC=t)},null,512),[[f.nr,s.tempTrivia.optionC]])]),(0,e._)("div",et,[lt,(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",id:"optionD",placeholder:"請輸入答案D","onUpdate:modelValue":i[11]||(i[11]=t=>s.tempTrivia.optionD=t)},null,512),[[f.nr,s.tempTrivia.optionD]])])]),(0,e._)("div",ot,[st,(0,e.wy)((0,e._)("input",{type:"radio",class:"btn-check",name:"radioQuestionAnswer",id:"radioQuestionAnswerA",autocomplete:"off","onUpdate:modelValue":i[12]||(i[12]=t=>s.tempTrivia.answer=t),value:"A",checked:""},null,512),[[f.G2,s.tempTrivia.answer]]),rt,(0,e.wy)((0,e._)("input",{type:"radio",class:"btn-check",name:"radioQuestionAnswer",id:"radioQuestionAnswerB",autocomplete:"off","onUpdate:modelValue":i[13]||(i[13]=t=>s.tempTrivia.answer=t),value:"B"},null,512),[[f.G2,s.tempTrivia.answer]]),nt,(0,e.wy)((0,e._)("input",{type:"radio",class:"btn-check",name:"radioQuestionAnswer",id:"radioQuestionAnswerC",autocomplete:"off","onUpdate:modelValue":i[14]||(i[14]=t=>s.tempTrivia.answer=t),value:"C"},null,512),[[f.G2,s.tempTrivia.answer]]),dt,(0,e.wy)((0,e._)("input",{type:"radio",class:"btn-check",name:"radioQuestionAnswer",id:"radioQuestionAnswerD",autocomplete:"off","onUpdate:modelValue":i[15]||(i[15]=t=>s.tempTrivia.answer=t),value:"D"},null,512),[[f.G2,s.tempTrivia.answer]]),ct])])),(0,e._)("div",pt,[(0,e._)("div",ut,[(0,e.wy)((0,e._)("input",{class:"form-check-input",type:"checkbox",id:"isPublic","onUpdate:modelValue":i[16]||(i[16]=t=>s.tempTrivia.isPublic=t)},null,512),[[f.e8,s.tempTrivia.isPublic]]),mt])])])])]),(0,e._)("div",vt,[bt,(0,e._)("button",{type:"button",class:"btn btn-primary text-white",onClick:i[17]||(i[17]=i=>t.$emit("updateTrivia",s.tempTrivia))},"確認")])])])],512)}var ft=a(1339),_t={props:{trivia:{type:Object,default(){return{}}}},watch:{trivia(){this.tempTrivia=JSON.parse(JSON.stringify(this.trivia)),this.tempTrivia.id?(this.tempTrivia.content="此API此欄不能為空","冷知識"===this.tempTrivia.category?this.$refs.radioQuestion.disabled=!0:this.$refs.radioTrivia.disabled=!0):this.tempTrivia={category:"冷知識",create_at:Math.floor((new Date).getTime()/1e3),isPublic:!1,content:"此API此欄不能為空",answer:"A"}}},data(){return{modal:{},tempTrivia:{},isLoading:!1}},methods:{uploadFile(){this.isLoading=!0;const t=this.$refs.fileInput.files[0],i=new FormData;i.append("file-to-upload",t);const a="https://vue3-course-api.hexschool.io/api/vuefindcard/admin/upload";this.$http.post(a,i).then((t=>{t.data.success&&(this.tempTrivia.imageUrl=t.data.imageUrl),this.isLoading=!1}))}},mixins:[ft.Z]},yt=a(89);const wt=(0,yt.Z)(_t,[["render",ht],["__scopeId","data-v-529552cc"]]);var Tt=wt,gt=a(7923),xt=a(3159),kt={data(){return{Trivia:{},tempTrivia:{},pagination:{},isNew:!1,isLoading:!1}},components:{TriviaModal:Tt,DelModal:gt.Z,Pagination:xt.Z},methods:{getTrivia(t=1){const i=`https://vue3-course-api.hexschool.io/api/vuefindcard/admin/articles?page=${t}`;this.isLoading=!0,this.$http.get(i).then((t=>{this.isLoading=!1,t.data.success&&(this.Trivia=t.data.articles,this.pagination=t.data.pagination)}))},openModal(t,i){this.tempTrivia=t?{}:{...i},this.isNew=t,this.$refs.triviaModal.showModal()},openDelModal(t){this.tempTrivia=t,this.$refs.delModal.showModal()},updateTrivia(t){this.$refs.triviaModal.hideModal(),this.tempTrivia=t,"題目"===this.tempTrivia.category&&(this.tempTrivia.title=this.tempTrivia.question);let i="https://vue3-course-api.hexschool.io/api/vuefindcard/admin/article",a="post";this.isNew||(i=`https://vue3-course-api.hexschool.io/api/vuefindcard/admin/article/${t.id}`,a="put"),this.$http[a](i,{data:this.tempTrivia}).then((t=>{this.getTrivia();const i="冷知識"===this.tempTrivia.category?"冷知識":"題目";this.$httpMessageState(t,"post"===a?`新增${i}`:`更新${i}`)}))},delTrivia(t){const i=`https://vue3-course-api.hexschool.io/api/vuefindcard/admin/article/${t.id}`;this.$http.delete(i).then((t=>{this.getTrivia(),this.$refs.delModal.hideModal(),this.$httpMessageState(t,"刪除冷知識")}))}},created(){this.getTrivia()}};const Dt=(0,yt.Z)(kt,[["render",h],["__scopeId","data-v-789a0357"]]);var At=Dt}}]);
//# sourceMappingURL=968.cf18ba2d.js.map