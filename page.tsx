"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Code, Mail, Linkedin, Github, Download, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode")
    if (savedTheme === "enabled") {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("darkMode", "enabled")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("darkMode", "disabled")
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const technicalSkills = [
    { icon: "fab fa-html5", text: "HTML5 & Semantic Markup" },
    { icon: "fab fa-css3-alt", text: "CSS3 & Responsive Design" },
    { icon: "fab fa-js", text: "JavaScript (ES6+)" },
    { icon: "fab fa-react", text: "ReactJS & State Management" },
    { icon: "fab fa-node-js", text: "Node.js & Express" },
    { icon: "fas fa-database", text: "MongoDB & MySQL" },
    { icon: "fab fa-git-alt", text: "Git & GitHub" },
    { icon: "fas fa-server", text: "API Development & REST" },
  ]

  const personalSkills = [
    { icon: "fas fa-lightbulb", text: "Problem Solving & Critical Thinking" },
    { icon: "fas fa-search", text: "Attention to Detail" },
    { icon: "fas fa-code", text: "Clean Code Practices" },
    { icon: "fas fa-clock", text: "Time Management" },
    { icon: "fas fa-users", text: "Team Collaboration" },
    { icon: "fas fa-comments", text: "Effective Communication" },
    { icon: "fas fa-brain", text: "Emotional Intelligence" },
    { icon: "fas fa-hands-helping", text: "Strong Work Ethics" },
  ]

  const techStack = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "PHP",
    "ReactJS",
    "Angular",
    "NodeJS",
    "NextAuth",
    "MongoDB",
    "MySQL",
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="#" className="flex items-center gap-2 text-xl font-bold text-indigo-600 dark:text-indigo-400">
              <Code className="w-6 h-6" />
              PORTFOLIO
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Contact
              </button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 pt-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Hemanth Kumar Reddy.B</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                A self-taught web developer and student passionate about crafting clean, responsive, and user-centric
                web experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("skills")}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full"
                >
                  View Skills
                </Button>
                <Button
                  variant="outline"
                  className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-full bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/hemanth1.jpg"
                  alt="Hemanth Kumar Reddy.B"
                  width={350}
                  height={350}
                  className="rounded-full object-cover border-4 border-indigo-600 dark:border-indigo-400 shadow-2xl animate-pulse"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            About Me
            <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-600 dark:bg-indigo-400 rounded"></div>
          </h2>

          <div className="space-y-8">
            <div className="text-lg text-gray-600 dark:text-gray-300 space-y-6">
              <p>
                I am a Computer Science student pursuing 3rd year B.Tech at Amrita Vishwa Vidyapeetham, Coimbatore. I am
                highly interested in Full Stack Development and continuously working on improving my skills in frontend
                and backend technologies through real-world projects and certifications.
              </p>
              <p>
                I'm confident in HTML, CSS, JavaScript, and modern libraries like React and Node.js. As a freelancer,
                I've delivered multiple projects that prioritize user experience and clean code.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            My Skills
            <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-600 dark:bg-indigo-400 rounded"></div>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-8 flex items-center gap-3">
                <Code className="w-6 h-6" />
                Technical Skills
              </h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                      <i className={`${skill.icon} text-indigo-600 dark:text-indigo-400 text-xl`}></i>
                    </div>
                    <span className="font-medium">{skill.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Skills */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-8 flex items-center gap-3">
                <i className="fas fa-user text-xl"></i>
                Personal Skills
              </h3>
              <div className="space-y-4">
                {personalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                      <i className={`${skill.icon} text-indigo-600 dark:text-indigo-400 text-xl`}></i>
                    </div>
                    <span className="font-medium">{skill.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            Testimonials
            <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-600 dark:bg-indigo-400 rounded"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="text-6xl text-indigo-600 dark:text-indigo-400 opacity-20 absolute top-4 left-6 font-serif">
                "
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6 relative z-10">
                Hemanth, a 3rd-year B.Tech Computer Science student at Amrita Vishwa Vidyapeetham, is passionate about
                full-stack development, continuously improving through projects, certifications, and effectively
                applying feedback to grow.
              </p>
              <div className="font-semibold text-indigo-600 dark:text-indigo-400">
                ~ Full-stack web developer at Labmentix
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="text-6xl text-indigo-600 dark:text-indigo-400 opacity-20 absolute top-4 left-6 font-serif">
                "
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6 relative z-10">
                Under senior supervision, Hemanth supported project planning and execution, conducted strategic
                research, collaborated with cross-functional teams, and actively participated in sprint planning to
                enhance team efficiency and communication.
              </p>
              <div className="font-semibold text-indigo-600 dark:text-indigo-400">
                ~ Software Developer Intern at Bluestock.fintech
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            Contact Me
            <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-600 dark:bg-indigo-400 rounded"></div>
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <Link
                  href="mailto:hemanthbommadi@gmail.com"
                  className="text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  hemanthbommadi@gmail.com
                </Link>
              </div>

              <div className="flex items-center gap-6 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <Link
                  href="https://www.linkedin.com/in/hemanth-bommadi-42a60b2bb/"
                  target="_blank"
                  className="text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
                >
                  LinkedIn Profile
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center gap-6 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <Github className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <Link
                  href="https://github.com/Hemanthbommadi"
                  target="_blank"
                  className="text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
                >
                  GitHub Profile
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>

              <div className="text-center pt-6">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">&copy; 2025 Hemanth Kumar Reddy.B.Inc</p>
        </div>
      </footer>
    </div>
  )
}
