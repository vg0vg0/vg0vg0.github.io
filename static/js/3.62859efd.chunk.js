webpackJsonp([3],{839:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function l(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),o=n.n(r),s=n(16),u=n(65),i=(n.n(u),n(15)),h=n.n(i),m=n(108),d=(n.n(m),n(186)),f=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),E=n(185),g=function(t){function e(t){a(this,e);var n=c(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.page=1,n.state={accounts:null,page:1,transPage:1,showAccount:!1,accountInfo:null,filterValue:"",transactionTab:"0"},n}return l(e,t),f(e,[{key:"componentDidMount",value:function(){this.loadAccountList(1,this.state.filterIdx)}},{key:"loadAccountList",value:function(t,e){e||(e=this.state.filterValue);var n=Object(u.getShareHost)()+"/vgo?action=listAccount&page="+t+"&query="+e;E.concat(n,function(t,e,n){if(t)return void console.log(t);if(n)try{var a=JSON.parse(n);this.setState({accounts:a})}catch(t){}}.bind(this))}},{key:"prePage",value:function(){this.state.page>1&&(this.state.page--,this.loadAccountList(this.state.page))}},{key:"nextPage",value:function(){this.state.page++,this.loadAccountList(this.state.page)}},{key:"renderAccountList",value:function(){var t=this.state.accounts.accounts;return t?t.map(function(t){return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(d.a,{rsId:t.rsId})),o.a.createElement("td",null,t.height),o.a.createElement("td",null,t.balance," VGo"),o.a.createElement("td",null,t.mined," VGo"))}):null}},{key:"renderAutoTransactionItem",value:function(){return this.state.autoTransactions.map(function(t){return o.a.createElement("tr",null,o.a.createElement("td",null,Object(u.getTransactionName)(t.type)),o.a.createElement("td",null,t.from),o.a.createElement("td",null,t.to),o.a.createElement("td",null,t.amount," VGo"),o.a.createElement("td",null,"0 VGo"),o.a.createElement("td",null,t.height))})}},{key:"renderAccountTransactionItem",value:function(){return this.state.accountTransactions.map(function(t){return o.a.createElement("tr",null,o.a.createElement("td",null,Object(u.getTransactionName)(t.type)),o.a.createElement("td",null,t.from),o.a.createElement("td",null,t.to),o.a.createElement("td",null,t.amount," VGo"),o.a.createElement("td",null,t.fee," VGo"),o.a.createElement("td",null,t.height))})}},{key:"renderAccountTransactions",value:function(){return"0"==this.state.transactionTab?this.state.accountTransactions?o.a.createElement(s.R,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"From"),o.a.createElement("th",null,"To"),o.a.createElement("th",null,"Amount"),o.a.createElement("th",null,"Fee"),o.a.createElement("th",null,"Height"))),o.a.createElement("tbody",null,this.renderAccountTransactionItem())):null:this.state.accountInfo.autoTransactions?o.a.createElement(s.R,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"From"),o.a.createElement("th",null,"To"),o.a.createElement("th",null,"Amount"),o.a.createElement("th",null,"Fee"),o.a.createElement("th",null,"Height"))),o.a.createElement("tbody",null,this.renderAutoTransactionItem())):null}},{key:"onTransactionTabClicked",value:function(t){this.state.transactionTab!==t&&(this.setState({transactionTab:t}),"0"===t&&this.loadAccountTransactions(1),"1"===t&&this.loadAutoTransactions(1))}},{key:"renderTransactionsTabs",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement(s.E,{tabs:!0},o.a.createElement(s.F,null,o.a.createElement(s.G,{className:h()({active:"0"===this.state.transactionTab}),onClick:function(){t.onTransactionTabClicked("0")}},o.a.createElement("i",{className:"icon-calculator"}),o.a.createElement(s.b,{color:"success"},"Account Tran. ")))),this.renderAccountTransactions(),this.renderTransactionPagnations())}},{key:"loadAccountTransactions",value:function(t){var e=this,n=this.state.accountInfo.rsId;Object(m.loadAccountTransactions)(n,t,10,function(t,n){if(t&&n){var a=n.transactions;e.setState({accountTransactions:a})}}.bind(this))}},{key:"loadAutoTransactions",value:function(t){var e=this,n=this.state.accountInfo.rsId;Object(m.loadAutoTransactions)(n,t,10,function(t,n){if(t&&n){var a=n.transactions;e.setState({autoTransactions:a})}}.bind(this))}},{key:"preTransPage",value:function(){this.state.transPage>1&&this.state.transPage--,"0"===this.state.transactionTab?this.loadAccountTransactions(this.state.transPage):this.loadAutoTransactions(this.state.transPage)}},{key:"nextTransPage",value:function(){this.state.transPage++,"0"===this.state.transactionTab?this.loadAccountTransactions(this.state.transPage):this.loadAutoTransactions(this.state.transPage)}},{key:"renderTransactionPagnations",value:function(){var t=this;return o.a.createElement(s.H,null,o.a.createElement(s.I,null,o.a.createElement(s.J,{previous:!0,tag:"button",onClick:function(e){t.preTransPage()}},"-")),o.a.createElement(s.I,{active:!0},o.a.createElement(s.J,{tag:"button"},this.state.transPage)),o.a.createElement(s.I,null,o.a.createElement(s.J,{next:!0,tag:"button",onClick:function(e){t.nextTransPage()}},"+")))}},{key:"rederAccountInfoDialog",value:function(){return this.state.accountInfo?o.a.createElement(s.A,{isOpen:this.state.showAccount,toggle:this.toggleAccount.bind(this),className:"modal-info "+this.props.className},o.a.createElement(s.D,{toggle:this.toggleAccount.bind(this)},"Account Info."),o.a.createElement(s.B,null,o.a.createElement("p",null," Account ID: ",this.state.accountInfo.rsId),o.a.createElement("p",null," Account PK: ",this.state.accountInfo.pk),o.a.createElement("p",null," Account Balance: ",this.state.accountInfo.balance),o.a.createElement("p",null,"Transactions:"),this.renderTransactionsTabs()),o.a.createElement(s.C,null,o.a.createElement(s.e,{color:"danger",onClick:this.toggleAccount.bind(this)},"OK"))):null}},{key:"toggleAccount",value:function(){this.setState({showAccount:!this.state.showAccount})}},{key:"showAccountInfo",value:function(t){this.toggleAccount();var e=Object(u.getShareHost)()+"/vgo?action=account&rsIdOrPkHex="+t;E.concat(e,function(t,e,n){if(!t){var a=JSON.parse(n),c=a.transactions;this.setState({accountInfo:a,accountTransactions:c})}}.bind(this))}},{key:"updateQueryValue",value:function(t){if(t&&t.target){var e=t.target.value;this.setState({filterValue:e})}}},{key:"renderList",value:function(){var t=this;return this.state.accounts?o.a.createElement(s.O,null,o.a.createElement(s.k,null,o.a.createElement(s.g,null,o.a.createElement(s.h,null,o.a.createElement(s.u,null,o.a.createElement(s.t,{placeholder:"search",onChange:this.updateQueryValue.bind(this)}),o.a.createElement(s.e,{color:"primary",onClick:function(e){return t.loadAccountList(1)}},o.a.createElement("i",{className:"fa fa-search"}),"\xa0")),o.a.createElement(s.R,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"ID"),o.a.createElement("th",null,"Height"),o.a.createElement("th",null,"Balance"),o.a.createElement("th",null,"Miner"))),o.a.createElement("tbody",null,this.renderAccountList(),this.rederAccountInfoDialog())),o.a.createElement("nav",null,o.a.createElement(s.H,null,o.a.createElement(s.I,null,o.a.createElement(s.J,{previous:!0,tag:"button",onClick:function(e){t.prePage()}},"Prev")),o.a.createElement(s.I,{active:!0},o.a.createElement(s.J,{tag:"button"},this.state.page," / ",this.state.accounts.total)),o.a.createElement(s.I,null,o.a.createElement(s.J,{next:!0,tag:"button",onClick:function(e){t.nextPage()}},"Next")))))))):null}},{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},this.renderList())}}]),e}(r.Component);e.default=g}});
//# sourceMappingURL=3.62859efd.chunk.js.map