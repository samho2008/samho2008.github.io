(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{2080:function(t,s,a){"use strict";a.r(s);var n=a(34),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"双重检查锁-double-checked-locking-与延迟初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双重检查锁-double-checked-locking-与延迟初始化"}},[t._v("#")]),t._v(" 双重检查锁（Double checked locking）与延迟初始化")]),t._v(" "),a("p",[t._v("双重检查锁（Double-Check Locking），顾名思义,通过两次检查,并基于加锁机制,实现某个功能,下面这篇文章主要给大家介绍了关于Java中双重检查锁（double checked locking）的相关资料,需要的朋友可以参考下")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("在实现单例模式时，如果未考虑多线程的情况，就容易写出下面的错误代码：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" uniqueSingleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" uniqueSingleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            uniqueSingleton "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" uniqueSingleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在多线程的情况下，这样写可能会导致uniqueSingleton有多个实例。比如下面这种情况，考虑有两个线程同时调用getInstance()：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Time")]),t._v(" "),a("th",[t._v("Thread A")]),t._v(" "),a("th",[t._v("Thread B")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("T1")]),t._v(" "),a("td",[t._v("检查到uniqueSingleton为空")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("T2")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("检查到uniqueSingleton为空")])]),t._v(" "),a("tr",[a("td",[t._v("T3")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("初始化对象A")])]),t._v(" "),a("tr",[a("td",[t._v("T4")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("返回对象A")])]),t._v(" "),a("tr",[a("td",[t._v("T5")]),t._v(" "),a("td",[t._v("初始化对象B")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("T6")]),t._v(" "),a("td",[t._v("返回对象B")]),t._v(" "),a("td")])])]),t._v(" "),a("p",[t._v("可以看到，uniqueSingleton被实例化了两次并且被不同对象持有。完全违背了单例的初衷。")]),t._v(" "),a("h2",{attrs:{id:"加锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加锁"}},[t._v("#")]),t._v(" 加锁")]),t._v(" "),a("p",[t._v("出现这种情况，第一反应就是加锁，如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" uniqueSingleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" uniqueSingleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            uniqueSingleton "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" uniqueSingleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这样虽然解决了问题，但是因为用到了synchronized，会导致很大的性能开销，并且加锁其实只需要在第一次初始化的时候用到，之后的调用都没必要再进行加锁。")]),t._v(" "),a("h2",{attrs:{id:"双重检查锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双重检查锁"}},[t._v("#")]),t._v(" 双重检查锁")]),t._v(" "),a("p",[t._v("双重检查锁（double checked locking）是对上述问题的一种优化。先判断对象是否已经被初始化，再决定要不要加锁。")]),t._v(" "),a("h3",{attrs:{id:"错误的双重检查锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误的双重检查锁"}},[t._v("#")]),t._v(" 错误的双重检查锁")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" uniqueSingleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" uniqueSingleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" uniqueSingleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    uniqueSingleton "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// error")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" uniqueSingleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如果这样写，运行顺序就成了：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("检查变量是否被初始化(不去获得锁)，如果已被初始化则立即返回。")])]),t._v(" "),a("li",[a("p",[t._v("获取锁。")])]),t._v(" "),a("li",[a("p",[t._v("再次检查变量是否已经被初始化，如果还没被初始化就初始化一个对象。")])])]),t._v(" "),a("p",[t._v("执行双重检查是因为，如果多个线程同时了通过了第一次检查，并且其中一个线程首先通过了第二次检查并实例化了对象，那么剩余通过了第一次检查的线程就不会再去实例化对象。")]),t._v(" "),a("p",[t._v("这样，除了初始化的时候会出现加锁的情况，后续的所有调用都会避免加锁而直接返回，解决了性能消耗的问题。")]),t._v(" "),a("h3",{attrs:{id:"隐患"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐患"}},[t._v("#")]),t._v(" 隐患")]),t._v(" "),a("p",[t._v("上述写法看似解决了问题，但是有个很大的隐患。实例化对象的那行代码（标记为error的那行），实际上可以分解成以下三个步骤：")]),t._v(" "),a("ol",[a("li",[t._v("分配内存空间")]),t._v(" "),a("li",[t._v("初始化对象")]),t._v(" "),a("li",[t._v("将对象指向刚分配的内存空间")])]),t._v(" "),a("p",[t._v("但是有些编译器为了性能的原因，可能会将第二步和第三步进行重排序，顺序就成了：")]),t._v(" "),a("ol",[a("li",[t._v("分配内存空间")]),t._v(" "),a("li",[t._v("将对象指向刚分配的内存空间")]),t._v(" "),a("li",[t._v("初始化对象")])]),t._v(" "),a("p",[t._v("现在考虑重排序后，两个线程发生了以下调用：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Time")]),t._v(" "),a("th",[t._v("Thread A")]),t._v(" "),a("th",[t._v("Thread B")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("T1")]),t._v(" "),a("td",[t._v("检查到uniqueSingleton为空")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("T2")]),t._v(" "),a("td",[t._v("获取锁")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("T3")]),t._v(" "),a("td",[t._v("再次检查到uniqueSingleton为空")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("T4")]),t._v(" "),a("td",[t._v("为uniqueSingleton分配内存空间")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("T5")]),t._v(" "),a("td",[t._v("将uniqueSingleton指向内存空间")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("T6")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("检查到uniqueSingleton不为空")])]),t._v(" "),a("tr",[a("td",[t._v("T7")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("访问uniqueSingleton（此时对象还未完成初始化）")])]),t._v(" "),a("tr",[a("td",[t._v("T8")]),t._v(" "),a("td",[t._v("初始化uniqueSingleton")]),t._v(" "),a("td")])])]),t._v(" "),a("p",[t._v("在这种情况下，T7时刻线程B对uniqueSingleton的访问，访问的是一个初始化未完成的对象。")]),t._v(" "),a("h3",{attrs:{id:"正确的双重检查锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正确的双重检查锁"}},[t._v("#")]),t._v(" 正确的双重检查锁")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" uniqueSingleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" uniqueSingleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" uniqueSingleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    uniqueSingleton "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" uniqueSingleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("为了解决上述问题，需要在uniqueSingleton前加入关键字volatile。使用了volatile关键字后，重排序被禁止，所有的写（write）操作都将发生在读（read）操作之前。")]),t._v(" "),a("p",[t._v("至此，双重检查锁就可以完美工作了。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("到此这篇关于Java中双重检查锁（double checked locking）的文章就介绍到这了,更多相关Java双重检查锁内容请搜索脚本之家以前的文章或继续浏览下面的相关文章希望大家以后多多支持脚本之家！")]),t._v(" "),a("blockquote",[a("p",[t._v("参考资料：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.infoq.cn/article/double-checked-locking-with-delay-initialization/#anch136785",target:"_blank",rel:"noopener noreferrer"}},[t._v("双重检查锁定与延迟初始化"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jb51.net/article/222908.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java中双重检查锁（double checked locking）的正确实现"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);