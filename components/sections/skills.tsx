"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = {
    "Frontend Development": {
        icon: "🎨",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Redux", "Context API"],
        color: "from-blue-500 to-cyan-500"
    },
    "Backend Development": {
        icon: "⚙️",
        skills: ["Node.js", "Express.js", "GraphQL", "REST APIs", "Microservices", "Serverless", "JWT", "OAuth"],
        color: "from-purple-500 to-pink-500"
    },
    "Database & Cloud": {
        icon: "☁️",
        skills: ["MongoDB", "PostgreSQL", "Firebase", "AWS", "S3", "Lambda", "EC2", "RDS", "DynamoDB"],
        color: "from-green-500 to-emerald-500"
    },
    "DevOps & Tools": {
        icon: "🚀",
        skills: ["Docker", "Git", "CI/CD", "AWS CLI", "CloudFormation", "ECS", "SQS", "API Gateway", "Monitoring"],
        color: "from-orange-500 to-red-500"
    },
    "Testing & Quality": {
        icon: "🧪",
        skills: ["Jest", "React Testing Library", "Playwright", "ESLint", "Prettier", "Husky", "Code Review", "TDD"],
        color: "from-indigo-500 to-purple-500"
    },
    "Soft Skills": {
        icon: "🤝",
        skills: ["Team Leadership", "Agile/Scrum", "Client Communication", "Problem Solving", "Mentoring", "Project Management"],
        color: "from-teal-500 to-cyan-500"
    }
}

export function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="skills" className="py-24">
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
                        Skills & Expertise
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
                        A comprehensive toolkit of technologies and methodologies I use to bring ideas to life
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skillCategories).map(([category, data], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-muted/30">
                                <CardHeader className="text-center pb-4">
                                    <div className="text-4xl mb-2">{data.icon}</div>
                                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                                        {category}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {data.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 + skillIndex * 0.05 }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <Badge
                                                    variant="tech"
                                                    className="text-xs px-3 py-1 cursor-default"
                                                >
                                                    {skill}
                                                </Badge>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="mt-20 text-center"
                >
                    <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-gradient-to-r from-muted/50 to-background">
                        <CardHeader>
                            <CardTitle className="text-2xl">Always Learning & Growing</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="text-muted-foreground text-lg">
                                Technology evolves rapidly, and I&apos;m committed to staying at the forefront.
                                I&apos;m currently exploring and expanding my knowledge in:
                            </p>

                            <div className="flex flex-wrap justify-center gap-3">
                                {[
                                    "Web3 & Blockchain",
                                    "Machine Learning",
                                    "AI Integration",
                                    "Edge Computing",
                                    "Performance Optimization",
                                    "Accessibility",
                                    "Security Best Practices",
                                    "Modern CSS Features"
                                ].map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Badge
                                            variant="outline"
                                            className="text-sm px-4 py-2 border-dashed"
                                        >
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="pt-4">
                                <p className="text-sm text-muted-foreground">
                                    💡 <strong>Pro tip:</strong> The best developers are perpetual students.
                                    I&apos;m always open to learning new technologies and approaches!
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
