"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Button from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FaLocationArrow } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Clock,
  Code2,
  Database,
  ExternalLink,
  Download,
  Coffee,
  Zap,
  Award,
  MessageCircle,
} from "lucide-react"
import Loader from "@/components/ui/loader"
import AnimatedCard from "@/components/ui/animatedCard"
import { Reveal } from "@/components/ui/reveal"


export default function Portfolio() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading delay (e.g., until assets are ready)
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />


  return (



    <div className="min-h-screen bg-black/30 relative overflow-hidden">

      <div className="relative z-10 p-4 md:p-8">
        <div className="mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 pt-16 md:pt-24">
            <div className="mb-6"></div>

            <motion.h1
              className="text-4xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-white via-navy-blue-200 to-blue-400 bg-clip-text text-transparent">
                Transforming concepts
              </span>
              <br />
              <span className="text-white/60">into reality</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              Hi, I'm Kaustubh Biswas, a Full Stack developer based in India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <a href="#projects">
                <Button title='Explore my Work' icon={<FaLocationArrow />} position='right' />
              </a>
            </motion.div>
          </div>

          {/* About Me - Central Card */}
          <div className="w-full mx-auto mt-50">
            <div className="flex justify-center mb-16 pt-16 md:pt-24">
              <Reveal delay={0.2} x={-30} duration={0.9}>
                <Card className=" bg-gray-900/70 border-gray-700/50 shadow-xl">
                  <CardContent className="p-10 h-full">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Code2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-3xl text-white font-bold">About Me</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed text-center text-lg">
                      I'm a passionate full-stack developer with 3+ years of coding. I love exploring new technologies and create solutions using them.
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mt-50">
            {/* Featured Project - Large */}
            <Reveal delay={0.2} x={-30} duration={0.9} className="lg:col-span-2">
              <Card className="lg:col-span-2 bg-gradient-to-br from-indigo-1500/40 to-blue-1800/40 border-purple-500/20 overflow-hidden group hover:scale-[1.02] transition-all duration-500">
                <CardContent className="p-0 h-full min-h-[400px] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-1500/40 to-blue-900/40" />
                  <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                    <div>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 mb-4">Featured Project</Badge>
                      <h3 className="text-3xl font-bold text-white mb-4">Bookstore website</h3>
                      <p className="text-gray-300 mb-6">
                        A full-stack book store web application made using MERN Stack, along with secured admin route for inventory management.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary" className="bg-blue-900/50 text-blue-300">
                          MongoDB
                        </Badge>
                        <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                          Express.js
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-900/50 text-purple-300">
                          ReactJS
                        </Badge>
                        <Badge variant="secondary" className="bg-red-900/50 text-red-300">
                          Node.js
                        </Badge>
                        <Badge variant="secondary" className="bg-teal-900/50 text-teal-300">
                          Postman
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-4 justify-center ">
                      <a href="https://github.com/KaustubhBiswas/MERN_Stack_Project.git" target="_blank" rel="noopener noreferrer">
                        <Button title="GitHub Repo" icon={<FaGithub />} position="right" />
                      </a>
                    </div>
                  </div>
                  {/* Decorative 3D Element */}
                  <div className="absolute bottom-0 right-0 w-64 h-64 opacity-30">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl" />
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            {/* Timezone Flexibility */}
            <Reveal delay={0.2} x={30} duration={0.9} className="lg:col-span-2">
              <Card className="lg:col-span-2 bg-gray-1800/50 border-teal-600/50 hover:bg-gray-900/50 transition-all duration-300">
                <CardContent className="p-8 h-full min-h-[400px]">
                  <div className="flex items-start gap-4 mb-6">
                    <Clock className="w-8 h-8 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-2xl text-white font-bold mb-2">I'm very flexible with</h3>
                      <h3 className="text-2xl text-white font-bold mb-4">time zone communications</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Working across PST, EST, and GMT. I adapt my schedule to ensure seamless collaboration with teams
                    worldwide.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span>Available now</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 mt-50">


            {/* Skills */}
            <Card className="bg-gray-900/50 border-red-400/50 hover:bg-gray-800/50 transition-all duration-300 lg:col-span-2">
              <CardContent className="p-6 h-full text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold">Skills</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-sm">Full-stack Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-sm">Frontend Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span className="text-sm">Kubernetes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full" />
                    <span className="text-sm">Mobile App Development</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card className="bg-gray-900/50 border-cyan-800 hover:scale-[1.02] transition-all duration-300 lg:col-span-3">
              <CardContent className="p-6 h-full text-center text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold">Work Experience</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-cyan-300">Summer Intern, IT Services Department, Tata Steel</div>
                    <div className="text-sm text-gray-400">June 2024 - July 2024</div>
                    <div className="text-gray-300 text-sm mt-1">
                      Analyzed plant operations and Human Resource datasets to identify key performance indicators, developing interactive Tableau dashboards that
                      provided actionable insights and improved process analysis by 60%.
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Tech Stack */}
            <Card className="bg-gray-900/50 border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300">
              <CardContent className="p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-900/50 text-blue-300">
                    React
                  </Badge>
                  <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-900/50 text-purple-300">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="bg-yellow-900/50 text-yellow-300">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-900/50 text-pink-300">
                    PostgreSQL
                  </Badge>
                  <Badge variant="secondary" className="bg-indigo-900/50 text-indigo-300">
                    AWS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-gray-900/50 border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300">
              <CardContent className="p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold">Experience</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-purple-400">Senior Developer</div>
                    <div className="text-sm text-gray-400">Tech Corp • 2022-Present</div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-400">Full Stack Developer</div>
                    <div className="text-sm text-gray-400">StartupXYZ • 2020-2022</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-gray-900/50 border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300">
              <CardContent className="p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold">Let's Connect</h3>
                </div>
                <div className="space-y-3">
                  <Button variant="ghost" size="sm" className="w-full justify-start text-left hover:bg-white/5">
                    <Mail className="w-4 h-4 mr-2" />
                    alex@example.com
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-left hover:bg-white/5">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-left hover:bg-white/5">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/20">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to start your project?</h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                I'm always excited to work on new challenges and bring innovative ideas to life. Let's discuss how we
                can make your vision a reality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400/50 hover:bg-purple-900/30 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
