"use strict";(self.webpackChunkcv_khaki_app=self.webpackChunkcv_khaki_app||[]).push([[992],{3992:(f,r,i)=>{i.r(r),i.d(r,{PublicationsModule:()=>m});var c=i(6895),p=i(6237),t=i(8256),s=i(5362);function l(n,e){if(1&n&&(t.TgZ(0,"div",3)(1,"h3",4),t._uU(2),t.qZA(),t.TgZ(3,"p",5),t._uU(4),t.qZA(),t.TgZ(5,"h5"),t._uU(6,"Abstract"),t.qZA(),t.TgZ(7,"p",6),t._uU(8),t.qZA(),t._UZ(9,"a",7),t.TgZ(10,"p",8),t._uU(11,"Click Here To Go To The Journal Page"),t.qZA()()),2&n){const o=e.$implicit;t.xp6(2),t.Oqu(o.title),t.xp6(2),t.Oqu(o.refrence),t.xp6(4),t.hij("",o.abstract," "),t.xp6(1),t.s9C("href",o.journal_link,t.LSH)}}let u=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-article"]],inputs:{publications:"publications"},decls:3,vars:1,consts:[[1,"container"],[1,"d-grid","g-col-1-1","g-gap","mt-4"],["class","paper",4,"ngFor","ngForOf"],[1,"paper"],[1,"title-paper"],[1,"reference"],[1,"abstract"],["target","_blank",1,"overlay",3,"href"],[1,"overlay-text"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,l,12,4,"div",2),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("ngForOf",a.publications.article))},dependencies:[c.sg],styles:[".title-paper[_ngcontent-%COMP%]{font-weight:700;color:#337999}.reference[_ngcontent-%COMP%]{font-style:italic}.abstract[_ngcontent-%COMP%]{text-align:justify}.paper[_ngcontent-%COMP%]{position:relative;padding:20px;border-radius:30px;transition:.8s ease;border:thin solid transparent}.paper[_ngcontent-%COMP%]:hover{border-color:#337999}.paper[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .paper[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%]{opacity:.5}.paper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:.8}.paper[_ngcontent-%COMP%]:hover   .overlay-text[_ngcontent-%COMP%]{visibility:visible}.paper[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{transition:.8s ease;opacity:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);text-align:center;background-color:#1a1a1a;border-radius:30px;width:100%;height:100%}.paper[_ngcontent-%COMP%]   .overlay-text[_ngcontent-%COMP%]{background-color:transparent;color:#fff;padding:8px;opacity:1!important;position:absolute;cursor:pointer;font-weight:700;text-transform:capitalize;text-align:center;border-radius:5px;width:60%;top:50%;left:50%;transform:translate(-50%,-50%);visibility:hidden}"]}),n})(),d=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-publication-box"]],inputs:{publications:"publications"},decls:13,vars:1,consts:[[1,"container"],[1,"d-grid","g-col-1-1","g-gap","mt-4","neumorphism-box"],[1,"d-xl-none"],["src","../../../../../assets/images/publications.png",1,"img-fluid","publications-image"],[1,"px-3"],[1,"publications-description"],[1,"d-none","d-xl-block"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"h2",5),t._uU(6,"Publications"),t.qZA(),t.TgZ(7,"ul")(8,"li")(9,"P"),t._uU(10),t.qZA()()()(),t.TgZ(11,"div",6),t._UZ(12,"img",3),t.qZA()()()),2&o&&(t.xp6(10),t.hij("I have published ",a.publications.total_number," papers. I've included below a list of them and a summary of each. clicking on each, you can visit the journal's website."))},styles:[".neumorphism-box[_ngcontent-%COMP%]{border-radius:30px;background:linear-gradient(315deg,#132d39,#0f0f10);box-shadow:-5px -5px 10px #1a3c4d,5px 5px 10px #090b0b;min-height:415px}.publications-image[_ngcontent-%COMP%]{border-radius:30px;max-width:320px;position:relative;left:50%;transform:translate(-50%)}.publications-description[_ngcontent-%COMP%]{color:#337999;border-bottom:1px solid hsl(199deg,50%,40%);margin-bottom:24px;padding-top:24px;text-transform:uppercase}"]}),n})();const g=[{path:"",component:(()=>{class n{constructor(o){this.apiService=o,this.publications=""}ngOnInit(){this.getData()}getData(){this.apiService.getJson().subscribe(o=>{this.dataInterface=o,this.publications=this.dataInterface.publication})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(s.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-publications"]],decls:2,vars:2,consts:[[3,"publications"]],template:function(o,a){1&o&&t._UZ(0,"app-publication-box",0)(1,"app-article",0),2&o&&(t.Q6J("publications",a.publications),t.xp6(1),t.Q6J("publications",a.publications))},dependencies:[u,d]}),n})()}];let b=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(g),p.Bz]}),n})(),m=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,b]}),n})()}}]);