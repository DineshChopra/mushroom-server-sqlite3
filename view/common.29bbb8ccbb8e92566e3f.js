(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{frPf:function(t,r,n){"use strict";n.d(r,"a",function(){return p});var o=n("67Y/"),e=n("CcnG"),u=n("t/Na"),p=function(){function t(t){this.http=t,this.productUrl="product"}return t.prototype.getProducts=function(){return this.http.get(this.productUrl).pipe(Object(o.a)(function(t){return t.map(function(t){return{id:t._id,name:t.name,productType:t.productType,stock:t.stock}})}))},t.prototype.productCreate=function(t){return t.id?this.updateProduct(t):this.addProduct(t)},t.prototype.addProduct=function(t){return this.http.post(this.productUrl,t)},t.prototype.updateProduct=function(t){return this.http.put(this.productUrl+"/"+t.id,t)},t.prototype.deleteProduct=function(t){return this.http.delete(this.productUrl+"/"+("string"==typeof t?t:t.id))},t.ngInjectableDef=e.defineInjectable({factory:function(){return new t(e.inject(u.c))},token:t,providedIn:"root"}),t}()}}]);