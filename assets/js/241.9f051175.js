(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{2111:function(e,t,s){"use strict";s.r(t);var _=s(34),a=Object(_.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"数据库字段表示是与否的设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库字段表示是与否的设计"}},[e._v("#")]),e._v(" 数据库字段表示是与否的设计")]),e._v(" "),s("p",[e._v("在阿里巴巴的 Java 开发手册(黄山版) 中提到，但其实写的并不是很好，这里进行分析：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("9.【强制】POJO 类中的任何布尔类型的变量，都不要加 is 前缀，否则部分框架解析会引起序列化错误。\n说明：本文 MySQL 规约中的建表约定第 1 条，表达是与否的变量采用 is_xxx 的命名方式，所以需要在<resultMap>\n设置从 is_xxx 到 xxx 的映射关系。\n反例：定义为基本数据类型 Boolean isDeleted 的属性，它的方法也是 isDeleted()，框架在反向解析时，“误以为”对\n应的属性名称是 deleted，导致属性获取不到，进而抛出异常。\n")])])]),s("blockquote",[s("p",[e._v("既然数据库字段用 is_xxx 的命名方式，会和 POJO 类的布尔类型变量冲突，那就不要用 is_xxx 这种命名方式啊！而且，不一定都用 MyBatis 这种框架的，所以不一定有 resultMap，如果使用一些 hibernate、jpa 这种的框架，就会很麻烦了。")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("1.【强制】表达是与否概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint（1 表示\n是，0 表示否）。\n注意：POJO 类中的任何布尔类型的变量，都不要加 is 前缀，所以，需要在<resultMap>设置从 is_xxx 到 Xxx 的映射关\n系。数据库表示是与否的值，使用 tinyint 类型，坚持 is_xxx 的命名方式是为了明确其取值含义与取值范围。\n说明：任何字段如果为非负数，必须是 unsigned。\n正例：表达逻辑删除的字段名 is_deleted，1 表示删除，0 表示未删除。\n")])])]),s("blockquote",[s("p",[e._v("is_deleted 直接用 delete_status 不就能避免这种问题了。")])]),e._v(" "),s("h2",{attrs:{id:"数据库字段表达是与否避免用-is-xxx-的解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库字段表达是与否避免用-is-xxx-的解决方案"}},[e._v("#")]),e._v(" 数据库字段表达是与否避免用 is_xxx 的解决方案")]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("xxx_status")]),e._v("，或者直接去掉 "),s("code",[e._v("is_")]),e._v("（建议），或者用 "),s("code",[e._v("has_xxx")]),e._v("，或者叫 "),s("code",[e._v("can_xxx")]),e._v("（一般用于表示 可以还是不可以 才用）。")]),e._v(" "),s("p",[e._v("比如，你想设计一个字段，来表示")]),e._v(" "),s("p",[e._v("表示某行数据的开启与否，统一用 "),s("code",[e._v("status")]),e._v(" 状态来表示。0 禁用，1开启。")]),e._v(" "),s("p",[e._v("要区分某个表中的不同数据时，使用 "),s("code",[e._v("type")]),e._v(" 进行分类，也可以在加个 "),s("code",[e._v("sub_type")]),e._v(" 作为子类型。")]),e._v(" "),s("p",[e._v("比如有一行数据，你想表达是否推荐，正常来说应该是：is_recommend，但是避免冲突，你可以用 "),s("code",[e._v("recommend_status")]),e._v("，或者直接叫 "),s("code",[e._v("recommend")]),e._v("，然后在数据表注释中说明不同的值代表是什么意思即可。")]),e._v(" "),s("p",[e._v("是否首充双倍：first_double")])])}),[],!1,null,null,null);t.default=a.exports}}]);