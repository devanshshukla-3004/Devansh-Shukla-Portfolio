import type { Project } from './types';

/** Add projects here; case-study sections and galleries are optional verified content. */
export const projects: readonly Project[] = [
  {
    slug: 'mitra-ai',
    title: 'MITRA AI',
    category: 'AI · Learning',
    shortDescription: 'An AI-powered student learning platform centered on personalized study, exam preparation, practice, analytics, tutoring and planning.',
    tags: ['Personalized learning', 'AI tutoring', 'Study planning'],
    caseStudy: {
      features: ['Personalized learning', 'Exam preparation and practice', 'Analytics', 'AI tutoring', 'Study planning'],
      media: [],
    },
  },
  {
    slug: 'swarsense',
    title: 'SwarSense',
    category: 'Audio · Analysis',
    shortDescription: 'A voice and audio analysis project focused on detecting fake or synthetic voices.',
    tags: ['Voice analysis', 'Audio', 'Synthetic voice detection'],
    caseStudy: { media: [] },
  },
  {
    slug: 'hr-attrition',
    title: 'HR Employee Attrition and Workforce Analytics Dashboard',
    category: 'Data · Analytics',
    shortDescription: 'An employee attrition and workforce analytics dashboard built around exploring workforce data.',
    tags: ['Employee attrition', 'Workforce analytics', 'Dashboard'],
    caseStudy: { media: [] },
  },
  {
    slug: 'smart-traffic',
    title: 'AI-driven Smart Urban Traffic Management System',
    category: 'AI · Urban systems',
    shortDescription: 'An AI-assisted traffic command center that combines congestion classification, short-horizon demand forecasting, adaptive signal planning, traffic simulation, and model-based environmental analysis.',
    tags: ['Python', 'Machine Learning', 'FastAPI', 'Traffic Simulation', 'Environmental Analysis'],
    githubUrl: 'https://github.com/devanshshukla-3004/AI-Urban-Traffic-Command-Center',
    liveUrl: 'https://ai-urban-traffic-command-center.onrender.com/',
    videoUrl: 'https://youtu.be/LpmQ1EvWxpo',
    caseStudy: {
      problem: 'Urban congestion can increase travel delay, vehicle idle time, fuel use, and vehicle-related environmental impact. Static dashboards alone do not show how a traffic prediction can inform a decision or how that decision might perform under controlled conditions.',
      solution: 'An academic decision-support prototype that follows an Observe → Predict → Decide → Simulate → Measure workflow. It turns predicted congestion and demand into bounded signal-timing recommendations, then compares an AI-assisted strategy with a fixed-time baseline in a simulated traffic network.',
      features: [
        'Multi-junction command center for three simulated urban junctions',
        'Random Forest congestion classification with Low, Moderate, and High classes and prediction probabilities',
        'Short-horizon traffic-demand forecasting',
        'Adaptive green-time recommendations constrained to 20–90 seconds with an exact 180-second cycle',
        'Digital-twin-style simulation of arrivals, queues, signal states, vehicle movement, delay, throughput, and idle time',
        'Fixed-time versus AI-assisted strategy comparison under the same simulated conditions',
        'Model-based fuel, CO₂, and PM2.5 estimates derived from simulation outputs',
        'Simulated environmental signals and bounded manual signal overrides',
      ],
      technologies: [
        'Python',
        'scikit-learn',
        'Random Forest Classifier',
        'Pandas',
        'NumPy',
        'FastAPI',
        'Uvicorn',
        'HTML',
        'CSS',
        'Vanilla JavaScript',
        'Joblib',
        'Render',
      ],
      architecture: 'Simulated traffic inputs → feature preparation → Random Forest congestion classifier and demand forecaster → constraint-aware signal optimizer → traffic simulation → environmental estimates → command-center dashboard.',
      implementation: 'The system separates model predictions from signal recommendations. A bounded optimization layer applies the 20–90 second green-phase limits and exact 180-second cycle before recommendations are evaluated in a queue-based simulation. The dashboard presents the prediction, forecast, signal plan, simulation comparison, and environmental interpretation as one workflow.',
      outcomes: 'The repository documents an end-to-end prototype that connects ML prediction to constrained signal planning and simulation-based evaluation. Add measured experiment results here only after confirming them from the project outputs; no real-world congestion reduction or emissions reduction is claimed.',
      notes: 'Academic prototype using synthetic/simulated traffic data. It does not control real traffic signals, connect to municipal infrastructure, or measure real-world emissions. Environmental values are model-based estimates, not direct sensor measurements.',
      media: [
        {
          src: 'https://raw.githubusercontent.com/devanshshukla-3004/AI-Urban-Traffic-Command-Center/main/docs/screenshots/overview.png',
          kind: 'image',
          alt: 'AI Urban Traffic Command Center overview dashboard',
          caption: 'Command Center — the main dashboard for traffic intelligence and signal planning.',
        },
        {
          src: 'https://raw.githubusercontent.com/devanshshukla-3004/AI-Urban-Traffic-Command-Center/main/docs/screenshots/live-city-map.png',
          kind: 'image',
          alt: 'Simulated urban traffic network map',
          caption: 'Live City Network — a visual overview of the simulated junction network.',
        },
        {
          src: 'https://raw.githubusercontent.com/devanshshukla-3004/AI-Urban-Traffic-Command-Center/main/docs/screenshots/environment.png',
          kind: 'image',
          alt: 'Environmental intelligence dashboard for simulated traffic',
          caption: 'Environmental Intelligence — model-based environmental estimates derived from simulation outputs.',
        },
      ],
    },
  },
] satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]['slug'];
