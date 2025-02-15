// Data for projects section
import project1 from "../assets/projects/project1.png";

const projects = [
    {
      id: 1,
      Title: "Portfolio Website",
      Description: "A personal portfolio website built with React and Firebase.",
      Features: ["Responsive Design", "Firestore Integration"],
      Github: "https://github.com/PrabhashSwarnajith/web-portfolio.git",
      Img: project1,
      Link: "https://portfolio.example.com",
      TechStack: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      id: 2,
      Title: "E-commerce App",
      Description: "An e-commerce app with user authentication and payment integration.",
      Features: ["User Authentication", "Payment Gateway", "Product Management"],
      Github: "https://github.com/example/ecommerce-app.git",
      Img: "",
      // Link: "#",
      TechStack: ["React", "Node.js", "MongoDB", "Stripe"],
    },
  ];
  
  export default projects;