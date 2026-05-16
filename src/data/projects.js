// ============================================================
// PROJECTS REGISTRY
// ============================================================
// To add a new project (e.g., Project 4):
// 1. Create src/data/project4.js (copy an existing one and update)
// 2. Import it below
// 3. Add an entry to the `projects` array
// That's it — routing, navigation, and pages are auto-generated!
// ============================================================

import project1 from './project1';
import project2 from './project2';
import project3 from './project3';
import project4 from './project4'; // ← uncomment when ready

const projects = [
  {
    slug: 'bol-automation',
    data: project1,
  },
  {
    slug: 'voice-agent-healthcare',
    data: project2,
  },
  {
    slug: 'voice-agent-restaurant',
    data: project3,
  },
  { slug: '3d-configurator', data: project4 }, // ← add next project here
];

export default projects;
