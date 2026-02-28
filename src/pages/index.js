import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const TechBadges = ['Kubernetes', 'Prometheus', 'Golang', 'Docker', 'Terraform', 'ELK', 'GitOps', 'SRE'];

const DomainList = [
  {
    icon: '🔧',
    title: 'SRE & 运维',
    link: '/docs/Sre/1-日常运维',
    tags: ['日常运维', '中间件', '故障处理', '面试经验'],
    desc: '站点可靠性工程实践，覆盖日常运维操作、中间件管理与 SRE 面试题精华。',
  },
  {
    icon: '☸️',
    title: '云原生 & Kubernetes',
    link: '/docs/k8s',
    tags: ['K8s', '容器编排', '微服务', '集群管理'],
    desc: '深入 Kubernetes 生产实践，从集群搭建到工作负载管理，构建稳定的云原生平台。',
  },
  {
    icon: '📊',
    title: '可观测性',
    link: '/docs/Prometheus/prometheus',
    tags: ['Prometheus', 'Grafana', 'AlertManager', 'ELK', 'Skywalking'],
    desc: '全链路可观测性体系建设，指标、日志、链路追踪三位一体，让系统状态一目了然。',
  },
  {
    icon: '🚀',
    title: 'DevOps & 工程化',
    link: '/docs/DevOps/1-jenkins',
    tags: ['Jenkins', 'GitOps', 'Terraform', 'Observability'],
    desc: 'CI/CD 流水线、基础设施即代码、GitOps 工作流，推动研发效能持续提升。',
  },
  {
    icon: '🐹',
    title: 'Golang 开发',
    link: '/docs/Golang/golang基础',
    tags: ['Go基础', 'Go进阶', '运维工具', 'Vue'],
    desc: '用 Golang 武装运维工程师，从基础语法到高并发实战，打造自己的运维工具链。',
  },
  {
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
      <div className={styles.heroInner}>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarRing}>
            <span className={styles.avatarEmoji}>👨‍💻</span>
          </div>
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          Hi, I'm <span className={styles.highlight}>LiteShell</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          SRE Engineer · 专注于<strong>云原生</strong>、<strong>可观测性</strong>与<strong>基础设施自动化</strong>
        </p>
        <p className={styles.heroDesc}>
          记录生产实践中的踩坑与收获，分享 Kubernetes、Prometheus、DevOps 等领域的技术笔记，
          <br />
          愿每一行配置都经得住凌晨三点的故障考验。
        </p>
        <div className={styles.badgeRow}>
          {TechBadges.map((tag) => (
            <span key={tag} className={styles.techBadge}>{tag}</span>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <Link className="button button--primary button--lg" to="/docs/Sre/1-日常运维">
            查看文档
          </Link>
          <Link className="button button--secondary button--lg" to="/blog">
            阅读博客
          </Link>
        </div>
      </div>
    </header>
  );
}

function DomainCard({ icon, title, link, tags, desc }) {
  return (
    <div className={styles.domainCard}>
      <div className={styles.cardIcon}>{icon}</div>
      <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
      <p className={styles.cardDesc}>{desc}</p>
      <div className={styles.cardTags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.cardTag}>{tag}</span>
        ))}
      </div>
      <Link className={styles.cardLink} to={link}>
        查看笔记 →
      </Link>
    </div>
  );
}

function DomainsSection() {
  return (
    <section className={styles.domainsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>知识领域</Heading>
        <p className={styles.sectionSubtitle}>覆盖 SRE 工程师核心技术栈，持续更新中</p>
        <div className={styles.domainGrid}>
          {DomainList.map((item) => (
            <DomainCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className={styles.quoteSection}>
      <div className="container">
        <blockquote className={styles.quote}>
          <p>"The goal of SRE is to make the service reliable enough that the team can focus on new features rather than firefighting."</p>
          <footer>— Google SRE Book</footer>
        </blockquote>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
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
