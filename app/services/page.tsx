"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  FiCode, 
  FiLayers, 
  FiDatabase, 
  FiLayout,
  FiServer,
  FiPenTool,
  FiCheck,
  FiArrowRight
} from "react-icons/fi"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: FiCode,
    title: "Web Development",
    description: "Custom web applications built with modern technologies. From simple landing pages to complex web applications, I deliver solutions that are fast, responsive, and scalable.",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Best Practices",
      "Cross-browser Compatibility",
    ],
  },
  {
    icon: FiLayers,
    title: "Full Stack Development",
    description: "End-to-end development services covering both frontend and backend. I build complete solutions that handle everything from user interfaces to database management.",
    features: [
      "Frontend & Backend",
      "Database Design",
      "API Development",
      "Cloud Deployment",
    ],
  },
  {
    icon: FiServer,
    title: "Laravel Development",
    description: "Robust backend solutions using Laravel framework. From RESTful APIs to complete web applications with authentication, authorization, and complex business logic.",
    features: [
      "RESTful APIs",
      "Authentication Systems",
      "Database Migrations",
      "Queue Management",
    ],
  },
  {
    icon: FiLayout,
    title: "WordPress Customization",
    description: "Custom WordPress themes and plugins tailored to your needs. Transform your WordPress site into a powerful, unique platform that stands out from the crowd.",
    features: [
      "Custom Themes",
      "Plugin Development",
      "WooCommerce Setup",
      "Performance Tuning",
    ],
  },
  {
    icon: FiDatabase,
    title: "API Integration",
    description: "Seamless integration of third-party services and APIs. Connect your application with payment gateways, social media platforms, analytics tools, and more.",
    features: [
      "Payment Gateways",
      "Social Media APIs",
      "Third-party Services",
      "Webhook Implementation",
    ],
  },
  {
    icon: FiPenTool,
    title: "UI/UX Development",
    description: "User-centered design implementation that converts visitors into customers. Beautiful interfaces that are intuitive, accessible, and engaging.",
    features: [
      "Responsive Layouts",
      "Animation Effects",
      "Accessibility (WCAG)",
      "Design Systems",
    ],
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your goals, requirements, and target audience through in-depth consultation.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Creating detailed project roadmap, architecture design, and technology stack selection.",
  },
  {
    step: "03",
    title: "Development",
    description: "Building your solution with clean code, regular updates, and milestone deliveries.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Deploying your project and providing ongoing maintenance and support as needed.",
  },
]

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

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="bg-card border border-border rounded-xl p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
        <service.icon className="h-6 w-6 text-primary" />
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <FiCheck className="h-4 w-4 text-primary flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function ServicesPage() {
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
              My <span className="gradient-text">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I offer a comprehensive range of web development services to help bring your ideas to life.
              From concept to deployment, I provide end-to-end solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-border" />
                )}
                
                <div className="relative bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your <span className="gradient-text">Project</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              {"Let's discuss your requirements and create a custom solution that fits your budget and timeline. Get a free consultation and project estimate."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-full">
                  Get Free Quote
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="rounded-full">
                  View My Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
