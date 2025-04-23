'use client';

import React, { useEffect, useRef, useState } from 'react';
// import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'; // Importing icons from react-icons
// import TechIcon from './path/to/TechIcon';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ArrowRight,
  Building2,
  Calendar,
  // Send,
  // MapPin,
  Phone,
  // TextSearchIcon,
  Terminal,
  FileText,
} from 'lucide-react';

interface IntersectionObserverEntry {
  isIntersecting: boolean;
  target: Element;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const experienceSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll('.hidden-left, .hidden-right, .hidden-scale')
            .forEach((el: Element) => {
              if (el instanceof HTMLElement) {
                el.classList.remove(
                  'hidden-left',
                  'hidden-right',
                  'hidden-scale'
                );
                el.classList.add(el.dataset.animation || '');
              }
            });
        } else {
          entry.target
            .querySelectorAll(
              '.animate-slide-in-left, .animate-slide-in-right, .animate-fade-in-scale'
            )
            .forEach((el: Element) => {
              if (el instanceof HTMLElement) {
                el.classList.remove(
                  'animate-slide-in-left',
                  'animate-slide-in-right',
                  'animate-fade-in-scale'
                );
                el.classList.add(el.dataset.hidden || '');
              }
            });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (experienceSectionRef.current) {
      observer.observe(experienceSectionRef.current);
    }
    if (projectsSectionRef.current) {
      observer.observe(projectsSectionRef.current);
    }

    return () => {
      if (experienceSectionRef.current) {
        observer.unobserve(experienceSectionRef.current);
      }
      if (projectsSectionRef.current) {
        observer.unobserve(projectsSectionRef.current);
      }
    };
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const experiences = [
    {
      role: 'Software Developer',
      company: 'Codem',
      period: '2021 - Present',
      description:
        'Develop and maintain enterprise-grade applications using React and Node.js, focusing on scalability, performance, and user experience. Collaborate with cross-functional teams to design and implement innovative solutions that meet business objectives.',
      skills: ['React', 'Node.js', 'Express.js', 'Next.js', 'AWS'],
      highlights: [
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Architected microservices infrastructure serving 1M+ users',
        'Mentored junior developers and conducted code reviews',
      ],
    },

    {
      role: 'Software Development Specialist (contract)',
      company: 'Embassy of Things (eot.ai)',
      period: '2023 - 2024',
      description: `As part of the Software Development Specialist team, works on research, development and implementation of Software Development projects for EOT's Industrial Data Fabric enables industrial enterprises to modernize and build their own operational cloud historian, industrial digital twin, or industrial data lake.`,
      skills: ['Node.js', 'AWS'],
      highlights: [
        'Built responsive web applications for 10+ enterprise clients',
        'Reduced loading time by 50% through optimization',
        'Implemented real-time features using WebSocket',
      ],
    },
  ];

  const projects = [
    {
      title: 'Rubriks',
      description:
        'An educational application designed to assist faculties and students in creating and completing assessments efficiently.',
      image: '/placeholder-600x400.png',
      tags: ['React', 'HTML', 'CSS', 'Firebase'],
      link: '#',
      github: '#',
      featured: false,
    },
    {
      title: 'Norwex',
      description:
        'A comprehensive online shopping platform featuring payment integration, commission-based purchasing, and a dedicated admin application for management.',
      image: '/Norwex_logo.svg',
      tags: ['React.js', 'Tailwind', 'Shopify', 'Firebase', 'Node.js'],
      link: 'https://norwex.eu/',
      github: '#',
      featured: false,
    },
    {
      title: 'Tapouts',
      description:
        'A web application designed to create and manage sessions aimed at reducing anxiety in children aged 4 to 16.',
      image: '/Tapouts_logo.svg',
      tags: ['Next.js', 'Tailwind', 'Firebase'],
      link: 'https://tapouts.com/',
      github: '#',
      featured: false,
    },
    {
      title: 'Task Tracker',
      description:
        'A web application for creating and assigning tasks, offering a complete task lifecycle management system with distinct roles for Admin, Manager, Lead, and Developer.',
      image:
        '/pngtree-3d-illustration-creative-conceptual-art-todo-list-task-manager-png-image_7136762.png',
      tags: ['React.js', 'Tailwind', 'Node.js'],
      link: 'https://tracker.recodemapp.com/',
      github: '#',
      featured: false,
    },
  ];

  // const skills = [
  //   'JavaScript',
  //   'TypeScript',
  //   'React',
  //   'Node.js',
  //   'AWS',
  //   'MongoDB',
  //   'PostgreSQL',
  //   'GraphQL',
  //   'Docker',
  //   'Git',
  //   'Redux',
  //   'Express.js',
  //   'Next.js',
  //   'Tailwind CSS',
  // ];

  const skillCategories = {
    Frontend: [
      'JavaScript',
      'TypeScript',
      'React',
      'context',
      'Next.js',
      'Tailwind CSS',
    ],
    Backend: ['Node.js', 'Express.js', 'GraphQL'],
    Database: ['Firebase', 'MongoDB', 'PostgreSQL'],
    DevOps: [
      'AWS',
      'S3',
      'Lambda',
      'SQS',
      'Api Gateway',
      'Git',
      'ECS',
      'EC2',
      'EFS',
    ],
  };

  interface FormData {
    fullName: string;
    email: string;
    message: string;
  }

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'santhoshakash1145@gmail.com',
          subject: `New Contact Form Submission from ${formData.fullName}`,
          ...formData,
        }),
      });

      if (!response.ok) throw new Error('Failed to send email');

      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', message: '' });

      // Hide the message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Failed to send email:', error);

      // Hide the error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white'>
      {/* Navigation */}
      <nav className='fixed w-full backdrop-blur-md z-50 border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex-shrink-0 flex items-center'>
              <span className='text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent'>
                SA
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors'
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden flex items-center'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-gray-300 hover:text-white focus:outline-none'
              >
                {isMenuOpen ? (
                  <X className='h-6 w-6' />
                ) : (
                  <Menu className='h-6 w-6' />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden backdrop-blur-md border-t border-white/10'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5'
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id='home'
        className='relative min-h-screen flex items-center overflow-hidden'
      >
        {/* Animated Background Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-float'></div>
          <div className='absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-float-delayed'></div>

          {/* Geometric Grid Pattern */}
          <div className='absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]'></div>
        </div>

        {/* Floating Tech Icons */}
        <div className='absolute inset-0 flex items-center justify-center'>
          {['react', 'node', 'nextjs', 'aws', 'aws-lambda', 'firebase'].map(
            (icon, i) => (
              <div
                key={icon}
                className={`absolute animate-float-${
                  i % 3 === 0 ? 'slow' : i % 3 === 1 ? 'medium' : 'fast'
                }`}
                style={{
                  left: `${Math.random() * 80 + 10}%`, // Keep icons within 10-90% of the container
                  top: `${Math.random() * 80 + 10}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  opacity: 0.8, // Increased opacity
                }}
              >
                <img
                  src={`/icons/${icon}.svg`}
                  alt={`${icon} icon`}
                  className='w-12 h-12 filter brightness-150 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                />
              </div>
            )
          )}
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='lg:grid lg:grid-cols-12 lg:gap-12 items-center'>
            {/* Content Section */}
            <div className='col-span-7 space-y-8 z-10'>
              {/* Status Badge */}
              <div className='inline-flex items-center space-x-2 animate-fade-in'>
                <span className='flex h-3 w-3'>
                  <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500'></span>
                </span>
                <span className='bg-white/10 backdrop-blur-lg text-green-400 text-sm font-medium px-4 py-2 rounded-full border border-green-400/20 shadow-lg shadow-green-500/10'>
                  🚀 Available for Opportunities
                </span>
              </div>

              {/* Main Content */}
              <div className='space-y-6'>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold animate-slide-up'>
                  <span className='block bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent'>
                    Santhosh
                  </span>
                  <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                    Akash
                  </span>
                </h1>

                <p className='text-xl text-gray-300 max-w-2xl leading-relaxed animate-slide-up delay-100'>
                  Architecting digital solutions through full-stack expertise.
                  Specializing in scalable web applications and immersive user
                  experiences powered by modern technologies.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row items-center gap-4 animate-fade-in delay-200'>
                <a
                  href='#contact'
                  className='group relative px-8 py-4 w-full sm:w-auto text-center transition-transform hover:scale-105'
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl transform group-hover:rotate-1 transition-all duration-300'></div>
                  <span className='relative text-white font-bold flex items-center justify-center gap-2'>
                    Start Collaboration
                    <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </span>
                </a>

                <a
                  href='#projects'
                  className='px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400 rounded-xl font-medium text-white hover:text-cyan-400 transition-all w-full sm:w-auto text-center shadow-xl shadow-blue-500/10 hover:shadow-cyan-500/20'
                >
                  Explore Work
                </a>
              </div>

              {/* Social Links */}
              <div className='flex items-center gap-6 animate-fade-in delay-300'>
                {[
                  { icon: Github, url: 'https://github.com' },
                  {
                    icon: Linkedin,
                    url: 'https://www.linkedin.com/in/santhosh-akash-6879371bb/',
                  },
                  { icon: FileText, url: '/resume', title: 'Resume' },
                  { icon: Mail, url: 'mailto:santhoshakash1145@gmail.com' },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    className='group p-3 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-cyan-400 transition-all shadow-lg shadow-blue-500/10 hover:shadow-cyan-500/20'
                    title={link.title || ''}
                  >
                    <link.icon className='w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors' />
                  </a>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className='col-span-5 mt-12 lg:mt-0 relative animate-slide-left'>
              <div className='relative rounded-3xl overflow-hidden transform perspective-1000 hover:rotate-y-6 transition-all duration-500'>
                {/* Remove backdrop-blur-sm from the overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10'></div>
                <img
                  src='/professional-profile.JPEG'
                  alt='Santhosh Akash - Full Stack Developer'
                  className='w-full h-auto object-cover rounded-3xl shadow-2xl'
                  width={500} // Add specific dimensions
                  height={600}
                />
                <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent'>
                  <div className='flex items-center space-x-2'>
                    <Terminal className='w-5 h-5 text-cyan-400' />
                    <code className='text-sm font-mono text-gray-200'>
                      Currently working on: Node.js:22 + Aws services
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='py-20 bg-gradient-to-b from-white to-gray-50'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column - About Text */}
            <div className='space-y-6'>
              <div className='inline-block'>
                <h2 className='text-4xl font-bold text-gray-900 mb-2'>
                  About Me
                </h2>
                <div className='h-1 w-20 bg-blue-600 rounded-full'></div>
              </div>

              <div className='prose prose-lg text-gray-600 space-y-4'>
                <p className='leading-relaxed'>
                  With over three years of experience in web development and
                  eCommerce, I am passionate about crafting scalable, efficient,
                  and user-centric applications that address real-world
                  challenges.
                </p>

                <p className='leading-relaxed'>
                  My expertise includes building robust web applications for
                  eCommerce platforms, enabling seamless user experiences and
                  driving business growth. I have also developed
                  high-performance server solutions for industries handling
                  massive datasets, such as oil and gas, leveraging AWS tools to
                  ensure reliability, scalability, and efficiency.
                </p>

                <p className='leading-relaxed'>
                  In addition to my technical skills, I have a strong background
                  in product creation, working closely with teams to design and
                  deliver innovative solutions tailored to unique client needs.
                </p>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className='bg-white rounded-2xl shadow-lg p-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Technical Expertise
              </h3>

              <div className='space-y-8'>
                {Object.entries(skillCategories).map(
                  ([category, categorySkills]) => (
                    <div key={category}>
                      <h4 className='text-lg font-semibold text-gray-700 mb-3'>
                        {category}
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {categorySkills.map((skill, index) => (
                          <span
                            key={index}
                            className='px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 
                                 text-blue-700 rounded-lg text-sm font-medium
                                 border border-blue-100 hover:shadow-md transition-shadow
                                 cursor-default'
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className='mt-16 flex justify-center'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl'>
              <div className='bg-white p-6 rounded-xl shadow-md text-center'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>3+</div>
                <div className='text-gray-600'>Years Experience</div>
              </div>
              <div className='bg-white p-6 rounded-xl shadow-md text-center'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>6+</div>
                <div className='text-gray-600'>Projects Completed</div>
              </div>
              <div className='bg-white p-6 rounded-xl shadow-md text-center'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>10+</div>
                <div className='text-gray-600'>Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20' ref={projectsSectionRef}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent'>
              Featured Projects
            </h2>
            <p className='mt-4 text-gray-300'>Explore some of my recent work</p>
          </div>

          <div className='grid gap-8 md:grid-cols-2'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-white/10 hover:border-cyan-400/50 hidden-scale'
                data-animation='animate-fade-in-scale'
                data-hidden='hidden-scale'
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image with Overlay */}
                <div className='relative h-64 overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10' />
                  <img
                    src={project.image}
                    alt={project.title}
                    className='object-cover transform group-hover:scale-105 transition-transform duration-300'
                    width={592}
                    height={256}
                  />
                </div>

                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-white mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-gray-300 mb-4'>{project.description}</p>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className='px-3 py-1 text-sm bg-white/5 text-gray-300 rounded-full border border-white/10'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-4'>
                    <a
                      href={project.link}
                      className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all'
                    >
                      View Live
                      <ExternalLink className='w-4 h-4' />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id='experience'
        ref={experienceSectionRef}
        className='py-20 bg-gradient-to-b from-gray-50 to-white'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 inline-block'>
              Work Experience
            </h2>
            <p className='mt-4 text-gray-600 text-lg max-w-2xl mx-auto'>
              My professional journey and contributions in the tech industry
            </p>
          </div>

          <div className='space-y-12'>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className='relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow'
              >
                {index !== experiences.length - 1 && (
                  <div className='absolute left-1/2 bottom-0 w-px h-12 bg-gradient-to-b from-blue-200 to-transparent transform translate-y-full' />
                )}

                <div className='grid md:grid-cols-4 gap-8'>
                  {/* Left column - Company info */}
                  <div
                    className='md:col-span-1 hidden-left'
                    data-animation='animate-slide-in-left'
                    data-hidden='hidden-left'
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className='space-y-4'>
                      <div className='flex items-center gap-2 text-blue-600'>
                        <Building2 className='w-5 h-5' />
                        <span className='font-semibold'>{exp.company}</span>
                      </div>
                      <div className='flex items-center gap-2 text-gray-500'>
                        <Calendar className='w-5 h-5' />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right column - Role details */}
                  <div
                    className='md:col-span-3 hidden-right'
                    data-animation='animate-slide-in-right'
                    data-hidden='hidden-right'
                    style={{ transitionDelay: `${index * 200 + 100}ms` }}
                  >
                    <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                      {exp.role}
                    </h3>
                    <p className='text-gray-600 mb-6'>{exp.description}</p>

                    {/* Skills */}
                    <div className='mb-6'>
                      <div className='flex flex-wrap gap-2'>
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className='px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium'
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    {/* <div className='space-y-3'>
                      <h4 className='font-semibold text-gray-900'>
                        Key Highlights:
                      </h4>
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className='flex items-start gap-2 text-gray-600'
                        >
                          <ArrowRight className='w-5 h-5 text-blue-500 mt-1 flex-shrink-0' />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className='relative'>
        {/* Floating Contact Icons */}
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
          {['mail', 'phone', 'message'].map((icon, i) => (
            <div
              key={icon}
              className={`absolute animate-float-${
                i % 3 === 0 ? 'slow' : i % 3 === 1 ? 'medium' : 'fast'
              }`}
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: 0.4,
              }}
            >
              <img
                src={`/icons/${icon}.svg`}
                alt={`${icon} icon`}
                className='w-8 h-8 filter brightness-75'
              />
            </div>
          ))}
        </div>
        <section id='contact' className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent'>
                Get in Touch
              </h2>
              <p className='mt-4 text-gray-300'>
                I&apos;m always excited to connect with fellow developers,
                potential clients, and collaborators
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className='grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12'>
              {/* Email Card */}
              <div className='bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition-all'>
                <div className='flex items-center gap-4'>
                  <div className='p-3 bg-blue-500/10 rounded-lg'>
                    <Mail className='w-6 h-6 text-blue-400' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-white mb-1'>
                      Email
                    </h3>
                    <a
                      href='mailto:santhoshakash1145@gmail.com'
                      className='text-gray-300 hover:text-cyan-400 transition-colors'
                    >
                      santhoshakash1145@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className='bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition-all'>
                <div className='flex items-center gap-4'>
                  <div className='p-3 bg-blue-500/10 rounded-lg'>
                    <Phone className='w-6 h-6 text-blue-400' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-white mb-1'>
                      Phone
                    </h3>
                    <a
                      href='tel:+919876543210' // Replace with your actual phone number
                      className='text-gray-300 hover:text-cyan-400 transition-colors'
                    >
                      +91 8940368970{' '}
                      {/* Replace with your actual phone number */}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='max-w-2xl mx-auto'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <input
                    type='text'
                    name='fullName'
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder='Full Name'
                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400'
                    required
                  />
                </div>
                <div>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder='Email Address'
                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400'
                    required
                  />
                </div>
                <div>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder='Your Message'
                    rows={4}
                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400'
                    required
                  ></textarea>
                </div>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all disabled:opacity-50'
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className='py-8 border-t border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-gray-300 mb-4 md:mb-0'>
              © 2024 Santhosh Akash. All rights reserved.
            </div>
            <div className='flex space-x-6'>
              {[
                { icon: Github, url: 'https://github.com' },
                {
                  icon: Linkedin,
                  url: 'https://www.linkedin.com/in/santhosh-akash-6879371bb',
                },
                { icon: Mail, url: 'mailto:santhoshakash1145@gmail.com' },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <link.icon className='h-6 w-6' />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
