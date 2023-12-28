"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[505],{5505:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(9439),r=a(2791),o=a(1614),i=a(4708),s=a(697),d=a(890),u=a(4317),l=a(4294),c=a(4420),m=a(261),p=a(2597),h=a(354),x=a(184);function f(){var e=(0,r.useState)(""),t=(0,n.Z)(e,2),a=t[0],f=t[1],v=(0,r.useState)(""),b=(0,n.Z)(v,2),Z=b[0],g=b[1],S=(0,r.useState)(""),k=(0,n.Z)(S,2),W=k[0],w=k[1],C=(0,c.I0)(),y=function(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"name":f(n);break;case"email":g(n);break;case"password":w(n)}};return(0,x.jsxs)(o.Z,{component:"main",maxWidth:"xs",children:[(0,x.jsx)(i.ZP,{}),(0,x.jsxs)(s.Z,{sx:p.$m,children:[(0,x.jsx)(d.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,x.jsxs)(s.Z,{component:"form",onSubmit:function(e){e.preventDefault();var t={name:a,email:Z,password:W};C((0,m.Fo)(t))},sx:{mt:1},children:[(0,x.jsx)(u.Z,{margin:"normal",helperText:"The name must contain only letters, apostrophes, hyphens and indents.",inputProps:{inputMode:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"},autoComplete:"name",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,fullWidth:!0,label:"Name",onChange:y,autoFocus:!0}),(0,x.jsx)(u.Z,{margin:"normal",required:!0,helperText:"Please enter a valid email address",fullWidth:!0,id:"email",label:"Email Address",type:"email",name:"email",pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",value:Z,autoComplete:"email",onChange:y}),(0,x.jsx)(u.Z,{margin:"normal",required:!0,fullWidth:!0,type:"password",name:"password",value:W,label:"Password",id:"password",autoComplete:"new-password",onChange:y}),(0,x.jsx)(l.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),(0,x.jsx)(s.Z,{sx:p.Sf,children:(0,x.jsx)(h.h,{to:"/login",children:"Already have an account? Sign in"})})]})]})]})}},1614:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(4942),r=a(3366),o=a(7462),i=a(2791),s=a(3733),d=a(1122),u=a(1217),l=a(4419),c=a(7078),m=(0,a(4046).ZP)(),p=a(5080),h=a(184),x=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,p.Z)(),v=m("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t["maxWidth".concat((0,d.Z)(String(a.maxWidth)))],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),b=function(e){return(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:f})},Z=function(e,t){var a=e.classes,n=e.fixed,r=e.disableGutters,o=e.maxWidth,i={root:["root",o&&"maxWidth".concat((0,d.Z)(String(o))),n&&"fixed",r&&"disableGutters"]};return(0,l.Z)(i,(function(e){return(0,u.Z)(t,e)}),a)};var g=a(4036),S=a(6934),k=a(1402),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,a=void 0===t?v:t,d=e.useThemeProps,u=void 0===d?b:d,l=e.componentName,c=void 0===l?"MuiContainer":l,m=a((function(e){var t=e.theme,a=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&(0,n.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,a){var n=a,r=t.breakpoints.values[n];return 0!==r&&(e[t.breakpoints.up(n)]={maxWidth:"".concat(r).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,a=e.ownerState;return(0,o.Z)({},"xs"===a.maxWidth&&(0,n.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),a.maxWidth&&"xs"!==a.maxWidth&&(0,n.Z)({},t.breakpoints.up(a.maxWidth),{maxWidth:"".concat(t.breakpoints.values[a.maxWidth]).concat(t.breakpoints.unit)}))})),p=i.forwardRef((function(e,t){var a=u(e),n=a.className,i=a.component,d=void 0===i?"div":i,l=a.disableGutters,p=void 0!==l&&l,f=a.fixed,v=void 0!==f&&f,b=a.maxWidth,g=void 0===b?"lg":b,S=(0,r.Z)(a,x),k=(0,o.Z)({},a,{component:d,disableGutters:p,fixed:v,maxWidth:g}),W=Z(k,c);return(0,h.jsx)(m,(0,o.Z)({as:d,ownerState:k,className:(0,s.Z)(W.root,n),ref:t},S))}));return p}({createStyledComponent:(0,S.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t["maxWidth".concat((0,g.Z)(String(a.maxWidth)))],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,k.Z)({props:e,name:"MuiContainer"})}}),w=W},4708:function(e,t,a){var n=a(9439),r=a(7462),o=a(2791),i=a(1402),s=a(6199),d=a(184),u=function(e,t){return(0,r.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode})},l=function(e){return(0,r.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};t.ZP=function(e){var t=(0,i.Z)({props:e,name:"MuiCssBaseline"}),a=t.children,c=t.enableColorScheme,m=void 0!==c&&c;return(0,d.jsxs)(o.Fragment,{children:[(0,d.jsx)(s.Z,{styles:function(e){return function(e){var t,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o={};a&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((function(t){var a,r=(0,n.Z)(t,2),i=r[0],s=r[1];o[e.getColorSchemeSelector(i).replace(/\s*&/,"")]={colorScheme:null==(a=s.palette)?void 0:a.mode}}));var i=(0,r.Z)({html:u(e,a),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,r.Z)({margin:0},l(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o),s=null==(t=e.components)||null==(t=t.MuiCssBaseline)?void 0:t.styleOverrides;return s&&(i=[i,s]),i}(e,m)}}),a]})}}}]);
//# sourceMappingURL=505.97bbf858.chunk.js.map