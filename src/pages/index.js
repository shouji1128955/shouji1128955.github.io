import { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const TYPING_TEXTS = [
  'kubectl get pods -n production',
  'prometheus_http_requests_total',
  'terraform apply -auto-approve',
  'helm upgrade --install app ./chart',
  'ansible-playbook site.yml --check',
  'docker build -t registry/app:latest .',
  'alertmanager --config.file=am.yml',
];

function TypingText() {
  const [index, setIndex]         = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const target = TYPING_TEXTS[index];
    let t;
    if (!deleting && displayed.length < target.length) {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === target.length) {
      t = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
    } else {
      setDeleting(false);
      setIndex(i => (i + 1) % TYPING_TEXTS.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, index]);

  return (
    <div className={styles.typingWrap}>
      <span className={styles.typingPrompt}>$&nbsp;</span>
      <span className={styles.typingText}>{displayed}</span>
      <span className={styles.typingCursor} />
    </div>
  );
}

const TechBadges = ['Kubernetes', 'Prometheus', 'Golang', 'Docker', 'Terraform', 'ELK', 'GitOps', 'SRE'];

const DomainList = [
  {
    color: '#2563eb',
    icon: '🔧',
    title: 'SRE & 运维',
    link: '/docs/Sre/1-日常运维',
    tags: ['日常运维', '中间件', '故障处理', '面试经验'],
    desc: '站点可靠性工程实践，覆盖日常运维操作、中间件管理与 SRE 面试题精华。',
  },
  {
    color: '#059669',
    icon: '☸️',
    title: '云原生 & Kubernetes',
    link: '/docs/k8s',
    tags: ['K8s', '容器编排', '微服务', '集群管理'],
    desc: '深入 Kubernetes 生产实践，从集群搭建到工作负载管理，构建稳定的云原生平台。',
  },
  {
    color: '#0284c7',
    icon: '📊',
    title: '可观测性',
    link: '/docs/Prometheus/prometheus',
    tags: ['Prometheus', 'Grafana', 'AlertManager', 'ELK', 'Skywalking'],
    desc: '全链路可观测性体系建设，指标、日志、链路追踪三位一体，让系统状态一目了然。',
  },
  {
    color: '#7c3aed',
    icon: '🚀',
    title: 'DevOps & 工程化',
    link: '/docs/DevOps/1-jenkins',
    tags: ['Jenkins', 'GitOps', 'Terraform', 'Observability'],
    desc: 'CI/CD 流水线、基础设施即代码、GitOps 工作流，推动研发效能持续提升。',
  },
  {
    color: '#0d9488',
    icon: '🐹',
    title: 'Golang 开发',
    link: '/docs/Golang/golang基础',
    tags: ['Go基础', 'Go进阶', '运维工具', 'Vue'],
    desc: '用 Golang 武装运维工程师，从基础语法到高并发实战，打造自己的运维工具链。',
  },
  {
    color: '#64748b',
    icon: '📚',
    title: '知识沉淀',
    link: '/docs/Treasure/Wisdom',
    tags: ['读书笔记', '成长感悟', '规划策略'],
    desc: '好记性不如烂笔头，这里是技术之外的思考——读书、规划与人生感悟。',
  },
];

function HeroSection() {
  return (
    <header className={styles.heroBanner}>
      {/* 背景层 */}
      <div className={styles.heroDots} />
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
      <div className={styles.scanLine} />

      <div className={styles.heroInner}>
        {/* 头像 */}
        <div className={styles.avatarWrap}>
          <div className={styles.avatarGlow} />
          <div className={styles.avatarRing}>
            <span className={styles.avatarEmoji}>👨‍💻</span>
          </div>
        </div>

        {/* 标题 */}
        <Heading as="h1" className={styles.heroTitle}>
          Hi, I'm <span className={styles.highlight}>LiteShell</span>
        </Heading>

        {/* 副标题 */}
        <p className={styles.heroSubtitle}>
          SRE Engineer · 专注于<strong>云原生</strong>、<strong>可观测性</strong>与<strong>基础设施自动化</strong>
        </p>

        {/* 描述 */}
        <p className={styles.heroDesc}>
          记录生产实践中的踩坑与收获，分享 Kubernetes、Prometheus、DevOps 等领域的技术笔记，<br />
          愿每一行配置都经得住凌晨三点的故障考验。
        </p>

        {/* 打字机命令行 */}
        <TypingText />

        {/* 技术标签 */}
        <div className={styles.badgeRow}>
          {TechBadges.map((tag, i) => (
            <span
              key={tag}
              className={styles.techBadge}
              style={{ animationDelay: `${0.6 + i * 0.07}s` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 按钮 */}
        <div className={styles.ctaRow}>
          <Link className={styles.ctaPrimary} to="/docs/Sre/1-日常运维">
            查看文档
          </Link>
          <Link className={styles.ctaSecondary} to="/blog">
            阅读博客
          </Link>
        </div>
      </div>
    </header>
  );
}

function DomainCard({ color, icon, title, link, tags, desc, index }) {
  return (
    <Link
      to={link}
      className={styles.domainCard}
      style={{ animationDelay: `${0.1 + index * 0.08}s`, '--card-color': color }}
    >
      <div className={styles.cardBar} style={{ background: color }} />
      <div className={styles.cardContent}>
        <div className={styles.cardIconBox} style={{ background: `${color}18`, borderColor: `${color}30` }}>
          <span className={styles.cardIcon}>{icon}</span>
        </div>
        <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
        <p className={styles.cardDesc}>{desc}</p>
        <div className={styles.cardTags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.cardTag} style={{ color, background: `${color}12`, borderColor: `${color}25` }}>
              {tag}
            </span>
          ))}
        </div>
        <span className={styles.cardArrow} style={{ color }}>查看笔记 →</span>
      </div>
    </Link>
  );
}

function DomainsSection() {
  return (
    <section className={styles.domainsSection}>
      <div className="container">
        <div className={styles.sectionHead}>
          <Heading as="h2" className={styles.sectionTitle}>知识领域</Heading>
          <p className={styles.sectionSubtitle}>覆盖 SRE 工程师核心技术栈，持续更新中</p>
        </div>
        <div className={styles.domainGrid}>
          {DomainList.map((item, i) => (
            <DomainCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.quoteInner}>
        <div className={styles.quoteIcon}>"</div>
        <p className={styles.quoteText}>
          The goal of SRE is to make the service reliable enough that the team can focus on new features rather than firefighting.
        </p>
        <div className={styles.quoteDivider} />
        <span className={styles.quoteAuthor}>— Google SRE Book</span>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="SRE 工程师的技术笔记"
      description="LiteShell - SRE Engineer，专注于云原生、可观测性与基础设施自动化的技术博客">
      <HeroSection />
      <main>
        <DomainsSection />
        <QuoteSection />
      </main>
    </Layout>
  );
}
