// ============================================================
// PROJECT DATA — Project 1: BlenSpark Automation
// ============================================================
// To add a new project:
// 1. Duplicate this file (e.g., project4.js)
// 2. Update all values below
// 3. Register the new project in src/data/projects.js
// ============================================================

const project1 = {

  // ── META ──────────────────────────────────────────────────
  meta: {
    title: "Bol Automation",
    subtitle: "Case Study · AI-Driven E-Commerce Automation",
    browserTabTitle: "Case Study | Bol.com Automation Pipeline",
    favicon: "/images/image1.png",
  },

  // ── HERO SECTION ─────────────────────────────────────────
  hero: {
    badge: "Case Study",
    heading: "Bol.com Automation Pipeline",
    subheading: "From Manual to AI-Driven: A 2,000% Throughput Revolution",
    description: "By shifting from serial manual entry to parallel processing and multi-threading, this pipeline achieves massive efficiency gains for Dutch e-commerce operations.",
    bannerImage: "/images/image1.png",
    stats: [
      { value: "2,000%", label: "Capacity Increase" },
      { value: "250+",   label: "Products / Hour" },
      { value: ">20s",   label: "Per Product" },
      { value: "6",      label: "Automated Phases" },
    ],
  },

  // ── PERFORMANCE SECTION ───────────────────────────────────
  performance: {
    sectionLabel: "Performance Benchmarks",
    heading: "Benchmark Results",
    description: "By shifting from serial manual entry to parallel processing and multi-threading, the pipeline achieves massive efficiency gains. The automation pipeline enhances operational efficiency by replacing slow, manual entry with high speed concurrent processing. While a human operator typically spends 4 to 5 minutes per product, this system completes the entire lifecycle in just less than 20 seconds.",
    chartImage: "/images/image.png",
    chartAlt: "Performance benchmark chart comparing manual vs automated pipeline",
    chart: {
      id: "project1-benchmark",
      alt: "Interactive performance benchmark chart comparing manual phase and AI agent phase",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: {
        manual: [
          { label: "Jan", name: "Manual phase", value: 12 },
          { label: "Feb", name: "Manual phase", value: 11 },
          { label: "Mar", name: "Manual phase", value: 13 },
          { label: "Apr", name: "Manual phase", value: 11 },
          { label: "May", name: "Manual phase", value: 12 },
          { label: "Jun", name: "Manual phase", value: 13 },
          { label: "Jul", name: "Manual phase", value: 13 },
          { label: "Aug", name: "Manual phase", value: 13 },
          { label: "Sep", name: "Manual phase", value: 13 },
          { label: "Oct", name: "Manual phase", value: 13 },
          { label: "Nov", name: "Manual phase", value: 13 },
          { label: "Dec", name: "Manual phase", value: 13 },
        ],
        ai: [
          { label: "Jan", name: "AI agent phase", value: 12 },
          { label: "Feb", name: "AI agent phase", value: 11 },
          { label: "Mar", name: "AI agent phase", value: 13 },
          { label: "Apr", name: "AI agent phase", value: 11 },
          { label: "May", name: "AI agent phase", value: 12 },
          { label: "Jun", name: "AI agent phase", value: 13 },
          { label: "Jul", name: "AI agent phase", value: 42 },
          { label: "Aug", name: "AI agent phase", value: 68 },
          { label: "Sep", name: "AI agent phase", value: 82 },
          { label: "Oct", name: "AI agent phase", value: 90 },
          { label: "Nov", name: "AI agent phase", value: 95 },
          { label: "Dec", name: "AI agent phase", value: 98 },
        ],
      },
      annotations: [
        { type: "manual", title: "Manual bottleneck", subtitle: "~12% avg performance", x: 112, y: 118, width: 260 },
        { type: "ai", title: "AI agent active", subtitle: "98% peak performance", x: 610, y: 118, width: 250 },
      ],
    },
    metrics: [
      { before: "4–5 min", after: "15–20 sec", label: "Time Per Product" },
      { before: "12/hr",   after: "250+/hr",   label: "Products Per Hour" },
    ],
  },

  // ── EXECUTIVE OVERVIEW ────────────────────────────────────
  executive: {
    sectionLabel: "Executive Overview",
    heading: "Project Overview",
    description: "The objective was to transition a Dutch e-commerce operation from a manual, error-prone listing process to a fully autonomous, high-throughput pipeline. By integrating advanced AI models and parallel processing, the system replicates human decision-making product selection, brand safety, content rewriting, and category mapping at a fraction of the original time.",
    image: "/images/image3.png",
    imageAlt: "System architecture overview",
    challenge: {
      heading: "The Scalability Challenge",
      subheading: "From Manual to AI-Driven",
      text: "Our primary objective was to eliminate the operational bottleneck of manual data processing. By transitioning from a human dependent workflow to a full AI-driven automation suite, the goal was a 25× increase in throughput without sacrificing editorial quality of product listings.",
    },
    vision: {
      heading: "The Vision",
      quote: "The goal was to flip the workflow entirely: shifting from a 5-minute manual cycle per product to an automated system capable of handling 20 products in that same window effectively reaching a high velocity output of 250 products per hour while maintaining elite content integrity.",
      image: "/images/image4.png",
      imageAlt: "Vision and goal illustration",
    },
  },

  // ── PHASES ────────────────────────────────────────────────
  phases: [
    {
      number: "01",
      label: "Phase 1",
      title: "High-Velocity Data Extraction And Sourcing",
      description: "The system initiates by retrieving rich product data from Amazon. To ensure maximum uptime and data integrity, a dual-layer approach is utilized.",
      image: "/images/image5.png",
      imageAlt: "Data extraction flow diagram",
      bullets: [
        { icon: "⚡", bold: "Primary Source:", text: "Connectivity via the Amazon Product Advertising API (PA API) provides structured access to ASINs, titles, descriptions, and high-resolution image URLs." },
        { icon: "🔄", bold: "Scraping Fallback:", text: "For fields not exposed by the API, a specialized scraper using aiohttp and BeautifulSoup executes parallel requests." },
        { icon: "🛡️", bold: "Resilience:", text: "The fallback layer employs proxy and user-agent rotation to maintain high throughput without triggering rate limits." },
      ],
    },
    {
      number: "02",
      label: "Phase 2",
      title: "Intellectual Property And Redundancy Filtering",
      description: "Before any processing occurs, the system enforces a strict \"Brand-Free\" and \"No-Duplicate\" policy to eliminate legal risks and wasted resources.",
      image: "/images/image6.png",
      imageAlt: "IP and redundancy filtering diagram",
      bullets: [
        { icon: "⚖️", bold: "Trademark Verification:", text: "Every brand name is cross-referenced against the EUIPO TMview and BOIP APIs. Any product associated with an active trademark is automatically purged from the run." },
        { icon: "🚫", bold: "Blacklist Check:", text: "A local database or CSV tracks \"Blacklisted\" keywords or brands that the operator chooses to avoid for strategic reasons." },
        { icon: "🔍", bold: "EAN Deduplication:", text: "The system checks the CSV log to ensure the product (linked via Amazon ASIN) has not already been assigned an EAN or uploaded in a previous session." },
      ],
    },
    {
      number: "03",
      label: "Phase 3",
      title: "AI-Driven Content Transformation",
      description: "Once a product is cleared, it undergoes a linguistic and structural overhaul to meet Bol.com's standards.",
      image: "/images/image7.png",
      imageAlt: "AI content transformation diagram",
      bullets: [
        { icon: "🤖", bold: "Contextual Rewriting:", text: "OpenAI GPT-4 models handle a four-part task in a single batch pass: stripping brand names, translating/rewriting titles to under 200 characters in Dutch, and generating SEO-optimized HTML descriptions." },
        { icon: "🔬", bold: "Deep Attribute Extraction:", text: "Google Gemini is utilized to parse raw Amazon specifications and extract specific product attributes (e.g., material, color, dimensions) that are required for Bol's validation." },
      ],
    },
    {
      number: "04",
      label: "Phase 4",
      title: "Dynamic Media And Asset Management",
      description: "Visual content is processed to be unique and compliant with Bol's marketplace requirements.",
      image: "/images/image8.png",
      imageAlt: "Media and asset management diagram",
      bullets: [
        { icon: "🖼️", bold: "Image Transformation:", text: "The system downloads images from the Amazon URLs, performs a horizontal flip (to differentiate the listing), and uploads the new assets to Cloudinary." },
        { icon: "☁️", bold: "Cloud Synchronization:", text: "These Cloudinary URLs are then used for the Bol upload. Once the upload is confirmed, the system performs an automated cleanup of the cloud storage to manage costs and clutter." },
      ],
    },
    {
      number: "05",
      label: "Phase 5",
      title: "Semantic Category And Attribute Mapping",
      description: "To ensure products land in the correct Bol storefront, the system uses a sophisticated semantic search layer.",
      image: "/images/image9.png",
      imageAlt: "Semantic category mapping diagram",
      bullets: [
        { icon: "🧠", bold: "Vector Search (FAISS):", text: "Using Sentence Transformers, the system compares the product description against a cached list of Bol category IDs." },
        { icon: "✅", bold: "Validation:", text: "OpenAI acts as the final judge to confirm the most relevant Category ID based on the semantic proximity calculated by FAISS." },
        { icon: "🔧", bold: "Placeholder Logic:", text: "If specific attributes are missing from the Amazon data, the AI generates plausible, context-aware placeholders to satisfy Bol's mandatory field requirements." },
      ],
    },
    {
      number: "06",
      label: "Phase 6",
      title: "EAN Lifecycle And Retailer API Integration",
      description: "The final phase handles the legal identification and live publishing of the offer.",
      image: "/images/image10.png",
      imageAlt: "EAN lifecycle and API integration diagram",
      bullets: [
        { icon: "🏷️", bold: "GS1 Assignment:", text: "The system extracts the next unused EAN from a pre-saved local pool." },
        { icon: "📋", bold: "Official Registration:", text: "The code registers these EANs at GS1 for formal product identification." },
        { icon: "🚀", bold: "Direct API Upload:", text: "Completed records are pushed to the Bol Retailer API v10. The system creates the product content, establishes the offer (price/stock), and polls the Process Status endpoint to confirm a successful live listing." },
        { icon: "📊", bold: "Final Logging:", text: "Upon success, the EAN is marked as \"Used,\" and the full product details are archived in the CSV database for future tracking." },
      ],
    },
  ],

  // ── TECH STACK ────────────────────────────────────────────
  techStack: {
    sectionLabel: "Technology",
    heading: "Tech Stack",
    items: [
      { name: "Python",               category: "Core Language",         icon: "python" },
      { name: "aiohttp",              category: "Async HTTP",            icon: "fastapi" },
      { name: "OpenAI GPT-4",         category: "AI Rewriting",          icon: "openaigym" },
      { name: "Google Gemini",        category: "Attribute Extraction",  icon: "googlegemini" },
      { name: "FAISS",                category: "Vector Search",         icon: "meta" },
      { name: "Sentence Transformers",category: "NLP Embeddings",        icon: "huggingface" },
      { name: "Cloudinary",           category: "Media Management",      icon: "cloudinary" },
      { name: "GS1 / EAN",            category: "Product IDs",           icon: "producthunt" },
      { name: "Bol API",              category: "Marketplace",           icon: "v8" },
      { name: "EUIPO",                category: "IP Filtering",          icon: "europeanunion" },
      { name: "BeautifulSoup",        category: "HTML Parsing",          icon: "python" },
      { name: "Amazon API",           category: "Data Sourcing",         icon: "aframe/000000" },
    ],
  },
};

export default project1;
