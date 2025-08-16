"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
    { label: "Years Experience", value: "3+", color: "from-blue-500 to-cyan-500" },
    { label: "Projects Completed", value: "6+", color: "from-purple-500 to-pink-500" },
    { label: "Technologies", value: "10+", color: "from-green-500 to-emerald-500" },
    { label: "Happy Clients", value: "5+", color: "from-orange-500 to-red-500" },
]

const highlights = [
    "Full-stack web development with modern frameworks",
    "Cloud architecture and AWS services expertise",
    "E-commerce platform development",
    "Performance optimization and scalability",
    "Team collaboration and mentorship",
    "Agile development methodologies"
]

export function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="about" className="py-24 bg-muted/30">
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
                        About Me
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
                        Passionate about creating innovative solutions that make a difference
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="prose prose-lg text-muted-foreground space-y-6">
                            <p className="leading-relaxed text-lg">
                                With over three years of experience in web development and eCommerce,
                                I am passionate about crafting scalable, efficient, and user-centric
                                applications that address real-world challenges.
                            </p>

                            <p className="leading-relaxed text-lg">
                                My expertise includes building robust web applications for eCommerce
                                platforms, enabling seamless user experiences and driving business growth.
                                I have also developed high-performance server solutions for industries
                                handling massive datasets, such as oil and gas, leveraging AWS tools to
                                ensure reliability, scalability, and efficiency.
                            </p>

                            <p className="leading-relaxed text-lg">
                                In addition to my technical skills, I have a strong background in
                                product creation, working closely with teams to design and deliver
                                innovative solutions tailored to unique client needs.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Key Highlights</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {highlights.map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                        className="flex items-center space-x-2 text-sm text-muted-foreground"
                                    >
                                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                        <span>{highlight}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 1.5 }}
                        >
                            <Button
                                variant="gradient"
                                size="lg"
                                className="group"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                <span>Let&apos;s Work Together</span>
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Stats and Skills Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="space-y-8"
                    >
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="text-center"
                                >
                                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Skills Preview */}
                        <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/50">
                            <CardHeader>
                                <CardTitle className="text-center">Technical Expertise</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">Frontend</span>
                                        <span className="text-xs text-muted-foreground">90%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: "90%" } : {}}
                                            transition={{ duration: 1, delay: 1.8 }}
                                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">Backend</span>
                                        <span className="text-xs text-muted-foreground">95%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: "95%" } : {}}
                                            transition={{ duration: 1, delay: 2 }}
                                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">DevOps</span>
                                        <span className="text-xs text-muted-foreground">80%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: "80%" } : {}}
                                            transition={{ duration: 1, delay: 2.2 }}
                                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
