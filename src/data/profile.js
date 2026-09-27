// Toutes les données du portfolio sont centralisées ici.
// Modifiez ce fichier pour personnaliser le site sans toucher aux composants.

export const profile = {
  name: 'Prénom Nom',
  initials: 'PN',
  role: 'Ingénieur en cybersécurité',
  tagline:
    'Je conçois, teste et renforce la sécurité des systèmes d’information — de l’audit technique à la gouvernance, avec une approche pragmatique et orientée risque.',
  location: 'Tunis, Tunisie',
  availability: 'Ouvert aux opportunités',
  email: 'prenom.nom@example.com',
  cvUrl: '#',
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
  about: [
    'Ingénieur en cybersécurité, j’accompagne les organisations dans la protection de leurs actifs numériques. Mon travail couvre l’évaluation des vulnérabilités, la sécurisation des architectures et la mise en conformité.',
    'Je privilégie une sécurité lisible et mesurable : des recommandations priorisées, des contrôles automatisés et une documentation claire, pour que les équipes techniques et métiers avancent ensemble.',
  ],
  stats: [
    { value: 40, suffix: '+', label: 'Audits & tests d’intrusion' },
    { value: 120, suffix: '+', label: 'Vulnérabilités remontées' },
    { value: 8, suffix: '', label: 'Certifications' },
    { value: 5, suffix: ' ans', label: 'D’expérience' },
  ],
}

// icon : nom d’une icône lucide-react (voir src/components/Icon.jsx)
export const skillDomains = [
  {
    id: 'offensive',
    title: 'Sécurité offensive',
    icon: 'ScanSearch',
    summary: 'Tests d’intrusion web, réseau et Active Directory, selon des méthodologies reconnues (OWASP, PTES).',
    skills: [
      { name: 'Pentest applicatif (OWASP Top 10)', level: 90 },
      { name: 'Active Directory & Kerberos', level: 80 },
      { name: 'Tests d’intrusion réseau', level: 85 },
      { name: 'Revue de code sécurisée', level: 70 },
    ],
    tools: ['Burp Suite', 'Nmap', 'Metasploit', 'BloodHound', 'ffuf'],
  },
  {
    id: 'defensive',
    title: 'Détection & réponse',
    icon: 'Radar',
    summary: 'Mise en place de la supervision, écriture de règles de détection et gestion des incidents.',
    skills: [
      { name: 'SIEM & corrélation', level: 85 },
      { name: 'Réponse à incident', level: 80 },
      { name: 'Threat hunting', level: 70 },
      { name: 'Analyse forensique', level: 65 },
    ],
    tools: ['Splunk', 'Elastic', 'Wazuh', 'Sigma', 'Velociraptor'],
  },
  {
    id: 'cloud',
    title: 'Cloud & infrastructure',
    icon: 'Cloud',
    summary: 'Sécurisation d’environnements cloud et on-premise, durcissement et segmentation réseau.',
    skills: [
      { name: 'Sécurité AWS / Azure', level: 80 },
      { name: 'Durcissement Linux & Windows', level: 85 },
      { name: 'Segmentation & pare-feu', level: 80 },
      { name: 'Conteneurs & Kubernetes', level: 70 },
    ],
    tools: ['Terraform', 'Docker', 'Kubernetes', 'pfSense', 'CIS Benchmarks'],
  },
  {
    id: 'grc',
    title: 'Gouvernance & conformité',
    icon: 'FileCheck2',
    summary: 'Analyse de risques, politiques de sécurité et accompagnement vers la conformité.',
    skills: [
      { name: 'ISO 27001 / 27005', level: 85 },
      { name: 'Analyse de risques (EBIOS RM)', level: 75 },
      { name: 'RGPD', level: 70 },
      { name: 'Sensibilisation des équipes', level: 90 },
    ],
    tools: ['ISO 27001', 'NIST CSF', 'EBIOS RM', 'RGPD', 'PCI DSS'],
  },
  {
    id: 'devsecops',
    title: 'DevSecOps & automatisation',
    icon: 'Workflow',
    summary: 'Intégration de la sécurité dans les pipelines CI/CD et automatisation des contrôles.',
    skills: [
      { name: 'SAST / DAST / SCA', level: 80 },
      { name: 'Scripting Python & Bash', level: 85 },
      { name: 'Gestion des secrets', level: 75 },
      { name: 'Infrastructure as Code', level: 70 },
    ],
    tools: ['GitLab CI', 'SonarQube', 'Trivy', 'Semgrep', 'Vault'],
  },
  {
    id: 'crypto',
    title: 'Identité & cryptographie',
    icon: 'KeyRound',
    summary: 'Gestion des identités et des accès, PKI et bonnes pratiques cryptographiques.',
    skills: [
      { name: 'IAM, SSO & MFA', level: 80 },
      { name: 'PKI & certificats', level: 75 },
      { name: 'Chiffrement & TLS', level: 80 },
      { name: 'Zero Trust', level: 70 },
    ],
    tools: ['Keycloak', 'Entra ID', 'OpenSSL', 'HashiCorp Vault'],
  },
]

export const certifications = [
  { name: 'OSCP', issuer: 'OffSec', year: '2024' },
  { name: 'CEH', issuer: 'EC-Council', year: '2023' },
  { name: 'ISO 27001 Lead Implementer', issuer: 'PECB', year: '2023' },
  { name: 'AWS Security Specialty', issuer: 'Amazon Web Services', year: '2022' },
  { name: 'CompTIA Security+', issuer: 'CompTIA', year: '2021' },
  { name: 'eJPT', issuer: 'INE Security', year: '2021' },
]

export const experience = [
  {
    period: '2023 — Aujourd’hui',
    title: 'Ingénieur sécurité senior',
    company: 'Entreprise A',
    description:
      'Pilotage des tests d’intrusion et des audits de configuration pour des clients des secteurs bancaire et industriel. Encadrement de deux consultants juniors.',
    highlights: ['30+ missions d’audit', 'Réduction de 60 % des vulnérabilités critiques'],
  },
  {
    period: '2021 — 2023',
    title: 'Analyste SOC',
    company: 'Entreprise B',
    description:
      'Supervision de la sécurité, qualification des alertes et réponse aux incidents. Conception de règles de détection alignées sur MITRE ATT&CK.',
    highlights: ['80+ règles de détection', 'Temps de réponse divisé par deux'],
  },
  {
    period: '2020 — 2021',
    title: 'Stage de fin d’études — Sécurité cloud',
    company: 'Entreprise C',
    description:
      'Audit de la posture de sécurité d’un environnement AWS et automatisation des contrôles de conformité.',
    highlights: ['Contrôles CIS automatisés'],
  },
]

export const education = [
  {
    period: '2017 — 2020',
    title: 'Diplôme d’ingénieur — Sécurité des systèmes',
    company: 'École d’ingénieurs',
  },
]

export const projects = [
  {
    title: 'Laboratoire Active Directory',
    category: 'Offensive',
    description:
      'Environnement AD vulnérable automatisé (Terraform + Ansible) pour s’entraîner aux attaques Kerberos et documenter les contre-mesures.',
    tags: ['Terraform', 'Ansible', 'Active Directory'],
    link: '#',
  },
  {
    title: 'Pipeline DevSecOps',
    category: 'DevSecOps',
    description:
      'Chaîne CI/CD intégrant SAST, analyse des dépendances et scan d’images, avec seuils de blocage configurables.',
    tags: ['GitLab CI', 'Semgrep', 'Trivy'],
    link: '#',
  },
  {
    title: 'Règles de détection Sigma',
    category: 'Défensive',
    description:
      'Collection de règles Sigma cartographiées sur MITRE ATT&CK, testées sur des jeux de logs d’attaques simulées.',
    tags: ['Sigma', 'Elastic', 'MITRE ATT&CK'],
    link: '#',
  },
  {
    title: 'Outil d’audit de configuration',
    category: 'Automatisation',
    description:
      'Script Python qui compare la configuration de serveurs Linux aux recommandations CIS et génère un rapport HTML.',
    tags: ['Python', 'CIS', 'Reporting'],
    link: '#',
  },
]

export const approach = [
  {
    step: '01',
    title: 'Comprendre',
    text: 'Cartographier le périmètre, les actifs critiques et les enjeux métier avant toute action.',
  },
  {
    step: '02',
    title: 'Évaluer',
    text: 'Identifier les vulnérabilités et les scénarios de risque avec des méthodes reproductibles.',
  },
  {
    step: '03',
    title: 'Prioriser',
    text: 'Classer les constats selon leur impact réel pour concentrer l’effort là où il compte.',
  },
  {
    step: '04',
    title: 'Renforcer',
    text: 'Accompagner la remédiation, automatiser les contrôles et mesurer les progrès.',
  },
]
