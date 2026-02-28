import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './roadmap.module.css';

const stages = [
  {
    id: 'junior',
    phase: 'Phase 01',
    title: '运维新兵',
    period: '0 ~ 2 年',
    color: '#64748b',
    icon: '🌱',
    status: 'done',
    summary: '打好基础，能独立处理日常运维任务，掌握 Linux 与网络核心知识。',
    skills: [
      { category: 'Linux 基础', items: ['Shell 脚本', '文件系统 & 权限', '进程 & 信号', 'top / vmstat / iostat'] },
      { category: '网络基础',   items: ['TCP/IP 协议栈', 'HTTP/HTTPS', 'DNS 解析', 'iptables / 防火墙'] },
      { category: '常用服务',   items: ['Nginx / Apache', 'MySQL 基础运维', 'Redis 基本操作', 'NFS / SFTP'] },
      { category: '版本控制',   items: ['Git 基础操作', 'Git Flow 工作流'] },
    ],
    milestone: '能独立处理日常告警，完成服务部署与基本故障排查',
  },
  {
    id: 'mid',
    phase: 'Phase 02',
    title: 'SRE 进阶',
    period: '2 ~ 4 年',
    color: '#2563eb',
    icon: '⚙️',
    status: 'done',
    summary: '掌握容器化与自动化，建立系统化的监控告警体系，具备独立设计方案的能力。',
    skills: [
      { category: 'Docker & 容器', items: ['Docker 原理 & 实践', 'Docker Compose', '镜像构建优化', '容器网络 & 存储'] },
      { category: 'CI/CD',         items: ['Jenkins Pipeline', 'GitLab CI', 'Argo CD / GitOps', 'Harbor 制品仓库'] },
      { category: '监控体系',      items: ['Prometheus & PromQL', 'Grafana Dashboard', 'AlertManager', 'ELK 日志系统'] },
      { category: '自动化',        items: ['Python 运维脚本', 'Ansible 批量管理', '作业调度平台'] },
    ],
    milestone: '独立搭建监控告警平台，推动团队 CI/CD 落地，SLI/SLO 意识建立',
  },
  {
    id: 'senior',
    phase: 'Phase 03',
    title: '云原生工程师',
    period: '4 ~ 6 年',
    color: '#0284c7',
    icon: '☸️',
    status: 'doing',
    summary: '深耕 Kubernetes 生态，构建云原生基础设施平台，能主导大型系统可靠性设计。',
    skills: [
      { category: 'Kubernetes',     items: ['集群搭建 & 升级', '调度器 & 亲和性', 'Operator 开发', 'Service Mesh Istio'] },
      { category: '可观测性',       items: ['OpenTelemetry', 'Jaeger / Tempo 链路', 'Loki 日志聚合', 'SkyWalking APM'] },
      { category: '基础设施即代码', items: ['Terraform', 'Helm Chart 开发', 'Crossplane', 'Pulumi'] },
      { category: 'Golang 开发',    items: ['Go 并发模型', 'client-go 开发', 'Controller & Webhook', 'CLI 工具开发'] },
    ],
    milestone: '主导公司云原生平台建设，具备百节点集群运维能力，能开发自定义运维工具',
  },
  {
    id: 'expert',
    phase: 'Phase 04',
    title: 'SRE 专家',
    period: '6 ~ 9 年',
    color: '#0d9488',
    icon: '🏗️',
    status: 'todo',
    summary: '系统设计与技术决策能力，能够主导跨团队稳定性保障体系，影响工程文化。',
    skills: [
      { category: '稳定性工程', items: ['混沌工程 ChaosMesh', '容量规划 & 预算', '变更管理体系', '故障复盘文化'] },
      { category: '架构设计',   items: ['高可用架构设计', '异地多活方案', '限流 & 降级 & 熔断', 'DB 架构优化'] },
      { category: '效能平台',   items: ['内部 PaaS 平台', '运维知识库建设', 'AIOps 探索', '成本优化体系'] },
      { category: '软技能',     items: ['技术方案评审', 'OKR 制定', '跨团队协作', '技术分享 & 布道'] },
    ],
    milestone: '主导公司级稳定性体系，产出高质量技术文档，培养下级工程师',
  },
  {
    id: 'principal',
    phase: 'Phase 05',
    title: '技术领导者',
    period: '9 年以上',
    color: '#6d28d9',
    icon: '🚀',
    status: 'todo',
    summary: '技术战略与组织能力，在更大范围内推动工程实践演进，成为行业影响力者。',
    skills: [
      { category: '技术战略', items: ['技术选型决策', '长期架构规划', '开源社区贡献', '行业标准参与'] },
      { category: '组织建设', items: ['工程师文化塑造', '招聘 & 人才体系', 'OnCall 制度设计', 'SRE 团队建设'] },
      { category: '商业理解', items: ['成本 & ROI 意识', '业务连续性规划', 'SLA 商业谈判', '供应商管理'] },
      { category: '个人品牌', items: ['技术博客 & 演讲', '书籍 & 课程输出', '开源项目维护', '行业技术委员会'] },
    ],
    milestone: '成为组织内外公认的技术专家，推动行业最佳实践，影响工程文化',
  },
];

const statusConfig = {
  done:  { label: '已完成', cls: styles.dotDone },
  doing: { label: '进行中', cls: styles.dotDoing },
  todo:  { label: '待解锁', cls: styles.dotTodo },
};

const doneCount  = stages.filter(s => s.status === 'done').length;
const doingCount = stages.filter(s => s.status === 'doing').length;
const progressPct = Math.round(((doneCount + doingCount * 0.5) / stages.length) * 100);

function ProgressBar() {
  return (
    <div className={styles.progressWrap}>
      <div className={styles.progressHeader}>
        <span className={styles.progressLabel}>整体进度</span>
        <span className={styles.progressPct}>{progressPct}%</span>
      </div>
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
      </div>
      <div className={styles.progressStats}>
        <span className={styles.statDone}>✔ 已完成 {doneCount} 阶段</span>
        <span className={styles.statDoing}>◉ 进行中 {doingCount} 阶段</span>
        <span className={styles.statTodo}>○ 待解锁 {stages.length - doneCount - doingCount} 阶段</span>
      </div>
    </div>
  );
}

function SkillGroup({ category, items, color }) {
  return (
    <div className={styles.skillGroup}>
      <div className={styles.skillCategory} style={{ color }}>{category}</div>
      <div className={styles.skillItems}>
        {items.map(item => (
          <span key={item} className={styles.skillChip}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function StageCard({ stage, isActive, onClick }) {
  const sc = statusConfig[stage.status];
  const isTodo = stage.status === 'todo';
  return (
    <div
      className={`${styles.card} ${isActive ? styles.cardOpen : ''} ${isTodo ? styles.cardTodo : ''}`}
      style={{ '--accent': stage.color }}
      onClick={onClick}
    >
      <div className={styles.cardBody}>
        {/* Header */}
        <div className={styles.cardHeader}>
          {/* 图标 */}
          <div
            className={styles.cardIconBox}
            style={{ background: isTodo ? undefined : `${stage.color}18`, borderColor: `${stage.color}30` }}
          >
            <span className={styles.cardIcon}>{stage.icon}</span>
          </div>

          {/* 文字信息 */}
          <div className={styles.cardMeta}>
            <div className={styles.cardTopRow}>
              <span className={styles.cardPhase} style={{ color: isTodo ? undefined : stage.color }}>
                {stage.phase}
              </span>
              <span className={`${styles.statusBadge} ${sc.cls}`}>
                {stage.status === 'doing' && <span className={styles.badgePulse} />}
                {sc.label}
              </span>
            </div>
            <Heading as="h3" className={styles.cardTitle}>{stage.title}</Heading>
            <span className={styles.cardPeriod}>{stage.period}</span>
          </div>
        </div>

        {/* Summary */}
        <p className={styles.cardSummary}>{stage.summary}</p>

        {/* Expanded detail */}
        {isActive && (
          <div className={styles.detail}>
            <div className={styles.skillGrid}>
              {stage.skills.map(sg => (
                <SkillGroup key={sg.category} {...sg} color={isTodo ? '#94a3b8' : stage.color} />
              ))}
            </div>
            <div className={styles.milestone} style={{ borderColor: stage.color }}>
              <span className={styles.milestoneIcon}>🎯</span>
              <div>
                <div className={styles.milestoneLabel}>阶段里程碑</div>
                <div className={styles.milestoneText}>{stage.milestone}</div>
              </div>
            </div>
          </div>
        )}

        <div className={styles.toggle} style={{ color: isTodo ? '#94a3b8' : stage.color }}>
          {isActive ? '▲ 收起' : '▼ 展开详情'}
        </div>
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  const [activeId, setActiveId] = useState('senior');
  const toggle = id => setActiveId(prev => prev === id ? null : id);

  return (
    <Layout title="个人成长路线" description="SRE 工程师成长路线图——从运维新兵到技术领导者">
      <div className={styles.hero}>
        {/* 静态渐变底色 */}
        <div className={styles.heroBg} />
        {/* 点阵网格 */}
        <div className={styles.heroDots} />
        {/* 浮动光斑 */}
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
        {/* 底部扫描线 */}
        <div className={styles.scanLine} />

        <div className={styles.heroContent}>
          <div className={styles.heroTag}>Career Roadmap</div>
          <Heading as="h1" className={styles.heroTitle}>SRE 成长路线图</Heading>
          <p className={styles.heroSub}>
            从运维新兵到技术领导者，记录每个阶段的核心技能与里程碑
          </p>
          <ProgressBar />
        </div>
      </div>

      {/* 时间轴主体 */}
      <div className={styles.main}>
        <div className={styles.timelineWrap}>
          {stages.map((stage, idx) => {
            const isTodo = stage.status === 'todo';
            return (
              <div key={stage.id} className={styles.row}>
                {/* 左侧轴 */}
                <div className={styles.axis}>
                  <div
                    className={`${styles.axisDot} ${isTodo ? styles.axisDotTodo : ''}`}
                    style={!isTodo ? { borderColor: stage.color, color: stage.color } : {}}
                  >
                    {stage.status === 'doing' && (
                      <span className={styles.axisPulse} style={{ borderColor: stage.color }} />
                    )}
                    <span className={styles.axisNum}>{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  {idx < stages.length - 1 && (
                    <div
                      className={styles.axisLine}
                      style={{ borderColor: isTodo ? undefined : stage.color }}
                    />
                  )}
                </div>

                {/* 右侧卡片 */}
                <div className={styles.cardWrap}>
                  <StageCard
                    stage={stage}
                    isActive={activeId === stage.id}
                    onClick={() => toggle(stage.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部引言 */}
        <div className={styles.footer}>
          <div className={styles.footerQuote}>
            "The goal of SRE is to make the service reliable enough<br />
            that the team can focus on new features rather than firefighting."
          </div>
          <div className={styles.footerSub}>— Google SRE Book</div>
          <Link className={styles.footerBtn} to="/docs/Sre/1-日常运维">
            开始阅读技术笔记 →
          </Link>
        </div>
      </div>
    </Layout>
  );
}
