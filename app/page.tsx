"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { TypeWriter } from "@/components/type-writer"
import { AnimatedCounter } from "@/components/animated-counter"
import { ParticleBackground } from "@/components/particle-background"
import { Testimonials } from "@/components/testimonials"
import Image from "next/image"
import { 
  SiNextdotjs, 
  SiReact, 
  SiLaravel, 
  SiWordpress, 
  SiTypescript,
  SiTailwindcss 
} from "react-icons/si"

const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
]

const techStack = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiLaravel, name: "Laravel" },
  { icon: SiWordpress, name: "WordPress" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <motion.p
                variants={itemVariants}
                className="text-primary font-medium mb-4"
              >
                Welcome to my portfolio
              </motion.p>
              
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              >
                {"Hi, I'm "}
                <span className="gradient-text">John Doe</span>
              </motion.h1>
              
              <motion.div
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 h-12"
              >
                <TypeWriter />
              </motion.div>
              
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              >
                I build exceptional digital experiences with modern technologies.
                Passionate about creating elegant, scalable, and user-friendly web applications
                that make a difference.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <Link href="/contact">
                  <Button size="lg" className="rounded-full w-full sm:w-auto">
                    <FiMail className="mr-2 h-4 w-4" />
                    Hire Me
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <a href="/resume.pdf" download>
                    <FiDownload className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="h-5 w-5" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right Content - Profile Image */}
            <motion.div
              variants={itemVariants}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Decorative rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                  style={{ width: "110%", height: "110%", left: "-5%", top: "-5%" }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30"
                  style={{ width: "120%", height: "120%", left: "-10%", top: "-10%" }}
                />
                
                {/* Profile image container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
                >
                  <Image
                    src="/profile.jpg"
                    alt="John Doe - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>

                {/* Floating tech badges */}
                {techStack.slice(0, 4).map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="absolute glass p-2 rounded-lg shadow-lg"
                    style={{
                      top: `${[10, 70, 85, 30][index]}%`,
                      left: `${[-10, -15, 60, 95][index]}%`,
                    }}
                  >
                    <tech.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies I work with to bring your ideas to life
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-6 gap-6"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors"
              >
                <tech.icon className="h-10 w-10 text-primary" />
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

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
              {"Let's Work "}
              <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have a project in mind? I would love to hear about it. Take a look at my work
              and let me know how I can help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button size="lg" variant="outline" className="rounded-full">
                  View My Work
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="rounded-full">
                  Get in Touch
                  <FiMail className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
