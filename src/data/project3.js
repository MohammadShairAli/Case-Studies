// ============================================================
// PROJECT DATA — Project 3: Restaurant Order Taking Voice Agent
// ============================================================

const project3 = {

  meta: {
    title: "Restaurant Voice Agent",
    subtitle: "Case Study · AI-Powered Restaurant Order Taking",
    browserTabTitle: "Case Study | Restaurant Order Taking Voice Agent",
    favicon: "/images/p3/image1.png",
  },

  hero: {
    badge: "Case Study",
    heading: "Restaurant Order Taking Voice Agent",
    subheading: "AI-Powered Order Processing 24/7, Zero Human Involvement",
    description: "The Voice Agent System's Restaurant Order Taking Voice Agent is a fully AI-powered order processing solution built on Google Gemini. Customers place, modify, or cancel food orders through a natural voice call or WhatsApp message anytime, without any human staff involvement at the order-taking stage.",
    bannerImage: "/images/p3/image1.png",
    stats: [
      { value: "<1s",  label: "AI Response Time" },
      { value: "45s",  label: "Avg Order Duration" },
      { value: "24/7", label: "Availability" },
      { value: "97%",  label: "Order Accuracy" },
    ],
  },

  performance: {
    sectionLabel: "Performance Benchmarks",
    heading: "Manual vs AI Agent",
    description: "Deploying the AI Voice Agent in place of a manual order-taking workflow delivers measurable, significant improvements across every key operational dimension.",
    chartImage: "/images/p3/image7.png",
    chartAlt: "Performance benchmarks — manual vs AI voice agent radar chart",
    chart: {
      id: "project3-benchmark",
      alt: "Interactive performance benchmark chart comparing manual restaurant order taking and AI voice agent",
      labels: ["Availability", "Order Speed", "Accuracy", "Error Rate", "Response Time", "Human Workload"],
      series: {
        manual: [
          { label: "Availability", name: "Manual phase", value: 27 },
          { label: "Order Speed", name: "Manual phase", value: 20 },
          { label: "Accuracy", name: "Manual phase", value: 55 },
          { label: "Error Rate", name: "Manual phase", value: 72 },
          { label: "Response Time", name: "Manual phase", value: 29 },
          { label: "Human Workload", name: "Manual phase", value: 88 },
        ],
        ai: [
          { label: "Availability", name: "AI agent phase", value: 99 },
          { label: "Order Speed", name: "AI agent phase", value: 95 },
          { label: "Accuracy", name: "AI agent phase", value: 97 },
          { label: "Error Rate", name: "AI agent phase", value: 8 },
          { label: "Response Time", name: "AI agent phase", value: 92 },
          { label: "Human Workload", name: "AI agent phase", value: 22 },
        ],
      },
      annotations: [
        { type: "manual", title: "Without AI agent", subtitle: "Staff only - high errors", x: 82, y: 330, width: 190 },
        { type: "ai", title: "AI Voice Agent", subtitle: "24/7 - 97% accuracy", x: 900, y: 352, width: 210 },
      ],
    },
    metrics: [
      { before: "4–6 min", after: "~45 sec", label: "Order Time" },
      { before: "~72%",    after: "~97%",    label: "Order Accuracy" },
    ],
  },

  executive: {
    sectionLabel: "Executive Summary",
    heading: "Project Overview",
    description: "This Restaurant Order Taking Voice Agent enables customers to place, modify, or cancel food orders through a natural voice call or WhatsApp message 24/7, without any human staff involvement at the order-taking stage. The system replicates staff decision-making intent recognition, menu validation, confirmation, and kitchen notification at a fraction of the cost.",
    image: "/images/p3/image4.png",
    imageAlt: "Restaurant Voice Agent — System Architecture diagram",
    challenge: {
      heading: "The Challenge",
      subheading: "From Manual to AI-Driven",
      text: "Traditional order-taking at a restaurant relies on human staff answering calls, managing walk-ins, and coordinating with the kitchen. This creates hard limits on throughput, availability, and accuracy all of which the Voice Agent System is designed to eliminate.",
    },
    vision: {
      heading: "The Vision",
      quote: "The vision was to flip the model entirely: from a 4–6 minute phone order handled by a human to a 45-second AI conversation available around the clock, with no per-call labor cost, no missed orders, and zero entry errors reaching the kitchen.",
      image: "/images/p3/image6.png",
      imageAlt: "From Manual to AI-Driven Ordering — challenge comparison diagram",
    },
  },

  phases: [
    {
      number: "01",
      label: "Phase 1",
      title: "Customer Interaction & Voice Capture",
      description: "The pipeline begins the moment a customer makes contact. The AI System supports two parallel entry points, both routing into the same NLU pipeline for consistent processing.",
      image: "/images/p3/image8.png",
      imageAlt: "Phase 1 — Customer interaction and voice capture flow diagram",
      bullets: [
        { icon: "🎙️", bold: "Voice Call:", text: "The customer speaks directly to the AI agent via a web or mobile interface. Audio is captured in real time and transcribed by the Speech Recognition module with industry-leading accuracy." },
        { icon: "💬", bold: "WhatsApp Agent:", text: "The customer types their order or sends a voice note via WhatsApp. The message is processed through the same Gemini NLU pipeline, maintaining full feature parity with voice calls." },
        { icon: "🌍", bold: "Language Detection:", text: "Once input is received, the Language Detection module identifies the customer's preferred language, enabling natural, culturally appropriate responses throughout the ordering conversation." },
      ],
    },
    {
      number: "02",
      label: "Phase 2",
      title: "Intent Classification & Entity Recognition",
      description: "The transcribed input is processed by Google Gemini, which classifies the customer's intent into one of four tracks and simultaneously extracts all required order entities for downstream processing.",
      image: "/images/p3/image9.png",
      imageAlt: "Phase 2 — Intent classification and entity recognition flow diagram",
      bullets: [
        { icon: "🍽️", bold: "Place Order:", text: "A new order request. Gemini extracts menu item names, quantities, customizations (e.g., no onions, extra sauce), delivery or pickup preference, and desired time." },
        { icon: "🔄", bold: "Modify / Cancel:", text: "Changes to an existing order such as adding items, removing items, or updating delivery details. The existing order record is retrieved and updated in place. Full cancellations trigger appropriate kitchen and delivery notifications." },
        { icon: "❓", bold: "General Inquiry:", text: "Questions about the menu, pricing, opening hours, allergens, or restaurant policies. Answered conversationally from the restaurant's knowledge base without entering the order pipeline." },
      ],
    },
    {
      number: "03",
      label: "Phase 3",
      title: "Menu Validation & Kitchen Availability Check",
      description: "The confirmed order is validated against the live Menu & Availability Database. Restaurant operators define menu availability per service period, with independently configurable items, pricing, and kitchen capacity limits.",
      image: "/images/p3/image10.png",
      imageAlt: "Phase 3 — Menu validation and kitchen availability check flow diagram",
      bullets: [
        { icon: "✅", bold: "Items Available:", text: "The agent confirms the exact items, quantities, and total price with the customer, then proceeds to create the order record and dispatch it to the kitchen." },
        { icon: "🔁", bold: "Items Unavailable:", text: "The agent proactively informs the customer of sold-out or temporarily unavailable items and suggests the closest available alternatives, then loops back for customer selection." },
        { icon: "⏱️", bold: "High Demand / Capacity:", text: "During peak periods, the agent provides estimated wait times and offers customers the option to pre-schedule their order for a later pickup or delivery window." },
      ],
    },
    {
      number: "04",
      label: "Phase 4",
      title: "Order Confirmation & Multi-Channel Notification",
      description: "Once an order is confirmed and stored, the agent triggers a multi-way notification cascade ensuring the customer, kitchen, and restaurant management all receive immediate, accurate confirmation.",
      image: "/images/p3/image11.png",
      imageAlt: "Phase 4 — Order confirmation and multi-channel notification flow diagram",
      bullets: [
        { icon: "🔊", bold: "Voice Readback:", text: "The agent reads the complete order summary back to the customer before ending the call including all items, customizations, total price, and estimated delivery/pickup time." },
        { icon: "📱", bold: "WhatsApp Confirmation:", text: "A structured order confirmation message, including an itemized receipt and order reference number, is sent to the customer's WhatsApp number for their records." },
        { icon: "🍳", bold: "Kitchen Ticket:", text: "The order is instantly dispatched to the kitchen display system or POS integration, complete with all customizations, timestamps, and special instructions." },
        { icon: "📊", bold: "Dashboard Update:", text: "The order is instantly recorded in the Order Management Hub under the Orders tab, complete with customer details, order items, and booking timestamp." },
      ],
    },
    {
      number: "05",
      label: "Phase 5",
      title: "Dashboard Analytics & Revenue Tracking",
      description: "Every completed AI interaction is automatically logged in the Order Management Hub with full traceability no manual entry required. The analytics suite provides restaurant operators with real-time and historical intelligence across all key performance indicators.",
      image: "/images/p3/image12.png",
      imageAlt: "Phase 5 — Dashboard analytics and revenue tracking flow diagram",
      bullets: [
        { icon: "📞", bold: "Order Insights:", text: "Source channel, Conversation ID, Agent name, Call Duration, Date & Time, Estimated AI cost, and a full transcript log for quality review and training." },
        { icon: "💰", bold: "Revenue Tracking:", text: "Real-time revenue dashboard with daily, weekly, and monthly breakdowns. Tracks gross revenue, average order value, and revenue per channel." },
        { icon: "📈", bold: "Popular Menu Items:", text: "Ranked list of most-ordered items, most-requested customizations, and most-declined items enabling data-driven menu optimization." },
        { icon: "🕐", bold: "Peak Ordering Hours:", text: "Hourly heatmap showing order volume throughout the day and week, enabling smarter staffing, kitchen prep, and promotional timing." },
        { icon: "💵", bold: "AI Cost Analysis:", text: "7-day Gemini token utilization chart providing complete visibility into AI operational costs relative to order volume and revenue generated." },
        { icon: "📤", bold: "CSV Export:", text: "All order and call data exportable for restaurant reporting, POS integration, accounting, or third-party analytics platforms." },
      ],
    },
  ],

  techStack: {
    sectionLabel: "Technology",
    heading: "Tech Stack",
    image: "/images/p3/image13.png",
    imageAlt: "Full technology stack diagram",
    items: [
      { name: "Google Gemini",               category: "AI / LLM Core",                  icon: "googlegemini" },
      { name: "Speech Recognition",          category: "Voice-to-Text (Real-time ASR)",  icon: "googlechrome" },
      { name: "Text-to-Speech",              category: "Voice Synthesis (6 Personas)",   icon: "googlegemini" },
      { name: "WhatsApp Agent",              category: "Messaging Channel",              icon: "whatsapp" },
      { name: "Next.js (React)",             category: "Frontend Framework",             icon: "nextdotjs" },
      { name: "Order Management Hub",        category: "Admin Dashboard",               icon: "google" },
      { name: "Live Menu & Availability",    category: "Order Engine",                   icon: "databricks" },
      { name: "Order DB + Call Logs",        category: "Data Storage",                   icon: "postgresql" },
      { name: "Per-session Gemini Cost",     category: "Cost Tracking",                 icon: "googlecloud" },
      { name: "Multi-language NLU",          category: "Language Detection",            icon: "googlecloud" },
      { name: "REST API / Webhooks",         category: "System Integration",            icon: "fastapi" },
      { name: "Global Cloud Infrastructure", category: "Deployment",                    icon: "googlecloud" },
    ],
  },

  // ── ROI section (Project 3 specific) ─────────────────────
  roi: {
    sectionLabel: "Return on Investment",
    heading: "ROI Summary",
    quote: "For a restaurant handling 80–120 orders per day, the AI Voice Agent System typically achieves full ROI within 60–90 days of deployment, with ongoing savings compounding as order volume grows.",
    drivers: [
      { driver: "Labor Cost Reduction",       impact: "~$1,200–$3,500/month", notes: "Replaces 1–2 FTE order-taking roles per location" },
      { driver: "Order Accuracy Improvement", impact: "+35% accuracy",         notes: "Reduces remakes, refunds, and customer complaints" },
      { driver: "Average Order Value Lift",   impact: "+15–25% AOV",           notes: "AI upsell prompts for sides, drinks, and upgrades" },
      { driver: "After-Hours Revenue",        impact: "New revenue stream",    notes: "Captures pre-orders and late-night delivery demand" },
      { driver: "Peak Hour Capacity",         impact: "Unlimited scale",       notes: "No revenue lost to missed calls during rush periods" },
      { driver: "Analytics Value",            impact: "Operational intelligence", notes: "Data-driven menu and staffing decisions" },
    ],
  },
};

export default project3;
