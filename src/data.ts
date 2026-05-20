// ─── Portfolio data ────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];

export const HERO = {
  name:     'Omkar Bhete',
  role:     'DevOps & Cloud Engineer',
  tagline:  'AWS · Kubernetes · Terraform · GitOps',
  summary:  'Building secure, scalable, and observable cloud infrastructure.',
};

export const ABOUT_SUMMARY = `I'm a DevOps and Cloud Engineer specializing in AWS infrastructure, 
container orchestration, CI/CD automation, and DevSecOps. I design resilient, 
cloud-native architectures that achieve 99 % uptime, reduce manual effort by 60 %, 
and cut provisioning time by 70 %. My work spans multi-tier VPC design, EKS-based 
microservice platforms, GitOps delivery with ArgoCD, security-first pipelines, 
and full-stack observability with Prometheus, Grafana, and Loki.`;

export interface TimelineItem {
  year:   string;
  title:  string;
  body:   string;
  color:  string;
}

export const TIMELINE: TimelineItem[] = [
  {
    year:  'The Beginning',
    title: 'Curiosity',
    body:  'Started by learning how applications and websites work — endlessly fascinated by the systems running behind every request.',
    color: '#a855f7',
  },
  {
    year:  'Foundation',
    title: 'Learning',
    body:  'Explored programming, Linux, and networking — building a deep mental model of how distributed systems operate.',
    color: '#22d3ee',
  },
  {
    year:  'Growth',
    title: 'Building Real Systems',
    body:  'Shipped production projects: automated deployment pipelines, containerised services, cloud infrastructure from scratch.',
    color: '#4ade80',
  },
  {
    year:  'Specialisation',
    title: 'Cloud & DevOps Mastery',
    body:  'Mastered AWS, Docker, Kubernetes, and Terraform. Architected cloud-native platforms with GitOps, DevSecOps, and full observability.',
    color: '#fbbf24',
  },
  {
    year:  'Present',
    title: 'Reliability at Scale',
    body:  'Delivering 99 % uptime, 50 % faster deployments, and 15 % cloud cost reductions through automation, IaC, and proactive monitoring.',
    color: '#f472b6',
  },
];

export interface Skill {
  icon:   string;   // emoji fallback — react-icons injected per component
  name:   string;
  cat:    string;
  color:  string;
  pct:    number;
  short:  string;
  detail: string;
  tags:   string[];
}

export const SKILLS: Skill[] = [
  {
    icon: '☁', name: 'AWS', cat: 'Cloud Platform', color: '#FF9900', pct: 90,
    short: 'Cloud infrastructure & services',
    detail: 'EC2, S3, RDS, Lambda, IAM, VPC, Route53, ELB, EKS — designed multi-AZ architectures ensuring 99 % uptime.',
    tags: ['EC2','EKS','IAM','VPC','S3','Lambda','Route53'],
  },
  {
    icon: '🐳', name: 'Docker', cat: 'Containerisation', color: '#2496ED', pct: 92,
    short: 'Container packaging & runtime',
    detail: 'Multi-stage Dockerfiles, Docker Compose stacks, optimised image layers, private registries — everything runs everywhere.',
    tags: ['Dockerfile','Compose','Registry','Networking','Multi-stage'],
  },
  {
    icon: '⎈', name: 'Kubernetes', cat: 'Orchestration', color: '#326CE5', pct: 88,
    short: 'Container orchestration at scale',
    detail: 'EKS clusters with HPA, ALB Ingress, ArgoCD GitOps, IAM Roles (PoLP), rolling deployments — 40 % scaling overhead cut.',
    tags: ['EKS','HPA','ArgoCD','Helm','RBAC','Ingress'],
  },
  {
    icon: '🏗', name: 'Terraform', cat: 'Infrastructure as Code', color: '#7B42BC', pct: 90,
    short: 'Cloud infra automation via IaC',
    detail: 'Reusable modules, remote state, workspaces — provisioned EC2, VPC, IAM, and networking. 70 % faster, zero drift.',
    tags: ['Modules','State','Workspaces','Variables','Providers'],
  },
  {
    icon: '🔧', name: 'Jenkins', cat: 'CI/CD', color: '#D24939', pct: 87,
    short: 'Pipeline automation & delivery',
    detail: 'Declarative pipelines with Gitflow, SonarQube gates, Trivy scanning, automated tests — deployment cycle cut by 50 %.',
    tags: ['Pipelines','Groovy','Agents','Webhooks','Stages'],
  },
  {
    icon: '📋', name: 'Git / GitOps', cat: 'Version Control', color: '#F05032', pct: 93,
    short: 'Source control & GitOps delivery',
    detail: 'Gitflow branching, protected branches, PR workflows, ArgoCD continuous reconciliation across environments.',
    tags: ['Gitflow','PRs','ArgoCD','Branching','Tags'],
  },
  {
    icon: '🐧', name: 'Linux', cat: 'Operating System', color: '#FCC624', pct: 88,
    short: 'Server administration & scripting',
    detail: 'Ubuntu & Amazon Linux for server management, Bash scripting, systemd, performance tuning, and DevOps toolchain setup.',
    tags: ['Ubuntu','Amazon Linux','Bash','SystemD','Security'],
  },
  {
    icon: '🐍', name: 'Python', cat: 'Automation', color: '#3776AB', pct: 82,
    short: 'Cloud automation via Boto3',
    detail: 'Boto3 scripts to clean EBS volumes/snapshots, Lambda functions for cost governance — 15 % cloud cost reduction achieved.',
    tags: ['Boto3','Lambda','Scripts','Automation','Cost Ops'],
  },
  {
    icon: '📊', name: 'Prometheus', cat: 'Monitoring', color: '#E6522C', pct: 84,
    short: 'Metrics collection & alerting',
    detail: 'PromQL queries, Alertmanager rules, exporters — built comprehensive monitoring that cut incident response time by 30 %.',
    tags: ['PromQL','Alertmanager','Exporters','Rules','Scraping'],
  },
  {
    icon: '📈', name: 'Grafana', cat: 'Visualisation', color: '#F46800', pct: 85,
    short: 'Observability dashboards',
    detail: 'Multi-source dashboards (Prometheus, Loki, CloudWatch), variable-driven panels, on-call alert routing.',
    tags: ['Dashboards','Panels','Alerts','Variables','Data Sources'],
  },
  {
    icon: '🔒', name: 'DevSecOps', cat: 'Security', color: '#4ade80', pct: 82,
    short: 'Shift-left security practices',
    detail: 'SonarQube SAST, Trivy CVE scanning, AWS Secrets Manager, IAM PoLP enforcement — zero critical CVEs shipped.',
    tags: ['SonarQube','Trivy','Secrets Manager','SAST','PoLP'],
  },
  {
    icon: '🔄', name: 'GitHub Actions', cat: 'CI/CD', color: '#2088FF', pct: 85,
    short: 'Cloud-native CI/CD workflows',
    detail: 'Matrix builds, reusable workflows, OIDC AWS authentication, environment gates — push-to-deploy in minutes.',
    tags: ['Workflows','OIDC','Matrix','Environments','Artifacts'],
  },
];

export interface Project {
  num:        string;
  emoji:      string;
  title:      string;
  desc:       string;
  highlights: string[];
  tags:       string[];
  color:      string;
  github:     string;
}

export const PROJECTS: Project[] = [
  {
    num: '01',
    emoji: '⚙️',
    title: 'Production Microservices Platform',
    desc:  'Scalable EKS-based platform with Docker microservices, auto-scaling, ArgoCD GitOps, ALB Ingress, and PoLP IAM — designed for zero-downtime deployments.',
    highlights: ['99 % uptime', '40 % less overhead'],
    tags: ['EKS','ArgoCD','Docker','ALB','IAM','VPC'],
    color: '#a855f7',
    github: 'https://github.com/omkarbhete',
  },
  {
    num: '02',
    emoji: '🔒',
    title: 'CI/CD + DevSecOps Pipeline',
    desc:  'End-to-end secure delivery with Jenkins, GitHub Actions, SonarQube quality gates, Trivy container scanning, and automated release gating on the Gitflow model.',
    highlights: ['50 % faster deploys', 'Zero CVEs shipped'],
    tags: ['Jenkins','GitHub Actions','SonarQube','Trivy','Gitflow'],
    color: '#22d3ee',
    github: 'https://github.com/omkarbhete',
  },
  {
    num: '03',
    emoji: '🏗️',
    title: 'Terraform Infrastructure Automation',
    desc:  'Reusable IaC modules for EC2, IAM, VPC, and networking with remote state, tagging strategy, cost optimisation, and Python Boto3 cleanup scripts.',
    highlights: ['70 % faster provisioning', '15 % cost saved'],
    tags: ['Terraform','AWS','Python','Boto3','S3 State'],
    color: '#4ade80',
    github: 'https://github.com/omkarbhete',
  },
  {
    num: '04',
    emoji: '📊',
    title: 'Observability & Logging System',
    desc:  'Centralised monitoring and log aggregation stack using Prometheus, Grafana, Loki, and CloudWatch with multi-channel alerting and proactive incident detection.',
    highlights: ['30 % faster MTTR', 'Full-stack visibility'],
    tags: ['Prometheus','Grafana','Loki','CloudWatch','Alertmanager'],
    color: '#fbbf24',
    github: 'https://github.com/omkarbhete',
  },
];

export const CONTACT = {
  email:    'omkarbhetework@gmail.com',
  phone:    '+91 8010639031',
  linkedin: 'https://linkedin.com/in/omkar-bhete',
  github:   'https://github.com/omkarbhete',
};
