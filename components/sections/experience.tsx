"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
    {
        role: "Software Developer",
        company: "Codem",
        period: "2021 - Present",
        location: "Chennai, India",
        description: "Develop and maintain enterprise-grade applications using React and Node.js, focusing on scalability, performance, and user experience. Collaborate with cross-functional teams to design and implement innovative solutions that meet business objectives.",
        skills: ["React", "Node.js", "Express.js", "Next.js", "AWS", "MongoDB", "PostgreSQL"],
        highlights: [
            "Architected microservices infrastructure",
            "Mentored junior developers and conducted code reviews",
            "Led development of 3 major product features",
            "Boosted admin engagement by 85% for Enrollment Form App as sole developer",
            "Designed secure customer reward features for Referral Shopify App with cart integration",
            "Developed scalable RESTful APIs using Node.js for seamless backend-frontend integration",
            "Enhanced data integrity with validation rules and robust error-handling mechanisms",
            "Improved backend performance by optimizing query execution and reducing response times"
        ],
        link: "#",
        featured: true
    },
    {
        role: "Software Development Specialist (Contract)",
        company: "Embassy of Things (eot.ai)",
        period: "2023 - 2024",
        location: "Remote, USA Los Angeles",
        description: "As part of the Software Development Specialist team, worked on research, development and implementation of Software Development projects for EOT's Industrial Data Fabric. This enables industrial enterprises to modernize and build their own operational cloud historian, industrial digital twin, or industrial data lake.",
        skills: ["Node.js", "AWS", "Industrial IoT", "Data Processing", "Cloud Architecture"],
        highlights: [
            "Built responsive web applications for 10+ enterprise clients",
            "Reduced loading time by 50% through optimization",
            "Implemented real-time features using WebSocket",
            "Developed data visualization dashboards for industrial data"
        ],
        link: "#",
        featured: false
    },
    {
        role: "Freelance Developer",
        company: "Various Clients",
        period: "2022 - Present",
        location: "Remote",
        description: "Working with diverse clients to deliver custom web solutions, from small business websites to complex e-commerce platforms. Specializing in modern web technologies and best practices.",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Stripe", "Node.js", "Express.js", "AWS", "PostgreSQL"],
        highlights: [
            "Achieved 100% client satisfaction rate",
            "Specialized in e-commerce and educational platforms",
            "Provided ongoing maintenance and support services"
        ],
        link: "#",
        featured: false
    }
]

export function Experience() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="experience" className="py-24">
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
                        Work Experience
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
                        My professional journey and contributions in the tech industry
                    </motion.p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-cyan-200 hidden lg:block" />

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-background shadow-lg z-10 hidden lg:block" />

                                {/* Content Card */}
                                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                                    }`}>
                                    <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${exp.featured ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20' : ''
                                        }`}>
                                        <CardHeader>
                                            <div className="flex items-start justify-between">
                                                <div className="space-y-2">
                                                    <div className="flex items-center space-x-2">
                                                        <Building2 className="w-5 h-5 text-blue-600" />
                                                        <span className="font-semibold text-blue-600">{exp.company}</span>
                                                        {exp.featured && (
                                                            <Badge variant="success" className="text-xs">
                                                                Current
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                                                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                                        <div className="flex items-center space-x-1">
                                                            <Calendar className="w-4 h-4" />
                                                            <span>{exp.period}</span>
                                                        </div>
                                                        <div className="flex items-center space-x-1">
                                                            <MapPin className="w-4 h-4" />
                                                            <span>{exp.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="space-y-4">
                                            <p className="text-muted-foreground leading-relaxed">
                                                {exp.description}
                                            </p>

                                            {/* Skills */}
                                            <div className="space-y-3">
                                                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                                                    Technologies Used
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.skills.map((skill) => (
                                                        <Badge key={skill} variant="outline" className="text-xs">
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Key Achievements */}
                                            <div className="space-y-3">
                                                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                                                    Key Achievements
                                                </h4>
                                                <div className="space-y-2">
                                                    {exp.highlights.map((highlight, highlightIndex) => (
                                                        <motion.div
                                                            key={highlightIndex}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                            transition={{ duration: 0.5, delay: 1.2 + index * 0.2 + highlightIndex * 0.1 }}
                                                            className="flex items-start space-x-2 text-sm text-muted-foreground"
                                                        >
                                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                                            <span>{highlight}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Company Link */}
                                            {exp.link !== "#" && (
                                                <div className="pt-2">
                                                    <a
                                                        href={exp.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                                                    >
                                                        <span>Visit Company</span>
                                                        <ExternalLink className="w-3 h-3" />
                                                    </a>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="text-center mt-20"
                >
                    <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-r from-muted/50 to-background">
                        <CardContent className="pt-8 pb-8">
                            <h3 className="text-2xl font-bold mb-4">Ready for New Challenges</h3>
                            <p className="text-muted-foreground mb-6">
                                I'm always excited to take on new projects and contribute to innovative solutions.
                                Let's discuss how we can work together!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href='https://drive.google.com/file/d/1aMolOf_EwP0tPD-tzZo90Mc1O8wmP69h/view?usp=drive_link'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-indigo-700 transition-all duration-300"
                                >
                                    <span>Download Resume</span>
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="inline-flex items-center justify-center px-6 py-3 border border-border bg-background text-foreground rounded-lg font-semibold hover:bg-muted transition-all duration-300"
                                >
                                    <span>Let's Connect</span>
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
