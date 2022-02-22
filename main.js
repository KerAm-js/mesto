(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e){var r=this,o=e.serverUrl,i=e.token,a=e.groupId,u=e.userAddress,c=e.avatarAddress,s=e.cardsAddress,l=e.likeAddress;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"deleteCard",(function(e){return fetch("".concat(r._cardsUrl,"/").concat(e),{method:"DELETE",headers:{authorization:r._token}}).then((function(e){return r._checkResponse(e)}))})),t(this,"setLike",(function(e){return fetch("".concat(r._cardsUrl,"/").concat(e).concat(r._likeAddress),{method:"PUT",headers:{authorization:r._token}}).then((function(e){return r._checkResponse(e)}))})),t(this,"deleteLike",(function(e){return fetch("".concat(r._cardsUrl,"/").concat(e).concat(r._likeAddress),{method:"DELETE",headers:{authorization:r._token}}).then((function(e){return r._checkResponse(e)}))})),this._serverUrl=o,this._token=i,this._groupId=a,this._userUrl="".concat(this._serverUrl).concat(u),this._avatarUrl="".concat(this._userUrl).concat(c),this._cardsUrl="".concat(this._serverUrl).concat(s),this._likeAddress=l}var r,o;return r=n,(o=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserData",value:function(){var e=this;return fetch(this._userUrl,{headers:{authorization:this._token}}).then((function(t){return e._checkResponse(t)}))}},{key:"getCards",value:function(){var e=this;return fetch(this._cardsUrl,{headers:{authorization:this._token}}).then((function(t){return e._checkResponse(t)}))}},{key:"addCard",value:function(e,t){var n=this;return fetch(this._cardsUrl,{method:"POST",headers:{authorization:this._token,"Content-type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return n._checkResponse(e)}))}},{key:"editProfile",value:function(e,t){var n=this;return fetch(this._userUrl,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return n._checkResponse(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._avatarUrl),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._checkResponse(e)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();const r=n;function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t,n,r,o,a,u,c,s){var l=this,f=t.name,_=t.link,d=t.likes,h=t.owner,p=t._id;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_createNewCard",(function(){return l._element=document.querySelector(l._templateSelector).content.querySelector(".element").cloneNode(!0),l._deleteBtn=l._element.querySelector(".element__delete-button"),l._likeBtn=l._element.querySelector(".element__like-button"),l._likesCount=l._element.querySelector(".element__like-count"),l._isUserOwner||l._deleteBtn.remove(),l._isUserLike&&l._likeBtn.classList.add("element__like-button_active"),l._setLikesCount(l._likes.length),l._element.querySelector(".element__image").style.backgroundImage="url(".concat(l._link,")"),l._element.querySelector(".element__title").textContent=l._name,l._setEventListeners(),l._element})),i(this,"_askCardDeleting",(function(){l._confirmCardDeleting(l._deleteCard)})),i(this,"_deleteCard",(function(){return new Promise((function(e,t){l._deleteCardFromServer(l._id).then((function(){l._element.remove(),l._element=null,e()})).catch((function(e){return t(e)}))}))})),i(this,"_setLikesCount",(function(e){l._likesCount.textContent=e})),i(this,"_setLike",(function(){l._likeBtn.classList.contains("element__like-button_active")?l._deleteLikeAtServer(l._id).then((function(e){l._setLikesCount(e.likes.length),l._likeBtn.classList.remove("element__like-button_active")})).catch((function(e){return console.log(e)})):l._setLikeAtServer(l._id).then((function(e){l._setLikesCount(e.likes.length),l._likeBtn.classList.add("element__like-button_active")})).catch((function(e){return console.log(e)}))})),this._name=f,this._link=_,this._likes=d,this._ownerId=h._id,this._id=p,this._userId=n,this._isUserOwner=this._userId===this._ownerId,this._isUserLike=this._likes.find((function(e){return e._id===l._userId})),this._handleCardClick=o,this._deleteCardFromServer=a,this._confirmCardDeleting=u,this._templateSelector=r,this._setLikeAtServer=c,this._deleteLikeAtServer=s}var t,n;return t=e,(n=[{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__image").addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)})),this._element.querySelector(".element__like-button").addEventListener("click",this._setLike),this._isUserOwner&&this._deleteBtn.addEventListener("click",this._askCardDeleting)}},{key:"getCard",value:function(){return this._createNewCard()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const u=a;function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._element=document.querySelector(t),this._closeBtn=this._element.querySelector(".modal__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._element.classList.add("modal_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._element.classList.remove("modal_opened")}},{key:"setEventListeners",value:function(){var e=this;this._element.addEventListener("click",(function(t){var n=t.target;n.classList.contains("modal")&&!n.classList.contains("modal__block")&&e.close()})),this._closeBtn.addEventListener("click",(function(){return e.close()}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function p(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),v(m(t=i.call(this,e)),"_onSubmit",(function(e){e.preventDefault(),t._confirmAction().then(t.close.bind(m(t))).catch((function(e){return console.log(e)}))})),v(m(t),"setAction",(function(e){console.log(e),t._confirmAction=e})),t._submitBtn=t._element.querySelector(".form__button_type_confirm"),t}return t=a,(n=[{key:"setEventListeners",value:function(){_(y(a.prototype),"setEventListeners",this).call(this),this._submitBtn.addEventListener("click",this._onSubmit)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const g=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){i._inputs.forEach((function(e){e.addEventListener("input",(function(e){i._inputValidation(e.target),i._submitButtonValidation()}))}))},(r="_setInputEventListeners")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._settings=t,this._form=n,this._submitButton=this._form.querySelector(this._settings.submitButtonSelector),this._inputs=Array.from(this._form.querySelectorAll(this._settings.inputSelector))}var t,n;return t=e,(n=[{key:"_isFormValid",value:function(){var e=!0;return this._form.querySelectorAll(this._settings.inputSelector).forEach((function(t){return t.validity.valid?null:e=!1})),e}},{key:"disableSubmitBtn",value:function(){this._submitButton.classList.add(this._settings.inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)}},{key:"enableSubmitBtn",value:function(){this._submitButton.classList.remove(this._settings.inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"_submitButtonValidation",value:function(){this._isFormValid()?this.enableSubmitBtn():this.disableSubmitBtn()}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));n.textContent=t,e.classList.add(this._settings.inputErrorClass),n.classList.add(this._settings.errorActiveClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._settings.inputErrorClass),t.classList.remove(this._settings.errorActiveClass)}},{key:"_inputValidation",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"resetValidation",value:function(){var e=this;this.disableSubmitBtn(),this._inputs.forEach((function(t){return e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setInputEventListeners()}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var w="cohort36",S=".form__button[type=submit]",E={inputSelector:".form__input",submitButtonSelector:S,inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_error",errorClass:".form__error",errorActiveClass:"form__error_active"};function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function A(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};return L(this,a),q(R(n=i.call(this,e)),"_setLoader",(function(e){n._submitBtn.textContent=e?"Сохранение...":n._submitBtnDefaultText})),n._onSubmitHanlder=t,n._onPopupShowHanlder=r,n._formElement=n._element.querySelector(".form"),n._submitBtn=n._element.querySelector(S),n._submitBtnDefaultText=n._submitBtn.textContent,n._inputList=n._element.querySelectorAll(".form__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;C(U(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._setLoader(!0),e._onSubmitHanlder(e._getInputValues()).then((function(){e.close()})).finally((function(){return e._setLoader(!1)}))}))}},{key:"close",value:function(){C(U(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"open",value:function(){C(U(a.prototype),"open",this).call(this),this._onPopupShowHanlder()}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}function z(e,t){return z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},z(e,t)}function H(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(o){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imageElement=t._element.querySelector(".modal__image"),t._nameElement=t._element.querySelector(".modal__place-name"),t}return t=a,(n=[{key:"open",value:function(e,t){this._imageElement.src=t,this._imageElement.alt=e,this._nameElement.textContent=e,x(N(a.prototype),"open",this).call(this)}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(this._renderer(e))}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this.clear(),this._items.forEach((function(t){e.addItem(t)}))}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t,n){return t&&$(e.prototype,t),n&&$(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=G((function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),K(this,"getUserInfo",(function(){return{name:o._name,about:o._about,avatar:o._avatar,id:o._id}})),K(this,"setUserInfo",(function(e){var t=e.name,n=void 0===t?o._name:t,r=e.about,i=void 0===r?o._about:r,a=e.avatar,u=void 0===a?o._avatar:a,c=e._id,s=void 0===c?o._id:c;o._usernameElement.textContent=n,o._descriptionElement.textContent=i,o._avatarElement.src=u,o._name=n,o._about=i,o._avatar=u,o._id=s})),this._usernameElement=document.querySelector(t),this._descriptionElement=document.querySelector(n),this._avatarElement=document.querySelector(r)}));function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X,Y=document.querySelector(".profile__edit-button"),Z=document.querySelector(".profile__avatar-wrapper").querySelector(".profile__edit-avatar-btn"),ee=document.forms.formProfile,te=ee.querySelector(".form__input_value_username"),ne=ee.querySelector(".form__input_value_about"),re=document.forms.formAvatar.querySelector(".form__input_value_avatar-link"),oe=document.querySelector(".profile__add-place-button"),ie={};X=E,Array.from(document.forms).forEach((function(e){var t=new g(X,e);ie[e.name]=t,t.enableValidation()}));var ae=new I(".modal_type_profile",(function(e){var t=e.username,n=e.description;return new Promise((function(e,r){_e.editProfile(t,n).then((function(t){fe.setUserInfo({name:t.name,about:t.about}),e()})).catch((function(e){console.log(e),r()}))}))}),(function(){var e=fe.getUserInfo(),t=e.name,n=e.about;te.value=t,ne.value=n,ie.formProfile.enableSubmitBtn()}));ae.setEventListeners();var ue=new I(".modal_type_place",(function(e){var t=e.placeName,n=e.imageLink;return new Promise((function(e,r){_e.addCard(t,n).then((function(){_e.getCards().then((function(e){return de(e)})).catch((function(e){return console.log(e)})),ie.formProfile.disableSubmitBtn(),e()})).catch((function(e){console.log(e),r()}))}))}));ue.setEventListeners();var ce=new I(".modal_type_avatar",(function(e){var t=e.avatarLink;return new Promise((function(e,n){_e.editAvatar(t).then((function(t){fe.setUserInfo({avatar:t.avatar}),e()})).catch((function(e){console.log(e),n()}))}))}),(function(){var e=fe.getUserInfo().avatar;re.value=e,ie.formAvatar.enableSubmitBtn()}));ce.setEventListeners();var se=new F(".modal_type_image");se.setEventListeners();var le=new b(".modal_type_confirm");le.setEventListeners();var fe=new Q(".profile__username",".profile__about",".profile__avatar"),_e=new r({serverUrl:"https://nomoreparties.co/v1/".concat(w),token:"2df8850b-7608-4ffb-b875-dcadfa107eeb",groupId:w,userAddress:"/users/me",avatarAddress:"/avatar",cardsAddress:"/cards",likeAddress:"/likes"});function de(e){new M({items:e,renderer:function(e){return new u(e,fe.getUserInfo().id,"#element",se.open.bind(se),_e.deleteCard,he,_e.setLike,_e.deleteLike).getCard()}},".elements__list").renderItems()}function he(e){le.setAction(e),le.open()}Promise.all([_e.getUserData(),_e.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];fe.setUserInfo(o),de(i)})).catch((function(e){return console.log(e)})),Y.addEventListener("click",(function(){ie.formProfile.resetValidation(),ae.open()})),oe.addEventListener("click",(function(){ie.formPlace.resetValidation(),ue.open()})),Z.addEventListener("click",(function(){ie.formAvatar.resetValidation(),ce.open()}))})();