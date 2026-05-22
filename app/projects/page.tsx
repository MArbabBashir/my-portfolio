"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { FiExternalLink, FiGithub, FiFilter } from "react-icons/fi"
import { Button } from "@/components/ui/button"

const categories = ["All", "Next.js", "React", "Laravel", "WordPress", "Full Stack"]

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics dashboard.",
    image: "/projects/ecommerce.jpg",
    category: ["Next.js", "Full Stack"],
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "A comprehensive SaaS dashboard with user management, subscription billing, and advanced analytics features.",
    image: "/projects/saas.jpg",
    category: ["React", "Full Stack"],
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Healthcare Portal",
    description: "A secure healthcare portal for patient management, appointment scheduling, and telemedicine consultations.",
    image: "/projects/healthcare.jpg",
    category: ["Laravel", "Full Stack"],
    technologies: ["Laravel", "Vue.js", "MySQL", "WebRTC"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 4,
    title: "Corporate Website",
    description: "A modern corporate website with custom theme, SEO optimization, and content management system.",
    image: "/projects/corporate.jpg",
    category: ["WordPress"],
    technologies: ["WordPress", "PHP", "JavaScript", "GSAP"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "Real Estate App",
    description: "A real estate listing application with property search, virtual tours, and mortgage calculator.",
    image: "/projects/realestate.jpg",
    category: ["Next.js", "Full Stack"],
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 6,
    title: "Restaurant Ordering System",
    description: "An online ordering system for restaurants with menu management, order tracking, and delivery integration.",
    image: "/projects/restaurant.jpg",
    category: ["Laravel", "Full Stack"],
    technologies: ["Laravel", "React", "MySQL", "Pusher"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 7,
    title: "Blog Platform",
    description: "A modern blogging platform with markdown support, comments, and social sharing features.",
    image: "/projects/blog.jpg",
    category: ["WordPress"],
    technologies: ["WordPress", "Gutenberg", "REST API", "React"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 8,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team workspaces, and integrations.",
    image: "/projects/taskmanager.jpg",
    category: ["React", "Full Stack"],
    technologies: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-secondary">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary/30">{project.title.charAt(0)}</span>
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-primary text-primary-foreground"
              aria-label="View live demo"
            >
              <FiExternalLink className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-card border border-border text-foreground"
              aria-label="View source code"
            >
              <FiGithub className="h-5 w-5" />
            </motion.a>
          </div>
          {project.featured && (
            <div className="absolute top-3 right-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category.includes(activeCategory))

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
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A collection of projects that showcase my expertise in building modern web applications.
              Each project represents unique challenges and innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <FiFilter className="text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in <span className="gradient-text">Working Together</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
            </p>
            <Button size="lg" className="rounded-full" asChild>
              <a href="/contact">Start a Conversation</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
