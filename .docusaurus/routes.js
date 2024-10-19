import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ea1'),
    exact: true
  },
  {
    path: '/blog/2023/12/19/mongodb数据库恢复',
    component: ComponentCreator('/blog/2023/12/19/mongodb数据库恢复', '207'),
    exact: true
  },
  {
    path: '/blog/2024/4.npm操作',
    component: ComponentCreator('/blog/2024/4.npm操作', '958'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/config-docusaurus-v2',
    component: ComponentCreator('/blog/config-docusaurus-v2', '288'),
    exact: true
  },
  {
    path: '/blog/github结合actions实现自动化部署',
    component: ComponentCreator('/blog/github结合actions实现自动化部署', '801'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/action',
    component: ComponentCreator('/blog/tags/action', '95f'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '1c3'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ae3'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '283'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '87b'),
            routes: [
              {
                path: '/docs/DevOps/ELK/elasticsearch操作',
                component: ComponentCreator('/docs/DevOps/ELK/elasticsearch操作', 'bc2'),
                exact: true,
                sidebar: "DevOpsElk"
              },
              {
                path: '/docs/DevOps/ELK/ELK测试部署',
                component: ComponentCreator('/docs/DevOps/ELK/ELK测试部署', '9d5'),
                exact: true,
                sidebar: "DevOpsElk"
              },
              {
                path: '/docs/DevOps/ELK/ELK日志告警',
                component: ComponentCreator('/docs/DevOps/ELK/ELK日志告警', '1fb'),
                exact: true,
                sidebar: "DevOpsElk"
              },
              {
                path: '/docs/DevOps/gitOps/Tekton-catalog',
                component: ComponentCreator('/docs/DevOps/gitOps/Tekton-catalog', '8f7'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/docs/DevOps/gitOps/tekton-results',
                component: ComponentCreator('/docs/DevOps/gitOps/tekton-results', 'f56'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/docs/DevOps/gitOps/Tekton-sidecar',
                component: ComponentCreator('/docs/DevOps/gitOps/Tekton-sidecar', 'cd9'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/docs/DevOps/gitOps/Tekton-triggers',
                component: ComponentCreator('/docs/DevOps/gitOps/Tekton-triggers', '02a'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/docs/DevOps/gitOps/Tekton-workspace',
                component: ComponentCreator('/docs/DevOps/gitOps/Tekton-workspace', '25c'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/docs/DevOps/gitOps/tekton安装',
                component: ComponentCreator('/docs/DevOps/gitOps/tekton安装', 'de5'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/docs/DevOps/gitOps/tekton拉取代码',
                component: ComponentCreator('/docs/DevOps/gitOps/tekton拉取代码', '4d8'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/docs/DevOps/jenkins/通过ansible实现服务发布/配置ansible',
                component: ComponentCreator('/docs/DevOps/jenkins/通过ansible实现服务发布/配置ansible', '5be'),
                exact: true,
                sidebar: "DevOpsJenkins"
              },
              {
                path: '/docs/DevOps/jenkins/hello',
                component: ComponentCreator('/docs/DevOps/jenkins/hello', 'a98'),
                exact: true,
                sidebar: "DevOpsJenkins"
              },
              {
                path: '/docs/DevOps/jenkins/jenkins安装配置/jenkins安装配置',
                component: ComponentCreator('/docs/DevOps/jenkins/jenkins安装配置/jenkins安装配置', '15d'),
                exact: true,
                sidebar: "DevOpsJenkins"
              },
              {
                path: '/docs/DevOps/observability/OpenTelemetry',
                component: ComponentCreator('/docs/DevOps/observability/OpenTelemetry', '26e'),
                exact: true,
                sidebar: "DevOpsobservability"
              },
              {
                path: '/docs/DevOps/skywalking/elasticsearch容器集群安装',
                component: ComponentCreator('/docs/DevOps/skywalking/elasticsearch容器集群安装', 'bb8'),
                exact: true,
                sidebar: "DevOpsSkywalking"
              },
              {
                path: '/docs/DevOps/skywalking/zookeeper安装',
                component: ComponentCreator('/docs/DevOps/skywalking/zookeeper安装', '3b0'),
                exact: true,
                sidebar: "DevOpsSkywalking"
              },
              {
                path: '/docs/DevOps/terraform/terraform',
                component: ComponentCreator('/docs/DevOps/terraform/terraform', 'eba'),
                exact: true,
                sidebar: "DevOpsterraform"
              },
              {
                path: '/docs/Golang/golang基础/笔记总结/笔记总结',
                component: ComponentCreator('/docs/Golang/golang基础/笔记总结/笔记总结', '8bf'),
                exact: true,
                sidebar: "GoalngJichu"
              },
              {
                path: '/docs/Golang/golang基础/Go核心编程2023/golang',
                component: ComponentCreator('/docs/Golang/golang基础/Go核心编程2023/golang', 'e74'),
                exact: true,
                sidebar: "GoalngJichu"
              },
              {
                path: '/docs/Golang/golang基础/go语言读取多种格式配置文件/Golang读取各种配置文件',
                component: ComponentCreator('/docs/Golang/golang基础/go语言读取多种格式配置文件/Golang读取各种配置文件', '8db'),
                exact: true,
                sidebar: "GoalngJichu"
              },
              {
                path: '/docs/Golang/golang基础/golang环境信息配置/golang环境信息配置',
                component: ComponentCreator('/docs/Golang/golang基础/golang环境信息配置/golang环境信息配置', 'd1f'),
                exact: true,
                sidebar: "GoalngJichu"
              },
              {
                path: '/docs/Golang/golang进阶/问题汇总/ORM数据库汇总',
                component: ComponentCreator('/docs/Golang/golang进阶/问题汇总/ORM数据库汇总', '527'),
                exact: true,
                sidebar: "GoalngJinjie"
              },
              {
                path: '/docs/Golang/golang进阶/gin框架2023/Gin框架',
                component: ComponentCreator('/docs/Golang/golang进阶/gin框架2023/Gin框架', 'd0e'),
                exact: true,
                sidebar: "GoalngJinjie"
              },
              {
                path: '/docs/Golang/golang进阶/mysql数据库/Mysql基础',
                component: ComponentCreator('/docs/Golang/golang进阶/mysql数据库/Mysql基础', 'ff9'),
                exact: true,
                sidebar: "GoalngJinjie"
              },
              {
                path: '/docs/Golang/golang运维/项目1-Bingo/Bingo',
                component: ComponentCreator('/docs/Golang/golang运维/项目1-Bingo/Bingo', '138'),
                exact: true,
                sidebar: "GoalngOper"
              },
              {
                path: '/docs/Golang/VUE/vue入门教程/html基础',
                component: ComponentCreator('/docs/Golang/VUE/vue入门教程/html基础', '637'),
                exact: true,
                sidebar: "GoalngVue"
              },
              {
                path: '/docs/Golang/VUE/vue入门教程/vue环境安装',
                component: ComponentCreator('/docs/Golang/VUE/vue入门教程/vue环境安装', 'b49'),
                exact: true,
                sidebar: "GoalngVue"
              },
              {
                path: '/docs/Golang/VUE/vue入门教程/vue入门教程1',
                component: ComponentCreator('/docs/Golang/VUE/vue入门教程/vue入门教程1', 'ebe'),
                exact: true,
                sidebar: "GoalngVue"
              },
              {
                path: '/docs/Golang/VUE/vue入门教程/vue入门教程2',
                component: ComponentCreator('/docs/Golang/VUE/vue入门教程/vue入门教程2', '36b'),
                exact: true,
                sidebar: "GoalngVue"
              },
              {
                path: '/docs/Golang/VUE/vue入门教程/vue项目学习',
                component: ComponentCreator('/docs/Golang/VUE/vue入门教程/vue项目学习', '123'),
                exact: true,
                sidebar: "GoalngVue"
              },
              {
                path: '/docs/Java/JAVA/admin组件',
                component: ComponentCreator('/docs/Java/JAVA/admin组件', '5d0'),
                exact: true,
                sidebar: "JAVA"
              },
              {
                path: '/docs/k8s/更新内核',
                component: ComponentCreator('/docs/k8s/更新内核', '122'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/docs/k8s/ansible安装k8s-1.24.12',
                component: ComponentCreator('/docs/k8s/ansible安装k8s-1.24.12', 'b17'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/docs/k8s/Controller',
                component: ComponentCreator('/docs/k8s/Controller', '5ad'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/docs/k8s/helm',
                component: ComponentCreator('/docs/k8s/helm', '4f6'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/docs/k8s/k8s_studay',
                component: ComponentCreator('/docs/k8s/k8s_studay', '43d'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/docs/k8s/kubernetes_cka',
                component: ComponentCreator('/docs/k8s/kubernetes_cka', '0bb'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/docs/k8s/operator',
                component: ComponentCreator('/docs/k8s/operator', '4cb'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/docs/Prometheus/alertManager/alertmanager告警配置',
                component: ComponentCreator('/docs/Prometheus/alertManager/alertmanager告警配置', 'ed0'),
                exact: true,
                sidebar: "PrometheusAlert"
              },
              {
                path: '/docs/Prometheus/grafana',
                component: ComponentCreator('/docs/Prometheus/grafana', '663'),
                exact: true,
                sidebar: "PrometheusGrafana"
              },
              {
                path: '/docs/Prometheus/prometheus/告警指标汇总',
                component: ComponentCreator('/docs/Prometheus/prometheus/告警指标汇总', '1f5'),
                exact: true,
                sidebar: "PrometheusServer"
              },
              {
                path: '/docs/Prometheus/prometheus/prometheus指标',
                component: ComponentCreator('/docs/Prometheus/prometheus/prometheus指标', '796'),
                exact: true,
                sidebar: "PrometheusServer"
              },
              {
                path: '/docs/Prometheus/prometheus/ServiceMoinitor',
                component: ComponentCreator('/docs/Prometheus/prometheus/ServiceMoinitor', 'bb6'),
                exact: true,
                sidebar: "PrometheusServer"
              },
              {
                path: '/docs/Sre/面试题/缓存服务',
                component: ComponentCreator('/docs/Sre/面试题/缓存服务', '6c8'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/docs/Sre/面试题/基础面试题',
                component: ComponentCreator('/docs/Sre/面试题/基础面试题', '7d2'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/docs/Sre/面试题/监控',
                component: ComponentCreator('/docs/Sre/面试题/监控', '9b0'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/docs/Sre/面试题/容器技术',
                component: ComponentCreator('/docs/Sre/面试题/容器技术', 'd02'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/docs/Sre/面试题/golang面试题',
                component: ComponentCreator('/docs/Sre/面试题/golang面试题', '30b'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/docs/Sre/面试题/kubernetes面试题',
                component: ComponentCreator('/docs/Sre/面试题/kubernetes面试题', '7dc'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/docs/Sre/面试题/prometheus部署文档输出',
                component: ComponentCreator('/docs/Sre/面试题/prometheus部署文档输出', '5da'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/docs/Sre/面试题/python',
                component: ComponentCreator('/docs/Sre/面试题/python', '921'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/docs/Sre/日常运维/安全配置',
                component: ComponentCreator('/docs/Sre/日常运维/安全配置', '4a4'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/docs/Sre/日常运维/磁盘管理',
                component: ComponentCreator('/docs/Sre/日常运维/磁盘管理', '15e'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/docs/Sre/日常运维/计算机网络软考',
                component: ComponentCreator('/docs/Sre/日常运维/计算机网络软考', '4a2'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/docs/Sre/日常运维/脚本管理',
                component: ComponentCreator('/docs/Sre/日常运维/脚本管理', '49c'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/docs/Sre/日常运维/镜像列表',
                component: ComponentCreator('/docs/Sre/日常运维/镜像列表', '64d'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/docs/Sre/日常运维/网络相关',
                component: ComponentCreator('/docs/Sre/日常运维/网络相关', '1c1'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/docs/Sre/日常运维/clickhouse集群节点重新加入',
                component: ComponentCreator('/docs/Sre/日常运维/clickhouse集群节点重新加入', '808'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/docs/Sre/日常运维/conflunce安装',
                component: ComponentCreator('/docs/Sre/日常运维/conflunce安装', 'fd3'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/docs/Sre/日常运维/git操作',
                component: ComponentCreator('/docs/Sre/日常运维/git操作', '9ac'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/docs/Sre/日常运维/mac办公协作',
                component: ComponentCreator('/docs/Sre/日常运维/mac办公协作', 'ae1'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/docs/Sre/日常运维/npm操作',
                component: ComponentCreator('/docs/Sre/日常运维/npm操作', 'c1e'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/docs/Sre/日常运维/operator',
                component: ComponentCreator('/docs/Sre/日常运维/operator', '996'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/docs/Sre/中间件/cilium',
                component: ComponentCreator('/docs/Sre/中间件/cilium', '093'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Sre/中间件/clickhouse',
                component: ComponentCreator('/docs/Sre/中间件/clickhouse', 'f99'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Sre/中间件/databasebackup-restore',
                component: ComponentCreator('/docs/Sre/中间件/databasebackup-restore', '259'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Sre/中间件/Elasticsearch',
                component: ComponentCreator('/docs/Sre/中间件/Elasticsearch', '52e'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Sre/中间件/Harbor',
                component: ComponentCreator('/docs/Sre/中间件/Harbor', '5e9'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Sre/中间件/Mysql',
                component: ComponentCreator('/docs/Sre/中间件/Mysql', '7ee'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Sre/中间件/nginx',
                component: ComponentCreator('/docs/Sre/中间件/nginx', 'f69'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Sre/中间件/nomad',
                component: ComponentCreator('/docs/Sre/中间件/nomad', '1c4'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Sre/中间件/openvpn',
                component: ComponentCreator('/docs/Sre/中间件/openvpn', '012'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Sre/中间件/Postgresql',
                component: ComponentCreator('/docs/Sre/中间件/Postgresql', '994'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Sre/中间件/pulsar',
                component: ComponentCreator('/docs/Sre/中间件/pulsar', 'c55'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Sre/中间件/Redis',
                component: ComponentCreator('/docs/Sre/中间件/Redis', 'f36'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Sre/中间件/TongWeb',
                component: ComponentCreator('/docs/Sre/中间件/TongWeb', '30f'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Sre/中间件/Traefik',
                component: ComponentCreator('/docs/Sre/中间件/Traefik', '08c'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Sre/中间件/YAPI',
                component: ComponentCreator('/docs/Sre/中间件/YAPI', '873'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Sre/中间件/zookeeper',
                component: ComponentCreator('/docs/Sre/中间件/zookeeper', 'c2e'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/docs/Treasure/Studytour/莱卡',
                component: ComponentCreator('/docs/Treasure/Studytour/莱卡', 'efe'),
                exact: true,
                sidebar: "Studytour"
              },
              {
                path: '/docs/Treasure/Wisdom/国学经典',
                component: ComponentCreator('/docs/Treasure/Wisdom/国学经典', 'bbb'),
                exact: true,
                sidebar: "Wisdom"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
