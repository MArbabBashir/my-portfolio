"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { FiCalendar, FiBriefcase, FiBook, FiAward } from "react-icons/fi"
import { 
  SiNextdotjs, 
  SiReact, 
  SiLaravel, 
  SiWordpress, 
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker
} from "react-icons/si"
import { FiCloud } from "react-icons/fi"

const skills = [
  { name: "Next.js / React", level: 95 },
  { name: "Laravel / PHP", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "WordPress", level: 85 },
  { name: "Node.js", level: 82 },
  { name: "Database (MySQL/MongoDB)", level: 85 },
]

const techStack = [
  { icon: SiNextdotjs, name: "Next.js", category: "Frontend" },
  { icon: SiReact, name: "React", category: "Frontend" },
  { icon: SiTypescript, name: "TypeScript", category: "Language" },
  { icon: SiTailwindcss, name: "Tailwind CSS", category: "Styling" },
  { icon: SiLaravel, name: "Laravel", category: "Backend" },
  { icon: SiNodedotjs, name: "Node.js", category: "Backend" },
  { icon: SiWordpress, name: "WordPress", category: "CMS" },
  { icon: SiMysql, name: "MySQL", category: "Database" },
  { icon: SiMongodb, name: "MongoDB", category: "Database" },
  { icon: SiGit, name: "Git", category: "DevOps" },
  { icon: SiDocker, name: "Docker", category: "DevOps" },
  { icon: FiCloud, name: "AWS", category: "Cloud" },
]

const experience = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description: "Leading development of enterprise-level web applications using Next.js and Laravel. Managing a team of 5 developers and implementing CI/CD pipelines.",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using React, Node.js, and WordPress. Increased client satisfaction by 40% through optimized solutions.",
  },
  {
    type: "work",
    title: "Junior Web Developer",
    company: "StartUp Hub",
    period: "2019 - 2020",
    description: "Built responsive websites and implemented RESTful APIs. Collaborated with design team to create pixel-perfect user interfaces.",
  },
]

const education = [
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "University of Technology",
    period: "2015 - 2019",
    description: "Graduated with honors. Specialized in Software Engineering and Web Technologies.",
  },
  {
    type: "education",
    title: "Full Stack Development Bootcamp",
    company: "Code Academy",
    period: "2019",
    description: "Intensive 12-week program covering modern web development technologies.",
  },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </div>
  )
}

function TimelineItem({ 
  item, 
  index 
}: { 
  item: typeof experience[0]; 
  index: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-primary" />
      
      <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
        <div className="flex items-center gap-2 text-primary mb-2">
          {item.type === "work" ? (
            <FiBriefcase className="h-4 w-4" />
          ) : (
            <FiBook className="h-4 w-4" />
          )}
          <span className="text-sm font-medium">{item.period}</span>
        </div>
        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
        <p className="text-muted-foreground text-sm mb-3">{item.company}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {"I'm a passionate Full Stack Developer with 5+ years of experience building exceptional digital experiences. I specialize in creating scalable, user-friendly web applications that solve real-world problems."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl relative">
                <Image
                  src="/profile.jpg"
                  alt="John Doe - Full Stack Developer"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">
                {"Hello! I'm "}
                <span className="gradient-text">John Doe</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-muted-foreground mb-4 leading-relaxed">
                I discovered my passion for web development in college and have been building digital experiences ever since. What started as a curiosity has evolved into a fulfilling career where I get to solve complex problems and create meaningful solutions.
              </motion.p>
              <motion.p variants={itemVariants} className="text-muted-foreground mb-4 leading-relaxed">
                My expertise spans across the full development stack, from crafting pixel-perfect user interfaces with React and Next.js to building robust backend systems with Laravel and Node.js. I believe in writing clean, maintainable code that scales.
              </motion.p>
              <motion.p variants={itemVariants} className="text-muted-foreground mb-6 leading-relaxed">
                When I am not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical articles and mentoring junior developers.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <FiCalendar className="text-primary" />
                  <span className="text-muted-foreground">5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FiBriefcase className="text-primary" />
                  <span className="text-muted-foreground">50+ Projects</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FiAward className="text-primary" />
                  <span className="text-muted-foreground">30+ Happy Clients</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Progress Bars */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <SkillBar name={skill.name} level={skill.level} />
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 md:grid-cols-4 gap-4"
            >
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors text-center"
                >
                  <tech.icon className="h-8 w-8 text-primary" />
                  <span className="text-xs font-medium">{tech.name}</span>
                  <span className="text-xs text-muted-foreground">{tech.category}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and educational background
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Experience */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <FiBriefcase className="text-primary" />
                Work Experience
              </h3>
              <div className="relative">
                {experience.map((item, index) => (
                  <TimelineItem key={item.title} item={item} index={index} />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <FiBook className="text-primary" />
                Education
              </h3>
              <div className="relative">
                {education.map((item, index) => (
                  <TimelineItem key={item.title} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
