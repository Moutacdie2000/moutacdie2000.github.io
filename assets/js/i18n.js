/*
 * English translations for the Noumabeu Moutacdie Jordan portfolio.
 * French lives natively in index.html (default language); this file only
 * carries the English layer: static UI strings plus the English variants
 * of the EXPERIENCE and PROJECTS data arrays, keyed the same way as the
 * French source so index.html can merge them at render time.
 *
 * window.I18N = {
 *   ui:             static strings, dot-path keyed (nav, hero, about, ...)
 *   techCategories: FR category name (TECH[i][0]) -> EN category name
 *   cats:           PROJECTS "cat" key -> EN label (mirrors CATS)
 *   roles:          ROLES key -> EN label
 *   experience:     English variant of EXPERIENCE, same order/length (index-matched)
 *   projects:       English variant of PROJECTS fields, keyed by slugOf(p) = p.repo || p.slug
 * }
 */
window.I18N = {
  ui: {
    nav: {
      brandSub: "DevOps & Cloud · Developer",
      about: "Profile",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact me"
    },
    theme: {
      ariaLabel: "Toggle light or dark theme",
      title: "Light / dark theme"
    },
    hero: {
      status: "Open to opportunities · DevOps / Cloud / Backend",
      role: "DevOps & Cloud Engineer · Backend & Full-stack Developer",
      lead: "From infrastructure to application code: I design, automate and harden secure, scalable cloud-native platforms. AWS Solutions Architect Associate certified.",
      ctaCv: "Download my CV",
      ctaProjects: "View my projects",
      statProjects: "Projects",
      statExperience: "Positions",
      statProfiles: "Tech profiles",
      statDemos: "Live demos",
      statCertified: "Certified 2024-27",
      photoAlt: "Photo of Noumabeu Moutacdie Jordan",
      badgeSubtitle: "Associate · valid 2024-2027"
    },
    about: {
      eyebrow: "Profile",
      title: "From cloud provisioning to production",
      p1: "<b>DevOps & Cloud</b> engineer and <b>back-end / full-stack</b> developer, certified <b>AWS Solutions Architect Associate</b>. I design and harden cloud-native platforms, from infrastructure (Terraform, Kubernetes, CI/CD) to code (NestJS, .NET, Python / Django, Odoo).",
      p2: "Currently <b>DevOps Consultant & Backend Developer at Corextreme Technologies</b>. Open to DevOps, Cloud and back-end engagements.",
      factLocationLabel: "Location",
      factLocationValue: "Yaoundé, Cameroon · open to remote",
      factRoleLabel: "Current role",
      factRoleValue: "DevOps Consultant & Backend Dev., Corextreme",
      factStackLabel: "Key stack",
      factLangsLabel: "Languages",
      factLangsValue: "French (fluent) · English (technical)"
    },
    skillsSection: {
      eyebrow: "Skills",
      title: "Technical stack",
      intro: "From cloud and IaC to application development and observability."
    },
    experienceSection: {
      eyebrow: "Experience",
      title: "Professional experience",
      intro: "Six roles in DevOps, cloud and development, from a banking internship to a high-load platform."
    },
    projectsSection: {
      eyebrow: "Portfolio",
      title: "Projects",
      intro: "19 projects, from multi-account cloud foundations to products in production. Filter by role or skill, and click a card to open the full detail (domain, key highlights, related skills and links).",
      filterRole: "Filter by role",
      filterSkill: "Filter by skill",
      allSkills: "All skills",
      moreGithub: "All my repositories on GitHub",
      viewDetail: "View details",
      viewDetailAriaPrefix: "View details for project",
      previewAlt: "Preview of project",
      featured: "Featured",
      resetFilters: "Reset filters",
      noMatch: "No project matches this combination of filters."
    },
    educationSection: {
      eyebrow: "Education",
      title: "How I got here.",
      intro: "A software engineering track combined with a cloud and DevOps specialization, validated by an AWS certification.",
      verify: "Verify the certification",
      card1: { date: "2025 - present", degree: "Master 2 - Software Engineering", meta: "Yaoundé, Cameroon" },
      card2: { degree: "Professional Bachelor - Computer / Software Engineering", meta: "Yaoundé, Cameroon" },
      card3: { degree: "DevOps & AWS Cloud Program", meta: "Cameroon" }
    },
    contact: {
      title: "Let's build something reliable",
      lead: "Available for opportunities in DevOps, Cloud and back-end development. Feel free to reach out.",
      verifyAws: "Verify my AWS certification"
    },
    footer: {
      role: "Noumabeu Moutacdie Jordan · DevOps & Cloud Engineer · Backend & Full-stack Developer",
      madeBy1: "Designed and built by me",
      madeBy2: "Hosted on GitHub Pages"
    },
    modal: {
      closeAria: "Close details",
      enlarge: "Enlarge",
      highlights: "Key highlights",
      skillsTech: "Skills & technologies",
      sourceCode: "Source code",
      viewDemo: "View demo",
      closeImage: "Close image",
      imgAlt: "Enlarged project image"
    }
  },

  techCategories: {
    "Cloud & IaC": "Cloud & IaC",
    "Conteneurs & CI/CD": "Containers & CI/CD",
    "Backend": "Backend",
    "Front-end & Données": "Front-end & Data",
    "Observabilité & OS": "Observability & OS"
  },

  cats: { all: "All", cloud: "Cloud & DevOps", backend: "Backend & APIs", web: "Web & real-time" },

  roles: {
    all: "All profiles",
    devops: "DevOps & Cloud",
    backend: "Backend & APIs",
    fullstack: "Full-stack & Web",
    pod: "Python / Odoo / .NET"
  },

  // ----- Experience (same order and length as EXPERIENCE in index.html) -----
  experience: [
    {
      role: "DevOps Consultant & Backend Developer",
      co: "ROISBET",
      date: "Jan. 2026 - Present",
      bullets: [
        "High-load sports betting & gaming platform: distributed architecture of 35 microservices in production.",
        "Kubernetes orchestration: rolling deployments with no downtime, autoscaling (HPA), health probes, configuration and secrets.",
        "AWS infrastructure: service sizing, networking and IAM security (roles, least privilege, environment isolation).",
        "Back-end services development: APIs, inter-service integrations, real-time processing.",
        "DevOps industrialization: containerization, CI/CD pipelines, deployments and observability."
      ]
    },
    {
      role: "AWS Cloud Engineer & Full-stack Developer",
      co: "ALORI (Remote)",
      date: "Nov. 2025 - Present",
      bullets: [
        "SkillsOri (skillsori.com): multi-tenant SaaS resume/CV builder, back-end Django / DRF, front-end Next.js 16 / React 19, PostgreSQL.",
        "Serverless AWS architecture: container image on ECR run as Lambda behind API Gateway, Aurora PostgreSQL database, media on S3, secrets in Secrets Manager.",
        "GitLab CI/CD authenticating via OIDC to an IAM role (STS), with no static access keys; Trivy image scanning.",
        "Microfinance application on AWS Amplify: hosting, CI/CD, managed environments, IAM hardening and build optimization."
      ]
    },
    {
      role: "Cloud Computing Trainer (AWS / DevOps)",
      co: "IFP-T, Yaoundé",
      date: "Oct. 2025 - Mar. 2026",
      bullets: [
        "Design and delivery of training courses: AWS, Azure, GCP, IaC (Terraform), Ansible, Docker, CI/CD.",
        "Hands-on labs, mentoring and AWS certification coaching (Foundational & Associate)."
      ]
    },
    {
      role: "DevOps & Cloud Architect",
      co: "Global Technology & Associates",
      date: "Mar. 2025 - Aug. 2025",
      bullets: [
        "Hospital management application on Odoo 18, now in production at a healthcare facility: 47 business models covering consultations, admissions, maternity, laboratory, pharmacy and FCFA billing.",
        "Role-based access governance for care staff (12 security groups, 409 rules), 14 QWeb PDF reports and 8 scheduled jobs (low stock, missed medication administration, overdue invoices).",
        "Industrialization: Docker & PostgreSQL containerization, Terraform provisioning (VPC, EC2, SG), configuration and deployment with Ansible, hybrid cloud via Azure Arc.",
        "End-to-end CI/CD: quality checks (pylint-odoo, Bandit, Semgrep), image build, automated deployment and health checks."
      ]
    },
    {
      role: "Odoo 17 Developer",
      co: "Independent contract",
      date: "Sep. 2024 - Nov. 2024",
      bullets: [
        "Development and customization of Odoo 17 modules (Python, ORM, model inheritance).",
        "Adaptation of business workflows (sales / inventory / invoicing), QWeb reports, Docker deployment."
      ]
    },
    {
      role: "Developer & Cloud Architect Intern",
      co: "Afriland First Bank",
      date: "Jun. 2024 - Aug. 2024",
      bullets: [
        "Migration architecture of the banking information system to AWS (EC2, S3, EFS, IAM, Route 53), HA & DRP options.",
        "Cost optimization (Cost Explorer), technical diagrams and documentation."
      ]
    }
  ],

  // ----- Projects (keyed by slugOf(p) = p.repo || p.slug) -----
  projects: {
    "skillsori": {
      domain: "Multi-tenant SaaS · Serverless AWS · Client project in production",
      desc: "End-to-end online resume/CV builder SaaS: Django / DRF API and Next.js 16 front-end, deployed serverless on AWS with a CI/CD pipeline that uses no static access keys.",
      long: "A multi-tenant SaaS for building resumes/CVs, designed, built and shipped to production end-to-end. The Django / DRF API is packaged as a container image and runs on AWS Lambda behind API Gateway, backed by an Aurora PostgreSQL database, with media uploaded directly to S3 via presigned URLs. Every published CV is served on its own subdomain. The delivery pipeline authenticates to AWS via OIDC and a temporary IAM role, with no stored access keys.",
      highlights: [
        "Back-end in Django 4.2 / DRF, front-end in Next.js 16 / React 19 / TypeScript",
        "Container image on ECR run as Lambda behind API Gateway",
        "Aurora PostgreSQL database, media on S3 via presigned URL",
        "Secrets centralized in AWS Secrets Manager",
        "GitLab CI/CD via OIDC to an IAM role (STS), no static keys",
        "Trivy image scanning, alternative EC2 / Docker target (Nginx, Let's Encrypt TLS)",
        "Expiring token authentication and TOTP 2FA, per-plan quotas",
        "PayPal and Mobile Money (MTN / Orange) subscriptions",
        "Public profiles on subdomains, FR / EN internationalization",
        "Playwright end-to-end tests"
      ]
    },
    "aws-landing-zone-terraform": {
      domain: "Cloud & DevOps · Multi-account governance (IaC)",
      desc: "Enterprise multi-account foundation: Organizations, SCPs, IAM Identity Center, centralized logging and GuardDuty, built in Terraform / Terragrunt.",
      long: "An enterprise landing zone that lays the governance, security and compliance foundations ahead of any application deployment on AWS. The entire setup is version-controlled in Terraform / Terragrunt to stay reproducible and auditable.",
      highlights: [
        "Multi-account structure via AWS Organizations and organizational units (OUs)",
        "Security guardrails with Service Control Policies (SCPs)",
        "Centralized authentication via IAM Identity Center (SSO)",
        "Traceability: centralized CloudTrail and AWS Config, GuardDuty threat detection",
        "Terragrunt industrialization (DRY, multi-environment)"
      ]
    },
    "eks-microservices-gitops": {
      domain: "Cloud & DevOps · Kubernetes / GitOps",
      desc: "Microservices on AWS EKS driven by GitOps (Helm + ArgoCD, app-of-apps), HPA autoscaling and Trivy image scanning.",
      long: "A microservices platform on Kubernetes (AWS EKS) fully driven by GitOps: cluster state is described in Git and reconciled automatically by ArgoCD (app-of-apps pattern). Deployments are packaged with Helm, scaled by HPA and secured with image scanning.",
      highlights: [
        "AWS EKS cluster provisioned with IaC",
        "Declarative deployment via ArgoCD (GitOps, app-of-apps)",
        "Application packaging with Helm charts",
        "Horizontal autoscaling (HPA) based on load",
        "Supply-chain security: Trivy image scanning in CI",
        "GitHub Actions CI"
      ]
    },
    "aws-webapp-3tier-ha": {
      domain: "Cloud & DevOps · High-availability architecture",
      desc: "High-availability 3-tier web architecture (multi-AZ VPC, ALB, ECS Fargate, RDS Multi-AZ, CloudFront), 100% Terraform.",
      long: "A 3-tier web architecture designed for high availability and multi-AZ resilience on AWS, deployed entirely in Terraform with a CI/CD pipeline. Built to absorb the loss of an availability zone with no service interruption.",
      highlights: [
        "Multi-AZ VPC network (public and private subnets)",
        "Load balancing via Application Load Balancer",
        "Application containers on ECS Fargate (no servers to manage)",
        "RDS Multi-AZ database with automatic failover",
        "Content delivery via CloudFront (CDN)",
        "Fully in Terraform with GitHub Actions CI/CD"
      ]
    },
    "observability-devsecops": {
      domain: "Observability & SRE · DevSecOps",
      desc: "Observability stack (Prometheus, Grafana, Loki, Tempo, OTel) plus a DevSecOps pipeline (tfsec, Checkov, Trivy, gitleaks, Semgrep).",
      long: "A complete observability stack (metrics, logs, traces) paired with a DevSecOps chain that builds security into every stage of the pipeline. The whole approach is SLO / SLI-driven, steering reliability through service-level objectives.",
      highlights: [
        "Prometheus metrics and Grafana dashboards",
        "Centralized logs with Loki, distributed tracing with Tempo / OpenTelemetry",
        "SLO definition and burn-rate alerting",
        "Shift-left security: tfsec and Checkov (IaC), Trivy (images), gitleaks (secrets), Semgrep (SAST)"
      ]
    },
    "serverless-event-driven-cdk": {
      domain: "Cloud & DevOps · Serverless / Event-driven",
      desc: "Event-driven serverless backend in AWS CDK: API Gateway, Lambda, DynamoDB, EventBridge, Step Functions, SQS DLQ, X-Ray.",
      long: "A serverless, event-driven backend on AWS, defined in CDK (TypeScript). The architecture decouples processing through events and guarantees resilience (retries, dead-letter queues) and end-to-end traceability.",
      highlights: [
        "API Gateway and Lambda (on-demand compute)",
        "Orchestration via Step Functions, EventBridge events",
        "DynamoDB persistence",
        "Resilience: dead-letter queues (SQS DLQ) and retries",
        "Distributed tracing with X-Ray",
        "Infrastructure as AWS CDK (TypeScript)"
      ]
    },
    "buildpilot": {
      domain: "SaaS · Construction / Site management",
      desc: "Multi-tenant SaaS platform for construction site management: NestJS, Prisma, Next.js, 6-role RBAC, real-time features, Mobile Money payments.",
      long: "A multi-company SaaS platform that digitizes construction site management, from quotes to time tracking. A multi-tenant architecture with fine-grained access control, real-time features and mobile payments, built for production.",
      highlights: [
        "Multi-tenant: per-company data isolation",
        "JWT access/refresh authentication, 6-role RBAC",
        "Real-time features via Socket.IO (notifications, messaging)",
        "File storage on Amazon S3 with local fallback",
        "Mobile Money payments (Campay) with signed webhook",
        "Site logbook, budget tracking, PDF quotes / invoices, inventory"
      ]
    },
    "boxoffice-ticketing": {
      domain: "Ticketing · Concurrency & data consistency",
      desc: "A ticketing API guaranteeing zero overselling under heavy concurrency: EF Core (optimistic concurrency), SignalR, xUnit load tests.",
      long: "A ticketing API whose central challenge is guaranteeing no overselling when thousands of buyers book the same seats at once. The project demonstrates mastery of concurrency, transactions and load testing.",
      highlights: [
        "Optimistic concurrency via EF Core (row versioning)",
        "Zero-overselling guarantee under heavy load",
        "Real-time notifications via SignalR",
        "JWT-based security",
        "17 xUnit tests, including a parallel load test",
        "Containerized (Docker and PostgreSQL)"
      ]
    },
    "bazar-marketplace": {
      domain: "Marketplace · E-commerce",
      desc: "A services marketplace built in Django: DRF API, Celery, real-time chat (Channels), Stripe Connect, PostgreSQL full-text search.",
      long: "A full-featured services marketplace in Django, covering the business API, split payments between sellers, real-time communication and high-performance search. A decoupled architecture with asynchronous processing.",
      highlights: [
        "REST API with Django REST Framework",
        "Multi-vendor payments via Stripe Connect",
        "Real-time chat via Channels (WebSockets)",
        "Asynchronous tasks with Celery (workers)",
        "PostgreSQL full-text search (FTS)",
        "Containerized, tested with pytest"
      ]
    },
    "pulse-monitoring": {
      domain: "SaaS · Monitoring / Observability",
      desc: "Multi-tenant SaaS for uptime monitoring and status pages: Next.js 14, Prisma, Auth.js v5, Stripe, 56 tests.",
      long: "A multi-tenant SaaS for uptime monitoring with public status pages, subscriptions and incident management. Built around a modern experience (Next.js) and solid test coverage.",
      highlights: [
        "Multi-tenant architecture with RBAC",
        "Uptime monitoring and public status pages",
        "Incident management",
        "Stripe subscriptions and billing",
        "Incremental static regeneration (ISR)",
        "56 tests"
      ]
    },
    "addons": {
      domain: "Healthcare ERP · In production at a hospital",
      desc: "A complete hospital application on Odoo 18: 47 business models, 14 PDF reports, 12 care-staff roles and Docker CI/CD. In production at St Thérèse Medical Centre (Nomayos, Cameroon).",
      long: "A complete hospital application built on Odoo 18, now used daily by a healthcare facility. It covers the entire care pathway: patient admission, consultations, hospital stays and vital-sign monitoring, maternity care (deliveries, newborns, the Cameroonian EPI vaccination schedule), laboratory work (microbiology, antibiograms, ophthalmology), pharmacy and inventory, then billing, deposits and payments in FCFA. Around 44,000 lines of code (26,400 Python, 17,900 XML) and 47 business models, with fine-grained access governance by care-staff role and a fully automated delivery pipeline.",
      highlights: [
        "47 Odoo business models (39 persistent, 8 transient wizards), around 44,000 lines of code",
        "Care pathway: consultations, hospital stays, vital signs, procedures and diagnoses",
        "Maternity and pediatrics: deliveries, newborns, Cameroon's EPI vaccination schedule",
        "Laboratory: microbiology, antibiograms, ophthalmology exams",
        "Pharmacy and inventory: stock movements, low-stock thresholds, medication administration",
        "Billing, deposits and payments in FCFA, multi-company management",
        "14 QWeb PDF reports: invoices, cash vouchers, lab reports, birth certificates",
        "12 business security groups and 409 access rules, per-company isolation",
        "8 scheduled jobs: low stock, missed medication administration, overdue invoices",
        "5 dashboards: physician, nurse, billing, statistics",
        "GitHub Actions CI/CD: quality checks, image build, SSH deployment, module upgrade and health check",
        "Docker and PostgreSQL 17, private registry, 16 versioned migration scripts",
        "Quality and security in CI: pylint-odoo, Bandit, Semgrep, automated tests"
      ]
    },
    "taf-odoo15": {
      domain: "ERP · Cloud integration",
      desc: "An Odoo 15 module that adds a dynamic AWS services section to the website, managed from the back office.",
      long: "An Odoo 15 module that enriches the website with a dynamic section showcasing AWS services, manageable directly from the Odoo back office. A bridge between the ERP and a cloud service catalog.",
      highlights: [
        "Dynamic web section managed from the back office",
        "Showcase of managed AWS services",
        "Odoo module development (Python / XML)"
      ]
    },
    "asso-stock": {
      domain: "Inventory management · Nonprofit sector",
      desc: "A web application for nonprofit inventory management: products, categories, donations, transactions. Next.js, Prisma, Clerk.",
      long: "A web application for inventory management designed for nonprofits: tracking products, categories, donations and transactions, with managed authentication. A modern Next.js interface with Prisma persistence.",
      highlights: [
        "Management of products, categories, donations and transactions",
        "Authentication via Clerk",
        "Persistence via the Prisma ORM",
        "Next.js interface"
      ]
    },
    "trading-sim": {
      domain: "FinTech · Real-time trading (order book)",
      desc: "An order book simulator: a C++17 matching engine (limit-price-time priority), a Node WebSocket gateway, a React UI and a Qt 6 client.",
      long: "An end-to-end market simulator: a C++ engine generates and matches orders by price-time priority, a Node gateway streams the feed over WebSocket, and a front end (React or Qt) lets you trade and track P&L live. A polyglot project that touches on high-performance computing and real-time systems.",
      highlights: [
        "C++17 matching engine (limit-price-time priority)",
        "Synthetic order generation (Poisson process)",
        "Node.js / TypeScript gateway streaming over WebSocket",
        "React web interface and Qt 6 desktop client",
        "Live mark-to-market P&L tracking"
      ]
    },
    "grid-mission-control": {
      domain: "Observability · Real-time dashboard",
      desc: "A mission-control-style observability dashboard: real-time streams via SSE, a Node Fastify back end, a React / Vite front end.",
      long: "A mission-control-style observability dashboard that displays live data streams. Full-stack, with a Node back end pushing updates via Server-Sent Events and a custom-designed interface.",
      highlights: [
        "Real-time streams via Server-Sent Events (SSE)",
        "Node Fastify back end",
        "React / Vite / TypeScript front end",
        "Custom mission-control design"
      ]
    },
    "rooms-draw-guess": {
      domain: "Multiplayer game · Real-time",
      desc: "A multiplayer draw-and-guess game (Pictionary-style): an authoritative WebSocket server (Node ws), bots, React front end.",
      long: "A multiplayer draw-and-guess game (Pictionary-style) with an authoritative server as the single source of truth for game state, WebSocket communication and bots. Careful handling of real-time behavior and player synchronization.",
      highlights: [
        "Authoritative game server (Node ws)",
        "Bidirectional WebSocket communication",
        "Bots to fill out matches",
        "React / Vite / TypeScript front end",
        "Neo-brutalist design"
      ]
    },
    "orbit-data-story": {
      domain: "Data storytelling · Space",
      desc: "A scrollytelling data story about orbital launches: Astro (SSG) plus React islands and D3 visualizations. Live demo.",
      long: "An interactive scrollytelling data story that tells the history of orbital launches. Built with Astro for performance (static rendering), with hydrated React islands and D3 visualizations animated on scroll.",
      highlights: [
        "Scrollytelling: scroll-driven narrative",
        "Astro static rendering (performance and SEO) with React islands",
        "D3 data visualizations",
        "Data preparation pipeline",
        "Polished editorial design",
        "Deployed online (live demo)"
      ]
    },
    "sudoku": {
      domain: "Game · Algorithms",
      desc: "A playable web Sudoku: a unique-solution generator, a backtracking solver, live validation. TypeScript + Vite. Live demo.",
      long: "A complete, playable web Sudoku, with a generator that guarantees a unique solution and a backtracking solver. The logic is pure and testable, and the play experience is polished (notes, hints, live validation).",
      highlights: [
        "Unique-solution grid generator",
        "Backtracking solver",
        "Live conflict validation, notes and hints",
        "Pure, tested logic",
        "TypeScript + Vite, editorial paper-inspired design",
        "Deployed online (live demo)"
      ]
    },
    "projetgit": {
      domain: "Front-end web · Fundamentals",
      desc: "A collection of vanilla JavaScript front-ends: the AzerType typing game, a showcase site, a photo portfolio. Live demo.",
      long: "A collection of front-end projects built in vanilla JavaScript (no framework), including AzerType, a fast-typing practice game, a showcase site and a photo portfolio. Demonstrates mastery of core web fundamentals.",
      highlights: [
        "AzerType typing game (words or sentences, scoring)",
        "Showcase site and photo portfolio",
        "HTML, CSS and vanilla JavaScript (no framework)",
        "Deployed online (live demo)"
      ]
    }
  }
};
