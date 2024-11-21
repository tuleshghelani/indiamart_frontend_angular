"use strict";(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[963],{3963:(Z,g,i)=>{i.r(g),i.d(g,{FollowupModule:()=>Q});var p=i(177),h=i(9012),f=i(6440),c=i(9159),m=i(2042),F=i(951),O=i(980),t=i(4438),P=i(9114),s=i(9417),M=i(7749),u=i(6467),C=i(9631),w=i(2798),b=i(6600),_=i(8834),x=i(765);const S=()=>[5,10,20,50];function v(o,l){if(1&o&&(t.j41(0,"mat-option",26),t.EFF(1),t.k0s()),2&o){const n=l.$implicit;t.Y8G("value",n.value),t.R7$(),t.SpI(" ",n.viewValue," ")}}function D(o,l){1&o&&(t.j41(0,"th",27),t.EFF(1," No. "),t.k0s())}function y(o,l){if(1&o&&(t.j41(0,"td",28),t.EFF(1),t.k0s()),2&o){const n=l.index,e=t.XpG();t.R7$(),t.SpI(" ",(e.currentPage-1)*e.pageSize+n+1," ")}}function E(o,l){1&o&&(t.j41(0,"th",29),t.EFF(1," Sender name "),t.k0s())}function k(o,l){if(1&o&&(t.j41(0,"td",28),t.EFF(1),t.k0s()),2&o){const n=l.$implicit;t.R7$(),t.SpI(" ",n.sender_name," ")}}function R(o,l){1&o&&(t.j41(0,"th",29),t.EFF(1," Description "),t.k0s())}function j(o,l){if(1&o&&(t.j41(0,"td",28),t.EFF(1),t.k0s()),2&o){const n=l.$implicit;t.R7$(),t.SpI(" ",n.description," ")}}function T(o,l){1&o&&(t.j41(0,"th",29),t.EFF(1," Status "),t.k0s())}function I(o,l){if(1&o&&(t.j41(0,"td",28),t.EFF(1),t.k0s()),2&o){const n=l.$implicit,e=t.XpG();t.R7$(),t.SpI(" ",e.getStatusText(n.follow_up_status)," ")}}function $(o,l){1&o&&(t.j41(0,"th",29),t.EFF(1," Next Action Date "),t.k0s())}function N(o,l){if(1&o&&(t.j41(0,"td",28),t.EFF(1),t.nI1(2,"date"),t.k0s()),2&o){const n=l.$implicit;t.R7$(),t.SpI(" ",t.i5U(2,1,n.next_action_date,"medium")," ")}}function G(o,l){1&o&&(t.j41(0,"th",29),t.EFF(1," Created At "),t.k0s())}function U(o,l){if(1&o&&(t.j41(0,"td",28),t.EFF(1),t.nI1(2,"date"),t.k0s()),2&o){const n=l.$implicit;t.R7$(),t.SpI(" ",t.i5U(2,1,n.created_at,"medium")," ")}}function V(o,l){1&o&&(t.j41(0,"th",27),t.EFF(1," Action "),t.k0s())}function z(o,l){if(1&o){const n=t.RV6();t.j41(0,"td",28)(1,"button",30),t.bIt("click",function(){const a=t.eBV(n).$implicit,r=t.XpG();return t.Njj(r.viewEnquiry(a.enquiry_id))}),t.EFF(2,"View Enquiry"),t.k0s()()}}function B(o,l){1&o&&t.nrm(0,"tr",31)}function Y(o,l){1&o&&t.nrm(0,"tr",32)}let A=(()=>{class o{constructor(n,e,a,r){this.followUpService=n,this.formBuilder=e,this.router=a,this.loaderService=r,this.displayedColumns=["id","sender_name","description","follow_up_status","next_action_date","created_at","action"],this.dataSource=new c.I6([]),this.totalRecords=0,this.currentPage=1,this.pageSize=10,this.orderBy="next_action_date",this.statusOptions=F.N,this.filterForm=this.formBuilder.group({search:[""],enquiryStatus:[""],startDate:[""],endDate:[""]})}ngOnInit(){this.loadFollowUps()}loadFollowUps(){const n="followups-loader";this.loaderService.start(n);const e=this.filterForm.value,a={currentPage:this.currentPage,perPageRecord:this.pageSize,search:e.search,enquiryStatus:e.enquiryStatus,orderBy:this.orderBy,startDate:e.startDate?this.formatDate(new Date(e.startDate)):null,endDate:e.endDate?this.formatDate(new Date(e.endDate)):null};this.followUpService.searchFollowUps(a).pipe((0,O.j)(()=>this.loaderService.stop(n))).subscribe(r=>{this.dataSource.data=r.DATA.results,this.totalRecords=r.DATA.pagination.totalRecords},r=>{console.error("Error fetching follow-ups",r)})}onPageChange(n){this.currentPage=n.pageIndex+1,this.pageSize=n.pageSize,this.loadFollowUps()}onSubmit(){this.currentPage=1,this.loadFollowUps()}onSortChange(n){this.orderBy=n.active,this.loadFollowUps()}getStatusText(n){const e=this.statusOptions.find(a=>a.value===n);return e?e.viewValue:n}formatDate(n){return`${n.getDate().toString().padStart(2,"0")}-${(n.getMonth()+1).toString().padStart(2,"0")}-${n.getFullYear()}`}onReset(){this.filterForm.reset(),this.currentPage=1,this.pageSize=10,this.orderBy="next_action_date",this.sort&&(this.sort.active="",this.sort.direction=""),this.paginator&&(this.paginator.pageIndex=0),this.loadFollowUps()}viewEnquiry(n){this.router.navigate(["/enquiry-details",n])}static{this.\u0275fac=function(e){return new(e||o)(t.rXU(P.O),t.rXU(s.ok),t.rXU(h.Ix),t.rXU(M.Z))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-followup"]],viewQuery:function(e,a){if(1&e&&(t.GBs(f.iy,5),t.GBs(m.B4,5)),2&e){let r;t.mGM(r=t.lsd())&&(a.paginator=r.first),t.mGM(r=t.lsd())&&(a.sort=r.first)}},decls:51,vars:9,consts:[[1,"followup-container"],[1,"filters",3,"formGroup"],["matInput","","placeholder","Search","formControlName","search"],["formControlName","enquiryStatus"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","date","formControlName","startDate"],["matInput","","type","date","formControlName","endDate"],[1,"button-group"],["mat-raised-button","","color","primary","type","submit",3,"click"],["mat-raised-button","","color","warn","type","button",3,"click"],[1,"mat-elevation-z8","table-container"],["mat-table","","matSort","",1,"followup-table",3,"matSortChange","dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","sender_name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","description"],["matColumnDef","follow_up_status"],["matColumnDef","next_action_date"],["matColumnDef","created_at"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"page","length","pageSize","pageSizeOptions"],["loaderId","followups-loader","text","Loading Follow-ups..."],[3,"value"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","","mat-sort-header",""],["mat-raised-button","","color","accent",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,a){1&e&&(t.j41(0,"div",0)(1,"h1"),t.EFF(2,"Follow-ups Dashboard"),t.k0s(),t.j41(3,"form",1)(4,"mat-form-field"),t.nrm(5,"input",2),t.k0s(),t.j41(6,"mat-form-field")(7,"mat-label"),t.EFF(8,"Follow-up Status"),t.k0s(),t.j41(9,"mat-select",3),t.DNE(10,v,2,2,"mat-option",4),t.k0s()(),t.j41(11,"mat-form-field")(12,"mat-label"),t.EFF(13,"Start Date"),t.k0s(),t.nrm(14,"input",5),t.k0s(),t.j41(15,"mat-form-field")(16,"mat-label"),t.EFF(17,"End Date"),t.k0s(),t.nrm(18,"input",6),t.k0s(),t.j41(19,"div",7)(20,"button",8),t.bIt("click",function(){return a.onSubmit()}),t.EFF(21,"Submit"),t.k0s(),t.j41(22,"button",9),t.bIt("click",function(){return a.onReset()}),t.EFF(23,"Reset"),t.k0s()()(),t.j41(24,"div",10)(25,"table",11),t.bIt("matSortChange",function(d){return a.onSortChange(d)}),t.qex(26,12),t.DNE(27,D,2,0,"th",13)(28,y,2,1,"td",14),t.bVm(),t.qex(29,15),t.DNE(30,E,2,0,"th",16)(31,k,2,1,"td",14),t.bVm(),t.qex(32,17),t.DNE(33,R,2,0,"th",16)(34,j,2,1,"td",14),t.bVm(),t.qex(35,18),t.DNE(36,T,2,0,"th",16)(37,I,2,1,"td",14),t.bVm(),t.qex(38,19),t.DNE(39,$,2,0,"th",16)(40,N,3,4,"td",14),t.bVm(),t.qex(41,20),t.DNE(42,G,2,0,"th",16)(43,U,3,4,"td",14),t.bVm(),t.qex(44,21),t.DNE(45,V,2,0,"th",13)(46,z,3,0,"td",14),t.bVm(),t.DNE(47,B,1,0,"tr",22)(48,Y,1,0,"tr",23),t.k0s()(),t.j41(49,"mat-paginator",24),t.bIt("page",function(d){return a.onPageChange(d)}),t.k0s(),t.nrm(50,"app-loader",25),t.k0s()),2&e&&(t.R7$(3),t.Y8G("formGroup",a.filterForm),t.R7$(7),t.Y8G("ngForOf",a.statusOptions),t.R7$(15),t.Y8G("dataSource",a.dataSource),t.R7$(22),t.Y8G("matHeaderRowDef",a.displayedColumns),t.R7$(),t.Y8G("matRowDefColumns",a.displayedColumns),t.R7$(),t.Y8G("length",a.totalRecords)("pageSize",a.pageSize)("pageSizeOptions",t.lJ4(8,S)))},dependencies:[p.Sq,c.Zl,c.tL,c.ji,c.cC,c.YV,c.iL,c.KS,c.$R,c.YZ,c.NB,f.iy,m.B4,m.aE,u.rl,u.nJ,C.fg,w.VO,b.wT,_.$z,s.qT,s.me,s.BC,s.cb,s.j4,s.JD,x.V,p.vh],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;background:#d7e3ff}.text-center[_ngcontent-%COMP%]{text-align:center}.ml20[_ngcontent-%COMP%]{margin-left:20px!important}.mr20[_ngcontent-%COMP%]{margin-right:20px!important}.mt20[_ngcontent-%COMP%]{margin-top:20px!important}.mb20[_ngcontent-%COMP%]{margin-bottom:20px!important}.ml10[_ngcontent-%COMP%]{margin-left:10px!important}.mr10[_ngcontent-%COMP%]{margin-right:10px!important}.mt10[_ngcontent-%COMP%]{margin-top:10px!important}.mb10[_ngcontent-%COMP%]{margin-bottom:10px!important}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;margin:0;padding:0;font-family:Roboto,Segoe UI,Helvetica Neue,Arial,sans-serif;background:#d7e3ff;overflow-x:hidden}body[_ngcontent-%COMP%]{min-height:100vh;width:100%;max-width:100vw}.full-width[_ngcontent-%COMP%]{width:100%;max-width:100%;box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}body[_ngcontent-%COMP%]{font-family:Roboto,Segoe UI,Helvetica Neue,Arial,sans-serif;background-color:#d7e3ff;color:#000000de}.primary-bg[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.secondary-bg[_ngcontent-%COMP%]{background-color:#ff4081;color:#fff}.accent-bg[_ngcontent-%COMP%]{background-color:#ffd740;color:#000000de}[_ngcontent-%COMP%]:export{primaryColor:#3f51b5;secondaryColor:#ff4081;accentColor:#ffd740}.followup-container[_ngcontent-%COMP%]{padding:20px}.followup-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#3f51b5;margin-bottom:20px;font-size:24px}@media (max-width: 600px){.followup-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:20px}}.followup-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;margin-bottom:20px;align-items:center}.followup-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1 1 200px}.followup-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]{display:flex;gap:10px}.followup-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:0 0 auto;height:36px}@media (max-width: 600px){.followup-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.followup-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], .followup-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.followup-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]{flex-direction:column}}.followup-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]{overflow-x:auto}.followup-container[_ngcontent-%COMP%]   .followup-table[_ngcontent-%COMP%]{width:100%;min-width:800px}.followup-container[_ngcontent-%COMP%]   .followup-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;font-weight:700}.followup-container[_ngcontent-%COMP%]   .followup-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:nth-child(2n){background-color:#f5f5f5}.followup-container[_ngcontent-%COMP%]   .followup-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.followup-container[_ngcontent-%COMP%]   .followup-table[_ngcontent-%COMP%]   .mat-column-action[_ngcontent-%COMP%]{width:100px;text-align:center}.followup-container[_ngcontent-%COMP%]   .mat-paginator[_ngcontent-%COMP%]{background-color:#f5f5f5}"]})}}return o})();var H=i(1530),X=i(3319),J=i(3887);const L=[{path:"",component:A}];let Q=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[p.MD,h.iI.forChild(L),c.tP,f.Ou,m.NQ,u.RG,C.fS,w.Ve,_.Hl,s.X1,J.G,H.th.forRoot(X.x)]})}}return o})()}}]);