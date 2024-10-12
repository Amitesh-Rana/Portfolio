"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"; // Import motion from framer-motion


const projects = [
  {
    title: "Sorting Visualizer",
    description: "Built a sorting visualizer using the SFML library, integrated with web development for better visualization.",
    link: "https://github.com/amiteshrana/sorting-visualizer",
    image: "/placeholder.svg?height=200&width=300&text=Sorting+Visualizer"
  },
  {
    title: "CNN Models for Energy Disaggregation",
    description: "Trained CNN models during internship, focusing on energy disaggregation (NILM tasks).",
    image: "/placeholder.svg?height=200&width=300&text=CNN+Models"
  },
  {
    title: "Product Design Pipeline",
    description: "Developed an end-to-end pipeline for product design in a team environment.",
    image: "/placeholder.svg?height=200&width=300&text=Product+Design+Pipeline"
  }
]

const skills = [
  { name: "Data Structures & Algorithms", percentage: 90 },
  { name: "Machine Learning", percentage: 85 },
  { name: "Deep Learning", percentage: 80 },
  { name: "Python", percentage: 95 },
  { name: "C++", percentage: 85 },
  { name: "SFML", percentage: 75 },
  { name: "TensorFlow", percentage: 80 },
  { name: "PyTorch", percentage: 75 },
]

export default function AmiteshRanaPortfolio() {
  const [activeTab, setActiveTab] = useState("home")
  const [showResume, setShowResume] = useState(false)
  const [showContact, setShowContact] = useState(false)


  // Define variants for heading and description animations
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: {
      delayChildren: 0.2, // Delay for child animations
      staggerChildren: 0.05 // Staggered effect for each letter
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Define variants for each line animation
const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

  return (
    <div className={`min-h-screen flex flex-col relative  ${activeTab === 'home' ? "gradient-background":""} `}>
      <header className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg sticky top-0 z-10 transition-all duration-300">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-4 md:mb-0">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-black  to-rose-700 inline-block text-transparent bg-clip-text">Amitesh Rana</h1>
            <nav className="max-md:hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full min-w-[300px]">
              <TabsList className="w-full bg-gray-100 dark:bg-gray-700 grid grid-cols-3 md:grid-cols-3">
                <TabsTrigger value="home" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Home</TabsTrigger>
                <TabsTrigger value="projects" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Projects</TabsTrigger>
                <TabsTrigger value="skills" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Skills</TabsTrigger>
              </TabsList>
            </Tabs>
          </nav>
            <div className="flex space-x-2">
              <Button variant="default" onClick={() => setShowResume(true)}>Resume</Button>
              <Button variant="outline" onClick={() => setShowContact(true)}>Contact</Button>
            </div>
          </div>
          <nav className="pt-4 md:hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-2/3 mx-auto">
              <TabsList className="w-full bg-gray-100 dark:bg-gray-700 grid grid-cols-3 md:grid-cols-3">
                <TabsTrigger value="home" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Home</TabsTrigger>
                <TabsTrigger value="projects" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Projects</TabsTrigger>
                <TabsTrigger value="skills" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Skills</TabsTrigger>
              </TabsList>
            </Tabs>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">

        <TabsContent value="home" className="flex items-center justify-center h-full md:mt-20">
  <motion.div
    className="grid md:grid-cols-2 gap-12 items-center z-40"
    initial={{ opacity: 0, y: 20 }} // Initial state for animation
    animate={{ opacity: 1, y: 0 }}   // Animation to this state
    exit={{ opacity: 0, y: -20 }}     // Exit animation state
    transition={{ duration: 0.5 }}     // Animation duration
  >
    <div className="space-y-6">
      <motion.h2
        className="text-4xl font-bold tracking-tight text-white"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        {Array.from("Hello, I'm Amitesh Rana").map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.h2>

      {/* Line by line animation for the description */}
      <div>
        {[
          "I'm a final-year BTech student at IIT Jodhpur,",
          "majoring in Chemical Engineering with a Minor in Management.",
          "My passion lies in Data Structures and Algorithms,",
          "Machine Learning, and Deep Learning."
        ].map((line, index) => (
          <motion.p
            key={index}
            className="text-xl text-neutral-100 leading-relaxed"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 1 }} // Delay each line animation
          >
            {line}
          </motion.p>
        ))}
      </div>

      <div className="flex space-x-4">
        <Button onClick={() => setActiveTab("projects")}>View Projects</Button>
        <Button variant="outline" onClick={() => setShowContact(true)}>Contact Me</Button>
      </div>
    </div>
    <div className="relative">
      <div className="absolute inset-0"></div>
      {/* <Image
        src="/perfil.png"
        alt="Amitesh Rana"
        width={400}
        height={400}
        className="rounded-lg object-cover mx-auto"
      /> */}
    </div>
  </motion.div>
</TabsContent>


          <TabsContent value="projects">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-gray-900 dark:text-white">My Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg border-0 bg-white dark:bg-gray-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
                    {project.link && (
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="link" className="mt-4 p-0">
                          View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="skills">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-gray-900 dark:text-white">My Skills</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2 bg-gray-200 dark:bg-gray-700"/>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">My Resume</h2>
              <Button variant="ghost" onClick={() => setShowResume(false)}>Close</Button>
            </div>
            <div className="space-y-6">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Download my resume to learn more about my education, experience, and achievements.
              </p>
              <Button size="lg" className="w-full mb-8">
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
              <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Achievements</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Ranked among top performers on GeeksforGeeks coding platform</li>
                  <li>Successfully completed internship focusing on CNN models for energy disaggregation</li>
                  <li>Led team project for developing end-to-end product design pipeline</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Get in Touch</h2>
              <Button variant="ghost" onClick={() => setShowContact(false)}>Close</Button>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <form className="space-y-6">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
            <div className="flex justify-center space-x-4 mt-8">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
        </div>
      )}
      <footer className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg mt-12 fixed bottom-0 w-full">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">© 2024 Amitesh Rana. All rights reserved.</p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}