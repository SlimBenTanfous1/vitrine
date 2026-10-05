// Toutes les données du portfolio sont centralisées ici.
// Modifiez ce fichier pour personnaliser le site sans toucher aux composants.

export const profile = {
  name: 'Slim Ben Tanfous',
  initials: 'SB',
  role: 'Ingénieur Cybersécurité · DevSecOps · SOC',
  tagline:
    'Ingénieur informatique spécialisé en cybersécurité, avec une expérience terrain en hardening d’infrastructure de production, déploiement SOC et pipelines DevSecOps.',
  location: 'Paris, France',
  availability: 'Disponible pour une alternance — sept. 2026',
  email: 'slimbentanfous2002@gmail.com',
  cvUrl: '/cv-slim-ben-tanfous.pdf',
  socials: {
    github: 'https://github.com/Slimbentanfous1',
    linkedin: 'https://www.linkedin.com/in/slim-ben-tanfous-971b19244',
  },
  about: [
    'Ingénieur informatique spécialisé en cybersécurité, j’interviens sur toute la chaîne : durcissement d’infrastructures de production, supervision et détection (SOC), et intégration de la sécurité dans les pipelines CI/CD.',
    'Certifié CCNA, CyberOps Associate et AWS Security, je poursuis un Mastère Cybersécurité à l’ESGI Paris et recherche une alternance longue durée, au rythme d’une semaine à l’école pour trois semaines en entreprise.',
  ],
  // decimals : nombre de décimales affichées par le compteur animé
  stats: [
    { value: 0, suffix: '', label: 'Intrusion après le durcissement d’une infra de production' },
    { value: 99.9, decimals: 1, suffix: ' %', label: 'De disponibilité lors d’une migration ESXi → Proxmox' },
    { value: 6, suffix: '', label: 'Sources de logs centralisées dans Grafana' },
    { value: 5, suffix: '', label: 'Outils de sécurité intégrés au CI/CD' },
  ],
  languages: [
    { name: 'Français', level: 'C1' },
    { name: 'Anglais', level: 'C1' },
    { name: 'Allemand', level: 'A2' },
    { name: 'Arabe', level: 'Natif' },
  ],
}

// icon : nom d’une icône déclarée dans src/components/Icon.jsx
export const skillDomains = [
  {
    id: 'soc',
    title: 'SOC & détection',
    icon: 'Radar',
    summary: 'Collecte, corrélation et réponse automatisée aux incidents avec une stack SOC open-source.',
    points: [
      'Déploiement d’un SOC complet : Wazuh, TheHive, Cortex et Shuffle SOAR',
      'Détection réseau avec Suricata IDS',
      'Cartographie des détections sur MITRE ATT&CK',
      'Analyse de malware et réponse automatisée',
    ],
    tools: ['Wazuh', 'TheHive', 'Cortex', 'Shuffle', 'Suricata', 'MITRE ATT&CK', 'EDR'],
  },
  {
    id: 'audit',
    title: 'Audit & tests de sécurité',
    icon: 'ScanSearch',
    summary: 'Audits de sécurité externes et tests applicatifs, avec rapport et plan de remédiation priorisé.',
    points: [
      'Audit externe complet : scan réseau, configuration TLS, énumération DNS, en-têtes HTTP',
      'Tests applicatifs selon l’OWASP Top 10',
      'Rédaction de rapports et priorisation des findings critiques',
      'Évaluation des vulnérabilités (CVE / CVSS)',
    ],
    tools: ['Burp Suite', 'Nmap', 'testssl.sh', 'OWASP ZAP', 'OWASP Top 10'],
  },
  {
    id: 'network',
    title: 'Réseau & hardening',
    icon: 'Network',
    summary: 'Durcissement des serveurs et segmentation réseau pour réduire la surface d’attaque.',
    points: [
      'Correction d’un bypass critique Docker / iptables en production',
      'Migration de Fail2ban vers CrowdSec',
      'Architecture Zero Trust avec Cloudflare Access',
      'Segmentation VLAN, routage OSPF, VPN IPsec',
    ],
    tools: ['iptables', 'CrowdSec', 'Cloudflare Access', 'VLAN', 'OSPF', 'VPN / IPsec', 'TCP/IP'],
  },
  {
    id: 'devsecops',
    title: 'DevSecOps',
    icon: 'Workflow',
    summary: 'Intégration de contrôles de sécurité automatisés à chaque étape du pipeline CI/CD.',
    points: [
      'Analyse statique (SAST) avec SonarQube et Semgrep',
      'Analyse dynamique (DAST) avec OWASP ZAP',
      'Détection de secrets (Gitleaks) et scan d’images (Trivy, Hadolint)',
      'Health checks automatisés après déploiement',
    ],
    tools: ['SonarQube', 'Semgrep', 'Trivy', 'Gitleaks', 'OWASP ZAP', 'Hadolint', 'Jenkins', 'GitHub Actions'],
  },
  {
    id: 'cloud',
    title: 'Cloud & virtualisation',
    icon: 'Cloud',
    summary: 'Conception et migration d’infrastructures virtualisées haute disponibilité.',
    points: [
      'Migration VMware ESXi vers Proxmox VE (LXC, cluster HA)',
      'Sauvegarde et reprise avec Veeam',
      'Conteneurisation avec Docker',
      'Fondamentaux sécurité AWS et OCI',
    ],
    tools: ['Proxmox VE', 'VMware ESXi', 'Docker', 'Veeam', 'AWS', 'OCI'],
  },
  {
    id: 'automation',
    title: 'Supervision & automatisation',
    icon: 'Gauge',
    summary: 'Centralisation des logs, tableaux de bord et automatisation de l’administration.',
    points: [
      'Stack Loki + Promtail et dashboard Grafana unifié',
      'Supervision d’infrastructure avec Zabbix',
      'Application web d’administration des VM via API REST (quotas, RBAC)',
      'Scripts d’automatisation en Python et Bash',
    ],
    tools: ['Grafana', 'Loki', 'Promtail', 'Zabbix', 'Python', 'Bash', 'API REST', 'Git'],
  },
]

export const certifications = [
  { name: 'CCNA', issuer: 'Cisco' },
  { name: 'CyberOps Associate', issuer: 'Cisco' },
  { name: 'AWS Security Cloud Foundations', issuer: 'Amazon Web Services' },
  { name: 'OCI Foundations Associate', issuer: 'Oracle' },
]

export const frameworks = [
  'ISO 27001',
  'NIST',
  'EBIOS RM',
  'OWASP Top 10',
  'ANSSI',
  'NIS2',
  'CVE / CVSS',
  'Digital Forensics',
]

export const experience = [
  {
    period: 'Fév. 2026 — Août 2026',
    title: 'Ingénieur Infrastructure & Sécurité',
    company: 'BrightByDesign',
    location: 'Bruxelles, Belgique · Full remote',
    points: [
      'Réduit la surface d’attaque en corrigeant un bypass critique Docker / iptables et en migrant de Fail2ban vers CrowdSec.',
      'Centralisé la supervision de 6 sources de logs dans un dashboard Grafana unifié (Loki + Promtail), réduisant le temps de détection des anomalies.',
      'Livré un audit de sécurité externe complet (Nmap, testssl.sh, énumération DNS, en-têtes HTTP) avec rapport PDF et plan de remédiation priorisé.',
      'Déployé une architecture Zero Trust (Cloudflare Access) et intégré 5 outils de sécurité au CI/CD (Semgrep, Hadolint, OWASP ZAP, health checks).',
    ],
    highlights: ['Zéro intrusion post-déploiement', '6 sources de logs centralisées', 'Zero Trust'],
  },
  {
    period: 'Juin 2025 — Sept. 2025',
    title: 'Ingénieur Virtualisation & Infrastructure',
    company: 'BFI Groupe',
    location: 'Tunis, Tunisie',
    points: [
      'Migré le parc VMware ESXi vers Proxmox VE (LXC, cluster HA, Veeam), éliminant les coûts de licence.',
      'Automatisé la gestion des VM via API REST et une application web sur mesure (quotas, supervision, RBAC).',
    ],
    highlights: ['99,9 % de disponibilité', 'Administration : des heures → quelques minutes'],
  },
]

export const education = [
  {
    period: 'Sept. 2026 — Sept. 2028',
    title: 'Mastère Cybersécurité',
    school: 'ESGI Paris · Alternance (1 sem. école / 3 sem. entreprise)',
    topics: ['Red Team', 'SOC', 'CTI', 'Malware Analysis', 'ISO 27001', 'EBIOS RM', 'NIS2', 'IAM', 'Cloud Security'],
  },
  {
    period: 'Sept. 2021 — Août 2026',
    title: 'Diplôme d’ingénieur informatique — Cybersécurité',
    school: 'ESPRIT, Tunis',
    topics: ['Analyse de malware', 'Audit sécurité', 'Digital Forensics', 'Systèmes & réseaux', 'CI/CD'],
  },
]

export const projects = [
  {
    title: 'Murus Secure',
    category: 'SOC',
    description:
      'SOC de bout en bout : collecte, corrélation, analyse de malware et réponse automatisée, avec Wazuh, TheHive, Cortex, Shuffle SOAR et Suricata IDS.',
    tags: ['Wazuh', 'TheHive', 'Cortex', 'Shuffle', 'Suricata'],
    link: 'https://github.com/Slimbentanfous1',
  },
  {
    title: 'Tessen',
    category: 'Open source',
    description:
      'Scanner en ligne de commande des configurations MCP des clients IA : détection des serveurs non vérifiés et des permissions excessives. Plus de 42 tests et CI GitHub Actions.',
    tags: ['Python', 'CLI', 'MCP', 'GitHub Actions'],
    link: 'https://github.com/Slimbentanfous1',
  },
  {
    title: 'Pipeline DevSecOps',
    category: 'DevSecOps',
    description:
      'Pipeline CI/CD sécurisé (Jenkins + GitHub) couvrant SAST, DAST et détection de secrets : SonarQube, Trivy, Gitleaks et OWASP ZAP.',
    tags: ['Jenkins', 'SonarQube', 'Trivy', 'Gitleaks', 'OWASP ZAP'],
    link: 'https://github.com/Slimbentanfous1',
  },
]

export const approach = [
  {
    step: '01',
    title: 'Auditer',
    text: 'Cartographier l’exposition : scans, configuration TLS, DNS, en-têtes et services accessibles.',
  },
  {
    step: '02',
    title: 'Prioriser',
    text: 'Classer les findings selon leur criticité (CVSS) et leur impact réel sur la production.',
  },
  {
    step: '03',
    title: 'Durcir',
    text: 'Corriger, segmenter et appliquer le Zero Trust, puis automatiser les contrôles dans le CI/CD.',
  },
  {
    step: '04',
    title: 'Superviser',
    text: 'Centraliser les logs, détecter les anomalies et répondre rapidement aux incidents.',
  },
]
