(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{310:function(t,a,s){t.exports=s.p+"assets/img/image-20190721085144545.25f25dda.png"},311:function(t,a,s){t.exports=s.p+"assets/img/image-20190721090118542.46c31055.png"},312:function(t,a,s){t.exports=s.p+"assets/img/image-20190721090753742.28d009f3.png"},313:function(t,a,s){t.exports=s.p+"assets/img/image-20190721090840925.a5231632.png"},314:function(t,a,s){t.exports=s.p+"assets/img/image-20190721090935511.80fb3864.png"},315:function(t,a,s){t.exports=s.p+"assets/img/image-20190721091005130.330e9f1d.png"},380:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"多环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多环境","aria-hidden":"true"}},[t._v("#")]),t._v(" 多环境")]),t._v(" "),e("p",[t._v("在实际开发项目的过程中，我们必然会碰到如下场景：")]),t._v(" "),e("ol",[e("li",[t._v("创建一个开发环境，并在其中完成应用部署")]),t._v(" "),e("li",[t._v("创建一个测试环境，再次完成应用部署")]),t._v(" "),e("li",[t._v("创建一个准上线环境，再次完成应用部署")]),t._v(" "),e("li",[t._v("创建一个生产环境，再次完成应用部署")])]),t._v(" "),e("p",[t._v("当我们的微服务系统较为复杂时，一个环境中可能需要部署许多（几十个甚至更多）的微服务部署单元，这个时候，重复在多套环境中执行部署任务就会变得容易出错。")]),t._v(" "),e("p",[t._v("Kuboard 针对这种场景，提供了导出配置、导入配置的功能，以便运维人员可以轻易的复制多套部署环境。")]),t._v(" "),e("h2",{attrs:{id:"导出配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导出配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 导出配置")]),t._v(" "),e("h3",{attrs:{id:"前提"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提","aria-hidden":"true"}},[t._v("#")]),t._v(" 前提")]),t._v(" "),e("p",[t._v("必须满足如下条件：")]),t._v(" "),e("ul",[e("li",[t._v("您已经通过 kuboard 的 "),e("router-link",{attrs:{to:"/guide/namespace/workload.html"}},[t._v("创建工作负载")]),t._v(" 功能完成了微服务的部署。")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("部署微服务过程中，您还可能用到 kuboard 的配置编辑功能、Secrets 编辑功能 等。")])]),t._v(" "),e("p",[t._v("假设您已完成微服务部署，并已进入 namespace 界面，如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(310),alt:"image-20190721085144545"}})]),t._v(" "),e("h3",{attrs:{id:"操作步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),e("ul",[e("li",[t._v("点击 "),e("em",[e("strong",[t._v("导出工作负载")])]),t._v(" "),e("ul",[e("li",[t._v("选择要导出的分层")]),t._v(" "),e("li",[t._v("点击 "),e("em",[e("strong",[t._v("刷新")])])]),t._v(" "),e("li",[t._v("选择要导出的工作负载")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:s(311),alt:"image-20190721090118542"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("点击 "),e("em",[e("strong",[t._v("下一步")])])]),t._v(" "),e("p",[t._v("选择要导出的配置（configMap）信息")])])]),t._v(" "),e("p",[e("img",{attrs:{src:s(312),alt:"image-20190721090753742"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("点击 "),e("em",[e("strong",[t._v("下一步")])])]),t._v(" "),e("p",[t._v("选择要导出的 Secrets")])])]),t._v(" "),e("p",[e("img",{attrs:{src:s(313),alt:"image-20190721090840925"}})]),t._v(" "),e("ul",[e("li",[t._v("点击 "),e("em",[e("strong",[t._v("下一步")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:s(314),alt:"image-20190721090935511"}})]),t._v(" "),e("ul",[e("li",[t._v("点击 "),e("em",[e("strong",[t._v("确定")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:s(315),alt:"image-20190721091005130"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("查看已导出文件")]),t._v(" "),e("p",[t._v("导出文件的命名格式为 kuboard_namespace_date_time.yaml，例如：")]),t._v(" "),e("p",[t._v("kuboard_example_2019_07_21_09_09_47.yaml")]),t._v(" "),e("p",[t._v("导出文件的内容如下所示：")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" StatefulSet\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" example\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloud"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("eureka\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("annotations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("k8s.eip.work/workload")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloud"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("eureka\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("k8s.eip.work/displayName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 服务注册\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("k8s.eip.work/service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterIP\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("k8s.eip.work/ingress")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("k8s.eip.work/layer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloud\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("k8s.eip.work/name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloud"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("eureka\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("k8s.eip.work/layer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloud\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("k8s.eip.work/name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloud"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("eureka\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])])])])]),t._v(" "),e("blockquote",[e("p",[t._v("该文件可以通过 kubectl apply -f 命令直接执行，但是建议使用 kuboard 进行导入，以便在导入时在线编辑在特定于新环境的配置信息。")])]),t._v(" "),e("h2",{attrs:{id:"导入配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 导入配置")]),t._v(" "),e("h3",{attrs:{id:"前提-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 前提")]),t._v(" "),e("p",[t._v("您已经通过 kuboard 导出了配置文件，或者从别处获取到 kuboard 导出的配置文件")]),t._v(" "),e("h3",{attrs:{id:"操作步骤-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),e("p",[t._v("请参考 "),e("a",{attrs:{href:"/guide/example/import"}},[t._v("导入 example 微服务")])])])},[],!1,null,null,null);a.default=r.exports}}]);