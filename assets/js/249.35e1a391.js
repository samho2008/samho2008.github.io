(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{2116:function(e,_,v){"use strict";v.r(_);var l=v(34),t=Object(l.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"mysql-各个版本区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql-各个版本区别"}},[e._v("#")]),e._v(" MySQL 各个版本区别")]),e._v(" "),v("h2",{attrs:{id:"mysql-5-5-版本说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql-5-5-版本说明"}},[e._v("#")]),e._v(" MySQL 5.5 版本说明")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("innodb")]),e._v(" 从 5.5 这个版本开始成为默认的存储引擎")]),e._v(" "),v("li",[e._v("引入了真 "),v("code",[e._v("UTF-8")]),e._v(" --\x3e "),v("code",[e._v("utf8mb4")])])]),e._v(" "),v("h2",{attrs:{id:"mysql-5-6-版本说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql-5-6-版本说明"}},[e._v("#")]),e._v(" MySQL 5.6 版本说明")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("InnoDb 开始支持全文索引")])]),e._v(" "),v("li",[v("p",[e._v("InnoDb 支持设置页面大小")]),e._v(" "),v("ul",[v("li",[e._v("通过innodb_page_size 指定，默认是16KB，对于工作负载和存储设备（尤其是具有小块大小的SSD设备）的 某些组合，较小的页面大小可以帮助避免冗余或低效的I / O")])])]),e._v(" "),v("li",[v("p",[e._v("InnoDB redolog总大小的限制从之前的4G扩展至512G")])]),e._v(" "),v("li",[v("p",[e._v("InnoDB现在可以限制大量表打开的时候内存占用过多的问题(比如这里提到的)(第三方已有补丁)")])]),e._v(" "),v("li",[v("p",[e._v("InnoDB性能加强。如分拆kernel mutex;flush操作从主线程分离;多个perge线程;大内存优化等")])]),e._v(" "),v("li",[v("p",[e._v("InnoDB死锁信息可以记录到 error 日志，方便分析")])]),e._v(" "),v("li",[v("p",[e._v("优化器性能提升，引入了ICP，MRR，BKA等特性，针对子查询进行了优化")])]),e._v(" "),v("li",[v("p",[e._v("Undo Log可保存在独立表空间中，因其是随机IO，更适合放到SSD中。但仍然不支持空间的自动回收")])]),e._v(" "),v("li",[v("p",[e._v("支持Online DDL。ALTER操作不再阻塞DML")])]),e._v(" "),v("li",[v("p",[e._v("MySQL现在支持延迟复制，以便从属服务器故意落后于主服务器至少指定的时间量。默认延迟为0秒")])]),e._v(" "),v("li",[v("p",[e._v("之前，TIMESTAMP每个表最多可以自动将一列初始化或更新为当前日期和时间，目前已没有该限制")])])]),e._v(" "),v("h2",{attrs:{id:"mysql-5-7-版本说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql-5-7-版本说明"}},[e._v("#")]),e._v(" MySQL 5.7 版本说明")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("支持组复制和InnoDB Cluster")])]),e._v(" "),v("li",[v("p",[e._v("支持多源复制")])]),e._v(" "),v("li",[v("p",[e._v("支持在线修改Buffer pool的大小")])]),e._v(" "),v("li",[v("p",[e._v("支持UNDO表空间的自动回收")])]),e._v(" "),v("li",[v("p",[e._v("查询优化器的增强与重构，提升性能")])]),e._v(" "),v("li",[v("p",[e._v("可查看当前session正在执行的SQL的执行计划(EXPLAIN FOR CONNECTION)")])]),e._v(" "),v("li",[v("p",[e._v("优化了Performance Schema，其内存使用减少")])]),e._v(" "),v("li",[v("p",[e._v("原生支持JSON类型，并引入了众多JSON函数")])]),e._v(" "),v("li",[v("p",[e._v("可设置SELECT操作的超时时长（max_execution_time）")])]),e._v(" "),v("li",[v("p",[e._v("引入了innodb_deadlock_detect选项，在高并发场景下，可使用该选项来关闭死锁检测")])]),e._v(" "),v("li",[v("p",[e._v("GIS的增强，包括使用Boost.Geometry替代之前的GIS算法，InnoDB开始支持空间索引")])])]),e._v(" "),v("h2",{attrs:{id:"mysql-8-0-版本说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql-8-0-版本说明"}},[e._v("#")]),e._v(" MySQL 8.0 版本说明")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("提高性能：官宣比5.7快2倍")])]),e._v(" "),v("li",[v("p",[e._v("PERFORMANCE_SCHEMA查询性能提升，其已内置多个索引")])]),e._v(" "),v("li",[v("p",[e._v("支持不可见索引(Invisible index)")])]),e._v(" "),v("li",[v("p",[e._v("支持降序索引")])]),e._v(" "),v("li",[v("p",[e._v("引入了innodb_dedicated_server选项，可基于服务器的内存来动态设置innodb_buffer_pool_size，innodb_log_file_size和innodb_flush_method")])]),e._v(" "),v("li",[v("p",[e._v("支持秒加字段(Instant add column)功能")])]),e._v(" "),v("li",[v("p",[e._v("JSON字段的部分更新（JSON Partial Updates）")])]),e._v(" "),v("li",[v("p",[e._v("支持自增主键的持久化")])]),e._v(" "),v("li",[v("p",[e._v("默认字符集由latin1修改为utf8mb4")])]),e._v(" "),v("li",[v("p",[e._v("默认开启UNDO表空间，且支持在线调整数量（innodb_undo_tablespaces）。在MySQL 5.7中，默认不开启，若要开启，只能初始化时设置")])]),e._v(" "),v("li",[v("p",[e._v("Redo Log的优化，包括允许多个用户线程并发写入log buffer，可动态修改innodb_log_buffer_size的大小")])]),e._v(" "),v("li",[v("p",[e._v("默认的内存临时表由MEMORY引擎更改为TempTable引擎，相比于前者，后者支持以变长方式存储VARCHAR，VARBINARY等变长字段。从MySQL 8.0.13开始，TempTable引擎支持BLOB字段")])]),e._v(" "),v("li",[v("p",[e._v("SELECT ... FOR SHARE和SELECT ... FOR UPDATE语句中引入NOWAIT和SKIP LOCKED选项，解决电商场景热点行问题")])]),e._v(" "),v("li",[v("p",[e._v("正则表达式的增强，新增了4个相关函数，REGEXP_INSTR()，REGEXP_LIKE()，REGEXP_REPLACE()，REGEXP_SUBSTR()")])]),e._v(" "),v("li",[v("p",[e._v("查询优化器在制定执行计划时，会考虑数据是否在Buffer Pool中。而在此之前，是假设数据都在磁盘中")])]),e._v(" "),v("li",[v("p",[e._v("GROUP BY语句不再隐式排序")])]),e._v(" "),v("li",[v("p",[e._v("增加了对于客户端报错信息的统计（performance_schema.events_errors_summary_xxx）")])]),e._v(" "),v("li",[v("p",[e._v("BLOB, TEXT, GEOMETRY和JSON字段允许设置默认值")])])]),e._v(" "),v("blockquote",[v("p",[e._v("参考资料：")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.cn/post/6971697459332382751",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL各大版本新特性一览"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.cn/post/6844904110563524615",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mysql 各版本特性"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("a",{attrs:{href:"https://dev.mysql.com/doc/relnotes/mysql/5.6/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL 5.6 Release Notes"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("a",{attrs:{href:"https://dev.mysql.com/doc/relnotes/mysql/5.7/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL 5.7 Release Notes"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("a",{attrs:{href:"https://dev.mysql.com/doc/relnotes/mysql/8.0/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL 8.0 Release Notes"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=t.exports}}]);