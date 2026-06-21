export const profileData = {
  name: 'Nguyen Thanh Phuong',
  primaryRole: 'Frontend Developer',
  location: 'Ho Chi Minh City',
  email: 'nthanhphuong2112004@gmail.com',
  phone: '+84 908 305 196',
  github: 'https://github.com/char704',
  summary:
    'Final-year Computer Science student focused on building responsive and interactive web applications with React and JavaScript.',
  heroDescription:
    'I build responsive and interactive web applications with React, JavaScript, and modern frontend tools.',
  heroSupport:
    'My Business Analyst experience helps me understand product requirements and turn them into practical user interfaces.',
  education: {
    school: 'Open University',
    degree: 'Bachelor of Computer Science',
    graduation: 'Expected August 2026',
    gpa: '3.2 / 4.0',
  },
  english: 'TOEIC 700',
  about: {
    paragraphs: [
      'I am a final-year Computer Science student focused on frontend development with React and JavaScript.',
      'I enjoy turning requirements and design ideas into responsive, accessible, and maintainable user interfaces. My previous experience as a Business Analyst Intern also helps me understand user needs, document workflows, and communicate clearly with development teams.',
    ],
    facts: [
      { label: 'Location', value: 'Ho Chi Minh City' },
      { label: 'Education', value: 'Bachelor of Computer Science' },
      { label: 'Graduation', value: 'Expected August 2026' },
      { label: 'English', value: 'TOEIC 700' },
    ],
  },
  skills: [
    {
      id: 'frontend-core',
      category: 'Frontend Core',
      description: 'Foundational browser technologies for responsive and maintainable interfaces.',
      techs: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Responsive Design'],
      icon: 'Code2',
    },
    {
      id: 'ui-motion',
      category: 'UI and Motion',
      description: 'Styling, layout, and interaction tools used to build polished web experiences.',
      techs: ['Tailwind CSS', 'CSS Grid', 'Flexbox', 'GSAP', 'Framer Motion', 'Three.js'],
      icon: 'Layout',
    },
    {
      id: 'web-development',
      category: 'Web Development',
      description: 'Practical implementation skills for product interfaces and browser-based workflows.',
      techs: ['REST API Integration', 'Form Handling', 'State Management', 'Responsive Testing', 'Browser DevTools', 'Debugging'],
      icon: 'Wrench',
    },
    {
      id: 'development-tools',
      category: 'Development Tools',
      description: 'Daily tools for building, versioning, testing, and refining frontend projects.',
      techs: ['Git', 'GitHub', 'Vite', 'npm', 'VS Code', 'Figma'],
      icon: 'Terminal',
    },
  ],
  projects: [
    {
      id: 'framehub-gallery-mvp',
      title: 'FrameHub',
      type: 'Deployed Full-Stack MVP',
      description:
        'A deployed full-stack photo gallery platform for uploading, organizing, discovering, and interacting with community photos.',
      techStack: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'TanStack Query',
        'Node.js',
        'Express',
        'Prisma',
        'PostgreSQL',
        'Cloudinary',
        'JWT Auth',
      ],
      github: 'https://github.com/char704/gallery',
      liveDemo: 'https://gallery-ebon-six.vercel.app/',
      metric: 'MVP',
      previewImage: '/images/framehub-preview.jpg',
      previewAlt: 'Preview of the FrameHub photo gallery platform.',
      details: [
        'Built and deployed a full-stack gallery with React/Vite frontend, Express backend, PostgreSQL, Prisma, and Cloudinary.',
        'Implemented JWT authentication, photo upload validation, public/private visibility, albums, likes, and comments.',
        'Added public discovery workflows with Explore, search, tag filtering, sorting, trending tags, and pagination.',
        'Created reusable gallery components with responsive layouts, accessible controls, and API-driven loading, empty, and error states.',
        'Protected REST endpoints with validation, authorization checks, rate limiting, and Cloudinary image optimization.',
      ],
    },
    {
      id: 'interactive-developer-portfolio',
      title: 'Interactive Developer Portfolio',
      type: 'Frontend Development',
      description:
        'A responsive React portfolio focused on motion design, interactive visuals, and maintainable component architecture.',
      techStack: ['React', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Three.js', 'Vite'],
      github: 'https://github.com/char704/Portfolio',
      liveDemo: 'https://portfolio-nine-sandy-60s5o78rch.vercel.app',
      metric: 'WEB',
      previewImage: '/images/interactive-portfolio-preview.svg',
      previewAlt: 'Preview of the interactive developer portfolio interface.',
      details: [
        'Built a responsive single-page application with React.',
        'Structured the code using feature-based folders.',
        'Implemented scroll-triggered animations with GSAP.',
        'Added interactive motion with Framer Motion and a Three.js Hero visual.',
        'Included light and dark themes, reduced-motion support, a custom cursor, and a command palette.',
      ],
    },
    {
      id: 'static-portfolio-prototype',
      title: 'Static Portfolio Prototype',
      type: 'Frontend Prototype',
      description:
        'A multi-page static portfolio prototype with responsive layouts, shared project data, and lightweight browser interactions.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/char704/my-portfolio',
      metric: 'UI',
      previewImage: '/images/static-portfolio-preview.svg',
      previewAlt: 'Preview of the static portfolio prototype pages.',
      details: [
        'Structured separate pages for home, work, project detail, and contact views.',
        'Rendered project cards and project detail content from a shared JavaScript data file.',
        'Added responsive styling, focus-visible states, and scroll reveal interactions.',
      ],
    },
  ],
  experience: [
    {
      role: 'Business Analyst Intern',
      company: 'Vietnam AI Software Solution',
      period: 'Nov 2025 - Feb 2026',
      points: [
        'Gathered and analyzed requirements from school administrators, teachers, and staff.',
        'Translated user needs into functional specifications, user stories, and workflows.',
        'Worked with developers to clarify features and expected system behavior.',
        'Prepared documentation and presentation materials for product discussions.',
      ],
    },
    {
      role: 'IT Helpdesk Intern',
      company: 'Saigon High-Tech Park',
      period: 'Sep 2025 - Nov 2025',
      points: [
        'Supported users with hardware and software issues.',
        'Assisted with system setup and technical troubleshooting.',
        'Documented issues and resolution steps.',
      ],
    },
  ],
  achievement: {
    title: 'Consolation Prize',
    context: 'University-level Scientific Research Competition',
    project: 'Adaptive CATANet for Lightweight Image Super-Resolution',
    year: '2025',
  },
  resume: {
    label: 'Download Frontend CV',
    file: '/cv_frontend.pdf',
    downloadName: 'Nguyen_Thanh_Phuong_Frontend_CV.pdf',
  },
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
  english: profileData.english,
  resume: profileData.resume,
};

export const skillGroups = profileData.skills.map((skill) => ({
  title: skill.category,
  items: skill.techs,
}));

export const projects = profileData.projects.map((project) => ({
  ...project,
  eyebrow: project.type,
  summary: project.description,
  tools: project.techStack,
}));

export const experience = profileData.experience;
export const achievement = profileData.achievement;

export const contactLinks = [
  { label: 'Email', href: `mailto:${profileData.email}` },
  { label: 'GitHub', href: profileData.github, external: true },
  { label: 'Phone', href: 'tel:+84908305196' },
];
