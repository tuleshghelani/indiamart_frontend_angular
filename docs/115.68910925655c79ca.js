"use strict";(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[115],{8115:(G,m,e)=>{e.r(m),e.d(m,{EnquiryDetailsModule:()=>$});var l=e(177),d=e(9012),p=e(9213),r=e(9454),u=e(3902),f=e(5351),h=e(1530),y=e(2634),C=e(951),M=e(4099),x=e(2039),t=e(4438),E=e(5175),O=e(9114),P=e(7749),w=e(1997),s=e(5596),F=e(8834),_=e(765);function k(o,c){if(1&o&&(t.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t.EFF(3,"Enquiry Details"),t.k0s(),t.j41(4,"mat-card-subtitle"),t.EFF(5),t.k0s()(),t.j41(6,"mat-card-content")(7,"div",8)(8,"div",9)(9,"h3"),t.EFF(10,"Sender Information"),t.k0s(),t.j41(11,"p")(12,"strong"),t.EFF(13,"Name:"),t.k0s(),t.EFF(14),t.k0s(),t.j41(15,"p")(16,"strong"),t.EFF(17,"Company:"),t.k0s(),t.EFF(18),t.k0s(),t.j41(19,"p")(20,"strong"),t.EFF(21,"Email:"),t.k0s(),t.EFF(22),t.k0s(),t.j41(23,"p")(24,"strong"),t.EFF(25,"Mobile:"),t.k0s(),t.EFF(26),t.k0s(),t.j41(27,"p")(28,"strong"),t.EFF(29,"Alt. Mobile:"),t.k0s(),t.EFF(30),t.k0s(),t.j41(31,"p")(32,"strong"),t.EFF(33,"Phone:"),t.k0s(),t.EFF(34),t.k0s(),t.j41(35,"p")(36,"strong"),t.EFF(37,"Alt. Phone:"),t.k0s(),t.EFF(38),t.k0s(),t.j41(39,"p")(40,"strong"),t.EFF(41,"Alt. Email:"),t.k0s(),t.EFF(42),t.k0s()(),t.j41(43,"div",9)(44,"h3"),t.EFF(45,"Address"),t.k0s(),t.j41(46,"p"),t.EFF(47),t.k0s(),t.j41(48,"p"),t.EFF(49),t.k0s(),t.j41(50,"p"),t.EFF(51),t.k0s(),t.j41(52,"p"),t.EFF(53),t.k0s()(),t.j41(54,"div",9)(55,"h3"),t.EFF(56,"Query Information"),t.k0s(),t.j41(57,"p")(58,"strong"),t.EFF(59,"Type:"),t.k0s(),t.EFF(60),t.k0s(),t.j41(61,"p")(62,"strong"),t.EFF(63,"Time:"),t.k0s(),t.EFF(64),t.nI1(65,"date"),t.k0s(),t.j41(66,"p")(67,"strong"),t.EFF(68,"Product:"),t.k0s(),t.EFF(69),t.k0s(),t.j41(70,"p")(71,"strong"),t.EFF(72,"Category:"),t.k0s(),t.EFF(73),t.k0s(),t.j41(74,"p")(75,"strong"),t.EFF(76,"Subject:"),t.k0s(),t.EFF(77),t.k0s()(),t.j41(78,"div",10)(79,"h3"),t.EFF(80,"Query Message"),t.k0s(),t.j41(81,"p"),t.EFF(82),t.k0s()()()(),t.nrm(83,"br"),t.k0s()),2&o){const n=t.XpG();t.R7$(5),t.SpI("Status: ",n.getLeadType(n.enquiryDetails.query_type),""),t.R7$(9),t.SpI(" ",n.enquiryDetails.sender_name,""),t.R7$(4),t.SpI(" ",n.enquiryDetails.sender_company,""),t.R7$(4),t.SpI(" ",n.enquiryDetails.sender_email,""),t.R7$(4),t.SpI(" ",n.enquiryDetails.sender_mobile,""),t.R7$(4),t.SpI(" ",n.enquiryDetails.sender_mobile_alt,""),t.R7$(4),t.SpI(" ",n.enquiryDetails.sender_phone,""),t.R7$(4),t.SpI(" ",n.enquiryDetails.sender_phone_alt,""),t.R7$(4),t.SpI(" ",n.enquiryDetails.sender_email_alt,""),t.R7$(5),t.JRh(n.enquiryDetails.sender_address),t.R7$(2),t.Lme("",n.enquiryDetails.sender_city,", ",n.enquiryDetails.sender_state,""),t.R7$(2),t.JRh(n.enquiryDetails.sender_pincode),t.R7$(2),t.JRh(n.enquiryDetails.sender_country_iso),t.R7$(7),t.SpI(" ",n.getLeadType(n.enquiryDetails.query_type),""),t.R7$(4),t.SpI(" ",t.i5U(65,20,n.enquiryDetails.query_time,"medium"),""),t.R7$(5),t.SpI(" ",n.enquiryDetails.query_product_name,""),t.R7$(4),t.SpI(" ",n.enquiryDetails.query_mcat_name,""),t.R7$(4),t.SpI(" ",n.enquiryDetails.subject,""),t.R7$(5),t.JRh(n.enquiryDetails.query_message)}}function v(o,c){1&o&&(t.j41(0,"mat-card")(1,"mat-card-content")(2,"p"),t.EFF(3,"An error occurred while fetching the enquiry details. Please try again later."),t.k0s()()())}function b(o,c){if(1&o&&(t.j41(0,"mat-card",11)(1,"mat-card-header")(2,"mat-card-title"),t.EFF(3,"Latest Follow-up"),t.k0s(),t.j41(4,"mat-card-subtitle"),t.EFF(5),t.nI1(6,"date"),t.k0s()(),t.j41(7,"mat-card-content")(8,"div",12)(9,"mat-icon",13),t.EFF(10),t.k0s(),t.j41(11,"span"),t.EFF(12),t.k0s()(),t.j41(13,"p",14),t.EFF(14),t.k0s(),t.j41(15,"p",15)(16,"mat-icon"),t.EFF(17,"event"),t.k0s(),t.EFF(18),t.nI1(19,"date"),t.k0s()()()),2&o){const n=t.XpG();t.R7$(5),t.JRh(t.i5U(6,6,n.enquiryDetails.latest_follow_up.created_at,"medium")),t.R7$(4),t.Y8G("ngClass",n.getStatusClass(n.enquiryDetails.latest_follow_up.follow_up_status)),t.R7$(),t.SpI(" ",n.getStatusIcon(n.enquiryDetails.latest_follow_up.follow_up_status)," "),t.R7$(2),t.JRh(n.getStatusText(n.enquiryDetails.latest_follow_up.follow_up_status)),t.R7$(2),t.JRh(n.enquiryDetails.latest_follow_up.description),t.R7$(4),t.SpI(" Next Action: ",t.i5U(19,9,n.enquiryDetails.latest_follow_up.next_action_date,"medium")," ")}}function D(o,c){if(1&o&&(t.j41(0,"mat-list-item")(1,"div",16)(2,"span",17),t.EFF(3),t.k0s()(),t.j41(4,"div",18)(5,"span",19)(6,"mat-icon"),t.EFF(7,"event_note"),t.k0s(),t.EFF(8),t.nI1(9,"date"),t.k0s(),t.EFF(10),t.j41(11,"span",20)(12,"mat-icon"),t.EFF(13,"update"),t.k0s(),t.EFF(14),t.nI1(15,"date"),t.k0s()(),t.j41(16,"div",21)(17,"mat-icon"),t.EFF(18,"description"),t.k0s(),t.EFF(19),t.k0s(),t.nrm(20,"mat-divider"),t.k0s()),2&o){const n=c.$implicit,i=t.XpG();t.R7$(2),t.Y8G("ngClass",i.getStatusClass(n.follow_up_status)),t.R7$(),t.SpI(" ",i.getStatusText(n.follow_up_status)," "),t.R7$(5),t.SpI(" Created: ",t.i5U(9,6,n.created_at,"medium")," "),t.R7$(2),t.SpI(" ",n.description," "),t.R7$(4),t.SpI(" Next Action: ",t.i5U(15,9,n.next_action_date,"medium")," "),t.R7$(5),t.SpI(" ",n.description," ")}}let q=(()=>{class o{constructor(n,i,a,g,U,A,T){this.route=n,this.enquiryService=i,this.router=a,this.followUpService=g,this.dialog=U,this.cdr=A,this.loaderService=T,this.enquiryDetails={follow_ups:[],latest_follow_up:null},this.loading=!0,this.error=!1,this.statusOptions=C.y,this.getLeadType=M.$}ngOnInit(){const n=this.route.snapshot.paramMap.get("id");n&&this.fetchEnquiryDetails(+n)}onAction(){this.router.navigate(["/dashboard"])}fetchEnquiryDetails(n){const i="enquiry-details-loader";this.loaderService.start(i),this.enquiryService.getEnquiryDetails(n).subscribe({next:a=>{this.enquiryDetails=a.DATA,this.loading=!1},error:a=>{console.error("Error fetching enquiry details",a),this.loading=!1,this.error=!0},complete:()=>{this.loaderService.stop(i)}})}getStatusClass(n){switch(n){case"S":return"status-success";case"C":return"status-closed";default:return"status-default"}}getStatusIcon(n){switch(n){case"S":return"check_circle";case"C":return"cancel";default:return"help"}}getStatusText(n){switch(n){case"S":return"Scheduled";case"C":return"Completed";default:return"Unknown"}}openCreateFollowUpDialog(){this.dialog.open(x.CreateFollowUpDialogComponent,{width:"400px",data:{enquiryId:this.enquiryDetails.id}}).afterClosed().subscribe(i=>{i&&this.createFollowUp(i)})}createFollowUp(n){const i="enquiry-details-loader";this.loaderService.start(i),this.followUpService.createFollowUp(n).subscribe({next:a=>{console.log("Follow-up created:",a),this.refreshEnquiryDetails(n?.enquiry_id)},error:a=>{console.error("Error creating follow-up:",a)},complete:()=>{this.loaderService.stop(i)}})}refreshEnquiryDetails(n){this.ngOnInit()}static{this.\u0275fac=function(i){return new(i||o)(t.rXU(d.nX),t.rXU(E.X),t.rXU(d.Ix),t.rXU(O.O),t.rXU(f.bZ),t.rXU(t.gRc),t.rXU(P.Z))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-enquiry-details"]],decls:20,vars:5,consts:[[1,"enquiry-details-container"],["loaderId","enquiry-details-loader","text","Loading Enquiry Details..."],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","primary",1,"create-follow-up-btn",3,"click"],[4,"ngIf"],["class","latest-follow-up-card",4,"ngIf"],[1,"follow-ups-panel"],[4,"ngFor","ngForOf"],[1,"details-grid"],[1,"detail-item"],[1,"detail-item","full-width"],[1,"latest-follow-up-card"],[1,"follow-up-status"],[3,"ngClass"],[1,"follow-up-description"],[1,"next-action-date"],["mat-line","",1,"follow-up-header"],[1,"follow-up-status",3,"ngClass"],["mat-line","",1,"follow-up-dates"],[1,"follow-up-created"],[1,"follow-up-next-action"],["mat-line","",1,"follow-up-description"]],template:function(i,a){1&i&&(t.j41(0,"div",0),t.nrm(1,"app-loader",1),t.j41(2,"button",2),t.bIt("click",function(){return a.onAction()}),t.EFF(3,"Back"),t.k0s(),t.EFF(4,"\xa0\xa0 "),t.j41(5,"button",3),t.bIt("click",function(){return a.openCreateFollowUpDialog()}),t.j41(6,"mat-icon"),t.EFF(7,"add"),t.k0s(),t.EFF(8," Create Follow-up "),t.k0s(),t.DNE(9,k,84,23,"mat-card",4)(10,v,4,0,"mat-card",4)(11,b,20,12,"mat-card",5),t.j41(12,"mat-expansion-panel",6)(13,"mat-expansion-panel-header")(14,"mat-panel-title"),t.EFF(15," All Follow-ups "),t.k0s(),t.j41(16,"mat-panel-description"),t.EFF(17),t.k0s()(),t.j41(18,"mat-list"),t.DNE(19,D,21,12,"mat-list-item",7),t.k0s()()()),2&i&&(t.R7$(9),t.Y8G("ngIf",!a.loading&&!a.error),t.R7$(),t.Y8G("ngIf",a.error),t.R7$(),t.Y8G("ngIf",!a.loading&&!a.error&&a.enquiryDetails.latest_follow_up),t.R7$(6),t.SpI(" Click to view ",a.enquiryDetails.follow_ups.length," follow-ups "),t.R7$(2),t.Y8G("ngForOf",a.enquiryDetails.follow_ups))},dependencies:[l.YU,l.Sq,l.bT,p.An,r.GK,r.Z2,r.WN,r.Q6,u.jt,u.YE,w.q,s.RN,s.m2,s.MM,s.Lc,s.dh,F.$z,_.V,l.vh],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;background:#d7e3ff}.text-center[_ngcontent-%COMP%]{text-align:center}.ml20[_ngcontent-%COMP%]{margin-left:20px!important}.mr20[_ngcontent-%COMP%]{margin-right:20px!important}.mt20[_ngcontent-%COMP%]{margin-top:20px!important}.mb20[_ngcontent-%COMP%]{margin-bottom:20px!important}.ml10[_ngcontent-%COMP%]{margin-left:10px!important}.mr10[_ngcontent-%COMP%]{margin-right:10px!important}.mt10[_ngcontent-%COMP%]{margin-top:10px!important}.mb10[_ngcontent-%COMP%]{margin-bottom:10px!important}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;margin:0;padding:0;font-family:Roboto,Segoe UI,Helvetica Neue,Arial,sans-serif;background:#d7e3ff;overflow-x:hidden}body[_ngcontent-%COMP%]{min-height:100vh;width:100%;max-width:100vw}.full-width[_ngcontent-%COMP%]{width:100%;max-width:100%;box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}body[_ngcontent-%COMP%]{font-family:Roboto,Segoe UI,Helvetica Neue,Arial,sans-serif;background-color:#d7e3ff;color:#000000de}.primary-bg[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.secondary-bg[_ngcontent-%COMP%]{background-color:#ff4081;color:#fff}.accent-bg[_ngcontent-%COMP%]{background-color:#ffd740;color:#000000de}[_ngcontent-%COMP%]:export{primaryColor:#3f51b5;secondaryColor:#ff4081;accentColor:#ffd740}.enquiry-details-container[_ngcontent-%COMP%]{padding:20px;max-width:100%;margin:0 auto}.enquiry-details-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{margin-bottom:20px}.enquiry-details-container[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px}.enquiry-details-container[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#3f51b5;border-bottom:2px solid #3f51b5;padding-bottom:5px;margin-bottom:10px}.enquiry-details-container[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}.enquiry-details-container[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item.full-width[_ngcontent-%COMP%]{grid-column:1/-1}mat-spinner[_ngcontent-%COMP%]{margin:20px auto}.latest-follow-up-card[_ngcontent-%COMP%]{margin-top:20px;border-left:5px solid #3f51b5;box-shadow:0 4px 8px #0000001a}.follow-up-status[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:10px}.follow-up-status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:8px}.follow-up-status[_ngcontent-%COMP%]   .status-success[_ngcontent-%COMP%]{color:#4caf50}.follow-up-status[_ngcontent-%COMP%]   .status-closed[_ngcontent-%COMP%]{color:#f44336}.follow-up-status[_ngcontent-%COMP%]   .status-default[_ngcontent-%COMP%]{color:#ffc107}.follow-up-description[_ngcontent-%COMP%]{font-style:italic;margin-bottom:10px}.next-action-date[_ngcontent-%COMP%]{display:flex;align-items:center;color:#757575}.next-action-date[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;margin-right:5px}.follow-ups-panel[_ngcontent-%COMP%]{margin-top:20px}.follow-up-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px}.follow-up-status[_ngcontent-%COMP%]{padding:2px 8px;border-radius:12px;font-size:.9em;font-weight:700}.follow-up-status.status-success[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff}.follow-up-status.status-closed[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}.follow-up-status.status-default[_ngcontent-%COMP%]{background-color:#ffc107;color:#000}.follow-up-dates[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:.9em;color:#757575;margin-bottom:5px}.follow-up-dates[_ngcontent-%COMP%]   .follow-up-created[_ngcontent-%COMP%], .follow-up-dates[_ngcontent-%COMP%]   .follow-up-next-action[_ngcontent-%COMP%]{display:flex;align-items:center}.follow-up-dates[_ngcontent-%COMP%]   .follow-up-created[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .follow-up-dates[_ngcontent-%COMP%]   .follow-up-next-action[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;height:16px;width:16px;margin-right:4px}.follow-up-description[_ngcontent-%COMP%]{display:flex;align-items:flex-start;font-style:italic;margin-top:5px;margin-bottom:10px}.follow-up-description[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;height:16px;width:16px;margin-right:4px;margin-top:3px}mat-list-item[_ngcontent-%COMP%]{margin-bottom:15px}mat-divider[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px}"]})}}return o})();var R=e(3670),I=e(9183),S=e(3887);const j=[{path:"",component:q}];let $=(()=>{class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[l.MD,d.iI.forChild(j),p.m_,r.MY,u.Fg,f.hM,h.th.forRoot(y.d),R.CreateFollowUpDialogModule,I.D6,s.Hu,p.m_,F.Hl,S.G]})}}return o})()}}]);