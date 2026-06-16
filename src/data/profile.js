export const profile = {
  name: 'Nguyen Thanh Phuong',
  role: 'AI Engineer',
  location: 'Ho Chi Minh City',
  email: 'nthanhphuong2112004@gmail.com',
  phone: '+84 908 305 196',
  github: 'https://github.com/char704',
  summary:
    'Final-year Computer Science student focused on AI Engineering, computer vision, machine learning, and careful model evaluation.',
  education: {
    school: 'Open University',
    degree: 'Bachelor of Computer Science',
    graduation: 'Expected August 2026',
    gpa: '3.2 / 4.0',
  },
  award: {
    title: 'Consolation Prize',
    context: 'University-level Scientific Research Competition',
    project: 'AdaptiveCATANet for Lightweight Image Super-Resolution',
    year: '2025',
  },
};

export const heroMetrics = [
  { value: 'AI', label: 'Engineering focus' },
  { value: 'CV', label: 'Computer vision' },
  { value: 'SR', label: 'Image super-resolution' },
  { value: '750', label: 'TOEIC English' },
];

export const skillGroups = [
  {
    title: 'AI / Machine Learning',
    items: ['Regression', 'Classification', 'CNN', 'Transformers', 'Model Evaluation'],
  },
  {
    title: 'Computer Vision',
    items: ['Image Super-Resolution', 'Attention Mechanisms', 'PSNR', 'SSIM'],
  },
  {
    title: 'Programming',
    items: ['Python', 'SQL', 'C++', 'PyTorch', 'TensorFlow', 'scikit-learn'],
  },
  {
    title: 'Data & Tools',
    items: ['pandas', 'NumPy', 'Git/GitHub', 'Jupyter', 'Google Colab', 'BasicSR', 'Streamlit'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
];

export const experience = [
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
];

export const projects = [
  {
    title: 'AdaptiveCATANet',
    eyebrow: 'Lightweight image super-resolution',
    tools: ['PyTorch', 'BasicSR', 'CUDA', 'Google Colab', 'Computer Vision'],
    summary:
      'Improved a CATANet-based architecture for Single Image Super-Resolution with Adaptive Token Allocation.',
    details: [
      'Designed AdaptiveTAB with a Token Predictor to combine K=16 and K=64 token branches through Soft-Selection.',
      'Integrated Channel Attention, SiLU, Charbonnier Loss, and Sparsity Loss for representation quality and training stability.',
      'Evaluated image quality through model behavior, PSNR, SSIM, and lightweight trade-offs.',
    ],
    metric: 'SISR',
  },
  {
    title: 'Fair Comparison of MLP and KAN',
    eyebrow: 'Model evaluation framework',
    tools: ['PyTorch', 'KAN', 'NumPy', 'Matplotlib'],
    summary:
      'Built a controlled experimental framework to compare MLP and KAN on function approximation and MNIST classification.',
    details: [
      'Aligned optimizer, learning rate, batch size, training setup, and model settings to reduce evaluation bias.',
      'Analyzed learning curves, FLOPs, parameter count, convergence behavior, and architecture trade-offs.',
      'Produced documentation that makes the comparison reproducible and easier to inspect.',
    ],
    metric: 'FLOPs',
  },
  {
    title: 'School Workflow Analysis',
    eyebrow: 'Business analysis case study',
    tools: ['User Stories', 'System Workflows', 'Documentation', 'Stakeholder Analysis'],
    summary:
      'Mapped school stakeholder needs into clear functional specifications and delivery-ready documentation.',
    details: [
      'Interviewed and synthesized requirements from administrators, teachers, staff, and internal teams.',
      'Structured workflows and acceptance criteria so developers could clarify scope faster.',
      'Created presentation materials and reports for alignment across technical and non-technical audiences.',
    ],
    metric: 'BA',
  },
];

export const contactLinks = [
  { label: 'Email', href: 'mailto:nthanhphuong2112004@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/char704' },
  { label: 'Phone', href: 'tel:+84908305196' },
];
