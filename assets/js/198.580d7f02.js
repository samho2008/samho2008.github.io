(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{2005:function(t,a,s){"use strict";s.r(a);var n=s(34),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"gitlab-控制台命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-控制台命令"}},[t._v("#")]),t._v(" GitLab 控制台命令")]),t._v(" "),s("h2",{attrs:{id:"查看-gitlab-实时日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看-gitlab-实时日志"}},[t._v("#")]),t._v(" 查看 GitLab 实时日志")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有实时日志，按 Ctrl + C 退出")]),t._v("\ngitlab-ctl "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出 GitLab 所有日志类型，这些目录本质上都是个文件夹")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /var/log/gitlab/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 gitlab-rails 日志类型的实时日志")]),t._v("\ngitlab-ctl "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" gitlab-rails\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看某个具体日志类型的日志文件，以 nginx 日志类型下的 gitlab_error.log 文件为例")]),t._v("\ngitlab-ctl "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" nginx/gitlab_access.log\n")])])]),s("blockquote",[s("p",[t._v("参考文献：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/douglas8287/article/details/84880261",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitlab 日志查看_douglas8287的博客-CSDN博客"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);