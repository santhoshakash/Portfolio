"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
]

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com",
        icon: Github,
        color: "hover:text-gray-400"
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/santhosh-akash-6879371bb/",
        icon: Linkedin,
        color: "hover:text-blue-500"
    },
    {
        name: "Email",
        href: "mailto:santhoshakash1145@gmail.com",
        icon: Mail,
        color: "hover:text-red-500"
    }
]

export function Footer() {
    return (
        <footer className="bg-background border-t border-border/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">SA</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Santhosh Akash</h3>
                                    <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground max-w-md">
                                Passionate about creating innovative digital solutions that make a difference.
                                Let's build something amazing together!
                            </p>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <div className="space-y-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg font-semibold">Connect</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`p-3 rounded-xl bg-muted border border-border text-muted-foreground transition-colors ${link.color}`}
                                    title={link.name}
                                >
                                    <link.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12 pt-8 border-t border-border/40"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <p className="text-sm text-muted-foreground">
                                © 2024 Santhosh Akash. All rights reserved.
                            </p>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                            <span>using Next.js & Tailwind CSS</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
