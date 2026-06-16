export const profileData = {
  name: 'Nguyen Thanh Phuong',
  primaryRole: 'AI Engineer',
  location: 'Ho Chi Minh City',
  email: 'nthanhphuong2112004@gmail.com',
  phone: '+84 908 305 196',
  github: 'https://github.com/char704',
  summary:
    'Final-year Computer Science student building across AI engineering, frontend interfaces, data analysis, and IT systems support.',
  education: {
    school: 'Open University',
    degree: 'Bachelor of Computer Science',
    graduation: 'Expected August 2026',
    gpa: '3.2 / 4.0',
  },
  award: {
    title: 'Consolation Prize',
    context: 'University-level Scientific Research Competition',
    project: 'Adaptive CATANet for Lightweight Image Super-Resolution',
    year: '2025',
  },

  // Dành cho hiệu ứng Text Rotator ở Hero Section
  roles: ['AI Engineer', 'Frontend Developer', 'Data Analyst', 'IT Systems Support'],

  // Dành cho About Section (Bento Grid) - Phân lô 4 mảng
  skills: [
    {
      id: 'intelligence',
      category: 'Intelligence & Data',
      description: 'Xây dựng mô hình AI và khai phá dữ liệu.',
      techs: ['Python', 'TensorFlow', 'Pandas', 'SQL', 'PowerBI'],
      icon: 'Brain',
    },
    {
      id: 'interface',
      category: 'Interface & Interaction',
      description: 'Phát triển giao diện web tương tác cao và mượt mà.',
      techs: ['ReactJS', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'JavaScript'],
      icon: 'Layout',
    },
    {
      id: 'infrastructure',
      category: 'Infrastructure & Support',
      description: 'Vận hành hệ thống, mạng và hỗ trợ kỹ thuật.',
      techs: ['Linux', 'Networking', 'Troubleshooting', 'Windows Server', 'Hardware'],
      icon: 'Server',
    },
    {
      id: 'core',
      category: 'Core Toolkit',
      description: 'Các công cụ cốt lõi trong quy trình làm việc.',
      techs: ['Git', 'Docker', 'VS Code', 'Terminal', 'Agile/Scrum'],
      icon: 'Terminal',
    },
  ],

  // Dành cho Projects Section (Stacked Cards) - Thêm thuộc tính 'type' để làm màu Tag
  projects: [
    {
      id: 1,
      title: 'Adaptive CATANet',
      type: 'AI / Data',
      description: 'Mô hình nhận diện và phân tích dữ liệu hình ảnh với độ chính xác cao.',
      techStack: ['Python', 'PyTorch', 'OpenCV'],
      link: '#',
      metric: 'AI',
      previewImage: '/images/ai-lab-visual.png',
      details: [
        'Designed adaptive token allocation for lightweight image super-resolution.',
        'Evaluated model behavior with image-quality metrics and visual inspection.',
        'Refined the architecture for a cleaner accuracy-to-compute tradeoff.',
      ],
    },
    {
      id: 2,
      title: 'Awwwards Portfolio',
      type: 'Frontend',
      description: 'Trang web cá nhân tương tác cao sử dụng React và GSAP ScrollTrigger.',
      techStack: ['ReactJS', 'GSAP', 'Tailwind CSS'],
      link: '#',
      metric: 'WEB',
      previewImage: '/images/ai-lab-visual.png',
      details: [
        'Built a single-page portfolio with smooth scrolling and chapter-based storytelling.',
        'Implemented staggered type, stacked project cards, custom cursor, and command palette interactions.',
        'Structured the project with feature-based folders for maintainable iteration.',
      ],
    },
    {
      id: 3,
      title: 'Automated IT Provisioning',
      type: 'IT Support',
      description: 'Hệ thống script tự động hóa cài đặt và giám sát máy chủ nội bộ.',
      techStack: ['Bash', 'PowerShell', 'Linux'],
      link: '#',
      metric: 'OPS',
      previewImage: '/images/ai-lab-visual.png',
      details: [
        'Automated repeatable setup tasks for workstation and server environments.',
        'Documented troubleshooting steps for faster support handoffs.',
        'Focused on stable operations, clear diagnostics, and practical internal tooling.',
      ],
    },
  ],

  experience: [
    {
      role: 'Business Analyst Intern',
      company: 'Vietnam AI Software Solution',
      period: 'Nov 2025 - Feb 2026',
      points: [
        'Gathered and analyzed business requirements from administrators, teachers, and staff.',
        'Translated business needs into functional specifications, user stories, and system workflows.',
        'Prepared project documentation, reports, and presentation materials for development teams.',
      ],
    },
    {
      role: 'IT Helpdesk Intern',
      company: 'Saigon High-Tech Park',
      period: 'Sep 2025 - Nov 2025',
      points: [
        'Provided technical support for hardware and software issues for internal users.',
        'Assisted in system setup, configuration, and troubleshooting for stable daily operations.',
      ],
    },
  ],

  // Dành cho Command Palette (Easter Egg)
  resumes: [
    { label: 'Download CV (AI & Data)', file: '/cv_ai_data.pdf' },
    { label: 'Download CV (Frontend)', file: '/cv_frontend.pdf' },
    { label: 'Download CV (IT Support)', file: '/cv_itsupport.pdf' },
  ],
};

export const profile = {
  name: profileData.name,
  role: profileData.primaryRole,
  location: profileData.location,
  email: profileData.email,
  phone: profileData.phone,
  github: profileData.github,
  summary: profileData.summary,
  education: profileData.education,
  award: profileData.award,
};

export const heroMetrics = [
  { value: 'AI', label: profileData.roles[0] },
  { value: 'FE', label: profileData.roles[1] },
  { value: 'DA', label: profileData.roles[2] },
  { value: 'IT', label: profileData.roles[3] },
];

export const skillGroups = profileData.skills.map((skill) => ({
  title: skill.category,
  items: skill.techs,
}));

export const experience = profileData.experience;

const projectMetricByType = {
  'AI / Data': 'AI',
  Frontend: 'WEB',
  'IT Support': 'OPS',
};

export const projects = profileData.projects.map((project) => ({
  id: project.id,
  title: project.title,
  type: project.type,
  eyebrow: project.type,
  description: project.description,
  summary: project.description,
  techStack: project.techStack,
  tools: project.techStack,
  link: project.link,
  metric: project.metric ?? projectMetricByType[project.type] ?? 'LAB',
  previewImage: project.previewImage ?? '/images/ai-lab-visual.png',
  details: project.details ?? [
    `Focus area: ${project.type}.`,
    `Built with ${project.techStack.join(', ')}.`,
    'Prepared as a portfolio-ready case study with space for a live link.',
  ],
}));

export const contactLinks = [
  { label: 'Email', href: `mailto:${profileData.email}` },
  { label: 'GitHub', href: profileData.github },
  { label: 'Phone', href: 'tel:+84908305196' },
];
