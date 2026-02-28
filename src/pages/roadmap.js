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
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#764ba2',
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
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    color: '#11998e',
    icon: '⚙️',
    status: 'done',
    summary: '掌握容器化与自动化，建立系统化的监控告警体系，具备独立设计方案的能力。',
    skills: [
      { category: 'Docker & 容器', items: ['Docker 原理 & 实践', 'Docker Compose', '镜像构建优化', '容器网络 & 存储'] },
      { category: 'CI/CD',        items: ['Jenkins Pipeline', 'GitLab CI', 'Argo CD / GitOps', 'Harbor 制品仓库'] },
      { category: '监控体系',     items: ['Prometheus & PromQL', 'Grafana Dashboard', 'AlertManager', 'ELK 日志系统'] },
      { category: '自动化',       items: ['Python 运维脚本', 'Ansible 批量管理', '作业调度平台'] },
    ],
    milestone: '独立搭建监控告警平台，推动团队 CI/CD 落地，SLI/SLO 意识建立',
  },
  {
    id: 'senior',
    phase: 'Phase 03',
    title: '云原生工程师',
    period: '4 ~ 6 年',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#f5576c',
    icon: '☸️',
    status: 'doing',
    summary: '深耕 Kubernetes 生态，构建云原生基础设施平台，能主导大型系统可靠性设计。',
    skills: [
      { category: 'Kubernetes',    items: ['集群搭建 & 升级', '调度器 & 亲和性', 'Operator 开发', 'Service Mesh Istio'] },
      { category: '可观测性',      items: ['OpenTelemetry', 'Jaeger / Tempo 链路', 'Loki 日志聚合', 'SkyWalking APM'] },
      { category: '基础设施即代码', items: ['Terraform', 'Helm Chart 开发', 'Crossplane', 'Pulumi'] },
      { category: 'Golang 开发',   items: ['Go 并发模型', 'client-go 开发', 'Controller & Webhook', 'CLI 工具开发'] },
    ],
    milestone: '主导公司云原生平台建设，具备百节点集群运维能力，能开发自定义运维工具',
  },
  {
    id: 'expert',
    phase: 'Phase 04',
    title: 'SRE 专家',
    period: '6 ~ 9 年',
    gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    color: '#f7971e',
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
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#4facfe',
    icon: '🚀',
    status: 'todo',
    summary: '技术战略与组织能力，在更大范围内推动工程实践演进，成为行业影响力者。',
    skills: [
      { category: '技术战略',   items: ['技术选型决策', '长期架构规划', '开源社区贡献', '行业标准参与'] },
      { category: '组织建设',   items: ['工程师文化塑造', '招聘 & 人才体系', 'OnCall 制度设计', 'SRE 团队建设'] },
      { category: '商业理解',   items: ['成本 & ROI 意识', '业务连续性规划', 'SLA 商业谈判', '供应商管理'] },
      { category: '个人品牌',   items: ['技术博客 & 演讲', '书籍 & 课程输出', '开源项目维护', '行业技术委员会'] },
    ],
    milestone: '成为组织内外公认的技术专家，推动行业最佳实践，影响工程文化',
  },
];

const statusConfig = {
  done:  { label: '已完成', dot: styles.dotDone },
  doing: { label: '进行中', dot: styles.dotDoing },
  todo:  { label: '待解锁', dot: styles.dotTodo },
};

// 整体进度
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
  return (
    <div
      className={`${styles.card} ${isActive ? styles.cardOpen : ''}`}
      onClick={onClick}
    >
      {/* 顶部渐变色条 */}
      <div className={styles.cardBar} style={{ background: stage.gradient }} />

      <div className={styles.cardBody}>
        {/* Header row */}
        <div className={styles.cardHeader}>
          <div className={styles.cardIconBox} style={{ background: stage.gradient }}>
            <span className={styles.cardIcon}>{stage.icon}</span>
          </div>

          <div className={styles.cardMeta}>
            <span className={styles.cardPhase}>{stage.phase}</span>
            <Heading as="h3" className={styles.cardTitle}>{stage.title}</Heading>
            <span className={styles.cardPeriod}>{stage.period}</span>
          </div>

          <div className={`${styles.statusBadge} ${sc.dot}`}>
            {stage.status === 'doing' && <span className={styles.badgePulse} />}
            {sc.label}
          </div>
        </div>

        {/* Summary */}
        <p className={styles.cardSummary}>{stage.summary}</p>

        {/* Expanded detail */}
        {isActive && (
          <div className={styles.detail}>
            <div className={styles.skillGrid}>
              {stage.skills.map(sg => (
                <SkillGroup key={sg.category} {...sg} color={stage.color} />
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

        <div className={styles.toggle} style={{ color: stage.color }}>
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
      {/* 页头 */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <div className={styles.heroTag}>Career Roadmap</div>
          <Heading as="h1" className={styles.heroTitle}>SRE 成长路线图</Heading>
          <p className={styles.heroSub}>
            从运维新兵到技术领导者，记录每个阶段的核心技能与里程碑<br />
            点击卡片展开查看详细技能树
          </p>
          <ProgressBar />
        </div>
      </div>

      {/* 时间轴主体 */}
      <div className={styles.main}>
        <div className={styles.timelineWrap}>
          {stages.map((stage, idx) => (
            <div key={stage.id} className={styles.row}>
              {/* 左侧序号轴 */}
              <div className={styles.axis}>
                <div
                  className={`${styles.axisCircle} ${stage.status === 'todo' ? styles.axisCircleTodo : ''}`}
                  style={stage.status !== 'todo' ? { background: stage.gradient } : {}}
                >
                  {stage.status === 'doing'
                    ? <span className={styles.axisPulse} />
                    : null}
                  <span className={styles.axisNum}>{String(idx + 1).padStart(2, '0')}</span>
                </div>
                {idx < stages.length - 1 && (
                  <div
                    className={styles.axisLine}
                    style={{ background: stages[idx + 1].status === 'todo' ? 'var(--ifm-color-emphasis-200)' : stage.gradient }}
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
          ))}
        </div>

        {/* 底部寄语 */}
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
