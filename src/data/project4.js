// ============================================================
// PROJECT DATA — Project 4: BMW X7 3D Configurator
// ============================================================

const project4 = {

  meta: {
    title: "BMW X7 3D Configurator",
    subtitle: "Case Study · Interactive 3D Customisation & AR Platform",
    browserTabTitle: "Case Study | BMW X7 3D Configurator",
    favicon: "/images/p4/image1.png",
  },

  hero: {
    badge: "Case Study",
    heading: "BMW X7 3D Configurator",
    subheading: "Interactive Customisation & AR Platform",
    description: "The BMW X7 3D Configurator is a fully browser-based interactive product experience built on Three.js and WebGL. Customers configure a photorealistic 3D model of the BMW X7 in real time switching body colours, wheel styles, and seat materials then visualise their personalised build in Augmented Reality directly from their browser, with no app download required.",
    bannerImage: "/images/p4/image1.png",
    stats: [
      { value: "<1s",    label: "Render Latency" },
      { value: "9",      label: "Car Models" },
      { value: "4",      label: "Body Colours" },
      { value: "4",      label: "Seat Options" },
      { value: "AR",     label: "View in Space" },
    ],
  },

  performance: {
    sectionLabel: "Performance Benchmarks",
    heading: "Static Catalogue vs 3D Configurator",
    description: "Deploying the interactive 3D Configurator in place of a static image catalogue delivered measurable, significant improvements across every key customer engagement and conversion metric.",
    chartImage: "/images/p4/image12.png",
    chartAlt: "Performance comparison chart — Before vs After 3D Configurator launch",
    chart: {
      id: "project4-benchmark",
      alt: "Interactive performance benchmark chart comparing static catalogue and BMW X7 3D Configurator",
      labels: ["Customer Engagement", "Config Accuracy", "Conversion Rate", "Return Visits", "Sales Cycle", "Satisfaction Score"],
      series: {
        before: [
          { label: "Customer Engagement", name: "Static catalogue", value: 27 },
          { label: "Config Accuracy",     name: "Static catalogue", value: 34 },
          { label: "Conversion Rate",     name: "Static catalogue", value: 21 },
          { label: "Return Visits",       name: "Static catalogue", value: 29 },
          { label: "Sales Cycle",         name: "Static catalogue", value: 20 },
          { label: "Satisfaction Score",  name: "Static catalogue", value: 39 },
        ],
        after: [
          { label: "Customer Engagement", name: "3D Configurator", value: 94 },
          { label: "Config Accuracy",     name: "3D Configurator", value: 97 },
          { label: "Conversion Rate",     name: "3D Configurator", value: 74 },
          { label: "Return Visits",       name: "3D Configurator", value: 87 },
          { label: "Sales Cycle",         name: "3D Configurator", value: 85 },
          { label: "Satisfaction Score",  name: "3D Configurator", value: 93 },
        ],
      },
      annotations: [
        { type: "before", title: "Static catalogue", subtitle: "Low engagement", x: 82, y: 330, width: 190 },
        { type: "after",  title: "3D Configurator",  subtitle: "94% satisfaction score", x: 900, y: 352, width: 230 },
      ],
    },
    metrics: [
      { before: "~1.2 min",  after: "~7.5 min",  label: "Session Duration" },
      { before: "~8%",       after: "~31%",       label: "Online Conversion Rate" },
      { before: "~3.2 wks",  after: "~1.4 wks",  label: "Sales Cycle Length" },
      { before: "~55%",      after: "~94%",       label: "Customer Satisfaction" },
    ],
  },

  executive: {
    sectionLabel: "Executive Summary",
    heading: "Project Overview",
    description: "The BMW X7 3D Configurator is a web-based interactive product experience commissioned to bring the vehicle customisation journey entirely online. Rather than replicating the showroom visit digitally, the platform creates a new kind of engagement allowing customers to explore every configuration variant of the BMW X7 from any device, in any location, in real time. The platform supports 9 car models, 4 body colours, 2 wheel designs, and 4 interior seat options, with full AR placement via Web AR and QR-code entry points.",
    image: "/images/p4/image9.png",
    imageAlt: "3D Configurator — System Architecture 4-Layer Overview",
    challenge: {
      heading: "The Challenge",
      subheading: "From Static Images to Interactive 3D",
      text: "The automotive retail industry has historically relied on physical showrooms and static photography to communicate the full range of vehicle customisation options. This creates a significant gap: customers cannot experience their exact specification before visiting a dealership, resulting in long decision cycles, high showroom drop-off rates, and missed online conversion opportunities. Approximately 60% of configured vehicle leads dropped off before completing a purchase enquiry, attributed to lack of visual confidence.",
    },
    vision: {
      heading: "The Vision",
      quote: "The goal was to move beyond static product photography and deliver a spatial, interactive experience where a customer can configure their exact BMW X7 specification and place a life-size AR model in their own environment before making a purchase decision.",
      image: "/images/p4/image11.png",
      imageAlt: "From Static Images to Interactive 3D — challenge comparison diagram",
    },
  },

  // ── PLATFORM OVERVIEW ────────────────────────────────────
  platform: {
    sectionLabel: "Platform Overview",
    heading: "Configuration Options & Architecture",
    description: "The configurator surfaces five independently switchable configuration dimensions — body colour, wheel style, seat material, door animation, and render resolution — all managed by a central Variant Manager and synchronised in real time across the 3D scene and UI panel via Zustand global state.",
    configOptionsImage: "/images/p4/image3.png",
    configOptionsImageAlt: "Available Configuration Options — 5 options distribution chart",
    performanceMetricsImage: "/images/p4/image2.png",
    performanceMetricsImageAlt: "Performance metrics — <1s render, 360°, High/Low, AR Ready",
    architectureImage: "/images/p4/image10.png",
    architectureImageAlt: "Detailed 4-Layer Data Flow Diagram",
    config: {
      projectName: "BMW X7 Interactive 3D Configurator",
      modelScope: "9 car models supported in the platform gallery",
      bodyColours: "4 variants: Alpine White, Blue, Manhattan Grey, Graphite Gray",
      wheelStyles: "754M & 863M premium alloy — switchable in real time",
      seatOptions: "Red leather, Skin leather, White leather, Black leather",
      renderModes: "High Resolution (desktop) and Low Resolution (mobile optimised)",
      arChannel: '"View in Space" Web AR via 8th Wall, QR code for mobile AR',
      animation: "All four doors + bonnet open/close with smooth tween animation",
    },
    capabilities: [
      { icon: "🖥️",  bold: "Real-time 3D rendering:",   text: "Full PBR (Physically Based Rendering) materials with dynamic lighting and environment maps." },
      { icon: "🔄",  bold: "360° orbit controls:",       text: "Click-drag rotation, scroll-to-zoom, and touch-gesture support on all devices." },
      { icon: "⚡",  bold: "Instant variant switching:", text: "Body colour, wheel, and seat swaps applied in under one second with no page reload." },
      { icon: "🚪",  bold: "Door & bonnet animation:",   text: "Smooth GSAP-driven open/close animations revealing the full interior view." },
      { icon: "📱",  bold: "Web AR placement:",          text: 'Full-scale BMW X7 placed in the user\'s real environment via 8th Wall WebAR.' },
      { icon: "📷",  bold: "QR code AR entry:",          text: "Scan-to-AR functionality for quick mobile handoff from desktop sessions." },
    ],
    layers: [
      {
        number: "1",
        title: "Client / Browser",
        text: "The user accesses the configurator via a desktop or mobile browser — no plugin, extension, or app download required. The Three.js WebGL renderer initialises on page load, detecting device capability to serve either the high-resolution or low-resolution render pipeline automatically.",
      },
      {
        number: "2",
        title: "3D Render Layer",
        text: "The Three.js scene is composed of a GLTF loader for the BMW X7 model asset, a camera rig with OrbitControls, and a PBR lighting environment. The scene graph holds all mesh references that the Configuration Engine will manipulate on user interaction.",
      },
      {
        number: "3",
        title: "Configuration Engine",
        text: "The Variant Manager is the core of the platform. On each user selection, it traverses the Three.js scene graph, identifies the target mesh group (body panels, wheel rims, seat surfaces), and applies the new material or initiates the animation tween. State is maintained globally via Zustand so the UI panel and the 3D scene remain perfectly in sync.",
      },
      {
        number: "4",
        title: "AR & Output",
        text: 'Once the user finalises their configuration, they can launch the AR experience via "View in Space" (8th Wall WebAR) or scan the auto-generated QR code on mobile. The AR session loads the currently configured model variant at 1:1 real-world scale for spatial placement.',
      },
    ],
  },

  // ── PLATFORM SCREENSHOTS ─────────────────────────────────
  screenshots: [
    {
      title: "Exterior View — Alpine White with Customise Panel",
      image: "/images/p4/image4.png",
      imageAlt: "Screenshot 1 — BMW X7 Exterior Front View, Alpine White",
      description: "The default landing state of the configurator. The user sees the BMW X7 from the front in Alpine White with the customise panel on the left offering Body, Wheels, and Seats options. The right panel displays the model name, price, and a QR code for AR viewing.",
    },
    {
      title: "Interior View — Doors Open (White Exterior)",
      image: "/images/p4/image5.png",
      imageAlt: "Screenshot 2 — Doors Open Aerial View",
      description: "Triggered by the door-open animation, this aerial-angle view reveals the full interior layout with all four doors and the bonnet open simultaneously. The Three.js animation controller smoothly tweens each component independently, revealing seats, dashboard, and cabin space.",
    },
    {
      title: "Colour Variant — Manhattan Blue with Open Doors",
      image: "/images/p4/image6.png",
      imageAlt: "Screenshot 3 — BMW X7 in Manhattan Blue, Doors Open",
      description: "Demonstrating the real-time colour switching capability. The user has selected Manhattan Blue from the body colour panel. The material swap is applied across the entire vehicle mesh in under one second using Three.js mesh traversal, with the door animation retained from the previous state.",
    },
    {
      title: "Interior Camera — Red Leather Seats",
      image: "/images/p4/image7.png",
      imageAlt: "Screenshot 4 — Interior Camera, Red Leather Seats",
      description: "The camera orbits into the cabin for a first-person interior perspective. The red leather seat configuration is shown with the full dashboard and BMW iDrive system visible. Seat material swaps apply to all individual seat meshes simultaneously via the Variant Manager.",
    },
    {
      title: "Side Profile — Manhattan Blue, Door Open, Red Interior",
      image: "/images/p4/image8.png",
      imageAlt: "Screenshot 5 — Side Profile, Blue Exterior, Red Interior, Door Open",
      description: "A combined configuration state: Manhattan Blue exterior with red leather seats and the driver's door open, showing the contrast between the exterior finish and interior trim. This view is reachable via free orbit control and demonstrates the depth of the customisation cross-section.",
    },
  ],

  // ── PHASES ───────────────────────────────────────────────
  phases: [
    {
      number: "01",
      label: "Phase 1",
      title: "3D Model Setup & Scene Initialisation",
      description: "The foundation phase covers the ingestion of the BMW X7 GLTF model, scene configuration, and adaptive resolution selection. This is the technical groundwork that every subsequent phase depends upon.",
      image: "/images/p4/image13.png",
      imageAlt: "Phase 1 — 3D Model Setup & Scene Initialisation flow diagram",
      bullets: [
        { icon: "📦", bold: "GLTF Model Preparation:", text: "The BMW X7 3D asset was delivered in GLTF/GLB format, pre-optimised with Draco mesh compression reducing file size by up to 90% versus raw geometry." },
        { icon: "📱", bold: "Adaptive Resolution:", text: "On load, the platform detects device capability and GPU performance. Desktop users receive the full high-resolution PBR pipeline; mobile devices are served an optimised low-polygon version maintaining visual fidelity." },
        { icon: "🌐", bold: "Scene Composition:", text: "Three.js initialises the WebGL context, sets up the HDR environment map for physically accurate reflections, configures the directional and ambient lighting rig, and attaches OrbitControls to the camera." },
        { icon: "🏷️", bold: "Model Naming Convention:", text: "Every mesh within the GLTF hierarchy was named to a defined convention (e.g. body_panel_left, rim_front_left) allowing the Variant Manager in Phase 2 to address meshes reliably by name." },
      ],
    },
    {
      number: "02",
      label: "Phase 2",
      title: "User Interaction & Variant Selection",
      description: "Phase 2 is the live configuration loop. Every time a user selects a colour, wheel, or seat option from the left-hand customise panel, the Variant Manager processes the selection and updates the 3D scene in real time.",
      image: "/images/p4/image14.png",
      imageAlt: "Phase 2 — User Interaction & Variant Selection flow diagram",
      bullets: [
        { icon: "🎨", bold: "Body Colour Swap:", text: "Alpine White, Manhattan Blue, Manhattan Grey, and Graphite Gray. Each colour swap traverses the scene graph and replaces the PBR material on all body panel meshes simultaneously, with specular and roughness values adjusted per colour." },
        { icon: "🔩", bold: "Wheel Style Swap:", text: "754M and 863M alloy styles. Rim meshes are swapped by replacing the geometry and material reference, maintaining the brake caliper and tyre as shared components." },
        { icon: "🪑", bold: "Seat Material Swap:", text: "Red leather, Skin leather, White leather, and Black leather. Each swap updates UV-mapped texture sets across all seat surfaces — front driver, front passenger, and both rear rows." },
        { icon: "🔁", bold: "State Synchronisation:", text: "The Zustand global state store ensures the UI panel always reflects the active configuration, enabling configuration sharing and session restore." },
      ],
    },
    {
      number: "03",
      label: "Phase 3",
      title: "Door & Bonnet Animation System",
      description: "Phase 3 covers the animation subsystem that enables the exploded interior view one of the most visually impactful features of the configurator, allowing customers to inspect the cabin, dashboard, and seating layout in full detail.",
      image: "/images/p4/image15.png",
      imageAlt: "Phase 3 — Door & Bonnet Animation System flow diagram",
      bullets: [
        { icon: "🚪", bold: "Individual Door Control:", text: "Each of the four doors and the bonnet is independently animatable. The user triggers the open/close action via toolbar icon buttons on the right side of the viewport." },
        { icon: "⚙️", bold: "GSAP Tween Engine:", text: "All animations use GSAP (GreenSock Animation Platform) integrated with the Three.js render loop. Each component rotates along its real-world hinge axis, producing a mechanically accurate, smooth open/close motion." },
        { icon: "👁️", bold: "Interior Reveal:", text: "When any door or the bonnet is opened, the camera can freely orbit inside the vehicle to inspect the interior, providing a depth of exploration impossible with static photography." },
        { icon: "🔄", bold: "State Toggle:", text: "The animation controller tracks open/closed state per component. Clicking an already-open door smoothly reverses the animation sequence rather than resetting position." },
      ],
    },
    {
      number: "04",
      label: "Phase 4",
      title: "AR Placement & View in Space",
      description: 'Phase 4 extends the configurator experience into the physical world via Augmented Reality. The "View in Space" button launches a full-scale AR session with the current vehicle configuration loaded, enabling the customer to place a life-size BMW X7 in their real environment.',
      image: "/images/p4/image16.png",
      imageAlt: "Phase 4 — AR Placement & View in Space flow diagram",
      bullets: [
        { icon: "🌍", bold: "Web AR via 8th Wall:", text: "8th Wall's WebAR SDK provides world-tracking AR entirely within the mobile browser, requiring no application install. The BMW X7 model is placed on detected horizontal surfaces and can be repositioned freely." },
        { icon: "📷", bold: "QR Code Handoff:", text: "Desktop users generate a session-specific QR code encoding their current configuration. Scanning this code on a mobile device opens the AR session pre-loaded with the exact same variant selection." },
        { icon: "🔄", bold: "AR.js Fallback:", text: "For devices not supported by 8th Wall, an AR.js marker-based fallback is provided, ensuring broad device compatibility across the full range of iOS and Android hardware." },
        { icon: "📐", bold: "1:1 Real-World Scale:", text: "The AR model is placed at true vehicle dimensions (5.15m length), giving customers a genuine sense of the vehicle's physical presence in their environment driveway, garage, or showroom floor." },
      ],
    },
    {
      number: "05",
      label: "Phase 5",
      title: "Analytics, Performance & Delivery",
      description: "Phase 5 covers the analytics instrumentation, performance monitoring, and client delivery pipeline that wrap the live platform, providing ongoing insight into user behaviour and technical health.",
      image: "/images/p4/image17.png",
      imageAlt: "Phase 5 — Analytics, Performance & Delivery flow diagram",
      bullets: [
        { icon: "📊", bold: "Configuration Analytics:", text: "Every variant selection event is logged with a timestamp and session ID. This produces a ranked dataset of most-popular colours, wheel preferences, and seat choices valuable data for inventory and marketing decisions." },
        { icon: "🖥️", bold: "Render Performance Monitoring:", text: "Frame rate (FPS), asset load time, and GPU memory usage are tracked per session. Any session falling below a 30 FPS threshold on desktop triggers an automatic switch to the low-resolution pipeline." },
        { icon: "📱", bold: "AR Session Tracking:", text: "AR placement duration, model repositioning count, and QR scan volume are captured per session, providing insight into spatial engagement depth." },
        { icon: "📈", bold: "Performance Report Delivery:", text: "A weekly automated report is delivered to the client dashboard, covering engagement KPIs, most-used configurations, AR usage rates, and technical health indicators." },
      ],
    },
  ],

  // ── TECH STACK ───────────────────────────────────────────
  techStack: {
    sectionLabel: "Technology",
    heading: "Tech Stack",
    image: "/images/p4/image18.png",
    imageAlt: "Technology Stack — Full Component Overview",
    items: [
      { name: "Three.js (WebGL)",        category: "3D Core",          icon: "threedotjs" },
      { name: "GLTF / GLB Assets",       category: "Asset Pipeline",   icon: "threedotjs" },
      { name: "GSAP + Three.js Tweens",  category: "Animation",        icon: "greensock" },
      { name: "8th Wall (WebAR)",        category: "AR Layer",         icon: "googlechrome" },
      { name: "AR.js (Marker-based)",    category: "AR Fallback",      icon: "googlechrome" },
      { name: "React + Vite",            category: "UI Framework",     icon: "react" },
      { name: "Zustand / Context API",   category: "State Management", icon: "react" },
      { name: "Draco Compression",       category: "Optimisation",     icon: "google" },
      { name: "Tailwind CSS",            category: "Styling",          icon: "tailwindcss" },
      { name: "qrcode.js",              category: "QR Generation",    icon: "qrcode" },
      { name: "Vercel / Netlify CDN",    category: "Hosting",          icon: "vercel" },
      { name: "WebGL / PBR Shaders",     category: "Render Pipeline",  icon: "threedotjs" },
    ],
  },

  // ── ROI ──────────────────────────────────────────────────
  roi: {
    sectionLabel: "Return on Investment",
    heading: "ROI Summary",
    quote: "The 3D Configurator transforms a traditionally high-friction, showroom-dependent purchase journey into a confident, self-directed online experience compressing the decision cycle while measurably increasing the quality of leads reaching the sales team.",
    drivers: [
      { driver: "Conversion Rate Lift",   impact: "+287% online conversion",  notes: "From 8% to 31% of configured sessions completing enquiry" },
      { driver: "Sales Cycle Reduction",  impact: "56% shorter cycle",        notes: "From 3.2 weeks to 1.4 weeks average fewer showroom visits required" },
      { driver: "Engagement Depth",       impact: "+525% time on page",       notes: "From 1.2 min to 7.5 min average session duration" },
      { driver: "Showroom Cost Offset",   impact: "Measurable reduction",     notes: "More customers arrive already decided on specification" },
      { driver: "AR Adoption",            impact: "38% of sessions",          notes: "New spatial channel with zero incremental hosting cost" },
      { driver: "Mobile Revenue Channel", impact: "+144% mobile usage",       notes: "Platform fully serves mobile customers previously lost to static catalogue" },
    ],
  },

  // ── PERFORMANCE TABLE ────────────────────────────────────
  performanceTable: {
    sectionLabel: "Impact Metrics",
    heading: "Before vs After",
    rows: [
      { metric: "Customer Engagement Time",  before: "~1.2 min avg",   after: "~7.5 min avg",   improvement: "+525% time on page" },
      { metric: "Configuration Accuracy",    before: "N/A (showroom)", after: "97% match rate",  improvement: "+97% self-serve accuracy" },
      { metric: "Online Conversion Rate",    before: "~8%",            after: "~31%",            improvement: "+287% conversion lift" },
      { metric: "Return Visit Rate",         before: "~20%",           after: "~68%",            improvement: "+240% return visits" },
      { metric: "Sales Cycle Length",        before: "~3.2 weeks",     after: "~1.4 weeks",      improvement: "56% shorter cycle" },
      { metric: "Customer Satisfaction",     before: "~55% (survey)",  after: "~94% (survey)",   improvement: "+71% satisfaction score" },
      { metric: "AR Session Rate",           before: "N/A",            after: "38% of sessions", improvement: "New channel opened" },
      { metric: "Mobile Usage",              before: "~25%",           after: "~61%",            improvement: "+144% mobile engagement" },
    ],
  },

};

export default project4;