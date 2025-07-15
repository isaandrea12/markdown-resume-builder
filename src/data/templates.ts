export interface Template {
  id: string;
  name: string;
  description: string;
  content: string;
}

export const resumeTemplates: Template[] = [
  {
    id: "professional",
    name: "Professional",
    description: "Tech/Corporate roles",
    content: `# John Doe
Senior Software Engineer  
San Francisco, CA · john.doe@email.com · (555) 123-4567 · linkedin.com/in/johndoe

## Summary
Experienced software engineer with 8+ years developing scalable web applications. Proven track record of leading cross-functional teams and delivering high-impact products used by millions of users.

## Experience
**Senior Software Engineer** | Google  
*2020 – Present*  
- Led development of core search features serving 1B+ daily users
- Mentored 5 junior engineers and improved team productivity by 40%
- Architected microservices reducing system latency by 60%

**Software Engineer** | Airbnb  
*2018 – 2020*  
- Built booking platform features processing $10M+ in transactions
- Implemented A/B testing framework used across 20+ product teams
- Reduced page load times by 45% through performance optimizations

## Education
**M.S. Computer Science** | Stanford University, 2018  
**B.S. Computer Science** | UC Berkeley, 2016

## Skills
**Programming:** Python, JavaScript, Go, Java  
**Technologies:** React, Node.js, PostgreSQL, AWS, Docker  
**Leadership:** Team Management, Technical Mentoring, Agile Development`,
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Marketing/Sales roles",
    content: `# Sarah Johnson
Digital Marketing Manager  
Austin, TX · sarah.johnson@email.com · (555) 987-6543

## Professional Summary
Results-driven marketing professional with 6+ years of experience in digital marketing, brand management, and growth strategy. Proven ability to increase brand awareness and drive revenue growth through data-driven campaigns.

## Experience
**Digital Marketing Manager** | HubSpot  
*2021 – Present*  
- Increased organic traffic by 150% through SEO optimization and content strategy
- Managed $2M annual advertising budget across multiple channels
- Led rebranding initiative that improved brand recognition by 35%

**Marketing Specialist** | Salesforce  
*2019 – 2021*  
- Executed email marketing campaigns with 25% average open rate
- Created social media strategy resulting in 200% follower growth
- Collaborated with sales team to generate 500+ qualified leads monthly

## Education
**MBA, Marketing** | University of Texas at Austin, 2019  
**B.A. Communications** | Texas A&M University, 2017

## Core Competencies
• Digital Marketing Strategy • Content Creation • SEO/SEM  
• Social Media Marketing • Email Marketing • Analytics & Reporting  
• Brand Management • Campaign Optimization • Lead Generation`,
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean and simple",
    content: `# Alex Chen
Product Designer  
Seattle, WA · alex.chen@email.com

## Experience
**Senior Product Designer** | Microsoft  
*2020 – Present*  
- Design user experiences for Microsoft Teams (50M+ daily users)
- Lead design system initiatives across multiple product teams

**Product Designer** | Spotify  
*2018 – 2020*  
- Created mobile app features improving user engagement by 30%
- Conducted user research and usability testing for new features

## Education
**B.A. Design** | Art Center College of Design, 2018

## Skills
Figma, Sketch, Prototyping, User Research, Design Systems`,
  },
  {
    id: "creative",
    name: "Creative",
    description: "Artsy design with emojis",
    content: `# 🎨 Maya Rodriguez
### Creative Director & Visual Artist

📍 Brooklyn, NY • ✉️ maya.rodriguez@creative.com • 📱 (555) 234-5678  
🌐 maya-portfolio.com • 📸 @mayacreates

---

## ✨ Creative Vision
Award-winning creative director with **10+ years** transforming brands through innovative visual storytelling. Passionate about pushing creative boundaries while delivering measurable business impact.

---

## 🎨 Experience

**Senior Creative Director** | *Nike*  
*2021 – Present*  
🚀 Led global rebrand campaign increasing brand awareness by **45%**  
🎯 Directed team of 12 designers across 3 continents  
🏆 Won **3 Cannes Lions** for innovative digital campaigns  

**Art Director** | *IDEO*  
*2019 – 2021*  
💡 Created design systems for **Fortune 500** clients  
🎨 Launched interactive installations in **15+ cities**  
📈 Improved client satisfaction scores by **35%**

**Visual Designer** | *Pentagram*  
*2017 – 2019*  
🌟 Designed identity systems for emerging tech startups  
🎪 Curated gallery exhibitions featuring digital art  

---

## 🎓 Education & Certifications
**MFA Visual Communication** | *Parsons School of Design*, 2017  
**Google Design Sprint Facilitator** | 2020  
**Adobe Certified Expert** | Creative Suite Master

---

## 🛠️ Creative Arsenal

**Design Tools:** Figma • Adobe Creative Suite • Sketch • Principle  
**3D & Motion:** Cinema 4D • After Effects • Blender  
**Code:** HTML/CSS • JavaScript • React • WebGL  
**Strategy:** Brand Strategy • Design Thinking • User Research

---

## 🏆 Recognition
🥇 **Design Museum Award** - Digital Innovation (2023)  
🌟 **D&AD Pencil** - Brand Identity (2022)  
🎨 **Communication Arts Award** - Interactive Design (2021)  
📱 **Webby Award** - Mobile Experience (2020)`,
  },

];

export const getTemplateById = (id: string): Template | undefined => {
  return resumeTemplates.find((template) => template.id === id);
};

export const getAllTemplates = (): Template[] => {
  return resumeTemplates;
};