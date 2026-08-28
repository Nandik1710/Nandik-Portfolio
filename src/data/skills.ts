import type { SkillGroup } from "@/types";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    icon: "code",
    accent: "coral",
    items: ["C", "Java", "Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "layers",
    accent: "blue",
    items: [
      "React.js",
      "React Native",
      "Kotlin",
      "Jetpack Compose",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "FastAPI",
    ],
  },
  {
    category: "Databases & Cloud",
    icon: "cloud",
    accent: "mint",
    items: ["MongoDB", "MongoDB Atlas", "MySQL", "Cloudinary", "AWS"],
  },
  {
    category: "AI & Computer Vision",
    icon: "ai",
    accent: "purple",
    items: [
      "Faster Whisper",
      "Kraken OCR",
      "OpenCV",
      "Regex-Based Data Extraction",
    ],
  },
  {
    category: "Testing & Automation",
    icon: "testing",
    accent: "yellow",
    items: [
      "PyTest",
      "Selenium",
      "Postman",
      "API Testing",
      "Functional Testing",
      "Regression Testing",
    ],
  },
];

export const developmentCard = {
  title: "Always building. Always learning.",
  themes: [
    "System Design",
    "Cloud Architecture",
    "AI & Computer Vision",
    "Scalable Applications",
  ],
};