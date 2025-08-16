"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        value: "santhoshakash1145@gmail.com",
        link: "mailto:santhoshakash1145@gmail.com",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+91 8940368970",
        link: "tel:+918940368970",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Remote / Worldwide",
        link: "#",
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: Clock,
        title: "Availability",
        value: "Available for opportunities",
        link: "#",
        color: "from-orange-500 to-red-500"
    }
]

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com",
        icon: "🐙",
        color: "hover:text-gray-400"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/santhosh-akash-6879371bb/",
        icon: "💼",
        color: "hover:text-blue-500"
    },
]

export function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            // Send email using your existing API
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.name,
                    email: formData.email,
                    message: `Subject: ${formData.subject}\n\nMessage: ${formData.message}`
                }),
            })

            if (!response.ok) {
                throw new Error('Failed to send email')
            }

            const result = await response.json()

            if (result.success) {
                setSubmitStatus('success')
                setFormData({ name: "", email: "", subject: "", message: "" })

                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000)
            } else {
                throw new Error('Email sending failed')
            }
        } catch (error) {
            console.error('Error sending email:', error)
            setSubmitStatus('error')
            setTimeout(() => setSubmitStatus('idle'), 5000)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="contact" className="py-24 bg-muted/30">
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
                        Get In Touch
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
                        I&apos;m always excited to connect with fellow developers, potential clients, and collaborators.
                        Let&apos;s build something amazing together!
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                Whether you have a project in mind, want to discuss potential opportunities,
                                or just want to say hello, I&apos;d love to hear from you. I&apos;m always open to
                                new collaborations and interesting conversations.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                    whileHover={{ x: 8 }}
                                >
                                    <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                                        <CardContent className="p-4">
                                            <div className="flex items-center space-x-4">
                                                <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color}`}>
                                                    <info.icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                                                        {info.title}
                                                    </h4>
                                                    <a
                                                        href={info.link}
                                                        className="text-foreground hover:text-blue-600 transition-colors"
                                                    >
                                                        {info.value}
                                                    </a>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold">Follow Me</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                                        whileHover={{ y: -4, scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-3 rounded-xl bg-muted border border-border text-2xl transition-colors ${link.color}`}
                                        title={link.name}
                                    >
                                        {link.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Status */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 1.8 }}
                            className="pt-6"
                        >
                            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
                                <CardContent className="p-6 text-center">
                                    <div className="flex items-center justify-center space-x-2 mb-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium text-green-700 dark:text-green-400">
                                            Available for opportunities
                                        </span>
                                    </div>
                                    <p className="text-sm text-green-600 dark:text-green-300">
                                        I&apos;m currently accepting new projects and collaborations
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl">Send me a message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">
                                                Name *
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Your full name"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">
                                                Email *
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">
                                            Subject *
                                        </label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="What's this about?"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">
                                            Message *
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell me about your project or how I can help..."
                                            rows={6}
                                            required
                                        />
                                    </div>

                                    {/* Status Messages */}
                                    {submitStatus === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center space-x-2 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                            <span className="text-green-800 dark:text-green-200">
                                                Message sent successfully! I&apos;ll get back to you soon.
                                            </span>
                                        </motion.div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center space-x-2 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg"
                                        >
                                            <AlertCircle className="w-5 h-5 text-red-600" />
                                            <span className="text-red-800 dark:text-red-200">
                                                Failed to send message. Please try again or contact me directly.
                                            </span>
                                        </motion.div>
                                    )}

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full group"
                                        variant="gradient"
                                        size="lg"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                <span>Sending Message...</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center space-x-2">
                                                <span>Send Message</span>
                                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="text-center mt-20"
                >
                    <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-gradient-to-r from-muted/50 to-background">
                        <CardContent className="pt-8 pb-8">
                            <h3 className="text-2xl font-bold mb-4">Why Work With Me?</h3>
                            <div className="grid md:grid-cols-3 gap-6 mt-6">
                                {[
                                    {
                                        title: "Fast Response",
                                        description: "I typically respond within 24 hours",
                                        icon: "⚡"
                                    },
                                    {
                                        title: "Quality Work",
                                        description: "Clean, maintainable, and scalable code",
                                        icon: "✨"
                                    },
                                    {
                                        title: "Ongoing Support",
                                        description: "I&apos;m here for you even after project completion",
                                        icon: "🤝"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className="text-4xl mb-2">{item.icon}</div>
                                        <h4 className="font-semibold mb-2">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
