(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{yaKP:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=function(){return function(){}}(),o=t("pMnS"),r=t("Ip0R"),i=t("iyiX"),d=function(){function n(n){this.reportService=n,this.editProductEvent=new u.EventEmitter,this.deleteProductEvent=new u.EventEmitter}return n.prototype.ngOnInit=function(){},n.prototype.onEditProduct=function(n){this.editProductEvent.emit(n)},n.prototype.onDeleteProduct=function(n){this.deleteProductEvent.emit(n)},n.prototype.trackById=function(n,l){return l.id},n}(),c=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function a(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u["\u0275ted"](2,null,["",""])),(n()(),u["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u["\u0275ted"](4,null,["",""]))],null,function(n,l){n(l,2,0,l.context.$implicit.name),n(l,4,0,l.context.$implicit.desc)})}function s(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,9,"table",[["class","table table-striped table-bordered"]],null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,5,"thead",[],null,null,null,null,null)),(n()(),u["\u0275eld"](2,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),u["\u0275eld"](3,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Name"])),(n()(),u["\u0275eld"](5,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Description"])),(n()(),u["\u0275eld"](7,0,null,null,2,"tbody",[],null,null,null,null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,a)),u["\u0275did"](9,278528,null,0,r.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null)],function(n,l){var t=l.component;n(l,9,0,t.products,t.trackById)},null)}var p=t("gIcY"),v=function(){return function(){}}(),f=function(){return(f=Object.assign||function(n){for(var l,t=1,u=arguments.length;t<u;t++)for(var e in l=arguments[t])Object.prototype.hasOwnProperty.call(l,e)&&(n[e]=l[e]);return n}).apply(this,arguments)},m=function(){function n(n){this.fb=n,this.productCreateEvent=new u.EventEmitter,this.cancelEvent=new u.EventEmitter,this.action="Save"}return n.prototype.ngOnInit=function(){this.initializeForm()},n.prototype.ngOnChanges=function(){this.product&&(this.action=this.product.id?"Edit":"Save")},n.prototype.cancel=function(){this.cancelEvent.emit()},n.prototype.onSubmit=function(){var n=this.form.value;n=f({},this.product,n),this.productCreateEvent.emit(n)},n.prototype.initializeForm=function(){var n=this.product;this.form=this.fb.group({name:[n.name,[p.n.required]],desc:[n.desc,[p.n.required]]})},n}(),g=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function h(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,27,"div",[],null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,26,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var e=!0,o=n.component;return"submit"===l&&(e=!1!==u["\u0275nov"](n,3).onSubmit(t)&&e),"reset"===l&&(e=!1!==u["\u0275nov"](n,3).onReset()&&e),"ngSubmit"===l&&(e=!1!==o.onSubmit()&&e),e},null,null)),u["\u0275did"](2,16384,null,0,p.q,[],null,null),u["\u0275did"](3,540672,null,0,p.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u["\u0275prd"](2048,null,p.b,null,[p.f]),u["\u0275did"](5,16384,null,0,p.j,[[4,p.b]],null,null),(n()(),u["\u0275eld"](6,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u["\u0275eld"](7,0,null,null,1,"label",[["for","productName"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Product Name"])),(n()(),u["\u0275eld"](9,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","productName"],["placeholder","Product Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0;return"input"===l&&(e=!1!==u["\u0275nov"](n,10)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u["\u0275nov"](n,10).onTouched()&&e),"compositionstart"===l&&(e=!1!==u["\u0275nov"](n,10)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u["\u0275nov"](n,10)._compositionEnd(t.target.value)&&e),e},null,null)),u["\u0275did"](10,16384,null,0,p.c,[u.Renderer2,u.ElementRef,[2,p.a]],null,null),u["\u0275prd"](1024,null,p.g,function(n){return[n]},[p.c]),u["\u0275did"](12,671744,null,0,p.e,[[3,p.b],[8,null],[8,null],[6,p.g],[2,p.s]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,p.h,null,[p.e]),u["\u0275did"](14,16384,null,0,p.i,[[4,p.h]],null,null),(n()(),u["\u0275eld"](15,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u["\u0275eld"](16,0,null,null,1,"label",[["for","productDescription"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Product Description"])),(n()(),u["\u0275eld"](18,0,null,null,5,"input",[["class","form-control"],["formControlName","desc"],["id","productDescription"],["placeholder","Product Description"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0;return"input"===l&&(e=!1!==u["\u0275nov"](n,19)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u["\u0275nov"](n,19).onTouched()&&e),"compositionstart"===l&&(e=!1!==u["\u0275nov"](n,19)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u["\u0275nov"](n,19)._compositionEnd(t.target.value)&&e),e},null,null)),u["\u0275did"](19,16384,null,0,p.c,[u.Renderer2,u.ElementRef,[2,p.a]],null,null),u["\u0275prd"](1024,null,p.g,function(n){return[n]},[p.c]),u["\u0275did"](21,671744,null,0,p.e,[[3,p.b],[8,null],[8,null],[6,p.g],[2,p.s]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,p.h,null,[p.e]),u["\u0275did"](23,16384,null,0,p.i,[[4,p.h]],null,null),(n()(),u["\u0275eld"](24,0,null,null,1,"button",[["type","submit"]],null,null,null,null,null)),(n()(),u["\u0275ted"](25,null,["",""])),(n()(),u["\u0275eld"](26,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.cancel()&&u),u},null,null)),(n()(),u["\u0275ted"](-1,null,["Cancel"]))],function(n,l){n(l,3,0,l.component.form),n(l,12,0,"name"),n(l,21,0,"desc")},function(n,l){var t=l.component;n(l,1,0,u["\u0275nov"](l,5).ngClassUntouched,u["\u0275nov"](l,5).ngClassTouched,u["\u0275nov"](l,5).ngClassPristine,u["\u0275nov"](l,5).ngClassDirty,u["\u0275nov"](l,5).ngClassValid,u["\u0275nov"](l,5).ngClassInvalid,u["\u0275nov"](l,5).ngClassPending),n(l,9,0,u["\u0275nov"](l,14).ngClassUntouched,u["\u0275nov"](l,14).ngClassTouched,u["\u0275nov"](l,14).ngClassPristine,u["\u0275nov"](l,14).ngClassDirty,u["\u0275nov"](l,14).ngClassValid,u["\u0275nov"](l,14).ngClassInvalid,u["\u0275nov"](l,14).ngClassPending),n(l,18,0,u["\u0275nov"](l,23).ngClassUntouched,u["\u0275nov"](l,23).ngClassTouched,u["\u0275nov"](l,23).ngClassPristine,u["\u0275nov"](l,23).ngClassDirty,u["\u0275nov"](l,23).ngClassValid,u["\u0275nov"](l,23).ngClassInvalid,u["\u0275nov"](l,23).ngClassPending),n(l,25,0,t.action)})}var P=t("frPf"),C=function(){function n(n,l){this.productService=n,this.reportService=l,this.products=[],this.selectedProduct=void 0}return n.prototype.ngOnInit=function(){this.getProducts()},n.prototype.getProducts=function(){var n=this;this.reportService.getProducts().subscribe(function(l){n.products=l})},n.prototype.updateSelectedProduct=function(n){void 0===n&&(n=new v),this.selectedProduct=n},n.prototype.onProductCreateEvent=function(n){var l=this;this.productService.productCreate(n).subscribe(function(n){l.selectedProduct=void 0,l.getProducts()})},n.prototype.onEditProductEvent=function(n){this.selectedProduct=n},n.prototype.onDeleteProductEvent=function(n){var l=this;this.productService.deleteProduct(n).subscribe(function(n){l.getProducts()})},n}(),E=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function b(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),u["\u0275eld"](2,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.updateSelectedProduct()&&u),u},null,null)),(n()(),u["\u0275ted"](-1,null,["Create Product"])),(n()(),u["\u0275eld"](4,0,null,null,1,"app-product-list",[],null,[[null,"editProductEvent"],[null,"deleteProductEvent"]],function(n,l,t){var u=!0,e=n.component;return"editProductEvent"===l&&(u=!1!==e.onEditProductEvent(t)&&u),"deleteProductEvent"===l&&(u=!1!==e.onDeleteProductEvent(t)&&u),u},s,c)),u["\u0275did"](5,114688,null,0,d,[i.a],{products:[0,"products"]},{editProductEvent:"editProductEvent",deleteProductEvent:"deleteProductEvent"})],function(n,l){n(l,5,0,l.component.products)},null)}function y(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"app-product-create",[],null,[[null,"productCreateEvent"],[null,"cancelEvent"]],function(n,l,t){var u=!0,e=n.component;return"productCreateEvent"===l&&(u=!1!==e.onProductCreateEvent(t)&&u),"cancelEvent"===l&&(u=!1!==e.onCancelEvent()&&u),u},h,g)),u["\u0275did"](1,638976,null,0,m,[p.d],{product:[0,"product"]},{productCreateEvent:"productCreateEvent",cancelEvent:"cancelEvent"})],function(n,l){n(l,1,0,l.component.selectedProduct)},null)}function I(n){return u["\u0275vid"](0,[(n()(),u["\u0275and"](16777216,null,null,1,null,b)),u["\u0275did"](1,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275and"](16777216,null,null,1,null,y)),u["\u0275did"](3,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,!t.selectedProduct),n(l,3,0,t.selectedProduct)},null)}function S(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"app-product",[],null,null,null,I,E)),u["\u0275did"](1,114688,null,0,C,[P.a,i.a],null,null)],function(n,l){n(l,1,0)},null)}var R=u["\u0275ccf"]("app-product",C,S,{},{},[]),w=t("ZYCi"),N=function(){return function(){}}();t.d(l,"ProductModuleNgFactory",function(){return D});var D=u["\u0275cmf"](e,[],function(n){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,R]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[u.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,p.d,p.d,[]),u["\u0275mpd"](4608,p.r,p.r,[]),u["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),u["\u0275mpd"](1073742336,w.n,w.n,[[2,w.t],[2,w.k]]),u["\u0275mpd"](1073742336,N,N,[]),u["\u0275mpd"](1073742336,p.o,p.o,[]),u["\u0275mpd"](1073742336,p.l,p.l,[]),u["\u0275mpd"](1073742336,e,e,[]),u["\u0275mpd"](1024,w.i,function(){return[[{path:"",component:C}]]},[])])})}}]);