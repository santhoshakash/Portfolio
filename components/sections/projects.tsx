"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye, Globe, Code, Zap, Rocket, Shield, Users, ShoppingCart, BookOpen, CheckSquare, Palette, Database } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
    {
        title: "Norwex",
        description: "A comprehensive online shopping platform featuring payment integration, commission-based purchasing, and a dedicated admin application for management. Built with modern e-commerce best practices.",
        icon: ShoppingCart,
        tags: ["React.js", "Tailwind", "Shopify", "Firebase", "Node.js"],
        link: "https://norwex.eu/",
        github: "#",
        featured: true,
        status: "Live",
        category: "E-commerce",
        highlights: ["Payment Integration", "Commission System", "Admin Dashboard"]
    },
    {
        title: "Tapouts",
        description: "A web application designed to create and manage sessions aimed at reducing anxiety in children aged 4 to 16. Features interactive tools and progress monitoring for therapists and parents.",
        icon: Users,
        tags: ["Next.js", "Tailwind", "Firebase"],
        link: "https://tapouts.com/",
        github: "#",
        featured: true,
        status: "Live",
        category: "Healthcare",
        highlights: ["Interactive Tools", "Progress Monitoring", "Therapist Support"]
    },
    {
        title: "Brook+Whittle",
        description: "Enterprise-level manufacturing and printing platform for custom labels with comprehensive cloud infrastructure. Migrated and managed critical data across AWS and Azure platforms, built secure Node.js APIs, and implemented robust CI/CD pipelines for scalable deployments.",
        icon: Shield,
        tags: ["Node.js", "AWS", "Azure", "Lambda", "ECS", "S3", "API Gateway", "SQS", "SNS", "CI/CD"],
        link: "#",
        github: "#",
        featured: true,
        status: "Live",
        category: "Enterprise",
        highlights: ["Cloud Migration", "Secure APIs", "CI/CD Pipelines", "Multi-Cloud Architecture"]
    },
    {
        title: "Rubriks",
        description: "An educational application designed to assist faculties and students in creating and completing assessments efficiently. Features include automated grading, progress tracking, and collaborative tools.",
        icon: BookOpen,
        tags: ["React", "HTML", "CSS", "Firebase"],
        link: "#",
        github: "#",
        featured: true,
        status: "Live",
        category: "Education",
        highlights: ["Automated Grading", "Progress Tracking", "Collaborative Tools"]
    },
    {
        title: "Task Tracker",
        description: "A comprehensive task management system with role-based access control. Features include project management, team collaboration, and real-time updates for distributed teams.",
        icon: CheckSquare,
        tags: ["React.js", "Tailwind", "Node.js"],
        link: "https://tracker.recodemapp.com/",
        github: "#",
        featured: false,
        status: "Live",
        category: "Productivity",
        highlights: ["Role-based Access", "Team Collaboration", "Real-time Updates"]
    },
    {
        title: "Task Tracker Mobile App",
        description: "A cross-platform mobile application for task management built with React Native and Expo. Features offline functionality, push notifications, and seamless synchronization with the web platform.",
        icon: CheckSquare,
        tags: ["React Native", "Expo", "AsyncStorage", "Push Notifications"],
        link: "#",
        github: "#",
        featured: false,
        status: "Live",
        category: "Mobile",
        highlights: ["Cross-platform Development", "Offline Functionality", "Push Notifications", "Real-time Sync"]
    },
    // {
    //     title: "Portfolio Website",
    //     description: "A modern, responsive portfolio website built with Next.js, Framer Motion, and Tailwind CSS. Features smooth animations, dark/light mode, and optimized performance.",
    //     icon: Palette,
    //     tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    //     link: "#",
    //     github: "#",
    //     featured: false,
    //     status: "In Development",
    //     category: "Portfolio",
    //     highlights: ["Smooth Animations", "Dark/Light Mode", "Performance Optimized"]
    // },
    // {
    //     title: "E-commerce API",
    //     description: "A robust RESTful API for e-commerce applications with features like user authentication, product management, order processing, and payment integration.",
    //     icon: Database,
    //     tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Stripe"],
    //     link: "#",
    //     github: "#",
    //     featured: false,
    //     status: "Completed",
    //     category: "Backend",
    //     highlights: ["User Authentication", "Product Management", "Payment Integration"]
    // }
]

const getCategoryColor = (category: string) => {
    const colors = {
        "Enterprise": "from-slate-700 to-gray-800",
        "Education": "from-blue-500 to-cyan-500",
        "E-commerce": "from-green-500 to-emerald-500",
        "Healthcare": "from-purple-500 to-pink-500",
        "Productivity": "from-orange-500 to-red-500",
        "Portfolio": "from-indigo-500 to-purple-500",
        "Backend": "from-gray-600 to-slate-700",
        "Mobile": "from-teal-500 to-cyan-500"
    }
    return colors[category as keyof typeof colors] || "from-gray-500 to-slate-600"
}

export function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="projects" className="py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-24 h-1 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full mx-auto"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        Explore some of my recent work and innovative solutions that showcase my technical expertise
                    </motion.p>
                </motion.div>

                {/* Featured Projects */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {projects.filter(p => p.featured).map((project, index) => {
                        const IconComponent = project.icon
                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                                whileHover={{ y: -8 }}
                            >
                                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-gradient-to-br from-background to-muted/20">
                                    {/* Header with Icon and Category */}
                                    <div className="relative p-6 bg-gradient-to-r from-muted/30 to-background border-b border-border/50">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(project.category)} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                    <IconComponent className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <Badge variant="outline" className="text-xs font-medium">
                                                        {project.category}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <Badge
                                                variant={project.status === "Live" ? "success" : "warning"}
                                                className="text-xs font-semibold"
                                            >
                                                {project.status}
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors duration-300">
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="space-y-6">
                                        <p className="text-muted-foreground leading-relaxed text-base">
                                            {project.description}
                                        </p>

                                        {/* Key Highlights */}
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-semibold text-foreground flex items-center">
                                                <Zap className="h-4 w-4 mr-2 text-blue-500" />
                                                Key Features
                                            </h4>
                                            <div className="grid grid-cols-1 gap-2">
                                                {project.highlights.map((highlight, idx) => (
                                                    <div key={idx} className="flex items-center space-x-2 text-sm">
                                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                                        <span className="text-muted-foreground">{highlight}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="tech" className="text-xs font-medium">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3 pt-4">
                                            <Button
                                                variant="gradient"
                                                size="sm"
                                                className="flex-1 group"
                                                onClick={() => window.open(project.link, '_blank')}
                                            >
                                                <Eye className="mr-2 h-4 w-4" />
                                                View Live
                                            </Button>
                                            {project.github !== "#" && (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="flex-1 group"
                                                    onClick={() => window.open(project.github, '_blank')}
                                                >
                                                    <Github className="mr-2 h-4 w-4" />
                                                    Code
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Other Projects Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-bold text-center mb-8">Other Projects</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.filter(p => !p.featured).map((project, index) => {
                            const IconComponent = project.icon
                            return (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group bg-gradient-to-br from-background to-muted/10">
                                        <CardHeader className="pb-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)} text-white shadow-md`}>
                                                        <IconComponent className="h-4 w-4" />
                                                    </div>
                                                    <div>
                                                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                                                            {project.title}
                                                        </CardTitle>
                                                        <Badge variant="outline" className="text-xs mt-1">
                                                            {project.category}
                                                        </Badge>
                                                    </div>
                                                </div>
                                                <Badge
                                                    variant={project.status === "Live" ? "success" : "warning"}
                                                    className="text-xs"
                                                >
                                                    {project.status}
                                                </Badge>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="space-y-4">
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.slice(0, 3).map((tag) => (
                                                    <Badge key={tag} variant="outline" className="text-xs">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                                {project.tags.length > 3 && (
                                                    <Badge variant="outline" className="text-xs">
                                                        +{project.tags.length - 3} more
                                                    </Badge>
                                                )}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-2 pt-2">
                                                {project.link !== "#" && (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="flex-1 text-xs"
                                                        onClick={() => window.open(project.link, '_blank')}
                                                    >
                                                        <ExternalLink className="mr-1 h-3 w-3" />
                                                        View
                                                    </Button>
                                                )}
                                                {project.github !== "#" && (
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="text-xs"
                                                        onClick={() => window.open(project.github, '_blank')}
                                                    >
                                                        <Github className="h-3 w-3" />
                                                    </Button>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="text-center mt-20"
                >
                    <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-r from-muted/50 to-background">
                        <CardContent className="pt-8 pb-8">
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Rocket className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
                            </div>
                            <p className="text-muted-foreground mb-6">
                                I'm always excited to take on new projects and contribute to innovative solutions.
                                Let's discuss how we can bring your ideas to life!
                            </p>
                            <Button
                                variant="gradient"
                                size="lg"
                                className="group"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                <span>Start a Project</span>
                                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
