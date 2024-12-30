'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  Send,
  MapPin,
  Phone,
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
      featured: true,
    },
    {
      title: 'Norwex',
      description:
        'A comprehensive online shopping platform featuring payment integration, commission-based purchasing, and a dedicated admin application for management.',
      image: '/NORWEX_LOGO_LOCKUP_BLUE_NO_TAG.png',
      tags: ['React.js', 'Tailwind', 'Shopify', 'Firebase', 'Node.js'],
      link: 'https://norwex.eu/',
      github: '#',
      featured: false,
    },
    {
      title: 'Tapouts',
      description:
        'A web application designed to create and manage sessions aimed at reducing anxiety in children aged 4 to 16.',
      image: '/Tapoutslogo.png',
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
      'Redux',
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

  return (
    <div className='min-h-screen bg-gradient-to-br from-white to-gray-50'>
      {/* Navigation */}
      <nav className='fixed w-full bg-gray-800 text-white backdrop-blur-md z-50 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex-shrink-0 flex items-center'>
              <span className='text-2xl font-bold bg-gradient-to-r from-white-600 to-indigo-600 bg-clip-text text-transparent'>
                SA
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-white-700 hover:text-white-600 px-3 py-2 text-sm font-medium transition-colors'
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden flex items-center'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-white-700 hover:text-white-600 focus:outline-none'
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
          <div className='md:hidden bg-white border-t'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50'
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
        className='min-h-screen flex items-center bg-gradient-to-br from-white to-grey-50'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-16 items-center'>
            <div className='space-y-8 text-center lg:text-left'>
              <div className='space-y-4'>
                <div className='inline-block'>
                  <span className='bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full'>
                    Available for Work
                  </span>
                </div>

                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500'>
                  Santhosh Akash
                </h1>

                <p className='text-xl text-gray-600 max-w-2xl'>
                  Full Stack Developer crafting exceptional digital experiences
                  with modern technologies and creative solutions
                </p>
              </div>

              <div className='flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start'>
                <a
                  href='#contact'
                  className='group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all w-full sm:w-auto text-center justify-center'
                >
                  Get in touch
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </a>

                <a
                  href='#projects'
                  className='px-6 py-3 border-2 border-gray-300 hover:border-blue-400 rounded-lg font-medium text-gray-700 hover:text-blue-600 transition-colors w-full sm:w-auto text-center'
                >
                  View projects
                </a>
              </div>

              <div className='flex items-center gap-6 justify-center lg:justify-start'>
                <a
                  href='https://github.com/santhoshakash'
                  className='text-gray-600 hover:text-blue-600 transition-colors'
                >
                  <Github className='w-6 h-6' />
                </a>
                <a
                  href='https://www.linkedin.com/in/santhosh-akash-6879371bb'
                  className='text-gray-600 hover:text-blue-600 transition-colors'
                >
                  <Linkedin className='w-6 h-6' />
                </a>
                <a
                  href='mailto:santhoshakash1145@gmail.com'
                  className='text-gray-600 hover:text-blue-600 transition-colors'
                >
                  <Mail className='w-6 h-6' />
                </a>
              </div>
            </div>

            <div className='mt-12 lg:mt-0 flex justify-center lg:justify-end'>
              <div className='relative w-64 h-64 lg:w-80 lg:h-80'>
                <div className='absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-2xl transform rotate-3 scale-105 opacity-10 blur-2xl'></div>
                <div className='relative rounded-2xl overflow-hidden shadow-2xl w-full h-full'>
                  <img
                    src='/753fd1e1-9282-4416-9394-0c69642db5fa.JPEG'
                    alt='Profile'
                    className='w-full h-full object-cover'
                  />
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
      <section
        id='projects'
        className='py-20 bg-gray-50'
        ref={projectsSectionRef}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 inline-block'>
              Featured Projects
            </h2>
            <p className='mt-4 text-gray-600 text-lg max-w-2xl mx-auto'>
              Here are some of my recent works that showcase my skills and
              experience in building modern web applications
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hidden-scale'
                data-animation='animate-fade-in-scale'
                data-hidden='hidden-scale'
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image with Overlay */}
                <div className='relative h-64 overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10' />
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300'
                  />
                  {/* Tags Overlay */}
                  <div className='absolute top-4 left-4 z-20 flex flex-wrap gap-2'>
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className='px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className='p-6'>
                  <div className='flex justify-between items-start mb-4'>
                    <h3 className='text-xl font-bold text-gray-900'>
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className='px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full'>
                        Featured
                      </span>
                    )}
                  </div>
                  <p className='text-gray-600 mb-6'>{project.description}</p>

                  {/* Action Buttons */}
                  <div className='flex gap-4'>
                    <a
                      href={project.link}
                      className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors'
                    >
                      View Live
                      <ExternalLink className='w-4 h-4' />
                    </a>
                    {/* <a
                      href={project.github}
                      className='flex items-center gap-2 px-4 py-2 border-2 border-gray-200 text-gray-700 rounded-lg font-medium hover:border-blue-400 hover:text-blue-600 transition-colors'
                    >
                      Source Code
                      <Github className='w-4 h-4' />
                    </a> */}
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
      <section
        id='contact'
        className='py-20 bg-gradient-to-b from-white to-gray-50'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 inline-block'>
              Let&apos;s Connect
            </h2>
            <p className='mt-4 text-gray-600 text-lg max-w-2xl mx-auto'>
              I&apos;m always excited to connect with fellow developers,
              potential clients, and collaborators
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact Info */}
            <div className='space-y-8'>
              <div className='bg-white p-8 rounded-2xl shadow-lg'>
                <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                  Get in Touch
                </h3>

                <div className='space-y-6'>
                  <div className='flex items-center gap-4'>
                    <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100'>
                      <Mail className='w-6 h-6 text-blue-600' />
                    </div>
                    <div>
                      <p className='text-sm text-gray-500'>Email</p>
                      <a
                        href='mailto:santhoshakash1145@gmail.com'
                        className='text-gray-900 hover:text-blue-600 transition-colors'
                      >
                        santhoshakash1145@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                    <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100'>
                      <MapPin className='w-6 h-6 text-blue-600' />
                    </div>
                    <div>
                      <p className='text-sm text-gray-500'>Location</p>
                      <p className='text-gray-900'>Chennai, India</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                    <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100'>
                      <Phone className='w-6 h-6 text-blue-600' />
                    </div>
                    <div>
                      <p className='text-sm text-gray-500'>Phone</p>
                      <a
                        href='tel:+1234567890'
                        className='text-gray-900 hover:text-blue-600 transition-colors'
                      >
                        +91 8940368970
                      </a>
                    </div>
                  </div>
                </div>

                <div className='mt-8 pt-8 border-t'>
                  <p className='text-gray-600 mb-4'>
                    Connect with me on social media
                  </p>
                  <div className='flex gap-4'>
                    <a
                      href='https://github.com/santhoshakash'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      <Github className='w-5 h-5' />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/santhosh-akash-6879371bb'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      <Linkedin className='w-5 h-5' />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-white p-8 rounded-2xl shadow-lg'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Send a Message
              </h3>
              <form className='space-y-6'>
                <div className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      placeholder='enter full name...'
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      placeholder='enter email here...'
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder='Your message here...'
                      className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-none'
                    ></textarea>
                  </div>
                </div>

                <button
                  type='submit'
                  className='w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-colors'
                >
                  Send Message
                  <Send className='w-4 h-4' />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-800 text-white py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-center md:text-left mb-4 md:mb-0'>
              <p>&copy; 2024 Santhosh Akash. All rights reserved.</p>
            </div>
            <div className='flex space-x-4'>
              <a
                href='https://github.com/santhoshakash'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-400'
              >
                <Github className='h-6 w-6' />
              </a>
              <a
                href='https://www.linkedin.com/in/santhosh-akash-6879371bb'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-400'
              >
                <Linkedin className='h-6 w-6' />
              </a>
              <a
                href='mailto:santhoshakash1145@gmail.com'
                className='hover:text-blue-400'
              >
                <Mail className='h-6 w-6' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
