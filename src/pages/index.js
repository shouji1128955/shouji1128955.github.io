import { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const TYPING_TEXTS = [
  'nvidia-smi --query-gpu=name,memory.total --format=csv',
  'kubectl get pods -n gpu-operator',
  'helm install gpu-operator nvidia/gpu-operator',
  'vllm serve meta-llama/Llama-3-70B --tensor-parallel-size 8',
  'python -c "import torch; print(torch.cuda.device_count())"',
  'nccl-tests/build/all_reduce_perf -b 8 -e 8G -f 2 -g 8',
  'docker run --gpus all nvcr.io/nvidia/cuda:12.4.0-base',
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

const TechBadges = ['GPU Cluster', 'CUDA', 'Kubernetes', 'NCCL', 'vLLM', 'PyTorch', 'Terraform', 'AI Infra'];

const DomainList = [
  {
    color: '#2563eb',
    icon: '🖥️',
    title: 'GPU 集群管理',
    link: '/docs/k8s',
    tags: ['NVIDIA Driver', 'CUDA', 'GPU Operator', 'MIG'],
    desc: 'GPU 节点部署、驱动管理、MIG 分区、GPU Operator 落地，打造高可用 AI 计算集群。',
  },
  {
    color: '#059669',
    icon: '☸️',
    title: 'Kubernetes & 调度',
    link: '/docs/k8s',
    tags: ['K8s', 'GPU 调度', '资源隔离', '弹性伸缩'],
    desc: '面向 AI 工作负载的 Kubernetes 调度实践，覆盖 GPU 资源配额、节点亲和与训练任务编排。',
  },
  {
    color: '#0284c7',
    icon: '🤖',
    title: '大模型推理',
    link: '/docs/Prometheus/prometheus',
    tags: ['vLLM', 'TensorRT-LLM', 'Triton', '模型服务'],
    desc: '大语言模型推理服务部署，vLLM / TensorRT-LLM 性能调优，低延迟高吞吐在线服务实践。',
  },
  {
    color: '#7c3aed',
    icon: '⚡',
    title: '分布式训练',
    link: '/docs/DevOps/1-jenkins',
    tags: ['NCCL', 'PyTorch DDP', 'Megatron', 'DeepSpeed'],
    desc: '大规模分布式训练基础设施搭建，NCCL 通信调优、训练框架集成与多机多卡故障排查。',
  },
  {
    color: '#0d9488',
    icon: '📊',
    title: '可观测性',
    link: '/docs/Prometheus/grafana',
    tags: ['Prometheus', 'Grafana', 'DCGM', 'GPU 监控'],
    desc: 'AI 集群全栈监控，DCGM Exporter 采集 GPU 指标，Grafana 可视化训练/推理健康状态。',
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
          AI Infra Engineer · 专注于<strong>GPU 集群</strong>、<strong>模型推理</strong>与<strong>分布式训练</strong>
        </p>

        {/* 描述 */}
        <p className={styles.heroDesc}>
          记录 AI 基础设施的实战经验，分享 GPU 集群调度、大模型部署、分布式训练等领域的技术笔记，<br />
          让每一张卡都跑满，让每一次推理都低延迟。
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
          The infrastructure beneath AI is not a commodity — it is the competitive advantage.
          Great models are only as good as the systems that run them.
        </p>
        <div className={styles.quoteDivider} />
        <span className={styles.quoteAuthor}>— AI Infra Engineering</span>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="AI Infra 工程师的技术笔记"
      description="LiteShell - AI Infra Engineer，专注于 GPU 集群、大模型推理与分布式训练的技术博客">
      <HeroSection />
      <main>
        <DomainsSection />
        <QuoteSection />
      </main>
    </Layout>
  );
}
