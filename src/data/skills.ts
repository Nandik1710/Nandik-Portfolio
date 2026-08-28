import type { SkillGroup } from "@/types";

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["C", "Java", "Python", "JavaScript", "HTML5", "CSS3"] },
  { category: "Frameworks & Libraries", items: ["React.js", "React Native", "Kotlin", "Jetpack Compose", "Tailwind CSS", "Node.js", "Express.js", "FastAPI"] },
  { category: "Databases & Cloud", items: ["MongoDB", "MongoDB Atlas", "MySQL", "Cloudinary", "AWS"] },
  { category: "AI & Computer Vision", items: ["Faster Whisper", "Kraken OCR", "OpenCV", "Regex-Based Data Extraction"] },
  { category: "Testing & Automation", items: ["PyTest", "Selenium", "Postman", "API Testing", "Functional Testing", "Regression Testing"] },
];

export const developmentCard = {
  title: "Always building. Always learning.",
  themes: ["System Design", "Cloud Architecture", "AI & Computer Vision", "Scalable Applications"],
};
