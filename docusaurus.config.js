// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const code_themes = {
//  light: require('prism-react-renderer/themes/github'),
//  dark: require('prism-react-renderer/themes/vsDark'),
//};
import {themes as prismThemes} from 'prism-react-renderer';

//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'LiteShell',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://book.onlinebookshell.co.in/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'shouji1128955', // Usually your GitHub org/user name.
  projectName: 'bookshell', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  //配置搜索的部分
  themes: [
    // ... Your other themes.
    [
        require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The is recommended to set to:
        language: ["en", "zh"],
      },
    ],
  ],


  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: [ "zh-CN", 'en'],
  },

  // ...

  presets: [
    [
      // 'classic',
	  '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
		  sidebarCollapsed: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/shouji1128955/bookshell/edit/main',
		      showLastUpdateAuthor: true, 
          showLastUpdateTime: true,
        },   
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/shouji1128955/bookshell/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),	  
    ],
  ],

  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
		
		
      // Replace with your project's social card
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },	  
      image: 'https://docusaurus.io/zh-CN/img/undraw_typewriter.svg',     
      navbar: {
        title: 'LiteShell',
        logo: {
          alt: 'LiteShell',
          src: 'img/logo.svg',
        },
        items: [
         /* 多语言下拉框部分
          {
            type: 'localeDropdown',
            position: 'right',
          },
          */
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            label: 'Sre',
            position: 'left',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'SreOper',   //这个名称最好是英文
                    to: '/docs/Sre/1-日常运维',
                    label: '日常运维',
                },
                {
                  type: 'docSidebar',
                  sidebarId: 'SreMiddleSoft',   //这个名称最好是英文
                  to: '/docs/Sre/2-中间件',
                  label: '中间件',
              },   
                {
                  type: 'docSidebar',
                  sidebarId: 'SreMianshi',   //这个名称最好是英文
                  to: '/docs/Sre/3-面试题',
                  label: '面试题',
              },  
			  
            ]
        },


      //   {
      //     label: 'Kubernetes',
      //     position: 'left',
      //     items: [
      //         {
      //             type: 'docSidebar',
      //             sidebarId: 'Kubernetes',   //这个名称最好是英文
      //             to: '/docs/Kubernetes',
      //             label: 'Kubernetes',
      //         },
      //     ]
      // },

              {
                label: 'Kubernetes',
                position: 'left',
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'k8s',   //这个名称最好是英文
                        to: '/docs/k8s',
                        label: 'Kubernetes',
                    },
                ]
            },
      {
        label: 'Prometheus',
        position: 'left',
        items: [
            {
                type: 'docSidebar',
                sidebarId: 'PrometheusGrafana',   //这个名称最好是英文
                to: '/docs/Prometheus/grafana',
                label: 'grafana',
            },
            {
                type: 'docSidebar',
                sidebarId: 'PrometheusServer',
                to: '/docs/Prometheus/prometheus',
                label: 'Prometheus',
            },
            {
                type: 'docSidebar',
                sidebarId: 'PrometheusAlert',
                to: '/docs/Prometheus/alertManager',
                label: 'AlertManager',
          },                               
        ]
    },
    
    {
      label: 'DevOps',
      position: 'left',
      items: [
          {
              type: 'docSidebar',
              sidebarId: 'DevOpsJenkins',   //这个名称最好是英文
              to: '/docs/DevOps/1-jenkins',
              label: 'jenkins',
          },
          {
            type: 'docSidebar',
            sidebarId: 'DevOpsGitOps',   //这个名称最好是英文
            to: '/docs/DevOps/2-gitOps',
            label: 'gitOps',
          },
          {
            type: 'docSidebar',
            sidebarId: 'DevOpsElk',   //这个名称最好是英文
            to: '/docs/DevOps/3-ELK',
            label: 'ELK',
          },  
          {
            type: 'docSidebar',
            sidebarId: 'DevOpsSkywalking',   //这个名称最好是英文
            to: '/docs/DevOps/4-skywalking',
            label: 'skywalking',
          },
          {
            type: 'docSidebar',
            sidebarId: 'DevOpsobservability',   //这个名称最好是英文
            to: '/docs/DevOps/5-observability',
            label: 'observability',
          },
          {
            type: 'docSidebar',
            sidebarId: 'DevOpsterraform',   //这个名称最好是英文
            to: '/docs/DevOps/6-terraform',
            label: 'terraform',
          },
		  
      ]
  },                           
          {
            label: 'Golang',
            position: 'left',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'GoalngJichu',   //这个名称最好是英文
                    to: '/docs/Golang/golang基础',
                    label: 'golang基础',
                },
                {
                  type: 'docSidebar',
                  sidebarId: 'GoalngJinjie',   //这个名称最好是英文
                  to: '/docs/Golang/golang进阶',
                  label: 'golang进阶',
              },
                {
                type: 'docSidebar',
                sidebarId: 'GoalngOper',   //这个名称最好是英文
                to: '/docs/Golang/golang运维',
                label: 'golang运维',
              },     
                 {
                type: 'docSidebar',
                sidebarId: 'GoalngVue',   //这个名称最好是英文
                to: '/docs/Golang/VUE',
                label: 'Vue',
              },                           
            ]
        }, 

          {
            label: 'JAVA',
            position: 'left',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'JAVA',   //这个名称最好是英文
                    to: '/docs/Java/JAVA',
                    label: 'Java',
                },                          
            ]
        },
          {
            label: 'Treasure',
            position: 'left',
            items: [
                {
                  type: 'docSidebar',
                  sidebarId: 'Wisdom',   //这个名称最好是英文
                  to: '/docs/Treasure/Wisdom',
                  label: 'Plan and strategize',
              },
                {
                type: 'docSidebar',
                sidebarId: 'Studytour',   //这个名称最好是英文
                to: '/docs/Treasure/Studytour',
                label: 'read book',
              },                         
            ]
        }, 		
          {to: '/blog',
           label: 'Blog',
          position: 'left'
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
   
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'LiteShell',
                href: 'https://shouji1128955.github.io'
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'kubernetes',
                href: 'https://kubernetes.io/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'mindoc',
                //to: '/blog',
                href: 'https://mindoc.zlqit.com'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/shouji1128955',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Blog Project - LiteShell`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        },
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],

        //设置默认语言
        defaultLanguage: 'shell',
    }),
};

module.exports = config;
