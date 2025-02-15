// Data for projects section
import project1 from "../assets/projects/project1.png";
import booking from "../assets/projects/booking.png";
import fitfusion from "../assets/projects/fitfusion.png";

const projects = [
    {
      id: 1,
      Title: "Appointment Booking System",
      Description: "A web-based appointment booking system built with Spring Boot and React.js.",
      Features: [
        "User Authentication",
        "List View for Appointments",
        "Responsive Design",
        "Appointment Management"
      ],
      Github: "https://github.com/PrabhashSwarnajith/appointment-booking-system.git",
      Img: booking,
      Link: "",
      TechStack: ["Spring Boot", "React.js", "Tailwind CSS", "MySQL"],
    },
    {
      id: 2,
      Title: "FitFusion - Social Media & Fitness App",
      Description: "A fitness-focused social media app where users can track workouts, share progress, and interact with the community.",
      Features: [
        "Workout Tracking",
        "Social Media Integration (Follow, Like, comment)",
        "Google OAuth2 Authentication",
        "Community Engagement"
      ],
      Github: "https://github.com/PrabhashSwarnajith/FitFusion.git",
      Img: fitfusion,
      Link: "",
      TechStack: ["Spring Boot", "React.js", "MongoDB", "Google OAuth2"]
    },
    {
      id: 3,
      Title: "Portfolio Website",
      Description: "A personal portfolio website built with React and Firebase.",
      Features: [
        "Responsive Design", 
        "Firestore Integration"],
      Github: "https://github.com/PrabhashSwarnajith/web-portfolio.git",
      Img: project1,
      Link: "",
      TechStack: ["React", "Firebase", "Tailwind CSS"],
    },
       
  ];
  
  export default projects;