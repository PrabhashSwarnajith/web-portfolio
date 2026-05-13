import booking from "../assets/projects/booking.png";
import fitfusion from "../assets/projects/fitfusion.png";
import project1 from "../assets/projects/project1.png";

const projects = [
  {
    id: 1,
    Title: "Outlook Add-in – AI Email Management",
    Description:
      "An AI-powered Outlook Office Add-in delivering email summarization, smart replies, and CRM insights directly inside Outlook. Integrated with Microsoft 365 ecosystem and real-time SignalR updates.",
    Features: [
      "AI-powered email summarization",
      "Smart reply generation with OpenAI API",
      "CRM insights embedded in Outlook sidebar",
      "Real-time updates via SignalR",
      "MSAL + JWT secure authentication",
    ],
    Github: "",
    Img: booking,
    Link: "",
    TechStack: ["React", "ASP.NET Core", "Microsoft Graph API", "OpenAI API", "SignalR", "MSAL"],
    badge: "Internship Project",
  },
  {
    id: 2,
    Title: "OptiTech – Eye Tracking Research System",
    Description:
      "A real-time eye tracking system using computer vision and machine learning for gaze detection and interactive eye exercises. Accepted for presentation at ICCE 2025 International Conference.",
    Features: [
      "Real-time gaze detection from webcam",
      "Interactive eye exercise modules",
      "Computer vision with OpenCV",
      "Machine learning model integration",
      "Accepted at ICCE 2025 Conference",
    ],
    Github: "",
    Img: project1,
    Link: "",
    TechStack: ["FastAPI", "Python", "OpenCV", "Machine Learning"],
    badge: "Conference Paper · ICCE 2025",
  },
  {
    id: 3,
    Title: "Invoice to Text – Document Processing",
    Description:
      "A web application to extract structured invoice data from PDF, JPG, and CSV files using AI-based OCR. Automated n8n workflows store and sync results directly to Google Sheets / Workspace.",
    Features: [
      "AI-based OCR for PDF, JPG, CSV",
      "n8n workflow automation",
      "Google Sheets / Workspace sync",
      "Validation & error handling",
      "High data accuracy pipeline",
    ],
    Github: "https://github.com/PrabhashSwarnajith/Document-Processing-Application",
    Img: project1,
    Link: "",
    TechStack: ["React", "TypeScript", "Tailwind CSS", "n8n", "Google Workspace API"],
    badge: "Internship Project",
  },
  {
    id: 4,
    Title: "FitFusion – Fitness Social Media App",
    Description:
      "A fitness-focused social media platform featuring workout tracking, community engagement, Google OAuth2 authentication, and a scalable Spring Boot RESTful backend with MongoDB.",
    Features: [
      "Workout tracking & progress logging",
      "Social feed with likes, comments, follows",
      "Google OAuth2 authentication",
      "Spring Boot RESTful backend",
      "MongoDB database design",
    ],
    Github: "https://github.com/PrabhashSwarnajith/FitFusion.git",
    Img: fitfusion,
    Link: "",
    TechStack: ["Spring Boot", "React.js", "Google OAuth2", "MongoDB"],
    badge: null,
  },
  {
    id: 5,
    Title: "Appointment Booking System",
    Description:
      "A full-stack web-based appointment booking system with role-based authentication, real-time scheduling, and a clean responsive UI. Built with Spring Boot and React.js.",
    Features: [
      "Role-based authentication",
      "Real-time appointment scheduling",
      "Admin & user dashboards",
      "Responsive design",
    ],
    Github: "https://github.com/PrabhashSwarnajith/appointment-booking-system.git",
    Img: booking,
    Link: "",
    TechStack: ["Spring Boot", "React.js", "Tailwind CSS", "MySQL"],
    badge: null,
  },
];

export default projects;
