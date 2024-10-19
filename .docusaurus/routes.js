import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog', 'a1c'),
    exact: true
  },
  {
    path: '/en/blog/2023/12/19/mongodb数据库恢复',
    component: ComponentCreator('/en/blog/2023/12/19/mongodb数据库恢复', '923'),
    exact: true
  },
  {
    path: '/en/blog/2024/4.npm操作',
    component: ComponentCreator('/en/blog/2024/4.npm操作', 'eb9'),
    exact: true
  },
  {
    path: '/en/blog/archive',
    component: ComponentCreator('/en/blog/archive', 'd28'),
    exact: true
  },
  {
    path: '/en/blog/authors',
    component: ComponentCreator('/en/blog/authors', '32d'),
    exact: true
  },
  {
    path: '/en/blog/config-docusaurus-v2',
    component: ComponentCreator('/en/blog/config-docusaurus-v2', '269'),
    exact: true
  },
  {
    path: '/en/blog/github结合actions实现自动化部署',
    component: ComponentCreator('/en/blog/github结合actions实现自动化部署', '69f'),
    exact: true
  },
  {
    path: '/en/blog/tags',
    component: ComponentCreator('/en/blog/tags', 'fb7'),
    exact: true
  },
  {
    path: '/en/blog/tags/action',
    component: ComponentCreator('/en/blog/tags/action', '63d'),
    exact: true
  },
  {
    path: '/en/blog/tags/docusaurus',
    component: ComponentCreator('/en/blog/tags/docusaurus', '69e'),
    exact: true
  },
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '63b'),
    exact: true
  },
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', '5d6'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', '031'),
    routes: [
      {
        path: '/en/docs',
        component: ComponentCreator('/en/docs', 'b5d'),
        routes: [
          {
            path: '/en/docs',
            component: ComponentCreator('/en/docs', 'd1b'),
            routes: [
              {
                path: '/en/docs/DevOps/ELK/elasticsearch操作',
                component: ComponentCreator('/en/docs/DevOps/ELK/elasticsearch操作', '3d4'),
                exact: true,
                sidebar: "DevOpsElk"
              },
              {
                path: '/en/docs/DevOps/ELK/ELK测试部署',
                component: ComponentCreator('/en/docs/DevOps/ELK/ELK测试部署', '8ed'),
                exact: true,
                sidebar: "DevOpsElk"
              },
              {
                path: '/en/docs/DevOps/ELK/ELK日志告警',
                component: ComponentCreator('/en/docs/DevOps/ELK/ELK日志告警', '998'),
                exact: true,
                sidebar: "DevOpsElk"
              },
              {
                path: '/en/docs/DevOps/gitOps/Tekton-catalog',
                component: ComponentCreator('/en/docs/DevOps/gitOps/Tekton-catalog', 'a63'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/en/docs/DevOps/gitOps/tekton-results',
                component: ComponentCreator('/en/docs/DevOps/gitOps/tekton-results', 'eff'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/en/docs/DevOps/gitOps/Tekton-sidecar',
                component: ComponentCreator('/en/docs/DevOps/gitOps/Tekton-sidecar', '655'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/en/docs/DevOps/gitOps/Tekton-triggers',
                component: ComponentCreator('/en/docs/DevOps/gitOps/Tekton-triggers', 'd03'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/en/docs/DevOps/gitOps/Tekton-workspace',
                component: ComponentCreator('/en/docs/DevOps/gitOps/Tekton-workspace', '9cc'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/en/docs/DevOps/gitOps/tekton安装',
                component: ComponentCreator('/en/docs/DevOps/gitOps/tekton安装', '345'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/en/docs/DevOps/gitOps/tekton拉取代码',
                component: ComponentCreator('/en/docs/DevOps/gitOps/tekton拉取代码', '6af'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/en/docs/DevOps/jenkins/通过ansible实现服务发布/配置ansible',
                component: ComponentCreator('/en/docs/DevOps/jenkins/通过ansible实现服务发布/配置ansible', 'd22'),
                exact: true,
                sidebar: "DevOpsJenkins"
              },
              {
                path: '/en/docs/DevOps/jenkins/hello',
                component: ComponentCreator('/en/docs/DevOps/jenkins/hello', 'a41'),
                exact: true,
                sidebar: "DevOpsJenkins"
              },
              {
                path: '/en/docs/DevOps/jenkins/jenkins安装配置/jenkins安装配置',
                component: ComponentCreator('/en/docs/DevOps/jenkins/jenkins安装配置/jenkins安装配置', '4ec'),
                exact: true,
                sidebar: "DevOpsJenkins"
              },
              {
                path: '/en/docs/DevOps/observability/OpenTelemetry',
                component: ComponentCreator('/en/docs/DevOps/observability/OpenTelemetry', '847'),
                exact: true,
                sidebar: "DevOpsobservability"
              },
              {
                path: '/en/docs/DevOps/skywalking/elasticsearch容器集群安装',
                component: ComponentCreator('/en/docs/DevOps/skywalking/elasticsearch容器集群安装', 'b8a'),
                exact: true,
                sidebar: "DevOpsSkywalking"
              },
              {
                path: '/en/docs/DevOps/skywalking/zookeeper安装',
                component: ComponentCreator('/en/docs/DevOps/skywalking/zookeeper安装', '586'),
                exact: true,
                sidebar: "DevOpsSkywalking"
              },
              {
                path: '/en/docs/DevOps/terraform/terraform',
                component: ComponentCreator('/en/docs/DevOps/terraform/terraform', 'f4b'),
                exact: true,
                sidebar: "DevOpsterraform"
              },
              {
                path: '/en/docs/Golang/golang基础/笔记总结/笔记总结',
                component: ComponentCreator('/en/docs/Golang/golang基础/笔记总结/笔记总结', '5f8'),
                exact: true,
                sidebar: "GoalngJichu"
              },
              {
                path: '/en/docs/Golang/golang基础/Go核心编程2023/golang',
                component: ComponentCreator('/en/docs/Golang/golang基础/Go核心编程2023/golang', '2d9'),
                exact: true,
                sidebar: "GoalngJichu"
              },
              {
                path: '/en/docs/Golang/golang基础/go语言读取多种格式配置文件/Golang读取各种配置文件',
                component: ComponentCreator('/en/docs/Golang/golang基础/go语言读取多种格式配置文件/Golang读取各种配置文件', '81d'),
                exact: true,
                sidebar: "GoalngJichu"
              },
              {
                path: '/en/docs/Golang/golang基础/golang环境信息配置/golang环境信息配置',
                component: ComponentCreator('/en/docs/Golang/golang基础/golang环境信息配置/golang环境信息配置', 'c55'),
                exact: true,
                sidebar: "GoalngJichu"
              },
              {
                path: '/en/docs/Golang/golang进阶/问题汇总/ORM数据库汇总',
                component: ComponentCreator('/en/docs/Golang/golang进阶/问题汇总/ORM数据库汇总', '107'),
                exact: true,
                sidebar: "GoalngJinjie"
              },
              {
                path: '/en/docs/Golang/golang进阶/gin框架2023/Gin框架',
                component: ComponentCreator('/en/docs/Golang/golang进阶/gin框架2023/Gin框架', 'a3f'),
                exact: true,
                sidebar: "GoalngJinjie"
              },
              {
                path: '/en/docs/Golang/golang进阶/mysql数据库/Mysql基础',
                component: ComponentCreator('/en/docs/Golang/golang进阶/mysql数据库/Mysql基础', 'b08'),
                exact: true,
                sidebar: "GoalngJinjie"
              },
              {
                path: '/en/docs/Golang/golang运维/项目1-Bingo/Bingo',
                component: ComponentCreator('/en/docs/Golang/golang运维/项目1-Bingo/Bingo', '1e8'),
                exact: true,
                sidebar: "GoalngOper"
              },
              {
                path: '/en/docs/Golang/VUE/vue入门教程/html基础',
                component: ComponentCreator('/en/docs/Golang/VUE/vue入门教程/html基础', '778'),
                exact: true,
                sidebar: "GoalngVue"
              },
              {
                path: '/en/docs/Golang/VUE/vue入门教程/vue环境安装',
                component: ComponentCreator('/en/docs/Golang/VUE/vue入门教程/vue环境安装', 'c09'),
                exact: true,
                sidebar: "GoalngVue"
              },
              {
                path: '/en/docs/Golang/VUE/vue入门教程/vue入门教程1',
                component: ComponentCreator('/en/docs/Golang/VUE/vue入门教程/vue入门教程1', 'ac7'),
                exact: true,
                sidebar: "GoalngVue"
              },
              {
                path: '/en/docs/Golang/VUE/vue入门教程/vue入门教程2',
                component: ComponentCreator('/en/docs/Golang/VUE/vue入门教程/vue入门教程2', '672'),
                exact: true,
                sidebar: "GoalngVue"
              },
              {
                path: '/en/docs/Golang/VUE/vue入门教程/vue项目学习',
                component: ComponentCreator('/en/docs/Golang/VUE/vue入门教程/vue项目学习', '5b5'),
                exact: true,
                sidebar: "GoalngVue"
              },
              {
                path: '/en/docs/Java/JAVA/admin组件',
                component: ComponentCreator('/en/docs/Java/JAVA/admin组件', '743'),
                exact: true,
                sidebar: "JAVA"
              },
              {
                path: '/en/docs/k8s/更新内核',
                component: ComponentCreator('/en/docs/k8s/更新内核', 'a90'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/en/docs/k8s/ansible安装k8s-1.24.12',
                component: ComponentCreator('/en/docs/k8s/ansible安装k8s-1.24.12', '75a'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/en/docs/k8s/Controller',
                component: ComponentCreator('/en/docs/k8s/Controller', '9c1'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/en/docs/k8s/helm',
                component: ComponentCreator('/en/docs/k8s/helm', '4c9'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/en/docs/k8s/k8s_studay',
                component: ComponentCreator('/en/docs/k8s/k8s_studay', '064'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/en/docs/k8s/kubernetes_cka',
                component: ComponentCreator('/en/docs/k8s/kubernetes_cka', '7a0'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/en/docs/k8s/operator',
                component: ComponentCreator('/en/docs/k8s/operator', '85c'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/en/docs/Prometheus/alertManager/alertmanager告警配置',
                component: ComponentCreator('/en/docs/Prometheus/alertManager/alertmanager告警配置', 'c05'),
                exact: true,
                sidebar: "PrometheusAlert"
              },
              {
                path: '/en/docs/Prometheus/grafana',
                component: ComponentCreator('/en/docs/Prometheus/grafana', '8c7'),
                exact: true,
                sidebar: "PrometheusGrafana"
              },
              {
                path: '/en/docs/Prometheus/prometheus/告警指标汇总',
                component: ComponentCreator('/en/docs/Prometheus/prometheus/告警指标汇总', '4d8'),
                exact: true,
                sidebar: "PrometheusServer"
              },
              {
                path: '/en/docs/Prometheus/prometheus/prometheus指标',
                component: ComponentCreator('/en/docs/Prometheus/prometheus/prometheus指标', '82c'),
                exact: true,
                sidebar: "PrometheusServer"
              },
              {
                path: '/en/docs/Prometheus/prometheus/ServiceMoinitor',
                component: ComponentCreator('/en/docs/Prometheus/prometheus/ServiceMoinitor', '40b'),
                exact: true,
                sidebar: "PrometheusServer"
              },
              {
                path: '/en/docs/Sre/面试题/缓存服务',
                component: ComponentCreator('/en/docs/Sre/面试题/缓存服务', '01f'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/en/docs/Sre/面试题/基础面试题',
                component: ComponentCreator('/en/docs/Sre/面试题/基础面试题', '84f'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/en/docs/Sre/面试题/监控',
                component: ComponentCreator('/en/docs/Sre/面试题/监控', '36b'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/en/docs/Sre/面试题/容器技术',
                component: ComponentCreator('/en/docs/Sre/面试题/容器技术', 'e95'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/en/docs/Sre/面试题/golang面试题',
                component: ComponentCreator('/en/docs/Sre/面试题/golang面试题', '0c6'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/en/docs/Sre/面试题/kubernetes面试题',
                component: ComponentCreator('/en/docs/Sre/面试题/kubernetes面试题', '5aa'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/en/docs/Sre/面试题/prometheus部署文档输出',
                component: ComponentCreator('/en/docs/Sre/面试题/prometheus部署文档输出', 'e43'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/en/docs/Sre/面试题/python',
                component: ComponentCreator('/en/docs/Sre/面试题/python', 'b71'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/en/docs/Sre/日常运维/安全配置',
                component: ComponentCreator('/en/docs/Sre/日常运维/安全配置', '87c'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/en/docs/Sre/日常运维/磁盘管理',
                component: ComponentCreator('/en/docs/Sre/日常运维/磁盘管理', 'b55'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/en/docs/Sre/日常运维/计算机网络软考',
                component: ComponentCreator('/en/docs/Sre/日常运维/计算机网络软考', '6bf'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/en/docs/Sre/日常运维/脚本管理',
                component: ComponentCreator('/en/docs/Sre/日常运维/脚本管理', '665'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/en/docs/Sre/日常运维/镜像列表',
                component: ComponentCreator('/en/docs/Sre/日常运维/镜像列表', 'a87'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/en/docs/Sre/日常运维/网络相关',
                component: ComponentCreator('/en/docs/Sre/日常运维/网络相关', 'e78'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/en/docs/Sre/日常运维/clickhouse集群节点重新加入',
                component: ComponentCreator('/en/docs/Sre/日常运维/clickhouse集群节点重新加入', '315'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/en/docs/Sre/日常运维/conflunce安装',
                component: ComponentCreator('/en/docs/Sre/日常运维/conflunce安装', 'f98'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/en/docs/Sre/日常运维/git操作',
                component: ComponentCreator('/en/docs/Sre/日常运维/git操作', '268'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/en/docs/Sre/日常运维/mac办公协作',
                component: ComponentCreator('/en/docs/Sre/日常运维/mac办公协作', '37f'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/en/docs/Sre/日常运维/npm操作',
                component: ComponentCreator('/en/docs/Sre/日常运维/npm操作', 'aae'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/en/docs/Sre/日常运维/operator',
                component: ComponentCreator('/en/docs/Sre/日常运维/operator', 'ce7'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/en/docs/Sre/中间件/cilium',
                component: ComponentCreator('/en/docs/Sre/中间件/cilium', '8b3'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Sre/中间件/clickhouse',
                component: ComponentCreator('/en/docs/Sre/中间件/clickhouse', '1e3'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Sre/中间件/databasebackup-restore',
                component: ComponentCreator('/en/docs/Sre/中间件/databasebackup-restore', 'e23'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Sre/中间件/Elasticsearch',
                component: ComponentCreator('/en/docs/Sre/中间件/Elasticsearch', '6aa'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Sre/中间件/Harbor',
                component: ComponentCreator('/en/docs/Sre/中间件/Harbor', '67c'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Sre/中间件/Mysql',
                component: ComponentCreator('/en/docs/Sre/中间件/Mysql', 'bee'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Sre/中间件/nginx',
                component: ComponentCreator('/en/docs/Sre/中间件/nginx', '169'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Sre/中间件/nomad',
                component: ComponentCreator('/en/docs/Sre/中间件/nomad', '900'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Sre/中间件/openvpn',
                component: ComponentCreator('/en/docs/Sre/中间件/openvpn', 'dc1'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Sre/中间件/Postgresql',
                component: ComponentCreator('/en/docs/Sre/中间件/Postgresql', '4ee'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Sre/中间件/pulsar',
                component: ComponentCreator('/en/docs/Sre/中间件/pulsar', '56e'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Sre/中间件/Redis',
                component: ComponentCreator('/en/docs/Sre/中间件/Redis', 'be4'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Sre/中间件/TongWeb',
                component: ComponentCreator('/en/docs/Sre/中间件/TongWeb', '62a'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Sre/中间件/Traefik',
                component: ComponentCreator('/en/docs/Sre/中间件/Traefik', '43b'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Sre/中间件/YAPI',
                component: ComponentCreator('/en/docs/Sre/中间件/YAPI', '7e8'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Sre/中间件/zookeeper',
                component: ComponentCreator('/en/docs/Sre/中间件/zookeeper', '110'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/en/docs/Treasure/Studytour/莱卡',
                component: ComponentCreator('/en/docs/Treasure/Studytour/莱卡', 'a1e'),
                exact: true,
                sidebar: "Studytour"
              },
              {
                path: '/en/docs/Treasure/Wisdom/国学经典',
                component: ComponentCreator('/en/docs/Treasure/Wisdom/国学经典', '9d2'),
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
    path: '/en/',
    component: ComponentCreator('/en/', 'd3c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
