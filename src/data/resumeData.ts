import { ProjectType, SkillCategory } from '../types';

export const aboutMe = {
  name: "Haindavi",
  title: "Software Developer",
  description: " Passionate about programming, building smart solutions, and currently focused on mastering data structures and frontend development. I love turning ideas into code, learning through challenges, and working on projects that combine logic, creativity, and impact."
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", proficiency: 85 },
      { name: "C++", proficiency: 80 },
      { name: "Python", proficiency: 60 },
      { name: "JavaScript", proficiency: 65 },
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML", proficiency: 90 },
      { name: "CSS", proficiency: 85 },
      { name: "Bootstrap", proficiency: 70 },
      { name: "React", proficiency: 60 },
      { name: "Node.js", proficiency: 70 },
    ]
  },
  {
    category: "Technologies",
    skills: [
      { name: "GitHub", proficiency: 85 },
      { name: "Linux", proficiency: 40 },
    ]
  },
  {
    category: "Database Management",
    skills: [
      { name: "SQL", proficiency: 85 },
      { name: "MongoDB", proficiency: 70 },
    ]
  },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Student Organizer Event Portal with Chatbot Integration",
    description: "Developed a full-stack event portal with chatbot integration for match-making features between event participants and organizer management. Integrated DialogFlow AI chatbot for event queries and assistance. Added personalized dashboards and a gamified leaderboard to drive engagement.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "MongoDB", "DialogFlow"],
    imageUrl: "https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://github.com/devaamsh2006/Webathon.git"
  },
  {
    id: 2,
    title: "CNG Pumps Near Me",
    description: "A web app that shows nearby CNG pumps using your location and manual pump information.",
    technologies:["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    imageUrl: "https://images.pexels.com/photos/12799788/pexels-photo-12799788.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://vivicng.netlify.app/" 
  },
  {
    id: 3,
    title: "Tennis Prediction Model",
    description: "Developed a machine learning model to predict the winner between any two tennis players using historical match data and player statistics. Extracted and processed data using Pandas, engineered relevant features, and trained classification models with Scikit-learn. Integrated the model into a user-friendly web application.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter/Notebook", "Flask"],
    imageUrl: "https://images.pexels.com/photos/7567233/pexels-photo-7567233.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://your-live-project-link-or-github.com" 
  },
  {
    id: 4,
    title: "Naruto Click Discover",
    description: " Displays 23 Naruto characters in a clickable grid layout.On click, shows the character's image and a memorable quote.Uses JavaScript to manage interactions and display character data dynamically..",
    technologies: [ "HTML", "CSS", "JavaScript"],
    imageUrl: "https://cdn.pixabay.com/photo/2018/10/19/05/12/naruto-3757871_1280.jpg",
    link: "https://haindavi3009.github.io/Naruto-Click-Discover/" 
  },
  {
    id: 5,
    title: "Web-Based Portfolio Platform",
    description: "Designed a responsive and interactive portfolio website to showcase my achievements and skills. The project includes a detailed view with descriptions and technologies used. Ensured cross-device compatibility with a mobile-first design approach.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    imageUrl: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://haindavi3009.github.io/my-portfolio/" 
  },
  {
    id: 6,
    title: "Table Tennis Score Keeper",
    description: "Allows users to keep track of points, games, and set scores for a table tennis match.Real-time score updates with the ability to increment points for each player and Option to reset the scores and start a new match.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://haindavi3009.github.io/Table-Tennis-Scorekeeper/" 
  }
];


export const contact = {
  email: "haindavisira@gmail.com",
  phone: "+91 9182640649",
  location: "Hyderabad, India",
  linkedin: "https://www.linkedin.com/in/haindavi-sira-b0350028b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/Haindavi3009"
};