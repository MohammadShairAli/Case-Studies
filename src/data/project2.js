// ============================================================
// PROJECT DATA — Project 2: Healthcare Voice Agent
// ============================================================

const project2 = {

  meta: {
    title: "Health Care Voice Agent",
    subtitle: "Case Study · AI-Powered Healthcare Scheduling",
    browserTabTitle: "Case Study | Healthcare Voice Agent",
    favicon: "/images/p2/image1.png",
  },

  hero: {
    badge: "Case Study",
    heading: "Healthcare Appointment Voice Agent",
    subheading: "AI-Powered Scheduling 24/7, Zero Human Involvement",
    description: "Healthcare Appointment Voice Agent is a fully AI-powered scheduling solution built on Google Gemini. Patients book, reschedule, or cancel medical appointments through a natural voice call or WhatsApp message anytime, without a receptionist.",
    bannerImage: "/images/p2/image1.png",
    stats: [
      { value: "85%",  label: "Faster Booking" },
      { value: "24/7", label: "Availability" },
      { value: ">1s",  label: "AI Response Time" },
      { value: "96%",  label: "Scheduling Accuracy" },
    ],
  },

  performance: {
    sectionLabel: "Performance Benchmarks",
    heading: "Manual vs AI Agent",
    description: "Deploying AI voice agent in place of a manual reception workflow delivers measurable, significant improvements across every key operational dimension.",
    chartImage: "/images/p2/image7.png",
    chartAlt: "Performance benchmarks  Manual vs AI agent",
    chart: {
      id: "project2-benchmark",
      alt: "Interactive performance benchmark chart comparing manual healthcare scheduling and AI agent",
      labels: ["Availability", "Booking Speed", "Accuracy", "Error Rate", "Response Time", "Human Workload"],
      series: {
        manual: [
          { label: "Availability", name: "Manual phase", value: 28 },
          { label: "Booking Speed", name: "Manual phase", value: 20 },
          { label: "Accuracy", name: "Manual phase", value: 55 },
          { label: "Error Rate", name: "Manual phase", value: 72 },
          { label: "Response Time", name: "Manual phase", value: 30 },
          { label: "Human Workload", name: "Manual phase", value: 88 },
        ],
        ai: [
          { label: "Availability", name: "AI agent phase", value: 99 },
          { label: "Booking Speed", name: "AI agent phase", value: 95 },
          { label: "Accuracy", name: "AI agent phase", value: 96 },
          { label: "Error Rate", name: "AI agent phase", value: 8 },
          { label: "Response Time", name: "AI agent phase", value: 92 },
          { label: "Human Workload", name: "AI agent phase", value: 22 },
        ],
      },
      annotations: [
        { type: "manual", title: "Without AI agent", subtitle: "Office hrs - high errors", x: 82, y: 128, width: 245 },
        { type: "ai", title: "Healthcare AI agent", subtitle: "24/7 - 96% accuracy", x: 850, y: 128, width: 230 },
      ],
    },
    metrics: [
      { before: "5–7 min", after: "~60 sec", label: "Booking Time" },
      { before: "~70%",    after: "~96%",    label: "Scheduling Accuracy" },
    ],
  },

  executive: {
    sectionLabel: "Executive Summary",
    heading: "Project Overview",
    description: "This Appointment Voice Agent enables patients to book, reschedule, or cancel medical appointments through a natural voice call or WhatsApp message 24/7, without any human receptionist involvement. The system replicates receptionist decision-making intent recognition, slot availability, confirmation, and calendar synchronization at a fraction of the cost.",
    image: "/images/p2/image2.png",
    imageAlt: "Platform overview dashboard",
    challenge: {
      heading: "The Challenge",
      subheading: "From Manual to AI-Driven",
      text: "Traditional appointment booking at a medical clinic relies entirely on a human receptionist. This creates hard limits on throughput, availability, and accuracy all of which AI agent is designed to eliminate.",
    },
    vision: {
      heading: "The Vision",
      quote: "The vision was to flip the model entirely: from a 5–7 minute phone booking handled by a human to a 40-second AI conversation available around the clock, with no per-call labor cost and zero scheduling errors.",
      image: "/images/p2/image6.png",
      imageAlt: "Challenge comparison diagram",
    },
  },

  phases: [
    {
      number: "01",
      label: "Phase 1",
      title: "Patient Interaction & Voice Capture",
      description: "The pipeline begins the moment a patient makes contact. Supports two parallel entry points, both routing into the same NLU pipeline.",
      image: "/images/p2/image8.png",
      imageAlt: "Voice capture and WhatsApp entry diagram",
      bullets: [
        { icon: "🎙️", bold: "Voice Call:", text: "The patient speaks directly to the AI agent via web or mobile interface. Audio is captured in real time and transcribed by the Speech Recognition module." },
        { icon: "💬", bold: "WhatsApp Agent:", text: "The patient types or sends a voice note via WhatsApp. The message is processed through the same Gemini NLU pipeline." },
        { icon: "🌍", bold: "Language Detection:", text: "Once input is received, Language Detection identifies the patient's language, enabling natural, culturally appropriate responses throughout the conversation." },
      ],
    },
    {
      number: "02",
      label: "Phase 2",
      title: "Intent Classification & Entity Recognition",
      description: "The transcribed input is processed by Google Gemini, which classifies the patient's intent into one of three tracks and simultaneously extracts all required booking entities.",
      image: "/images/p2/image9.png",
      imageAlt: "Intent classification and entity recognition flow",
      bullets: [
        { icon: "📅", bold: "Book Appointment:", text: "A new appointment request. Gemini extracts doctor preference, date, and time." },
        { icon: "🔄", bold: "Reschedule / Cancel:", text: "Modification or removal of an existing booking. Existing record is retrieved for update." },
        { icon: "❓", bold: "General Inquiry:", text: "Questions about the clinic, doctors, hours, or services. Answered conversationally without entering the booking pipeline." },
      ],
    },
    {
      number: "03",
      label: "Phase 3",
      title: "Real-Time Availability Check & Slot Booking",
      description: "The confirmed booking request is matched against the Weekly Appointment Schedule configured in Hub. Administrators define availability per day, with independently configurable start time, end time, and slot duration.",
      image: "/images/p2/image10.png",
      imageAlt: "Availability check and slot booking diagram",
      bullets: [
        { icon: "✅", bold: "Slots Available:", text: "The agent confirms the exact time with the patient and proceeds to create the appointment record immediately." },
        { icon: "🔁", bold: "No Slots Available:", text: "The agent proactively offers the next available alternate dates and times, and loops back for patient selection." },
        { icon: "🗓️", bold: "Full Week Coverage:", text: "All seven days (Monday through Sunday) can be toggled independently, allowing clinics to model their exact operating schedule including weekend variations." },
      ],
    },
    {
      number: "04",
      label: "Phase 4",
      title: "Confirmation & Multi-Channel Notification",
      description: "Once a slot is confirmed and stored, the agent triggers a three-way notification cascade ensuring both the patient and the clinic receive immediate confirmation.",
      image: "/images/p2/image11.png",
      imageAlt: "Confirmation and notification flow diagram",
      bullets: [
        { icon: "🔊", bold: "Voice Readback:", text: "The agent reads the complete appointment summary back to the patient before ending the call date, time, and doctor name." },
        { icon: "📱", bold: "WhatsApp Message:", text: "A structured confirmation message is sent to the patient's WhatsApp number for reference." },
        { icon: "📊", bold: "Dashboard Update:", text: "The appointment is instantly recorded in the  Hub under the Appointments tab, complete with patient details and booking timestamp." },
      ],
    },
    {
      number: "05",
      label: "Phase 5",
      title: "Dashboard Analytics & Cost Tracking",
      description: "Every completed AI interaction is automatically logged in  Hub with full traceabilit no manual entry required.",
      image: "/images/p2/image12.png",
      imageAlt: "Dashboard analytics and cost tracking screenshot",
      bullets: [
        { icon: "📞", bold: "Call Insights:", text: "Source (Gemini), Conversation ID, Agent name, Duration, Date & Time, Estimated cost, and a Logs button for full transcript review." },
        { icon: "💰", bold: "AI Cost Analysis:", text: "7-day Gemini token utilization chart, providing complete visibility into AI operational costs." },
        { icon: "📤", bold: "CSV Export:", text: "All appointment and call data exportable for clinic reporting, CRM integration, or client delivery." },
      ],
    },
  ],

  techStack: {
    sectionLabel: "Technology",
    heading: "Tech Stack",
    image: "/images/p2/image13.png",
    imageAlt: "Full technology stack diagram",
    items: [
      { name: "Google Gemini",      category: "AI / LLM Core",       icon: "googlegemini" },
      { name: "Speech Recognition", category: "Voice-to-Text",       icon: "googlechrome" },
      { name: "WhatsApp API",       category: "Messaging Channel",   icon: "whatsapp" },
      { name: "Google Calendar",    category: "Scheduling Backend",  icon: "googlecalendar" },
      { name: "BlenSpark Hub",      category: "Admin Dashboard",     icon: "google" },
      { name: "Node.js",            category: "Backend Runtime",     icon: "nodedotjs" },
      { name: "WebSockets",         category: "Real-Time Comms",     icon: "socketdotio" },
      { name: "CSV Export",         category: "Data & Reporting",    icon: "databricks" },
      { name: "Multi-language NLU", category: "Language Detection",  icon: "googlecloud" },
      { name: "Text-to-Speech",     category: "Voice Synthesis",     icon: "googlegemini" },
      { name: "REST APIs",          category: "System Integration",  icon: "fastapi" },
      { name: "Cloud Hosting",      category: "Infrastructure",      icon: "googlecloud" },
    ],
  },
};

export default project2;
