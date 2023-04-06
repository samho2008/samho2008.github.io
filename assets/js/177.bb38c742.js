(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{1970:function(e,n,r){"use strict";r.r(n);var a=r(34),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"mariadb-cnf-配置文件模板"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mariadb-cnf-配置文件模板"}},[e._v("#")]),e._v(" MariaDB cnf 配置文件模板")]),e._v(" "),r("p",[e._v("mariadb-server.cnf")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("#\n# These groups are read by MariaDB server.\n# Use it for options that only the server (but not clients) should see\n#\n# See the examples of server my.cnf files in /usr/share/mysql/\n#\n\n# this is read by the standalone daemon and embedded servers\n[server]\ncharacter-set-server=utf8\n\n# this is only for the mysqld standalone daemon\n# Settings user and group are ignored when systemd is used.\n# If you need to run mysqld under a different user or group,\n# customize your systemd unit file for mysqld/mariadb according to the\n# instructions in http://fedoraproject.org/wiki/Systemd\n[mysqld]\ndatadir=/var/lib/mysql\nsocket=/var/lib/mysql/mysql.sock\nlog-error=/var/log/mariadb/mariadb.log\npid-file=/run/mariadb/mariadb.pid\n\n\n#\n# * Galera-related settings\n#\n[galera]\n# Mandatory settings\n#wsrep_on=ON\n#wsrep_provider=\n#wsrep_cluster_address=\n#binlog_format=row\n#default_storage_engine=InnoDB\n#innodb_autoinc_lock_mode=2\n#\n# Allow server to accept connections on all interfaces.\n#\n#bind-address=0.0.0.0\n#\n# Optional setting\n#wsrep_slave_threads=1\n#innodb_flush_log_at_trx_commit=0\n\n# this is only for embedded server\n[embedded]\n\n# This group is only read by MariaDB servers, not by MySQL.\n# If you use the same .cnf file for MySQL and MariaDB,\n# you can put MariaDB-only options here\n[mariadb]\n\n# This group is only read by MariaDB-10.3 servers.\n# If you use the same .cnf file for MariaDB of different versions,\n# use this group for options that older servers don't understand\n[mariadb-10.3]\n\n")])])]),r("blockquote",[r("p",[e._v("参考资料：")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://doc.canglaoshi.org/config/mariadb-server.cnf",target:"_blank",rel:"noopener noreferrer"}},[e._v("CentOS MariaDB UTF-8配置文件"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=s.exports}}]);